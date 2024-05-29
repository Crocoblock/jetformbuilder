<?php
/**
 * @var $attributes array The block attributes
 * @var $content string The block default content
 * @var $block \WP_Block The block instance
 */

$control_type     = $attributes['controlType'] ?? '';
$default_icon_url = $attributes['defaultImageControl']['url'] ?? '';
$checked_icon_url = $attributes['checkedImageControl']['url'] ?? '';
$width            = $attributes['style']['.jet-form-builder-check-mark-img']['width'] ?? '';

if ( ! $width || ! is_numeric( $width ) || 10 > $width ) {
	$width = 24;
}

/** @var \JFB_Compatibility\Jet_Engine\Jet_Engine $module */
/** @noinspection PhpUnhandledExceptionInspection */
$module = jet_form_builder()->compat( \JFB_Compatibility\Jet_Engine\Jet_Engine::class );

wp_enqueue_script( $module->get_handle( 'check-mark-' . $module->get_option_type() ) );

?>
<div 
<?php
echo get_block_wrapper_attributes( // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	array(
		'style' => sprintf( '--jfb-check-mark-width:%dpx;', absint( $width ) ),
	)
);
?>
>
	<?php if ( 'image' === $control_type && $default_icon_url && $checked_icon_url ) : ?>
		<img
				src="<?php echo esc_url( $default_icon_url ); ?>"
				class="jet-form-builder-check-mark-img"
		/>
		<img
				src="<?php echo esc_url( $checked_icon_url ); ?>"
				class="jet-form-builder-check-mark-img checked"
		/>
	<?php else : ?>
		<input
				type="<?php echo esc_attr( $module->get_option_type() ); ?>"
                class="check-mark-control"
		>
		<span></span>
	<?php endif; ?>
</div>
