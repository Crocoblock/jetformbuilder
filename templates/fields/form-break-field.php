<?php
/**
 * next page button template
 */

$class_name = isset( $args['class_name'] ) ? $args['class_name'] : '';

$classes = array( 'jet-form__next-page', $class_name );

$this->add_attribute( 'class', 'jet-form__next-page' );
$this->add_attribute( 'class', $class_name );
$this->add_attribute( 'type', 'button' );
?>
<div class="jet-form__next-page-wrap">
	<?php if ( ! empty( $args['page_break_disabled'] ) ) : ?>
	<div class="jet-form__next-page-msg"><?php
		echo wp_kses_post( $args['page_break_disabled'] );
	?></div>
	<?php endif; ?>
	<?php include $this->get_template( 'common/prev-page-button.php' ); ?>
	<?php if ( ! empty( $args['label'] ) ) : ?>
	<button<?php $this->render_attributes_string(); ?>><?php echo $args['label']; ?></button>
	<?php endif; ?>
</div>
<?php $this->reset_attributes(); ?>