<?php

namespace  JFB_Tests\Wpunit\Modules\BlockParsers;

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Request\Parser_Context;

class ParserContextTest extends \Codeception\TestCase\WPTestCase {
	/**
	 * @var \WpunitTester
	 */
	protected $tester;

	/** @var Parser_Context */
	protected $context;

	public function setUp(): void {
		// Before...
		parent::setUp();

		$blocks_path = jet_form_builder()->plugin_dir( 'tests/_data/parser-context-test-form.html' );
		$blocks_html = file_get_contents( $blocks_path );

		$request_path = jet_form_builder()->plugin_dir( 'tests/_data/parser_context_test_request.json' );
		$request      = Tools::decode_json( file_get_contents( $request_path ) );

		$this->context = new Parser_Context();
		$this->context->set_request( $request );
		$this->context->apply( parse_blocks( $blocks_html ) );
	}

	public function tearDown(): void {
		// Your tear down methods here.

		// Then...
		parent::tearDown();
	}

	// Tests
	public function testIsFilledCoreValues() {
		$states   = $this->context->get_value( '_jfb_current_render_states' );
		$form_id  = $this->context->get_value( '_jet_engine_booking_form_id' );
		$referrer = $this->context->get_value( '_jet_engine_refer' );
		$port_id  = $this->context->get_value( '__queried_post_id' );

		$this->assertEquals( array( 'DEFAULT.STATE' ), $states );
		$this->assertEquals( 77, (int) $form_id );
		$this->assertEquals( 'http://dev.loc.local', $referrer );
		$this->assertEquals( 78, (int) $port_id );
	}

	public function testEmailCorrectValue() {
		$email   = $this->context->get_value( 'email_correct' );
		$email_0 = $this->context->get_value( array( 'repeater', 0, 'email_correct' ) );
		$email_1 = $this->context->get_value( array( 'repeater', 1, 'email_correct' ) );

		$this->assertEquals( 'contact@gmail.com', $email );
		$this->assertEquals( 'contact2@gmail.com', $email_0 );
		$this->assertEquals( 'contact3@gmail.com', $email_1 );
	}

	public function testEmailNotCorrectValue() {
		$email   = $this->context->get_value( 'email_not_correct' );
		$email_0 = $this->context->get_value( array( 'repeater', 0, 'email_not_correct' ) );
		$email_1 = $this->context->get_value( array( 'repeater', 1, 'email_not_correct' ) );

		$this->assertEquals( 'qqq', $email );
		$this->assertEquals( 'eee', $email_0 );
		$this->assertEquals( 'rrr', $email_1 );
	}

	public function testNotCorrectEmailHasErrors() {
		$email_errors   = $this->context->get_errors( 'email_not_correct' );
		$email_0_errors = $this->context->get_errors( array( 'repeater', 0, 'email_not_correct' ) );
		$email_1_errors = $this->context->get_errors( array( 'repeater', 1, 'email_not_correct' ) );

		$this->assertEquals(
			array( 'invalid_email' ),
			$email_errors
		);

		$this->assertEquals(
			array( 'invalid_email' ),
			$email_0_errors
		);

		$this->assertEquals(
			array( 'invalid_email' ),
			$email_1_errors
		);
	}

	public function testCorrectEmailHasNotErrors() {
		$email_errors   = $this->context->get_errors( 'email_correct' );
		$email_0_errors = $this->context->get_errors( array( 'repeater', 0, 'email_correct' ) );
		$email_1_errors = $this->context->get_errors( array( 'repeater', 1, 'email_correct' ) );

		$this->assertEquals(
			array(),
			$email_errors
		);

		$this->assertEquals(
			array(),
			$email_0_errors
		);

		$this->assertEquals(
			array(),
			$email_1_errors
		);
	}

	public function testSingleChoiceValue() {
		$choice   = $this->context->get_value( 'advanced_choices_single' );
		$choice_0 = $this->context->get_value( array( 'repeater', 0, 'advanced_choices_single' ) );
		$choice_1 = $this->context->get_value( array( 'repeater', 1, 'advanced_choices_single' ) );

		$this->assertEquals( 'Book Name #1', $choice );
		$this->assertEquals( 'Book Name #2', $choice_0 );
		$this->assertEquals( 'Book Name #3', $choice_1 );
	}

	public function testMultipleChoiceValue() {
		$choice   = $this->context->get_value( 'advanced_choices_multiple' );
		$choice_0 = $this->context->get_value( array( 'repeater', 0, 'advanced_choices_multiple' ) );
		$choice_1 = $this->context->get_value( array( 'repeater', 1, 'advanced_choices_multiple' ) );

		$this->assertEquals( array( 'Book Name #1' ), $choice );
		$this->assertEquals( array( 'Book Name #2' ), $choice_0 );
		$this->assertEquals( array( 'Book Name #1', 'Book Name #3' ), $choice_1 );
	}

	public function testMultipleCheckboxValue() {
		$choice   = $this->context->get_value( 'checkbox_single_multiple' );
		$choice_0 = $this->context->get_value( array( 'repeater', 0, 'checkbox_single_multiple' ) );
		$choice_1 = $this->context->get_value( array( 'repeater', 1, 'checkbox_single_multiple' ) );

		$this->assertEquals( array( 'one_value' ), $choice );
		$this->assertEquals( array( 'second_value' ), $choice_0 );
		$this->assertEquals( array( 'one_value', 'third_value' ), $choice_1 );
	}

	public function testDateTimeValues() {
		$date     = $this->context->get_value( 'date' );
		$datetime = $this->context->get_value( 'datetime' );

		$date_0     = $this->context->get_value( array( 'repeater', 0, 'date' ) );
		$datetime_0 = $this->context->get_value( array( 'repeater', 0, 'datetime' ) );

		$date_1     = $this->context->get_value( array( 'repeater', 1, 'date' ) );
		$datetime_1 = $this->context->get_value( array( 'repeater', 1, 'datetime' ) );

		$this->assertEquals( strtotime( '2023-07-28' ), $date );
		$this->assertEquals( strtotime( '2023-07-28T16:41' ), $datetime );

		$this->assertEquals( strtotime( '2023-07-21' ), $date_0 );
		$this->assertEquals( strtotime( '2023-07-21T16:43' ), $datetime_0 );

		$this->assertEquals( strtotime( '2023-07-25' ), $date_1 );
		$this->assertEquals( strtotime( '2023-07-25T16:42' ), $datetime_1 );
	}
}
