<?php


namespace Jet_Form_Builder\Classes;

use Jet_Form_Builder\Blocks\Manager;

if ( ! defined( 'WPINC' ) ) {
	die;
}

class Builder_Helper {

	private static $html_ids = array();

	/**
	 * @param $object_id
	 * @param $args
	 * @param false $checked
	 *
	 * @return string
	 */
	public function get_custom_template( $object_id, $args, $checked = false ) {
		if ( ! Compatibility::has_jet_engine() ) {
			return __( 'Please install JetEngine', 'jet-form-builder' ) . '<br>';
		}

		$listing_id = ! empty( $args['custom_item_template_id'] ) ? $args['custom_item_template_id'] : false;
		$listing_id = absint( $listing_id );

		if ( ! $listing_id ) {
			return __( 'Please select template', 'jet-form-builder' ) . '<br>';
		}

		global $wp_query;
		$default_object = $wp_query->queried_object;

		$options_from = ! empty( $args['field_options_from'] ) ? $args['field_options_from'] : 'posts';

		if ( 'terms' === $options_from ) {
			$object = get_term( $object_id );
		} else {
			$object = get_post( $object_id );
		}

		$classes = array(
			'jet-form-builder__field-template',
			'jet-listing-dynamic-post-' . $object_id,
		);

		if ( $checked ) {
			$classes[] = 'jet-form-builder__field-template--checked';
		}

		$wp_query->queried_object = $object;
		jet_engine()->listings->data->set_current_object( $object );

		jet_engine()->frontend->set_listing( $listing_id );

		ob_start();
		$content = jet_engine()->frontend->get_listing_item( $object );

		$content .= ob_get_clean();

		wp_enqueue_script( Manager::LISTING_OPTIONS_HANDLE );

		$result = sprintf(
			'<div class="%3$s" data-value="%1$d">%2$s</div>',
			esc_attr( $object_id ),
			apply_filters( 'jet-form-builder/custom-template-content', $content, $object_id, $listing_id ),
			join( ' ', $classes )
		);

		$wp_query->queried_object = $default_object;
		jet_engine()->listings->data->set_current_object( $wp_query->queried_object );

		return $result;
	}

	/**
	 * @param string $html_id
	 * @param string $for_html
	 *
	 * @return string
	 */
	public static function get_unique_id( string $html_id, string $for_html = 'input' ): string {
		if ( ! array_key_exists( $html_id, self::$html_ids ) ) {
			self::$html_ids[ $html_id ] = array();
		}

		if ( ! isset( self::$html_ids[ $html_id ][ $for_html ] ) ) {
			self::$html_ids[ $html_id ][ $for_html ] = 0;

			return $html_id;
		}

		return sprintf( '%1$s_%2$d', $html_id, ++ self::$html_ids[ $html_id ][ $for_html ] );
	}

}
