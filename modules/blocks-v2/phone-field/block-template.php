<?php
/**
 * Phone Field Template
 *
 * @var Block_Render $this
 * @var array        $args
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// Set the field value (from preset, default, or submitted data)
$this->set_value();

// Add standard input attributes
$this->add_attribute( 'type', 'tel' );
$this->add_attribute( 'placeholder', $args['placeholder'] );
$this->add_attribute( 'required', $this->block_type->get_required_val() );
$this->add_attribute( 'name', $this->block_type->get_field_name( $args['name'] ) );
$this->add_attribute( 'id', $this->block_type->get_field_id( $args ) );
$this->add_attribute( 'data-field-name', $args['name'] );
$this->add_attribute( 'class', 'jet-form-builder__field phone-field' );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'data-jfb-sync' );
$this->add_attribute( 'autocomplete', 'tel' );

$this->add_attribute( 'data-default-country', esc_attr( $args['default_country'] ?? 'auto' ) );

if ( ! empty( $args['preferred_countries'] ) ) {
	$preferred_countries = array_map( 'sanitize_text_field', $args['preferred_countries'] );

	$this->add_attribute(
		'data-preferred-countries',
		esc_attr( implode( ',', $preferred_countries ) )
	);
}

if ( ! empty( $args['only_countries'] ) && is_array( $args['only_countries'] ) ) {
	$countries = array_map( 'sanitize_text_field', $args['only_countries'] );

	$this->add_attribute(
		'data-only-countries',
		esc_attr( implode( ',', $countries ) )
	);
}

if ( ! empty( $args['exclude_countries'] ) ) {
	$exclude_countries = array_map( 'sanitize_text_field', $args['exclude_countries'] );
	$this->add_attribute(
		'data-exclude-countries',
		esc_attr( implode( ',', $exclude_countries ) )
	);
}

if ( ! empty( $args['save_format'] ) ) {
	$this->add_attribute( 'data-save-format', esc_attr( $args['save_format'] ) );
}

if ( ! empty( $args['ipinfo_token'] ) ) {
	$this->add_attribute( 'data-ipinfo-token', esc_attr( $args['ipinfo_token'] ) );
}

// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
?>
<div class="jet-form-builder__field-wrap phone-field-wrap">
	<?php do_action( 'jet-form-builder/before-field', $this ); ?>

	<input <?php $this->render_attributes_string(); ?>>

	<input
		type="tel"
		name="<?php echo $this->block_type->get_field_name( $args['name'] . '_intl' ); ?>"
		data-field-name="<?php echo $args['name'] . '_intl';?>"
		class="jet-form-builder__field phone-field-intl <?php echo $args['class_name'];?>"
		value=""
		autocomplete="tel"
	>

	<?php do_action( 'jet-form-builder/after-field', $this ); ?>
</div>
<?php // phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
