<?php
/**
 * Media field template
 *
 * @var \Jet_Form_Builder\Blocks\Render\Media_Field_Render $this
 * @var \Jet_Form_Builder\Classes\Attributes_Trait $files
 */

use Jet_Form_Builder\File_Upload;
use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

$max_files = absint( $args['max_files'] ?? 1 );

$this->add_attribute( 'class', 'jet-form-builder__field file-field jet-form-builder-file-upload__input' );
$this->add_attribute( 'class', $this->maybe_get_error_class( $args ) );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'name', $this->block_type->get_field_name() );
$this->add_attribute( 'data-field-name', $args['name'] );
$this->add_attribute( 'type', 'file' );
$this->add_attribute( 'data-form_id', $this->form_id );
$this->add_attribute( 'id', $this->block_type->get_field_id( $args ) );
$this->add_attribute( 'required', $this->block_type->get_required_val() );
$this->add_attribute( 'data-jfb-sync' );

if ( 1 < $max_files ) {
	$this->add_attribute( 'data-max_files', $max_files );
	$this->add_attribute( 'multiple', true );
}

if ( ! empty( $args['allowed_mimes'] ) ) {
	$this->add_attribute( 'accept', implode( ',', $args['allowed_mimes'] ) );
}

$max_size = $this->block_type->get_max_size();

$this->add_attribute( 'data-max_size', $max_size );
$max_size_message = $this->block_type->get_max_size_message();

//$value = File_Upload::instance()->get_result_value( $args );
//$value = is_array( $value ) || ( 'url' === $format ) ? wp_json_encode( $value ) : $value;
// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
?>
<div class="jet-form-builder__field-wrap jet-form-builder-file-upload">
	<div class="jet-form-builder-file-upload__content">
		<?php echo File_Upload::instance()->get_loader(); ?>
		<div class="jet-form-builder-file-upload__files" <?php $this->files()->render_attributes_string(); ?>>
			<?php
			echo $this->render_previews();
			?>
		</div>
	</div>
	<div class="jet-form-builder-file-upload__fields">
		<input <?php $this->render_attributes_string(); ?>>
		<?php echo Tools::esc_template_string( $this->maybe_render_error( $args ) ); ?>
	</div>
	<div class="jet-form-builder-file-upload__message"><small><?php echo wp_kses_post( $max_size_message ); ?></small></div>
	<div class="jet-form-builder-file-upload__errors is-hidden"></div>
</div>
<?php // phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped ?>
