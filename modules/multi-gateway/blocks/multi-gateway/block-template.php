<?php
/**
 * @var Base  $this
 * @var array $args
 */

use Jet_Form_Builder\Blocks\Render\Base;

if ( ! defined( 'WPINC' ) ) {
	die;
}

$form_id = (int) $this->form_id;


$parent = wp_is_post_revision( $form_id );
if ( $parent ) {
	$form_id = (int) $parent;
}

$parent = wp_is_post_autosave( $form_id );
if ( $parent ) {
	$form_id = (int) $parent;
}

$parent = wp_get_post_parent_id( $form_id );
if ( $parent ) {
	$form_id = (int) $parent;
}

$raw  = get_post_meta( $form_id, '_jf_gateways', true );
$meta = is_string( $raw ) ? json_decode( $raw, true ) : (array) $raw;
$meta = is_array( $meta ) ? $meta : [];

$mode = $meta['mode'] ?? 'single';
$list = array();

if ( 'manual' === $mode ) {
	foreach ( $meta as $key => $value ) {
		if ( ! is_string( $key ) ) {
			continue;
		}
		if ( in_array( $key, array( 'mode', 'gateway' ), true ) ) {
			continue;
		}
		if ( is_array( $value ) && ! empty( $value['show_on_front'] ) ) {
			$list[] = $key;
		}
	}
} else {
	$gw = $meta['gateway'] ?? 'none';
	if ( is_string( $gw ) && $gw && 'none' !== $gw ) {
		$list[] = $gw;
	}
}

$label = $args['title'] ?? '';
$desc  = $args['description'] ?? '';

$field_name = $args['name'] ?: 'multi_gateway';

$name = $this->block_type->get_field_name( $field_name );

?>
<div class="jfb-multi-gateway">
	<?php if ( $label ) : ?>
        <h3 class="jfb-multi-gateway__title">
			<?php echo wp_kses_post( $label ); ?>
        </h3>
	<?php endif; ?>

	<?php if ( $desc ) : ?>
        <p class="jfb-multi-gateway__desc">
			<?php echo wp_kses_post( $desc ); ?>
        </p>
	<?php endif; ?>

	<?php if ( empty( $list ) ) : ?>
        <div class="jfb-multi-gateway__empty">
			<?php echo esc_html__( 'No gateways selected', 'jet-form-builder' ); ?>
        </div>
	<?php else : ?>
        <div class="jfb-multi-gateway__list">
			<?php foreach ( $list as $index => $gateway_key ) : ?>
                <label class="jfb-multi-gateway__item">
                    <input
                            type="radio"
                            class="jet-form-builder__field"
                            name="<?php echo esc_attr( $name ); ?>"
                            value="<?php echo esc_attr( $gateway_key ); ?>"
						<?php echo 0 === $index ? 'checked="checked"' : ''; ?>
                    />
                    <span class="jfb-multi-gateway__label">
						<?php echo esc_html( $gateway_key ); ?>
					</span>
                </label>
			<?php endforeach; ?>
        </div>
	<?php endif; ?>
</div>


