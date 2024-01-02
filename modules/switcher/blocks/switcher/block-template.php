<?php
/**
 * @var Base $this
 * WYSIWIG field template
 */

use Jet_Form_Builder\Blocks\Render\Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

$this->add_attribute( 'type', 'checkbox' );
$this->add_attribute( 'role', 'switch' );
$this->add_attribute( 'class', 'jet-form-builder__field' );

?>
<input <?php $this->render_attributes_string(); ?>>