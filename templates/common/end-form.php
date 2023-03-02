<?php
/**
 * End form template
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( isset( $form_id ) ) :
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	<div class="jet-form-builder-messages-wrap" data-form-id="<?php echo absint( $form_id ); ?>"></div>
<?php endif; ?>
</form>
