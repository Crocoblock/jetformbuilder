<?php

namespace JFB_Modules\Actions_V2\Insert_Term;

use Jet_Form_Builder\Actions\Action_Handler;
use JFB_Modules\Actions_V2\Insert_Term\Properties\Abstract_Term_Modifier;
use JFB_Modules\Actions_V2\Insert_Term\Properties\Term_Modifier;
use Jet_Form_Builder\Actions\Types\Base;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Tools;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Insert_Term_Action extends Base {

	public function get_name() {
		return __( 'Insert/Update Term', 'jet-form-builder' );
	}

	public function get_id() {
		return 'insert_term';
	}

	public function action_attributes() {
		return array(
			'taxonomy'    => array(
				'default' => '',
			),
			'fields_map'   => array(
				'default' => array(),
			),
			'default_meta' => array(
				'default' => array(),
			),
		);
	}

	/**
	 * @param array $request
	 * @param Action_Handler $handler
	 *
	 * @return void
	 */
	public function do_action( array $request, Action_Handler $handler ) {
		$modifiers = array_reverse( $this->get_modifiers() );

		/** @var Abstract_Term_Modifier $modifier */
		foreach ( $modifiers as $modifier ) {
			if ( ! $modifier->is_supported( $this ) ) {
				continue;
			}

			$modifier->before_run( $this );
			$modifier->run();
			break;
		}
	}

	public function get_taxonomy(): string {
		return $this->settings['taxonomy'] ?? '';
	}

	public static function get_context_term_key( $term_id ) {
		return "term-id-{$term_id}";
	}

	public function editor_labels() {
		return array(
			'taxonomy'    => __( 'Taxonomy:', 'jet-form-builder' ),
			'fields_map'   => __( 'Fields Map:', 'jet-form-builder' ),
		);
	}

	// public function editor_labels_help() {
	// return array(
	// 'fields_map'   => __( 'Set meta fields names or term properties to save appropriate form fields into', 'jet-form-builder' ),
	// 'default_meta' => __( 'Set default meta values which should be set on term insert/update', 'jet-form-builder' ),
	// );
	// }

	/**
	 * Regsiter custom action data for the editor
	 *
	 * @return [type] [description]
	 */
	public function action_data() {
		$properties = array();
		$modifiers  = $this->get_modifiers();

		foreach ( $modifiers as $modifier ) {
			$properties[ $modifier->get_id() ] = Tools::with_placeholder(
				Array_Tools::to_array( $modifier->properties->all() )
			);
		}

		return array(
			'taxonomies'   => Tools::get_taxonomies_for_modify(),
			'properties'   => $properties,
		);
	}

	/**
	 * Just add a new element to the end.
	 * When the action is executed, this array is flipped,
	 * which puts the \Jet_Form_Builder\Actions\Methods\Post_Modifier at the end.
	 *
	 * @return Abstract_Post_Modifier[]
	 * @since 2.1.4
	 */
	public function get_modifiers(): array {
		return apply_filters(
			'jet-form-builder/action/insert-term/modifiers',
			array(
				new Term_Modifier(),
			)
		);
	}

	/**
	 * Returns post statuses list for the options
	 *
	 * @return array
	 */
	// public function get_post_statuses_for_options() {

	// $statuses = get_post_statuses();
	// $result   = array();

	// foreach ( $statuses as $name => $label ) {
	// $result[] = array(
	// 'value' => $name,
	// 'label' => $label,
	// );
	// }

	// $result = array_merge(
	// $result,
	// array(
	// array(
	// 'value' => 'trash',
	// 'label' => __( 'Move to Trash', 'jet-form-builder' ),
	// ),
	// array(
	// 'value' => 'from-field',
	// 'label' => __( 'Get from the form field', 'jet-form-builder' ),
	// ),
	// array(
	// 'value' => 'keep-current',
	// 'label' => __( 'Keep current status (when updating post)', 'jet-form-builder' ),
	// ),
	// )
	// );

	// return Tools::with_placeholder( apply_filters( 'jet-form-builder/actions/insert-post/allowed-post-statuses', $result ) );
	// }

}
