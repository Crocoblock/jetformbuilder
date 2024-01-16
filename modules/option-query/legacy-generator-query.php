<?php


namespace JFB_Modules\Option_Query;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Generators;
use Jet_Form_Builder\Blocks\Types;
use Jet_Form_Builder\Plugin;
use JFB_Modules\Option_Query\Interfaces\Option_Query_It;
use JFB_Modules\Option_Query\Traits\Option_Query_Trait;

class Legacy_Generator_Query implements Option_Query_It {

	use Option_Query_Trait;

	/**
	 * @var Types\Base
	 */
	private $block;

	public function __construct() {
		$this->disable_feature( 'search' );
	}

	public function rep_item_id() {
		return 'generate';
	}

	public function fetch(): \Generator {
		/** @var Generators\Base $generator_instance */

		$generator          = $this->get_setting( 'generator_function' );
		$generators         = Plugin::instance()->form->get_options_generators();
		$generator_instance = $generators[ $generator ] ?? false;

		if ( ! $generator_instance ) {
			return;
		}

		$generator_instance->set_block( $this->get_block() );
		$generated = $generator_instance->get_values( $this->get_settings() );
		$generator_instance->clear_block();

		$value_from = $this->get_setting( 'value_from' );
		$calc_from  = $this->get_setting( 'calc_from' );

		foreach ( $generated as $key => $item ) {

			if ( ! $value_from && ! $calc_from ) {
				yield $item;
				continue;
			}

			if ( ! is_array( $item ) ) {
				$item = array(
					'value' => $key,
					'label' => $item,
				);
			}

			$item['object_id'] = $item['value'];

			if ( ! empty( $value_from ) ) {
				$item['value'] = get_post_meta( $item['object_id'], $value_from, true );
			}

			if ( ! empty( $calc_from ) ) {
				$item['calculate'] = get_post_meta( $item['object_id'], $calc_from, true );
			}

			yield $item;

		}
	}

	/**
	 * @return Types\Base
	 */
	public function get_block(): Types\Base {
		return $this->block;
	}

	/**
	 * @param Types\Base $block
	 */
	public function set_block( Types\Base $block ) {
		$this->block = $block;
	}

}
