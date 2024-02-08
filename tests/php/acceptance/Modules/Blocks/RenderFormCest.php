<?php
namespace Modules\Blocks;

class RenderFormCest
{
    public function _before(\AcceptanceTester $I)
    {
    }

	// tests
	public function trySeeFormByShortcode(\AcceptanceTester $I)
	{
		// See shortcode page
		$I->amOnPage( '/?p=7' );
		$I->seeElement( '.jet-fb-form-block', array( 'data-is-block' => 'jet-forms/form-block' ) );
		$I->seeElement( '.jet-fb-form-block form.jet-form-builder' );
	}

	public function trySeeFormByBlock(\AcceptanceTester $I)
	{
		// See block page
		$I->amOnPage( '/?p=9' );
		$I->seeElement( '.jet-fb-form-block', array( 'data-is-block' => 'jet-forms/form-block' ) );
		$I->seeElement( '.jet-fb-form-block form.jet-form-builder' );

		$I->seeElement(
			'input.jet-form-builder__field.text-field',
			array(
				'type' => 'text',
				'name' => 'text_field'
			)
		);

		$I->see( 'Text', '.jet-form-builder__label-text' );
		$I->see( 'text description', '.jet-form-builder__desc small' );
	}


}
