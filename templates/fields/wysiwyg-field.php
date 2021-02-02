<?php
/**
 * WYSIWIG field template
 */
if ( empty( $args['default'] ) ) {
	$args['default'] = '';
}

$editor_id = 'wp_editor_' . $this->block_type->get_field_id( $args['name'] );
$editor    = array(
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
		'toolbar1'                      => 'bold,italic,|,bullist,numlist,|,link,unlink,|,undo,redo',
		'toolbar2'                      => '',
		'toolbar3'                      => '',
		'toolbar4'                      => ''
	),
);

?>
<div class="jet-form-builder__field" data-editor="<?php echo htmlspecialchars( json_encode( $editor ) ); ?>" style="padding-right:2px"><?php
	wp_editor( $args['default'], $editor_id, $editor );
?></div>
