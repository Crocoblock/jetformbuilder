<?php


namespace JFB_Modules\Block_Parsers;

use Jet_Form_Builder\Classes\Arrayable\Array_Tools;
use Jet_Form_Builder\Classes\Resources\Media_Block_Value;
use Jet_Form_Builder\Classes\Resources\Uploaded_Collection;
use Jet_Form_Builder\Classes\Resources\Uploaded_File;
use Jet_Form_Builder\Classes\Resources\Uploaded_File_Path;
use Jet_Form_Builder\Exceptions\Parse_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use Jet_Form_Builder\Request\Exceptions\Plain_Value_Exception;
use Jet_Form_Builder\Request\Parser_Context;
use JFB_Components\Repository\Repository_Item_Instance_Trait;
use Jet_Form_Builder\Classes\Resources\File;
use Jet_Form_Builder\Classes\Resources\File_Collection;
use Jet_Form_Builder\Request\Exceptions\Exclude_Field_Exception;
use Jet_Form_Builder\Request\Exceptions\Sanitize_Value_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @property bool is_required
 *
 * Class Field_Data_Parser
 * @package Jet_Form_Builder\Request
 */
abstract class Field_Data_Parser implements Repository_Item_Instance_Trait {

	/**
	 * @var string
	 */
	protected $name;
	/**
	 * @var string
	 */
	protected $type;
	/**
	 * @var array
	 */
	protected $settings = array();

	protected $value;

	/** @var File|File_Collection|bool */
	protected $file;

	/** @var Parser_Context */
	protected $context;

	/** @var Parser_Context[] */
	public $inner_contexts;

	/** @var Parser_Context */
	protected $inner_template;

	protected $with_inner = true;

	abstract public function type();

	/**
	 * @return string
	 */
	public function rep_item_id() {
		return $this->type();
	}

	public function get_response() {
		return $this->value;
	}

	/**
	 * @throws Exclude_Field_Exception|Parse_Exception
	 */
	final public function update_request() {
		$this->is_field_visible();
		$this->set_request();

		try {
			$this->check_response();
		} catch ( Sanitize_Value_Exception $exception ) {
			// silence catch
		}
	}

	/**
	 * @throws Exclude_Field_Exception|Parse_Exception
	 */
	final public function set_request() {
		// reset
		$this->inner_contexts = array();

		$this->set_value( $this->get_context()->get_request( $this->name ) );
		$this->set_file( $this->get_context()->get_files( $this->name ) );

		try {
			$this->value = $this->get_response();
		} catch ( Sanitize_Value_Exception $exception ) {
			// silence catch
		}
	}

	public function parse_value( $value ) {
		return $value;
	}

	/**
	 * @throws Sanitize_Value_Exception
	 */
	protected function check_response() {
		if (
			$this->context->is_inside_conditional() ||
			( empty( $this->value ) && ! $this->is_required ) ||
			! empty( $this->value )
		) {
			return;
		}

		throw new Sanitize_Value_Exception( 'empty_field', $this->name, $this->settings );
	}

	/**
	 * @return bool
	 *
	 * @deprecated since 3.1.0
	 * Use `check_response` instead
	 * @see \JFB_Modules\Block_Parsers\Field_Data_Parser::check_response
	 */
	protected function has_error(): bool {
		return false;
	}

	/**
	 * @throws Exclude_Field_Exception
	 */
	protected function is_field_visible() {
		$visibility = $this->settings['visibility'] ?? true;

		// If is visible for logged in users and user is logged in - show field.
		if ( 'logged_id' === $visibility && ! is_user_logged_in() ) {
			throw new Exclude_Field_Exception();
		}

		// If is visible for not logged in users and user is not logged in - show field.
		if ( 'not_logged_in' === $visibility && is_user_logged_in() ) {
			throw new Exclude_Field_Exception();
		}
	}

	public function set_context( Parser_Context $context ): Field_Data_Parser {
		$this->context = $context;

		return $this;
	}

	public function set_value( $value ) {
		$this->value = $this->parse_value( $value );
	}

	/**
	 * @param bool|Media_Block_Value|Uploaded_File_Path $file
	 */
	public function set_file( $file ) {
		$this->file = $file;
	}

	public function set_type( string $type ) {
		$this->type = $type;
	}

	/**
	 * @param string $name
	 */
	public function set_name( string $name ) {
		$this->name = $name;
	}

	/**
	 * @param array $settings
	 *
	 * @since 3.1.0
	 */
	public function set_settings( array $settings ) {
		$this->settings = $settings;
	}

	public function is_secure(): bool {
		return 'password' === $this->get_setting( 'field_type' );
	}

	public function make_secure() {
		$this->set_setting( 'field_type', 'password' );
	}

	/**
	 * @param string $attr
	 * @param $value
	 *
	 * @since 3.1.0
	 */
	public function set_setting( string $attr, $value ) {
		$this->settings[ $attr ] = $value;
	}

	/**
	 * @return Parser_Context
	 * @since 3.0.4
	 */
	public function get_context(): Parser_Context {
		return $this->context;
	}

	public function iterate_file(): \Generator {
		yield $this->name => $this->get_file();
	}

	/**
	 * @return bool|File|File_Collection|array
	 */
	public function get_file() {
		if ( empty( $this->inner_contexts ) ) {
			return $this->file;
		}

		return iterator_to_array( $this->iterate_inner_files() );
	}

	public function iterate_self( bool $break_on_first = true ): \Generator {
		yield $this->get_scoped_name() => $this;

		if ( empty( $this->inner_contexts ) && empty( $this->get_inner_template() ) ) {
			return;
		}

		if ( empty( $this->inner_contexts ) ) {
			yield from $this->get_inner_template()->iterate_parsers_list( $break_on_first );

			return;
		}

		foreach ( $this->inner_contexts as $context ) {
			yield from $context->iterate_parsers_list( $break_on_first );

			if ( $break_on_first ) {
				break;
			}
		}
	}

	/**
	 * @return string
	 */
	public function get_type(): string {
		return $this->type;
	}

	/**
	 * @return string
	 */
	public function get_name(): string {
		return $this->name;
	}

	public function iterate_value(): \Generator {
		yield $this->name => $this->get_value();
	}

	public function iterate_row_value(): \Generator {
		if ( ! $this->get_inner_template() ) {
			yield $this->get_scoped_name() => $this->get_value();

			return;
		}

		if ( empty( $this->inner_contexts ) ) {
			return;
		}

		$inner = current( $this->inner_contexts );

		if ( ! $inner ) {
			$inner = end( $this->inner_contexts );

			// current() should always return false, if it has reached end once
			next( $this->inner_contexts );
		}

		yield from $inner->iterate_values_row();
	}

	public function is_inner_over(): bool {
		return empty( $this->inner_contexts ) || key( $this->inner_contexts ) === null;
	}

	public function next_inner() {
		if ( empty( $this->inner_contexts ) ) {
			return;
		}
		next( $this->inner_contexts );
	}

	/**
	 * @return mixed
	 */
	public function get_value() {
		if ( empty( $this->inner_contexts ) || ! $this->with_inner ) {
			return $this->value;
		}

		return iterator_to_array( $this->iterate_inner_values() );
	}

	public function get_setting( string $attr_name ) {
		return $this->settings[ $attr_name ] ?? false;
	}

	/**
	 * @return array
	 */
	public function get_settings(): array {
		return $this->settings;
	}

	public function __get( $name ) {
		switch ( $name ) {
			case 'is_required':
				return $this->settings['required'] ?? false;
			default:
				return null;
		}
	}

	/**
	 * @param string|int $index
	 */
	public function remove_context( $index ) {
		if ( ! array_key_exists( $index, $this->inner_contexts ) ||
			 ! ( $this->inner_contexts[ $index ] instanceof Parser_Context )
		) {
			return;
		}

		unset( $this->inner_contexts[ $index ] );
	}

	public function add_inner( Parser_Context $context, $key = '' ) {
		if ( '' === $key ) {
			$this->inner_contexts[] = $context;
		} else {
			$this->inner_contexts[ $key ] = $context;
		}

		return Array_Tools::last_key( $this->inner_contexts );
	}

	/**
	 * @return Parser_Context|null
	 */
	public function get_inner_template() {
		return $this->inner_template;
	}

	/**
	 * @param Parser_Context $inner_template
	 */
	public function set_inner_template( Parser_Context $inner_template ) {
		$this->inner_template = $inner_template;
	}

	protected function iterate_inner_values(): \Generator {
		foreach ( $this->inner_contexts as $index => $parser_context ) {
			yield $index => $parser_context->get_value( array() );
		}
	}

	protected function iterate_inner_files(): \Generator {
		foreach ( $this->inner_contexts as $index => $parser_context ) {
			yield $index => $parser_context->get_file( array() );
		}
	}

	/**
	 * @param array $inner_blocks
	 */
	public function set_inner_contexts( array $inner_blocks ) {
		if ( empty( $inner_blocks ) ) {
			return;
		}

		$context = new Parser_Context();
		$context->set_parent( $this );
		$context->set_parsers( $inner_blocks );

		if ( ! count( iterator_to_array( $context->iterate_parsers() ) ) ) {
			return;
		}

		$this->set_inner_template( $context );
	}

	public function get_scoped_name(): string {
		return trim( $this->get_context()->get_parent_name() . '.' . $this->get_name(), '.' );
	}

	public function get_scoped_label(): string {
		return trim( $this->get_context()->get_parent_label() . ':' . $this->get_label(), ':' );
	}

	public function get_label(): string {
		$label = $this->settings['label'] ?? '';

		return empty( $label ) ? $this->get_name() : $label;
	}

	/**
	 * @param bool $with_inner
	 */
	public function set_with_inner( bool $with_inner ) {
		$this->with_inner = $with_inner;
	}

	public function iterate_inner(): \Generator {
		if ( empty( $this->inner_contexts ) ) {
			return;
		}

		foreach ( $this->inner_contexts as $context ) {
			yield $context;
		}
	}

	/**
	 * @param array $path
	 *
	 * @return Field_Data_Parser|Parser_Context
	 * @throws Plain_Value_Exception|Repository_Exception
	 */
	public function resolve( array $path ) {
		if ( empty( $this->inner_contexts ) ) {
			throw new Repository_Exception();
		}

		$index = array_shift( $path );

		if ( ! array_key_exists( $index, $this->inner_contexts ) ||
			 ! ( $this->inner_contexts[ $index ] instanceof Parser_Context )
		) {
			throw new Repository_Exception();
		}

		return empty( $path )
			? $this->inner_contexts[ $index ]
			: $this->inner_contexts[ $index ]->resolve( $path );
	}

	public function __clone() {
		if ( ! is_array( $this->inner_contexts ) ) {
			return;
		}
		foreach ( $this->inner_contexts as $key => $context ) {
			$this->inner_contexts[ $key ] = clone $context;
		}
	}

	public function __debugInfo(): array {
		$current = clone $this;

		unset( $current->context );

		return get_object_vars( $current );
	}

}
