<?php


namespace JFB_Modules\Cli\Commands;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use JFB_Components\Repository\Repository_Item_Instance_Trait;

interface Base_Command_It extends Repository_Item_Instance_Trait {

	public function do_command( $args, $assoc_args );

	public function condition(): bool;

}
