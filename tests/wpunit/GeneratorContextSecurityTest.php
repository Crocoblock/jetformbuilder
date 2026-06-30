<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Generators\Get_From_DB;
use Jet_Form_Builder\Generators\Get_From_Users;
use JFB_Modules\Option_Field\Rest_Api\Generator_Update_Endpoint;

class GeneratorContextSecurityTest extends \Codeception\TestCase\WPTestCase {

	/**
	 * @var \WpunitTester
	 */
	protected $tester;

	public function tearDown(): void {
		wp_set_current_user( 0 );

		parent::tearDown();
	}

	public function testGetFromDbContextCannotOverrideSavedMetaKey() {
		$public_key = 'jfb_public_meta_' . wp_generate_password( 8, false );
		$secret_key = 'jfb_secret_meta_' . wp_generate_password( 8, false );

		$public_post_id = $this->factory()->post->create();
		$secret_post_id = $this->factory()->post->create();

		update_post_meta( $public_post_id, $public_key, 'public-value' );
		update_post_meta( $secret_post_id, $secret_key, 'secret-value' );

		$options = ( new Get_From_DB() )->generate_with_context(
			array( 'meta_key' => $public_key ),
			array( 'trigger' => $secret_key )
		);

		$values = $this->get_option_values( $options );

		$this->assertContains( 'public-value', $values );
		$this->assertNotContains( 'secret-value', $values );
	}

	public function testGetFromDbEmptyContextUsesSavedMetaKey() {
		$public_key = 'jfb_public_meta_' . wp_generate_password( 8, false );
		$post_id    = $this->factory()->post->create();

		update_post_meta( $post_id, $public_key, 'public-value' );

		$options = ( new Get_From_DB() )->generate_with_context(
			array( 'meta_key' => $public_key ),
			array()
		);

		$this->assertContains( 'public-value', $this->get_option_values( $options ) );
	}

	public function testGetFromDbLegacyGeneratorFieldStillWorks() {
		$public_key = 'jfb_public_meta_' . wp_generate_password( 8, false );
		$post_id    = $this->factory()->post->create();

		update_post_meta( $post_id, $public_key, 'legacy-value' );

		$options = ( new Get_From_DB() )->generate_with_context(
			array( 'generator_field' => $public_key ),
			array( 'trigger' => 'ignored_meta_key' )
		);

		$this->assertContains( 'legacy-value', $this->get_option_values( $options ) );
	}

	public function testGetFromUsersContextCannotExpandConfiguredRoles() {
		$subscriber_id = $this->factory()->user->create( array( 'role' => 'subscriber' ) );
		$admin_id      = $this->factory()->user->create( array( 'role' => 'administrator' ) );

		$options = ( new Get_From_Users() )->generate_with_context(
			array(
				'roles'           => array( 'subscriber' ),
				'value_field'     => 'ID',
				'label_field'     => 'display_name',
				'include_current' => true,
				'_jfb_runtime'    => array(
					'allowed_roles' => array( 'subscriber' ),
				),
			),
			array( 'trigger' => 'administrator' )
		);

		$values = $this->get_option_values( $options );

		$this->assertContains( (string) $subscriber_id, $values );
		$this->assertNotContains( (string) $admin_id, $values );
	}

	public function testGetFromUsersContextCanNarrowConfiguredRoles() {
		$subscriber_id = $this->factory()->user->create( array( 'role' => 'subscriber' ) );
		$editor_id     = $this->factory()->user->create( array( 'role' => 'editor' ) );

		$options = ( new Get_From_Users() )->generate_with_context(
			array(
				'roles'           => array( 'subscriber', 'editor' ),
				'value_field'     => 'ID',
				'label_field'     => 'display_name',
				'include_current' => true,
				'_jfb_runtime'    => array(
					'allowed_roles' => array( 'editor' ),
				),
			),
			array( 'trigger' => 'editor' )
		);

		$values = $this->get_option_values( $options );

		$this->assertContains( (string) $editor_id, $values );
		$this->assertNotContains( (string) $subscriber_id, $values );
	}

	public function testGetFromUsersEmptySavedRolesCanStillUseContextRole() {
		$subscriber_id = $this->factory()->user->create( array( 'role' => 'subscriber' ) );
		$editor_id     = $this->factory()->user->create( array( 'role' => 'editor' ) );

		$options = ( new Get_From_Users() )->generate_with_context(
			array(
				'roles'           => array(),
				'value_field'     => 'ID',
				'label_field'     => 'display_name',
				'include_current' => true,
				'_jfb_runtime'    => array(
					'allowed_roles' => array( 'subscriber' ),
				),
			),
			array( 'trigger' => 'subscriber' )
		);

		$values = $this->get_option_values( $options );

		$this->assertContains( (string) $subscriber_id, $values );
		$this->assertNotContains( (string) $editor_id, $values );
	}

	public function testGetFromUsersContextCanUseFilterExtendedAllowedRoles() {
		$subscriber_id = $this->factory()->user->create( array( 'role' => 'subscriber' ) );
		$editor_id     = $this->factory()->user->create( array( 'role' => 'editor' ) );

		$filter = static function ( array $allowed_roles ) {
			$allowed_roles[] = 'subscriber';

			return $allowed_roles;
		};

		add_filter( 'jet-form-builder/generators/get-from-users/allowed-roles', $filter );

		$options = ( new Get_From_Users() )->generate_with_context(
			array(
				'roles'           => array(),
				'value_field'     => 'ID',
				'label_field'     => 'display_name',
				'include_current' => true,
			),
			array( 'trigger' => 'subscriber' )
		);

		remove_filter( 'jet-form-builder/generators/get-from-users/allowed-roles', $filter );

		$values = $this->get_option_values( $options );

		$this->assertContains( (string) $subscriber_id, $values );
		$this->assertNotContains( (string) $editor_id, $values );
	}

	public function testGetFromUsersCanDisableDynamicRoleValidationViaFilter() {
		$subscriber_id = $this->factory()->user->create( array( 'role' => 'subscriber' ) );
		$admin_id      = $this->factory()->user->create( array( 'role' => 'administrator' ) );

		$filter = static function () {
			return false;
		};

		add_filter( 'jet-form-builder/generators/get-from-users/validate_dynamic_roles', $filter );

		$options = ( new Get_From_Users() )->generate_with_context(
			array(
				'roles'           => array( 'subscriber' ),
				'value_field'     => 'ID',
				'label_field'     => 'display_name',
				'include_current' => true,
			),
			array( 'trigger' => 'administrator' )
		);

		remove_filter( 'jet-form-builder/generators/get-from-users/validate_dynamic_roles', $filter );

		$values = $this->get_option_values( $options );

		$this->assertContains( (string) $admin_id, $values );
		$this->assertNotContains( (string) $subscriber_id, $values );
	}

	public function testGeneratorUpdateEndpointCannotOverrideSavedMetaKeyWithContext() {
		$public_key = 'jfb_public_meta_' . wp_generate_password( 8, false );
		$secret_key = 'jfb_secret_meta_' . wp_generate_password( 8, false );

		$public_post_id = $this->factory()->post->create();
		$secret_post_id = $this->factory()->post->create();

		update_post_meta( $public_post_id, $public_key, 'public-rest-value' );
		update_post_meta( $secret_post_id, $secret_key, 'secret-rest-value' );

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Generated options form',
				'post_content' => $this->get_generated_select_block_content(
					'my_select',
					$public_key,
					array( 'trigger' )
				) . $this->get_source_select_block_content(
					'trigger',
					array( 'public_key_alias' )
				),
			)
		);

		$request = new \WP_REST_Request( 'POST', '/jet-form-builder/v1/generator-update' );
		$request->set_header( 'Content-Type', 'application/json' );
		$request->set_body(
			wp_json_encode(
				array(
					'form_id'      => $form_id,
					'field_name'   => 'my_select',
					'generator_id' => 'get_from_db',
					'context'      => array( 'trigger' => $secret_key ),
				)
			)
		);

		$response = ( new Generator_Update_Endpoint() )->run_callback( $request );
		$data     = $response->get_data();

		$this->assertSame( 200, $response->get_status() );
		$this->assertTrue( $data['success'] );

		$values = $this->get_option_values( $data['options'] );

		$this->assertContains( 'public-rest-value', $values );
		$this->assertNotContains( 'secret-rest-value', $values );
	}

	public function testGeneratorUpdateEndpointAllowsSavedChoiceMetaKeyOverride() {
		$public_key  = 'jfb_public_meta_' . wp_generate_password( 8, false );
		$dynamic_key = 'jfb_dynamic_meta_' . wp_generate_password( 8, false );

		$public_post_id  = $this->factory()->post->create();
		$dynamic_post_id = $this->factory()->post->create();

		update_post_meta( $public_post_id, $public_key, 'public-rest-value' );
		update_post_meta( $dynamic_post_id, $dynamic_key, 'dynamic-rest-value' );

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Generated options form',
				'post_content' => $this->get_generated_select_block_content(
					'my_select',
					$public_key,
					array( 'trigger' )
				) . $this->get_source_select_block_content(
					'trigger',
					array( $dynamic_key )
				),
			)
		);

		$request = new \WP_REST_Request( 'POST', '/jet-form-builder/v1/generator-update' );
		$request->set_header( 'Content-Type', 'application/json' );
		$request->set_body(
			wp_json_encode(
				array(
					'form_id'      => $form_id,
					'field_name'   => 'my_select',
					'generator_id' => 'get_from_db',
					'context'      => array( 'trigger' => $dynamic_key ),
				)
			)
		);

		$response = ( new Generator_Update_Endpoint() )->run_callback( $request );
		$data     = $response->get_data();

		$this->assertSame( 200, $response->get_status() );
		$this->assertTrue( $data['success'] );

		$values = $this->get_option_values( $data['options'] );

		$this->assertContains( 'dynamic-rest-value', $values );
		$this->assertNotContains( 'public-rest-value', $values );
	}

	public function testGeneratorUpdateEndpointAllowsFilterExtendedMetaKeyAllowlist() {
		$public_key  = 'jfb_public_meta_' . wp_generate_password( 8, false );
		$dynamic_key = 'jfb_dynamic_meta_' . wp_generate_password( 8, false );

		$public_post_id  = $this->factory()->post->create();
		$dynamic_post_id = $this->factory()->post->create();

		update_post_meta( $public_post_id, $public_key, 'public-rest-value' );
		update_post_meta( $dynamic_post_id, $dynamic_key, 'dynamic-rest-value' );

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Generated options form',
				'post_content' => $this->get_generated_select_block_content(
					'my_select',
					$public_key,
					array( 'trigger' )
				) . $this->get_source_select_block_content(
					'trigger',
					array( 'not_dynamic_key' )
				),
			)
		);

		$filter = static function ( array $allowed_meta_keys ) use ( $dynamic_key ) {
			$allowed_meta_keys[] = $dynamic_key;

			return $allowed_meta_keys;
		};

		add_filter( 'jet-form-builder/generators/get-from-db/allowed-meta-keys', $filter );

		$request = new \WP_REST_Request( 'POST', '/jet-form-builder/v1/generator-update' );
		$request->set_header( 'Content-Type', 'application/json' );
		$request->set_body(
			wp_json_encode(
				array(
					'form_id'      => $form_id,
					'field_name'   => 'my_select',
					'generator_id' => 'get_from_db',
					'context'      => array( 'trigger' => $dynamic_key ),
				)
			)
		);

		$response = ( new Generator_Update_Endpoint() )->run_callback( $request );
		$data     = $response->get_data();

		remove_filter( 'jet-form-builder/generators/get-from-db/allowed-meta-keys', $filter );

		$this->assertSame( 200, $response->get_status() );
		$this->assertTrue( $data['success'] );

		$values = $this->get_option_values( $data['options'] );

		$this->assertContains( 'dynamic-rest-value', $values );
		$this->assertNotContains( 'public-rest-value', $values );
	}

	public function testGeneratorUpdateEndpointCanDisableDynamicMetaKeyValidationViaFilter() {
		$public_key  = 'jfb_public_meta_' . wp_generate_password( 8, false );
		$dynamic_key = 'jfb_dynamic_meta_' . wp_generate_password( 8, false );

		$public_post_id  = $this->factory()->post->create();
		$dynamic_post_id = $this->factory()->post->create();

		update_post_meta( $public_post_id, $public_key, 'public-rest-value' );
		update_post_meta( $dynamic_post_id, $dynamic_key, 'dynamic-rest-value' );

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Generated options form',
				'post_content' => $this->get_generated_select_block_content(
					'my_select',
					$public_key,
					array()
				) . $this->get_source_select_block_content(
					'trigger',
					array()
				),
			)
		);

		$filter = static function () {
			return false;
		};

		add_filter( 'jet-form-builder/generators/get-from-db/validate_dynamic_meta_key', $filter );

		$request = new \WP_REST_Request( 'POST', '/jet-form-builder/v1/generator-update' );
		$request->set_header( 'Content-Type', 'application/json' );
		$request->set_body(
			wp_json_encode(
				array(
					'form_id'      => $form_id,
					'field_name'   => 'my_select',
					'generator_id' => 'get_from_db',
					'context'      => array( 'trigger' => $dynamic_key ),
				)
			)
		);

		$response = ( new Generator_Update_Endpoint() )->run_callback( $request );
		$data     = $response->get_data();

		remove_filter( 'jet-form-builder/generators/get-from-db/validate_dynamic_meta_key', $filter );

		$this->assertSame( 200, $response->get_status() );
		$this->assertTrue( $data['success'] );

		$values = $this->get_option_values( $data['options'] );

		$this->assertContains( 'dynamic-rest-value', $values );
		$this->assertNotContains( 'public-rest-value', $values );
	}

	public function testGeneratorUpdateEndpointAllowsSavedChoiceRoleOverride() {
		$subscriber_id = $this->factory()->user->create( array( 'role' => 'subscriber' ) );
		$editor_id     = $this->factory()->user->create( array( 'role' => 'editor' ) );

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Users generator form',
				'post_content' => $this->get_generated_users_select_block_content(
					'my_user_select',
					array(),
					array( 'trigger' )
				) . $this->get_source_select_block_content(
					'trigger',
					array( 'subscriber' )
				),
			)
		);

		$request = new \WP_REST_Request( 'POST', '/jet-form-builder/v1/generator-update' );
		$request->set_header( 'Content-Type', 'application/json' );
		$request->set_body(
			wp_json_encode(
				array(
					'form_id'      => $form_id,
					'field_name'   => 'my_user_select',
					'generator_id' => 'get_from_users',
					'context'      => array( 'trigger' => 'subscriber' ),
				)
			)
		);

		$response = ( new Generator_Update_Endpoint() )->run_callback( $request );
		$data     = $response->get_data();

		$this->assertSame( 200, $response->get_status() );
		$this->assertTrue( $data['success'] );

		$values = $this->get_option_values( $data['options'] );

		$this->assertContains( (string) $subscriber_id, $values );
		$this->assertNotContains( (string) $editor_id, $values );
	}

	private function get_generated_select_block_content( string $field_name, string $meta_key, array $listen_fields = array() ): string {
		return sprintf(
			'<!-- wp:jet-forms/select-field %s /-->',
			wp_json_encode(
				array(
					'name'                     => $field_name,
					'generator_function'       => 'get_from_db',
					'gen_get_from_db_meta_key' => $meta_key,
					'generator_listen_field'   => 1 === count( $listen_fields ) ? reset( $listen_fields ) : array_values( $listen_fields ),
				)
			)
		);
	}

	private function get_source_select_block_content( string $field_name, array $option_values ): string {
		$options = array_map(
			static function ( string $value ): array {
				return array(
					'label' => $value,
					'value' => $value,
				);
			},
			$option_values
		);

		return sprintf(
			'<!-- wp:jet-forms/select-field %s /-->',
			wp_json_encode(
				array(
					'name'          => $field_name,
					'field_options' => $options,
				)
			)
		);
	}

	private function get_generated_users_select_block_content( string $field_name, array $roles = array(), array $listen_fields = array() ): string {
		return sprintf(
			'<!-- wp:jet-forms/select-field %s /-->',
			wp_json_encode(
				array(
					'name'                        => $field_name,
					'generator_function'          => 'get_from_users',
					'gen_get_from_users_roles'    => array_values( $roles ),
					'gen_get_from_users_value_field' => 'ID',
					'gen_get_from_users_label_field' => 'display_name',
					'gen_get_from_users_include_current' => true,
					'generator_listen_field'      => 1 === count( $listen_fields ) ? reset( $listen_fields ) : array_values( $listen_fields ),
				)
			)
		);
	}

	private function get_option_values( array $options ): array {
		return array_map(
			static function ( array $option ): string {
				return (string) ( $option['value'] ?? '' );
			},
			$options
		);
	}
}
