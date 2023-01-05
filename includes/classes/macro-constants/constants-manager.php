<?php


namespace Jet_Form_Builder\Classes\Macro_Constants;


use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;

/**
 * @method static Constants_Manager instance()
 *
 * Class Constants_Manager
 * @package Jet_Form_Builder\Classes\Macro_Constants
 */
class Constants_Manager {

	use Instance_Trait;
	use Repository_Pattern_Trait;

	const PREFIX = 'CT::';

	public function __construct() {
		$this->rep_install();

		add_filter(
			'jet-form-builder/custom-macro',
			array( $this, 'apply_constant_macro' ),
			10, 2
		);
	}

	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/content-constants',
			array(
				new Site_Name_Constant(),
			)
		);
	}

	/**
	 * @param $result
	 * @param $macro
	 *
	 * @return null|string
	 */
	public function apply_constant_macro( $result, $macro ) {
		if ( 0 !== strpos( $macro, self::PREFIX ) ) {
			return $result;
		}

		$macro = str_replace( self::PREFIX, '', $macro );

		try {
			/** @var Base_Constant $const */
			$const = $this->rep_get_item( $macro );
		} catch ( Repository_Exception $exception ) {
			return $result;
		}

		$value = $const->get_value();

		return is_scalar( $value ) ? (string) $value : $result;
	}


}