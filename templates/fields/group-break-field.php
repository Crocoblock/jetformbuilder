<?php
/**
 * Group break template
 */

$this->add_attribute( 'class', 'jet-form-builder__group-break' );
$this->add_attribute( 'class', $args['class_name'] );
?>
<div class="jet-form-builder__field-wrap">
	<div <?php $this->render_attributes_string(); ?>></div>
</div>
