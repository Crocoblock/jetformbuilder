<?php


namespace Jet_Form_Builder\Wp_Cli;

use ElementorPro\Modules\Forms\Submissions\Database\Query;
use JET_APB\Plugin;
use Jet_Form_Builder\Actions\Methods\Form_Record\Models\Record_Action_Result_Model;
use Jet_Form_Builder\Actions\Methods\Form_Record\Models\Record_Model;
use Jet_Form_Builder\Db_Queries\Execution_Builder;
use Jet_Form_Builder\Migrations\Migration_Exception;
use Jet_Form_Builder\Migrations\Migrator;
use Jet_Form_Builder\Migrations\Profilers\Cli_Migration_Profiler;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Database_Commands extends \WP_CLI_Command {

	public function migrate() {
		try {
			Execution_Builder::instance()->transaction_start();
			Migrator::instance()->install( new Cli_Migration_Profiler() );
			Execution_Builder::instance()->transaction_commit();

			\WP_CLI::line();
			\WP_CLI::success( 'Migrated successfully' );

		} catch ( Migration_Exception $exception ) {
			Execution_Builder::instance()->transaction_rollback();
			\WP_CLI::error( $exception->getMessage() );
		}
	}

	public function downgrade() {
		try {
			Execution_Builder::instance()->transaction_start();
			Migrator::instance()->uninstall( new Cli_Migration_Profiler() );
			Execution_Builder::instance()->transaction_commit();

			\WP_CLI::line();
			\WP_CLI::success( 'Downgraded successfully' );

		} catch ( Migration_Exception $exception ) {
			Execution_Builder::instance()->transaction_rollback();

			\WP_CLI::error( $exception->getMessage() );
		}
	}

	public function seed_records() {
		/** @var \WP_Post $form */
		list( $form ) = get_posts(
			array(
				'numberposts' => 1,
				'post_type'   => jet_form_builder()->post_type->slug(),
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

		foreach ( range( 0, 1000000 ) as $current ) {
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

			if ( 0 === $current % 100000 ) {
				\WP_CLI::line( 'Reached: ' . $current );
			}
		}

		\WP_CLI::success( 'Executed successfully' );
	}

	public function seed_jet_apb() {
		$sample_app = array(
			'status'           => 'completed',
			'service'          => 87,
			'user_id'          => 1,
			'user_email'       => 'sanko200065@gmail.com',
			'date'             => 1660780800,
			'slot'             => 1660809600,
			'slot_end'         => 1660811400,
			'type'             => 'range',
			'appointment_date' => '2022-07-20 10:26:09',
		);

		foreach ( range( 0, 1000000 ) as $next ) {
			Plugin::instance()->db->appointments->insert( $sample_app );
		}
	}

	public function seed_elem() {

		$sample_app = array(
			'hash_id'                 => '0b618cad-3a30-4027-b3df-4236d0f33650',
			'main_meta_id'            => 2,
			'post_id'                 => 218,
			'referer'                 => 'https://dev.loc.local/elementor/',
			'referer_title'           => 'Front Page',
			'element_id'              => 'ee7276d',
			'form_name'               => 'test form',
			'campaign_id'             => 0,
			'user_id'                 => 1,
			'user_ip'                 => '::1',
			'user_agent'              => '',
			'actions_count'           => 0,
			'actions_succeeded_count' => 0,
			'meta'                    => '{"edit_post_id":"218"}',
		);

		foreach ( range( 0, 1000000 ) as $next ) {
			Query::get_instance()->add_submission( $sample_app, array() );
		}
	}

}
