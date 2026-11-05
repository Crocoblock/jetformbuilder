<?php


namespace JFB_Modules\Actions_V2\Insert_Post\Properties;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Actions\Methods\Object_Dynamic_Property;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Post_Terms_Property extends Base_Object_Property implements Object_Dynamic_Property {

	/**
	 * Choice fields whose values are picked from a list the form author set up.
	 */
	const CHOICE_FIELD_TYPES = array( 'checkbox-field', 'radio-field', 'select-field' );

	protected $taxonomies = array();

	/**
	 * Taxonomies that received a non-empty submitted value. When every value
	 * of such a taxonomy is skipped, its terms are left untouched instead of
	 * being cleared.
	 *
	 * @var array
	 */
	protected $submitted = array();

	/**
	 * @var array Field name => offered options, see get_offered_term_options().
	 */
	private $offered_options = array();

	/**
	 * @var bool|null See overrides_sanitize_term().
	 */
	private $sanitize_term_overridden = null;

	public function get_id(): string {
		return 'post_terms';
	}

	public function get_label(): string {
		return __( 'Post Terms', 'jet-form-builder' );
	}

	public function is_supported( string $key, $value ): bool {
		return false !== strpos( $key, 'jet_tax__' );
	}

	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$tax = str_replace( 'jet_tax__', '', $key );

		if ( ! isset( $this->taxonomies[ $tax ] ) ) {
			$this->taxonomies[ $tax ] = array();
		}

		if ( $this->overrides_sanitize_term() ) {
			// An extension replaced this property and overrides sanitize_term():
			// keep its result for every value, exactly as before.
			foreach ( is_array( $value ) ? $value : array( $value ) as $term ) {
				$this->taxonomies[ $tax ][] = $this->sanitize_term( $term, $tax );
			}

			return;
		}

		$source = $this->get_source_field( $modifier );

		foreach ( is_array( $value ) ? $value : array( $value ) as $term ) {
			if ( ! is_scalar( $term ) || '' === trim( (string) $term ) ) {
				continue;
			}

			$this->submitted[ $tax ] = true;

			$term_id = $this->resolve_term( $term, $tax, $source );

			if ( $term_id ) {
				$this->taxonomies[ $tax ][] = $term_id;
			}
		}
	}

	/**
	 * @param Abstract_Modifier|Post_Modifier $modifier
	 */
	public function do_after( Abstract_Modifier $modifier ) {
		/** @var Base_Post_Action $action */
		$action = $modifier->get_action();

		if ( is_a( $action, Trash_Action::class ) ) {
			return;
		}

		$id = $action->get_inserted();

		if ( ! $id ) {
			return;
		}

		foreach ( $this->taxonomies as $tax => $terms ) {
			if ( ! $terms && ! empty( $this->submitted[ $tax ] ) ) {
				// Every submitted value was skipped: keep the post's terms.
				continue;
			}

			wp_set_post_terms( $id, array_values( array_unique( $terms ) ), $tax );
		}
	}

	/**
	 * Whether a subclass overrides sanitize_term() (the extension point before
	 * the source-field rules). Its override then keeps deciding the terms.
	 *
	 * @return bool
	 */
	protected function overrides_sanitize_term(): bool {
		if ( null === $this->sanitize_term_overridden ) {
			$method = new \ReflectionMethod( $this, 'sanitize_term' );

			$this->sanitize_term_overridden = self::class !== $method->getDeclaringClass()->getName();
		}

		return $this->sanitize_term_overridden;
	}

	/**
	 * Kept for backward compatibility: extensions may call or override it. An
	 * override is used for every submitted value (see do_before()).
	 * Resolves a value without knowing its source field.
	 *
	 * @param mixed  $term
	 * @param string $tax
	 *
	 * @return int|string
	 */
	protected function sanitize_term( $term, $tax ) {
		$term_id = $this->resolve_term( $term, $tax, array() );

		return $term_id ? $term_id : '';
	}

	/**
	 * Settings of the form field the value came from, empty when unknown
	 * (e.g. the property is set directly, without a form field).
	 *
	 * @param Abstract_Modifier $modifier
	 *
	 * @return array{name?: string, type?: string, settings?: array}
	 */
	protected function get_source_field( Abstract_Modifier $modifier ): array {
		$name = method_exists( $modifier, 'get_current_field_name' ) ? $modifier->get_current_field_name() : '';

		if ( '' === $name ) {
			return array();
		}

		try {
			$type     = jet_fb_context()->get_field_type( $name );
			$settings = '' === $type ? array() : jet_fb_context()->get_settings( $name );
		} catch ( \Exception $exception ) {
			return array( 'name' => $name );
		}

		return array(
			'name'     => $name,
			'type'     => $type,
			// Saved block attributes omit values equal to the default (e.g. the
			// "category" taxonomy of a terms field); the form renders with them.
			'settings' => array_merge( $this->get_block_defaults( $type ), $settings ),
		);
	}

	/**
	 * Options the terms field offers in the form, built with the same option
	 * query as on render (taxonomy, "Value from", the
	 * jet-form-builder/render-choice/query-options/terms filter, WPML/Polylang
	 * compatibility): option value => term ID. Null when the options cannot be
	 * rebuilt; the caller then falls back to a plain lookup in the taxonomy.
	 *
	 * @param array $source See get_source_field().
	 *
	 * @return array|null
	 */
	protected function get_offered_term_options( array $source ) {
		$name = $source['name'] ?? '';

		if ( array_key_exists( $name, $this->offered_options ) ) {
			return $this->offered_options[ $name ];
		}

		$this->offered_options[ $name ] = null;

		try {
			/** @var \JFB_Modules\Option_Query\Module $query_module */
			$query_module = jet_form_builder()->module( 'option-query' );
			$query        = $query_module->get_query( 'terms' );
			$block_type   = jet_form_builder()->blocks->get_field_by_name( $source['type'] ?? '' );

			if ( ! $block_type instanceof \JFB_Modules\Option_Field\Interfaces\Support_Option_Query_It ) {
				return null;
			}

			$block_type->set_block_data( $source['settings'] ?? array() );
			$block_type->set_query( $query );

			// Same setup as on render, including WPML/Polylang compatibility.
			do_action( 'jet-form-builder/option-query/set-in-block', $block_type );

			$offered = array();

			foreach ( $block_type->get_query()->fetch() as $option ) {
				if ( isset( $option['value'], $option['object_id'] ) && is_scalar( $option['value'] ) ) {
					$offered[ (string) $option['value'] ] = (int) $option['object_id'];
				}
			}
		} catch ( \Throwable $exception ) {
			return null;
		}

		$this->offered_options[ $name ] = $offered;

		return $offered;
	}

	/**
	 * Default attribute values of a JetFormBuilder field block.
	 *
	 * @param string $type Field type, e.g. 'checkbox-field'.
	 *
	 * @return array
	 */
	protected function get_block_defaults( string $type ): array {
		static $defaults = array();

		if ( '' === $type ) {
			return array();
		}

		if ( ! isset( $defaults[ $type ] ) ) {
			$defaults[ $type ] = array();
			$block             = \WP_Block_Type_Registry::get_instance()->get_registered( 'jet-forms/' . $type );

			foreach ( $block ? (array) $block->attributes : array() as $attr => $schema ) {
				if ( is_array( $schema ) && array_key_exists( 'default', $schema ) ) {
					$defaults[ $type ][ $attr ] = $schema['default'];
				}
			}
		}

		return $defaults[ $type ];
	}

	/**
	 * Existing term for the value, or a new term when the source field allows
	 * it. 0 when the value is skipped.
	 *
	 * @param mixed  $term
	 * @param string $tax
	 * @param array  $source See get_source_field().
	 *
	 * @return int
	 */
	protected function resolve_term( $term, string $tax, array $source ): int {
		$term       = trim( (string) $term );
		$settings   = $source['settings'] ?? array();
		$options_of = $this->get_terms_options_taxonomy( $source );
		// A terms field sends the term ID unless "Value from" says otherwise
		// (see Terms_Query::fetch()).
		$value_from = '' !== $options_of ? (string) ( ( $settings['value_from_key'] ?? '' ) ?: 'term_id' ) : '';

		$custom    = $this->allows_custom_value( $source );
		$is_option = false;

		if ( '' !== $options_of && $options_of !== $tax ) {
			// Options listed from another taxonomy: the value identifies a term
			// of that taxonomy. Resolve the option first and use its name in the
			// destination taxonomy - a destination term that merely shares the
			// slug or meta value is unrelated.
			$offered   = $this->get_offered_term_options( $source );
			$option_id = null === $offered
				? $this->find_term( $term, $options_of, $value_from )
				: (int) ( $offered[ $term ] ?? 0 );
			$option    = $option_id ? get_term( $option_id, $options_of ) : null;
			$is_option = $option && ! is_wp_error( $option );
			$name      = $is_option ? $option->name : '';
			$found     = $is_option ? $this->find_term( $name, $tax, 'name' ) : 0;

			if ( ! $is_option && $custom ) {
				// Not an option: the visitor's own "custom value".
				$name  = $term;
				$found = $this->find_term( $term, $tax );
			}
		} else {
			$name  = $term;
			$found = $this->find_term( $term, $tax, $value_from );

			if ( ! $found && $custom && '' !== $value_from ) {
				// Not an option: the visitor's own "custom value", matched by
				// slug or name like free input.
				$found = $this->find_term( $term, $tax );
			}
		}

		if ( $found ) {
			return $found;
		}

		$create = '' !== $name && $this->can_create_term( $term, $tax, $source, $options_of, $is_option );

		/**
		 * Whether a submitted value that matches no existing term creates a new
		 * term in the taxonomy (Insert/Update Post action, "jet_tax__" fields).
		 * Existing terms are always attached; this decides only about new ones.
		 *
		 * Default: yes for free input (text fields, "custom value" options,
		 * fields of other types or unknown fields); for a choice field with
		 * options listed from the same taxonomy - no (an honest value always
		 * matches an existing term); for manual options - only a value that is
		 * one of the options.
		 *
		 * @param bool   $create Default decision.
		 * @param string $term   Submitted value.
		 * @param string $tax    Taxonomy, e.g. 'category'.
		 * @param string $field  Form field name, '' when unknown.
		 */
		$create = (bool) apply_filters(
			'jet-form-builder/insert-post/create-missing-term',
			$create,
			$term,
			$tax,
			(string) ( $source['name'] ?? '' )
		);

		if ( ! $create ) {
			return 0;
		}

		if ( '' === $name ) {
			// A value that is not an option of a field listing another taxonomy,
			// explicitly allowed by the filter (e.g. options added by a site
			// script): the submitted value is the term name.
			$name  = $term;
			$found = $this->find_term( $term, $tax );

			if ( $found ) {
				return $found;
			}
		}

		$result = wp_insert_term( $name, $tax );

		if ( is_wp_error( $result ) ) {
			$existing = $result->get_error_data( 'term_exists' );

			return is_numeric( $existing ) ? (int) $existing : 0;
		}

		return (int) $result['term_id'];
	}

	/**
	 * @param string $term
	 * @param string $tax
	 * @param string $value_from "Value from" of a terms field ('' when unknown - free input): a WP_Term field such as slug, name, term_id, term_taxonomy_id, or a term meta key.
	 *
	 * @return int
	 */
	protected function find_term( string $term, string $tax, string $value_from = '' ): int {
		if ( '' === $term || ! taxonomy_exists( $tax ) ) {
			return 0;
		}

		if ( '' !== $value_from ) {
			return $this->find_term_by_option_key( $term, $tax, $value_from );
		}

		// Unknown key (free input): an ID, then a name (as before), then a
		// slug - a name always wins over another term's equal slug.
		if ( preg_match( '/^\d+$/', $term ) ) {
			$found = $this->term_id_in( get_term_by( 'id', (int) $term, $tax ), $tax );

			if ( $found ) {
				return $found;
			}
		}

		foreach ( array( 'name', 'slug' ) as $field ) {
			$found = $this->term_id_in( get_term_by( $field, $term, $tax ), $tax );

			if ( $found ) {
				return $found;
			}
		}

		return 0;
	}

	/**
	 * ID of a found term, but only when it belongs to the taxonomy: some
	 * lookups (term_taxonomy_id) return a term of any taxonomy.
	 *
	 * @param mixed  $found Result of get_term_by().
	 * @param string $tax
	 *
	 * @return int
	 */
	protected function term_id_in( $found, string $tax ): int {
		return ( $found instanceof \WP_Term && $found->taxonomy === $tax ) ? (int) $found->term_id : 0;
	}

	/**
	 * Mirrors how Terms_Query builds option values from "Value from": a
	 * WP_Term property when the term has one, otherwise a term meta value.
	 *
	 * @param string $term
	 * @param string $tax
	 * @param string $value_from
	 *
	 * @return int
	 */
	protected function find_term_by_option_key( string $term, string $tax, string $value_from ): int {
		if ( in_array( $value_from, array( 'term_id', 'term_taxonomy_id' ), true ) ) {
			if ( ! preg_match( '/^\d+$/', $term ) ) {
				return 0;
			}

			// get_term_by( 'term_taxonomy_id' ) ignores $tax: term_id_in() checks it.
			return $this->term_id_in( get_term_by( 'term_id' === $value_from ? 'id' : 'term_taxonomy_id', (int) $term, $tax ), $tax );
		}

		if ( in_array( $value_from, array( 'slug', 'name' ), true ) ) {
			return $this->term_id_in( get_term_by( $value_from, $term, $tax ), $tax );
		}

		if ( property_exists( \WP_Term::class, $value_from ) ) {
			// description, parent, count...: no lookup by these fields.
			$terms = get_terms(
				array(
					'taxonomy'   => $tax,
					'hide_empty' => false,
				)
			);

			foreach ( is_array( $terms ) ? $terms : array() as $item ) {
				if ( isset( $item->$value_from ) && (string) $item->$value_from === $term ) {
					return (int) $item->term_id;
				}
			}

			return 0;
		}

		$ids = get_terms(
			array(
				'taxonomy'   => $tax,
				'hide_empty' => false,
				'number'     => 1,
				'fields'     => 'ids',
				// phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_query -- one lookup per submitted value
				'meta_query' => array(
					array(
						'key'   => $value_from,
						'value' => $term,
					),
				),
			)
		);

		return ( is_array( $ids ) && $ids ) ? (int) $ids[0] : 0;
	}

	/**
	 * Taxonomy the source field lists its options from, '' when the field is
	 * not a choice field with options from terms.
	 *
	 * @param array $source
	 *
	 * @return string
	 */
	protected function get_terms_options_taxonomy( array $source ): string {
		$settings = $source['settings'] ?? array();

		if (
			! in_array( $source['type'] ?? '', self::CHOICE_FIELD_TYPES, true )
			|| 'terms' !== ( $settings['field_options_from'] ?? '' )
		) {
			return '';
		}

		return (string) ( $settings['field_options_tax'] ?? '' );
	}

	/**
	 * Whether the source field lets the visitor type a value of their own
	 * ("custom value"): a boolean in Radio, { allow: bool, label } in Checkbox.
	 *
	 * @param array $source
	 *
	 * @return bool
	 */
	protected function allows_custom_value( array $source ): bool {
		if ( ! in_array( $source['type'] ?? '', self::CHOICE_FIELD_TYPES, true ) ) {
			return false;
		}

		$custom = $source['settings']['custom_option'] ?? false;

		return is_array( $custom ) ? ! empty( $custom['allow'] ) : (bool) $custom;
	}

	/**
	 * @param string $term
	 * @param string $tax
	 * @param array  $source
	 * @param string $options_of Taxonomy of term options, see get_terms_options_taxonomy().
	 * @param bool   $is_option  The value is an option listed from another taxonomy.
	 *
	 * @return bool
	 */
	protected function can_create_term( string $term, string $tax, array $source, string $options_of, bool $is_option = false ): bool {
		$type     = $source['type'] ?? '';
		$settings = $source['settings'] ?? array();

		if ( ! in_array( $type, self::CHOICE_FIELD_TYPES, true ) || $this->allows_custom_value( $source ) ) {
			// Free input, a "custom value", an unknown field or a field of
			// another type: as before.
			return true;
		}

		$from = $settings['field_options_from'] ?? 'manual_input';

		if ( 'terms' === $from ) {
			// Same taxonomy: an honest value is always an existing term.
			// Another taxonomy: only for a value that is one of the options.
			return $is_option && '' !== $options_of && $options_of !== $tax;
		}

		if ( 'manual_input' === $from ) {
			foreach ( (array) ( $settings['field_options'] ?? array() ) as $index => $option ) {
				// Same value the option is rendered with (Manual_Query::fetch()):
				// an option without a value key is sent as its index.
				$value = is_array( $option ) ? ( $option['value'] ?? $index ) : null;

				if ( null !== $value && (string) $value === $term ) {
					return true;
				}
			}

			return false;
		}

		// Posts, meta, generators, JetEngine queries...: as before.
		return true;
	}
}
