<?php
/**
 * @var Jet_Form_Builder\Blocks\Render\Base $this
 * @var array $args
 */

use Jet_Form_Builder\Classes\Tools;

$name = $args['name'] ?? '';

$this->add_attribute( 'type', 'hidden' );
$this->add_attribute( 'name', $this->block_type->get_field_name() );
$this->add_attribute( 'data-field-name', $args['name'] ?? '' );
$this->add_attribute(
	'data-settings',
	htmlspecialchars(
		Tools::encode_json( $this->block_type->get_field_settings() )
	)
);
$this->add_attribute( 'value', $args['default']['self'] ?? '' );
?>
<div class="jet-fb-map-field">
	<input <?php $this->render_attributes_string(); ?> />
	<input
			type="hidden"
			name="<?php echo esc_attr( $this->block_type->get_field_name( $name . '_lat' ) ); ?>"
			value="<?php echo esc_attr( $args['default']['lat'] ?? '' ); ?>"
	/>
	<input
			type="hidden"
			name="<?php echo esc_attr( $this->block_type->get_field_name( $name . '_lng' ) ); ?>"
			value="<?php echo esc_attr( $args['default']['lng'] ?? '' ); ?>"
	/>
	<input
			type="hidden"
			name="<?php echo esc_attr( $this->block_type->get_field_name( $name . '_hash' ) ); ?>"
	/>
</div>
