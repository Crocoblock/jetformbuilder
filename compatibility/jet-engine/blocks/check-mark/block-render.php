<?php
/**
 * @var $attributes array The block attributes
 * @var $content string The block default content
 * @var $block \WP_Block The block instance
 */

use JFB_Compatibility\Jet_Engine\Blocks\Check_Mark\Block_Attributes;
use JFB_Compatibility\Jet_Engine\Jet_Engine;

$block_attributes = new Block_Attributes();

$block_attributes->set_control_type( $attributes['controlType'] ?? '' );
$block_attributes->set_default_icon_url( $attributes['defaultImageControl']['url'] ?? '' );
$block_attributes->set_checked_icon_url( $attributes['checkedImageControl']['url'] ?? '' );
$block_attributes->set_width( $attributes['style']['.jet-form-builder-check-mark-img']['width'] ?? '' );

/**
 * @var Jet_Engine $module
 * @noinspection PhpUnhandledExceptionInspection
 */
$module = jet_form_builder()->compat( Jet_Engine::class );

require $module->get_dir( 'blocks/check-mark/block-template.php' );
