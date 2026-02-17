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
$meta = is_array( $meta ) ? $meta : array();

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

$title       = $args['title'] ?? '';
$description = $args['description'] ?? '';

$field_name = ! empty( $args['name'] ) ? $args['name'] : 'multi_gateway';
$name       = $this->block_type->get_field_name( $field_name );

// Per-gateway settings stored in block attributes.
$gw_settings_raw = $args['gatewaysSettings'] ?? array();
$gw_settings     = is_string( $gw_settings_raw )
	? json_decode( $gw_settings_raw, true )
	: (array) $gw_settings_raw;

$gw_settings = is_array( $gw_settings ) ? $gw_settings : array();


?>
<div class="jfb-multi-gateway">
    <div class="jfb-multi-gateway__inner">
		<?php if ( is_string( $title ) && '' !== trim( $title ) ) : ?>
            <h3 class="jfb-multi-gateway__title">
				<?php echo wp_kses_post( $title ); ?>
            </h3>
		<?php endif; ?>

		<?php if ( is_string( $description ) && '' !== trim( $description ) ) : ?>
            <p class="jfb-multi-gateway__desc">
				<?php echo wp_kses_post( $description ); ?>
            </p>
		<?php endif; ?>

		<?php if ( empty( $list ) ) : ?>
            <div class="jfb-multi-gateway__empty">
				<?php echo esc_html__( 'No gateways selected', 'jet-form-builder' ); ?>
            </div>
		<?php else : ?>
            <div class="jfb-multi-gateway__list">
				<?php foreach ( $list as $index => $gateway_key ) : ?>
					<?php
					$settings = $gw_settings[ $gateway_key ] ?? array();

					$item_label = $settings['label'] ?? '';
					$item_desc  = $settings['description'] ?? '';

					$item_label = ( is_string( $item_label ) && '' !== trim( $item_label ) )
						? $item_label
						: (string) $gateway_key;

					$item_desc = is_string( $item_desc ) ? $item_desc : '';
					?>
                    <label class="jfb-multi-gateway__item">
                        <input
                                type="radio"
                                class="jet-form-builder__field"
                                name="<?php echo esc_attr( $name ); ?>"
                                value="<?php echo esc_attr( $gateway_key ); ?>"
							<?php checked( 0 === $index ); ?>
                        />
                        <div class="jfb-multi-gateway__content">
                            <div class="jfb-multi-gateway__label">
								<?php echo wp_kses_post( $item_label ); ?>
                            </div>

							<?php if ( '' !== trim( $item_desc ) ) : ?>
                                <div class="jfb-multi-gateway__description">
                                    <div><?php echo wp_kses_post( $item_desc ); ?></div>
                                </div>
							<?php endif; ?>
                        </div>
                    </label>
				<?php endforeach; ?>
            </div>
		<?php endif; ?>
    </div>
</div>
