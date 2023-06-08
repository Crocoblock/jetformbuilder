<?php


namespace JFB_Modules\Cli\Commands;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Blocks\Block_Helper;
use JFB_Modules\Form_Record\Models\Record_Action_Result_Model;
use JFB_Modules\Form_Record\Models\Record_Field_Model;
use JFB_Modules\Form_Record\Models\Record_Model;
use JFB_Modules\Security\Csrf\Csrf_Tools;
use JFB_Modules\Cli\Cli_Tools;

class Seed_Records implements Base_Command_It {

	public function rep_item_id() {
		return 'seed-records';
	}

	public function condition(): bool {
		return true;
	}

	public function do_command( $args, $assoc_args ) {
		$form  = Cli_Tools::resolve_form( $assoc_args );
		$limit = absint( $assoc_args['limit'] ?? 1000000 );

		if ( 0 >= $limit ) {
			$limit = 1;
		}

		$field_names = array_keys(
			Block_Helper::get_form_field_names(
				Block_Helper::get_blocks_by_post( $form )
			)
		);

		/** @var \WP_User $user */
		list( $user ) = get_users(
			array(
				'number' => 1,
			)
		);

		/** @var \WP_Post $post */
		list( $post ) = get_posts(
			array(
				'numberposts' => 1,
			)
		);

		$current = 0;

		foreach ( range( 0, $limit ) as $current ) {
			$record_id = ( new Record_Model() )->insert_soft(
				array(
					'user_id'           => $user->ID,
					'form_id'           => $form->ID,
					'from_content_id'   => $post->ID,
					'from_content_type' => 'cli',
					'status'            => 'failed',
				)
			);

			foreach ( range( 0, 2 ) as $next ) {
				( new Record_Action_Result_Model() )->insert_soft(
					array(
						'record_id'   => $record_id,
						'action_slug' => 'insert_post',
						'action_id'   => 9999,
						'status'      => 'failed',
						'on_event'    => 'GENERATED.CLI',
					)
				);
			}

			foreach ( $field_names as $field_name ) {
				( new Record_Field_Model() )->insert_soft(
					array(
						'record_id'   => $record_id,
						'field_name'  => $field_name,
						'field_value' => Csrf_Tools::generate(),
						'field_type'  => 'text-field',
						'field_attrs' => '{}',
					)
				);
			}

			if ( 0 === $current % 5000 ) {
				\WP_CLI::line( 'Reached: ' . $current );
			}
		}

		\WP_CLI::success( "Executed successfully ($current)" );
	}

}