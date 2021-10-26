<?php
/**
 * next page button template
 */


$this->add_attribute( 'class', 'jet-form-builder__next-page' );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'type', 'button' );
// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
?>
<div class="jet-form-builder__next-page-wrap">
	<?php echo $this->render_disabled_message_form_break( $args ); ?>
	<?php require $this->get_global_template( 'common/prev-page-button.php' ); ?>
	<?php if ( ! isset( $args['add_next_button'] ) || $args['add_next_button'] ): ?>
		<button<?php $this->render_attributes_string(); ?>><?php echo $args['label'] ? $args['label'] : 'Next'; ?></button>
	<?php endif; ?>
</div>
<?php
// phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
$this->reset_attributes();
