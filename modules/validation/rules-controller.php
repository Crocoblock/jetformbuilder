<?php


namespace JFB_Modules\Validation;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use JFB_Modules\Validation\Advanced_Rules;
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
			new Advanced_Rules\Must_Equal_Rule(),
			new Advanced_Rules\Must_Contain_Characters_Rule(),
			new Advanced_Rules\Must_Not_Contain_Characters_Rule(),
			new Advanced_Rules\Match_Regexp_Rule(),
			new Advanced_Rules\Match_Not_Regexp_Rule(),
			new Advanced_Rules\Server_Side_Rule(),
		);
	}

	public function validate_block( Field_Data_Parser $parser ) {
		$validation = $parser->get_setting( 'validation' );
		$rules      = $validation['rules'] ?? array();

		$this->prepare_rules( $rules );

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

	public function get_ssr(): Advanced_Rules\Server_Side_Rule {
		try {
			/** @var Advanced_Rules\Server_Side_Rule $rule */
			$rule = $this->get_item( Advanced_Rules\Server_Side_Rule::class );
		} catch ( Repository_Exception $exception ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			wp_die( $exception->getMessage() );
		}

		return $rule;
	}

	public function prepare_rules( array &$rules ) {
		foreach ( $rules as &$rule ) {
			$rule['value'] = jet_fb_parse_dynamic( $rule['value'] ?? '' );
		}
	}

	/**
	 * @param string $name
	 *
	 * @return Advanced_Rules\Rule
	 * @throws Repository_Exception
	 */
	public function get_item( string $name ): Advanced_Rules\Rule {
		return $this->rep_get_item( $name );
	}
}
