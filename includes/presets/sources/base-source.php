<?php


namespace Jet_Form_Builder\Presets\Sources;


use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Presets\Types\Base_Preset;

abstract class Base_Source {

	protected $preset_type;
	protected $prop;
	public $src = false;

	public function __construct( Base_Preset $preset_type ) {
		$this->preset_type = $preset_type;
	}

	public function get_source() {
		$post_from = ! empty( $this->preset_type->data['post_from'] ) ? $this->preset_type->data['post_from'] : $this->preset_type->defaults['post_from'];

		if ( 'current_post' === $post_from ) {
			$post_id = get_the_ID();
		} else {
			$var     = ! empty( $this->data['query_var'] ) ? $this->preset_type->data['query_var'] : $this->preset_type->defaults['query_var'];
			$post_id = ( $var && isset( $_REQUEST[ $var ] ) ) ? $_REQUEST[ $var ] : false;
		}

		if ( $post_id ) {
			$this->src = get_post( $post_id );
		}

		return $this;
	}

	protected function can_get_preset() {
		return true;
	}

	public function __call( string $prop, array $arguments ) {
		$source = $this->src;

		if ( isset( $source->$prop ) ) {
			return $source->$prop;
		} elseif ( isset( $source->data ) && isset( $source->data->$prop ) ) {
			return $source->data->$prop;
		}
		return '';
	}

	protected function set_prop() {
		$this->prop = ! empty( $this->preset_type->field_data['prop'] ) ? $this->preset_type->field_data['prop'] : 'post_title';
	}

	public function get_result_on_prop() {
		return call_user_func( array( $this, $this->prop ) );
	}

	public function result() {
		if ( ! $this->can_get_preset() ) {
			var_dump(342342 );
			return $this->preset_type->result;
		}
		$this->set_prop();

		return $this->parse_result_value( $this->get_result_on_prop() );
	}

	public function parse_result_value( $value ) {
		// Prepare value for date field
		if ( 'date-field' === $this->preset_type->args['type'] && Tools::is_valid_timestamp( $value ) ) {
			$value = date_i18n( 'Y-m-d', $value );
		}

		if ( ! empty( $value ) ) {
			$this->preset_type->result['rewrite'] = true;
			$this->preset_type->result['value']   = $value;
		}

		return $this->preset_type->result;
	}

}