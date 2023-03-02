<?php
/**
 * next page button template
 *
 * @var \Jet_Form_Builder\Blocks\Render\Base $this
 */

use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

$this->add_attribute( 'class', 'jet-form-builder__next-page' );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'type', 'button' );
// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
?>
<div class="jet-form-builder__next-page-wrap">
	<?php echo Tools::esc_template_string( $this->render_disabled_message_form_break( $args ) ); ?>
	<?php require $this->get_global_template( 'common/prev-page-button.php' ); ?>
	<?php if ( ! isset( $args['add_next_button'] ) || $args['add_next_button'] ) : ?>
		<button <?php $this->render_attributes_string(); ?>><?php echo wp_kses_post( $args['label'] ?: 'Next' ); ?></button>
	<?php endif; ?>
</div>
<?php
// phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
$this->reset_attributes();
