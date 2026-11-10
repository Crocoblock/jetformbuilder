<?php
/**
 * Row-layout field template
 *
 * @var $template
 * @var $label
 * @var $desc
 * @var string $desc_position
 * @var Base $this
 */

use Jet_Form_Builder\Blocks\Render\Base;
use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

$fullwidth         = ' content-fullwidth';
$desc_after_fields = 'after-fields' === ( $desc_position ?? 'auto' );

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
<?php if ( $this->get_field_label() || ( ! $desc_after_fields && $this->get_field_desc() ) ) : ?>
	<div class="jet-form-builder-col__start">
		<?php
		// Read the comment above.
		echo Tools::esc_template_string( $label );
		if ( ! $desc_after_fields ) {
			echo Tools::esc_template_string( $desc );
		}

		// Reset fullwidth content if we have label or description for field.
		$fullwidth = '';

		?>
	</div>
<?php endif; ?>
<div class="jet-form-builder-col__end<?php echo esc_attr( $fullwidth ); ?>">
	<?php
	// Read the comment above.
	echo Tools::esc_template_string( $template, false );
	if ( $desc_after_fields ) {
		echo Tools::esc_template_string( $desc );
	}

	//phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
	?>
</div>
<?php
