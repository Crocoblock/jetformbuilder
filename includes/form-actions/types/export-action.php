<?php


namespace Jet_Form_Builder\Form_Actions\Types;


use Jet_Form_Builder\Form_Actions\Base_Form_Action;
use Jet_Form_Builder\Form_Actions\Get_Form_Data;

class Export_Action extends Base_Form_Action {

	use Get_Form_Data;

	/**
	 * @return string
	 */
	public function get_id() {
		return 'jet_fb_export';
	}

	/**
	 * @return mixed
	 */
	public function get_title() {
		return __( 'Export', 'jet-form-builder' );
	}

	public function do_admin_action() {
		$form_id = $this->get_post_id_from_request();
		[ $post, $for_encoding ] = $this->get_from_data( $form_id );

		$this->file_download( $post->post_name . '.json', json_encode( $for_encoding ) );
	}


	/**
	 * Process
	 *
	 * @param  [type] $filename [description]
	 * @param string $file [description]
	 *
	 * @return [type]           [description]
	 */
	public function file_download( $filename = null, $file = '', $type = 'application/json' ) {

		set_time_limit( 0 );

		@session_write_close();

		if ( function_exists( 'apache_setenv' ) ) {
			$variable = 'no-gzip';
			$value    = 1;
			@apache_setenv( $variable, $value );
		}

		@ini_set( 'zlib.output_compression', 'Off' );

		nocache_headers();

		header( "Robots: none" );
		header( "Content-Type: " . $type );
		header( "Content-Description: File Transfer" );
		header( "Content-Disposition: attachment; filename=\"" . $filename . "\";" );
		header( "Content-Transfer-Encoding: binary" );

		// Set the file size header
		header( "Content-Length: " . strlen( $file ) );

		echo $file;
		die();

	}
}