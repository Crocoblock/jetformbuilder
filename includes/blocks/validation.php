<?php


namespace Jet_Form_Builder\Blocks;


use Jet_Form_Builder\Blocks\Validation_Messages\Is_Char_Max;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Char_Min;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Empty_Value;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Not_Valid_Email;
use Jet_Form_Builder\Blocks\Validation_Messages\Is_Not_Valid_Url;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Instance_Trait;

/**
 * @method static Validation instance()
 *
 * Class Validation_Messages
 * @package Jet_Form_Builder\Blocks
 */
class Validation implements Arrayable {

	use Instance_Trait;

	const FORMAT_ADVANCED = 'advanced';
	const FORMAT_BROWSER  = 'browser';

	private $messages;

	public function __construct() {
		$this->messages = apply_filters(
			'jet-form-builder/validation-messages',
			$this->get_messages()
		);
	}

	public function formats(): array {
		return array(
			array(
				'value' => self::FORMAT_BROWSER,
				'label' => __( 'Browser', 'jet-form-builder' ),
				'title' => __( 'Browser native validation' ),
			),
			array(
				'value' => self::FORMAT_ADVANCED,
				'label' => __( 'Advanced', 'jet-form-builder' ),
				'title' => __( 'More flexible JetFormBuilder\'s validation', 'jet-form-builder' )
			),
		);
	}

	public function messages(): array {
		return $this->messages;
	}

	private function get_messages(): array {
		return Array_Tools::to_array(
			array(
				new Is_Char_Max(),
				new Is_Char_Min(),
				new Is_Empty_Value(),
				new Is_Not_Valid_Email(),
				new Is_Not_Valid_Url(),
			)
		);
	}

	public function to_array(): array {
		return array(
			'messages' => $this->messages(),
			'formats'  => $this->formats(),
		);
	}

}