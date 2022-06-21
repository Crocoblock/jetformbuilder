<?php
/**
 * End form template
 */

if ( isset( $form_id ) ) :
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
	<div class="jet-form-builder-messages-wrap" data-form-id="<?php echo absint( $form_id ); ?>"></div>
<?php endif; ?>
</form>
