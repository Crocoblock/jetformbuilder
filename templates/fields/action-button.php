<?php
/**
 * next page button template
 *
 * @var \Jet_Form_Builder\Blocks\Render\Base $this
 */


?>
<button<?php $this->render_attributes_string(); ?>><?php echo $args['label'] ? $args['label'] : 'Action Label'; ?></button>

