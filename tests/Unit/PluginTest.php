<?php


namespace Tests\Unit;

use Tests\Support\UnitTester;

class PluginTest extends \Codeception\Test\Unit {

	protected UnitTester $tester;

	public function testIssetModules() {
		$this->assertTrue( method_exists( jet_form_builder(), 'get_modules' ) );
	}
}
