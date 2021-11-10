<?php
/**
 * input[type="hidden"] template
 *
 * @var Base $this
 * @var array $args
 */

use Jet_Form_Builder\Blocks\Render\Base;
use Jet_Form_Builder\Classes\Tools;

$this->add_attribute( 'placeholder', $args['placeholder'] );
$this->add_attribute( 'value', $args['default'] );
$this->add_attribute( 'required', $this->block_type->get_required_val() );
$this->add_attribute( 'name', $this->block_type->get_field_name( $args['name'] ) );
$this->add_attribute( 'id', $this->block_type->get_field_id( $args ) );
$this->add_attribute( 'type', $args['field_type'] );
$this->add_attribute( 'data-field-name', $args['name'] );
$this->add_attribute( 'class', 'jet-form-builder__field text-field' );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'class', $this->maybe_get_error_class( $args ) );
$this->add_attribute( 'minlength', $args['minlength'] );
$this->add_attribute( 'maxlength', $args['maxlength'] );


if ( ! empty( $args['enable_input_mask'] ) && ! empty( $args['input_mask'] ) ) {
	$this->add_attribute( 'class', 'jet-form-builder__masked-field' );

	$mask_type = ! empty( $args['mask_type'] ) ? $args['mask_type'] : '';

	if ( $mask_type ) {
		$this->add_attribute( 'data-inputmask', '\'alias\': \'' . esc_attr( $mask_type ) . '\'' );
		$this->add_attribute( 'data-inputmask-inputformat', esc_attr( $args['input_mask'] ) );
		$this->add_attribute( 'data-inputmask-inputmode', 'verbatim' );
	} else {
		$this->add_attribute( 'data-inputmask', '\'mask\': \'' . esc_attr( $args['input_mask'] ) . '\'' );
	}

	$mask_placeholder = ! empty( $args['mask_placeholder'] ) ? esc_attr( $args['mask_placeholder'] ) : '';

	if ( $mask_placeholder ) {
		$this->add_attribute( 'data-inputmask-placeholder', $mask_placeholder );
	}

	$mask_visibility = ! empty( $args['mask_visibility'] ) ? $args['mask_visibility'] : 'always';

	switch ( $mask_visibility ) {
		case 'focus':
			$this->add_attribute( 'data-inputmask-showmaskonhover', 'false' );
			break;

		case 'hover':
			$this->add_attribute( 'data-inputmask-showmaskonhover', 'true' );
			$this->add_attribute( 'data-inputmask-showmaskonfocus', 'true' );
			break;

		default:
			$this->add_attribute( 'data-inputmask-clearmaskonlostfocus', 'false' );
			break;
	}
}
// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
?>
<div class="jet-form-builder__field-wrap">
	<input <?php $this->render_attributes_string(); ?>>
	<?php echo Tools::esc_template_string( $this->maybe_render_error( $args ) ); ?>
</div>
<?php // phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped ?>
