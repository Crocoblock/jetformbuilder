<?php
/**
 * input[type="range"] template
 *
 * @var \Jet_Form_Builder\Blocks\Render\Base $this
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

$this->set_value();
$this->add_attribute( 'class', 'jet-form-builder__field range-field' );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'min', $args['min'] );
$this->add_attribute( 'max', $args['max'] );
$this->add_attribute( 'step', $args['step'] );
$this->add_attribute( 'name', $this->block_type->get_field_name( $args['name'] ) );
$this->add_attribute( 'data-field-name', $args['name'] );
$this->add_attribute( 'id', $this->block_type->get_field_id( $args ) );
$this->add_attribute( 'data-jfb-sync' );

// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
?>
<div class="jet-form-builder__field-wrap range-wrap">
	<input type="range" <?php $this->render_attributes_string(); ?>>
	<div class="jet-form-builder__field-value range-value">
		<?php if ( ! empty( $args['prefix'] ) ) : ?>
			<span class="jet-form-builder__field-value-prefix"><?php echo wp_kses_post( $args['prefix'] ); ?></span>
		<?php endif; ?>
		<span class="jet-form-builder__field-value-number"></span>
		<?php if ( ! empty( $args['suffix'] ) ) : ?>
			<span class="jet-form-builder__field-value-suffix"><?php echo wp_kses_post( $args['suffix'] ); ?></span>
		<?php endif; ?>
	</div>
</div>
<?php // phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped ?>
