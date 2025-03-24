<?php


namespace Jet_Form_Builder\Presets\Sources;

use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Exceptions\Preset_Exception;
use Jet_Form_Builder\Presets\Preset_Manager;
use JFB_Modules\Rich_Content\Macros_Parser;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Base_Source {

	protected $fields_map;
	protected $field_data = array();
	protected $field_args;
	protected $preset_data;
	protected $field      = '__condition__';
	protected $prop;
	private $src;

	protected $permission;

	const FUNC_PREFIX = 'source__';

	abstract public function query_source();

	abstract public function get_id();

	public function condition(): bool {
		return true;
	}

	/**
	 * Field args getter
	 *
	 * @return array
	 */
	public function get_field_args() {
		return $this->field_args;
	}

	/**
	 * Fields map getter
	 *
	 * @return array
	 */
	public function get_fields_map() {
		return $this->fields_map;
	}

	/**
	 * @param $fields_map
	 * @param $preset_data
	 * @param $args
	 *
	 * @return $this
	 * @throws Preset_Exception
	 */
	public function init_source( $fields_map, $preset_data, $args ): Base_Source {
		$this->field_args  = $args;
		$this->field       = $args['name'] ?? '';
		$this->fields_map  = $fields_map;
		$this->preset_data = $preset_data;
		$this->field_data  = $this->get_field_data();
		$this->prop        = $this->get_prop();

		return $this;
	}

	public function after_init(): Base_Source {
		return $this;
	}

	public function after_register() {
	}

	public function on_sanitize(): bool {
		return true;
	}

	public function is_need_prop() {
		return true;
	}

	/**
	 * @return mixed
	 * @throws Preset_Exception
	 */
	public function maybe_query_source() {
		if ( $this->prop ) {
			$this->src = $this->query_source();

			return $this;
		}

		// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
		throw new Preset_Exception( 'Empty `prop` in ' . get_class( $this ), $this->field_data );
	}

	/**
	 * @return mixed
	 * @throws Preset_Exception
	 */
	public function get_field_data() {
		if ( $this->has_field_in_map() ) {
			return $this->fields_map[ $this->field ];
		}
		// phpcs:disable WordPress.Security.EscapeOutput.ExceptionNotEscaped
		throw new Preset_Exception(
			"Empty `fields_map['{$this->field}']` in " . get_class( $this ),
			$this->fields_map
		);
		// phpcs:enable WordPress.Security.EscapeOutput.ExceptionNotEscaped
	}

	public function has_field_in_map() {
		return ( isset( $this->fields_map[ $this->field ]['prop'] ) || isset( $this->fields_map[ $this->field ]['key'] ) );
	}

	/**
	 * @return mixed
	 */
	public function src() {
		return $this->src;
	}

	/**
	 * @return mixed
	 * @throws Preset_Exception
	 */
	public function safe_src() {
		$this->throw_if_preset_not_available();

		return $this->src();
	}

	/**
	 * @return bool
	 * @throws Preset_Exception
	 */
	protected function can_get_preset() {
		return ( ! empty( $this->src() ) && ! is_wp_error( $this->src() ) );
	}

	/**
	 * @return bool
	 * @throws Preset_Exception
	 */
	protected function has_permission(): bool {
		if (
			// not enabled programmatically
			empty( $this->preset_data['_check_restriction'] ) ||
			// disabled in preset-editor
			(
				array_key_exists( 'restricted', $this->preset_data ) &&
				! $this->preset_data['restricted']
			)
		) {
			return true;
		}
		if ( is_null( $this->permission ) ) {
			$this->permission = apply_filters( 'jet-form-builder/preset-sanitize', $this->can_get_preset(), $this );
		}

		return $this->permission;
	}

	/**
	 * @throws Preset_Exception
	 */
	final protected function throw_if_preset_not_available() {
		if ( ! $this->has_permission() ) {
			throw new Preset_Exception( static::class . '::can_get_preset return FALSE' );
		}
	}


	protected function get_prop() {
		if ( ! $this->is_need_prop() ) {
			return true;
		}

		return ( ! empty( $this->field_data['prop'] ) ? $this->field_data['prop'] : false );
	}

	/**
	 * Public prop getter
	 *
	 * @return string
	 */
	public function get_prop_name() {
		return $this->prop;
	}

	/**
	 * @return false|mixed
	 * @throws Preset_Exception
	 */
	public function get_result_on_prop() {
		if ( ! $this->is_need_prop() ) {
			return $this->src();
		}

		$extra = $this->get_extra_fields();

		if ( empty( $extra ) ) {
			return $this->get_current_value();
		}

		$value = array();

		foreach ( $extra as $name => $field ) {
			$this->before_query_extra_field( $field );

			$value[ $name ] = $this->get_current_value();
		}

		return $value;
	}

	protected function before_query_extra_field( $field ) {
		$this->field_data['key'] = $field;
	}

	/**
	 * @return false|mixed
	 * @throws Preset_Exception
	 */
	private function get_current_value() {
		$func_name = self::FUNC_PREFIX . $this->prop;

		if ( is_callable( array( $this, $func_name ) ) ) {
			$result = call_user_func( array( $this, $func_name ) );
		} else {
			$result = $this->default_prop( $this->prop );
		}

		return apply_filters(
			'jet-form-builder/preset/source/value',
			$result,
			$this
		);
	}

	private function get_extra_fields(): array {
		try {
			$extra = $this->get_field_object()->get_extra_fields( $this );
		} catch ( Preset_Exception $exception ) {
			return array();
		}

		$parser = ( new Macros_Parser() )->set_replacements(
			array(
				'key'  => $this->field_data['key'] ?? '',
				'prop' => $this->prop,
			)
		);

		foreach ( $extra as $index => $field ) {
			$extra[ $index ] = $parser->parse_macros( $field );
		}

		return $extra;
	}

	/**
	 * @param string $prop
	 *
	 * @return mixed
	 * @throws Preset_Exception
	 */
	public function default_prop( string $prop ) {
		$source = $this->src;

		if ( isset( $source->$prop ) ) {
			return $source->$prop;
		} elseif ( isset( $source->data ) && isset( $source->data->$prop ) ) {
			return $source->data->$prop;
		}

		if ( ! is_object( $source ) ) {
			throw new Preset_Exception( "Source isn't object" );
		}

		throw new Preset_Exception(
			esc_html( "Can't get value from " . get_class( $source ) )
		);
	}


	/**
	 * @return mixed
	 * @throws Preset_Exception
	 */
	final public function result() {
		$this->throw_if_preset_not_available();

		return $this->parse_result_value( $this->get_result_on_prop() );
	}

	public function parse_result_value( $value ) {
		if ( ! isset( $this->field_args['type'] ) ) {
			return $value;
		}

		return Preset_Manager::instance()->prepare_result( $this->field_args['type'], $value );
	}


	/**
	 * @return Base
	 * @throws Preset_Exception
	 */
	public function get_field_object(): Base {
		$type  = $this->field_args['type'] ?? false;
		$block = jet_form_builder()->blocks->get_field_by_name( $type );

		if ( ! $block ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
			throw new Preset_Exception( 'Undefined block_type: ' . $type, $this->field_args );
		}

		$block->block_attrs = $this->field_args;

		return $block;
	}

	/**
	 * @return mixed
	 * @throws Preset_Exception
	 */
	public function get_expected_format() {
		return $this->get_field_object()->expected_preset_type()[0] ?? 'raw';
	}

}
