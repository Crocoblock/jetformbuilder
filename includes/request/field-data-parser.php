<?php


namespace Jet_Form_Builder\Request;

use Jet_Form_Builder\Exceptions\Parse_Exception;
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
	protected $settings;

	protected $value;

	/** @var File|File_Collection|bool */
	protected $file;

	/** @var Parser_Context */
	protected $context;

	/** @var Parser_Context[] */
	protected $inner_contexts;

	/** @var array */
	protected $inner_blocks;

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
	 * @param Parser_Context $context
	 *
	 * @throws Exclude_Field_Exception|Parse_Exception
	 */
	final public function update_request( Parser_Context $context ) {
		$this->set_context( $context );

		$this->is_field_visible();
		$this->set_value( $context->get_request( $this->name ) );
		$this->set_file( $context->get_files( $this->name ) );

		$this->update_value();
	}

	final public function update_value() {
		try {
			$this->value = $this->get_response();

			$this->check_response();
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
	 * @see \Jet_Form_Builder\Request\Field_Data_Parser::check_response
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

	protected function set_context( Parser_Context $context ): Field_Data_Parser {
		$this->context = $context;

		return $this;
	}

	/**
	 * @param $value
	 * @param array $inner_names
	 *
	 * @return $this
	 */
	public function set_value( $value, array $inner_names = array() ): Field_Data_Parser {
		if ( empty( $inner_names ) ) {
			$this->value = $this->parse_value( $value );

			return $this;
		}

		$index = array_shift( $inner_names );

		if ( ! array_key_exists( $index, $this->inner_contexts ) ||
			! ( $this->inner_contexts[ $index ] instanceof Parser_Context )
		) {
			return $this;
		}

		$this->inner_contexts[ $index ]->update_request( $value, $inner_names );

		return $this;
	}

	/**
	 * @param bool|File|File_Collection $file
	 * @param array $inner_names
	 *
	 * @return Field_Data_Parser
	 */
	public function set_file( $file, array $inner_names = array() ): Field_Data_Parser {
		if ( empty( $inner_names ) ) {
			$this->file = $file;

			return $this;
		}

		$index = array_shift( $inner_names );

		if ( ! array_key_exists( $index, $this->inner_contexts ) ||
			! ( $this->inner_contexts[ $index ] instanceof Parser_Context )
		) {
			return $this;
		}

		$this->inner_contexts[ $index ]->update_file( $file, $inner_names );

		return $this;
	}

	public function set_type( string $type, array $inner_names = array() ) {
		if ( empty( $inner_names ) ) {
			$this->type = $type;

			return;
		}

		$index = array_shift( $inner_names );

		if ( ! array_key_exists( $index, $this->inner_contexts ) ||
			! ( $this->inner_contexts[ $index ] instanceof Parser_Context )
		) {
			return;
		}

		$this->inner_contexts[ $index ]->set_field_type( $type, $inner_names );
	}

	/**
	 * @param string $name
	 */
	public function set_name( string $name ) {
		$this->name = $name;
	}

	/**
	 * @since 3.1.0
	 *
	 * @param array $settings
	 * @param array $inner_names
	 */
	public function set_settings( array $settings, array $inner_names = array() ) {
		if ( empty( $inner_names ) ) {
			$this->settings = $settings;

			return;
		}

		$index = array_shift( $inner_names );

		if ( ! array_key_exists( $index, $this->inner_contexts ) ||
			! ( $this->inner_contexts[ $index ] instanceof Parser_Context )
		) {
			return;
		}

		$this->inner_contexts[ $index ]->set_field_settings( $settings, $inner_names );
	}

	/**
	 * @since 3.1.0
	 *
	 * @param string $attr
	 * @param $value
	 * @param array $inner_names
	 */
	public function set_setting( string $attr, $value, array $inner_names = array() ) {
		if ( empty( $inner_names ) ) {
			if ( ! is_array( $this->settings ) ) {
				$this->set_settings( array(), $inner_names );
			}
			$this->settings[ $attr ] = $value;

			return;
		}

		$index = array_shift( $inner_names );

		if ( ! array_key_exists( $index, $this->inner_contexts ) ||
			! ( $this->inner_contexts[ $index ] instanceof Parser_Context )
		) {
			return;
		}

		$this->inner_contexts[ $index ]->update_setting( $attr, $value, $inner_names );
	}

	/**
	 * @return Parser_Context|false
	 * @since 3.0.4
	 */
	public function get_context( array $inner_names = array() ) {
		if ( empty( $inner_names ) ) {
			return $this->context;
		}

		$index = array_shift( $inner_names );

		if ( ! array_key_exists( $index, $this->inner_contexts ) ||
			! ( $this->inner_contexts[ $index ] instanceof Parser_Context )
		) {
			return false;
		}

		return $this->inner_contexts[ $index ]->get_self( $inner_names );
	}

	public function iterate_file(): \Generator {
		yield $this->name => $this->get_file();
	}

	/**
	 * @return bool|File|File_Collection|array
	 */
	public function get_file( array $inner_names = array() ) {
		if ( empty( $inner_names ) ) {
			if ( empty( $this->inner_contexts ) ) {
				return $this->file;
			}
			return iterator_to_array( $this->iterate_inner_files() );
		}

		$index = array_shift( $inner_names );

		if ( ! array_key_exists( $index, $this->inner_contexts ) ||
			! ( $this->inner_contexts[ $index ] instanceof Parser_Context )
		) {
			return false;
		}

		return $this->inner_contexts[ $index ]->get_file( $inner_names );
	}

	/**
	 * @param array $inner_names
	 *
	 * @return string
	 */
	public function get_type( array $inner_names = array() ): string {
		if ( empty( $inner_names ) ) {
			return $this->type;
		}

		$index = array_shift( $inner_names );

		if ( ! array_key_exists( $index, $this->inner_contexts ) ||
			! ( $this->inner_contexts[ $index ] instanceof Parser_Context )
		) {
			return false;
		}

		return $this->inner_contexts[ $index ]->get_field_type( $inner_names );
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

	public function get_value( array $inner_names = array() ) {
		if ( empty( $inner_names ) ) {
			if ( empty( $this->inner_contexts ) ) {
				return $this->value;
			}
			return iterator_to_array( $this->iterate_inner_values() );
		}

		$index = array_shift( $inner_names );

		if ( ! array_key_exists( $index, $this->inner_contexts ) ||
			! ( $this->inner_contexts[ $index ] instanceof Parser_Context )
		) {
			return '';
		}

		return $this->inner_contexts[ $index ]->get_value( $inner_names );
	}

	/**
	 * @param string[] $inner_names
	 *
	 * @return array
	 */
	public function get_settings( array $inner_names = array() ): array {
		if ( empty( $inner_names ) ) {
			return $this->settings;
		}

		$index = array_shift( $inner_names );

		if ( ! array_key_exists( $index, $this->inner_contexts ) ||
			! ( $this->inner_contexts[ $index ] instanceof Parser_Context )
		) {
			return array();
		}

		return $this->inner_contexts[ $index ]->get_settings( $inner_names );
	}

	public function __get( $name ) {
		switch ( $name ) {
			case 'is_required':
				return $this->settings['required'] ?? false;
			default:
				return null;
		}
	}

	public function has_field( array $inner_names = array() ): bool {
		if ( empty( $inner_names ) ) {
			return true;
		}
		$index = array_shift( $inner_names );

		if ( ! array_key_exists( $index, $this->inner_contexts ) ||
			! ( $this->inner_contexts[ $index ] instanceof Parser_Context )
		) {
			return false;
		}

		return $this->inner_contexts[ $index ]->has_field( $inner_names );
	}

	public function remove_field( array $inner_names = array() ) {
		if ( empty( $inner_names ) ) {
			return;
		}
		$index = array_shift( $inner_names );

		if ( ! array_key_exists( $index, $this->inner_contexts ) ||
			! ( $this->inner_contexts[ $index ] instanceof Parser_Context )
		) {
			return;
		}

		if ( empty( $inner_names ) ) {
			unset( $this->inner_contexts[ $index ] );

			return;
		}

		$this->inner_contexts[ $index ]->remove_field( $inner_names );
	}

	public function add_inner( Parser_Context $context, $key = '' ) {
		if ( '' === $key ) {
			$this->inner_contexts[] = $context;
		} else {
			$this->inner_contexts[ $key ] = $context;
		}
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
	public function set_inner_blocks( array $inner_blocks ) {
		$this->inner_blocks = $inner_blocks;
	}

	/**
	 * @return array
	 */
	public function get_inner_blocks(): array {
		return $this->inner_blocks;
	}

}
