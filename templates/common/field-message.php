<?php

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

?>
<div class="jet-form-builder__field-error">
	<?php echo wp_kses_post( $message_content ); ?>
</div>
