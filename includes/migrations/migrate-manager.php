<?php

namespace Jet_Form_Builder\Migrations;

use Jet_Form_Builder\Classes\Factory;
use Jet_Form_Builder\Migrations\Base_Migrant;

class Migrate_Manager {

	private $action = 'migrate_jet_engine';

	public function __construct() {
		add_action( 
			"admin_action_$this->action", 
			array( $this, $this->action ) 
		);
	}

	public function migrate_jet_engine() {
		$this->run_migrate( 'jet-engine' );
	}

	public function run_migrate( $type ) {
		if ( ! isset( $_REQUEST['id'] ) || empty( $_REQUEST['id'] ) ) {
			return;
		}
		$form_id = absint( $_REQUEST['id'] );

		$migrant = ( new Factory( 'Jet_Form_Builder\\Migrations\\' ) )
			->suffix( '-migrant' )
			->create_one( $type, $form_id );
		
		if ( ! $migrant instanceof Base_Migrant ) {
			return;
		}

		$form_id = $migrant->migrate_form();

		if ( $form_id && ! $form_id instanceof \WP_Error ) {
			wp_redirect( get_edit_post_link( $form_id, '' ) );
			die();
		}
	}

}