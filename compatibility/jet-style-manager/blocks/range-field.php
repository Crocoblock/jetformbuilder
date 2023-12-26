<?php


namespace JFB_Compatibility\Jet_Style_Manager\Blocks;

use JFB_Compatibility\Jet_Style_Manager\Blocks\Interfaces\Style_Block_It;
use JFB_Compatibility\Jet_Style_Manager\Blocks\Traits\Style_Block_Trait;

class Range_Field implements Style_Block_It {

	use Style_Block_Trait;

	public function __construct() {
		$this->set_css_scheme(
			array(
				'field'   => '__field-wrap input.range-field',
				'value'   => '__field-wrap %1$s__field-value',
				'wrapper' => '__field-wrap',
			)
		);
	}

	/**
	 * Not used
	 *
	 * @return string
	 */
	public function rep_item_id() {
		return '';
	}

	public function process_controls() {
	}

	public function style_slider( $style_line ): array {
		return array(
			$this->selector( 'field' ) . '::-webkit-slider-thumb' => $style_line,
			$this->selector( 'field' ) . '::-moz-range-thumb' => $style_line,
			$this->selector( 'field' ) . '::-ms-thumb' => $style_line,
		);
	}

	public function style_range( $style_line ): array {
		return array(
			$this->selector( 'field' ) . '::-webkit-slider-runnable-track' => $style_line,
			$this->selector( 'field' ) . '::-moz-range-track' => $style_line,
			$this->selector( 'field' ) . '::-ms-track' => $style_line,
		);
	}
}
