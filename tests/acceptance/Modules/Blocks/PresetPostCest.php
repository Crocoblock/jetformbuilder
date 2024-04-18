<?php
namespace Modules\Blocks;

class PresetPostCest
{
    public function _before(\AcceptanceTester $I)
    {
    	$I->loginAsAdmin();
	    // See block page
	    $I->amOnPage( '/?p=9&post_id=14' );
    }

    // tests
    public function trySeePlainPreset(\AcceptanceTester $I)
    {
	    $I->seeInFormFields('form[data-form-id="5"]', [
		    'text_field' => 'Source post 1',
		    'checkbox_categories[]' => array( 6, 8 ),
		    'choices_multiple[]' => array( 6, 8 ),
		    'radio_post_id_s' => 14,
		    'choices_single' => 14
	    ]);
    }

	public function trySeeRepeaterPreset(\AcceptanceTester $I)
	{
		$I->seeInFormFields('form[data-form-id="5"]', [
			// first row
			'repeater_options[0][checkbox_categories][]' => array( 7, 8 ),
			'repeater_options[0][choices_multiple][]' => array( 5, 7 ),
			'repeater_options[0][radio_post_id_s]' => 6,
			'repeater_options[0][choices_single]' => 7,
			// second row
			'repeater_options[1][checkbox_categories][]' => array( 6, 9 ),
			'repeater_options[1][choices_multiple][]' => array( 8, 9 ),
			'repeater_options[1][radio_post_id_s]' => 8,
			'repeater_options[1][choices_single]' => 5,
		]);
	}
}
