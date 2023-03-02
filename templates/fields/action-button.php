<?php
/**
 * submit button template
 *
 * @var \Jet_Form_Builder\Blocks\Render\Action_Button_Render $this
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

$render_wrapper = false;

// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
if ( ! empty( $this->wrapper->attrs ) ) :
	$render_wrapper = true; ?>
	<div <?php $this->wrapper->render_attributes_string(); ?>>
<?php endif; ?>
<?php require $this->get_global_template( 'common/prev-page-button.php' ); ?>
	<button <?php $this->render_attributes_string(); ?>><?php echo wp_kses_post( $args['label'] ); ?></button>
<?php if ( $render_wrapper ) : ?>
	</div>
	<?php
endif;
// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped

