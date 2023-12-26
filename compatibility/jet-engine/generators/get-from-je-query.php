<?php

namespace JFB_Compatibility\Jet_Engine\Generators;

use Jet_Engine\Query_Builder\Queries\Base_Query;
use JFB_Compatibility\Jet_Engine\Generators\Je_Query_Object_Handlers\Base_Object_Handler;
use JFB_Compatibility\Jet_Engine\Generators\Je_Query_Object_Handlers\User_Object_Handler;
use Jet_Form_Builder\Generators\Base;
use Jet_Engine\Query_Builder\Manager as Query_Manager;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Get_From_Je_Query extends Base {

	private $object_handlers;

	public function __construct() {
		$this->object_handlers = apply_filters(
			'jet-form-builder/generators/get_from_query/handlers',
			array(
				new User_Object_Handler(),
				new Base_Object_Handler(),
			)
		);
	}

	/**
	 * Returns generator ID
	 *
	 * @return string
	 */
	public function get_id() {
		return 'get_from_query';
	}

	/**
	 * Returns generator name
	 *
	 * @return string
	 */
	public function get_name() {
		return __( 'Get values list from JetEngine Query', 'jet-form-builder' );
	}

	/**
	 * Returns generated options list
	 *
	 * @param $args
	 *
	 * @return array
	 */
	public function generate( $args ) {

		$field = $args['generator_field'] ?? $args;

		$args = explode( '|', $field );
		/** @var Base_Query $query */
		$query  = Query_Manager::instance()->get_query_by_id( $args[0] );
		$result = array();

		if ( ! $query ) {
			return $result;
		}

		$query->setup_query();
		$this->get_block()->block_attrs['je_generator_query_type'] = $query->query_type;

		$objects = $query->get_items();

		$handler = $this->get_handler( $objects[0] ?? array() );
		$handler->set_fields( $args );

		foreach ( $objects as $object ) {
			$item = $handler->to_array( $object );

			if ( ! empty( $item ) ) {
				$result[] = $item;
			}
		}

		return $result;
	}

	private function get_handler( $current ): Base_Object_Handler {
		/** @var Base_Object_Handler $handler */
		foreach ( $this->object_handlers as $handler ) {
			if ( $handler->is_supported( $current ) ) {
				return $handler;
			}
		}

		wp_die(
			sprintf(
			/* translators: %s - class name  */
				esc_html__( '%s::is_supported must return TRUE', 'jet-form-builder' ),
				esc_attr( Base_Object_Handler::class )
			)
		);
	}

}
