<?php


namespace JFB_Modules\Jobs;

use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Repository\Interfaces\Repository_Pattern_Interface;
use JFB_Components\Repository\Repository_Pattern_Trait;
use JFB_Modules\Jobs\Interfaces\Self_Execution_Job_It;
use JFB_Modules\Post_Type;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

final class Module implements
	Base_Module_It,
	Base_Module_After_Install_It,
	Repository_Pattern_Interface {

	use Repository_Pattern_Trait;

	public function rep_item_id() {
		return 'jobs';
	}

	public function condition(): bool {
		return true;
	}

	public function on_install() {
		$this->rep_install();
	}

	public function on_uninstall() {
		$this->rep_clear();
	}

	public function init_hooks() {
		/** @var Self_Execution_Job_It $job */
		foreach ( $this->rep_generate_items() as $job ) {
			$job->init_hooks();
		}
	}

	public function remove_hooks() {
		/** @var Self_Execution_Job_It $job */
		foreach ( $this->rep_generate_items() as $job ) {
			$job->remove_hooks();
		}
	}

	public function rep_instances(): array {
		return array();
	}

	public function unschedule_all() {
		if ( ! class_exists( '\ActionScheduler_DBStore' ) ) {
			return;
		}

		\ActionScheduler_DBStore::instance()->cancel_actions_by_group( Post_Type\Module::SLUG );
	}

	public function install( Self_Execution_Job_It $job ) {
		$this->rep_install_item_soft( $job );
	}

	public function uninstall( Self_Execution_Job_It $job ) {
		$this->rep_remove( $job );
	}

	/**
	 * @param string $job_hook
	 *
	 * @return Self_Execution_Job_It
	 * @throws Repository_Exception
	 */
	public function get( string $job_hook ): Self_Execution_Job_It {
		return $this->rep_get_item( $job_hook );
	}
}
