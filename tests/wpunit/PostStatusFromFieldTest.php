<?php

namespace JFB_Tests\Wpunit;

use JFB_Modules\Actions_V2\Insert_Post\Insert_Post_Action;

/**
 * Insert/Update Post can take the post status from a form field. The
 * submitted value is visitor data: a select, radio or checkbox with options
 * the author typed in may only set one of those options, and any field may
 * only set a registered, non-internal status.
 */
class PostStatusFromFieldTest extends \Codeception\TestCase\WPTestCase {

	protected function tearDown(): void {
		wp_set_current_user( 0 );

		parent::tearDown();
	}

	private function block( string $name, array $attrs ): string {
		return '<!-- wp:jet-forms/' . $name . ' ' . wp_json_encode( (object) $attrs ) . ' /-->';
	}

	private function select( array $values ): string {
		return $this->block(
			'select-field',
			array(
				'name'          => 'status',
				'field_options' => array_map(
					static function ( $value ) {
						return array( 'value' => $value, 'label' => ucfirst( $value ) );
					},
					$values
				),
			)
		);
	}

	/**
	 * Runs Insert Post as a guest and returns the status of the new post.
	 */
	private function submit( string $status_field, string $sent, string $setting = 'from-field' ): string {
		jet_fb_action_handler()->response_data = array();

		$blocks = $this->block( 'text-field', array( 'name' => 'title' ) ) . $status_field;

		jet_fb_context()->set_parsers( parse_blocks( $blocks ) );
		jet_fb_context()->set_request( array( 'title' => 'Status test', 'status' => $sent ) );
		jet_fb_context()->apply_request();

		$action      = new Insert_Post_Action();
		$action->_id = 9400;

		jet_fb_action_handler()->save_action( $action, array() );

		$action->settings = array(
			'post_type'   => 'post',
			'post_status' => $setting,
			'fields_map'  => array(
				'title'  => 'post_title',
				'status' => 'post_status',
			),
		);

		jet_fb_action_handler()->process_single_action( $action );

		return (string) get_post_status( jet_fb_action_handler()->get_inserted_post_id() );
	}

	public function testNotOfferedStatusIsIgnored(): void {
		$this->assertSame( 'draft', $this->submit( $this->select( array( 'draft', 'pending' ) ), 'publish' ) );
		$this->assertSame( 'draft', $this->submit( $this->select( array( 'draft', 'pending' ) ), 'private' ) );
	}

	public function testUnknownStatusIsIgnored(): void {
		$hidden = $this->block( 'hidden-field', array( 'name' => 'status' ) );

		$this->assertSame( 'draft', $this->submit( $hidden, 'no-such-status' ) );
		$this->assertSame( 'draft', $this->submit( $hidden, 'inherit' ) );
	}

	/**
	 * Backward compatibility: an offered option is used.
	 */
	public function testOfferedStatusIsUsed(): void {
		$this->assertSame( 'pending', $this->submit( $this->select( array( 'draft', 'pending' ) ), 'pending' ) );
		$this->assertSame( 'publish', $this->submit( $this->select( array( 'pending', 'publish' ) ), 'publish' ) );
	}

	/**
	 * Backward compatibility: a hidden or text field may send any registered
	 * status, as before.
	 */
	public function testHiddenFieldStatusIsUsed(): void {
		$this->assertSame( 'publish', $this->submit( $this->block( 'hidden-field', array( 'name' => 'status' ) ), 'publish' ) );
		$this->assertSame( 'trash', $this->submit( $this->block( 'hidden-field', array( 'name' => 'status' ) ), 'trash' ) );
	}

	/**
	 * Backward compatibility: a status set in the action settings is not
	 * limited.
	 */
	public function testStatusFromSettingsIsUsed(): void {
		$this->assertSame( 'publish', $this->submit( $this->block( 'text-field', array( 'name' => 'other' ) ), '', 'publish' ) );
	}

	/**
	 * The jet-form-builder/insert-post/allow-field-status filter restores the
	 * old behaviour for a site that needs it.
	 */
	public function testFilterAllowsStatus(): void {
		add_filter( 'jet-form-builder/insert-post/allow-field-status', '__return_true' );

		try {
			$this->assertSame( 'publish', $this->submit( $this->select( array( 'draft' ) ), 'publish' ) );
		} finally {
			remove_filter( 'jet-form-builder/insert-post/allow-field-status', '__return_true' );
		}
	}
}
