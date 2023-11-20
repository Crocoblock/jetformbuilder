<?php


namespace Jet_Form_Builder\Blocks\Advanced_Rules;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Blocks\Validation;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Repository\Interfaces\Repository_Pattern_Interface;
use JFB_Components\Repository\Repository_Pattern_Trait;
use JFB_Modules\Block_Parsers\Field_Data_Parser;

class Rules_Controller implements Repository_Pattern_Interface {

	use Repository_Pattern_Trait;

	public function __construct() {
		$this->rep_install();
	}

	public function rep_instances(): array {
		return array(
			new Must_Equal_Rule(),
			new Must_Contain_Characters_Rule(),
			new Must_Not_Contain_Characters_Rule(),
			new Match_Regexp_Rule(),
			new Match_Not_Regexp_Rule(),
			new Server_Side_Rule(),
		);
	}

	public function validate_block( Field_Data_Parser $parser ) {
		$validation = $parser->get_setting( 'validation' );
		$rules      = $validation['rules'] ?? array();

		Validation::instance()->prepare_rules( $rules );

		foreach ( $rules as $rule_attrs ) {
			try {
				$rule = $this->get_item( $rule_attrs['type'] ?? '' );
			} catch ( Repository_Exception $exception ) {
				continue;
			}
			$rule->set_settings( $rule_attrs );
			$rule->validate_field( $parser );
		}
	}

	public function get_ssr(): Server_Side_Rule {
		try {
			/** @var Server_Side_Rule $rule */
			$rule = $this->get_item( Server_Side_Rule::class );
		} catch ( Repository_Exception $exception ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			wp_die( $exception->getMessage() );
		}

		return $rule;
	}

	/**
	 * @param string $name
	 *
	 * @return Advanced_Rule
	 * @throws Repository_Exception
	 */
	public function get_item( string $name ): Advanced_Rule {
		return $this->rep_get_item( $name );
	}
}
