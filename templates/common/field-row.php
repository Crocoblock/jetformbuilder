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

/*
 * We return the prepared field template.
 * Each of the listed variables is validated in separate files.
 *
 * $label    - './field-label.php'
 * $desc     - './field-description.php'
 * $template - '../fields/{$field_type}.php' ( takes place at the level of a separate field template )
 */

?>
<?php if ( $this->get_field_label() || $this->get_field_desc() ) : ?>
	<div class="jet-form-builder-col__start">
		<?php
		// Read the comment above.
		echo wp_kses_post( $label );
		echo wp_kses_post( $desc );

		// Reset fullwidth content if we have label or description for field.
		$fullwidth = '';

		?>
	</div>
<?php endif; ?>
<div class="jet-form-builder-col__end<?php echo esc_attr( $fullwidth ); ?>">
	<?php
	// Read the comment above.
	echo $template;

	//phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
	?>
</div>
