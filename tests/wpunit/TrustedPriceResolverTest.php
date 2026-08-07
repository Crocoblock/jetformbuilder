<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use JFB_Modules\Gateways\Trusted_Price_Resolver;

class TrustedPriceResolverTest extends \Codeception\TestCase\WPTestCase {

	protected function tearDown(): void {
		$_GET     = array();
		$_POST    = array();
		$_REQUEST = array();
		wp_set_current_user( 0 );
		Tools::set_current_post( 0 );

		parent::tearDown();
	}

	public function testMetaMacroIsRejectedWithoutTrustedPostContext(): void {
		$form_id = $this->create_form(
			array( $this->calculated_block( 'meta_price', '%META::secure_price%', 2 ) )
		);

		$this->expectException( Gateway_Exception::class );
		$this->expectExceptionMessage( 'depends on unsigned post context' );

		( new Trusted_Price_Resolver( $form_id ) )->resolve( 'meta_price' );
	}

	public function testCalculatedFieldUsesTrustedVirtualFieldResolver(): void {
		$form_id = $this->create_form(
			array( $this->calculated_block( 'virtual_total', '%FIELD::virtual_level% * 2', 2 ) )
		);
		$callback = function ( $value, $field_name, $blocks, $resolver ) {
			$this->assertSame( 'virtual_level', $field_name );
			$this->assertNotEmpty( $blocks );
			$this->assertInstanceOf( Trusted_Price_Resolver::class, $resolver );

			return 12.5;
		};

		add_filter(
			'jet-form-builder/gateways/trusted-price/resolve-virtual-field',
			$callback,
			10,
			4
		);

		try {
			$this->assertSame(
				25.0,
				( new Trusted_Price_Resolver( $form_id ) )->resolve( 'virtual_total' )
			);
		} finally {
			remove_filter(
				'jet-form-builder/gateways/trusted-price/resolve-virtual-field',
				$callback,
				10
			);
		}
	}

	public function testVirtualFieldResolverRejectsNonNumericValues(): void {
		$form_id = $this->create_form(
			array( $this->calculated_block( 'virtual_total', '%FIELD::virtual_level%', 2 ) )
		);
		$callback = function ( $value, $field_name ) {
			return 'virtual_level' === $field_name ? 'not-a-price' : $value;
		};

		add_filter(
			'jet-form-builder/gateways/trusted-price/resolve-virtual-field',
			$callback,
			10,
			2
		);

		try {
			$this->expectException( Gateway_Exception::class );
			$this->expectExceptionMessage( 'produced a non-numeric value' );

			( new Trusted_Price_Resolver( $form_id ) )->resolve( 'virtual_total' );
		} finally {
			remove_filter(
				'jet-form-builder/gateways/trusted-price/resolve-virtual-field',
				$callback,
				10
			);
		}
	}

	public function testVirtualFieldResolverDetectsCircularDependencies(): void {
		$form_id  = $this->create_form( array( $this->calculated_block( 'total', '%virtual_level%', 2 ) ) );
		$resolver = new Trusted_Price_Resolver( $form_id );
		$callback = function ( $value, $field_name ) use ( $resolver ) {
			return 'virtual_level' === $field_name ? $resolver->resolve( $field_name ) : $value;
		};

		add_filter(
			'jet-form-builder/gateways/trusted-price/resolve-virtual-field',
			$callback,
			10,
			2
		);

		try {
			$this->expectException( Gateway_Exception::class );
			$this->expectExceptionMessage( 'Circular price field dependency detected' );

			$resolver->resolve( 'total' );
		} finally {
			remove_filter(
				'jet-form-builder/gateways/trusted-price/resolve-virtual-field',
				$callback,
				10
			);
		}
	}

	public function testPostMetaHiddenFieldIsRejectedWithoutTrustedPostContext(): void {
		$field_name = 'post_meta_price';
		$form_id    = $this->create_form(
			array(
				$this->block(
					'jet-forms/hidden-field',
					array(
						'name'               => $field_name,
						'render'             => false,
						'field_value'        => 'post_meta',
						'hidden_value_field' => 'secure_price',
						'default'            => '0.01',
					)
				),
			)
		);

		$this->expectException( Gateway_Exception::class );
		$this->expectExceptionMessage( 'uses an unsigned context source' );

		( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name );
	}

	public function testPostIdHiddenFieldIsRejectedWithoutTrustedPostContext(): void {
		$field_name = 'post_id_price';
		$form_id    = $this->create_form(
			array(
				$this->block(
					'jet-forms/hidden-field',
					array(
						'name'        => $field_name,
						'render'      => false,
						'field_value' => 'post_id',
					)
				),
			)
		);

		$this->expectException( Gateway_Exception::class );
		$this->expectExceptionMessage( 'uses an unsigned context source' );

		( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name );
	}

	public function testHiddenPriceResolutionDoesNotMutateSharedRenderer(): void {
		$field_name = 'server_hidden_price';
		$block      = $this->hidden_block( $field_name, '25' );
		$form_id    = $this->create_form( array( $block ) );
		$renderer   = jet_form_builder()->blocks->get_field_by_name( 'hidden-field' );
		$rendering  = $renderer->is_rendering();
		$attributes = $renderer->block_attrs;

		try {
			$renderer->set_rendering( true );
			$renderer->block_attrs = array( 'sentinel' => 'unchanged' );

			$this->assertSame(
				25.0,
				( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name )
			);
			$this->assertTrue( $renderer->is_rendering() );
			$this->assertSame( array( 'sentinel' => 'unchanged' ), $renderer->block_attrs );
		} finally {
			$renderer->set_rendering( $rendering );
			$renderer->block_attrs = $attributes;
		}
	}

	public function testCustomHiddenPriceRejectsLegacyValueCallback(): void {
		$field_name      = 'legacy_custom_price';
		$legacy_executed = false;
		$block           = $this->block(
			'jet-forms/hidden-field',
			array(
				'name'        => $field_name,
				'render'      => false,
				'field_value' => 'request_price',
				'default'     => '',
			)
		);
		$form_id = $this->create_form( array( $block ) );
		$callback = function ( $current, $source ) use ( &$legacy_executed ) {
			if ( 'request_price' !== $source ) {
				return $current;
			}

			$legacy_executed = true;

			return function () {
				return $_GET['price'] ?? '';
			};
		};

		$_GET['price'] = '0.01';
		add_filter( 'jet-form-builder/fields/hidden-field/value-cb', $callback, 10, 2 );

		try {
			( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name );
			$this->fail( 'A legacy custom Hidden callback must not resolve a secure price.' );
		} catch ( Gateway_Exception $exception ) {
			$this->assertStringContainsString( 'without a trusted secure resolver', $exception->getMessage() );
			$this->assertFalse( $legacy_executed );
		} finally {
			remove_filter( 'jet-form-builder/fields/hidden-field/value-cb', $callback, 10 );
		}
	}

	public function testCustomHiddenPriceUsesExplicitTrustedResolver(): void {
		$field_name = 'trusted_custom_price';
		$block      = $this->block(
			'jet-forms/hidden-field',
			array(
				'name'        => $field_name,
				'render'      => false,
				'field_value' => 'server_catalog_price',
				'default'     => '',
			)
		);
		$form_id = $this->create_form( array( $block ) );
		$callback = function ( $current, $source ) {
			return 'server_catalog_price' === $source ? '25' : $current;
		};

		$_GET['price'] = '0.01';
		add_filter(
			'jet-form-builder/gateways/trusted-price/resolve-hidden-source',
			$callback,
			10,
			2
		);

		try {
			$this->assertSame(
				25.0,
				( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name )
			);
		} finally {
			remove_filter(
				'jet-form-builder/gateways/trusted-price/resolve-hidden-source',
				$callback,
				10
			);
		}
	}

	public function testHiddenPriceRejectsQueryVariableGeneralPreset(): void {
		$field_name = 'preset_price';
		$block      = $this->block(
			'jet-forms/hidden-field',
			array(
				'name'               => $field_name,
				'render'             => false,
				'field_value'        => 'user_meta',
				'hidden_value_field' => 'missing_price',
				'default'            => '',
			)
		);
		$form_id = $this->create_form( array( $block ) );

		update_post_meta(
			$form_id,
			'_jf_preset',
			wp_json_encode(
				array(
					'enabled'    => true,
					'from'       => 'query_var',
					'fields_map' => array(
						$field_name => array( 'key' => 'cheap_price' ),
					),
				)
			)
		);
		$_GET['cheap_price'] = '0.01';

		$this->expectException( Gateway_Exception::class );
		$this->expectExceptionMessage( 'uses a runtime preset' );

		( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name );
	}

	public function testHiddenPriceUsesNonEmptyTrustedSourceBeforeRuntimePreset(): void {
		$field_name = 'trusted_source_price';
		$block      = $this->hidden_block( $field_name, '25' );
		$form_id    = $this->create_form( array( $block ) );

		update_post_meta(
			$form_id,
			'_jf_preset',
			wp_json_encode(
				array(
					'enabled'    => true,
					'from'       => 'query_var',
					'fields_map' => array(
						$field_name => array( 'key' => 'cheap_price' ),
					),
				)
			)
		);
		$_GET['cheap_price'] = '0.01';

		$this->assertSame(
			25.0,
			( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name )
		);
	}

	public function testHiddenPriceUsesSavedLiteralDefault(): void {
		$field_name = 'literal_default_price';
		$block      = $this->block(
			'jet-forms/hidden-field',
			array(
				'name'               => $field_name,
				'render'             => false,
				'field_value'        => 'user_meta',
				'hidden_value_field' => 'missing_price',
				'default'            => '25',
			)
		);
		$form_id = $this->create_form( array( $block ) );

		$this->assertSame(
			25.0,
			( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name )
		);
	}

	public function testHiddenPriceRejectsDynamicPresetDefault(): void {
		$field_name = 'dynamic_preset_price';
		$block      = $this->block(
			'jet-forms/hidden-field',
			array(
				'name'               => $field_name,
				'render'             => false,
				'field_value'        => 'user_meta',
				'hidden_value_field' => 'missing_price',
				'default'            => wp_json_encode(
					array(
						'jet_preset'       => true,
						'from'             => 'query_var',
						'current_field_key' => 'cheap_price',
					)
				),
			)
		);
		$form_id = $this->create_form( array( $block ) );

		$_GET['cheap_price'] = '0.01';

		$this->expectException( Gateway_Exception::class );
		$this->expectExceptionMessage( 'uses a runtime preset' );

		( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name );
	}

	public function testAuthorizedPreviewFormsResolveSecurePrice(): void {
		$user_id = self::factory()->user->create( array( 'role' => 'administrator' ) );
		$user    = get_user_by( 'id', $user_id );
		$user->add_cap( 'edit_jet_fb_form' );
		wp_set_current_user( $user_id );

		$block    = $this->calculated_block( 'preview_price', '20 + 5', 2 );
		$content  = serialize_blocks( array( $block ) );
		$draft_id = (int) wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'draft',
				'post_title'   => 'Secure price draft preview',
				'post_content' => $content,
			)
		);
		$parent_id   = $this->create_form( array() );
		$revision_id = (int) wp_insert_post(
			array(
				'post_type'    => 'revision',
				'post_status'  => 'inherit',
				'post_parent'  => $parent_id,
				'post_title'   => 'Secure price revision preview',
				'post_content' => $content,
			)
		);

		$_REQUEST[ Block_Helper::PREVIEW_NONCE_FIELD ] = wp_create_nonce(
			Block_Helper::PREVIEW_NONCE_ACTION
		);

		$this->assertSame( 25.0, ( new Trusted_Price_Resolver( $draft_id ) )->resolve( 'preview_price' ) );
		$this->assertSame( 25.0, ( new Trusted_Price_Resolver( $revision_id ) )->resolve( 'preview_price' ) );
	}

	public function testUnauthorizedDraftPreviewDoesNotResolveSecurePrice(): void {
		$block   = $this->calculated_block( 'preview_price', '20 + 5', 2 );
		$form_id = (int) wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'draft',
				'post_title'   => 'Unauthorized secure price preview',
				'post_content' => serialize_blocks( array( $block ) ),
			)
		);

		$this->expectException( Gateway_Exception::class );
		$this->expectExceptionMessage( 'Invalid price field' );

		( new Trusted_Price_Resolver( $form_id ) )->resolve( 'preview_price' );
	}

	public function testCalculatedFieldsApplyOwnPrecision(): void {
		$form_id = $this->create_form(
			array(
				$this->block(
					'jet-forms/calculated-field',
					array(
						'name'         => 'rounded_nested_source',
						'calc_formula' => '10 / 3',
					)
				),
				$this->block(
					'jet-forms/calculated-field',
					array(
						'name'         => 'custom_precision_source',
						'calc_formula' => '10 / 3',
						'precision'    => 3,
					)
				),
				$this->block(
					'jet-forms/calculated-field',
					array(
						'name'         => 'rounded_nested_total',
						'calc_formula' => '%FIELD::rounded_nested_source% * 3',
						'precision'    => 2,
					)
				),
			)
		);

		$resolver = new Trusted_Price_Resolver( $form_id );

		$this->assertSame( 3.33, $resolver->resolve( 'rounded_nested_source' ) );
		$this->assertSame( 3.333, $resolver->resolve( 'custom_precision_source' ) );
		$this->assertSame( 9.99, $resolver->resolve( 'rounded_nested_total' ) );
	}

	public function testCalculatedPriceRejectsNonNumberValueTypes(): void {
		foreach ( array( 'date', 'string' ) as $value_type ) {
			$field_name = $value_type . '_calculated_price';
			$block      = $this->calculated_block( $field_name, '25', 2 );
			$block['attrs']['value_type'] = $value_type;
			$form_id = $this->create_form( array( $block ) );

			try {
				( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name );
				$this->fail( 'A non-number Calculated Field must not resolve a secure price.' );
			} catch ( Gateway_Exception $exception ) {
				$this->assertStringContainsString( 'Value type set to Number', $exception->getMessage() );
			}
		}
	}

	public function testCalculatedFieldsMatchFrontendRounding(): void {
		$form_id = $this->create_form(
			array(
				$this->calculated_block( 'binary_boundary_down', '1.005', 2 ),
				$this->calculated_block( 'binary_boundary_second', '2.675', 2 ),
				$this->calculated_block( 'exact_half_up', '0.125', 2 ),
				$this->calculated_block( 'negative_binary_boundary', '-1.005', 2 ),
				$this->calculated_block( 'integer_half_up', '2.5', 0 ),
				$this->calculated_block(
					'nested_binary_boundary',
					'%FIELD::binary_boundary_down% * 100',
					2
				),
			)
		);

		$resolver = new Trusted_Price_Resolver( $form_id );

		$this->assertSame( 1.0, $resolver->resolve( 'binary_boundary_down' ) );
		$this->assertSame( 2.67, $resolver->resolve( 'binary_boundary_second' ) );
		$this->assertSame( 0.13, $resolver->resolve( 'exact_half_up' ) );
		$this->assertSame( -1.0, $resolver->resolve( 'negative_binary_boundary' ) );
		$this->assertSame( 3.0, $resolver->resolve( 'integer_half_up' ) );
		$this->assertSame( 100.0, $resolver->resolve( 'nested_binary_boundary' ) );
	}

	public function testCalculatedFieldMathRoundMatchesJsSemantics(): void {
		$form_id = $this->create_form(
			array(
				// 0.49999999999999994 must round down to 0, like JavaScript Math.round,
				// not up to 1 as floor( value + 0.5 ) would.
				$this->calculated_block( 'round_just_below_half', 'Math.round(0.49999999999999994)', 0 ),
				$this->calculated_block( 'round_exact_half', 'Math.round(0.5)', 0 ),
				$this->calculated_block( 'round_negative_half', 'Math.round(-0.5)', 0 ),
				$this->calculated_block( 'round_negative_two_half', 'Math.round(-2.5)', 0 ),
			)
		);

		$resolver = new Trusted_Price_Resolver( $form_id );

		$this->assertSame( 0.0, $resolver->resolve( 'round_just_below_half' ) );
		$this->assertSame( 1.0, $resolver->resolve( 'round_exact_half' ) );
		$this->assertSame( 0.0, $resolver->resolve( 'round_negative_half' ) );
		$this->assertSame( -2.0, $resolver->resolve( 'round_negative_two_half' ) );
	}

	public function testCalculatedFieldsSupportSecureExpressionSubset(): void {
		$form_id = $this->create_form(
			array(
				$this->calculated_block( 'ceil_price', 'Math.ceil(10 / 3)', 2 ),
				$this->calculated_block(
					'conditional_price',
					'5 >= 3 && 2 !== 3 ? Math.max(10, 20) : 0',
					2
				),
				$this->calculated_block( 'short_circuit_price', '1 ? 12 : 1 / 0', 2 ),
				$this->calculated_block( 'modulo_price', '10 % 4', 2 ),
				$this->calculated_block( 'multiple_modulo_price', '10 % 4 + 3 % 2', 2 ),
				$this->calculated_block( 'constant_price', 'Math.round(Math.PI)', 2 ),
				$this->calculated_block( 'empty_source', '0', 2 ),
				$this->calculated_block( 'days_source', '2', 2 ),
				$this->calculated_block(
					'filtered_price',
					'%FIELD::empty_source|ifEmpty(7)% + %FIELD::days_source|toDayInMs% / 86400000',
					2
				),
			)
		);

		$resolver = new Trusted_Price_Resolver( $form_id );

		$this->assertSame( 4.0, $resolver->resolve( 'ceil_price' ) );
		$this->assertSame( 20.0, $resolver->resolve( 'conditional_price' ) );
		$this->assertSame( 12.0, $resolver->resolve( 'short_circuit_price' ) );
		$this->assertSame( 2.0, $resolver->resolve( 'modulo_price' ) );
		$this->assertSame( 3.0, $resolver->resolve( 'multiple_modulo_price' ) );
		$this->assertSame( 3.0, $resolver->resolve( 'constant_price' ) );
		$this->assertSame( 2.0, $resolver->resolve( 'filtered_price' ) );
	}

	public function testCalculatedFieldFiltersReceiveFrontendFixedStrings(): void {
		$form_id = $this->create_form(
			array(
				$this->calculated_block( 'decimal_source', '12.34', 2 ),
				$this->calculated_block( 'whole_source', '12', 2 ),
				$this->calculated_block( 'zero_source', '0', 2 ),
				$this->calculated_block( 'decimal_length', '%FIELD::decimal_source|length%', 2 ),
				$this->calculated_block( 'whole_length', '%FIELD::whole_source|length%', 2 ),
				$this->calculated_block( 'zero_fallback', '%FIELD::zero_source|ifEmpty(7)%', 2 ),
			)
		);

		$resolver = new Trusted_Price_Resolver( $form_id );

		$this->assertSame( 5.0, $resolver->resolve( 'decimal_length' ) );
		$this->assertSame( 5.0, $resolver->resolve( 'whole_length' ) );
		$this->assertSame( 0.0, $resolver->resolve( 'zero_fallback' ) );
	}

	public function testCalculatedFieldRejectsUnknownFunction(): void {
		$form_id = $this->create_form(
			array( $this->calculated_block( 'unsafe_function', 'Math.random()', 2 ) )
		);

		$this->expectException( Gateway_Exception::class );
		$this->expectExceptionMessage( 'unsupported function' );

		( new Trusted_Price_Resolver( $form_id ) )->resolve( 'unsafe_function' );
	}

	public function testCalculatedFieldRejectsUnsupportedMacroFilter(): void {
		$form_id = $this->create_form(
			array(
				$this->calculated_block( 'source', '5', 2 ),
				$this->calculated_block( 'unsupported_filter', '%FIELD::source|clientOnly%', 2 ),
			)
		);

		$this->expectException( Gateway_Exception::class );
		$this->expectExceptionMessage( 'Unsupported calculated-field macro filter' );

		( new Trusted_Price_Resolver( $form_id ) )->resolve( 'unsupported_filter' );
	}

	public function testMacroFiltersUseTrustedRawHiddenValue(): void {
		$form_id = $this->create_form(
			array(
				$this->hidden_block( 'string_zero', '0' ),
				$this->hidden_block( 'numeric_string', '12345' ),
				$this->hidden_block( 'unicode_string', "\xF0\x9F\x92\xB0" ),
				$this->calculated_block( 'zero_fallback', '%FIELD::string_zero|ifEmpty(7)%', 2 ),
				$this->calculated_block( 'string_length', '%FIELD::numeric_string|length%', 2 ),
				$this->calculated_block( 'unicode_length', '%FIELD::unicode_string|length%', 2 ),
			)
		);

		$resolver = new Trusted_Price_Resolver( $form_id );

		$this->assertSame( 0.0, $resolver->resolve( 'zero_fallback' ) );
		$this->assertSame( 5.0, $resolver->resolve( 'string_length' ) );
		$this->assertSame( 2.0, $resolver->resolve( 'unicode_length' ) );
	}

	public function testOptionFieldRejectsDuplicateConfiguredValues(): void {
		$field_name = 'ambiguous_secure_price';
		$block      = $this->option_block(
			'jet-forms/radio-field',
			$field_name,
			array(
				'field_options' => array(
					array(
						'label'     => 'Regular',
						'value'     => 1,
						'calculate' => 100,
					),
					array(
						'label'     => 'Discounted',
						'value'     => '1',
						'calculate' => 50,
					),
				),
			)
		);
		$form_id = $this->create_form( array( $block ) );

		$this->apply_request( array( $field_name => '1' ), array( $block ) );

		$this->expectException( Gateway_Exception::class );
		$this->expectExceptionMessage( 'contains duplicate option values' );

		( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name );
	}

	public function testOptionFieldsUseValueWhenCalculateIsBlank(): void {
		$cases = array(
			array( 'jet-forms/radio-field', 'radio_value_price', '25', 25.0 ),
			array( 'jet-forms/select-field', 'select_value_price', '25', 25.0 ),
			array( 'jet-forms/checkbox-field', 'checkbox_value_price', array( '10', '15' ), 25.0 ),
		);

		foreach ( $cases as list( $block_name, $field_name, $submitted, $expected ) ) {
			$values  = is_array( $submitted ) ? $submitted : array( $submitted );
			$options = array();

			foreach ( $values as $value ) {
				$options[] = array(
					'label'     => 'Option ' . $value,
					'value'     => $value,
					'calculate' => '',
				);
			}

			$block = $this->option_block(
				$block_name,
				$field_name,
				array( 'field_options' => $options )
			);
			$form_id = $this->create_form( array( $block ) );

			$this->apply_request( array( $field_name => $submitted ), array( $block ) );

			$this->assertSame(
				$expected,
				( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name )
			);
		}
	}

	public function testOptionFieldPreservesExplicitZeroCalculate(): void {
		$field_name = 'free_option_price';
		$block      = $this->option_block(
			'jet-forms/radio-field',
			$field_name,
			array(
				'field_options' => array(
					array(
						'label'     => 'Complimentary',
						'value'     => '25',
						'calculate' => '0',
					),
				),
			)
		);
		$form_id = $this->create_form( array( $block ) );

		$this->apply_request( array( $field_name => '25' ), array( $block ) );

		$this->assertSame(
			0.0,
			( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name )
		);
	}

	public function testGeneratedOptionFieldsAreRejected(): void {
		$field_name = 'generated_secure_price';
		$block      = $this->option_block(
			'jet-forms/select-field',
			$field_name,
			array(
				'field_options_from'      => 'generate',
				'generator_function'      => 'get_from_db',
				'generator_auto_update'  => true,
				'generator_listen_field' => 'room',
			)
		);
		$form_id = $this->create_form( array( $block ) );

		$this->expectException( Gateway_Exception::class );
		$this->expectExceptionMessage( 'uses generated options' );

		( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name );
	}

	public function testDynamicPostOptionsApplySetInBlockHooks(): void {
		$field_name  = 'translated_post_price';
		$allowed_id  = self::factory()->post->create( array( 'post_title' => 'Visible option' ) );
		$excluded_id = self::factory()->post->create( array( 'post_title' => 'Other language option' ) );

		update_post_meta( $allowed_id, 'secure_price', '25' );
		update_post_meta( $excluded_id, 'secure_price', '1' );

		$block = $this->option_block(
			'jet-forms/select-field',
			$field_name,
			array(
				'field_options_from'        => 'posts',
				'field_options_post_type'   => 'post',
				'calculated_value_from_key' => 'secure_price',
			)
		);
		$form_id  = $this->create_form( array( $block ) );
		$hook_ran = false;
		$hook     = function ( $option_block ) use ( $allowed_id, &$hook_ran ) {
			if ( 'posts' !== $option_block->get_query()->rep_item_id() ) {
				return;
			}

			$hook_ran = true;
			$option_block->get_query()->set_query( 'post__in', array( $allowed_id ) );
		};

		$this->apply_request( array( $field_name => (string) $allowed_id ), array( $block ) );
		add_action( 'jet-form-builder/option-query/set-in-block', $hook, 20 );

		try {
			$this->assertSame( 25.0, ( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name ) );
			$this->assertTrue( $hook_ran );

			$this->apply_request( array( $field_name => (string) $excluded_id ), array( $block ) );
			$hook_ran = false;

			try {
				( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name );
				$this->fail( 'An option excluded by the frontend query hook must be rejected.' );
			} catch ( Gateway_Exception $exception ) {
				$this->assertStringContainsString( 'Invalid submitted option', $exception->getMessage() );
				$this->assertTrue( $hook_ran );
			}
		} finally {
			remove_action( 'jet-form-builder/option-query/set-in-block', $hook, 20 );
		}
	}

	public function testRadioArraySelectionIsRejectedByValidationPipeline(): void {
		$this->expectInvalidScalarSelection(
			'jet-forms/radio-field',
			'radio_secure_price',
			array( 'discount', 'discount' )
		);
	}

	public function testSingleSelectArraySelectionIsRejectedByValidationPipeline(): void {
		$this->expectInvalidScalarSelection(
			'jet-forms/select-field',
			'single_select_secure_price',
			array( 'discount', 'fee' )
		);
	}

	public function testCheckboxRejectsDuplicateSelection(): void {
		$this->expectInvalidSelection(
			'jet-forms/checkbox-field',
			'checkbox_duplicate_secure_price',
			array( 'discount', 'discount' )
		);
	}

	public function testMultipleSelectRejectsDuplicateSelection(): void {
		$this->expectInvalidSelection(
			'jet-forms/select-field',
			'multiple_select_duplicate_secure_price',
			array( 'discount', 'discount' ),
			array( 'multiple' => true )
		);
	}

	public function testCheckboxAcceptsUniqueSelection(): void {
		$field_name = 'checkbox_unique_secure_price';
		$block      = $this->option_block( 'jet-forms/checkbox-field', $field_name );
		$form_id    = $this->create_form( array( $block ) );

		$this->apply_request(
			array( $field_name => array( 'discount', 'fee' ) ),
			array( $block )
		);

		$resolver = new Trusted_Price_Resolver( $form_id );

		$this->assertSame( 5.0, $resolver->resolve( $field_name ) );
	}

	public function testDynamicOptionsWithoutCalculateAreRejected(): void {
		$field_name = 'dynamic_no_calculate_price';
		$post_id    = self::factory()->post->create( array( 'post_title' => 'Priced option' ) );

		$block = $this->option_block(
			'jet-forms/select-field',
			$field_name,
			array(
				'field_options_from'      => 'posts',
				'field_options_post_type' => 'post',
			)
		);
		$form_id = $this->create_form( array( $block ) );

		$this->apply_request( array( $field_name => (string) $post_id ), array( $block ) );

		$this->expectException( Gateway_Exception::class );
		$this->expectExceptionMessage( 'without a calculate value' );

		( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name );
	}

	public function testMetaOptionsAreRejectedWithoutTrustedPostContext(): void {
		$field_name = 'meta_options_price';
		$block      = $this->option_block(
			'jet-forms/select-field',
			$field_name,
			array(
				'field_options_from' => 'meta_field',
				'field_options_key'  => 'secure_price_options',
			)
		);
		$form_id = $this->create_form( array( $block ) );
		$this->apply_request( array( $field_name => '25' ), array( $block ) );

		$this->expectException( Gateway_Exception::class );
		$this->expectExceptionMessage( 'depend on unsigned post context' );

		( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name );
	}

	public function testCalculatedFieldUsesJavascriptBitwiseXorSemantics(): void {
		$form_id = $this->create_form(
			array( $this->calculated_block( 'xor_price', '2 ^ 3', 2 ) )
		);

		$this->assertSame(
			1.0,
			( new Trusted_Price_Resolver( $form_id ) )->resolve( 'xor_price' )
		);
	}

	public function testCalculatedFieldPreservesExponentiationOperator(): void {
		$form_id = $this->create_form(
			array( $this->calculated_block( 'power_price', '2 ** 3', 2 ) )
		);

		$this->assertSame(
			8.0,
			( new Trusted_Price_Resolver( $form_id ) )->resolve( 'power_price' )
		);
	}

	public function testCalculatedFieldUsesJavascriptXorPrecedenceAndInt32Conversion(): void {
		$cases = array(
			'xor_precedence' => array( '1 === 1 ^ 3', 2.0 ),
			'xor_fraction'   => array( '5.9 ^ 3.2', 6.0 ),
			'xor_uint32'     => array( '4294967295 ^ 0', -1.0 ),
		);

		foreach ( $cases as $field_name => list( $formula, $expected ) ) {
			$form_id = $this->create_form(
				array( $this->calculated_block( $field_name, $formula, 2 ) )
			);

			$this->assertSame(
				$expected,
				( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name )
			);
		}
	}

	public function testHiddenPriceFallbackIgnoresRequestPoisoning(): void {
		$field_name = 'request_poisoned_price';
		$block      = $this->block(
			'jet-forms/hidden-field',
			array(
				'name'               => $field_name,
				'render'             => false,
				'field_value'        => 'user_meta',
				'hidden_value_field' => 'missing_price',
				'default'            => '25',
			)
		);
		$form_id = $this->create_form( array( $block ) );

		// If the resolver ever reads the submission for this hidden field, the
		// tampered request would override the saved literal default.
		$_POST[ $field_name ]    = '0.01';
		$_GET[ $field_name ]     = '0.01';
		$_REQUEST[ $field_name ] = '0.01';

		$this->assertSame(
			25.0,
			( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name )
		);
	}

	private function expectInvalidSelection(
		string $block_name,
		string $field_name,
		array $submitted,
		array $attributes = array()
	): void {
		$block   = $this->option_block( $block_name, $field_name, $attributes );
		$form_id = $this->create_form( array( $block ) );

		$this->apply_request(
			array( $field_name => $submitted ),
			array( $block )
		);

		$this->expectException( Gateway_Exception::class );

		( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name );
	}

	private function expectInvalidScalarSelection(
		string $block_name,
		string $field_name,
		array $submitted
	): void {
		$block   = $this->option_block( $block_name, $field_name );
		$form_id = $this->create_form( array( $block ) );

		$this->apply_request(
			array( $field_name => $submitted ),
			array( $block )
		);

		$this->assertContains( 'invalid_value', jet_fb_context()->get_errors( $field_name ) );
		$this->assertSame( '', jet_fb_context()->get_value( $field_name ) );
		$this->assertSame( 0.0, ( new Trusted_Price_Resolver( $form_id ) )->resolve( $field_name ) );
	}

	private function option_block( string $block_name, string $field_name, array $attributes = array() ): array {
		return $this->block(
			$block_name,
			array_merge(
				array(
					'name'               => $field_name,
					'field_options_from' => 'manual_input',
					'field_options'      => array(
						array(
							'label'     => 'Discount',
							'value'     => 'discount',
							'calculate' => -5,
						),
						array(
							'label'     => 'Fee',
							'value'     => 'fee',
							'calculate' => 10,
						),
					),
				),
				$attributes
			)
		);
	}

	private function create_form( array $blocks ): int {
		return (int) wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Trusted price resolver test',
				'post_content' => wp_slash( serialize_blocks( $blocks ) ),
			)
		);
	}

	private function apply_request( array $request, array $blocks ): void {
		jet_fb_context()
			->set_request( $request )
			->apply( $blocks );
	}

	private function calculated_block( string $name, string $formula, int $precision ): array {
		return $this->block(
			'jet-forms/calculated-field',
			array(
				'name'         => $name,
				'calc_formula' => $formula,
				'precision'    => $precision,
			)
		);
	}

	private function hidden_block( string $name, string $value ): array {
		return $this->block(
			'jet-forms/hidden-field',
			array(
				'name'         => $name,
				'render'       => false,
				'field_value'  => 'manual_input',
				'hidden_value' => $value,
				'default'      => '',
			)
		);
	}

	private function block( string $block_name, array $attributes ): array {
		return array(
			'blockName'    => $block_name,
			'attrs'        => $attributes,
			'innerBlocks'  => array(),
			'innerHTML'    => '',
			'innerContent' => array(),
		);
	}
}
