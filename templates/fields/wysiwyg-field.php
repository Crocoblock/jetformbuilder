<?php
/**
 * @var Base $this
 * WYSIWIG field template
 */

use Jet_Form_Builder\Blocks\Render\Base;
use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( empty( $args['default'] ) ) {
	$args['default'] = '';
}

$editor_id = 'wp_editor_' . $this->block_type->get_field_id( $args['name'] );
$editor    = apply_filters(
	'jet-form-builder/fields/wysiwyg-field/config',
	array(
		'textarea_name' => $this->block_type->get_field_name( $args['name'] ),
		'media_buttons' => false,
		'textarea_rows' => 8,
		'quicktags'     => false,
		'tinymce'       => array(
			'plugins'                       => 'lists,paste,tabfocus,wplink,wordpress',
			'paste_as_text'                 => true,
			'paste_auto_cleanup_on_paste'   => true,
			'paste_remove_spans'            => true,
			'paste_remove_styles'           => true,
			'paste_remove_styles_if_webkit' => true,
			'paste_strip_class_attributes'  => true,
			'toolbar1'                      => 'formatselect,|,bold,italic,strikethrough,blockquote,|,bullist,numlist,|,alignleft,aligncenter,alignright,|,link,unlink,|,undo,redo',
			'toolbar2'                      => '',
			'toolbar3'                      => '',
			'toolbar4'                      => '',
		),
	)
);
$this->add_attribute( 'class', 'jet-form-builder__field wysiwyg-field' );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'class', $this->maybe_get_error_class( $args ) );
$this->add_attribute( 'data-editor', htmlspecialchars( wp_json_encode( $editor ) ) );
$this->add_attribute( 'data-required', $this->block_type->get_required_val() );
$this->add_attribute( 'data-report-type', 'html_message' );
$this->add_attribute(
	'data-jfb-messages',
	Tools::encode_json(
		array(
			'required' => 'This field is required',
		)
	)
);
$this->add_attribute( 'data-jfb-sync' );

if ( is_rtl() ) {
	$editor['tinymce']['plugins']  = $editor['tinymce']['plugins'] . ',directionality';
	$editor['tinymce']['toolbar1'] = $editor['tinymce']['toolbar1'] . ',ltr';
}
?>
<div class="jet-form-builder__field-wrap">
	<div <?php $this->render_attributes_string(); ?>>
		<?php
		wp_editor( $args['default'], $editor_id, $editor );
		?>
	</div>
	<?php
	// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
	echo Tools::esc_template_string( $this->maybe_render_error( $args ) );
	?>
</div>
