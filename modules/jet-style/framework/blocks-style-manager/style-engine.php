<?php
/**
 * CSS parser engine
 */
namespace Crocoblock\Blocks_Style;

class Style_Engine {

	protected $attrs = array();

	protected $css_props = array();

	protected $class_name = '';

	protected $styles = array();

	protected $responsive_styles = array();

	protected $variables = array();

	protected $current_breakpoint = '';

	protected $breakpoints = array(
		'__desktop' => array(
			'minWidth' => 992,
		),
		'__tablet' => array(
			'maxWidth' => 991,
		),
		'__mobile' => array(
			'maxWidth' => 478,
		),
	);

	/**
	 * Constructor
	 *
	 * @param array $attrs Block attributes.
	 * @param array $css_props CSS properties.
	 */
	public function __construct( $attrs = array(), $css_props = array() ) {

		$this->class_name = self::get_classname_from_attrs( $attrs );

		if ( ! empty( $attrs['_uniqueClassName'] ) ) {
			unset( $attrs['_uniqueClassName'] );
		}

		$this->attrs     = $attrs;
		$this->css_props = $css_props;
	}

	/**
	 * Get class name from attributes.
	 *
	 * @param array $attrs Block attributes.
	 * @return string
	 */
	public static function get_classname_from_attrs( $attrs = array() ) {
		return ! empty( $attrs['_uniqueClassName'] ) ? $attrs['_uniqueClassName'] : '';
	}

	/**
	 * Get class name of the block
	 *
	 * @return string
	 */
	public function get_class_name() {
		return $this->class_name;
	}

	/**
	 * Load field handlers.
	 *
	 * This method is used to load field handlers for the block styles.
	 * It checks if the base class exists and includes it if not.
	 */
	public function load_field_handlers() {

		if ( ! class_exists( '\Crocoblock\Blocks_Style\Field_Handlers\Base' ) ) {
			require_once dirname( __FILE__ ) . '/field-handlers/base.php';
		}
	}

	/**
	 * Get styles for the block.
	 *
	 * @return array
	 */
	public function get_styles() {

		$this->load_field_handlers();

		foreach ( array_keys( $this->breakpoints ) as $breakpoint ) {

			$this->current_breakpoint = $breakpoint;

			if ( ! empty( $this->attrs[ $breakpoint ] ) && is_array( $this->attrs[ $breakpoint ] ) ) {

				foreach ( $this->attrs[ $breakpoint ] as $prop_id => $prop_value ) {

					if ( ! empty( $this->css_props[ $prop_id ] ) ) {
						$prop = $this->css_props[ $prop_id ];
					} else {
						continue;
					}

					if ( ! empty( $prop['css_selector'] ) && is_array( $prop['css_selector'] ) ) {
						foreach ( $prop['css_selector'] as $selector => $definition ) {
							$this->add_selector_to_styles( array(
									'prop'       => $prop_id,
									'type'       => $prop['type'],
									'selectoor'  => $selector,
									'definition' => $definition,
									'value'      => $prop_value,
							) );
						}
					}

					if ( ! empty( $prop['css_var'] ) && is_array( $prop['css_var'] ) ) {
						$handler = $this->get_field_handler( $prop['type'], $prop_value );
						if ( $handler ) {
							$prop['css_var']['suffix'] = $breakpoint;
							$variable = $handler->parse_variable( $prop['css_var'] );
							if ( ! empty( $variable ) ) {
								$this->variables = array_merge( $this->variables, $variable );
							}
							$prop['css_var']['suffix'] = false;
						}
					}
				}

				unset( $this->attrs[ $breakpoint ] );
			}

			$this->current_breakpoint = '';
		}

		foreach ( $this->attrs as $prop_id => $prop_value ) {

			if ( ! empty( $this->css_props[ $prop_id ] ) ) {
				$prop = $this->css_props[ $prop_id ];
			} else {
				continue;
			}

			if ( ! empty( $prop['css_selector'] ) && is_array( $prop['css_selector'] ) ) {
				foreach ( $prop['css_selector'] as $selector => $definition ) {
					$this->add_selector_to_styles( array(
						'prop'       => $prop_id,
						'type'       => $prop['type'],
						'selectoor'  => $selector,
						'definition' => $definition,
						'value'      => $prop_value,
					) );
				}
			}

			if ( ! empty( $prop['css_var'] ) && is_array( $prop['css_var'] ) ) {
				$handler = $this->get_field_handler( $prop['type'], $prop_value );
				if ( $handler ) {
					$variable = $handler->parse_variable( $prop['css_var'] );
					if ( ! empty( $variable ) ) {
						$this->variables = array_merge( $this->variables, $variable );
					}
				}
			}
		}

		return array(
			'styles' => $this->stringify_selectors( $this->styles ) . $this->get_responsive_styles(),
			'variables' => $this->stringify_props( $this->variables ),
		);
	}

	/**
	 * Get responsive styles.
	 *
	 * @return string
	 */
	public function get_responsive_styles() {

		$css = '';

		if ( ! empty( $this->responsive_styles ) && is_array( $this->responsive_styles ) ) {
			foreach ( $this->responsive_styles as $breakpoint => $selectors ) {
				if ( ! empty( $selectors ) && is_array( $selectors ) ) {
					$css .= '@media screen and (';
					if ( ! empty( $this->breakpoints[ $breakpoint ]['minWidth'] ) ) {
						$css .= 'min-width: ' . $this->breakpoints[ $breakpoint ]['minWidth'] . 'px';
					}
					if ( ! empty( $this->breakpoints[ $breakpoint ]['maxWidth'] ) ) {
						$css .= 'max-width: ' . $this->breakpoints[ $breakpoint ]['maxWidth'] . 'px';
					}
					$css .= ') { ';
					$css .= $this->stringify_selectors( $selectors );
					$css .= ' } ';
				}
			}
		}

		return ' ' . $css;
	}

	/**
	 * Adds selector to styles.
	 *
	 * @param array $selector_data Selector data.
	 */
	public function add_selector_to_styles( $selector_data = array() ) {

		$parsed_rule = $this->generate_css_rules(
			$selector_data['prop'],
			$selector_data['type'],
			$selector_data['definition'],
			$selector_data['value']
		);

		if ( empty( $parsed_rule ) ) {
			return;
		}

		$parsed_selector = $this->generate_css_selector( $selector_data['selectoor'] );

		if ( ! $this->current_breakpoint ) {

			if ( empty( $this->styles[ $parsed_selector ] ) ) {
				$this->styles[ $parsed_selector ] = array();
			}

			$this->styles[ $parsed_selector ][] = $parsed_rule;
		} else {

			$breakpoint = $this->current_breakpoint;

			if ( empty( $this->responsive_styles[ $breakpoint ][ $parsed_selector ] ) ) {
				$this->responsive_styles[ $breakpoint ][ $parsed_selector ] = array();
			}

			$this->responsive_styles[ $breakpoint ][ $parsed_selector ][] = $parsed_rule;
		}
	}

	/**
	 * Generates a valid CSS selector.
	 *
	 * @param string $selector CSS selector to generate.
	 * @return string Parsed CSS selector.
	 */
	public function generate_css_selector( $selector = '' ) {

		if ( empty( $selector ) ) {
			return '';
		}

		return Field_Handlers\Base::replace_data(
			$selector,
			apply_filters( 'crocoblock/style-manager/css-selector-macros', array(
				'wrapper' => '.' . $this->class_name,
				'id'      => $this->class_name,
			), $this )
		);
	}

	/**
	 * Generates a valid CSS props set for given selector
	 * and actual attributes data.
	 *
	 * @param string  $prop_id   Property ID (to get it form attributes).
	 * @param string  $prop_type Property type to get correct parser.
	 * @param string  $def       CSS rule definition with macros, which will be replaced with values.
	 * @param array   $value     Value to parse (optional, if not set, will be taken from attributes).
	 * @return void
	 */
	public function generate_css_rules( $prop_id, $prop_type, $def = '', $value = array() ) {

		if ( empty($value ) ) {
			return;
		}

		$handler = $this->get_field_handler( $prop_type, $value );

		if ( ! $handler ) {
			return;
		}

		return $handler->get_css_rule( $def );
	}

	/**
	 * Get field handler by type.
	 *
	 * @param string $type Field type.
	 * @param mixed  $raw_value Raw value to parse.
	 * @return \Crocoblock\Blocks_Style\Field_Handlers\Base|false
	 */
	public function get_field_handler( $type = '', $raw_value = '' ) {

		switch ( $type ) {

			case 'range':

				if ( ! class_exists( '\Crocoblock\Blocks_Style\Field_Handlers\Range' ) ) {
					require_once dirname( __FILE__ ) . '/field-handlers/range.php';
				}

				return new Field_Handlers\Range( $raw_value );

			case 'typography':

				if ( ! class_exists( '\Crocoblock\Blocks_Style\Field_Handlers\Typography' ) ) {
					require_once dirname( __FILE__ ) . '/field-handlers/typography.php';
				}

				return new Field_Handlers\Typography( $raw_value );

			case 'border':

				if ( ! class_exists( '\Crocoblock\Blocks_Style\Field_Handlers\Border' ) ) {
					require_once dirname( __FILE__ ) . '/field-handlers/border.php';
				}

				return new Field_Handlers\Border( $raw_value );

			case 'dimensions':

				if ( ! class_exists( '\Crocoblock\Blocks_Style\Field_Handlers\Dimensions' ) ) {
					require_once dirname( __FILE__ ) . '/field-handlers/dimensions.php';
				}

				return new Field_Handlers\Dimensions( $raw_value );

			default:
				return new Field_Handlers\Base( $raw_value );
		}
	}

	/**
	 * Generates a valid CSS selectors set.
	 *
	 * Input format:
	 * array(
	 *    'selector_1' => array( 'css_prop_1:value_1', 'css_prop_2:value_2' ),
	 *    'selector_2' => array( 'css_prop_3:value_3', 'css_prop_4:value_4' ),
	 * );
	 *
	 * Output format:
	 * '.selector_1 { css_prop_1: value_1; css_prop_2: value_2; }
	 * .selector_2 { css_prop_3: value_3; css_prop_4: value_4; }'
	 *
	 * @param array $selectors
	 * @return void
	 */
	public function stringify_selectors( $selectors = array() ) {

		$css = '';

		if ( ! empty( $selectors ) && is_array( $selectors ) ) {
			foreach ( $selectors as $selector => $props ) {
				if ( ! empty( $props ) && is_array( $props ) ) {
					$css .= $selector . ' { ' . $this->stringify_props( $props ) . ' } ';
				}
			}
		}

		return trim( $css );
	}

	/**
	 * Generates a valid CSS definitions set.
	 *
	 * Input format:
	 * array(
	 *    'css_prop_1: value_1',
	 *    'css_prop_2: value_2',
	 * );
	 *
	 * Output format:
	 * 'css_prop_1: value_1; css_prop_2: value_2;'
	 *
	 * @param array $props
	 * @return void
	 */
	public function stringify_props( $props = array() ) {

		if ( empty( $props ) || ! is_array( $props ) ) {
			return '';
		}

		return implode( ';', array_map( function( $prop ) {
			return rtrim( $prop, ';' );
		}, $props ) ) . ';';
	}
}