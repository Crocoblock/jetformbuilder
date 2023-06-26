<?php


namespace JFB_Modules\Block_Parsers;

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

	/** @var Field_Data_Parser */
	protected $parent_field;

	/** @var string|numeric */
	protected $index_in_parent = '';
	private $hide_index        = false;

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
	protected $parsers = array();

	public function apply( $fields = null ) {
		if ( is_array( $fields ) ) {
			$this->set_values( $fields );
			$this->clear_all();

			return;
		}

		/** @var Field_Data_Parser $parser */
		foreach ( $this->iterate_parsers() as $parser ) {
			$this->parser_update_request( $parser );
		}
	}

	public function set_values( $fields ) {
		foreach ( $this->generate_blocks( $fields ) as $block ) {
			$name = $block['attrs']['name'] ?? 'field_name';

			if ( ! array_key_exists( $name, $this->get_files() ) &&
				! array_key_exists( $name, $this->get_request() )
			) {
				continue;
			}

			$parser = $this->set_parser( $block );

			if ( ! $parser ) {
				continue;
			}

			$this->parser_update_request( $parser );
		}
	}

	protected function parser_update_request( Field_Data_Parser $parser ) {
		try {
			$parser->update_request();

		} catch ( Exclude_Field_Exception $exception ) {
			unset( $this->parsers[ $parser->get_name() ] );
		} catch ( Parse_Exception $exception ) {
			unset( $this->parsers[ $parser->get_name() ] );

			foreach ( $exception->get_inner() as $key => $value ) {
				$this->update_request( $value, $key );
			}
		}
	}

	public function set_parsers( $fields ) {
		foreach ( $this->generate_blocks( $fields ) as $block ) {
			$this->set_parser( $block );
		}
	}

	/**
	 * Should used in cases, when no need to check value. Just set
	 */
	public function apply_request() {
		/** @var Field_Data_Parser $parser */
		foreach ( $this->iterate_parsers() as $parser ) {
			try {
				$parser->set_request();

			} catch ( Exclude_Field_Exception $exception ) {
				unset( $this->parsers[ $parser->get_name() ] );
			} catch ( Parse_Exception $exception ) {
				unset( $this->parsers[ $parser->get_name() ] );

				foreach ( $exception->get_inner() as $key => $value ) {
					$this->update_request( $value, $key );
				}
			}
		}
	}

	protected function generate_blocks( $fields ): \Generator {
		foreach ( $fields as $field ) {
			try {
				$this->validate_field( $field );

				yield $field;

			} catch ( Parse_Exception $exception ) {
				switch ( $exception->getMessage() ) {

					case Module::IS_CONDITIONAL:
						$this->set_inside_conditional( true );

						yield from $this->generate_blocks( $exception->get_inner() );
						break;

					case Module::NOT_FIELD_HAS_INNER:
						yield from $this->generate_blocks( $exception->get_inner() );
						break;
				}
			}
		}
	}

	/**
	 * @param array $field
	 *
	 * @throws Parse_Exception
	 */
	public function validate_field( array $field ) {
		if ( empty( $field['blockName'] ) ) {
			throw new Parse_Exception( Module::EMPTY_BLOCK_ERROR );
		}

		if ( empty( $field['innerBlocks'] ) ) {
			return;
		}

		if ( strpos( $field['blockName'], 'conditional-block' ) ) {
			throw new Parse_Exception( Module::IS_CONDITIONAL, $field['innerBlocks'] );
		}
		if ( ! Module::instance()->isset_parser( $field['blockName'] ) ) {
			throw new Parse_Exception( Module::NOT_FIELD_HAS_INNER, $field['innerBlocks'] );
		}
	}

	/**
	 * @param array $field
	 *
	 * @return false|Field_Data_Parser
	 */
	protected function set_parser( array $field ) {
		if ( ! isset( $field['attrs']['name'] ) ) {
			return false;
		}
		// reset
		$this->name        = $field['attrs']['name'];
		$this->guest_allow = false;

		$parser = $this->get_parser( $field );

		$this->parsers[ $this->name ] = $parser;

		$parser->set_inner_contexts( $field['innerBlocks'] ?? array() );
		$parser->set_context( $this );

		return $parser;
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
		/**
		 * @var string $name
		 * @var Field_Data_Parser $parser
		 */
		foreach ( $this->iterate_parsers() as $name => $parser ) {
			yield $name => $parser->get_type();
		}
	}

	public function iterate_fields_settings(): \Generator {
		/**
		 * @var string $name
		 * @var Field_Data_Parser $parser
		 */
		foreach ( $this->iterate_parsers() as $name => $parser ) {
			yield $name => $parser->get_settings();
		}
	}

	/**
	 * @return \Generator<Field_Data_Parser>
	 */
	public function iterate_parsers(): \Generator {
		foreach ( $this->parsers as $name => $parser ) {
			if ( $parser instanceof Field_Data_Parser ) {
				yield $name => $parser;
			}
		}
	}

	public function iterate_settings_list(): \Generator {
		/**
		 * @var string $name
		 * @var Field_Data_Parser $parser
		 */
		foreach ( $this->iterate_parsers_list() as $name => $parser ) {
			yield $name => $parser->get_settings();
		}
	}

	public function iterate_types_list(): \Generator {
		/**
		 * @var string $name
		 * @var Field_Data_Parser $parser
		 */
		foreach ( $this->iterate_parsers_list() as $name => $parser ) {
			yield $name => $parser->get_type();
		}
	}

	public function iterate_values_table(): \Generator {
		do {
			yield $this->iterate_values_row();

			/** @var Field_Data_Parser $parser */
			foreach ( $this->iterate_parsers_list( false ) as $parser ) {
				$parser->next_inner();
			}
		} while ( ! $this->is_inner_over_parsers() );
	}

	public function iterate_values_row(): \Generator {
		/**
		 * @var string $name
		 * @var Field_Data_Parser $parser
		 */
		foreach ( $this->iterate_parsers() as $parser ) {
			yield from $parser->iterate_row_value();
		}
	}

	public function is_inner_over_parsers(): bool {
		/** @var Field_Data_Parser $parser */
		foreach ( $this->iterate_parsers_list( false ) as $parser ) {
			if ( ! $parser->is_inner_over() ) {
				return false;
			}
		}

		return true;
	}

	/**
	 * @param bool $break_on_first
	 *
	 * @return \Generator<Field_Data_Parser>
	 */
	public function iterate_parsers_list( bool $break_on_first = true ): \Generator {
		/** @var Field_Data_Parser $parser */
		foreach ( $this->iterate_parsers() as $parser ) {
			yield from $parser->iterate_self( $break_on_first );
		}
	}

	/**
	 * @param string|array $name
	 *
	 * @return \Generator
	 */
	public function iterate_inner( $name ): \Generator {
		if ( ! $name ) {
			return;
		}

		try {
			list( $parser, $path ) = $this->resolve_parser( $name );
		} catch ( Silence_Exception $exception ) {
			return;
		}

		yield from $parser->iterate_inner( $path );
	}

	public function clear_all() {
		foreach ( $this->parsers as $name => $parser ) {
			unset( $this->raw_request[ $name ] );
			unset( $this->raw_files[ $name ] );
		}
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

	public function resolve_request( bool $with_inner = true ): array {
		return iterator_to_array( $this->generate_request( $with_inner ) );
	}

	public function generate_request( bool $with_inner = true ): \Generator {
		foreach ( $this->parsers as $name => $parser ) {
			if ( ! ( $parser instanceof Field_Data_Parser ) ) {
				yield $name => $parser;

				continue;
			}
			$parser->set_with_inner( $with_inner );
			yield from $parser->iterate_value();
			$parser->set_with_inner( true );
		}
	}

	public function resolve_files(): array {
		return iterator_to_array( $this->generate_files() );
	}

	public function generate_files(): \Generator {
		/** @var Field_Data_Parser $parser */
		foreach ( $this->iterate_parsers() as $parser ) {
			yield from $parser->iterate_file();
		}
	}

	/**
	 * @param string|array $name
	 */
	public function get_self( $name = '' ) {
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
		$parser = Module::instance()->get_parser( $type );
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

	public function set_parent( Field_Data_Parser $data_parser ) {
		$this->parent_field = $data_parser;
	}

	/**
	 * @param float|int|string $index_in_parent
	 */
	public function set_index_in_parent( $index_in_parent ) {
		$this->index_in_parent = $index_in_parent;
	}

	/**
	 * @param bool $hide_index
	 */
	public function set_hide_index( bool $hide_index ) {
		$this->hide_index = $hide_index;
	}

	public function get_parent_name(): string {
		if ( ! $this->parent_field ) {
			return '';
		}

		if ( $this->hide_index ) {
			return $this->parent_field->get_scoped_name();
		}

		return trim(
			$this->parent_field->get_scoped_name() . '.' . $this->index_in_parent,
			'.'
		);
	}

	public function get_parent_label(): string {
		return $this->parent_field ? $this->parent_field->get_scoped_label() : '';
	}

	public function __clone() {
		/** @var Field_Data_Parser $parser */
		foreach ( $this->iterate_parsers() as $name => $parser ) {
			$this->parsers[ $name ] = clone $parser;
			$this->parsers[ $name ]->set_context( $this );
		}
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

	public function __debugInfo(): array {
		$current = clone $this;

		unset( $current->parent_field );

		return get_object_vars( $current );
	}

}
