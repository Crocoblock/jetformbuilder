<?php
/**
 * input[type="hidden"] template
 */

$this->add_attribute( 'placeholder', $args['placeholder'] );
$this->add_attribute( 'value', $args['default'] );
$this->add_attribute( 'required', $this->block_type->get_required_val() );
$this->add_attribute( 'name', $this->block_type->get_field_name( $args['name'] ) );
$this->add_attribute( 'id', $this->block_type->get_field_id( $args ) );
$this->add_attribute( 'type', $args['field_type'] );
$this->add_attribute( 'data-field-name', $args['name'] );

if ( ! empty( $args['minlength'] ) ) {
	$this->add_attribute( 'minlength', $args['minlength'] );
}

if ( ! empty( $args['maxlength'] ) ) {
	$this->add_attribute( 'maxlength', $args['maxlength'] );
}

$mask_class = '';

if ( ! empty( $args['enable_input_mask'] ) && ! empty( $args['input_mask'] ) ) {
	$mask_class = 'jet-form__masked-field';

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

?>
<input class="jet-form__field text-field <?php echo $mask_class; ?>"<?php $this->render_attributes_string(); ?>>