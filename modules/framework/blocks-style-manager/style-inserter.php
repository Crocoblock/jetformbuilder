<?php
/**
 * CSS parser engine
 */
namespace Crocoblock\Blocks_Style;


class Style_Inserter {

	protected $class_name = '';

	protected $data = array();

	/**
	 * Current styles collection.
	 *
	 * @var string|null
	 */
	public static $current_collection = null;

	/**
	 * All styles grouped into collections.
	 *
	 * @var array
	 */
	public static $collections = array();

	public function __construct( $class_name = '', $data = array() ) {
		$this->class_name = $class_name;
		$this->data       = $data;
	}

	/**
	 * Set current styles collection.
	 *
	 * @param string|null $name
	 * @return void
	 */
	public static function set_collection( $name = null ) {
		self::$current_collection = $name;
	}

	/**
	 * Insert styles into the given content.
	 *
	 * 1. If the content is empty, it returns an empty string.
	 * 2. If $this->data contains not empty 'styles' key,
	 *    it returns the styles wrapped in a <style> tag and adds to the begining
	 *    of the content.
	 * 3. Also it adds $this->class_name to the content wrapper class.
	 * 4. To do this we need to check - if first tag of the content is contains
	 *    class attribute, we will add our class to it.
	 * 5. If the first tag does not contain class attribute, we create a new class attribute with
	 *    our class and add it to the first tag.
	 * 6. Now we need to check if $this->data contains not empty 'variables' key,
	 *    if so, we need to add these variables to the style attribute of first tag in the content.
	 * 7. If the first tag does not contain style attribute, we create a new style attribute
	 *    with our variables and add it to the first tag if already contain - we will append our
	 *    variables to it.
	 *
	 * @param string $content Content to insert styles into.
	 * @return string
	 */
	public function insert_styles( $content = '' ) {

		$variables = '';

		if ( ! empty( $this->data['variables'] ) ) {
			$variables = trim( ' ' . $this->data['variables'] );
			$variables = sprintf( '.%1$s { %2$s }', $this->class_name, $variables );
		}

		$styles = trim( $variables . ' ' . $this->data['styles'] );

		if ( ! empty( $styles ) ) {

			if ( ! empty( $content ) && ! empty( $this->class_name ) ) {
				$content = $this->with_class_name( $content );
			}

			if ( ! empty( self::$current_collection ) ) {

				if ( ! isset( self::$collections[ self::$current_collection ] ) ) {
					self::$collections[ self::$current_collection ] = '';
				}

				self::$collections[ self::$current_collection ] .= $styles;

				// If we stored styles into the collection - there is nothing more to do.
				return $content;
			}

			if ( ! Style_Cache::get_instance()->is_printed( $this->class_name ) ) {
				if ( ! did_action( 'wp_head' ) ) {
					// If the wp_head action isn't called yet, we will add the styles to the head.
					add_action( 'wp_head', function() use ( $styles ) {
						echo self::styles_with_tag( $styles );
					} );
				} else {
					// If the wp_head action is already called, we will add the styles to the content.
					$content = self::styles_with_tag( $styles ) . $content;
				}
			}
		}

		return $content;
	}

	/**
	 * Get styles collection by name.
	 *
	 * @param string|null $name
	 * @return string
	 */
	public static function get_styles_collection( $name = null, $with_tag = true ) {

		if ( ! $name ) {
			return '';
		}

		$styles = isset( self::$collections[ $name ] ) ? self::$collections[ $name ] : '';

		if ( ! $styles ) {
			return '';
		}

		return $with_tag ? self::styles_with_tag( $styles ) : $styles;
	}

	/**
	 * Add class name to the content wrapper.
	 *
	 * @param string $content Content to add class name to.
	 * @return string
	 */
	public function with_class_name( $content = '' ) {

		if ( empty( $content ) || empty( $this->class_name ) ) {
			return $content;
		}

		if ( ! class_exists( '\WP_HTML_Processor' ) ) {
			require_once ABSPATH . WPINC . '/class-wp-html-processor.php';
		}

		$processor = \WP_HTML_Processor::create_fragment( $content );

		while ( $processor->next_tag( [
			'breadcrumbs' => [ 'BODY', '*' ],
			'tag_closers' => 'skip',
		] ) ) {
			$processor->add_class( $this->class_name );
		}

		$content = $processor->get_updated_html();

		return $content;
	}

	/**
	 * Get styles wrapped into the <style> tag.
	 *
	 * @param string $css CSS styles to insert.
	 * @return string
	 */
	public static function styles_with_tag( $css = '' ) {
		return '<style>' . $css . '</style>';
	}
}
