<?php
/**
 * Row-layout field template
 *
 * @var $template
 * @var $label
 * @var $desc
 * @var Base $this
 */

use Jet_Form_Builder\Blocks\Render\Base;

$fullwidth = ' content-fullwidth';

//phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
?>
<?php if ( $this->get_field_label() || $this->get_field_desc() ) : ?>
	<div class="jet-form-builder-col__start">
		<?php

		echo $label;
		echo $desc;

		// Reset fullwidth content if we have label or description for field.
		$fullwidth = '';

		?>
	</div>
<?php endif; ?>
<div class="jet-form-builder-col__end<?php echo esc_attr( $fullwidth ); ?>">
	<?php
	echo $template;
	//phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
	?>
</div>
