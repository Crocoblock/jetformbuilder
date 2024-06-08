<?php
/**
 * @var $attributes Attributes_Interface The block attributes
 */

use JFB_Compatibility\Jet_Engine\Blocks\Check_Mark\Interfaces\Attributes_Interface;

/**
 * @var \JFB_Compatibility\Jet_Engine\Jet_Engine $module
 * @noinspection PhpUnhandledExceptionInspection
 */
$module = jet_form_builder()->compat( \JFB_Compatibility\Jet_Engine\Jet_Engine::class );

wp_enqueue_script( $module->get_handle( 'check-mark-' . $module->get_option_type() ) );

// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
?>
<div <?php echo $attributes->get_wrapper_attributes(); ?>>
	<?php if ( $attributes->is_image_control() ) : ?>
		<img
				src="<?php echo esc_url( $attributes->get_default_icon_url() ); ?>"
				class="jet-form-builder-check-mark-img"
		/>
		<img
				src="<?php echo esc_url( $attributes->get_checked_icon_url() ); ?>"
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
