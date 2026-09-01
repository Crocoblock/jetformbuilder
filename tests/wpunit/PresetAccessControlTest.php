<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Exceptions\Preset_Exception;
use Jet_Form_Builder\Presets\Preset_Manager;
use Jet_Form_Builder\Presets\Types\Dynamic_Preset;
use Jet_Form_Builder\Presets\Sources\Base_Source;
use JFB_Modules\Rich_Content\Module as Rich_Content_Module;
use JFB_Modules\Security\Restricted_Preset_Notice;

/**
 * Minimal test double standing in for a source like Preset_Source_Options_Page:
 * a fixed, non-owner-based capability requirement that must never be
 * skippable via the "Restrict access" toggle. See
 * testSourceThatDisallowsRestrictionBypassIgnoresRestrictedFalse() below.
 */
class Preset_Source_Fixed_Capability_Test_Double extends Base_Source {
	public function get_id() {
		return 'fixed_capability_test_double';
	}

	public function query_source() {
		return (object) array( 'value' => 'admin-only-value' );
	}

	protected function can_get_preset() {
		return ( parent::can_get_preset() && current_user_can( 'manage_options' ) );
	}

	protected function allows_restriction_bypass(): bool {
		return false;
	}
}

/**
 * Mirrors Preset_Source_Options_Page's shape (page::prop parsing, the page's
 * own capability requirement, opt-in filter) without depending on JetEngine,
 * which isn't available in this test environment.
 *
 * Like the real class, it DOES override allows_restriction_bypass() to
 * return false: the page's capability is not about ownership of a specific
 * object, so a form author's "Restrict access" opt-out must never bypass
 * it - see testOptionsPageStyleSourceIgnoresRestrictedFalseFromTrustedConfig()
 * below.
 */
class Preset_Source_Options_Page_Style_Test_Double extends Base_Source {
	private $page = '';

	public function get_id() {
		return 'options_page_style_test_double';
	}

	public function query_source() {
		return (object) array( 'region' => 'public-region-value', 'api_key' => 'super-secret-key' );
	}

	protected function get_prop() {
		$prop       = explode( '::', parent::get_prop() );
		$this->page = $prop[0] ?? '';

		return $prop[1] ?? '';
	}

	protected function can_get_preset() {
		if ( ! parent::can_get_preset() ) {
			return false;
		}

		if ( current_user_can( 'manage_options' ) ) {
			return true;
		}

		return (bool) apply_filters(
			'jet-form-builder/preset/options-page-style-test-double/can-read',
			false,
			$this->page,
			$this->prop
		);
	}

	protected function allows_restriction_bypass(): bool {
		return false;
	}
}

class PresetAccessControlTest extends \Codeception\TestCase\WPTestCase {

	protected function tearDown(): void {
		$_GET     = array();
		$_POST    = array();
		$_REQUEST = array();
		wp_set_current_user( 0 );

		// General_Preset is not unique (Preset_Manager::general() returns the
		// same shared instance every call), so its $data must be reset
		// between tests to avoid leaking state set via set_init_data().
		Preset_Manager::instance()->general()->reset_init_data();

		$this->unregister_test_source_types();

		parent::tearDown();
	}

	/**
	 * register_source_type() has no unregister counterpart - it writes into
	 * Preset_Manager::instance()'s process-wide $_source_types array, and
	 * this suite is the only place that ever calls it. wpunit runs the
	 * whole suite in one bootstrap, so a test double left registered here
	 * would silently leak into every test file that runs after this one in
	 * the same process, including any future test asserting on the full set
	 * of registered sources. Reach past the private property via reflection
	 * rather than adding an unregister API to production code for a need
	 * that only exists in this test file.
	 */
	private function unregister_test_source_types(): void {
		$property = new \ReflectionProperty( Preset_Manager::class, '_source_types' );
		$property->setAccessible( true );

		$source_types = $property->getValue( Preset_Manager::instance() );

		foreach (
			array(
				'fixed_capability_test_double',
				'options_page_style_test_double',
			) as $test_double_id
		) {
			unset( $source_types[ $test_double_id ] );
		}

		$property->setValue( Preset_Manager::instance(), $source_types );
	}

	/**
	 * Reproduces the PoC from issues-tracker #20359: an unauthenticated
	 * visitor supplying a raw preset JSON (as if it were a rich-content
	 * field value) and pointing it at another user's user_pass via a
	 * request-controlled query var, with `_check_restriction` simply
	 * omitted so the old opt-in check never ran.
	 */
	public function testAnonymousRequestCannotReadOtherUsersPasswordViaMissingRestrictionFlag(): void {
		$victim_id = self::factory()->user->create(
			array(
				'role'      => 'administrator',
				'user_pass' => 'super-secret-password',
			)
		);

		$_REQUEST['uid'] = (string) $victim_id;

		$json = wp_json_encode(
			array(
				'jet_preset'         => 1,
				'from'                => 'user',
				'user_from'           => 'q',
				'query_var'           => 'uid',
				'current_field_prop'  => 'user_pass',
			)
		);

		$result = ( new Dynamic_Preset() )->parse_json( $json );

		$this->assertSame( '', $result );
	}

	/**
	 * Same PoC, but with the second off switch: `restricted` explicitly
	 * set to false inside the attacker-controlled JSON payload.
	 */
	public function testAnonymousRequestCannotReadOtherUsersPasswordViaRestrictedFalse(): void {
		$victim_id = self::factory()->user->create(
			array(
				'role'      => 'administrator',
				'user_pass' => 'super-secret-password',
			)
		);

		$_REQUEST['uid'] = (string) $victim_id;

		$json = wp_json_encode(
			array(
				'jet_preset'          => 1,
				'_check_restriction'  => true,
				'restricted'          => false,
				'from'                => 'user',
				'user_from'           => 'q',
				'query_var'           => 'uid',
				'current_field_prop'  => 'user_pass',
			)
		);

		$result = ( new Dynamic_Preset() )->parse_json( $json );

		$this->assertSame( '', $result );
	}

	/**
	 * The report lists Preset_Source_Query_Var as a third bypass route,
	 * because it has no meaningful can_get_preset() of its own. It stays
	 * readable on purpose: the source reads $_GET of the *current* request,
	 * so it can only ever hand the caller back a value the caller just sent
	 * themselves. There is no cross-user data here to protect, and blocking
	 * it would break every form that pre-fills a field from the URL.
	 *
	 * Asserted explicitly so that "this one is intentionally open" stays a
	 * decision on record rather than an oversight.
	 */
	public function testQueryVarSourceReturnsCallersOwnQueryString(): void {
		$_GET['secret'] = 'caller-supplied-value';

		$json = wp_json_encode(
			array(
				'jet_preset'        => 1,
				'from'              => 'query_var',
				'current_field_key' => 'secret',
			)
		);

		$result = ( new Dynamic_Preset() )->parse_json( $json );

		$this->assertSame( 'caller-supplied-value', $result );
	}

	/**
	 * An empty $_GET must read as "no such query var" (empty result), not
	 * as a permission failure. Base_Source::can_get_preset() defaults to
	 * `! empty( $this->src() )`, which would have made this throw; the
	 * source overrides it for that reason.
	 */
	public function testQueryVarSourceWithEmptyGetReturnsEmptyString(): void {
		$_GET = array();

		$json = wp_json_encode(
			array(
				'jet_preset'        => 1,
				'from'              => 'query_var',
				'current_field_key' => 'missing',
			)
		);

		$result = ( new Dynamic_Preset() )->parse_json( $json );

		$this->assertSame( '', $result );
	}

	/**
	 * The legitimate case must keep working: a logged-in user reading
	 * their own user_pass hash via a preset is allowed by
	 * Preset_Source_User::can_get_preset() (current user or edit_users).
	 */
	public function testLoggedInUserCanReadOwnDataViaPreset(): void {
		$user_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		wp_set_current_user( $user_id );

		$json = wp_json_encode(
			array(
				'jet_preset'        => 1,
				'from'               => 'user',
				'user_from'          => 'current_user',
				'current_field_prop' => 'user_email',
			)
		);

		$result = ( new Dynamic_Preset() )->parse_json( $json );

		$this->assertSame( get_userdata( $user_id )->user_email, $result );
	}

	/**
	 * A privileged user (edit_users) must still be able to read another
	 * user's data through the same preset - this is intended behaviour,
	 * not the vulnerability.
	 */
	public function testUserWithEditUsersCapCanReadOtherUsersData(): void {
		$admin_id = self::factory()->user->create( array( 'role' => 'administrator' ) );
		$other_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		wp_set_current_user( $admin_id );

		$_REQUEST['uid'] = (string) $other_id;

		$json = wp_json_encode(
			array(
				'jet_preset'         => 1,
				'from'                => 'user',
				'user_from'           => 'q',
				'query_var'           => 'uid',
				'current_field_prop'  => 'user_email',
			)
		);

		$result = ( new Dynamic_Preset() )->parse_json( $json );

		$this->assertSame( get_userdata( $other_id )->user_email, $result );
	}

	/**
	 * The "Restrict access" editor toggle (General_Preset's own `restricted`
	 * flag, saved as admin-authored post meta) must keep working: when a
	 * site owner explicitly turns it off, the preset value must render for
	 * every visitor regardless of ownership, exactly as the toggle's own
	 * help text promises ("Always set default value from preset...").
	 * General_Preset::trusts_restriction_flag() is what allows this.
	 */
	public function testGeneralPresetRestrictedFalseStillAppliesToEveryVisitor(): void {
		$owner_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$post_id  = self::factory()->post->create( array( 'post_author' => $owner_id ) );

		// Anonymous visitor - not the post author, no elevated capability.
		wp_set_current_user( 0 );

		$field_name = 'title_field';
		$general    = Preset_Manager::instance()->general();
		$general->set_init_data(
			array(
				'enabled'    => true,
				'restricted' => false,
				'from'       => 'post',
				'post_from'  => 'query_var',
				'query_var'  => 'preview_post_id',
				'fields_map' => array(
					$field_name => array( 'prop' => 'post_title' ),
				),
			)
		);
		$_REQUEST['preview_post_id'] = (string) $post_id;

		$result = $general->get_source( array( 'name' => $field_name ) )->result();

		$this->assertSame( get_post( $post_id )->post_title, $result );
	}

	/**
	 * The same `restricted: false` flag must NOT bypass permission checks
	 * when it arrives via Dynamic_Preset (i.e. JSON that can originate from
	 * a request-influenced field value), since Dynamic_Preset does not opt
	 * in via trusts_restriction_flag(). This is the exact bypass fixed for
	 * issues-tracker #20359 - re-asserted here to guard against a future
	 * change accidentally making Dynamic_Preset trust the flag too.
	 */
	public function testDynamicPresetRestrictedFalseNeverBypassesPermission(): void {
		$owner_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$post_id  = self::factory()->post->create( array( 'post_author' => $owner_id ) );

		wp_set_current_user( 0 );

		$json = wp_json_encode(
			array(
				'jet_preset' => 1,
				'restricted' => false,
				'from'       => 'post',
				'post_from'  => 'query_var',
				'query_var'  => 'preview_post_id',
				'current_field_prop' => 'post_title',
			)
		);
		$_REQUEST['preview_post_id'] = (string) $post_id;

		$result = ( new Dynamic_Preset() )->parse_json( $json );

		$this->assertSame( '', $result );
	}

	/**
	 * General_Preset is a shared (non-unique) instance for the lifetime of
	 * a request. If rendering Form A (restricted: false) left stale data on
	 * that shared instance, and Form B (rendered afterwards on the same
	 * page, protection left on / no `restricted` key in its own meta)
	 * merged its own config on top without first resetting, Form B could
	 * incorrectly inherit Form A's bypass via array_merge() - exposing
	 * Form B's own preset data (which the current viewer has no ownership
	 * of) to every visitor, regardless of Form B's own configuration.
	 * Preset_Manager::set_form_id() must reset the shared instance's $data
	 * before loading each form's config to prevent this. Found during
	 * review, not part of the original #20359 report.
	 */
	public function testFormRenderOrderDoesNotLeakRestrictedFlagAcrossForms(): void {
		$field_name = 'title_field';

		// Form A: a post the visitor doesn't own either, reachable via its
		// own query var so this doesn't depend on a global $post being set
		// up (get_the_ID() is unreliable in a CLI test run, and a Form A
		// that silently failed to resolve would make this test pass for the
		// wrong reason - it would never set `restricted` on the shared
		// instance in the first place).
		$form_a_post_id = self::factory()->post->create(
			array(
				'post_author' => self::factory()->user->create( array( 'role' => 'subscriber' ) ),
				'post_title'  => 'Form A public title',
			)
		);
		$_REQUEST['form_a_post_id'] = (string) $form_a_post_id;

		$form_a_id = self::factory()->post->create( array( 'post_type' => 'jet-form-builder' ) );
		update_post_meta(
			$form_a_id,
			'_jf_preset',
			wp_json_encode(
				array(
					'enabled'    => true,
					'restricted' => false,
					'from'       => 'post',
					'post_from'  => 'query_var',
					'query_var'  => 'form_a_post_id',
					'fields_map' => array( $field_name => array( 'prop' => 'post_title' ) ),
				)
			)
		);

		$owner_id  = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$secret_id = self::factory()->post->create(
			array(
				'post_author' => $owner_id,
				'post_title'  => 'Form B secret title',
			)
		);
		$form_b_id = self::factory()->post->create( array( 'post_type' => 'jet-form-builder' ) );
		update_post_meta(
			$form_b_id,
			'_jf_preset',
			wp_json_encode(
				array(
					'enabled'    => true,
					// No 'restricted' key - protection intentionally left on.
					'from'       => 'post',
					'post_from'  => 'query_var',
					'query_var'  => 'form_b_post_id',
					'fields_map' => array( $field_name => array( 'prop' => 'post_title' ) ),
				)
			)
		);
		$_REQUEST['form_b_post_id'] = (string) $secret_id;

		// Anonymous visitor - owns neither post.
		wp_set_current_user( 0 );

		// Render Form A first (sets the shared instance's restricted=>false).
		Preset_Manager::instance()->set_form_id( $form_a_id );

		// Guard: Form A must really have resolved and bypassed the check,
		// otherwise the assertion below would pass vacuously.
		$this->assertSame(
			get_post( $form_a_post_id )->post_title,
			Preset_Manager::instance()->general()->get_source( array( 'name' => $field_name ) )->result(),
			'Form A should render via its own restricted=>false opt-out'
		);

		// Then Form B, on the same request/page.
		Preset_Manager::instance()->set_form_id( $form_b_id );

		$this->expectException( Preset_Exception::class );

		Preset_Manager::instance()->general()->get_source( array( 'name' => $field_name ) )->result();
	}

	/**
	 * Regression guard for the fix to the fix: a field block's "Default
	 * Value" is a Dynamic_Preset, but its JSON lives in the form's own post
	 * content and requires `edit_post` to write. The editor exposes a
	 * "Restrict access" toggle for it (BlockDefaultValue.js -> DynamicPreset
	 * .js), so form authors have legitimately been switching it off for
	 * years to pre-fill public forms from a post they don't own.
	 *
	 * Deciding trust by preset class alone would silently blank all of
	 * those on update. Preset_Manager::get_field_value() therefore declares
	 * this origin trusted, and the opt-out is honoured.
	 */
	public function testFieldDefaultValueHonoursRestrictedFalseForAnonymousVisitor(): void {
		$owner_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$post_id  = self::factory()->post->create(
			array(
				'post_author' => $owner_id,
				'post_title'  => 'Public product name',
			)
		);

		// Anonymous visitor - not the post author.
		wp_set_current_user( 0 );

		$_REQUEST['product_id'] = (string) $post_id;

		$preset = wp_json_encode(
			array(
				'jet_preset'         => 1,
				'restricted'         => false,
				'from'               => 'post',
				'post_from'          => 'query_var',
				'query_var'          => 'product_id',
				'current_field_prop' => 'post_title',
			)
		);

		$result = Preset_Manager::instance()->get_field_value(
			array(
				'name'    => 'product_field',
				'default' => $preset,
			)
		);

		$this->assertSame( 'Public product name', $result );
	}

	/**
	 * The other half of the same split: the identical JSON arriving through
	 * an untrusted runtime path (Rich_Content / conditions /
	 * jet_fb_parse_dynamic all call parse_json()) must still be checked,
	 * because there the string can come from a submitted field value. This
	 * is the actual #20359 attack surface.
	 */
	public function testSameRestrictedFalseJsonIsIgnoredOnUntrustedParsePath(): void {
		$owner_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$post_id  = self::factory()->post->create(
			array(
				'post_author' => $owner_id,
				'post_title'  => 'Private draft title',
			)
		);

		wp_set_current_user( 0 );

		$_REQUEST['product_id'] = (string) $post_id;

		$preset = wp_json_encode(
			array(
				'jet_preset'         => 1,
				'restricted'         => false,
				'from'               => 'post',
				'post_from'          => 'query_var',
				'query_var'          => 'product_id',
				'current_field_prop' => 'post_title',
			)
		);

		$this->assertSame( '', jet_fb_parse_dynamic( $preset ) );
	}

	/**
	 * set_check_restriction() used to be the only thing that enabled the
	 * permission check at all - which is how #20359 happened. It is now a
	 * deprecated no-op and must not be able to re-open the bypass.
	 */
	public function testDeprecatedSetCheckRestrictionCannotWeakenPermission(): void {
		$victim_id = self::factory()->user->create( array( 'role' => 'administrator' ) );

		wp_set_current_user( 0 );

		$_REQUEST['uid'] = (string) $victim_id;

		$preset = new Dynamic_Preset();
		$preset->set_init_data(
			array(
				'jet_preset'         => 1,
				'from'               => 'user',
				'user_from'          => 'q',
				'query_var'          => 'uid',
				'current_field_prop' => 'user_pass',
			)
		);

		$this->setExpectedIncorrectUsage( 'Jet_Form_Builder\Presets\Types\Base_Preset::set_check_restriction' );
		$preset->set_check_restriction( false );

		$this->expectException( Preset_Exception::class );
		$preset->get_source( array( 'name' => 'pass_field' ) )->result();
	}

	/**
	 * A source MAY opt out of the "Restrict access" bypass entirely by
	 * overriding allows_restriction_bypass(), and then `restricted: false`
	 * must be ignored even via General_Preset (which otherwise legitimately
	 * trusts that flag).
	 *
	 * Preset_Source_Options_Page is the first-party example of exactly this
	 * (see testOptionsPageStyleSourceIgnoresRestrictedFalseFromTrustedConfig()
	 * below, which mirrors it via a test double). This test exercises the
	 * same mechanism through a simpler double, for a source guarding
	 * something with no ownership concept at all.
	 */
	public function testSourceThatDisallowsRestrictionBypassIgnoresRestrictedFalse(): void {
		Preset_Manager::instance()->register_source_type( new Preset_Source_Fixed_Capability_Test_Double() );

		// Anonymous visitor, no manage_options capability.
		wp_set_current_user( 0 );

		$general = Preset_Manager::instance()->general();
		$general->set_init_data(
			array(
				'enabled'    => true,
				'restricted' => false,
				'from'       => 'fixed_capability_test_double',
				'fields_map' => array(
					'admin_field' => array( 'prop' => 'value' ),
				),
			)
		);

		$this->expectException( Preset_Exception::class );

		$general->get_source( array( 'name' => 'admin_field' ) )->result();
	}

	/**
	 * A Dynamic_Preset instance is reused across parse_json() calls
	 * (Rich_Content\Module keeps one for the whole request) and
	 * set_init_data() merges, so `restricted` from an earlier payload must
	 * not survive into a later one that doesn't set it. Found in review.
	 */
	public function testReusedDynamicPresetDoesNotCarryRestrictedBetweenParses(): void {
		$owner_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$post_id  = self::factory()->post->create(
			array(
				'post_author' => $owner_id,
				'post_title'  => 'Second payload title',
			)
		);

		wp_set_current_user( 0 );
		$_REQUEST['pid'] = (string) $post_id;
		$_GET['pid']     = (string) $post_id;

		$shared = new Dynamic_Preset();

		// First payload carries restricted:false on a harmless source.
		$shared->parse_json(
			wp_json_encode(
				array(
					'jet_preset'        => 1,
					'restricted'        => false,
					'from'              => 'query_var',
					'current_field_key' => 'pid',
				)
			)
		);

		// Second payload sets no `restricted` at all - must stay protected.
		$second = wp_json_encode(
			array(
				'jet_preset'         => 1,
				'from'               => 'post',
				'post_from'          => 'query_var',
				'query_var'          => 'pid',
				'current_field_prop' => 'post_title',
			)
		);

		$this->assertSame( '', $shared->parse_json( $second ) );
	}

	/**
	 * get_preset_type_manager() only clones unique preset types, so a
	 * non-unique one is the shared instance. get_field_value() must not
	 * leave `trusted_origin = true` stuck on it. Found in review.
	 */
	public function testGetFieldValueRestoresTrustFlagOnSharedInstance(): void {
		$general = Preset_Manager::instance()->general();
		$general->reset_init_data();

		$before = $general->trusts_restriction_flag();

		Preset_Manager::instance()->get_field_value(
			array(
				'name'    => 'some_field',
				'default' => wp_json_encode(
					array(
						'jet_preset'        => 1,
						'from'              => 'query_var',
						'current_field_key' => 'nothing_here',
					)
				),
			)
		);

		$this->assertSame( $before, $general->trusts_restriction_flag() );
	}

	/**
	 * reset_init_data() must clear the preset DATA without discarding the
	 * trust the call site declared.
	 *
	 * This is not academic: jet_fb_parse_dynamic_trusted() declares trust and
	 * then calls parse_json(), which resets data on the way in. An earlier
	 * version of reset_init_data() also nulled $trusted_origin, so the
	 * declaration was wiped before it was ever read and the helper silently
	 * did nothing.
	 */
	public function testResetInitDataKeepsDeclaredTrust(): void {
		$preset = new Dynamic_Preset();

		$this->assertFalse(
			$preset->trusts_restriction_flag(),
			'Dynamic_Preset must be untrusted until a call site says otherwise'
		);

		$preset->trust_restriction_flag( true );
		$preset->reset_init_data( array( 'from' => 'post' ) );

		$this->assertTrue(
			$preset->trusts_restriction_flag(),
			'reset_init_data() must not discard the call site declaration'
		);

		// ...and it really did reset the data.
		$preset->reset_init_data();
		$this->assertSame( array(), $preset->data );
	}

	/**
	 * End-to-end for the pair of helpers: the same preset JSON with
	 * `restricted: false` must resolve on the trusted helper (admin-authored
	 * settings: validation rules, date limits, conditions, dynamic value) and
	 * stay blocked on the untrusted one (a submitted field value).
	 */
	public function testTrustedHelperHonoursRestrictedFalseAndUntrustedDoesNot(): void {
		$owner_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$post_id  = self::factory()->post->create(
			array(
				'post_author' => $owner_id,
				'post_title'  => 'Helper trust title',
			)
		);

		wp_set_current_user( 0 );
		$_REQUEST['rid'] = (string) $post_id;

		$opted_out = wp_json_encode(
			array(
				'jet_preset'         => 1,
				'restricted'         => false,
				'from'               => 'post',
				'post_from'          => 'query_var',
				'query_var'          => 'rid',
				'current_field_prop' => 'post_title',
			)
		);

		$this->assertSame( 'Helper trust title', jet_fb_parse_dynamic_trusted( $opted_out ) );
		$this->assertSame( '', jet_fb_parse_dynamic( $opted_out ) );
	}

	/**
	 * rich_trusted() must keep the established macros -> preset -> shortcodes
	 * callback order. Removing and re-adding the preset callback at the same
	 * priority moves it after apply_shortcodes(), leaving a shortcode returned
	 * by the preset unresolved and permanently reordering ordinary rich() calls.
	 */
	public function testTrustedRichContentPreservesPresetBeforeShortcodeOrder(): void {
		$_GET['rich_order'] = '[jfb_rich_order_test]';
		add_shortcode(
			'jfb_rich_order_test',
			static function () {
				return 'expanded-after-preset';
			}
		);

		$json = wp_json_encode(
			array(
				'jet_preset'        => 1,
				'from'              => 'query_var',
				'current_field_key' => 'rich_order',
			)
		);

		/** @var Rich_Content_Module $rich */
		$rich = jet_form_builder()->module( 'rich-content' );

		try {
			$this->assertSame( 'expanded-after-preset', $rich->rich_trusted( $json ) );
			$this->assertSame( 'expanded-after-preset', Rich_Content_Module::rich( $json ) );
		} finally {
			remove_shortcode( 'jfb_rich_order_test' );
		}
	}

	/**
	 * A rich-trusted attribute is admin-authored, but a macro inside it may be
	 * expanded from request context. Its expansion must not acquire trust merely
	 * because the surrounding stored attribute is trusted.
	 */
	public function testTrustedRichContentTreatsMacroOutputAsUntrusted(): void {
		$owner_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$post_id  = self::factory()->post->create(
			array(
				'post_author' => $owner_id,
				'post_title'  => 'Macro private title',
			)
		);

		wp_set_current_user( 0 );
		$_REQUEST['macro_post'] = (string) $post_id;

		$injected_json = wp_json_encode(
			array(
				'jet_preset'         => 1,
				'restricted'         => false,
				'from'               => 'post',
				'post_from'          => 'query_var',
				'query_var'          => 'macro_post',
				'current_field_prop' => 'post_title',
			)
		);
		$macro_callback = static function ( $value, $name ) use ( $injected_json ) {
			return 'test::injected_preset' === $name ? $injected_json : $value;
		};

		add_filter( 'jet-form-builder/custom-macro', $macro_callback, 10, 2 );

		/** @var Rich_Content_Module $rich */
		$rich = jet_form_builder()->module( 'rich-content' );

		try {
			$this->assertSame( '', $rich->rich_trusted( '%test::injected_preset%' ) );
		} finally {
			remove_filter( 'jet-form-builder/custom-macro', $macro_callback, 10 );
		}
	}

	/**
	 * A nested ordinary rich() call remains an untrusted origin even while an
	 * outer admin-authored value is using rich_trusted(). Trust belongs to one
	 * filter invocation, not to the shared hook or Dynamic_Preset instance.
	 */
	public function testTrustedRichContentDoesNotTrustNestedOrdinaryCall(): void {
		$owner_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$post_id  = self::factory()->post->create(
			array(
				'post_author' => $owner_id,
				'post_title'  => 'Nested private title',
			)
		);

		wp_set_current_user( 0 );
		$_REQUEST['nested_post'] = (string) $post_id;

		$nested_json = wp_json_encode(
			array(
				'jet_preset'         => 1,
				'restricted'         => false,
				'from'               => 'post',
				'post_from'          => 'query_var',
				'query_var'          => 'nested_post',
				'current_field_prop' => 'post_title',
			)
		);

		$nested_result = null;
		$inside_nested = false;
		$callback      = static function ( $content ) use ( $nested_json, &$nested_result, &$inside_nested ) {
			if ( $inside_nested ) {
				return $content;
			}

			$inside_nested = true;

			try {
				$nested_result = Rich_Content_Module::rich( $nested_json );
			} finally {
				$inside_nested = false;
			}

			return $content;
		};

		add_filter( 'jet-form-builder/rich-content', $callback, 9 );

		/** @var Rich_Content_Module $rich */
		$rich = jet_form_builder()->module( 'rich-content' );

		try {
			$this->assertSame( 'outer value', $rich->rich_trusted( 'outer value' ) );
			$this->assertSame( '', $nested_result );
		} finally {
			remove_filter( 'jet-form-builder/rich-content', $callback, 9 );
		}
	}

	/**
	 * A preset-sanitize callback runs while a trusted source is resolving. An
	 * ordinary nested rich() call from that public filter must use an untrusted
	 * Dynamic_Preset instance, not the trusted one currently being resolved.
	 */
	public function testTrustedRichContentDoesNotTrustNestedPresetSanitizeCall(): void {
		$owner_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$post_id  = self::factory()->post->create(
			array(
				'post_author' => $owner_id,
				'post_title'  => 'Preset sanitize private title',
			)
		);

		wp_set_current_user( 0 );
		$_REQUEST['outer_post']  = (string) $post_id;
		$_REQUEST['nested_post'] = (string) $post_id;

		$outer_json = wp_json_encode(
			array(
				'jet_preset'         => 1,
				'restricted'         => false,
				'from'               => 'post',
				'post_from'          => 'query_var',
				'query_var'          => 'outer_post',
				'current_field_prop' => 'post_title',
			)
		);
		$nested_json = wp_json_encode(
			array(
				'jet_preset'         => 1,
				'restricted'         => false,
				'from'               => 'post',
				'post_from'          => 'query_var',
				'query_var'          => 'nested_post',
				'current_field_prop' => 'post_title',
			)
		);

		$nested_result = null;
		$inside_nested = false;
		$callback      = static function ( $allowed ) use ( $nested_json, &$nested_result, &$inside_nested ) {
			if ( $inside_nested ) {
				return $allowed;
			}

			$inside_nested = true;

			try {
				$nested_result = Rich_Content_Module::rich( $nested_json );
			} finally {
				$inside_nested = false;
			}

			return $allowed;
		};

		add_filter( 'jet-form-builder/preset-sanitize', $callback, 10, 2 );

		/** @var Rich_Content_Module $rich */
		$rich = jet_form_builder()->module( 'rich-content' );

		try {
			$this->assertSame( 'Preset sanitize private title', $rich->rich_trusted( $outer_json ) );
			$this->assertSame( '', $nested_result );
		} finally {
			remove_filter( 'jet-form-builder/preset-sanitize', $callback, 10 );
		}
	}

	/**
	 * Parsing a rich-no-preset attribute must not remove and re-register the
	 * dynamic callback, otherwise later rich_trusted() calls lose its trusted
	 * filter argument.
	 */
	public function testRichWithoutPresetDoesNotDisableLaterTrustedParsing(): void {
		$owner_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$post_id  = self::factory()->post->create(
			array(
				'post_author' => $owner_id,
				'post_title'  => 'Trusted after no-preset title',
			)
		);

		wp_set_current_user( 0 );
		$_REQUEST['trusted_after_no_preset'] = (string) $post_id;

		$trusted_json = wp_json_encode(
			array(
				'jet_preset'         => 1,
				'restricted'         => false,
				'from'               => 'post',
				'post_from'          => 'query_var',
				'query_var'          => 'trusted_after_no_preset',
				'current_field_prop' => 'post_title',
			)
		);

		/** @var Rich_Content_Module $rich */
		$rich = jet_form_builder()->module( 'rich-content' );

		$this->assertSame( 'plain value', $rich->rich_without_preset( 'plain value' ) );
		$this->assertSame( 'Trusted after no-preset title', $rich->rich_trusted( $trusted_json ) );
	}

	/**
	 * Trust is an opt-out of the *ownership* check only when the preset says
	 * so. Without `restricted: false` the trusted helper must still refuse -
	 * otherwise marking a call site trusted would silently open everything it
	 * parses.
	 */
	public function testTrustedHelperStillChecksPermissionWithoutOptOut(): void {
		$victim_id = self::factory()->user->create( array( 'role' => 'administrator' ) );

		wp_set_current_user( 0 );
		$_REQUEST['uid'] = (string) $victim_id;

		$json = wp_json_encode(
			array(
				'jet_preset'         => 1,
				'from'               => 'user',
				'user_from'          => 'q',
				'query_var'          => 'uid',
				'current_field_prop' => 'user_pass',
			)
		);

		$this->assertSame( '', jet_fb_parse_dynamic_trusted( $json ) );
	}

	/**
	 * `jet-form-builder/preset-sanitize` must be able to further restrict
	 * access even on a preset whose author switched "Restrict access" off -
	 * otherwise the filter is silently inert on exactly the path where an
	 * integrator most wants it. Found in review.
	 */
	public function testPresetSanitizeFilterCanStillDenyAnOptedOutPreset(): void {
		$owner_id = self::factory()->user->create( array( 'role' => 'subscriber' ) );
		$post_id  = self::factory()->post->create( array( 'post_author' => $owner_id ) );

		wp_set_current_user( 0 );
		$_REQUEST['pid'] = (string) $post_id;

		$deny = static function () {
			return false;
		};
		add_filter( 'jet-form-builder/preset-sanitize', $deny, 10, 2 );

		try {
			$general = Preset_Manager::instance()->general();
			$general->reset_init_data(
				array(
					'enabled'    => true,
					'restricted' => false,
					'from'       => 'post',
					'post_from'  => 'query_var',
					'query_var'  => 'pid',
					'fields_map' => array( 'title_field' => array( 'prop' => 'post_title' ) ),
				)
			);

			$this->expectException( Preset_Exception::class );

			$general->get_source( array( 'name' => 'title_field' ) )->result();
		} finally {
			remove_filter( 'jet-form-builder/preset-sanitize', $deny, 10 );
		}
	}

	/**
	 * Options Page is the one first-party source that locks the "Restrict
	 * access" opt-out unconditionally (allows_restriction_bypass() =>
	 * false), even for General_Preset's own admin-authored config. Unlike
	 * Post/User/Term, this capability isn't tied to ownership of the
	 * current object - it can gate a site-wide secret - so it must not be
	 * bypassable by a toggle a form author controls, regardless of how
	 * trusted the config it lives in is.
	 *
	 * An earlier version of this source left the bypass open, trading full
	 * closure of issues-tracker #20359 for compatibility with sites that
	 * pre-filled a public value (a region list) with the toggle off. That
	 * left a residual disclosure route (anyone with `edit_post` on a form
	 * could flip the toggle and read any field on the page, sensitive or
	 * not) and was reverted. Sites that relied on the old opt-out are
	 * flagged by Restricted_Preset_Notice and pointed at the `can-read`
	 * filter (see testOptionsPageStyleSourceCanBeOptedInViaFilter() below)
	 * as the supported replacement.
	 */
	public function testOptionsPageStyleSourceIgnoresRestrictedFalseFromTrustedConfig(): void {
		Preset_Manager::instance()->register_source_type( new Preset_Source_Options_Page_Style_Test_Double() );

		// Anonymous visitor, no manage_options capability.
		wp_set_current_user( 0 );

		$general = Preset_Manager::instance()->general();
		$general->reset_init_data(
			array(
				'enabled'    => true,
				'restricted' => false,
				'from'       => 'options_page_style_test_double',
				'fields_map' => array(
					'region_field' => array( 'prop' => 'site_settings::region' ),
				),
			)
		);

		$this->expectException( Preset_Exception::class );

		$general->get_source( array( 'name' => 'region_field' ) )->result();
	}

	/**
	 * The same `restricted: false` arriving as preset JSON in a field value
	 * (Dynamic_Preset::parse_json(), i.e. the reported #20359 attack) is an
	 * untrusted origin - the flag is ignored there regardless of
	 * allows_restriction_bypass(), so the capability check always runs.
	 */
	public function testOptionsPageStyleSourceIgnoresRestrictedFalseFromUntrustedJson(): void {
		Preset_Manager::instance()->register_source_type( new Preset_Source_Options_Page_Style_Test_Double() );

		wp_set_current_user( 0 );

		$json = wp_json_encode(
			array(
				'jet_preset'         => 1,
				'restricted'         => false,
				'from'               => 'options_page_style_test_double',
				'current_field_prop' => 'site_settings::api_key',
			)
		);

		$this->assertSame( '', ( new Dynamic_Preset() )->parse_json( $json ) );
	}

	/**
	 * Preset_Source_Options_Page::can_get_preset() (compatibility/jet-engine/
	 * preset-sources/preset-source-options-page.php) requires the capability
	 * declared by the page itself, but exposes an opt-in filter
	 * (`jet-form-builder/preset/options-page/can-read`) so site owners can
	 * explicitly mark a specific, non-sensitive field as readable without
	 * that capability - e.g. a public dropdown of regions used only to
	 * pre-fill a form field, which some sites may have relied on before
	 * this hardening. JetEngine itself isn't available in this test
	 * environment, so this test exercises the same filter/capability
	 * pattern via a test double rather than the real class.
	 */
	public function testOptionsPageStyleSourceCanBeOptedInViaFilter(): void {
		Preset_Manager::instance()->register_source_type( new Preset_Source_Options_Page_Style_Test_Double() );

		wp_set_current_user( 0 );

		$callback = function ( $allowed, $page, $prop ) {
			return ( 'site_settings' === $page && 'region' === $prop );
		};
		add_filter( 'jet-form-builder/preset/options-page-style-test-double/can-read', $callback, 10, 3 );

		try {
			$general = Preset_Manager::instance()->general();
			$general->set_init_data(
				array(
					'enabled'    => true,
					'from'       => 'options_page_style_test_double',
					'fields_map' => array(
						'region_field' => array( 'prop' => 'site_settings::region' ),
					),
				)
			);

			$result = $general->get_source( array( 'name' => 'region_field' ) )->result();

			$this->assertSame( 'public-region-value', $result );
		} finally {
			remove_filter( 'jet-form-builder/preset/options-page-style-test-double/can-read', $callback, 10 );
		}
	}

	/**
	 * Same as above, but the filter denies this specific field - must stay
	 * blocked even for an opt-in-capable source, i.e. the filter is
	 * per-field, not a blanket switch.
	 */
	public function testOptionsPageStyleSourceStaysBlockedWhenFilterDoesNotOptIn(): void {
		Preset_Manager::instance()->register_source_type( new Preset_Source_Options_Page_Style_Test_Double() );

		wp_set_current_user( 0 );

		$general = Preset_Manager::instance()->general();
		$general->set_init_data(
			array(
				'enabled'    => true,
				'from'       => 'options_page_style_test_double',
				'fields_map' => array(
					'secret_field' => array( 'prop' => 'site_settings::api_key' ),
				),
			)
		);

		$this->expectException( Preset_Exception::class );

		$general->get_source( array( 'name' => 'secret_field' ) )->result();
	}

	/**
	 * Restricted_Preset_Notice::find_in_general_preset() must flag a form
	 * whose own Preset settings (`_jf_preset`) read an Options Page value
	 * with `restricted: false` - the one legacy config this lockdown broke.
	 * A site owner relying on the old opt-out needs to be told which form
	 * to open and which field to look at.
	 */
	public function testScannerFlagsFormWithOptionsPageOptOutInGeneralPreset(): void {
		$form_id = self::factory()->post->create( array( 'post_type' => 'jet-form-builder' ) );
		update_post_meta(
			$form_id,
			'_jf_preset',
			wp_json_encode(
				array(
					'enabled'    => true,
					'restricted' => false,
					'from'       => 'option_page',
					'fields_map' => array(
						'region_field' => array( 'prop' => 'site_settings::region' ),
					),
				)
			)
		);

		$notice = new Restricted_Preset_Notice();
		$method = new \ReflectionMethod( $notice, 'get_affected_form' );
		$method->setAccessible( true );

		$result = $method->invoke( $notice, $form_id );

		$this->assertNotEmpty( $result, 'Form must be flagged' );
		$this->assertStringContainsString( 'region_field', implode( ' ', $result['places'] ) );
		$this->assertStringContainsString( 'Options Page', implode( ' ', $result['places'] ) );
		$this->assertTrue( $result['has_options_page'] );
	}

	/**
	 * Action comparators are stored under `default`, and Options Page ignores
	 * `restricted: false`. The scanner must therefore report this legacy
	 * combination and carry a source flag for the remediation paragraph.
	 */
	public function testScannerFlagsOptedOutOptionsPagePresetInActionConditionDefault(): void {
		$form_id = self::factory()->post->create( array( 'post_type' => 'jet-form-builder' ) );
		$preset  = wp_json_encode(
			array(
				'jet_preset'         => 1,
				'restricted'         => false,
				'from'               => 'option_page',
				'current_field_prop' => 'site_settings::region',
			)
		);

		update_post_meta(
			$form_id,
			'_jf_actions',
			wp_json_encode(
				array(
					array(
						'type'       => 'send_email',
						'conditions' => array(
							array(
								'type'    => 'field',
								'default' => wp_json_encode(
									array(
										'jet_preset' => 1,
										'from'       => 'post',
									)
								),
							),
							array(
								'type'    => 'field',
								'default' => $preset,
							),
						),
					),
				)
			)
		);

		$notice = new Restricted_Preset_Notice();
		$method = new \ReflectionMethod( $notice, 'get_affected_form' );
		$method->setAccessible( true );

		$result = $method->invoke( $notice, $form_id );

		$this->assertNotEmpty( $result, 'Action condition must be flagged' );
		$this->assertStringContainsString( 'send_email', implode( ' ', $result['places'] ) );
		$this->assertTrue( $result['has_options_page'] );
	}

	/**
	 * The `restricted: false` opt-out on a Post/User/Term General_Preset is
	 * still the legitimate, working mechanism from testGeneralPresetRestrictedFalseStillAppliesToEveryVisitor()
	 * above - the Options Page lockdown must not make the scanner flag
	 * unrelated forms that never touched an Options Page.
	 */
	public function testScannerIgnoresGeneralPresetOptOutForNonOptionsPageSource(): void {
		$form_id = self::factory()->post->create( array( 'post_type' => 'jet-form-builder' ) );
		update_post_meta(
			$form_id,
			'_jf_preset',
			wp_json_encode(
				array(
					'enabled'    => true,
					'restricted' => false,
					'from'       => 'post',
					'post_from'  => 'current_post',
					'fields_map' => array(
						'title_field' => array( 'prop' => 'post_title' ),
					),
				)
			)
		);

		$notice = new Restricted_Preset_Notice();
		$method = new \ReflectionMethod( $notice, 'get_affected_form' );
		$method->setAccessible( true );

		$this->assertSame( array(), $method->invoke( $notice, $form_id ) );
	}

	/**
	 * has_options_page_form() decides whether the notice shows the
	 * Options-Page-specific paragraph. It must use machine-readable scan data,
	 * not localized or truncated presentation labels.
	 */
	public function testHasOptionsPageFormDetectsOnlyOptionsPagePlaces(): void {
		$notice = new Restricted_Preset_Notice();
		$method = new \ReflectionMethod( $notice, 'has_options_page_form' );
		$method->setAccessible( true );

		$this->assertTrue(
			$method->invoke(
				$notice,
				array(
					array(
						'places'           => array( 'translated presentation label' ),
						'has_options_page' => true,
					),
				)
			)
		);

		$this->assertFalse(
			$method->invoke(
				$notice,
				array(
					array(
						'places'           => array( 'form Preset (Options Page) on: region_field' ),
						'has_options_page' => false,
					),
					array( 'places' => array( 'validation rule on "email"' ) ),
				)
			)
		);
	}

	/**
	 * Adding detectors changes which forms can enter tracked_ids, so an old
	 * schema-1 notice must force a full scan rather than rescan those IDs only.
	 */
	public function testRestrictedPresetScannerRejectsPreviousScanSchema(): void {
		$notice = new Restricted_Preset_Notice();
		$method = new \ReflectionMethod( $notice, 'notice_uses_current_scan_schema' );
		$method->setAccessible( true );

		$this->assertSame( '2', Restricted_Preset_Notice::SCAN_SCHEMA_VERSION );
		$this->assertFalse( $method->invoke( $notice, array( 'version' => '3.5.0:1' ) ) );
		$this->assertTrue( $method->invoke( $notice, array( 'version' => '3.5.0:2' ) ) );
	}
}
