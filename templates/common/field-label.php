<?php
/**
 * Field label template
 *
 * @var \Jet_Form_Builder\Blocks\Render\Base $this
 * @var array $args
 * @var $label_wrapper Attributes_Trait
 * @var $label_text Attributes_Trait
 * @var $label_text_tag string
 */

use Jet_Form_Builder\Classes\Attributes_Trait;


printf( "<div %s>\r\n", $label_wrapper->get_attributes_string() );
    printf( "<%s %s>", $label_text_tag, $label_text->get_attributes_string() );

        // phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
		echo wp_kses_post( $args['label'] );

		if ( $this->block_type->get_required_val() && ! empty( $this->live_form->spec_data->required_mark ) ) {
			printf(
				' <span class="jet-form-builder__required">%s</span>',
				wp_kses_post( $this->live_form->spec_data->required_mark )
			);
		}
		// phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
        echo "</{$label_text_tag}>";

	require $this->get_global_template( 'common/prev-page-button.php' );
?>
</div>
