<?php
/**
 * submit button template
 *
 * @var \Jet_Form_Builder\Blocks\Render\Action_Button_Render $this
 */

if ( ! empty( $this->wrapper->attrs ) ): ?>
    <div <?php $this->wrapper->render_attributes_string() ?>>
<?php endif; ?>
<?php include $this->get_global_template( 'common/prev-page-button.php' ); ?>
    <button <?php $this->render_attributes_string(); ?>><?php echo $args['label']; ?></button>
<?php if ( ! empty( $this->wrapper->attrs ) ): ?>
    </div>
<?php endif; ?>