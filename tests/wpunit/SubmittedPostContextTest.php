<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Form_Handler;
use Jet_Form_Builder\Live_Form;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Classes\Security\Submitted_Post_Context;
use JFB_Modules\Actions_V2\Redirect_To_Page\Redirect_To_Page_Action;

/**
 * A submission may only reuse the readable post for which its form was rendered.
 * Hidden values computed on the server must not disclose a different post.
 */
class SubmittedPostContextTest extends \Codeception\TestCase\WPTestCase {

	private $saved_handler;
	private $saved_globals;
	private $admin;
	private $owner;
	private $subscriber;
	private $form_id;
	private $blocks;

	protected function setUp(): void {
		parent::setUp();

		$this->saved_handler = jet_form_builder()->form_handler;
		$this->saved_globals = array(
			'post'       => $GLOBALS['post'] ?? null,
			'authordata' => $GLOBALS['authordata'] ?? null,
			'post_data'  => $_POST,
			'request'    => $_REQUEST,
			'cookie'     => $_COOKIE,
			'server'     => $_SERVER,
		);
		$this->admin        = self::factory()->user->create( array( 'role' => 'administrator' ) );
		$this->owner        = self::factory()->user->create(
			array( 'role' => 'author', 'display_name' => 'Owner [A-12] Україна', 'user_email' => 'post-owner@example.org' )
		);
		$this->subscriber   = self::factory()->user->create( array( 'role' => 'subscriber' ) );

		$this->blocks = '';
		foreach ( $this->post_sources() as $source ) {
			$this->blocks .= $this->block(
				'hidden-field',
				array(
					'name'               => $source,
					'render'             => false,
					'field_value'        => $source,
					'hidden_value_field' => '_context_canary',
					'default'            => '',
				)
			);
		}
		$this->blocks .= $this->block(
			'hidden-field',
			array( 'name' => 'manual', 'render' => false, 'field_value' => 'manual_input', 'hidden_value' => 'Order [A-12] & "Україна"', 'default' => '' )
		);
		$this->blocks .= $this->block( 'submit-field', array( 'label' => 'Submit' ) );
		$this->form_id = $this->create_form();
		$this->reset_handler();
		wp_set_current_user( 0 );
		$GLOBALS['authordata'] = null;
	}

	protected function tearDown(): void {
		remove_filter( 'wp_doing_ajax', '__return_true' );
		jet_fb_action_handler()->unregister_action( 78101 );
		jet_fb_action_handler()->unregister_action( 78102 );
		jet_fb_context()->parsers = array();
		jet_fb_context()->set_request( array() );
		Live_Form::clear();
		jet_form_builder()->form_handler = $this->saved_handler;
		$GLOBALS['post']                 = $this->saved_globals['post'];
		$GLOBALS['authordata']           = $this->saved_globals['authordata'];
		$_POST                          = $this->saved_globals['post_data'];
		$_REQUEST                       = $this->saved_globals['request'];
		$_COOKIE                        = $this->saved_globals['cookie'];
		$_SERVER                        = $this->saved_globals['server'];
		wp_set_current_user( 0 );

		parent::tearDown();
	}

	private function post_sources(): array {
		return array( 'post_meta', 'post_id', 'post_title', 'post_url', 'post_type', 'author_id', 'author_email', 'author_name' );
	}

	private function block( string $name, array $attrs ): string {
		return '<!-- wp:jet-forms/' . $name . ' ' . wp_json_encode( (object) $attrs ) . ' /-->';
	}

	private function create_form(): int {
		$current = get_current_user_id();
		wp_set_current_user( $this->admin );
		$id = wp_insert_post(
			array( 'post_type' => 'jet-form-builder', 'post_status' => 'publish', 'post_title' => 'Post context form', 'post_content' => wp_slash( $this->blocks ) )
		);
		wp_set_current_user( $current );

		return (int) $id;
	}

	private function source_post( string $status = 'publish', string $password = '' ): int {
		$id = self::factory()->post->create(
			array( 'post_type' => 'page', 'post_status' => $status, 'post_author' => $this->owner, 'post_title' => 'Context [A-12] Україна', 'post_password' => $password )
		);
		update_post_meta( $id, '_context_canary', 'Value [A-12] & "Україна"' );

		return $id;
	}

	private function reset_handler(): void {
		jet_form_builder()->form_handler = new Form_Handler();
		Live_Form::clear();
	}

	/**
	 * Take service fields from actual HTML, as a browser would before sending.
	 */
	private function rendered_fields( int $post_id, int $form_id = 0, string $path = 'block' ): array {
		$this->reset_handler();
		$_POST                = array();
		$_REQUEST             = array();
		$GLOBALS['post']      = $post_id ? get_post( $post_id ) : null;
		$GLOBALS['authordata'] = null;
		$form_id              = $form_id ?: $this->form_id;
		$content              = 'shortcode' === $path
			? '[jet_fb_form form_id="' . $form_id . '"]'
			: $this->block( 'form-block', array( 'form_id' => $form_id ) );
		$html                 = apply_filters( 'the_content', $content );
		$dom                  = new \DOMDocument();
		$previous             = libxml_use_internal_errors( true );
		$dom->loadHTML( '<?xml encoding="UTF-8">' . $html );
		libxml_clear_errors();
		libxml_use_internal_errors( $previous );
		$xpath = new \DOMXPath( $dom );
		$this->assertSame( 1, $xpath->query( '//form[contains(@class,"jet-form-builder")]' )->length, 'Expected an actual form.' );
		$fields = array();
		foreach ( $xpath->query( '//form//input[@name]' ) as $input ) {
			$fields[ $input->getAttribute( 'name' ) ] = $input->getAttribute( 'value' );
		}

		return $fields;
	}

	/**
	 * Exercise service-field setup, hidden-field parsers and the Redirect action.
	 */
	private function submit( array $fields, bool $ajax = false ): array {
		$this->reset_handler();
		if ( $ajax ) {
			add_filter( 'wp_doing_ajax', '__return_true' );
		}
		$_POST    = $fields;
		$_REQUEST = $fields;
		jet_fb_handler()->setup_form();
		jet_fb_action_handler()->response_data = array();
		jet_fb_context()->parsers              = array();
		jet_fb_context()->set_parsers( parse_blocks( $this->blocks ) );
		jet_fb_context()->set_request( $fields );
		jet_fb_context()->apply_request();
		$action           = new Redirect_To_Page_Action();
		$action->_id      = 78101;
		$action->settings = array(
			'redirect_type' => 'custom_url',
			'redirect_url'  => home_url( '/context-thank-you/' ),
			'redirect_args' => array_merge( $this->post_sources(), array( 'manual' ) ),
		);
		jet_fb_action_handler()->save_action( $action, array() );
		jet_fb_action_handler()->process_single_action( $action );
		$redirect = jet_fb_action_handler()->response_data['redirect'];
		parse_str( wp_parse_url( $redirect, PHP_URL_QUERY ), $query );

		$this->assertSame( 'Order [A-12] & "Україна"', $query['manual'], 'Server-computed author values still work.' );

		return $query;
	}

	private function assert_no_post_data( array $query ): void {
		foreach ( $this->post_sources() as $source ) {
			$this->assertSame( '0', $query[ $source ], 'Unexpected data from ' . $source );
		}
		$this->assertEmpty( Live_Form::instance()->post );
	}

	public function render_path_provider(): array {
		return array( 'block' => array( 'block' ), 'shortcode' => array( 'shortcode' ) );
	}

	/** @dataProvider render_path_provider */
	public function testRenderedFormCarriesPostBinding( string $path ): void {
		$post_id = $this->source_post();
		$fields  = $this->rendered_fields( $post_id, 0, $path );

		$this->assertSame( (string) $post_id, $fields['__queried_post_id'] );
		$this->assertNotEmpty( $fields['__queried_post_signature'] ?? '', 'The post ID needs a server-issued binding.' );
		$query = $this->submit( $fields );
		$this->assertSame( get_post_meta( $post_id, '_context_canary', true ), $query['post_meta'] );
		$this->assertSame( (string) $post_id, $query['post_id'] );
		$this->assertSame( get_the_title( $post_id ), $query['post_title'] );
		$this->assertSame( get_permalink( $post_id ), $query['post_url'] );
		$this->assertSame( 'page', $query['post_type'] );
		$this->assertSame( (string) $this->owner, $query['author_id'] );
		$this->assertSame( 'post-owner@example.org', $query['author_email'] );
		$this->assertSame( 'Owner [A-12] Україна', $query['author_name'] );
	}

	public function post_status_provider(): array {
		return array( 'private' => array( 'private' ), 'draft' => array( 'draft' ), 'published' => array( 'publish' ) );
	}

	/** @dataProvider post_status_provider */
	public function testChangingRenderedPostCannotReadAnotherPost( string $status ): void {
		$fields                       = $this->rendered_fields( $this->source_post() );
		$victim                       = $this->source_post( $status );
		$fields['__queried_post_id']   = (string) $victim;
		$GLOBALS['post']              = get_post( $victim );
		$GLOBALS['authordata']        = get_userdata( $this->owner );

		$this->assert_no_post_data( $this->submit( $fields ) );
		$this->assertSame( 'Value [A-12] & "Україна"', get_post_meta( $victim, '_context_canary', true ) );
	}

	public function malformed_context_provider(): array {
		return array(
			'missing signature' => array( '__queried_post_signature', null ),
			'empty signature'   => array( '__queried_post_signature', '' ),
			'array signature'   => array( '__queried_post_signature', array( 'bad' ) ),
			'forged signature'  => array( '__queried_post_signature', str_repeat( '0', 64 ) ),
			'missing ID'        => array( '__queried_post_id', null ),
			'zero ID'           => array( '__queried_post_id', '0' ),
			'negative sentinel' => array( '__queried_post_id', '-1' ),
			'array ID'          => array( '__queried_post_id', array( '1' ) ),
			'non-numeric ID'    => array( '__queried_post_id', '1junk' ),
		);
	}

	/** @dataProvider malformed_context_provider */
	public function testMissingOrMalformedContextDoesNotReuseExistingPost( string $key, $value ): void {
		$post_id = $this->source_post();
		$fields  = $this->rendered_fields( $post_id );
		if ( null === $value ) {
			unset( $fields[ $key ] );
		} else {
			$fields[ $key ] = $value;
		}
		$GLOBALS['post']       = get_post( $post_id );
		$GLOBALS['authordata'] = get_userdata( $this->owner );

		$this->assert_no_post_data( $this->submit( $fields ) );
	}

	public function testSignatureCannotBeMovedToAnotherForm(): void {
		$fields                                         = $this->rendered_fields( $this->source_post() );
		$fields['_jet_engine_booking_form_id']           = (string) $this->create_form();

		$this->assert_no_post_data( $this->submit( $fields ) );
	}

	public function role_provider(): array {
		$cases = array();
		foreach ( array( 'private', 'draft' ) as $status ) {
			foreach ( array( 'guest' => false, 'subscriber' => false, 'owner' => true, 'admin' => true ) as $role => $allowed ) {
				$cases[ $status . ' ' . $role ] = array( $status, $role, $allowed );
			}
		}

		return $cases;
	}

	/** @dataProvider role_provider */
	public function testSignedPostIsRecheckedAgainstSubmitterPermissions( string $status, string $role, bool $allowed ): void {
		$post_id = $this->source_post( $status );
		wp_set_current_user( $this->owner );
		$fields = $this->rendered_fields( $post_id );
		wp_set_current_user( 'guest' === $role ? 0 : $this->{$role} );
		$query = $this->submit( $fields );

		if ( $allowed ) {
			$this->assertSame( (string) $post_id, $query['post_id'] );
			$this->assertSame( 'Value [A-12] & "Україна"', $query['post_meta'] );
			$this->assertSame( 'post-owner@example.org', $query['author_email'] );
		} else {
			$this->assert_no_post_data( $query );
		}
	}

	public function testPublishedPostMadePrivateAfterRenderIsNotDisclosed(): void {
		$post_id = $this->source_post();
		$fields  = $this->rendered_fields( $post_id );
		wp_update_post( array( 'ID' => $post_id, 'post_status' => 'private' ) );

		$this->assert_no_post_data( $this->submit( $fields ) );
	}

	public function testGuestIsNotTheOwnerOfAnAuthorlessPrivatePost(): void {
		$post_id = $this->source_post( 'private' );
		wp_update_post( array( 'ID' => $post_id, 'post_author' => 0 ) );
		wp_set_current_user( $this->admin );
		$fields = $this->rendered_fields( $post_id );
		wp_set_current_user( 0 );

		$this->assert_no_post_data( $this->submit( $fields ) );
	}

	public function testGuestRenderCannotIssueBindingForUnreadableGlobalPost(): void {
		$post_id = $this->source_post( 'private' );
		$fields  = $this->rendered_fields( $post_id );

		$this->assertNotSame( (string) $post_id, $fields['__queried_post_id'] );
		$this->assert_no_post_data( $this->submit( $fields ) );
	}

	public function testSignedSubmissionUsesPostAuthorInsteadOfStaleAuthorGlobal(): void {
		$post_id = $this->source_post();
		$fields  = $this->rendered_fields( $post_id );
		$GLOBALS['authordata'] = get_userdata( $this->admin );
		$query = $this->submit( $fields );

		$this->assertSame( (string) $this->owner, $query['author_id'] );
		$this->assertSame( 'post-owner@example.org', $query['author_email'] );
		$this->assertSame( 'Owner [A-12] Україна', $query['author_name'] );
	}

	public function testPasswordProtectedPostRequiresPasswordEvenForSubscriber(): void {
		$post_id = $this->source_post( 'publish', 'test-post-password' );
		wp_set_current_user( $this->admin );
		$fields = $this->rendered_fields( $post_id );
		wp_set_current_user( $this->subscriber );
		unset( $_COOKIE[ 'wp-postpass_' . COOKIEHASH ] );

		$this->assert_no_post_data( $this->submit( $fields ) );
	}

	public function testPasswordProtectedPostWorksAfterPasswordWasEntered(): void {
		$post_id = $this->source_post( 'publish', 'test-post-password' );
		require_once ABSPATH . WPINC . '/class-phpass.php';
		$hasher = new \PasswordHash( 8, true );
		$_COOKIE[ 'wp-postpass_' . COOKIEHASH ] = $hasher->HashPassword( 'test-post-password' );
		$fields = $this->rendered_fields( $post_id );
		$query  = $this->submit( $fields );

		$this->assertSame( (string) $post_id, $query['post_id'] );
		$this->assertSame( 'Value [A-12] & "Україна"', $query['post_meta'] );
	}

	/** @dataProvider post_status_provider */
	public function testAjaxSubmissionCannotRecoverRejectedContextFromReferer( string $status ): void {
		$victim = $this->source_post( $status );
		$fields = $this->rendered_fields( $this->source_post() );
		unset( $fields['__queried_post_id'] );
		$fields['_wp_http_referer'] = '/?page_id=' . $victim;
		$_SERVER['HTTP_REFERER']    = home_url( '/?page_id=' . $victim );
		$GLOBALS['post']           = null;

		$this->assert_no_post_data( $this->submit( $fields, true ) );
	}

	public function testAjaxSubmissionWithValidContextStillWorks(): void {
		$post_id = $this->source_post();
		$fields  = $this->rendered_fields( $post_id );
		$query   = $this->submit( $fields, true );

		$this->assertSame( (string) $post_id, $query['post_id'] );
		$this->assertSame( 'Value [A-12] & "Україна"', $query['post_meta'] );
	}

	/** @dataProvider post_status_provider */
	public function testStandaloneAjaxRefererOnlyResolvesReadablePosts( string $status ): void {
		$post_id                   = $this->source_post( $status );
		$GLOBALS['post']           = null;
		$_POST                     = array();
		$_REQUEST                  = array();
		$_SERVER['HTTP_REFERER']    = home_url( '/?page_id=' . $post_id );
		add_filter( 'wp_doing_ajax', '__return_true' );
		$post = Live_Form::instance()->post;

		if ( 'publish' === $status ) {
			$this->assertInstanceOf( \WP_Post::class, $post );
			$this->assertSame( $post_id, $post->ID );
		} else {
			$this->assertEmpty( $post );
		}
	}

	public function testRenderWithoutPostKeepsServerHiddenManualValue(): void {
		$fields = $this->rendered_fields( 0 );
		$this->assertLessThanOrEqual( 0, (int) $fields['__queried_post_id'] );

		$this->assert_no_post_data( $this->submit( $fields ) );
	}

	public function inherited_attachment_provider(): array {
		return array(
			'password guest' => array( 'password', 'guest', false ),
			'password subscriber' => array( 'password', 'subscriber', false ),
			'password cookie' => array( 'password', 'cookie', true ),
			'password administrator' => array( 'password', 'admin', true ),
			'private guest' => array( 'private', 'guest', false ),
			'private administrator' => array( 'private', 'admin', true ),
		);
	}

	/** @dataProvider inherited_attachment_provider */
	public function testAttachmentRechecksParentAccessAfterRender( string $change, string $role, bool $allowed ): void {
		$parent = $this->source_post();
		$id = self::factory()->post->create(
			array( 'post_type' => 'attachment', 'post_status' => 'inherit', 'post_parent' => $parent, 'post_author' => $this->owner, 'post_mime_type' => 'image/jpeg' )
		);
		update_post_meta( $id, '_context_canary', 'Attachment canary' );
		$fields = $this->rendered_fields( $id );
		wp_update_post( array( 'ID' => $parent, 'post_status' => 'private' === $change ? 'private' : 'publish', 'post_password' => 'password' === $change ? 'parent-password' : '' ) );
		wp_set_current_user( in_array( $role, array( 'guest', 'cookie' ), true ) ? 0 : $this->{$role} );
		unset( $_COOKIE[ 'wp-postpass_' . COOKIEHASH ] );
		if ( 'cookie' === $role ) {
			require_once ABSPATH . WPINC . '/class-phpass.php';
			$hasher = new \PasswordHash( 8, true );
			$_COOKIE[ 'wp-postpass_' . COOKIEHASH ] = $hasher->HashPassword( 'parent-password' );
		}
		$query = $this->submit( $fields );
		if ( $allowed ) {
			$this->assertSame( (string) $id, $query['post_id'] );
			$this->assertSame( 'Attachment canary', $query['post_meta'] );
		} else {
			$this->assert_no_post_data( $query );
		}
	}

	/**
	 * A cached form may still send its visible record ID. Reject before its
	 * server-computed replacement values or any actions can modify that record.
	 */
	public function testUnsignedCachedSubmissionStopsBeforeParsersAndActions(): void {
		$post_id = $this->source_post();
		$fields = $this->rendered_fields( $post_id );
		$fields['record_id'] = (string) $post_id;
		unset( $fields['__queried_post_signature'] );
		$this->reset_handler();
		$_POST = $fields;
		$_REQUEST = $fields;
		jet_fb_handler()->setup_form();
		$action = $this->write_probe_action( $post_id );
		$request_calls = 0;
		$before_request = static function () use ( &$request_calls ) { ++$request_calls; };
		add_action( 'jet-form-builder/request', $before_request, -100 );
		try {
			jet_fb_handler()->send_form();
			$this->fail( 'An unsigned cached submission must stop before parsing.' );
		} catch ( Request_Exception $exception ) {
			$this->assertSame( Submitted_Post_Context::EXPIRED_STATUS, $exception->get_form_status() );
		} finally {
			remove_action( 'jet-form-builder/request', $before_request, -100 );
		}
		$this->assertSame( 0, $request_calls );
		$this->assertSame( 0, $action->calls );
		$this->assertSame( 'Value [A-12] & "Україна"', get_post_meta( $post_id, '_context_canary', true ) );
	}

	private function write_probe_action( int $post_id ) {
		jet_fb_action_handler()->set_form_id( $this->form_id );
		$action = new class( $post_id ) extends \Jet_Form_Builder\Actions\Types\Base {
			public $calls = 0;
			private $target;
			public function __construct( $post_id ) { $this->target = $post_id; }
			public function get_id() { return 'context-write-probe'; }
			public function get_name() { return 'Context write probe'; }
			public function do_action( array $request, \Jet_Form_Builder\Actions\Action_Handler $handler ) {
				++$this->calls;
				update_post_meta( $this->target, '_context_canary', 'Action executed' );
			}
		};
		$action->_id = 78102;
		jet_fb_action_handler()->save_action( $action, array() );

		return $action;
	}

	public function testSignedNoPostSubmissionCanExecuteActions(): void {
		$post_id = $this->source_post();
		$fields = $this->rendered_fields( 0 );
		$this->reset_handler();
		$_POST = $fields;
		$_REQUEST = $fields;
		jet_fb_handler()->setup_form();
		$action = $this->write_probe_action( $post_id );
		jet_fb_handler()->send_form();

		$this->assertSame( 1, $action->calls );
		$this->assertSame( 'Action executed', get_post_meta( $post_id, '_context_canary', true ) );
		$this->assertEmpty( Live_Form::instance()->post );
	}

	public function testRejectedContextIsSharedByRelatedOptionsAndCalculatedMeta(): void {
		$victim = $this->source_post();
		$fields = $this->rendered_fields( $this->source_post() );
		$fields['__queried_post_id'] = (string) $victim;
		$fields['_wp_http_referer'] = '/?page_id=' . $victim;
		$this->submit( $fields, true );
		$generator = new \Jet_Form_Builder\Generators\Get_Related_Posts();
		$method = new \ReflectionMethod( $generator, 'get_current_post_id' );
		$method->setAccessible( true );
		$this->assertSame( 0, $method->invoke( $generator ) );
		$render = new \Jet_Form_Builder\Blocks\Render\Calculated_Field_Render( jet_form_builder()->blocks->get_field_by_name( 'calculated-field' ) );
		$this->assertSame( '', $render->get_calculated_data( array( 'calc_formula' => '%META::_context_canary%' ) ) );
		$query = new \JFB_Modules\Option_Query\Meta_Query();
		$query->set_query( 'meta_key', '_context_canary' );
		$this->assertSame( array(), iterator_to_array( $query->fetch() ) );
	}

	public function testAuthorArchiveStillUsesQueriedAuthorOutsideSubmission(): void {
		self::factory()->post->create( array( 'post_author' => $this->owner, 'post_status' => 'publish' ) );
		$this->go_to( get_author_posts_url( $this->owner ) );
		$this->assertTrue( is_author() );
		$GLOBALS['post'] = null;
		$GLOBALS['authordata'] = get_userdata( $this->owner );
		$field = clone jet_form_builder()->blocks->get_field_by_name( 'hidden-field' );

		$this->assertSame( 'post-owner@example.org', $field->get_author_meta( 'user_email' ) );
	}

	public function testTwoRenderedFormsHaveIndependentBindings(): void {
		$post_id = $this->source_post();
		$first = $this->rendered_fields( $post_id );
		$second = $this->rendered_fields( $post_id, $this->create_form() );

		$this->assertNotSame( $first['__queried_post_signature'], $second['__queried_post_signature'] );
		$this->assertSame( (string) $post_id, $this->submit( $first )['post_id'] );
		$this->assertSame( (string) $post_id, $this->submit( $second )['post_id'] );
	}
}
