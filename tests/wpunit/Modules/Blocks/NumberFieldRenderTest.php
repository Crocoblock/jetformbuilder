<?php

namespace JFB_Tests\Wpunit\modules\Blocks;

use Jet_Form_Builder\Blocks\Module;
use Jet_Form_Builder\Blocks\Types\Number_Field;
use Jet_Form_Builder\Exceptions\Repository_Exception;

class NumberFieldRenderTest extends \Codeception\TestCase\WPTestCase {

	/** @var Number_Field */
	protected $number_field;

	/**
	 * @return void
	 * @throws Repository_Exception
	 */
	protected function setUp(): void {
		parent::setUp();

		/** @var Module $blocks */
		$blocks = jet_form_builder()->module( 'blocks' );

		$this->number_field = $blocks->get_field_by_name( 'number-field' );
	}

	// Tests

	/**
	 * @throws Repository_Exception
	 */
	public function testIsSupportZeroAsDefault() {
		$this->number_field->set_block_data(
			array(
				'default' => 0
			)
		);
		$this->number_field->set_preset();

		$this->assertEquals( 0, $this->number_field->block_attrs['default'] );
	}

	/**
	 * @throws Repository_Exception
	 */
	public function testIsSupportZeroAsMin() {
		$this->number_field->set_block_data(
			array(
				'min' => 0
			)
		);

		$this->assertEquals( 0, $this->number_field->block_attrs['min'] );
	}

	/**
	 * @throws Repository_Exception
	 */
	public function testIsSupportZeroAsMax() {
		$this->number_field->set_block_data(
			array(
				'max' => 0
			)
		);

		$this->assertEquals( 0, $this->number_field->block_attrs['max'] );
	}

}
