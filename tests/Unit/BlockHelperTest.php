<?php


namespace Tests\Unit;

use Jet_Form_Builder\Blocks\Block_Helper;
use Tests\Support\UnitTester;

class BlockHelperTest extends \Codeception\Test\Unit {

	protected UnitTester $tester;

	public function testGetAttrsFromBlock() {
		$blocks = array(
			array(
				'blockName'   => 'core/column',
				'attrs'       => array(),
				'innerBlocks' => array(
					array(
						'blockName'   => 'core/group',
						'innerBlocks' => array(
							array(
								'blockName' => 'core/some-block',
								'attrs'      => array(
									'name' => 'find_me',
								)
							)
						)
					),
					array(
						'blockName'   => 'core/group',
						'innerBlocks' => array(
							array(
								'blockName' => 'jet-forms/some-field',
								'attrs'      => array(
									'name' => 'find_me',
								)
							)
						)
					)
				),
			)
		);

		$block = Block_Helper::find_block_by_name('find_me', $blocks );
		$not_block = Block_Helper::find_block_by_name('not_find_me', $blocks );

		$this->assertIsArray( $block );
		$this->assertIsArray( $not_block );

		$this->assertArrayHasKey( 'attrs', $block );
		$this->assertArrayHasKey( 'name', $block['attrs'] );
		$this->assertEquals( 'find_me', $block['attrs']['name'] );
		$this->assertEquals( 'jet-forms/some-field', $block['blockName'] );
	}
}
