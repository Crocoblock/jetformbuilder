<?php
/**
 * @var Base $this
 * @var array $args
 */

use Jet_Form_Builder\Blocks\Render\Base;
use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

$active      = empty( $args['value_active'] ) ? 'on' : $args['value_active'];
$calc_active = empty( $args['calc_value_active'] ) ? 1 : $args['calc_value_active'];

$this->add_attribute( 'id', $this->block_type->get_field_id( $args ) );
$this->add_attribute( 'name', $this->block_type->get_field_name( $args['name'] ) );
$this->add_attribute( 'required', $this->block_type->get_required_val() );
$this->add_attribute( 'type', 'checkbox' );
$this->add_attribute( 'role', 'switch' );
$this->add_attribute( 'class', 'jet-form-builder__field' );
$this->add_attribute( 'value', $active );
$this->add_attribute( 'data-calculate', $calc_active );
$this->add_attribute( 'checked', ! empty( ( $args['default'] ?? '' ) ) ? 'checked' : '' );
$this->add_attribute( 'data-jfb-sync' );

?>
<input <?php $this->render_attributes_string(); ?>>