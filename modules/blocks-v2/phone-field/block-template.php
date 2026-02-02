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
	$preferred_countries = $args['preferred_countries'];

	$this->add_attribute(
		'data-preferred-countries',
		esc_attr( $preferred_countries )
	);
}

if ( ! empty( $args['only_countries'] ) && $args['only_countries'] ) {
	$countries = $args['only_countries'];

	$this->add_attribute(
		'data-only-countries',
		esc_attr( $countries )
	);
}

if ( ! empty( $args['exclude_countries'] ) ) {
	$exclude_countries = $args['exclude_countries'];

	$this->add_attribute(
		'data-exclude-countries',
		esc_attr( $exclude_countries )
	);
}

if ( ! empty( $args['save_format'] ) ) {
	$this->add_attribute( 'data-save-format', esc_attr( $args['save_format'] ) );
}

// Handle ipinfo.io token (global or per-block)
$ipinfo_token = '';

if ( ! empty( $args['use_global'] ) && $args['use_global'] ) {
	// Use global token from settings
	$global_options = \Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager::get_options( 'phone-field-tab' );
	$ipinfo_token   = $global_options['ipinfo_token'] ?? '';
} elseif ( ! empty( $args['ipinfo_token'] ) ) {
	// Use per-block token
	$ipinfo_token = $args['ipinfo_token'];
}

if ( ! empty( $ipinfo_token ) ) {
	$this->add_attribute( 'data-ipinfo-token', esc_attr( $ipinfo_token ) );
}

if ( ! empty( $args['validation_message_required'] ) ) {
	$this->add_attribute( 'data-validation-message-required', esc_attr( $args['validation_message_required'] ) );
}

if ( ! empty( $args['validation_message_invalid'] ) ) {
	$this->add_attribute( 'data-validation-message-invalid', esc_attr( $args['validation_message_invalid'] ) );
}

$separate_dial_code = '';

if ( ! empty( $args['separate_dial_code'] ) ) {
	$separate_dial_code = $args['separate_dial_code'] ? 'separate-dial-code' : '';
	$this->add_attribute( 'data-separate-dial-code', esc_attr( $args['separate_dial_code'] ) );
}

// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
?>
<div class="jet-form-builder__field-wrap phone-field-wrap <?php echo $separate_dial_code;?>">
	<?php do_action( 'jet-form-builder/before-field', $this ); ?>

	<input <?php $this->render_attributes_string(); ?>>

	<input
		type="tel"
		name="<?php echo $this->block_type->get_field_name( $args['name'] . '_intl' ); ?>"
		data-field-name="<?php echo $args['name'] . '_intl';?>"
		class="jet-form-builder__field phone-field-intl <?php echo $args['class_name'];?> "
		value=""
		autocomplete="tel"
	>

	<?php do_action( 'jet-form-builder/after-field', $this ); ?>
</div>
<?php // phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
