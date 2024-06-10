<?php
/**
 * @var Jet_Form_Builder\Blocks\Render\Base $this
 * @var array $args
 */

use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

$name = $args['name'] ?? '';

$this->add_attribute( 'type', 'hidden' );
$this->add_attribute( 'name', $this->block_type->get_field_name() );
$this->add_attribute( 'data-field-name', $args['name'] ?? '' );
$this->add_attribute(
	'data-settings',
	Tools::esc_attr( $this->block_type->get_field_settings() )
);
$this->add_attribute( 'required', $this->block_type->get_required_val() );
$this->add_attribute( 'value', $args['default']['self'] ?? '' );
$this->add_attribute( 'class', 'jet-form-builder__field' );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'data-jfb-sync' );
?>
	<div class="jet-fb-map-field">
		<?php if ( ! empty( $args['autocomplete'] ) ) : ?>
			<?php wp_enqueue_script( 'jet-fb-compat-jet-engine-map-field-autocomplete' ); ?>
			<?php wp_enqueue_style( 'jet-fb-compat-jet-engine-map-field-autocomplete' ); ?>
			<div class="jet-fb-map-field__search">
				<input type="text" placeholder="<?php esc_html_e( 'Search...', 'jet-form-builder' ); ?>">
				<div class="jet-fb-map-field__search-loader"></div>
				<ul class="jet-fb-map-field__search-list"></ul>
			</div>
		<?php endif; ?>
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
<?php
