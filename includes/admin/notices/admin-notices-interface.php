<?php


namespace Jet_Form_Builder\Admin\Notices;


interface Admin_Notices_Interface {

	public function get_notices(): array;

	public function register_notice( Base_Notice $notice ): Admin_Notices_Interface;

}