<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Request\Parser_Context;
use JFB_Modules\Advanced_Choices\Block_Parsers\Choices_Field_Parser;
use JFB_Modules\Block_Parsers\Fields\Default_Parser;
use JFB_Modules\Block_Parsers\Fields\Media_Field_Parser;
use JFB_Modules\Block_Parsers\Fields\Repeater_Field_Parser;
use JFB_Modules\Block_Parsers\Fields\Text_Field_Parser;
use JFB_Modules\Validation\Module;
use JFB_Modules\Validation\Ssr\Is_Field_Value_Unique;

class ValidationPipelineTest extends \Codeception\TestCase\WPTestCase {

	/**
	 * @dataProvider zeroLikeValuesProvider
	 *
	 * @param mixed $value
	 */
	public function testAdvancedRulesRunForZeroLikeValues( $value ): void {
		$parser = new Text_Field_Parser();
		$parser->set_name( 'zero_value' );
		$parser->set_type( 'text-field' );
		$parser->set_context(
			$this->make_context(
				array(
					'zero_value' => $value,
				)
			)
		);
		$parser->set_settings(
			array(
				'validation' => array(
					'type'  => Module::FORMAT_ADVANCED,
					'rules' => array(
						array(
							'type'  => 'equal',
							'value' => 'expected-non-zero',
						),
					),
				),
			)
		);
		$parser->update_request();

		( new Module() )->validate_block( $parser );

		$this->assertSame( $value, $parser->get_value() );
		$this->assertContains( 'rule:equal', $parser->get_errors() );
	}

	public function zeroLikeValuesProvider(): array {
		return array(
			'integer zero' => array( 0 ),
			'string zero'  => array( '0' ),
		);
	}

	/**
	 * @dataProvider scalarParserProvider
	 *
	 * @param mixed $parser
	 */
	public function testScalarParsersRejectArrayPayloads( $parser ): void {
		$parser->set_name( 'scalar_field' );
		$parser->set_context(
			$this->make_context(
				array(
					'scalar_field' => array( 'unexpected' => 'array' ),
				)
			)
		);
		$parser->update_request();

		$this->assertContains( 'invalid_value', $parser->get_errors() );
		$this->assertSame( '', $parser->get_value() );
	}

	public function scalarParserProvider(): array {
		$number = new Default_Parser();
		$number->set_type( 'number-field' );

		$text = new Text_Field_Parser();
		$text->set_type( 'text-field' );

		$single_choice = new Choices_Field_Parser();
		$single_choice->set_type( 'choices-field' );
		$single_choice->set_settings( array( 'allow_multiple' => false ) );

		return array(
			'default scalar number' => array( $number ),
			'text field'            => array( $text ),
			'single choice field'   => array( $single_choice ),
		);
	}

	public function testKnownArrayParsersAcceptArrayPayloads(): void {
		$checkbox = new Default_Parser();
		$checkbox->set_name( 'checkbox_field' );
		$checkbox->set_type( 'checkbox-field' );
		$checkbox->set_context(
			$this->make_context(
				array(
					'checkbox_field' => array( 'one_value', 'second_value' ),
				)
			)
		);
		$checkbox->update_request();

		$multiple_select = new Default_Parser();
		$multiple_select->set_name( 'multiple_select_field' );
		$multiple_select->set_type( 'select-field' );
		$multiple_select->set_settings( array( 'multiple' => true ) );
		$multiple_select->set_context(
			$this->make_context(
				array(
					'multiple_select_field' => array( 'one_value', 'second_value' ),
				)
			)
		);
		$multiple_select->update_request();

		$multiple_choice = new Choices_Field_Parser();
		$multiple_choice->set_name( 'multiple_choice_field' );
		$multiple_choice->set_type( 'choices-field' );
		$multiple_choice->set_settings( array( 'allow_multiple' => true ) );
		$multiple_choice->set_context(
			$this->make_context(
				array(
					'multiple_choice_field' => array( 'Book Name #1', 'Book Name #2' ),
				)
			)
		);
		$multiple_choice->update_request();

		$media = new Media_Field_Parser();
		$media->set_name( 'media_field' );
		$media->set_type( 'media-field' );
		$media->set_context(
			$this->make_context(
				array(
					'media_field' => array( 15, 29 ),
				)
			)
		);
		$media->update_request();

		$repeater_value = array( array( 'field' => 'value' ) );
		$repeater = new Repeater_Field_Parser();
		$repeater->set_type( 'repeater-field' );
		$repeater->set_value( $repeater_value );

		$this->assertSame( array(), $checkbox->get_errors() );
		$this->assertSame( array( 'one_value', 'second_value' ), $checkbox->get_value() );
		$this->assertSame( array(), $multiple_select->get_errors() );
		$this->assertSame( array( 'one_value', 'second_value' ), $multiple_select->get_value() );
		$this->assertSame( array(), $multiple_choice->get_errors() );
		$this->assertSame( array( 'Book Name #1', 'Book Name #2' ), $multiple_choice->get_value() );
		$this->assertSame( array(), $media->get_errors() );
		$this->assertSame( array( 15, 29 ), $media->get_value() );
		$this->assertSame( array(), $repeater->get_errors() );
		$this->assertSame( $repeater_value, $repeater->get_value() );
	}

	public function testSsrUniqueCallbackUsesScopedRepeaterFieldName(): void {
		$form_id   = $this->factory()->post->create( array( 'post_type' => 'jet-form-builder' ) );
		$record_id = $this->insert_success_record( $form_id );

		$this->insert_record_field(
			$record_id,
			'repeater',
			wp_json_encode(
				array(
					array(
						'email' => 'duplicate@example.com',
					),
					array(
						'email' => 'other@example.com',
					),
				)
			),
			'repeater-field',
			wp_json_encode( array( 'is_encoded' => true ) )
		);

		$callback = new Is_Field_Value_Unique();
		$context  = $this->make_context(
			array(
				jet_fb_handler()->form_key => $form_id,
				'_jfb_validation_path'     => array( 'repeater', '0', 'email' ),
			)
		);

		$this->assertFalse( $callback->is_valid( 'duplicate@example.com', $context ) );
		$this->assertTrue( $callback->is_valid( 'unique@example.com', $context ) );
	}

	public function testSsrUniqueCallbackRejectsRepeaterDuplicatesAcrossRowIndexes(): void {
		$form_id   = $this->factory()->post->create( array( 'post_type' => 'jet-form-builder' ) );
		$record_id = $this->insert_success_record( $form_id );

		$this->insert_record_field(
			$record_id,
			'repeater',
			wp_json_encode(
				array(
					array(
						'email' => 'row-zero@example.com',
					),
					array(
						'email' => 'duplicate@example.com',
					),
				)
			),
			'repeater-field',
			wp_json_encode( array( 'is_encoded' => true ) )
		);

		$callback = new Is_Field_Value_Unique();
		$context  = $this->make_context(
			array(
				jet_fb_handler()->form_key => $form_id,
				'_jfb_validation_path'     => array( 'repeater', '0', 'email' ),
			)
		);

		$this->assertFalse( $callback->is_valid( 'duplicate@example.com', $context ) );
		$this->assertTrue( $callback->is_valid( 'unique@example.com', $context ) );
	}

	public function testSsrUniqueCallbackKeepsTopLevelFieldLookup(): void {
		$form_id   = $this->factory()->post->create( array( 'post_type' => 'jet-form-builder' ) );
		$record_id = $this->insert_success_record( $form_id );

		$this->insert_record_field( $record_id, 'email', 'duplicate@example.com' );

		$callback = new Is_Field_Value_Unique();
		$context  = $this->make_context(
			array(
				jet_fb_handler()->form_key => $form_id,
				'_jfb_validation_path'     => 'email',
			)
		);

		$this->assertFalse( $callback->is_valid( 'duplicate@example.com', $context ) );
		$this->assertTrue( $callback->is_valid( 'unique@example.com', $context ) );
	}

	private function make_context( array $request ): Parser_Context {
		return ( new Parser_Context() )->set_request( $request );
	}

	private function insert_success_record( int $form_id ): int {
		global $wpdb;

		$inserted = $wpdb->insert(
			$wpdb->prefix . 'jet_fb_records',
			array(
				'form_id'           => $form_id,
				'user_id'           => 0,
				'from_content_id'   => 0,
				'from_content_type' => '',
				'status'            => 'success',
				'submit_type'       => 'ajax',
			)
		);

		$this->assertNotFalse( $inserted );

		return (int) $wpdb->insert_id;
	}

	private function insert_record_field(
		int $record_id,
		string $field_name,
		string $field_value,
		string $field_type = 'text-field',
		string $field_attrs = '{}'
	): void {
		global $wpdb;

		$inserted = $wpdb->insert(
			$wpdb->prefix . 'jet_fb_records_fields',
			array(
				'record_id'   => $record_id,
				'field_name'  => $field_name,
				'field_value' => $field_value,
				'field_type'  => $field_type,
				'field_attrs' => $field_attrs,
			)
		);

		$this->assertNotFalse( $inserted );
	}
}
