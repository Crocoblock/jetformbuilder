<?php
namespace Jet_Form_Builder\Admin;
/**
 * Form editor class
 * Thanks Tom J Nowell for initial editor idea and inspiration!
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Editor class
 */
class Editor {

	public static $index = 0;

	public $allowed_blocks = null;
	public $action         = null;
	public $item_id        = null;

	/**
	 * Set up editor instatnce props
	 *
	 * @param array $config [description]
	 */
	public function __construct( $config = array() ) {

		if ( ! empty( $config['allowed_blocks'] ) ) {
			$this->allowed_blocks = $config['allowed_blocks'];
		}

		if ( ! empty( $config['action'] ) ) {
			$this->action = $config['action'];
		}

		if ( ! empty( $config['item_id'] ) ) {
			$this->item_id = $config['item_id'];
		}

	}

	/**
	 * Returns action URL
	 *
	 * @return [type] [description]
	 */
	public function get_action() {

		if ( null === $this->action ) {
			$this->action = apply_filters( 'jet-form-builder/editor/action', null );
		}

		return $this->action;

	}

	/**
	 * Returns current item ID
	 *
	 * @return [type] [description]
	 */
	public function get_item_id() {
		return $this->item_id;
	}

	/**
	 * Retuns allowed blocks list
	 *
	 * @return array
	 */
	public function get_allowed_blocks() {

		if ( empty( $this->allowed_blocks ) ) {

			$this->allowed_blocks = apply_filters( 'jet-form-builder/editor/allowed-blocks', array(
				'core/paragraph',
				'core/image',
				'core/heading',
				'core/verse',
				'core/freeform',
				'core/spacer',
				'core/subhead',
				'core/pullquote',
				'core/preformatted',
				'core/shortcode',
				'core/code',
				'core/quote',
				'core/list',
				'core/heading',
				'core/separator',
				'core/text-columns',
				'core/embed',
				'core-embed/youtube',
				'core-embed/twitter',
				'core-embed/vimeo',
				'core/columns',
				'core/column',
			) );

		}

		return $this->allowed_blocks;

	}

	/**
	 * Enqueue editor assets
	 *
	 * @return void
	 */
	public function enqueue_assets() {

		$handle = 'jet-form-builder';

		do_action( 'jet-form-builder/editor-assets/before', $this, $handle );

		wp_enqueue_script(
			$handle,
			JET_FORM_BUILDER_URL . 'assets/js/editor.js',
			array(
				'wp-editor',
				'wp-core-data',
				'wp-data',
				'wp-block-library',
				'wp-format-library',
				'wp-api-fetch',
			),
			JET_FORM_BUILDER_VERSION,
			true
		);

		wp_enqueue_style(
			$handle,
			JET_FORM_BUILDER_URL . 'assets/css/editor.css',
			array(
				'media',
				'l10n',
				'buttons',
				'wp-edit-blocks',
				'wp-editor',
			),
			JET_FORM_BUILDER_VERSION,
			'all'
		);

		wp_localize_script( $handle, 'JetFormEditorData', array(
			'allowedBlocks' => $this->get_allowed_blocks(),
			'action'        => $this->get_action(),
			'itemID'        => $this->get_item_id(),
		) );

		do_action( 'jet-form-builder/editor-assets/after', $this, $handle );

		/*global $wp_scripts;

		$wp_scripts->registered['wp-data']->extra['after'] = array();
		wp_add_inline_script(
			'wp-data',
			implode(
				"\n",
				array(
					'( function() {',
					'   var userId = ' . intval( get_current_user_ID() ) . ';',
					'   var storageKey = "WP_DATA_USER_" + userId;',
					'   wp.data',
					'       .use( wp.data.plugins.persistence, { storageKey: storageKey } );',
					'   wp.data.plugins.persistence.__unstableMigrate( { storageKey: storageKey } );',
					'} )();',
				)
			)
		);*/

	}

	/**
	 * Render new editor instance
	 *
	 * @return [type] [description]
	 */
	public function render( $input_name = '', $content = '', $form_name = '' ) {

		if ( ! $input_name ) {
			$input_name = 'jet_form_editor_' . self::$index;
			self::$index++;
		}

		?>
		<input name="<?php echo esc_attr( $input_name ); ?>" id="<?php echo esc_attr( $input_name ); ?>" type="hidden" />
		<script>
			document.addEventListener( 'jet-form-builder-initialized', function(event) {
				window.JetFormEditor(
					'<?php echo esc_js( $input_name ); ?>',
					'<?php echo esc_js( $input_name ); ?>',
					'<?php echo html_entity_decode( esc_js( $content ) ); ?>',
					'<?php echo esc_js( $form_name ); ?>'
				);
			});
		</script>
		<?php
	}

}
