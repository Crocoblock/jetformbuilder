<?php
/**
 * CSS caching class
 */
namespace Crocoblock\Blocks_Style;

class Style_Cache {

	/**
	 * Class instance
	 *
	 * @var Style_Cache
	 */
	private static $instance = null;

	/**
	 * Cached styles by classes
	 *
	 * @var array
	 */
	protected $generated_css = array();

	/**
	 * List of already printed CSS classes
	 *
	 * @var array
	 */
	protected $printed_css = array();

	/**
	 * Check if the class is already printed
	 *
	 * @param string $class_name
	 * @return boolean
	 */
	public function is_printed( $class_name ) {

		if ( ! is_string( $class_name ) || empty( $class_name ) ) {
			return false;
		}

		return in_array( $class_name, $this->printed_css, true );
	}

	/**
	 * Get cached or generated styles.
	 *
	 * @param Style_Engine $style_engine
	 * @return void
	 */
	public function get_cached( $style_engine ) {

		if ( ! $style_engine instanceof Style_Engine ) {
			return array();
		}

		$class_name = $style_engine->get_class_name();

		if ( isset( $this->generated_css[ $class_name ] ) ) {
			return $this->generated_css[ $class_name ];
		}

		$styles_data = $style_engine->get_styles();

		if ( ! empty( $styles_data ) ) {
			$this->generated_css[ $class_name ] = $styles_data;
		}

		return $styles_data;
	}

	/**
	 * Add a class to the printed CSS classes list
	 *
	 * @param string $class_name
	 */
	public function add_printed( $class_name ) {

		if ( ! is_string( $class_name ) || empty( $class_name ) ) {
			return;
		}
		if ( ! in_array( $class_name, $this->printed_css, true ) ) {
			$this->printed_css[] = $class_name;
		}
	}

	/**
	 * Get the instance of the Style_Cache class
	 *
	 * @return Style_Cache
	 */
	public static function get_instance() {

		if ( null === self::$instance ) {
			self::$instance = new self();
		}

		return self::$instance;
	}
}