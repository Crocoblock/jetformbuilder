<?php
/**
 * Media field template
 */
use Jet_Form_Builder\File_Upload;

$this->add_attribute( 'class', 'jet-form-builder__field file-field jet-form-builder-file-upload__input' );
$this->add_attribute( 'class', $this->maybe_get_error_class( $args ) );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'name', $this->block_type->get_field_name( $args['name'] . '_input' ) );
$this->add_attribute( 'type', 'file' );
$this->add_attribute( 'data-form_id', $this->form_id );
$this->add_attribute( 'data-field', $args['name'] );
$this->add_attribute( 'id', $this->block_type->get_field_id( $args ) );

if ( ! empty( $args['max_files'] ) ) {
	$this->add_attribute( 'data-max_files', absint( $args['max_files'] ) );
	$this->add_attribute( 'multiple', true );
}

if ( ! empty( $args['allowed_mimes'] ) ) {
	$this->add_attribute( 'accept', implode( ',', $args['allowed_mimes'] ) );
}

$max_size = File_Upload::instance()->get_max_size_for_field( $args );

$this->add_attribute( 'data-max_size', $max_size );

$required = $this->block_type->get_required_val( $args );

if ( $required ) {
	$required = 'required="required"';
}

if ( ! empty( $args['insert_attachment'] ) ) {
	$format = ! empty( $args['value_format'] ) ? $args['value_format'] : 'url';
} else {
	$format = 'url';
}

$value = File_Upload::instance()->get_result_value( $args );
$value = is_array( $value ) || ( 'url' === $format ) ? wp_json_encode( $value ) : $value;
// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
?>
<div class="jet-form-builder__field-wrap jet-form-builder-file-upload">
	<div class="jet-form-builder-file-upload__content">
		<?php echo File_Upload::instance()->get_loader(); ?>
		<div class="jet-form-builder-file-upload__files" <?php echo File_Upload::instance()->get_files_data_args( $this->block_type->block_attrs ); ?>>
																	<?php
																	echo File_Upload::instance()->get_result_html( $args );
																	?>
		</div>
	</div>
	<div class="jet-form-builder-file-upload__fields">
		<input class="jet-form-builder-file-upload__value" type="hidden" name="<?php echo esc_attr( $this->block_type->get_field_name( $args['name'] ) ); ?>" data-field-name="<?php echo esc_attr( $args['name'] ); ?>" value="<?php echo htmlspecialchars( $value ); ?>" <?php echo $required; ?>>
		<input <?php $this->render_attributes_string(); ?>>
		<?php echo $this->maybe_render_error( $args ); ?>
	</div>
	<div class="jet-form-builder-file-upload__message"><small><?php echo __( 'Maximum file size', 'jet-form-builder' ); ?>: <?php echo size_format( $max_size ); ?></small></div>
	<div class="jet-form-builder-file-upload__errors is-hidden"></div>
</div>
<?php // phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped ?>
