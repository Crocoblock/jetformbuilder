<?php
/**
 * @var Jet_Form_Builder\Blocks\Render\Base $this
 * @var array $args
 */

$name = $args['name'] ?? '';

$this->add_attribute( 'type', 'hidden' );
$this->add_attribute( 'name', $this->block_type->get_field_name() );
$this->add_attribute( 'data-field-name', $args['name'] ?? '' );
$this->add_attribute( 'data-settings', $this->block_type->get_field_settings() );
$this->add_attribute( 'required', $this->block_type->get_required_val() );
$this->add_attribute( 'value', $args['default']['self'] ?? '' );
$this->add_attribute( 'class', 'jet-form-builder__field' );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'class', $this->maybe_get_error_class( $args ) );
$this->add_attribute( 'data-jfb-sync' );
?>
<div class="jet-fb-map-field">
    <input <?php $this->render_attributes_string(); ?> />
    <input
            type="hidden"
            name="<?php echo esc_attr( $this->block_type->get_field_name( $name . '_lat' ) ); ?>"
            value="<?php echo esc_attr( $args['default']['lat'] ?? '' ); ?>"
            data-map-field="lat"
    />
    <input
            type="hidden"
            name="<?php echo esc_attr( $this->block_type->get_field_name( $name . '_lng' ) ); ?>"
            value="<?php echo esc_attr( $args['default']['lng'] ?? '' ); ?>"
            data-map-field="lng"
    />
    <input
            type="hidden"
            name="<?php echo esc_attr( $this->block_type->get_field_name( $name . '_hash' ) ); ?>"
            data-map-field="hash"
    />
</div>
