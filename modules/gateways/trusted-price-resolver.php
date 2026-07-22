<?php


namespace JFB_Modules\Gateways;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Blocks\Types\Hidden_Field;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Modules\Option_Field\Interfaces\Support_Option_Query_It;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Trusted_Price_Resolver {

	/**
	 * Caps for calculated-field formulas, to bound server-side parsing cost.
	 */
	const MAX_FORMULA_LENGTH = 20000;
	const MAX_MACRO_TOKENS   = 200;

	/**
	 * @var int
	 */
	private $form_id;

	/**
	 * @var array
	 */
	private $blocks = array();

	/**
	 * @var array<string,float>
	 */
	private $resolved = array();

	/**
	 * @var array<string,bool>
	 */
	private $resolving = array();

	public function __construct( int $form_id ) {
		$this->form_id = $form_id;
		$this->blocks  = Block_Helper::get_blocks_by_post( $form_id, true, true );
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function resolve( string $field_name ): float {
		if ( isset( $this->resolved[ $field_name ] ) ) {
			return $this->resolved[ $field_name ];
		}

		if ( isset( $this->resolving[ $field_name ] ) ) {
			throw new Gateway_Exception( 'Circular price field dependency detected.' );
		}

		$block = Block_Helper::find_block_by_name( $field_name, $this->blocks );

		if ( empty( $block ) ) {
			throw new Gateway_Exception( 'Invalid price field.' );
		}

		$this->resolving[ $field_name ] = true;

		try {
			$price = $this->resolve_block( $field_name, $block );
		} finally {
			unset( $this->resolving[ $field_name ] );
		}

		$this->resolved[ $field_name ] = $price;

		return $price;
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function resolve_block( string $field_name, array $block ): float {
		$type = Block_Helper::delete_namespace( $block['blockName'] ?? '' );

		switch ( $type ) {
			case 'calculated-field':
				return $this->resolve_calculated_field( $block );

			case 'checkbox-field':
			case 'radio-field':
			case 'select-field':
				return $this->resolve_option_field( $field_name, $block );

			case 'hidden-field':
				return $this->resolve_hidden_field( $field_name, $block );

			default:
				// phpcs:ignore WordPress.NamingConventions.ValidHookName.UseUnderscores
				$price = apply_filters(
					'jet-form-builder/gateways/trusted-price/resolve-block',
					null,
					$field_name,
					$type,
					$block,
					$this
				);

				if ( null !== $price ) {
					return (float) $price;
				}

				throw new Gateway_Exception(
					sprintf(
						'The "%1$s" price field type is not supported when Secure payment amount is enabled. Use a Calculated Field, Hidden Field with "Render in HTML" disabled, or static Select/Radio/Checkbox options.',
						esc_html( $type )
					)
				);
		}
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function resolve_hidden_field( string $field_name, array $block ): float {
		return $this->normalize_numeric(
			$this->resolve_hidden_field_value( $field_name, $block ),
			$field_name
		);
	}

	/**
	 * @return mixed
	 * @throws Gateway_Exception
	 */
	private function resolve_hidden_field_value( string $field_name, array $block ) {
		$render = $block['attrs']['render'] ?? true;

		if ( $render ) {
			throw new Gateway_Exception(
				'Visible hidden fields cannot be used when Secure payment amount is enabled. Disable "Render in HTML" in the Hidden Field settings or choose a Calculated, Select, Radio, or Checkbox field.'
			);
		}

		$field_value_source = (string) ( $block['attrs']['field_value'] ?? 'post_id' );
		$unsafe_sources     = array( 'query_var', 'referer_url' );
		$unsigned_context_sources = array(
			'term_url',
			'current_term_id',
			'current_object_id',
			'post_id',
			'post_title',
			'post_url',
			'post_type',
			'post_meta',
			'author_id',
			'author_email',
			'author_name',
		);

		if ( in_array( $field_value_source, $unsafe_sources, true ) ) {
			throw new Gateway_Exception(
				sprintf(
					'The "%1$s" hidden field uses a client-controlled source ("%2$s") and cannot be used when Secure payment amount is enabled. Use Manual Input, a user source, Current Date, or an integration-provided trusted resolver instead.',
					esc_html( $field_name ),
					esc_html( $field_value_source )
				)
			);
		}

		if ( in_array( $field_value_source, $unsigned_context_sources, true ) ) {
			throw new Gateway_Exception(
				sprintf(
					'The "%1$s" hidden field uses an unsigned context source ("%2$s") and cannot be used when Secure payment amount is enabled.',
					esc_html( $field_name ),
					esc_html( $field_value_source )
				)
			);
		}

		$trusted_native_sources = array(
			'manual_input',
			'user_id',
			'user_email',
			'user_name',
			'user_meta',
			'current_date',
			'random_string',
		);

		$attributes = $block['attrs'] ?? array();
		$this->assert_hidden_field_default_is_static( $field_name, $attributes );

		if ( in_array( $field_value_source, $trusted_native_sources, true ) ) {
			/** @var Hidden_Field $hidden_type */
			$hidden_type       = clone jet_form_builder()->blocks->get_field_by_name( 'hidden-field' );
			$secure_attributes = $attributes;
			$secure_attributes['default'] = '';

			$hidden_type->set_rendering( false );
			$hidden_type->set_block_data( $secure_attributes );

			// Resolve the server source first so runtime presets cannot replace its fallback.
			$hidden_type->block_attrs['default'] = null;
			$value                               = $hidden_type->get_hidden_field_value();
		} else {
			$value = $this->resolve_custom_hidden_field_value(
				$field_value_source,
				$field_name,
				$block
			);
		}

		if ( ! in_array( $value, array( '', null, false ), true ) ) {
			return $value;
		}

		$this->assert_hidden_field_has_no_runtime_preset( $field_name, $attributes );

		// Secure defaults come from saved form data, without runtime macro parsing.
		return $attributes['default'] ?? '';
	}

	/**
	 * Custom Hidden sources must explicitly provide a server-trusted resolver.
	 * The legacy value-cb hook is intentionally not executed in secure pricing.
	 *
	 * @return mixed
	 * @throws Gateway_Exception
	 */
	private function resolve_custom_hidden_field_value( string $source, string $field_name, array $block ) {
		$unresolved = new \stdClass();

		$value = apply_filters(
			'jet-form-builder/gateways/trusted-price/resolve-hidden-source',
			$unresolved,
			$source,
			$field_name,
			$block,
			$this
		);

		if ( $unresolved === $value ) {
			throw new Gateway_Exception(
				sprintf(
					'The "%1$s" hidden price field uses custom source "%2$s" without a trusted secure resolver.',
					esc_html( $field_name ),
					esc_html( $source )
				)
			);
		}

		return $value;
	}

	/**
	 * Runtime presets may read query/request context and cannot be trusted as a
	 * payment amount fallback.
	 *
	 * @throws Gateway_Exception
	 */
	private function assert_hidden_field_has_no_runtime_preset( string $field_name, array $attributes ): void {
		$default = $attributes['default'] ?? '';

		// A non-empty literal default takes precedence over the general preset.
		if ( '' !== $default ) {
			return;
		}

		$preset = jet_form_builder()->post_type->get_preset( $this->form_id );

		if ( empty( $preset['enabled'] ) || empty( $preset['fields_map'][ $field_name ] ) ) {
			return;
		}

		$this->throw_unsupported_hidden_preset( $field_name );
	}

	private function assert_hidden_field_default_is_static( string $field_name, array $attributes ): void {
		$default        = $attributes['default'] ?? '';
		$dynamic_preset = is_string( $default ) ? json_decode( $default, true ) : null;

		if ( is_array( $dynamic_preset ) && ! empty( $dynamic_preset['jet_preset'] ) ) {
			$this->throw_unsupported_hidden_preset( $field_name );
		}
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function throw_unsupported_hidden_preset( string $field_name ): void {
		throw new Gateway_Exception(
			sprintf(
				'The "%1$s" hidden price field uses a runtime preset, which cannot be trusted when Secure payment amount is enabled.',
				esc_html( $field_name )
			)
		);
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function resolve_option_field( string $field_name, array $block ): float {
		$from = $block['attrs']['field_options_from'] ?? 'manual_input';

		if ( 'meta_field' === $from ) {
			throw new Gateway_Exception(
				sprintf(
					'The "%1$s" price field uses Meta Field options that depend on unsigned post context and cannot be used when Secure payment amount is enabled.',
					esc_html( $field_name )
				)
			);
		}

		$options = $this->get_option_field_options( $field_name, $block );

		if ( empty( $options ) ) {
			throw new Gateway_Exception(
				sprintf(
					'The "%1$s" price field has no options available.',
					esc_html( $field_name )
				)
			);
		}

		$this->assert_unique_option_values( $field_name, $options );

		$submitted = jet_fb_context()->get_value( $field_name );

		if ( '' === $submitted || array() === $submitted ) {
			return 0.0;
		}

		// Post and term values are record identifiers unless a calculate source is set.
		$requires_calculate = 'manual_input' !== $from;
		$selected           = $this->validate_option_selection( $field_name, $block, $submitted );
		$amount             = 0.0;

		foreach ( $selected as $selected_value ) {
			$matched = $this->find_option_by_value( $options, $selected_value );

			if ( null === $matched ) {
				throw new Gateway_Exception(
					sprintf(
						'Invalid submitted option for secure price field "%1$s".',
						esc_html( $field_name )
					)
				);
			}

			$amount += $this->resolve_option_amount( $matched, $field_name, $requires_calculate );
		}

		return $amount;
	}

	/**
	 * Reject option selections that cannot be produced by the configured field.
	 *
	 * @param mixed $submitted
	 *
	 * @throws Gateway_Exception
	 */
	private function validate_option_selection( string $field_name, array $block, $submitted ): array {
		$type        = Block_Helper::delete_namespace( $block['blockName'] ?? '' );
		$is_multiple = 'checkbox-field' === $type
			|| ( 'select-field' === $type && ! empty( $block['attrs']['multiple'] ) );

		if ( ! $is_multiple && is_array( $submitted ) ) {
			throw new Gateway_Exception(
				sprintf(
					'The secure price field "%1$s" does not allow multiple selections.',
					esc_html( $field_name )
				)
			);
		}

		$selected = is_array( $submitted ) ? array_values( $submitted ) : array( $submitted );
		$unique   = array();

		foreach ( $selected as $selected_value ) {
			if ( ! is_scalar( $selected_value ) ) {
				throw new Gateway_Exception(
					sprintf(
						'Invalid submitted option for secure price field "%1$s".',
						esc_html( $field_name )
					)
				);
			}

			$key = (string) $selected_value;

			if ( isset( $unique[ $key ] ) ) {
				throw new Gateway_Exception(
					sprintf(
						'Duplicate submitted option for secure price field "%1$s".',
						esc_html( $field_name )
					)
				);
			}

			$unique[ $key ] = true;
		}

		return $selected;
	}

	/**
	 * A submitted option value does not identify which UI option was selected
	 * when the configured values are duplicated.
	 *
	 * @throws Gateway_Exception
	 */
	private function assert_unique_option_values( string $field_name, array $options ): void {
		$values = array();

		foreach ( $options as $option ) {
			if ( ! is_array( $option ) || ! array_key_exists( 'value', $option ) ) {
				continue;
			}

			$value = $option['value'];

			if ( ! is_scalar( $value ) ) {
				throw new Gateway_Exception(
					sprintf(
						'The secure price field "%1$s" contains an invalid option value.',
						esc_html( $field_name )
					)
				);
			}

			$key = (string) $value;

			if ( isset( $values[ $key ] ) ) {
				throw new Gateway_Exception(
					sprintf(
						'The secure price field "%1$s" contains duplicate option values. Each option must have a unique value.',
						esc_html( $field_name )
					)
				);
			}

			$values[ $key ] = true;
		}
	}

	/**
	 * Get options for a select/radio/checkbox field.
	 *
	 * For static options (manual_input), reads from block attributes.
	 * For reproducible dynamic options (posts, terms, meta_field),
	 * fetches them server-side via the option-query module.
	 *
	 * @throws Gateway_Exception
	 */
	private function get_option_field_options( string $field_name, array $block ): array {
		$from = $block['attrs']['field_options_from'] ?? 'manual_input';

		if ( 'manual_input' === $from ) {
			$options = $block['attrs']['field_options'] ?? array();

			return is_array( $options ) ? $options : array();
		}

		if ( 'generate' === $from ) {
			throw new Gateway_Exception(
				sprintf(
					'The "%1$s" price field uses generated options, which cannot be safely reproduced when Secure payment amount is enabled.',
					esc_html( $field_name )
				)
			);
		}

		return $this->fetch_dynamic_options( $field_name, $from, $block );
	}

	/**
	 * Fetch dynamic options server-side using the option-query module.
	 *
	 * Replicates the query configuration from Option_Field\Module::on_set_in_block()
	 * to resolve options with their calculate values from trusted server sources
	 * (post meta, term meta, etc.).
	 *
	 * @throws Gateway_Exception
	 */
	private function fetch_dynamic_options( string $field_name, string $from, array $block ): array {
		try {
			/** @var \JFB_Modules\Option_Query\Module $query_module */
			$query_module = jet_form_builder()->module( 'option-query' );
			$query        = $query_module->get_query( $from );
		} catch ( Repository_Exception $exception ) {
			throw new Gateway_Exception(
				sprintf(
					'The "%1$s" price field uses an unsupported options source "%2$s".',
					esc_html( $field_name ),
					esc_html( $from )
				)
			);
		}

		$block_type = jet_form_builder()->blocks->get_field_by_name( $block['blockName'] ?? '' );

		if ( ! $block_type instanceof Support_Option_Query_It ) {
			throw new Gateway_Exception(
				sprintf(
					'The "%1$s" price field cannot initialize its options source securely.',
					esc_html( $field_name )
				)
			);
		}

		try {
			$block_type->set_block_data( $block['attrs'] ?? array() );
		} catch ( Repository_Exception $exception ) {
			throw new Gateway_Exception(
				sprintf(
					'The "%1$s" price field cannot initialize its options securely.',
					esc_html( $field_name )
				)
			);
		}

		$block_type->set_query( $query );

		// Match frontend query setup, including WPML/Polylang compatibility.
		do_action( 'jet-form-builder/option-query/set-in-block', $block_type );

		return iterator_to_array( $block_type->get_query()->fetch() );
	}

	private function find_option_by_value( array $options, $selected_value ): ?array {
		foreach ( $options as $option ) {
			$option_value = is_array( $option ) ? ( $option['value'] ?? null ) : null;

			if ( null !== $option_value && (string) $option_value === (string) $selected_value ) {
				return $option;
			}
		}

		return null;
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function resolve_option_amount( array $option, string $field_name, bool $requires_calculate = false ): float {
		$calculate     = $option['calculate'] ?? null;
		$has_calculate = null !== $calculate && '' !== $calculate;

		if ( $requires_calculate && ! $has_calculate ) {
			throw new Gateway_Exception(
				sprintf(
					'The "%1$s" price field uses dynamic options without a calculate value, so a trusted amount cannot be determined.',
					esc_html( $field_name )
				)
			);
		}

		$amount = $has_calculate ? $calculate : ( $option['value'] ?? '' );

		return $this->normalize_numeric( $amount, $field_name );
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function resolve_calculated_field( array $block ): float {
		$value_type = $block['attrs']['value_type'] ?? 'number';

		if ( 'number' !== $value_type ) {
			throw new Gateway_Exception(
				'Only Calculated Fields with Value type set to Number can be used when Secure payment amount is enabled.'
			);
		}

		$formula = $block['attrs']['calc_formula'] ?? '';

		if ( ! is_string( $formula ) || '' === trim( $formula ) ) {
			throw new Gateway_Exception( 'Calculated price field has empty formula.' );
		}

		if ( strlen( $formula ) > self::MAX_FORMULA_LENGTH ) {
			throw new Gateway_Exception( 'Calculated price formula is too long to resolve securely.' );
		}

		if ( substr_count( $formula, '%' ) / 2 > self::MAX_MACRO_TOKENS ) {
			throw new Gateway_Exception( 'Calculated price formula has too many macros to resolve securely.' );
		}

		$formula = html_entity_decode( $formula, ENT_QUOTES | ENT_HTML5, 'UTF-8' );

		$expression = preg_replace_callback(
			'/%((?:[a-zA-Z0-9_-]+::)?[a-zA-Z0-9_-]+(?:\|[a-zA-Z][a-zA-Z0-9]*(?:\([^%|()]*\))?)*)%/',
			function ( $matches ) {
				return (string) $this->resolve_macro_token( $matches[1] );
			},
			$formula
		);

		$result    = $this->evaluate_expression( $expression );
		$precision = $this->get_calculated_precision( $block );

		return $this->round_to_frontend_precision( $result, $precision );
	}

	/**
	 * Resolve a macro and apply only filters that can be reproduced from
	 * server-trusted numeric data.
	 *
	 * @throws Gateway_Exception
	 */
	private function resolve_macro_token( string $token ): float {
		$parts  = explode( '|', $token );
		$source = array_shift( $parts );

		if ( preg_match( '/^([a-zA-Z0-9_-]+)::([a-zA-Z0-9_-]+)$/', $source, $matches ) ) {
			$value = $this->resolve_macro_value( $matches[1], $matches[2] );
		} elseif ( preg_match( '/^[a-zA-Z0-9_-]+$/', $source ) ) {
			$value = $this->resolve_field_macro_value( $source );
		} else {
			throw new Gateway_Exception( 'Calculated price field contains an invalid macro.' );
		}

		foreach ( $parts as $filter ) {
			$value = $this->apply_macro_filter( $value, $filter, $source );
		}

		return $this->normalize_numeric( $value, $source );
	}

	private function resolve_field_macro_value( string $field_name ) {
		$block = Block_Helper::find_block_by_name( $field_name, $this->blocks );
		$type  = Block_Helper::delete_namespace( $block['blockName'] ?? '' );

		if ( 'hidden-field' === $type ) {
			return $this->resolve_hidden_field_value( $field_name, $block );
		}

		$value = $this->resolve( $field_name );

		if ( 'calculated-field' === $type ) {
			return $this->format_frontend_precision(
				$value,
				$this->get_calculated_precision( $block )
			);
		}

		return $value;
	}

	private function get_calculated_precision( array $block ): int {
		$precision = isset( $block['attrs']['precision'] )
			? (int) $block['attrs']['precision']
			: 2;

		return max( 0, min( 100, $precision ) );
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function apply_macro_filter( $value, string $filter, string $source ) {
		if ( ! preg_match( '/^([a-zA-Z][a-zA-Z0-9]*)(?:\(([^()]*)\))?$/', trim( $filter ), $matches ) ) {
			throw new Gateway_Exception( 'Calculated price field contains an invalid macro filter.' );
		}

		$name      = $matches[1];
		$arguments = array();

		if ( isset( $matches[2] ) && '' !== trim( $matches[2] ) ) {
			foreach ( explode( ',', $matches[2] ) as $argument ) {
				$arguments[] = $this->normalize_numeric( $argument, $name );
			}
		}

		switch ( $name ) {
			case 'ifEmpty':
				if ( 1 !== count( $arguments ) ) {
					break;
				}

				return $this->is_frontend_empty( $value ) ? $arguments[0] : $value;

			case 'length':
				if ( 0 !== count( $arguments ) ) {
					break;
				}

				if ( is_array( $value ) ) {
					return count( $value );
				}

				return is_string( $value ) ? $this->frontend_string_length( $value ) : 0;

			case 'toMinuteInMs':
				return $this->normalize_numeric( $value, $source ) * 60 * 1000;

			case 'toHourInMs':
				return $this->normalize_numeric( $value, $source ) * 60 * 60 * 1000;

			case 'toDayInMs':
				return $this->normalize_numeric( $value, $source ) * 24 * 60 * 60 * 1000;

			case 'toWeekInMs':
				return $this->normalize_numeric( $value, $source ) * 7 * 24 * 60 * 60 * 1000;

			case 'toMonthInMs':
				return $this->normalize_numeric( $value, $source ) * 30 * 24 * 60 * 60 * 1000;

			case 'toYearInMs':
				return $this->normalize_numeric( $value, $source ) * 365 * 24 * 60 * 60 * 1000;
		}

		// Allow integrations to provide an equivalent trusted server filter.
		$filtered = apply_filters(
			'jet-form-builder/gateways/trusted-price/apply-macro-filter',
			null,
			$value,
			$name,
			$arguments,
			$source,
			$this
		);

		if ( null !== $filtered ) {
			return $filtered;
		}

		throw new Gateway_Exception(
			sprintf(
				'Unsupported calculated-field macro filter "%1$s" in secure gateway pricing.',
				esc_html( $name )
			)
		);
	}

	/**
	 * Match the frontend isEmpty() semantics used by ifEmpty.
	 *
	 * @param mixed $value
	 */
	private function is_frontend_empty( $value ): bool {
		if ( is_bool( $value ) ) {
			return ! $value;
		}

		if ( null === $value ) {
			return true;
		}

		if ( is_array( $value ) ) {
			return 0 === count( $value );
		}

		if ( is_int( $value ) || is_float( $value ) ) {
			return 0.0 === (float) $value || is_nan( (float) $value );
		}

		return '' === (string) $value;
	}

	/**
	 * JavaScript String.length counts UTF-16 code units, not UTF-8 bytes.
	 */
	private function frontend_string_length( string $value ): int {
		if ( ! preg_match_all( '/./us', $value, $characters ) ) {
			return strlen( $value );
		}

		$length = 0;

		foreach ( $characters[0] as $character ) {
			$length += 4 === strlen( $character ) ? 2 : 1;
		}

		return $length;
	}

	/**
	 * Match Number.prototype.toFixed() without requiring BCMath or GMP.
	 */
	private function round_to_frontend_precision( float $value, int $precision ): float {
		if ( ! is_finite( $value ) || abs( $value ) >= 1e21 ) {
			return $value;
		}

		return (float) $this->format_frontend_precision( $value, $precision );
	}

	private function format_frontend_precision( float $value, int $precision ): string {
		if ( ! is_finite( $value ) || abs( $value ) >= 1e21 ) {
			return (string) $value;
		}

		if ( 0.0 === $value ) {
			return $this->format_fixed_integer( '0', $precision );
		}

		$is_negative = $value < 0;
		$hex         = $this->double_to_big_endian_hex( abs( $value ) );
		$exponent    = ( ( hexdec( $hex[0] ) & 0x7 ) << 8 ) | hexdec( substr( $hex, 1, 2 ) );
		$mantissa    = $this->decimal_from_hex(
			( 0 === $exponent ? '' : '1' ) . substr( $hex, 3 )
		);

		if ( 0 === $exponent ) {
			$binary_exponent = -1074;
		} else {
			$binary_exponent = $exponent - 1075;
		}

		$scaled = $mantissa;

		for ( $index = 0; $index < $precision; ++$index ) {
			$scaled = $this->decimal_multiply( $scaled, 5 );
		}

		$binary_shift = $binary_exponent + $precision;

		if ( 0 <= $binary_shift ) {
			for ( $index = 0; $index < $binary_shift; ++$index ) {
				$scaled = $this->decimal_multiply( $scaled, 2 );
			}
		} else {
			$round_up = 0;

			for ( $index = 0; $index < abs( $binary_shift ); ++$index ) {
				list( $scaled, $round_up ) = $this->decimal_divide_by_two( $scaled );
			}

			if ( $round_up ) {
				$scaled = $this->decimal_increment( $scaled );
			}
		}

		$rounded = $this->format_fixed_integer( $scaled, $precision );

		return $is_negative ? '-' . $rounded : $rounded;
	}

	private function double_to_big_endian_hex( float $value ): string {
		$parts = unpack( 'H*value', pack( 'd', $value ) );
		$hex   = $parts['value'];

		if ( pack( 'L', 1 ) === pack( 'V', 1 ) ) {
			$hex = implode( '', array_reverse( str_split( $hex, 2 ) ) );
		}

		return $hex;
	}

	private function decimal_from_hex( string $value ): string {
		$result       = '0';
		$value_length = strlen( $value );

		for ( $index = 0; $index < $value_length; ++$index ) {
			$result = $this->decimal_multiply( $result, 16 );
			$result = $this->decimal_add_small( $result, hexdec( $value[ $index ] ) );
		}

		return $result;
	}

	private function decimal_multiply( string $value, int $multiplier ): string {
		$result = '';
		$carry  = 0;

		for ( $index = strlen( $value ) - 1; 0 <= $index; --$index ) {
			$product = ( (int) $value[ $index ] * $multiplier ) + $carry;
			$result  = (string) ( $product % 10 ) . $result;
			$carry   = intdiv( $product, 10 );
		}

		while ( $carry ) {
			$result = (string) ( $carry % 10 ) . $result;
			$carry  = intdiv( $carry, 10 );
		}

		return ltrim( $result, '0' ) ?: '0';
	}

	private function decimal_add_small( string $value, int $addend ): string {
		for ( $index = strlen( $value ) - 1; 0 <= $index && $addend; --$index ) {
			$sum             = (int) $value[ $index ] + $addend;
			$value[ $index ] = (string) ( $sum % 10 );
			$addend          = intdiv( $sum, 10 );
		}

		return $addend ? (string) $addend . $value : $value;
	}

	private function decimal_divide_by_two( string $value ): array {
		$result       = '';
		$remainder    = 0;
		$value_length = strlen( $value );

		for ( $index = 0; $index < $value_length; ++$index ) {
			$current   = ( $remainder * 10 ) + (int) $value[ $index ];
			$quotient  = intdiv( $current, 2 );
			$remainder = $current % 2;

			if ( '' !== $result || $quotient ) {
				$result .= (string) $quotient;
			}
		}

		return array( $result ?: '0', $remainder );
	}

	private function decimal_increment( string $value ): string {
		return $this->decimal_add_small( $value, 1 );
	}

	private function format_fixed_integer( string $value, int $precision ): string {
		if ( 0 === $precision ) {
			return $value;
		}

		$value = str_pad( $value, $precision + 1, '0', STR_PAD_LEFT );
		$split = strlen( $value ) - $precision;

		return substr( $value, 0, $split ) . '.' . substr( $value, $split );
	}

	/**
	 * @return mixed
	 * @throws Gateway_Exception
	 */
	private function resolve_macro_value( string $macro_type, string $macro_value ) {
		switch ( strtolower( $macro_type ) ) {
			case 'field':
				return $this->resolve_field_macro_value( $macro_value );

			case 'meta':
				throw new Gateway_Exception(
					sprintf(
						'The calculated-field macro "%%META::%1$s%%" depends on unsigned post context and cannot be used when Secure payment amount is enabled.',
						esc_html( $macro_value )
					)
				);

			default:
				// Allow integrations to recalculate their macros from trusted server data.
				$value = apply_filters(
					'jet-form-builder/gateways/trusted-price/resolve-macro',
					null,
					$macro_type,
					$macro_value,
					$this
				);

				if ( null !== $value ) {
					return $value;
				}

				throw new Gateway_Exception(
					sprintf(
						'Unsupported calculated-field macro "%1$s" in secure gateway pricing.',
						esc_html( $macro_type )
					)
				);
		}
	}

	/**
	 * @throws Gateway_Exception
	 */
	private function evaluate_expression( string $expression ): float {
		$parser = new Trusted_Price_Resolver_Expression_Parser( $expression );

		return $parser->parse();
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function normalize_numeric( $value, string $field_name ): float {
		if ( '' === $value || null === $value ) {
			return 0.0;
		}

		if ( is_array( $value ) ) {
			throw new Gateway_Exception(
				sprintf(
					'The "%1$s" price source produced a non-scalar value.',
					esc_html( $field_name )
				)
			);
		}

		$value = trim( (string) $value );

		if ( '' === $value ) {
			return 0.0;
		}

		if ( ! is_numeric( $value ) ) {
			throw new Gateway_Exception(
				sprintf(
					'The "%1$s" price source produced a non-numeric value.',
					esc_html( $field_name )
				)
			);
		}

		return (float) $value;
	}
}
