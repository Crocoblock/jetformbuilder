<?php

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

?>
<div class="<?php echo esc_attr( $class ); ?>">
	<?php echo wp_kses_post( $message_content ); ?>
</div>
