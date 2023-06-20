<?php


namespace Jet_Form_Builder\Request;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Exceptions\Parse_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;
use Jet_Form_Builder\Request\Exceptions\Exclude_Field_Exception;
use Jet_Form_Builder\Request\Exceptions\Plain_Value_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @property array __danger_parsers
 *
 * Class Parser_Context
 * @package Jet_Form_Builder\Request
 */
class Parser_Context {

	protected $name = '';

	protected $raw_request = array();
	protected $raw_files   = array();

	private $inside_conditional = false;

	/**
	 * @var bool
	 *
	 * @since 3.0.4
	 */
	private $guest_allow = false;

	/**
	 * @var Field_Data_Parser[]
	 */
	private $parsers = array();

	public function apply( $fields ) {
		$this->set_values( $fields );
		$this->clear_all();
	}

	public function set_values( $fields ) {
		foreach ( $fields as $field ) {
			try {
				Parser_Manager::instance()->validate_field( $field );

				$this->get_value_from_field( $field );

			} catch ( Parse_Exception $exception ) {
				switch ( $exception->getMessage() ) {

					case Parser_Manager::IS_CONDITIONAL:
						$this->set_inside_conditional( true );

						$this->set_values( $exception->get_inner() );
						break;

					case Parser_Manager::NOT_FIELD_HAS_INNER:
						$this->set_values( $exception->get_inner() );
						break;
				}
			}
		}
	}

	public function get_value_from_field( array $field ) {
		$name = $field['attrs']['name'] ?? 'field_name';

		if ( ! array_key_exists( $name, $this->get_files() ) &&
			! array_key_exists( $name, $this->get_request() )
		) {
			return;
		}

		// reset
		$this->name        = $name;
		$this->guest_allow = false;

		$parser = $this->get_parser( $field );

		$this->parsers[ $this->name ] = $parser;

		try {
			$parser->set_inner_blocks( $field['innerBlocks'] ?? array() );
			$parser->update_request( $this );
			$parser->set_inner_blocks( array() );

		} catch ( Exclude_Field_Exception $exception ) {
			unset( $this->parsers[ $this->name ] );
		} catch ( Parse_Exception $exception ) {
			unset( $this->parsers[ $this->name ] );

			foreach ( $exception->get_inner() as $key => $value ) {
				$this->update_request( $value, $key );
			}
		}
	}

	/**
	 * @return mixed
	 */
	public function get_file( $name = '' ) {
		if ( '' === $name ) {
			$name = $this->name;
		}

		if ( is_array( $name ) && ! count( $name ) ) {
			return $this->resolve_files();
		}

		$path = Array_Tools::path( $name );

		try {
			list( $parser, $path ) = $this->resolve_parser( $path );
		} catch ( Silence_Exception $exception ) {
			return $this->raw_files[ $path[0] ] ?? false;
		}

		return $parser->get_file( $path );
	}

	public function get_value( $name = '' ) {
		if ( '' === $name ) {
			$name = $this->name;
		}

		if ( is_array( $name ) && ! count( $name ) ) {
			return $this->resolve_request();
		}

		$path = Array_Tools::path( $name );

		try {
			list( $parser, $path ) = $this->resolve_parser( $path );
		} catch ( Plain_Value_Exception $exception ) {
			return $this->parsers[ $path[0] ];
		} catch ( Repository_Exception $exception ) {
			return $this->raw_request[ $path[0] ] ?? '';
		}

		return $parser->get_value( $path );
	}

	/**
	 * @param $value
	 * @param string|array $name 'field_name'|'repeater_name'|'repeater_name.0.field_name'|['repeater_name', 0, 'field_name']
	 */
	public function update_request( $value, $name = '' ) {
		if ( '' === $name ) {
			$name = $this->name;
		}

		if ( is_array( $value ) && is_array( $name ) && ! count( $name ) ) {
			foreach ( $value as $key => $item ) {
				$this->update_request( $item, $key );
			}

			return;
		}

		$path = Array_Tools::path( $name );

		try {
			list( $parser, $path ) = $this->resolve_parser( $path );
		} catch ( Silence_Exception $exception ) {
			$this->parsers[ $path[0] ] = $value;

			return;
		}

		$parser->set_value( $value, $path );
	}

	public function update_file( $value, $name = '' ) {
		if ( '' === $name ) {
			$name = $this->name;
		}

		try {
			list( $parser, $path ) = $this->resolve_parser( $name );
		} catch ( Silence_Exception $exception ) {
			return;
		}

		$parser->set_file( $value, $path );
	}

	public function set_request( array $request ): Parser_Context {
		$this->raw_request = $request;

		return $this;
	}

	public function set_files( $files ): Parser_Context {
		$this->raw_files = $files;

		return $this;
	}

	/**
	 * @param string $name
	 *
	 * @return array|mixed|string
	 */
	public function get_request( string $name = '' ) {
		return $name ? ( $this->raw_request[ $name ] ?? '' ) : $this->raw_request;
	}

	/**
	 * @param string $name
	 *
	 * @return array|bool
	 */
	public function get_files( string $name = '' ) {
		return $name ? ( $this->raw_files[ $name ] ?? false ) : $this->raw_files;
	}

	/**
	 * @return string
	 */
	public function get_name(): string {
		return $this->name;
	}

	public function is_inside_conditional(): bool {
		return $this->inside_conditional;
	}

	public function set_inside_conditional( bool $inside_conditional ): Parser_Context {
		$this->inside_conditional = $inside_conditional;

		return $this;
	}

	/**
	 * @param string|array $name
	 *
	 * @see \JFB_Modules\Form_Record\Controller::generate_request
	 */
	public function exclude( $name = '' ) {
		$this->update_setting( 'field_type', 'password', $name );
	}

	/**
	 * @param string $attr_name
	 * @param $value
	 * @param string|array $name 'field_name'|'repeater_name.field_name'|['repeater_name', 'field_name']
	 *
	 * @since 3.0.4
	 */
	public function update_setting( string $attr_name, $value, $name = '' ) {
		if ( '' === $name ) {
			$name = $this->name;
		}

		try {
			list( $parser, $path ) = $this->resolve_parser( $name );
		} catch ( Silence_Exception $exception ) {
			return;
		}

		$parser->set_setting( $attr_name, $value, $path );
	}

	/**
	 * @since 3.0.4
	 */
	public function allow_for_guest() {
		$this->guest_allow = true;
	}

	/**
	 * @since 3.0.4
	 */
	public function is_allowed_for_guest(): bool {
		return $this->guest_allow;
	}

	/**
	 * @param array $fields_settings
	 * @param string|array $name
	 *
	 * @since 3.1.0
	 */
	public function set_field_settings( array $fields_settings, $name = '' ) {
		if ( '' === $name ) {
			$name = $this->name;
		}

		$path = Array_Tools::path( $name );

		try {
			list( $parser, $path ) = $this->resolve_parser( $path );
		} catch ( Silence_Exception $exception ) {
			return;
		}

		$parser->set_settings( $fields_settings, $path );
	}

	/**
	 * @param string $field_type
	 * @param string|array $name
	 *
	 * @since 3.1.0
	 */
	public function set_field_type( string $field_type, $name = '' ) {
		if ( '' === $name ) {
			$name = $this->name;
		}

		$path = Array_Tools::path( $name );

		try {
			list( $parser, $path ) = $this->resolve_parser( $path );
		} catch ( Silence_Exception $exception ) {
			if ( 1 === count( $path ) ) {
				$this->insert_parser( $path[0], $field_type );
			}

			return;
		}

		$parser->set_type( $field_type, $path );
	}

	/**
	 * @param string|array $name
	 *
	 * @return string
	 * @since 3.1.0
	 */
	public function get_field_type( $name = '' ): string {
		if ( '' === $name ) {
			$name = $this->name;
		}

		try {
			list( $parser, $path ) = $this->resolve_parser( $name );
		} catch ( Silence_Exception $exception ) {
			return '';
		}

		return $parser->get_type( $path );
	}

	/**
	 * @param string|array $name
	 *
	 * @return string
	 * @since 3.0.4
	 */
	public function get_class_name( $name = '' ): string {
		return (string) $this->get_setting( 'class_name', $name );
	}

	/**
	 * @param string $setting
	 * @param string|array $name
	 *
	 * @return false|mixed
	 */
	public function get_setting( string $setting, $name = '' ) {
		return $this->get_settings( $name )[ $setting ] ?? false;
	}

	/**
	 * @param string|array $name
	 *
	 * @return array
	 */
	public function get_settings( $name = '' ): array {
		if ( '' === $name ) {
			$name = $this->name;
		}

		try {
			list( $parser, $path ) = $this->resolve_parser( $name );
		} catch ( Silence_Exception $exception ) {
			return array();
		}

		return $parser->get_settings( $path );
	}

	public function iterate_fields_types(): \Generator {
		foreach ( $this->parsers as $name => $parser ) {
			if ( $parser instanceof Field_Data_Parser ) {
				yield $name => $parser->get_type();
			}
		}
	}

	public function iterate_fields_settings(): \Generator {
		foreach ( $this->parsers as $name => $parser ) {
			if ( $parser instanceof Field_Data_Parser ) {
				yield $name => $parser->get_settings();
			}
		}
	}

	public function clear_all() {
		$this->raw_request = array();
		$this->raw_files   = array();
	}

	/**
	 * @param string|array $name
	 *
	 * @return bool
	 */
	public function has_field( $name ): bool {
		try {
			list( $parser, $path ) = $this->resolve_parser( $name );
		} catch ( Repository_Exception $exception ) {
			return false;
		} catch ( Plain_Value_Exception $exception ) {
			return true;
		}

		return $parser->has_field( $path );
	}

	public function remove_field( $name ) {
		$real_path = Array_Tools::path( $name );

		try {
			list( $parser, $path ) = $this->resolve_parser( $name );
		} catch ( Repository_Exception $exception ) {
			return;
		} catch ( Plain_Value_Exception $exception ) {
			unset( $this->parsers[ $real_path[0] ] );

			return;
		}

		if ( ! count( $path ) ) {
			unset( $this->parsers[ $real_path[0] ] );

			return;
		}

		$parser->remove_field( $path );
	}


	public function resolve_request(): array {
		return iterator_to_array( $this->generate_request() );
	}

	public function generate_request(): \Generator {
		foreach ( $this->parsers as $name => $parser ) {
			if ( ! ( $parser instanceof Field_Data_Parser ) ) {
				yield $name => $parser;

				continue;
			}
			yield from $parser->iterate_value();
		}
	}

	public function resolve_files(): array {
		return iterator_to_array( $this->generate_files() );
	}

	public function generate_files(): \Generator {
		foreach ( $this->parsers as $name => $parser ) {
			if ( ! ( $parser instanceof Field_Data_Parser ) ) {
				continue;
			}
			yield from $parser->iterate_file();
		}
	}

	/**
	 * @param string|array $name
	 */
	public function get_self( $name ) {
		if ( empty( $name ) ) {
			return $this;
		}

		try {
			list( $parser, $path ) = $this->resolve_parser( $name );
		} catch ( Silence_Exception $exception ) {
			return false;
		}

		return $parser->get_context( $path );
	}

	/**
	 * @param $path
	 *
	 * @return array<Field_Data_Parser>|array<string[]>
	 * @throws Plain_Value_Exception
	 * @throws Repository_Exception
	 */
	public function resolve_parser( $path ): array {
		if ( ! is_array( $path ) ) {
			$path = Array_Tools::path( $path );
		}

		if ( ! array_key_exists( $path[0], $this->parsers ) ) {
			throw new Repository_Exception( 'undefined_parser', $path );
		}
		if ( ! ( $this->parsers[ $path[0] ] instanceof Field_Data_Parser ) ) {
			throw new Plain_Value_Exception();
		}

		$name = array_shift( $path );

		return array( $this->parsers[ $name ], $path );
	}

	protected function insert_parser( string $name, string $field_type ): Field_Data_Parser {
		if ( array_key_exists( $name, $this->parsers ) &&
			$this->parsers[ $name ] instanceof Field_Data_Parser
		) {
			return $this->parsers[ $name ];
		}

		$parser = $this->get_parser( array( 'blockName' => $field_type ) );
		$parser->set_name( $name );

		$value = '';
		if ( array_key_exists( $name, $this->parsers ) ) {
			$value = $this->parsers[ $name ];
		}
		$this->parsers[ $name ] = $parser;
		$parser->set_value( $value );

		return $parser;
	}

	/**
	 * @param array $block
	 *
	 * @return Field_Data_Parser
	 */
	protected function get_parser( array $block ): Field_Data_Parser {
		$type   = Block_Helper::delete_namespace( $block['blockName'] );
		$parser = Parser_Manager::instance()->get_parser( $type );
		$name   = $this->name ?: $block['attrs']['name'] ?? '';

		$parser->set_type( $type );
		$parser->set_name( $name );
		$parser->set_settings( $block['attrs'] ?? array() );

		return $parser;
	}

	public function has_request(): bool {
		return ! empty( $this->parsers );
	}

	public function get_unique_name( string $computed_field ): string {
		if (
			! $this->has_field( $computed_field ) ||
			! jet_fb_action_handler()->in_loop()
		) {
			return $computed_field;
		}

		$computed_field .= '_' . jet_fb_action_handler()->get_current_action()->_id;

		return $computed_field;
	}

	/**
	 * @param $name
	 *
	 * @return array|null
	 * @see \Jet_Form_Builder\Actions\Legacy_Request_Data
	 */
	public function __get( $name ) {
		switch ( $name ) {
			case '__danger_parsers':
				return $this->parsers;
		}

		return null;
	}

}
