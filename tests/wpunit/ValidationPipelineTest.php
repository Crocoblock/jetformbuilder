<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Request\Parser_Context;
use JFB_Modules\Advanced_Choices\Block_Parsers\Choices_Field_Parser;
use JFB_Modules\Block_Parsers\Fields\Default_Parser;
use JFB_Modules\Block_Parsers\Fields\Media_Field_Parser;
use JFB_Modules\Block_Parsers\Fields\Repeater_Field_Parser;
use JFB_Modules\Block_Parsers\Fields\Text_Field_Parser;
use JFB_Modules\Validation\Module;
use JFB_Modules\Validation\Handlers\Validation_Handler;
use JFB_Modules\Validation\Rest_Api\Rest_Validation_Endpoint;
use JFB_Modules\Validation\Ssr\Base_Validation_Callback;
use JFB_Modules\Validation\Ssr\Is_Field_Value_Unique;

class ValidationPipelineTest extends \Codeception\TestCase\WPTestCase {

	public function setUp(): void {
		parent::setUp();

		$this->create_record_tables();
	}

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

	public function testNormalSubmissionUsesScopedRepeaterPathWithoutValidationPath(): void {
		$form_id   = $this->create_form( $this->single_repeater_form() );
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

		$context = $this->run_submission_validation(
			$form_id,
			$this->single_repeater_form(),
			array(
				'repeater' => array(
					array( 'email' => 'duplicate@example.com' ),
				),
			),
			array( 'repeater', 'email' )
		);

		$this->assertContains(
			'rule:ssr:is_field_value_unique',
			$context->get_errors( array( 'repeater', 0, 'email' ) )
		);

		$context = $this->run_submission_validation(
			$form_id,
			$this->single_repeater_form(),
			array(
				'repeater' => array(
					array( 'email' => 'unique@example.com' ),
				),
			),
			array( 'repeater', 'email' )
		);

		$this->assertSame( array(), $context->get_errors( array( 'repeater', 0, 'email' ) ) );
	}

	public function testNormalSubmissionIgnoresForgedValidationPath(): void {
		$form_id   = $this->create_form( $this->single_repeater_form() );
		$record_id = $this->insert_success_record( $form_id );

		$this->insert_record_field(
			$record_id,
			'repeater',
			wp_json_encode(
				array(
					array(
						'email' => 'duplicate@example.com',
					),
				)
			),
			'repeater-field',
			wp_json_encode( array( 'is_encoded' => true ) )
		);

		$context = $this->run_submission_validation(
			$form_id,
			$this->single_repeater_form(),
			array(
				'_jfb_validation_path' => array( 'unrelated_field' ),
				'repeater'             => array(
					array( 'email' => 'duplicate@example.com' ),
				),
			),
			array( 'repeater', 'email' )
		);

		$this->assertContains(
			'rule:ssr:is_field_value_unique',
			$context->get_errors( array( 'repeater', 0, 'email' ) )
		);
	}

	public function testParserAwareCallbackRejectsNestedRepeaterDuplicatesAcrossIndexes(): void {
		$form_id   = $this->create_form();
		$record_id = $this->insert_success_record( $form_id );

		$this->insert_record_field(
			$record_id,
			'outer',
			wp_json_encode(
				array(
					array(
						'inner'   => array(
							array( 'email' => 'other@example.com' ),
							array( 'email' => 'duplicate@example.com' ),
						),
						'sibling' => array(
							array( 'email' => 'sibling@example.com' ),
						),
					),
				)
			),
			'repeater-field',
			wp_json_encode( array( 'is_encoded' => true ) )
		);

		$callback = new Is_Field_Value_Unique();
		$parser   = $this->make_nested_parser( 'duplicate@example.com' );

		jet_fb_handler()->set_form_id( $form_id );

		$this->assertFalse( $callback->is_valid_with_parser( $parser ) );

		$parser->set_value( 'sibling@example.com' );
		$this->assertTrue( $callback->is_valid_with_parser( $parser ) );

		$parser->set_value( 'unique@example.com' );
		$this->assertTrue( $callback->is_valid_with_parser( $parser ) );
	}

	public function testParserAwareCallbackKeepsTopLevelLookup(): void {
		$form_id   = $this->create_form();
		$record_id = $this->insert_success_record( $form_id );
		$parser    = new Text_Field_Parser();

		$this->insert_record_field( $record_id, 'email', 'duplicate@example.com' );

		$parser->set_name( 'email' );
		$parser->set_context( $this->make_context( array() ) );
		$parser->set_value( 'duplicate@example.com' );
		jet_fb_handler()->set_form_id( $form_id );

		$callback = new Is_Field_Value_Unique();

		$this->assertFalse( $callback->is_valid_with_parser( $parser ) );

		$parser->set_value( 'unique@example.com' );
		$this->assertTrue( $callback->is_valid_with_parser( $parser ) );
	}

	public function testParserAwareCallbackSkipsMalformedRowsAndFailedRecords(): void {
		$form_id          = $this->create_form();
		$malformed_record = $this->insert_success_record( $form_id );
		$failed_record    = $this->insert_record( $form_id, 'failed' );
		$valid_record     = $this->insert_success_record( $form_id );

		$this->insert_record_field( $malformed_record, 'repeater', '{invalid-json', 'repeater-field' );
		$this->insert_record_field(
			$malformed_record,
			'repeater',
			wp_json_encode( array( array( 'email' => 'non-encoded@example.com' ) ) ),
			'repeater-field'
		);
		$this->insert_record_field(
			$failed_record,
			'repeater',
			wp_json_encode( array( array( 'email' => 'failed@example.com' ) ) ),
			'repeater-field',
			wp_json_encode( array( 'is_encoded' => true ) )
		);
		$this->insert_record_field(
			$valid_record,
			'repeater',
			wp_json_encode( array( array( 'email' => 'duplicate@example.com' ) ) ),
			'repeater-field',
			wp_json_encode( array( 'is_encoded' => true ) )
		);

		$callback = new Is_Field_Value_Unique();
		$parser   = $this->make_repeater_parser( 'duplicate@example.com' );

		jet_fb_handler()->set_form_id( $form_id );

		$this->assertFalse( $callback->is_valid_with_parser( $parser ) );

		$parser->set_value( 'failed@example.com' );
		$this->assertTrue( $callback->is_valid_with_parser( $parser ) );
	}

	public function testParserAwareCallbackFailsClosedWithoutFieldOrFormIdentity(): void {
		$callback = new Is_Field_Value_Unique();
		$parser   = new Text_Field_Parser();

		$parser->set_name( '' );
		$parser->set_context( $this->make_context( array() ) );
		$parser->set_value( 'value' );

		$form_id = $this->create_form();
		jet_fb_handler()->set_form_id( $form_id );

		$this->assertFalse( $callback->is_valid_with_parser( $parser ) );

		$parser->set_name( 'field' );
		jet_fb_handler()->set_form_id( 0 );

		$this->assertFalse( $callback->is_valid_with_parser( $parser ) );
	}

	public function testLegacyCallbackRunsThroughParserAwareEntryPoint(): void {
		$callback = new class() extends Base_Validation_Callback {
			public function get_id(): string {
				return 'legacy_callback';
			}

			public function get_label(): string {
				return 'Legacy callback';
			}

			public function is_valid( $value, Parser_Context $context ): bool {
				return 'expected' === $value && 'context' === $context->get_request( 'marker' );
			}
		};
		$parser   = new Text_Field_Parser();

		$parser->set_name( 'field' );
		$parser->set_context( $this->make_context( array( 'marker' => 'context' ) ) );
		$parser->set_value( 'expected' );

		$this->assertTrue( $callback->is_valid_with_parser( $parser ) );
	}

	public function testLiveValidationUsesResolvedParserAndRejectsInvalidSignature(): void {
		$form_id   = $this->create_form( $this->single_repeater_form() );
		$record_id = $this->insert_success_record( $form_id );

		$this->insert_record_field(
			$record_id,
			'repeater',
			wp_json_encode( array( array( 'email' => 'duplicate@example.com' ) ) ),
			'repeater-field',
			wp_json_encode( array( 'is_encoded' => true ) )
		);

		$body = array(
			jet_fb_handler()->form_key                 => $form_id,
			'repeater'                                 => array(
				array( 'email' => 'duplicate@example.com' ),
			),
			Rest_Validation_Endpoint::FIELD_KEY        => array( 'repeater', '0', 'email' ),
			Rest_Validation_Endpoint::RULE_INDEX_KEY   => 0,
			Rest_Validation_Endpoint::SIGNATURE_KEY    => Rest_Validation_Endpoint::generate_signature(
				$form_id,
				array( 'repeater', 'email' ),
				0
			),
		);

		$result = Validation_Handler::validate( $body );

		$this->assertFalse( $result['result'] );

		$body[ Rest_Validation_Endpoint::SIGNATURE_KEY ] = 'tampered';
		$result = Validation_Handler::validate( $body );

		$this->assertFalse( $result['result'] );
		$this->assertSame( 'Invalid security signature', $result['message'] );
	}

	private function make_context( array $request ): Parser_Context {
		return ( new Parser_Context() )->set_request( $request );
	}

	private function create_record_tables(): void {
		global $wpdb;

		$charset_collate = $wpdb->get_charset_collate();

		// The wpunit bootstrap does not run JetFormBuilder's database installer.
		// phpcs:disable WordPress.DB.DirectDatabaseQuery.SchemaChange, WordPress.DB.DirectDatabaseQuery.DirectQuery
		$wpdb->query(
			"CREATE TABLE IF NOT EXISTS {$wpdb->prefix}jet_fb_records (
				id bigint(20) NOT NULL AUTO_INCREMENT,
				form_id bigint(20) UNSIGNED NOT NULL,
				user_id bigint(20),
				from_content_id bigint(20) NOT NULL,
				from_content_type varchar(20) NOT NULL,
				status varchar(255),
				submit_type varchar(20),
				PRIMARY KEY (id)
			) {$charset_collate}"
		);
		$wpdb->query(
			"CREATE TABLE IF NOT EXISTS {$wpdb->prefix}jet_fb_records_fields (
				id bigint(20) NOT NULL AUTO_INCREMENT,
				record_id bigint(20) NOT NULL,
				field_name varchar(100) NOT NULL,
				field_value longtext,
				field_type varchar(40) NOT NULL,
				field_attrs longtext,
				PRIMARY KEY (id),
				KEY record_id (record_id)
			) {$charset_collate}"
		);
		// phpcs:enable WordPress.DB.DirectDatabaseQuery.SchemaChange, WordPress.DB.DirectDatabaseQuery.DirectQuery
	}

	private function make_repeater_parser( string $value ): Text_Field_Parser {
		$root_context = $this->make_context( array() );
		$repeater     = new Repeater_Field_Parser();
		$row_context  = $this->make_context( array() );
		$parser       = new Text_Field_Parser();

		$repeater->set_name( 'repeater' );
		$repeater->set_context( $root_context );
		$row_context->set_parent( $repeater );
		$row_context->set_index_in_parent( 9 );
		$parser->set_name( 'email' );
		$parser->set_context( $row_context );
		$parser->set_value( $value );

		return $parser;
	}

	private function make_nested_parser( string $value ): Text_Field_Parser {
		$root_context  = $this->make_context( array() );
		$outer         = new Repeater_Field_Parser();
		$outer_context = $this->make_context( array() );
		$inner         = new Repeater_Field_Parser();
		$inner_context = $this->make_context( array() );
		$parser        = new Text_Field_Parser();

		$outer->set_name( 'outer' );
		$outer->set_context( $root_context );
		$outer_context->set_parent( $outer );
		$outer_context->set_index_in_parent( 7 );
		$inner->set_name( 'inner' );
		$inner->set_context( $outer_context );
		$inner_context->set_parent( $inner );
		$inner_context->set_index_in_parent( 11 );
		$parser->set_name( 'email' );
		$parser->set_context( $inner_context );
		$parser->set_value( $value );

		return $parser;
	}

	private function run_submission_validation(
		int $form_id,
		string $markup,
		array $request,
		array $signature_path
	): Parser_Context {
		$previous_post    = $_POST;
		$previous_form_id = jet_fb_handler()->get_form_id();
		$signature        = Rest_Validation_Endpoint::generate_signature( $form_id, $signature_path, 0 );

		$request[ jet_fb_handler()->form_key ] = $form_id;
		$request[ Validation_Handler::MAIN_SIGNATURES_KEY ] = array(
			Validation_Handler::get_signature_key( $signature_path, 0 ) => $signature,
		);

		try {
			$_POST = $request;
			jet_fb_handler()->set_form_id( $form_id );

			$context = $this->make_context( $request );
			$context->apply( parse_blocks( $markup ) );
		} finally {
			$_POST = $previous_post;
			jet_fb_handler()->set_form_id( $previous_form_id );
		}

		return $context;
	}

	private function create_form( string $post_content = '' ): int {
		return $this->factory()->post->create(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_content' => $post_content,
			)
		);
	}

	private function single_repeater_form(): string {
		return '<!-- wp:jet-forms/repeater-field {"name":"repeater"} -->'
			. '<!-- wp:jet-forms/text-field {"name":"email","validation":{"type":"advanced","rules":[{"type":"ssr","value":"is_field_value_unique","message":"duplicate"}]}} /-->'
			. '<!-- /wp:jet-forms/repeater-field -->';
	}

	private function insert_success_record( int $form_id ): int {
		return $this->insert_record( $form_id, 'success' );
	}

	private function insert_record( int $form_id, string $status ): int {
		global $wpdb;

		$inserted = $wpdb->insert(
			$wpdb->prefix . 'jet_fb_records',
			array(
				'form_id'           => $form_id,
				'user_id'           => 0,
				'from_content_id'   => 0,
				'from_content_type' => '',
				'status'            => $status,
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
