<?php


namespace Jet_Form_Builder\Transformers;


use Jet_Form_Builder\Classes\Factory;

class Migrate_Manager {

	public function __construct() {
		add_action( 'init', array( $this, 'run_migrate' ), 999 );
	}

	public function run_migrate() {
		if (
			! isset( $_REQUEST['migrate'] )
			|| ! isset( $_REQUEST['id'] )
			|| empty( $_REQUEST['migrate'] )
			|| empty( $_REQUEST['id'] )
		) {
			return;
		}

		$form_id = absint( $_REQUEST['id'] );
		$type = (string) $_REQUEST['migrate'];

		$migrant = ( new Factory( 'Jet_Form_Builder\\Transformers\\' ) )
			->suffix( '-migrant' )
			->create_one( $type, $form_id );

		$form_id = $migrant->migrate_form();

		if ( $form_id ) {
			wp_redirect( get_edit_post_link( $form_id, '' ) );
			die();
		}
	}

}