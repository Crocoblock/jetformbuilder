<?php


namespace JFB_Modules\Jobs\Interfaces;

use JFB_Components\Repository\Repository_Item_Instance_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

interface Self_Execution_Job_It extends Job_It, Repository_Item_Instance_Trait {

	public function execute_raw( $args );

	public function execute();

}
