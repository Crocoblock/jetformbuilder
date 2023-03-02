<?php
/**
 * Group break template
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

$this->add_attribute( 'class', 'jet-form-builder__group-break' );
$this->add_attribute( 'class', $args['class_name'] );
?>
<div class="jet-form-builder__field-wrap">
	<div <?php $this->render_attributes_string(); ?>></div>
</div>
