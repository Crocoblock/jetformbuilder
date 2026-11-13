<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Classes\Security\Submitted_Post_Context;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Form_Handler;
use Jet_Form_Builder\Live_Form;
use JFB_Modules\Actions_V2\Redirect_To_Page\Redirect_To_Page_Action;

/**
 * A missing or rejected post context stops only the forms that read the
 * current post on the server; other forms are submitted without a post.
 */
class SubmittedPostContextCompatTest extends \Codeception\TestCase\WPTestCase {

	const CPT          = 'jfb_ctx_event';
	const PRIVATE_CPT  = 'jfb_ctx_internal';
	const PROBE_ACTION = 78301;

	private $saved;
	private $admin;
	private $subscriber;

	protected function setUp(): void {
		parent::setUp();

		$this->saved = array(
			'handler' => jet_form_builder()->form_handler,
			'post'    => $GLOBALS['post'] ?? null,
			'_POST'   => $_POST,
			'_REQ'    => $_REQUEST,
			'_SERVER' => $_SERVER,
		);

		$this->admin      = self::factory()->user->create( array( 'role' => 'administrator' ) );
		$this->subscriber = self::factory()->user->create( array( 'role' => 'subscriber' ) );

		Submitted_Post_Context::flush_cache();
		wp_set_current_user( 0 );
	}

	protected function tearDown(): void {
		remove_all_filters( 'salt' );
		remove_all_filters( 'jet-form-builder/post-context/signing-key' );
		remove_all_filters( 'jet-form-builder/post-context/form-requires-context' );
		remove_all_filters( 'jet-form-builder/post-context/internal-post-types' );
		remove_all_filters( 'jet-form-builder/post-context/listed-post-types' );
		unset( $GLOBALS['wp_actions']['elementor/loaded'] );
		remove_filter( 'wp_doing_ajax', '__return_true' );
		unregister_post_type( self::CPT );
		unregister_post_type( self::PRIVATE_CPT );
		jet_fb_action_handler()->unregister_action( self::PROBE_ACTION );
		jet_fb_context()->parsers = array();
		jet_fb_context()->set_request( array() );
		Live_Form::clear();
		Submitted_Post_Context::flush_cache();
		jet_form_builder()->form_handler = $this->saved['handler'];
		$GLOBALS['post']                 = $this->saved['post'];
		$_POST                           = $this->saved['_POST'];
		$_REQUEST                        = $this->saved['_REQ'];
		$_SERVER                         = $this->saved['_SERVER'];
		wp_set_current_user( 0 );

		parent::tearDown();
	}


	/* ------------------------------ helpers ------------------------------ */

	private function block( string $name, array $attrs, string $inner = '' ): string {
		$json = wp_json_encode( (object) $attrs );

		if ( '' === $inner ) {
			return '<!-- wp:jet-forms/' . $name . ' ' . $json . ' /-->';
		}

		return '<!-- wp:jet-forms/' . $name . ' ' . $json . ' -->' . $inner . '<!-- /wp:jet-forms/' . $name . ' -->';
	}

	private function form( string $blocks, array $preset = array() ): int {
		$current = get_current_user_id();
		wp_set_current_user( $this->admin );
		$id = (int) wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Post context form',
				'post_content' => wp_slash( $blocks . $this->block( 'submit-field', array( 'label' => 'Submit' ) ) ),
			)
		);
		// Full-page cache sites usually keep the nonce off.
		update_post_meta( $id, '_jf_args', wp_slash( wp_json_encode( array( 'load_nonce' => 'hide' ) ) ) );

		if ( $preset ) {
			update_post_meta( $id, '_jf_preset', wp_slash( wp_json_encode( $preset ) ) );
		}
		wp_set_current_user( $current );

		return $id;
	}

	private function plain_form(): int {
		return $this->form( $this->block( 'text-field', array( 'name' => 'your_name' ) ) );
	}

	private function meta_form(): int {
		return $this->form(
			$this->block(
				'hidden-field',
				array( 'name' => 'post_meta', 'render' => false, 'field_value' => 'post_meta', 'hidden_value_field' => '_ctx_meta' )
			)
		);
	}

	private function source_post( string $status = 'publish', string $type = 'page' ): int {
		$id = self::factory()->post->create( array( 'post_type' => $type, 'post_status' => $status, 'post_author' => $this->admin ) );
		update_post_meta( $id, '_ctx_meta', 'canary-' . $id );

		return $id;
	}

	private function reset_handler(): void {
		jet_form_builder()->form_handler = new Form_Handler();
		Live_Form::clear();
	}

	private function render( int $form_id, int $global_post ): array {
		$this->reset_handler();
		$_POST           = array();
		$_REQUEST        = array();
		$GLOBALS['post'] = $global_post ? get_post( $global_post ) : null;

		$html = apply_filters( 'the_content', $this->block( 'form-block', array( 'form_id' => $form_id ) ) );
		$dom  = new \DOMDocument();
		$prev = libxml_use_internal_errors( true );
		$dom->loadHTML( '<?xml encoding="UTF-8">' . $html );
		libxml_clear_errors();
		libxml_use_internal_errors( $prev );
		$xpath = new \DOMXPath( $dom );
		$this->assertSame( 1, $xpath->query( '//form[contains(@class,"jet-form-builder")]' )->length, 'Expected a rendered form.' );

		$fields = array();
		foreach ( $xpath->query( '//form//input[@name]' ) as $input ) {
			$fields[ $input->getAttribute( 'name' ) ] = $input->getAttribute( 'value' );
		}

		return $fields;
	}

	private function ajax_render( int $form_id, string $referer ): array {
		add_filter( 'wp_doing_ajax', '__return_true' );
		$_SERVER['HTTP_REFERER'] = $referer;
		$fields                  = $this->render( $form_id, 0 );
		remove_filter( 'wp_doing_ajax', '__return_true' );
		unset( $_SERVER['HTTP_REFERER'] );

		return $fields;
	}

	/**
	 * setup_form() + send_form() with a probe action.
	 *
	 * @return array{status: string|null, calls: int}
	 */
	private function submit( array $fields ): array {
		$this->reset_handler();
		$_POST    = $fields;
		$_REQUEST = $fields;
		jet_fb_handler()->setup_form();
		jet_fb_action_handler()->set_form_id( (int) $fields['_jet_engine_booking_form_id'] );

		$action = new class() extends \Jet_Form_Builder\Actions\Types\Base {
			public $calls = 0;
			public function get_id() { return 'context-compat-probe'; }
			public function get_name() { return 'Context compat probe'; }
			public function do_action( array $request, \Jet_Form_Builder\Actions\Action_Handler $handler ) {
				++$this->calls;
			}
		};
		$action->_id = self::PROBE_ACTION;
		jet_fb_action_handler()->save_action( $action, array() );

		try {
			jet_fb_handler()->send_form();
			$status = null;
		} catch ( Request_Exception $exception ) {
			$status = $exception->get_form_status();
		}

		return array(
			'status'   => $status,
			'calls'    => $action->calls,
			'reason'   => jet_fb_handler()->get_post_context_rejection(),
			'accepted' => jet_fb_handler()->get_accepted_post_id(),
		);
	}

	/**
	 * Server-computed hidden value after setup, sent through Redirect args.
	 */
	private function server_meta( int $form_id, array $fields ): string {
		$this->reset_handler();
		$_POST    = $fields;
		$_REQUEST = $fields;
		jet_fb_handler()->setup_form();
		jet_fb_action_handler()->response_data = array();
		jet_fb_context()->parsers              = array();
		jet_fb_context()->set_parsers( \Jet_Form_Builder\Blocks\Block_Helper::get_blocks_by_post( $form_id ) );
		jet_fb_context()->set_request( $fields );
		jet_fb_context()->apply_request();
		$action           = new Redirect_To_Page_Action();
		$action->_id      = self::PROBE_ACTION;
		$action->settings = array(
			'redirect_type' => 'custom_url',
			'redirect_url'  => home_url( '/ctx-thanks/' ),
			'redirect_args' => array( 'post_meta' ),
		);
		jet_fb_action_handler()->save_action( $action, array() );
		jet_fb_action_handler()->process_single_action( $action );
		parse_str( (string) wp_parse_url( jet_fb_action_handler()->response_data['redirect'], PHP_URL_QUERY ), $query );

		return (string) ( $query['post_meta'] ?? '' );
	}

	private function register_cpt( string $type, array $args ): void {
		register_post_type( $type, $args );
	}

	private function list_types( array $types ): void {
		add_filter(
			'jet-form-builder/post-context/listed-post-types',
			static function ( $listed ) use ( $types ) {
				return array_merge( $listed, $types );
			}
		);
	}

	/* ------------------------------ detector ----------------------------- */

	public function detector_provider(): array {
		$hidden = function ( array $attrs ) {
			return array( 'hidden-field', array_merge( array( 'name' => 'h' ), $attrs ) );
		};

		return array(
			'text field only'                       => array( array( array( 'text-field', array( 'name' => 't' ) ) ), false ),
			'hidden without render, default source' => array( array( $hidden( array( 'render' => false ) ) ), true ),
			'hidden without render, post meta'      => array( array( $hidden( array( 'render' => false, 'field_value' => 'post_meta', 'hidden_value_field' => 'k' ) ) ), true ),
			'hidden without render, post title'     => array( array( $hidden( array( 'render' => false, 'field_value' => 'post_title' ) ) ), true ),
			'hidden without render, author email'   => array( array( $hidden( array( 'render' => false, 'field_value' => 'author_email' ) ) ), true ),
			'hidden without render, listing object' => array( array( $hidden( array( 'render' => false, 'field_value' => 'current_object_id' ) ) ), true ),
			'hidden without render, custom source'  => array( array( $hidden( array( 'render' => false, 'field_value' => 'my_custom_source' ) ) ), true ),
			'hidden without render, "false" string' => array( array( $hidden( array( 'render' => 'false', 'field_value' => 'post_id' ) ) ), true ),
			'hidden without render, manual input'   => array( array( $hidden( array( 'render' => false, 'field_value' => 'manual_input', 'hidden_value' => 'x' ) ) ), false ),
			'hidden without render, user id'        => array( array( $hidden( array( 'render' => false, 'field_value' => 'user_id' ) ) ), false ),
			'hidden without render, query var'      => array( array( $hidden( array( 'render' => false, 'field_value' => 'query_var', 'query_var_key' => 'q' ) ) ), false ),
			'hidden manual input, macro default'    => array( array( $hidden( array( 'render' => false, 'field_value' => 'manual_input', 'default' => '%CT::CurrentPostId%' ) ) ), true ),
			'hidden manual input, preset default'   => array( array( $hidden( array( 'render' => false, 'field_value' => 'manual_input', 'default' => '{"jet_preset":{"from":"post"}}' ) ) ), true ),
			'hidden placeholder source, plain default' => array( array( $hidden( array( 'render' => false, 'field_value' => '', 'default' => 'Website' ) ) ), false ),
			'hidden placeholder source, macro default' => array( array( $hidden( array( 'render' => false, 'field_value' => '', 'default' => '%CT::CurrentPostId%' ) ) ), true ),
			'appointment provider'                  => array( array( array( 'appointment-provider', array( 'name' => 'p' ) ) ), false ),
			'hidden manual input, percent in text'  => array( array( $hidden( array( 'render' => false, 'field_value' => 'manual_input', 'default' => 'Save 10% today' ) ) ), false ),
			'hidden static value'                   => array( array( $hidden( array( 'render' => false, 'field_value' => 'post_id', '_static_value' => true ) ) ), false ),
			'rendered hidden post id'               => array( array( $hidden( array( 'field_value' => 'post_id' ) ) ), false ),
			'select with meta options'              => array( array( array( 'select-field', array( 'name' => 's', 'field_options_from' => 'meta_field', 'field_options_key' => 'k' ) ) ), false ),
			'select with related posts'             => array( array( array( 'select-field', array( 'name' => 's', 'field_options_from' => 'generate', 'generator_function' => 'get_related_posts' ) ) ), false ),
			'select with number range from meta'    => array( array( array( 'select-field', array( 'name' => 's', 'field_options_from' => 'generate', 'generator_function' => 'num_range' ) ) ), false ),
			'select with users generator'           => array( array( array( 'select-field', array( 'name' => 's', 'field_options_from' => 'generate', 'generator_function' => 'get_from_users' ) ) ), false ),
			'select with posts'                     => array( array( array( 'select-field', array( 'name' => 's', 'field_options_from' => 'posts' ) ) ), false ),
			'booking check-in-out'                  => array( array( array( 'check-in-out', array( 'name' => 'dates' ) ) ), false ),
			'calculated META macro'                 => array( array( array( 'calculated-field', array( 'name' => 'c', 'calc_formula' => '%META::price%' ) ) ), false ),
			'appointment date'                      => array( array( array( 'appointment-date', array( 'name' => 'date' ) ) ), false ),
		);
	}

	/**
	 * @dataProvider detector_provider
	 */
	public function testDetectorFindsFormsThatReadThePostOnSubmit( array $blocks, bool $expected ): void {
		$markup = '';
		foreach ( $blocks as $block ) {
			$markup .= $this->block( $block[0], $block[1] );
		}

		$this->assertSame( $expected, Submitted_Post_Context::form_requires_post_context( $this->form( $markup ) ) );
	}

	public function testDetectorLooksInsideRepeaterAndConditionalBlocks(): void {
		$inner = $this->block( 'hidden-field', array( 'name' => 'h', 'render' => false, 'field_value' => 'post_meta', 'hidden_value_field' => 'k' ) );
		$form  = $this->form(
			$this->block( 'conditional-block', array(), $this->block( 'repeater-field', array( 'name' => 'r' ), $inner ) )
		);

		$this->assertTrue( Submitted_Post_Context::form_requires_post_context( $form ) );
	}

	public function testHiddenUserSourceFallsBackToCurrentPostPreset(): void {
		$blocks = $this->block( 'hidden-field', array( 'name' => 'h', 'render' => false, 'field_value' => 'user_id' ) );
		$preset = array( 'enabled' => true, 'from' => 'post', 'post_from' => 'current_post' );

		$this->assertFalse( Submitted_Post_Context::form_requires_post_context( $this->form( $blocks ) ) );
		$this->assertTrue( Submitted_Post_Context::form_requires_post_context( $this->form( $blocks, $preset ) ) );

		// Manual Input with a value never falls back to the preset.
		$manual = $this->block( 'hidden-field', array( 'name' => 'h', 'render' => false, 'field_value' => 'manual_input', 'hidden_value' => 'web' ) );
		$this->assertFalse( Submitted_Post_Context::form_requires_post_context( $this->form( $manual, $preset ) ) );
	}

	/**
	 * Booking, appointment, meta options and META macros are filled while
	 * rendering; on submit the browser sends the value. A page cached before
	 * the update keeps working for them.
	 */
	public function testRenderOnlyPostFieldsSubmitFromCachedHtml(): void {
		$page = $this->source_post();
		$form = $this->form(
			$this->block( 'hidden-field', array( 'name' => 'apartment', 'field_value' => 'post_id' ) ) .
			$this->block( 'select-field', array( 'name' => 'size', 'field_options_from' => 'meta_field', 'field_options_key' => '_ctx_meta' ) )
		);
		$fields = $this->render( $form, $page );
		unset( $fields['__queried_post_signature'] );

		$this->assertSame( (string) $page, $fields['apartment'] );
		$this->assertNull( $this->submit( $fields )['status'] );
	}

	public function testSitesCanAllowGuestsItemsOfNonPublicTypes(): void {
		$this->register_cpt( self::CPT, array( 'public' => false, 'show_ui' => true ) );
		$item = $this->source_post( 'publish', self::CPT );
		$form = $this->meta_form();

		// AJAX load more / JetSmartFilters: only with the site's own permission.
		$this->assertNotSame( (string) $item, $this->ajax_render_global( $form, $item )['__queried_post_id'] );

		add_filter(
			'jet-form-builder/post-context/can-read-post',
			static function ( $can_read, $post, $mode ) {
				// Any render or signature of it, never a client-chosen (STRICT) post.
				return $can_read || ( self::CPT === $post->post_type && 'publish' === $post->post_status && Submitted_Post_Context::STRICT !== $mode );
			},
			10,
			3
		);
		$fields = $this->ajax_render_global( $form, $item );

		$this->assertSame( (string) $item, $fields['__queried_post_id'] );
		$this->assertSame( 'canary-' . $item, $this->server_meta( $form, $fields ) );
	}

	public function record_source_provider(): array {
		return array(
			'public page'  => array( 'publish', true ),
			'private page' => array( 'private', false ),
		);
	}

	/**
	 * @dataProvider record_source_provider
	 */
	public function testRecordKeepsPublicSourcePageForCachedSubmission( string $status, bool $kept ): void {
		$page   = $this->source_post( $status );
		$form   = $this->plain_form();
		$fields = $this->render( $form, $this->source_post() );
		unset( $fields['__queried_post_signature'] );
		$fields['_jet_engine_refer'] = get_permalink( $page );

		$this->submit( $fields );
		jet_form_builder()->form_handler->set_response_args( array( 'status' => 'success' ) );
		$record_id = ( new \JFB_Modules\Form_Record\Controller() )->save_record();
		global $wpdb;
		$table  = \JFB_Modules\Form_Record\Models\Record_Model::table();
		$source = $wpdb->get_var( $wpdb->prepare( "SELECT from_content_id FROM {$table} WHERE id = %d", $record_id ) );

		$this->assertGreaterThan( 0, $record_id );
		$this->assertSame( $kept ? (string) $page : '0', (string) $source );
	}

	public function preset_provider(): array {
		return array(
			'post, current post'            => array( array( 'from' => 'post', 'post_from' => 'current_post' ), true ),
			'post, empty "get post ID from"' => array( array( 'from' => 'post', 'post_from' => '' ), true ),
			'source not saved (post)'       => array( array(), true ),
			'post by query var'             => array( array( 'from' => 'post', 'post_from' => 'query_var', 'query_var' => 'pid' ), false ),
			'current user'                  => array( array( 'from' => 'user' ), false ),
			'query variables'               => array( array( 'from' => 'query_var' ), false ),
			'add-on source'                 => array( array( 'from' => 'booking', 'booking_source' => 'current_post' ), true ),
		);
	}

	/**
	 * A server-only hidden field with an empty own value falls back to the
	 * general form preset.
	 *
	 * @dataProvider preset_provider
	 */
	public function testGeneralPresetDecidesForServerOnlyHiddenFallback( array $preset, bool $expected ): void {
		$blocks = $this->block( 'hidden-field', array( 'name' => 'h', 'render' => false, 'field_value' => 'manual_input' ) );
		$form   = $this->form( $blocks, array_merge( array( 'enabled' => true ), $preset ) );

		$this->assertSame( $expected, Submitted_Post_Context::form_requires_post_context( $form ) );
	}

	public function testConcurrentKeyCreationKeepsTheFirstKey(): void {
		delete_option( Submitted_Post_Context::KEY_OPTION );
		Submitted_Post_Context::flush_cache();
		// Simulates a request that read "no key" and is about to create one.
		$this->assertFalse( get_option( Submitted_Post_Context::KEY_OPTION ) );

		// Another request created the key meanwhile, past this request's caches.
		global $wpdb;
		$first = str_repeat( 'a', 64 );
		$wpdb->insert( $wpdb->options, array( 'option_name' => Submitted_Post_Context::KEY_OPTION, 'option_value' => $first, 'autoload' => 'yes' ) );

		Submitted_Post_Context::flush_cache();
		$page      = $this->source_post();
		$signature = Submitted_Post_Context::sign( 10, $page );

		$this->assertSame( $first, get_option( Submitted_Post_Context::KEY_OPTION ) );
		$this->assertSame( hash_hmac( 'sha256', 'submitted-post:1:10:' . $page, $first ), $signature );
	}

	public function testAddonsCanDeclareThatAFormReadsThePost(): void {
		$form = $this->plain_form();
		add_filter(
			'jet-form-builder/post-context/form-requires-context',
			static function ( $requires, $form_id ) use ( $form ) {
				return $requires || $form === $form_id;
			},
			10,
			2
		);

		$this->assertTrue( Submitted_Post_Context::form_requires_post_context( $form ) );
	}

	/* ------------------------------- gate -------------------------------- */

	public function testFormWithoutPostFieldsIsSubmittedFromCachedHtmlWithoutPost(): void {
		$page   = $this->source_post();
		$form   = $this->plain_form();
		$fields = $this->render( $form, $page );
		unset( $fields['__queried_post_signature'] );

		$result = $this->submit( $fields );

		$this->assertNull( $result['status'] );
		$this->assertSame( 1, $result['calls'] );
		$this->assertEmpty( Live_Form::instance()->post, 'An unsigned post must not become the context.' );
		$this->assertEmpty( $GLOBALS['post'] ?? null );
		$this->assertSame( 'missing', $result['reason'] );
	}

	public function testFormWithoutPostFieldsIgnoresForgedPrivatePost(): void {
		$page    = $this->source_post();
		$private = $this->source_post( 'private' );
		$form    = $this->plain_form();
		$fields  = $this->render( $form, $page );
		$fields['__queried_post_id'] = (string) $private;

		$result = $this->submit( $fields );

		$this->assertNull( $result['status'] );
		$this->assertEmpty( Live_Form::instance()->post );
		$this->assertSame( 'invalid', $result['reason'] );
	}

	public function testClientWithoutServiceFieldsCanSubmitFormWithoutPostFields(): void {
		$form = $this->plain_form();

		$result = $this->submit(
			array(
				'_jet_engine_booking_form_id' => (string) $form,
				'_jet_engine_refer'           => home_url( '/' ),
				'your_name'                   => 'Guest',
			)
		);

		$this->assertNull( $result['status'] );
		$this->assertSame( 1, $result['calls'] );
	}

	public function rejected_context_provider(): array {
		return array(
			'signature removed (old cache)' => array( 'missing' ),
			'ID changed in the browser'     => array( 'invalid' ),
			'post made private after render' => array( 'unreadable' ),
		);
	}

	/**
	 * @dataProvider rejected_context_provider
	 */
	public function testFormThatReadsThePostStopsWithExpiredStatus( string $reason ): void {
		$page   = $this->source_post();
		$form   = $this->meta_form();
		$fields = $this->render( $form, $page );

		if ( 'missing' === $reason ) {
			unset( $fields['__queried_post_signature'] );
		} elseif ( 'invalid' === $reason ) {
			$fields['__queried_post_id'] = (string) $this->source_post();
		} else {
			wp_update_post( array( 'ID' => $page, 'post_status' => 'private' ) );
		}

		$result = $this->submit( $fields );

		$this->assertSame( Submitted_Post_Context::EXPIRED_STATUS, $result['status'] );
		$this->assertSame( 0, $result['calls'], 'Actions must not run.' );
		$this->assertSame( $reason, $result['reason'] );
	}

	public function testFormThatReadsThePostWorksWithSignedContext(): void {
		$page   = $this->source_post();
		$form   = $this->meta_form();
		$fields = $this->render( $form, $page );

		$result = $this->submit( $fields );

		$this->assertNull( $result['status'] );
		$this->assertSame( '', $result['reason'] );
		$this->assertSame( $page, $result['accepted'] );
		$this->assertSame( 'canary-' . $page, $this->server_meta( $form, $fields ) );
	}

	public function testExpiredStatusHasAnEditableMessage(): void {
		$messages = apply_filters( 'jet-form-builder/message-types', array() );

		$this->assertArrayHasKey( Submitted_Post_Context::EXPIRED_STATUS, $messages );
		$this->assertNotEmpty( $messages[ Submitted_Post_Context::EXPIRED_STATUS ]['value'] );
		$this->assertNotEmpty( $messages[ Submitted_Post_Context::EXPIRED_STATUS ]['label'] );
	}

	/* ------------------------------- key --------------------------------- */

	public function testRotatedWordPressSaltsKeepCachedSignaturesValid(): void {
		$page   = $this->source_post();
		$form   = $this->meta_form();
		$fields = $this->render( $form, $page );

		add_filter( 'salt', static function () { return 'rotated-salt-value'; } );

		$this->assertNull( $this->submit( $fields )['status'] );
		$this->assertSame( 'canary-' . $page, $this->server_meta( $form, $fields ) );
	}

	public function testSigningKeyIsCreatedOnceAndReused(): void {
		delete_option( Submitted_Post_Context::KEY_OPTION );
		Submitted_Post_Context::flush_cache();

		$first = Submitted_Post_Context::sign( 10, 20 );
		$key   = get_option( Submitted_Post_Context::KEY_OPTION );

		Submitted_Post_Context::flush_cache();

		$this->assertIsString( $key );
		$this->assertGreaterThanOrEqual( 32, strlen( $key ) );
		$this->assertSame( $first, Submitted_Post_Context::sign( 10, 20 ) );
		$this->assertSame( $key, get_option( Submitted_Post_Context::KEY_OPTION ) );
	}

	public function testChangedSigningKeyRejectsOldSignatures(): void {
		$signature = Submitted_Post_Context::sign( 10, 20 );

		add_filter( 'jet-form-builder/post-context/signing-key', static function () { return str_repeat( 'k', 64 ); } );

		$this->assertFalse( Submitted_Post_Context::verify( 10, 20, $signature ) );
		$this->assertTrue( Submitted_Post_Context::verify( 10, 20, Submitted_Post_Context::sign( 10, 20 ) ) );
	}

	/* ---------------------- public CPT without single --------------------- */

	public function testGuestKeepsListingItemOfCptWithoutSinglePages(): void {
		$this->register_cpt( self::CPT, array( 'public' => true, 'publicly_queryable' => false ) );
		$item   = $this->source_post( 'publish', self::CPT );
		$form   = $this->meta_form();
		$fields = $this->render( $form, $item );

		$this->assertSame( (string) $item, $fields['__queried_post_id'] );
		$this->assertNull( $this->submit( $fields )['status'] );
		$this->assertSame( 'canary-' . $item, $this->server_meta( $form, $fields ) );
	}

	public function unreadable_item_provider(): array {
		return array(
			'draft item of public CPT'      => array( 'draft', true ),
			'private item of public CPT'    => array( 'private', true ),
			'draft item of non-public CPT'  => array( 'draft', false ),
			'private item of non-public CPT' => array( 'private', false ),
		);
	}

	/**
	 * @dataProvider unreadable_item_provider
	 */
	public function testGuestDoesNotGetUnpublishedItems( string $status, bool $public ): void {
		$this->register_cpt( self::CPT, array( 'public' => $public, 'publicly_queryable' => false, 'show_ui' => true ) );
		$item   = $this->source_post( $status, self::CPT );
		$form   = $this->meta_form();
		$fields = $this->render( $form, $item );

		$this->assertNotSame( (string) $item, $fields['__queried_post_id'] );
		$this->assertNotSame( 'canary-' . $item, $this->server_meta( $form, $fields ) );
	}

	private function ajax_render_global( int $form_id, int $global_post ): array {
		add_filter( 'wp_doing_ajax', '__return_true' );
		$fields = $this->render( $form_id, $global_post );
		remove_filter( 'wp_doing_ajax', '__return_true' );

		return $fields;
	}

	public function listing_visitor_provider(): array {
		return array(
			'guest'      => array( false ),
			'subscriber' => array( true ),
		);
	}

	/**
	 * Listing of a CPT with "Is Public" off on a regular page: the server chose
	 * the item, the form keeps it.
	 *
	 * @dataProvider listing_visitor_provider
	 */
	public function testNonPublicItemOnRegularPageIsTheContext( bool $logged_in ): void {
		$this->register_cpt( self::CPT, array( 'public' => false, 'show_ui' => true ) );
		$item = $this->source_post( 'publish', self::CPT );
		$form = $this->meta_form();
		wp_set_current_user( $logged_in ? $this->subscriber : 0 );
		$this->list_types( array( self::CPT ) );

		$fields = $this->render( $form, $item );

		$this->assertSame( (string) $item, $fields['__queried_post_id'] );
		$this->assertNull( $this->submit( $fields )['status'] );
		$this->assertSame( 'canary-' . $item, $this->server_meta( $form, $fields ) );
	}

	/**
	 * A regular URL does not prove the server chose the item: JetSmartFilters
	 * reload-mode query parameters and search results put any published item
	 * of a non-public type into the loop. Without the site's opt-in such items
	 * are never the context.
	 *
	 * @dataProvider listing_visitor_provider
	 */
	public function testNonPublicItemIsNotTheContextWithoutOptIn( bool $logged_in ): void {
		$this->register_cpt( self::CPT, array( 'public' => false, 'show_ui' => true ) );
		$item = $this->source_post( 'publish', self::CPT );
		$form = $this->meta_form();
		wp_set_current_user( $logged_in ? $this->subscriber : 0 );

		$this->assertNotSame( (string) $item, $this->render( $form, $item )['__queried_post_id'] );
		$this->assertSame( '', $this->token_in_listing( $form, $item ) );
	}

	/**
	 * In AJAX renders add-ons switch the global post to an ID sent by the
	 * client (JetPopup postId, JetEngine popups, load more).
	 *
	 * @dataProvider listing_visitor_provider
	 */
	public function testNonPublicItemInAjaxRenderIsNotTheContext( bool $logged_in ): void {
		$this->register_cpt( self::CPT, array( 'public' => false, 'show_ui' => true ) );
		$item = $this->source_post( 'publish', self::CPT );
		$form = $this->meta_form();
		wp_set_current_user( $logged_in ? $this->subscriber : 0 );
		$this->list_types( array( self::CPT ) );

		$this->assertNotSame( (string) $item, $this->ajax_render_global( $form, $item )['__queried_post_id'] );
		$this->assertNotSame( (string) $item, $this->ajax_render( $form, home_url( '/?p=' . $item ) )['__queried_post_id'] );
	}

	/**
	 * A signature of the public domain (as AJAX renders of public types get)
	 * does not open a non-public item.
	 */
	public function testPublicDomainSignatureDoesNotOpenNonPublicItem(): void {
		$this->register_cpt( self::CPT, array( 'public' => false, 'show_ui' => true ) );
		$this->list_types( array( self::CPT ) );
		$item   = $this->source_post( 'publish', self::CPT );
		$form   = $this->meta_form();
		$fields = $this->render( $form, $this->source_post() );

		Submitted_Post_Context::sign( 1, 1 ); // Make sure the key exists.
		$fields['__queried_post_id']        = (string) $item;
		$fields['__queried_post_signature'] = hash_hmac( 'sha256', 'submitted-post:1:' . $form . ':' . $item, get_option( Submitted_Post_Context::KEY_OPTION ) );

		$result = $this->submit( $fields );

		$this->assertSame( Submitted_Post_Context::EXPIRED_STATUS, $result['status'] );
		$this->assertSame( 'invalid', $result['reason'] );
	}

	public function denied_type_provider(): array {
		return array(
			'WooCommerce coupon' => array( 'shop_coupon' ),
			'menu item'          => array( 'nav_menu_item' ),
			'Ninja Forms entry'  => array( 'nf_sub' ),
		);
	}

	/**
	 * @dataProvider denied_type_provider
	 */
	public function testSensitiveNonPublicTypesAreNeverTheContext( string $type ): void {
		if ( ! post_type_exists( $type ) ) {
			register_post_type( $type, array( 'public' => false, 'show_ui' => true ) );
		}
		$item = $this->source_post( 'publish', $type );
		$form = $this->meta_form();
		$this->list_types( array( $type ) );

		foreach ( array( 0, $this->subscriber ) as $user ) {
			wp_set_current_user( $user );
			$this->assertNotSame( (string) $item, $this->render( $form, $item )['__queried_post_id'] );
			$this->assertFalse( Submitted_Post_Context::can_read_post( $item, Submitted_Post_Context::PAGE ) );
		}
	}

	public function testInternalPostTypesNeverBecomeTheContext(): void {
		$this->register_cpt( self::PRIVATE_CPT, array( 'public' => true, 'publicly_queryable' => true ) );
		add_filter(
			'jet-form-builder/post-context/internal-post-types',
			static function ( $types ) {
				$types[] = self::PRIVATE_CPT;
				return $types;
			}
		);
		$form_as_post = $this->meta_form();
		update_post_meta( $form_as_post, '_ctx_meta', 'form-settings' );
		$internal = $this->source_post( 'publish', self::PRIVATE_CPT );
		$form     = $this->meta_form();

		foreach ( array( $form_as_post, $internal ) as $post_id ) {
			$fields = $this->render( $form, $post_id );
			$this->assertNotSame( (string) $post_id, $fields['__queried_post_id'] );
			$this->assertFalse( Submitted_Post_Context::can_read_post( $post_id ) );
		}

		wp_set_current_user( $this->subscriber );
		$this->assertFalse( Submitted_Post_Context::can_read_post( $form_as_post ), 'Subscriber may not use a form post.' );
		wp_set_current_user( $this->admin );
		$this->assertTrue( Submitted_Post_Context::can_read_post( $form_as_post ), 'An editor of the post keeps it.' );
	}

	public function testAjaxRefererToCptItemWithoutSinglePageIsNotTrusted(): void {
		$this->register_cpt( self::CPT, array( 'public' => true, 'publicly_queryable' => false ) );
		$item   = $this->source_post( 'publish', self::CPT );
		$fields = $this->ajax_render( $this->meta_form(), home_url( '/?p=' . $item ) );

		$this->assertNotSame( (string) $item, $fields['__queried_post_id'] );
		$this->assertFalse( Submitted_Post_Context::can_read_post( $item, Submitted_Post_Context::STRICT ) );
		$this->assertTrue( Submitted_Post_Context::can_read_post( $item ) );
	}

	public function testAjaxPopupStillUsesThePublicRefererPage(): void {
		$page   = $this->source_post();
		$form   = $this->meta_form();
		$fields = $this->ajax_render( $form, get_permalink( $page ) );

		$this->assertSame( (string) $page, $fields['__queried_post_id'] );
		$this->assertSame( 'canary-' . $page, $this->server_meta( $form, $fields ) );
	}

	/* ------------------------- logged-in visitors ------------------------ */

	/**
	 * WordPress grants read_post on every published post, also of non-public
	 * types (coupons, menu items). A subscriber must not get them as context.
	 */
	public function testSubscriberDoesNotGetPublishedItemsOfNonPublicTypes(): void {
		$this->register_cpt( self::CPT, array( 'public' => false, 'show_ui' => true ) );
		$item = $this->source_post( 'publish', self::CPT );
		$form = $this->meta_form();
		wp_set_current_user( $this->subscriber );

		$this->assertTrue( current_user_can( 'read_post', $item ), 'Precondition: core grants read_post.' );
		$this->assertFalse( Submitted_Post_Context::can_read_post( $item ) );
		$this->assertFalse( Submitted_Post_Context::can_read_post( $item, Submitted_Post_Context::STRICT ) );
		$this->assertNotSame( (string) $item, $this->ajax_render_global( $form, $item )['__queried_post_id'] );
		$this->assertNotSame( (string) $item, $this->ajax_render( $form, home_url( '/?p=' . $item ) )['__queried_post_id'] );

		wp_set_current_user( $this->admin );
		$this->assertTrue( Submitted_Post_Context::can_read_post( $item ), 'Editors keep their own data.' );
	}

	public function testSubscriberDoesNotGetRevisionsOfPublishedPosts(): void {
		$page = $this->source_post();
		wp_update_post( array( 'ID' => $page, 'post_title' => 'Changed title' ) );
		$revisions = wp_get_post_revisions( $page );
		$this->assertNotEmpty( $revisions );
		wp_set_current_user( $this->subscriber );

		$this->assertTrue( Submitted_Post_Context::can_read_post( $page ) );
		$this->assertFalse( Submitted_Post_Context::can_read_post( array_key_first( $revisions ) ) );
	}

	public function testSubscriberKeepsPublicPostsAndOwnDrafts(): void {
		$page = $this->source_post();
		$own  = self::factory()->post->create( array( 'post_status' => 'draft', 'post_author' => $this->subscriber ) );
		wp_set_current_user( $this->subscriber );

		$this->assertTrue( Submitted_Post_Context::can_read_post( $page ) );
		$this->assertTrue( Submitted_Post_Context::can_read_post( $own ) );
	}

	/* --------------------------- other sources --------------------------- */

	/**
	 * Add-ons call setup_postdata() for a post chosen by the client (JetPopup,
	 * JetEngine popups). Author fields must follow the readable context only.
	 */
	public function testAuthorFieldsDoNotUseAuthorOfUnreadablePost(): void {
		$author = self::factory()->user->create( array( 'role' => 'editor', 'user_email' => 'hidden-author@example.org' ) );
		$draft  = self::factory()->post->create( array( 'post_status' => 'draft', 'post_author' => $author ) );
		$form   = $this->form( $this->block( 'hidden-field', array( 'name' => 'author_email', 'field_value' => 'author_email' ) ) );

		setup_postdata( get_post( $draft ) );
		$fields = $this->render( $form, $draft );
		wp_reset_postdata();

		$this->assertNotSame( 'hidden-author@example.org', $fields['author_email'] ?? '' );
	}

	public function testShortSigningKeyFromFilterIsIgnored(): void {
		$signature = Submitted_Post_Context::sign( 10, 20 );

		add_filter( 'jet-form-builder/post-context/signing-key', '__return_empty_string' );

		$this->assertSame( $signature, Submitted_Post_Context::sign( 10, 20 ) );
		$this->assertNotSame( hash_hmac( 'sha256', 'submitted-post:1:10:20', '' ), Submitted_Post_Context::sign( 10, 20 ) );
	}

	/**
	 * JetEngine reads its current object from $_REQUEST['post_id'] on AJAX.
	 * During a submission it gets the accepted context or nothing.
	 */
	public function testJetEngineObjectFollowsAcceptedContextDuringSubmission(): void {
		$page    = $this->source_post();
		$private = $this->source_post( 'private' );
		$form    = $this->meta_form();

		$this->reset_handler();
		$outside = apply_filters( 'jet-engine/listings/data/default-object', get_post( $private ) );
		$this->assertSame( $private, $outside->ID ?? 0, 'Untouched outside a submission.' );

		$fields = $this->render( $form, $page );
		$this->submit( $fields );
		$pinned = apply_filters( 'jet-engine/listings/data/default-object', get_post( $private ) );
		$this->assertSame( $page, $pinned->ID ?? 0 );

		$fields['__queried_post_id'] = (string) $private;
		$this->submit( $fields );
		$this->assertFalse( apply_filters( 'jet-engine/listings/data/default-object', get_post( $private ) ) );

		$term = self::factory()->term->create_and_get();
		$this->assertSame( $term, apply_filters( 'jet-engine/listings/data/default-object', $term ), 'Terms are left alone.' );
	}

	/* --------------------- recovery by form placement -------------------- */

	private function page_with( string $content, string $status = 'publish', array $args = array() ): int {
		$current = get_current_user_id();
		wp_set_current_user( $this->admin );
		$id = (int) wp_insert_post(
			array_merge(
				array( 'post_type' => 'page', 'post_status' => $status, 'post_title' => 'Host', 'post_content' => wp_slash( $content ), 'post_author' => $this->admin ),
				$args
			)
		);
		wp_set_current_user( $current );
		update_post_meta( $id, '_ctx_meta', 'canary-' . $id );

		return $id;
	}

	private function form_block( int $form ): string {
		return $this->block( 'form-block', array( 'form_id' => $form ) );
	}

	private function reusable( string $content ): int {
		$current = get_current_user_id();
		wp_set_current_user( $this->admin );
		$id = (int) wp_insert_post( array( 'post_type' => 'wp_block', 'post_status' => 'publish', 'post_title' => 'Reusable', 'post_content' => wp_slash( $content ) ) );
		wp_set_current_user( $current );

		return $id;
	}

	private function elementor_page( int $form, string $mode, array $container = array(), array $widget = array() ): int {
		$page = $this->page_with( '' );
		$data = array(
			array(
				'elType'   => 'container',
				'settings' => $container,
				'elements' => array(
					array( 'elType' => 'widget', 'widgetType' => 'jet-form-builder-form', 'settings' => array_merge( array( 'form_id' => (string) $form ), $widget ), 'elements' => array() ),
				),
			),
		);
		update_post_meta( $page, '_elementor_data', wp_slash( wp_json_encode( $data ) ) );
		update_post_meta( $page, '_elementor_edit_mode', $mode );

		return $page;
	}

	public function testPlacementDetectsEveryWayToPutAFormIntoContent(): void {
		$form  = $this->meta_form();
		$other = $this->plain_form();

		$this->assertTrue( Submitted_Post_Context::form_is_placed_in( $form, $this->page_with( $this->form_block( $form ) ) ), 'block' );
		$this->assertTrue(
			Submitted_Post_Context::form_is_placed_in( $form, $this->page_with( '<!-- wp:group --><div>' . $this->form_block( $form ) . '</div><!-- /wp:group -->' ) ),
			'nested block'
		);
		$ref = $this->reusable( $this->form_block( $form ) );
		$this->assertTrue( Submitted_Post_Context::form_is_placed_in( $form, $this->page_with( '<!-- wp:block {"ref":' . $ref . '} /-->' ) ), 'reusable block' );
		$this->assertTrue( Submitted_Post_Context::form_is_placed_in( $form, $this->page_with( 'Text [jet_fb_form form_id="' . $form . '"] text' ) ), 'shortcode' );
		$elementor = $this->elementor_page( $form, 'builder' );
		$this->assertFalse( Submitted_Post_Context::form_is_placed_in( $form, $elementor ), 'Elementor inactive' );
		$GLOBALS['wp_actions']['elementor/loaded'] = 1;
		$this->assertTrue( Submitted_Post_Context::form_is_placed_in( $form, $elementor ), 'Elementor' );

		$this->assertFalse( Submitted_Post_Context::form_is_placed_in( $form, $this->page_with( $this->form_block( $other ) ) ), 'another form' );
		$this->assertFalse( Submitted_Post_Context::form_is_placed_in( $form, $this->page_with( 'Text [[jet_fb_form form_id="' . $form . '"]]' ) ), 'escaped shortcode' );
		$this->assertFalse( Submitted_Post_Context::form_is_placed_in( $form, $this->elementor_page( $form, '' ) ), 'stale Elementor data' );
		$this->assertFalse( Submitted_Post_Context::form_is_placed_in( $form, $this->page_with( 'Plain text' ) ), 'no form' );

		$hidden = $this->block( 'form-block', array( 'form_id' => $form, 'metadata' => array( 'blockVisibility' => false ) ) );
		$this->assertFalse( Submitted_Post_Context::form_is_placed_in( $form, $this->page_with( $hidden ) ), 'hidden block' );
		$this->assertFalse(
			Submitted_Post_Context::form_is_placed_in( $form, $this->page_with( '<!-- wp:group {"metadata":{"blockVisibility":false}} --><div>' . $this->form_block( $form ) . '</div><!-- /wp:group -->' ) ),
			'inside a hidden group'
		);
		$locked = $this->reusable( $this->form_block( $form ) );
		wp_update_post( array( 'ID' => $locked, 'post_password' => 'pw' ) );
		$this->assertFalse( Submitted_Post_Context::form_is_placed_in( $form, $this->page_with( '<!-- wp:block {"ref":' . $locked . '} /-->' ) ), 'password reusable block' );
		$this->assertFalse( Submitted_Post_Context::form_is_placed_in( $form, $this->page_with( '<!-- [jet_fb_form form_id="' . $form . '"] -->' ) ), 'commented shortcode' );
		$this->assertFalse(
			Submitted_Post_Context::form_is_placed_in( $form, $this->page_with( '<!-- wp:query --><!-- wp:post-template -->' . $this->form_block( $form ) . '<!-- /wp:post-template --><!-- /wp:query -->' ) ),
			'query loop template'
		);
		$this->assertTrue(
			Submitted_Post_Context::form_is_placed_in( $form, $this->page_with( '<!-- wp:shortcode -->[jet_fb_form form_id="' . $form . '"]<!-- /wp:shortcode -->' ) ),
			'shortcode block'
		);

		$shortcode = '[jet_fb_form form_id="' . $form . '"]';
		$this->assertFalse(
			Submitted_Post_Context::form_is_placed_in(
				$form,
				$this->page_with( '<!-- wp:group {"metadata":{"blockVisibility":false}} --><div class="wp-block-group"><!-- wp:shortcode -->' . $shortcode . '<!-- /wp:shortcode --></div><!-- /wp:group -->' )
			),
			'shortcode block inside a hidden group'
		);
		$this->assertFalse(
			Submitted_Post_Context::form_is_placed_in(
				$form,
				$this->page_with( '<!-- wp:paragraph {"metadata":{"blockVisibility":false}} --><p>' . $shortcode . '</p><!-- /wp:paragraph -->' )
			),
			'shortcode in a hidden paragraph'
		);
		$this->assertFalse(
			Submitted_Post_Context::form_is_placed_in(
				$form,
				$this->page_with( '<!-- wp:query --><!-- wp:post-template --><!-- wp:shortcode -->' . $shortcode . '<!-- /wp:shortcode --><!-- /wp:post-template --><!-- /wp:query -->' )
			),
			'shortcode in a query loop template'
		);
		$this->assertTrue(
			Submitted_Post_Context::form_is_placed_in(
				$form,
				$this->page_with( '<!-- wp:paragraph --><p>Intro</p><!-- /wp:paragraph -->' . "\n" . $shortcode . "\n" . '<!-- wp:paragraph --><p>Outro</p><!-- /wp:paragraph -->' )
			),
			'shortcode as classic content between blocks'
		);
		$hidden_reusable = $this->reusable( '<!-- wp:paragraph {"metadata":{"blockVisibility":false}} --><p>' . $shortcode . '</p><!-- /wp:paragraph -->' );
		$this->assertFalse(
			Submitted_Post_Context::form_is_placed_in( $form, $this->page_with( '<!-- wp:block {"ref":' . $hidden_reusable . '} /-->' ) ),
			'shortcode hidden inside a reusable block'
		);
	}

	/**
	 * Page cached before the update: no signature, the form is in the page.
	 */
	public function testCachedFormPlacedInPublicPageKeepsItsPost(): void {
		$form   = $this->meta_form();
		$page   = $this->page_with( $this->form_block( $form ) );
		$fields = $this->render( $form, $page );
		unset( $fields['__queried_post_signature'] );

		$result = $this->submit( $fields );

		$this->assertNull( $result['status'] );
		$this->assertSame( $page, $result['accepted'], 'The page is accepted from the placement proof.' );
		$this->assertSame( '', $result['reason'] );
		$this->assertSame( 'canary-' . $page, $this->server_meta( $form, $fields ) );
	}

	public function unrecoverable_provider(): array {
		return array(
			'private page with the form' => array( 'private', true, false ),
			'draft page with the form'   => array( 'draft', true, false ),
			'password page with the form' => array( 'password', true, false ),
			'public page without the form' => array( 'publish', false, false ),
			'changed ID next to a signature' => array( 'publish', true, true ),
		);
	}

	/**
	 * The proof never opens a closed post, a post without this form, or a
	 * changed ID that still carries a signature.
	 *
	 * @dataProvider unrecoverable_provider
	 */
	public function testPlacementProofDoesNotOpenOtherPosts( string $status, bool $placed, bool $keep_signature ): void {
		$form   = $this->meta_form();
		$host   = $this->page_with( $this->form_block( $form ) );
		$args   = 'password' === $status ? array( 'post_password' => 'secret' ) : array();
		$target = $this->page_with( $placed ? $this->form_block( $form ) : 'Nothing here', 'password' === $status ? 'publish' : $status, $args );
		$fields = $this->render( $form, $host );

		$fields['__queried_post_id'] = (string) $target;
		if ( ! $keep_signature ) {
			unset( $fields['__queried_post_signature'] );
		}

		$this->assertSame( Submitted_Post_Context::EXPIRED_STATUS, $this->submit( $fields )['status'] );
		$this->assertNotSame( 'canary-' . $target, $this->server_meta( $form, $fields ) );
	}

	/**
	 * Form rendered without a post (third-party renderer), AJAX submit from a
	 * page that contains the form: the page is the context, as before.
	 */
	public function testAjaxSubmitOfFormRenderedWithoutPostUsesPageThatContainsIt(): void {
		$form   = $this->meta_form();
		$page   = $this->page_with( $this->form_block( $form ) );
		$fields = $this->render( $form, 0 );
		$fields['_jet_engine_refer'] = get_permalink( $page );

		add_filter( 'wp_doing_ajax', '__return_true' );
		$value = $this->server_meta( $form, $fields );
		remove_filter( 'wp_doing_ajax', '__return_true' );

		$this->assertSame( 'canary-' . $page, $value );
	}

	public function no_post_referer_provider(): array {
		return array(
			'page without the form' => array( 'publish', false, true ),
			'private page'          => array( 'private', true, true ),
			'not an AJAX submit'    => array( 'publish', true, false ),
		);
	}

	/**
	 * @dataProvider no_post_referer_provider
	 */
	public function testFormRenderedWithoutPostDoesNotTakeOtherReferers( string $status, bool $placed, bool $ajax ): void {
		$form   = $this->meta_form();
		$page   = $this->page_with( $placed ? $this->form_block( $form ) : 'Nothing here', $status );
		$fields = $this->render( $form, 0 );
		$fields['_jet_engine_refer'] = get_permalink( $page );

		if ( $ajax ) {
			add_filter( 'wp_doing_ajax', '__return_true' );
		}
		$value = $this->server_meta( $form, $fields );
		remove_filter( 'wp_doing_ajax', '__return_true' );

		$this->assertNotSame( 'canary-' . $page, $value );
	}

	public function testRecordOfRecoveredSubmissionKeepsThePage(): void {
		$form   = $this->plain_form();
		$page   = $this->page_with( $this->form_block( $form ) );
		$fields = $this->render( $form, $page );
		unset( $fields['__queried_post_signature'] );
		$fields['_jet_engine_refer'] = home_url( '/' );

		$this->submit( $fields );
		jet_form_builder()->form_handler->set_response_args( array( 'status' => 'success' ) );
		$record_id = ( new \JFB_Modules\Form_Record\Controller() )->save_record();

		global $wpdb;
		$table = \JFB_Modules\Form_Record\Models\Record_Model::table();
		$this->assertSame( (string) $page, (string) $wpdb->get_var( $wpdb->prepare( "SELECT from_content_id FROM {$table} WHERE id = %d", $record_id ) ) );
	}

	/* ------------------------- post context token ------------------------ */

	private function token_in_listing( int $form, int $item, bool $ajax = false ): string {
		$GLOBALS['post'] = get_post( $item );
		if ( $ajax ) {
			add_filter( 'wp_doing_ajax', '__return_true' );
		}
		$token = do_shortcode( '[jet_fb_post_context form_id="' . $form . '"]' );
		remove_filter( 'wp_doing_ajax', '__return_true' );

		return $token;
	}

	/**
	 * One form for a whole listing: the item token switches it to the item.
	 */
	public function testListingItemTokenSwitchesSharedForm(): void {
		$page   = $this->source_post();
		$item   = $this->source_post();
		$form   = $this->meta_form();
		$token  = $this->token_in_listing( $form, $item );
		$fields = $this->render( $form, $page );

		$this->assertMatchesRegularExpression( '/^' . $item . '\.[a-f0-9]{64}$/', $token );
		list( $fields['__queried_post_id'], $fields['__queried_post_signature'] ) = explode( '.', $token );

		$this->assertNull( $this->submit( $fields )['status'] );
		$this->assertSame( 'canary-' . $item, $this->server_meta( $form, $fields ) );
	}

	public function testTokenOfOneFormDoesNotWorkForAnother(): void {
		$item   = $this->source_post();
		$form   = $this->meta_form();
		$other  = $this->meta_form();
		$fields = $this->render( $other, $this->source_post() );

		list( $fields['__queried_post_id'], $fields['__queried_post_signature'] ) = explode( '.', $this->token_in_listing( $form, $item ) );

		$this->assertSame( Submitted_Post_Context::EXPIRED_STATUS, $this->submit( $fields )['status'] );
	}

	public function testNoTokenForClosedPostsOrUnknownForms(): void {
		$form = $this->meta_form();

		$this->assertSame( '', $this->token_in_listing( $form, $this->source_post( 'private' ) ), 'private' );
		$this->assertSame( '', $this->token_in_listing( $form, $this->source_post( 'draft' ) ), 'draft' );
		$this->assertSame( '', $this->token_in_listing( $this->source_post(), $this->source_post() ), 'not a form' );
		$this->assertSame( '', $this->token_in_listing( 0, $this->source_post() ), 'no form' );

		$this->register_cpt( self::CPT, array( 'public' => false, 'show_ui' => true ) );
		$item = $this->source_post( 'publish', self::CPT );
		$this->assertSame( '', $this->token_in_listing( $form, $item ), 'non-public item without opt-in' );
		$this->list_types( array( self::CPT ) );
		$this->assertNotSame( '', $this->token_in_listing( $form, $item ), 'opted-in non-public item on a regular page' );
		$this->assertSame( '', $this->token_in_listing( $form, $item, true ), 'non-public item in an AJAX render' );
	}

	/**
	 * Builders that render listings from request data on regular URLs can mark
	 * the render as client-driven; the filter can never relax an AJAX render.
	 */
	public function testRenderModeFilterOnlyMakesItStricter(): void {
		$this->register_cpt( self::CPT, array( 'public' => false, 'show_ui' => true ) );
		$item = $this->source_post( 'publish', self::CPT );
		$form = $this->meta_form();
		$this->list_types( array( self::CPT ) );
		$this->assertSame( (string) $item, $this->render( $form, $item )['__queried_post_id'], 'Precondition.' );

		add_filter( 'jet-form-builder/post-context/render-mode', static function () { return Submitted_Post_Context::RENDERED; } );
		$this->assertNotSame( (string) $item, $this->render( $form, $item )['__queried_post_id'] );
		remove_all_filters( 'jet-form-builder/post-context/render-mode' );

		add_filter( 'jet-form-builder/post-context/render-mode', static function () { return Submitted_Post_Context::PAGE; } );
		$this->assertNotSame( (string) $item, $this->ajax_render_global( $form, $item )['__queried_post_id'] );
		remove_all_filters( 'jet-form-builder/post-context/render-mode' );
	}

	/**
	 * The placement proof only opens posts any guest can open (STRICT): not
	 * items of public types without single pages, not non-public items.
	 */
	public function testPlacementProofNeedsAPostGuestsCanOpen(): void {
		$form = $this->meta_form();
		$this->register_cpt( self::CPT, array( 'public' => true, 'publicly_queryable' => false ) );
		$this->register_cpt( self::PRIVATE_CPT, array( 'public' => false, 'show_ui' => true ) );
		$this->list_types( array( self::PRIVATE_CPT ) );
		$host = $this->page_with( $this->form_block( $form ) );

		foreach ( array( self::CPT, self::PRIVATE_CPT ) as $type ) {
			$current = get_current_user_id();
			wp_set_current_user( $this->admin );
			$item = (int) wp_insert_post( array( 'post_type' => $type, 'post_status' => 'publish', 'post_title' => 'Item', 'post_content' => wp_slash( $this->form_block( $form ) ) ) );
			wp_set_current_user( $current );
			update_post_meta( $item, '_ctx_meta', 'canary-' . $item );

			$fields = $this->render( $form, $host );
			$fields['__queried_post_id'] = (string) $item;
			unset( $fields['__queried_post_signature'] );

			$this->assertSame( Submitted_Post_Context::EXPIRED_STATUS, $this->submit( $fields )['status'], $type );
		}
	}

	/**
	 * Repeater "custom" calculation reads META only from the post the visitor
	 * may use, like the Calculated Field.
	 */
	public function testRepeaterMetaFormulaUsesReadablePostOnly(): void {
		$type = clone jet_form_builder()->blocks->get_field_by_name( 'repeater-field' );
		$this->assertIsObject( $type );
		$formula = function ( int $post_id ) use ( $type ) {
			Live_Form::clear();
			$GLOBALS['post']   = get_post( $post_id );
			$type->block_attrs = array( 'calc_formula' => '%META::_ctx_meta%', 'repeater_calc_type' => 'custom' );
			$type->set_calc_type();

			return $type->get_calculated_formula();
		};

		$public   = $this->source_post();
		$password = $this->page_with( 'Secret', 'publish', array( 'post_password' => 'pw' ) );

		// The value is inserted JSON-encoded ("canary\u002d<ID>").
		$this->assertStringContainsString( 'canary', $formula( $public ) );
		$this->assertStringNotContainsString( 'canary', $formula( $password ) );
	}

	/**
	 * Forms that visitors may not get (hidden or conditional blocks, Elementor
	 * display conditions) never count as placed: an unsigned submission could
	 * otherwise claim a pair the server never rendered.
	 */
	public function testConditionallyShownFormsAreNotPlaced(): void {
		$form      = $this->meta_form();
		$shortcode = '[jet_fb_form form_id="' . $form . '"]';
		$placed    = static function ( int $post ) use ( $form ) {
			return Submitted_Post_Context::form_is_placed_in( $form, $post );
		};

		$this->assertFalse( $placed( $this->page_with( $this->block( 'form-block', array( 'form_id' => $form, 'jetDynamicVisibility' => array( 'jedv_enabled' => true, 'jedv_conditions' => array( array( 'jedv_condition' => 'user-logged-in' ) ) ) ) ) ) ), 'JetEngine dynamic visibility block' );
		$this->assertFalse( $placed( $this->page_with( '<!-- wp:group {"blockVisibility":{"controlSets":[{"enable":true}]}} --><div>' . $this->form_block( $form ) . '</div><!-- /wp:group -->' ) ), 'Block Visibility plugin' );
		$this->assertFalse( $placed( $this->page_with( '[jet_engine_condition jedv_condition="user-logged-in"]' . $shortcode . '[/jet_engine_condition]' ) ), 'JetEngine condition shortcode' );
		$this->assertTrue( $placed( $this->page_with( '[jet_engine_condition jedv_condition="user-logged-in"]Members only[/jet_engine_condition] ' . $shortcode ) ), 'form outside the condition shortcode' );

		$GLOBALS['wp_actions']['elementor/loaded'] = 1;
		$this->assertTrue( $placed( $this->elementor_page( $form, 'builder' ) ), 'Precondition: Elementor widget counts.' );
		$this->assertFalse( $placed( $this->elementor_page( $form, 'builder', array( 'e_display_conditions' => array( '[[{"condition":"user_logged_in"}]]' ) ) ) ), 'Elementor Pro display conditions on the container' );
		$this->assertFalse( $placed( $this->elementor_page( $form, 'builder', array(), array( 'jedv_enabled' => 'yes' ) ) ), 'JetEngine visibility on the widget' );
	}

	/**
	 * A form hidden in a public page does not let a submission without a
	 * signature read that page.
	 */
	public function testHiddenShortcodeDoesNotRecoverUnsignedSubmission(): void {
		$form   = $this->meta_form();
		$hidden = $this->page_with(
			'<!-- wp:group {"metadata":{"blockVisibility":false}} --><div class="wp-block-group"><!-- wp:shortcode -->[jet_fb_form form_id="' . $form . '"]<!-- /wp:shortcode --></div><!-- /wp:group -->'
		);
		$fields = $this->render( $form, $this->source_post() );
		$fields['__queried_post_id'] = (string) $hidden;
		unset( $fields['__queried_post_signature'] );

		$this->assertSame( Submitted_Post_Context::EXPIRED_STATUS, $this->submit( $fields )['status'] );
		$this->assertNotSame( 'canary-' . $hidden, $this->server_meta( $form, $fields ) );
	}
}
