<?php

namespace Modules\Captcha;

class RenderCaptchaCest {
	public function _before( \AcceptanceTester $I ) {
	}

	public function trySeeCaptchaInput( \AcceptanceTester $I ) {
		// See block page
		$I->amOnPage( '/?p=9' );

		$I->seeElement(
			'form.jet-form-builder[data-form-id="5"] input.captcha-token',
			array(
				'type' => 'hidden',
				'name' => '_captcha_token'
			)
		);
	}


	public function trySeeCaptchaInFormWithSubmitInLoop( \AcceptanceTester $I ) {
		$I->amOnPage( '/?p=25' );

		$I->seeNumberOfElements(
			'.post-14 form.jet-form-builder[data-form-id="8"] input.captcha-token',
			1
		);

		$I->seeNumberOfElements(
			'.post-15 form.jet-form-builder[data-form-id="8"] input.captcha-token',
			1
		);

		$I->seeNumberOfElements(
			'.post-16 form.jet-form-builder[data-form-id="8"] input.captcha-token',
			1
		);
	}

	public function trySeeCaptchaInBlankFormInLoop( \AcceptanceTester $I ) {
		$I->amOnPage( '/?p=26' );
		$I->seeInTitle( "Main Page 26" );

		$I->seeNumberOfElements(
			'.post-14 form.jet-form-builder[data-form-id="10"] input.captcha-token',
			1
		);

		$I->seeNumberOfElements(
			'.post-15 form.jet-form-builder[data-form-id="10"] input.captcha-token',
			1
		);

		$I->seeNumberOfElements(
			'.post-16 form.jet-form-builder[data-form-id="10"] input.captcha-token',
			1
		);
	}


}
