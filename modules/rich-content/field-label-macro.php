<?php

namespace JFB_Modules\Rich_Content;

use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Option_Field\Interfaces\Support_Option_Query_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Field_Label_Macro {

	use Instance_Trait;

	const SUFFIX = '::label';

	public function __construct() {
		add_filter(
			'jet-form-builder/custom-macro',
			array( $this, 'resolve' ),
			10,
			3
		);
	}

	/**
	 * @param mixed         $result Result from a previous handler, or null.
	 * @param string        $macro  Full macro name without percent signs.
	 * @param Macros_Parser $parser Parser processing the current macro.
	 *
	 * @return mixed
	 */
	public function resolve( $result, string $macro, Macros_Parser $parser ) {
		if ( substr( $macro, -strlen( self::SUFFIX ) ) !== self::SUFFIX ) {
			return $result;
		}

		$name = substr( $macro, 0, -strlen( self::SUFFIX ) );

		if ( '' === $name || ! $parser->has_replace( $name ) ) {
			return $result;
		}

		$form_id = jet_fb_handler()->get_form_id();
		$form_id = $form_id ?: jet_form_builder()->msg_router->get_form_id();

		if ( ! $form_id ) {
			return $result;
		}

		$field = jet_form_builder()->form->get_field_by_name( $form_id, $name );

		if ( ! in_array(
			$field['blockName'] ?? '',
			array(
				'jet-forms/radio-field',
				'jet-forms/select-field',
				'jet-forms/checkbox-field',
			),
			true
		) ) {
			return $result;
		}

		$block = jet_form_builder()->blocks->get_field_by_name( $field['blockName'] );

		if ( ! $block instanceof Support_Option_Query_It ) {
			return $result;
		}

		try {
			// Configure options without evaluating unrelated attributes and their macros.
			$block->block_attrs = array_merge(
				$block->get_default_attributes(),
				$field['attrs'] ?? array()
			);

			$block->block_attrs['blockName'] = $block->block_name();
			$block->block_attrs['type']      = $block->get_name();

			$options = iterator_to_array( $block->get_query()->fetch() );
		} catch ( Repository_Exception $exception ) {
			return $result;
		}

		$value  = $parser->get_replace( $name );
		$values = is_array( $value ) ? $value : array( $value );
		$labels = array();

		foreach ( $values as $selected ) {
			if ( ! is_scalar( $selected ) ) {
				continue;
			}

			$label = wp_kses_post( (string) $selected );

			foreach ( $options as $key => $option ) {
				$option_value = is_array( $option ) ? ( $option['value'] ?? $key ) : $key;
				$option_label = is_array( $option ) ? ( $option['label'] ?? $option_value ) : $option;

				if ( is_scalar( $option_value ) && is_scalar( $option_label ) &&
					(string) $option_value === (string) $selected
				) {
					$label = wp_kses_post( (string) $option_label );
					break;
				}
			}

			$labels[] = $label;
		}

		return implode( ', ', $labels );
	}
}
