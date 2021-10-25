<?php

use Jet_Form_Builder\Blocks\Render\Base;

/**
 * Row-layout field template
 *
 * @var $render_template
 * @var $render_label
 * @var $render_desc
 * @var Base $this
 */

$fullwidth = ' content-fullwidth';

?>
<?php if ( $this->get_field_label() || $this->get_field_desc() ) : ?>
    <div class="jet-form-builder-col__start">
		<?php

		call_user_func( $render_label );
		call_user_func( $render_desc );

		// Reset fullwidth content if we have label or description for field
		$fullwidth = '';

		?>
    </div>
<?php endif; ?>
<div class="jet-form-builder-col__end<?php echo esc_attr( $fullwidth ); ?>">
	<?php
	call_user_func( $render_template );
	?>
</div>