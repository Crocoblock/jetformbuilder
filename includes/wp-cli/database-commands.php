<?php


namespace Jet_Form_Builder\Wp_Cli;

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

}
