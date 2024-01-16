<?php


namespace JFB_Modules\Option_Field\Traits;

use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Option_Query\Interfaces\Option_Query_It;
use JFB_Modules\Option_Query\Module;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Support_Option_Query_Trait {

	/**
	 * @var Option_Query_It
	 */
	private $option_query;

	/**
	 * @return Option_Query_It
	 * @throws Repository_Exception
	 */
	public function get_query(): Option_Query_It {
		if ( $this->option_query ) {
			return $this->option_query;
		}

		/** @var Module $module */
		$module = jet_form_builder()->module( 'option-query' );

		$from = ! empty( $this->block_attrs['field_options_from'] )
			? $this->block_attrs['field_options_from']
			: 'manual_input';

		try {
			$this->set_query( $module->get_query( $from ) );
		} catch ( Repository_Exception $exception ) {
			$this->set_query( $module->get_query( 'manual_input' ) );
		}

		do_action( 'jet-form-builder/option-query/set-in-block', $this );

		return $this->option_query;
	}

	public function set_query( Option_Query_It $query ) {
		$this->option_query = $query;
	}

}
