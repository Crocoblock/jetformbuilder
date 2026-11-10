<?php
/**
 * Column-layout field template
 *
 * @var $template
 * @var $label
 * @var $desc
 * @var string $desc_position
 * @var Base $this
 */

use Jet_Form_Builder\Blocks\Render\Base;
use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

//phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped

/*
 * We return the prepared field template.
 * Each of the listed variables is validated in separate files.
 *
 * $label    - './field-label.php'
 * $desc     - './field-description.php'
 * $template - '../fields/{$field_type}.php' ( takes place at the level of a separate field template )
 */
$desc_after_label = 'after-label' === ( $desc_position ?? 'auto' );

echo Tools::esc_template_string( $label );
if ( $desc_after_label ) {
	echo Tools::esc_template_string( $desc );
}
echo Tools::esc_template_string( $template, false );
if ( ! $desc_after_label ) {
	echo Tools::esc_template_string( $desc );
}

//phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
