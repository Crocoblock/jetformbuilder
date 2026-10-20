<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Blocks\Types\Hidden_Field;
use Jet_Form_Builder\Presets\Preset_Manager;
use JFB_Modules\Blocks_V2\Text_Field\Block_Render as Text_Render;
use JFB_Modules\Blocks_V2\Text_Field\Block_Type as Text_Type;
use JFB_Modules\Option_Field\Blocks\Checkbox\Block_Render as Checkbox_Render;
use JFB_Modules\Option_Field\Blocks\Checkbox\Block_Type as Checkbox_Type;
use JFB_Modules\Option_Field\Blocks\Radio\Block_Render as Radio_Render;
use JFB_Modules\Option_Field\Blocks\Radio\Block_Type as Radio_Type;
use JFB_Modules\Option_Field\Blocks\Select\Block_Render as Select_Render;
use JFB_Modules\Option_Field\Blocks\Select\Block_Type as Select_Type;

/**
 * #20668: a default that comes from a preset source (query var, form record,
 * post/user/term meta) is data and must never reach the frontend calculator,
 * while a default written by the form author keeps working as a formula.
 */
class PresetProvenanceTest extends \Codeception\TestCase\WPTestCase {

	private const PAYLOAD      = 'window.__pwn=1//%a::b%';
	private const JSON_PAYLOAD = '["\'%probe%\'+(window.__pwn=1)+\'x\'"]';

	protected function setUp(): void {
		parent::setUp();

		// Macros are recognised only for known field names.
		jet_form_builder()->regexp->set_field_names( array( 'n1' => 1, 'n2' => 1 ) );
	}

	protected function tearDown(): void {
		$regexp = new \ReflectionProperty( jet_form_builder()->regexp, 'field_names_regexp' );
		$regexp->setAccessible( true );
		$regexp->setValue( jet_form_builder()->regexp, array() );

		$_GET = array();
		remove_all_filters( 'jet-form-builder/preset/source/value' );
		remove_all_filters( 'jet-form-builder/fields/hidden-field/value-cb' );

		parent::tearDown();
	}

	private function query_var_preset( string $key = 'jfb_qv' ): string {
		return wp_json_encode(
			array(
				'jet_preset'        => 1,
				'from'              => 'query_var',
				'current_field_key' => $key,
			)
		);
	}

	private function set_query_var( string $key, string $value ): void {
		$_GET[ $key ] = wp_slash( $value );
	}

	/**
	 * Provenance is set by set_preset(); tests that only render set it directly.
	 */
	private function mark_source( $block_type, bool $value ): void {
		$property = new \ReflectionProperty( \Jet_Form_Builder\Blocks\Types\Base::class, 'default_from_source' );
		$property->setAccessible( true );
		$property->setValue( $block_type, $value );
	}

	// -- Preset_Manager flag ----------------------------------------------------

	public function testFlagIsSetForValueFromSource(): void {
		$this->set_query_var( 'jfb_qv', 'hello' );

		$value = Preset_Manager::instance()->get_field_value(
			array(
				'name'    => 'jfb_qv',
				'default' => $this->query_var_preset(),
			)
		);

		$this->assertSame( 'hello', $value );
		$this->assertTrue( Preset_Manager::instance()->is_last_value_from_source() );
	}

	public function testFlagIsResetForAuthorDefaultAndEmptyName(): void {
		$this->set_query_var( 'jfb_qv', 'hello' );
		$args = array(
			'name'    => 'jfb_qv',
			'default' => $this->query_var_preset(),
		);

		Preset_Manager::instance()->get_field_value( $args );
		$this->assertTrue( Preset_Manager::instance()->is_last_value_from_source() );

		Preset_Manager::instance()->get_field_value(
			array(
				'name'    => 'author',
				'default' => '%n1% + %n2%',
			)
		);
		$this->assertFalse( Preset_Manager::instance()->is_last_value_from_source() );

		Preset_Manager::instance()->get_field_value( $args );
		Preset_Manager::instance()->get_field_value( array() );
		$this->assertFalse( Preset_Manager::instance()->is_last_value_from_source() );
	}

	public function testFlagSurvivesFilterThatResolvesAnotherField(): void {
		// Only sources that read a property run the public value filter.
		wp_set_current_user( $this->factory()->user->create( array( 'user_login' => 'jfb_user' ) ) );

		add_filter(
			'jet-form-builder/preset/source/value',
			static function ( $value ) {
				// Resets the singleton flag to false (author default).
				Preset_Manager::instance()->get_field_value(
					array(
						'name'    => 'other',
						'default' => 'plain',
					)
				);

				return $value;
			}
		);

		$value = Preset_Manager::instance()->get_field_value(
			array(
				'name'    => 'um',
				'default' => wp_json_encode(
					array(
						'jet_preset'         => 1,
						'from'               => 'user',
						'current_field_key'  => 'um',
						'current_field_prop' => 'user_login',
					)
				),
			)
		);

		$this->assertSame( 'jfb_user', $value );
		$this->assertTrue( Preset_Manager::instance()->is_last_value_from_source() );
	}

	// -- Block_Type::set_preset ------------------------------------------------

	public function testSetPresetMarksSourceAndAuthorDefaults(): void {
		$this->set_query_var( 'jfb_qv', self::PAYLOAD );

		$from_source             = new Text_Type();
		$from_source->block_attrs = array(
			'name'    => 'jfb_qv',
			'default' => $this->query_var_preset(),
		);
		$from_source->set_preset();

		$this->assertTrue( $from_source->is_default_from_source() );
		$this->assertSame( self::PAYLOAD, $from_source->block_attrs['default'] );

		$authored             = new Text_Type();
		$authored->block_attrs = array(
			'name'    => 'sum',
			'default' => '%n1% + %n2%',
		);
		$authored->set_preset();

		$this->assertFalse( $authored->is_default_from_source() );
		$this->assertSame( '%n1% + %n2%', $authored->block_attrs['default'] );
	}

	// -- Text-like render ------------------------------------------------------

	private function render_text( Text_Type $block_type ): string {
		$render = new Text_Render( $block_type );

		return $render->render_without_layout(
			null,
			array(
				'name'       => $block_type->block_attrs['name'],
				'class_name' => '',
				'field_type' => 'text',
				'placeholder' => '',
				'default'    => $block_type->block_attrs['default'],
			)
		);
	}

	public function testSourceValueWithMacroIsRenderedAsLiteralValue(): void {
		$block_type             = new Text_Type();
		$block_type->block_attrs = array( 'name' => 'jfb_qv', 'default' => self::PAYLOAD );
		$this->mark_source( $block_type, true );

		$html = $this->render_text( $block_type );

		$this->assertStringNotContainsString( 'data-value', $html );
		$this->assertStringContainsString( 'value="' . esc_attr( self::PAYLOAD ) . '"', $html );
	}

	public function testAuthorFormulaStillGoesToCalculator(): void {
		$block_type             = new Text_Type();
		$block_type->block_attrs = array( 'name' => 'sum', 'default' => '%n1% + %n2%' );
		$this->mark_source( $block_type, false );

		$html = $this->render_text( $block_type );

		$this->assertStringContainsString( 'data-value="%n1% + %n2%"', $html );
	}

	// -- Hidden field ----------------------------------------------------------

	private function hidden( array $attrs ): Hidden_Field {
		$block              = new Hidden_Field();
		$block->block_attrs = array_merge(
			array(
				'name'    => 'hid',
				'type'       => 'hidden-field',
				'class_name' => '',
				'default' => '',
			),
			$attrs
		);
		$block->set_preset();

		return $block;
	}

	public function testHiddenSourceValueWithMacroIsLiteral(): void {
		$this->set_query_var( 'hq', self::PAYLOAD );

		$block = $this->hidden(
			array(
				'field_value'   => 'query_var',
				'query_var_key' => 'hq',
			)
		);

		$this->assertTrue( $block->is_default_from_source() );
		$this->assertStringNotContainsString( 'data-value', $block->get_block_renderer() );
	}

	public function testHiddenManualInputFormulaIsStillCalculated(): void {
		$block = $this->hidden(
			array(
				'field_value'  => 'manual_input',
				'hidden_value' => '%n1% + 1',
			)
		);

		$this->assertFalse( $block->is_default_from_source() );
		$this->assertStringContainsString( 'data-value="%n1% + 1"', $block->get_block_renderer() );
	}

	public function testHiddenManualInputWinsOverFormLevelSourcePreset(): void {
		$this->set_query_var( 'jfb_qv', 'from-record' );

		$block = $this->hidden(
			array(
				'default'      => $this->query_var_preset(),
				'field_value'  => 'manual_input',
				'hidden_value' => '%n1% + 1',
			)
		);

		// Provenance of the value actually returned, not of the preset it replaced.
		$this->assertFalse( $block->is_default_from_source() );
		$this->assertStringContainsString( 'data-value="%n1% + 1"', $block->get_block_renderer() );
	}

	public function testHiddenEmptyResultKeepsProvenanceOfTheDefault(): void {
		$this->set_query_var( 'jfb_qv', self::PAYLOAD );

		$block = $this->hidden(
			array(
				'name'          => 'jfb_qv',
				'default'       => $this->query_var_preset(),
				'field_value'   => 'query_var',
				'query_var_key' => 'missing_key',
			)
		);

		$this->assertTrue( $block->is_default_from_source() );
		$this->assertStringNotContainsString( 'data-value', $block->get_block_renderer() );
	}

	public function testHiddenCustomCallbackResultIsLiteral(): void {
		add_filter(
			'jet-form-builder/fields/hidden-field/value-cb',
			static function () {
				return static function () {
					return 'window.__pwn=1//%a::b%';
				};
			}
		);

		$block = $this->hidden( array( 'field_value' => 'my_custom_cb' ) );

		$this->assertTrue( $block->is_default_from_source() );
		$this->assertStringNotContainsString( 'data-value', $block->get_block_renderer() );
	}

	// -- Choice fields ---------------------------------------------------------

	private function render_choice( $render_class, $type_class, array $args, bool $from_source ): string {
		$block_type              = new $type_class();
		$block_type->block_attrs = array( 'name' => 'f', 'multiple' => true );
		$this->mark_source( $block_type, $from_source );
		$render = new $render_class( $block_type );

		return $render->render_without_layout(
			null,
			array_merge(
				array(
					'name'          => 'f',
					'class_name'    => '',
					'default'       => '',
					'placeholder'   => '',
					'field_options' => array(
						array( 'value' => 'a', 'label' => 'a' ),
						array( 'value' => 'b', 'label' => 'b' ),
					),
				),
				$args
			)
		);
	}

	public function testChoiceListFromSourceIsMarkedLiteral(): void {
		$lists = array(
			array( self::JSON_PAYLOAD ),
			array( '["a","b"]' ),
			array( 'a', 'b' ),
		);

		foreach ( $lists as $list ) {
			$default = implode( ',', $list );
			$html    = $this->render_choice( Checkbox_Render::class, Checkbox_Type::class, array( 'default' => $list ), true );
			$this->assertStringContainsString( 'data-default-literal="1"', $html, 'checkbox: ' . $default );

			$html = $this->render_choice(
				Select_Render::class,
				Select_Type::class,
				array( 'default' => $list ),
				true
			);
			$this->assertStringContainsString( 'data-default-literal="1"', $html, 'select: ' . $default );
		}
	}

	public function testChoiceListFromAuthorIsNotLiteral(): void {
		$html = $this->render_choice( Checkbox_Render::class, Checkbox_Type::class, array( 'default' => array( '["a","%a::b%"]' ) ), false );

		$this->assertStringContainsString( 'data-default-val', $html );
		$this->assertStringNotContainsString( 'data-default-literal', $html );

		$html = $this->render_choice( Select_Render::class, Select_Type::class, array( 'default' => '%a::b%' ), false );

		$this->assertStringContainsString( 'data-default-val', $html );
		$this->assertStringNotContainsString( 'data-default-literal', $html );
	}

	public function testPlainSourceValueDoesNotGetLiteralMarker(): void {
		$html = $this->render_choice( Select_Render::class, Select_Type::class, array( 'default' => 'a' ), true );

		$this->assertStringNotContainsString( 'data-default-val', $html );
		$this->assertStringNotContainsString( 'data-default-literal', $html );
	}

	public function testRadioSourceMacroNeverReachesCalculator(): void {
		$html = $this->render_choice( Radio_Render::class, Radio_Type::class, array( 'default' => '%a::b%' ), true );

		$this->assertStringNotContainsString( 'data-default-val', $html );

		$html = $this->render_choice( Radio_Render::class, Radio_Type::class, array( 'default' => '%a::b%' ), false );

		$this->assertStringContainsString( 'data-default-val="%a::b%"', $html );
	}
}
