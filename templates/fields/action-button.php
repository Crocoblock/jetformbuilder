<?php
/**
 * submit button template
 *
 * @var \Jet_Form_Builder\Blocks\Render\Action_Button_Render $this
 */

$render_wrapper = false;

if ( ! empty( $this->wrapper->attrs ) ): $render_wrapper = true; ?>
    <div <?php $this->wrapper->render_attributes_string() ?>>
<?php endif; ?>
<?php include $this->get_global_template( 'common/prev-page-button.php' ); ?>
    <button <?php $this->render_attributes_string(); ?>><?php echo $args['label']; ?></button>
<?php if ( $render_wrapper ): ?>
    </div>
<?php endif; ?>