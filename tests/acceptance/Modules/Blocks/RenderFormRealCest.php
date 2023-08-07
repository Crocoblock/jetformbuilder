<?php
namespace Modules\Blocks;

class RenderFormRealCest
{
    public function _before(\AcceptanceTester $I)
    {
    	$I->loginAsAdmin();
    }

    // tests
    public function tryToTest(\AcceptanceTester $I)
    {
    }
}
