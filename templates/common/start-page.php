<?php
/**
 * Start from page template
 *
 * @var Form_Break $this
 */

use Jet_Form_Builder\Form_Break;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

?>
<div
		class="jet-form-builder-page <?php echo esc_attr( $hidden_class ); ?>"
		data-page="<?php echo esc_attr( $this->get_current() ); ?>"
		data-page-offset="<?php echo absint( $this->get_page_offset() ); ?>"
>
