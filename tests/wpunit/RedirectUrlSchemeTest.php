<?php

namespace JFB_Tests\Wpunit;

use JFB_Modules\Actions_V2\Redirect_To_Page\Redirect_To_Page_Action;

/**
 * The Redirect To Page URL can be built from field macros or
 * a dynamic preset (visitor data); in AJAX mode the browser assigns it to
 * window.location. Only schemes WordPress allows in links, or the scheme the
 * form author typed, may be used.
 */
class RedirectUrlSchemeTest extends \Codeception\TestCase\WPTestCase {

	private function action( string $template = '%target%' ): Redirect_To_Page_Action {
		$action           = new Redirect_To_Page_Action();
		$action->settings = array(
			'redirect_type' => 'custom_url',
			'redirect_url'  => $template,
		);

		return $action;
	}

	/**
	 * Shared corpus with the JS guard (macroUrl.js), see
	 * tests/_data/url-scheme-corpus.json.
	 */
	public function corpusProvider(): array {
		$corpus = json_decode( (string) file_get_contents( dirname( __DIR__ ) . '/_data/url-scheme-corpus.json' ), true );
		$cases  = array();

		foreach ( $corpus['cases'] as $case ) {
			$cases[ $case['note'] ] = array( $case['url'], $case['allowed'], $case['browser_scheme'] );
		}

		return $cases;
	}

	/**
	 * Blocked: script, data and other schemes a value adds, read the way a
	 * browser reads them ("javascript:1;..." is a scheme, not host:port).
	 * Allowed (backward compatibility): every ordinary redirect.
	 *
	 * @dataProvider corpusProvider
	 */
	public function testCorpus( string $url, bool $allowed, string $browser_scheme ): void {
		$this->assertSame( $allowed, $this->action()->is_allowed_redirect_scheme( $url ), $url );
	}

	/**
	 * Invariant: whatever the browser would run as code is never allowed.
	 *
	 * @dataProvider corpusProvider
	 */
	public function testExecutableBrowserSchemeIsNeverAllowed( string $url, bool $allowed, string $browser_scheme ): void {
		if ( ! in_array( $browser_scheme, array( 'javascript', 'data', 'vbscript' ), true ) ) {
			$this->assertTrue( true );

			return;
		}

		$this->assertFalse( $this->action()->is_allowed_redirect_scheme( $url ), $url );
	}

	/**
	 * Backward compatibility: a host with a port typed by the author into the
	 * setting is still accepted (same scheme as the template).
	 */
	public function testAuthorHostWithPortIsAllowed(): void {
		$action = $this->action( 'localhost:8080/%path%' );

		$this->assertTrue( $action->is_allowed_redirect_scheme( 'localhost:8080/thanks' ) );
		$this->assertFalse( $action->is_allowed_redirect_scheme( 'javascript:1;x' ) );
	}

	/**
	 * Backward compatibility: a scheme the author typed into the setting is
	 * trusted, even when WordPress does not list it.
	 */
	public function testAuthorSchemeIsAllowed(): void {
		$action = $this->action( 'whatsapp://send?phone=%phone%' );

		$this->assertTrue( $action->is_allowed_redirect_scheme( 'whatsapp://send?phone=123' ) );
		$this->assertFalse( $action->is_allowed_redirect_scheme( 'javascript:void(0)' ) );
	}

	/*
	 * Extra schemes come from the core `kses_allowed_protocols` filter. Core
	 * applies it only before `wp_loaded` and caches the list, so it cannot be
	 * exercised from a test that runs after bootstrap; sites register it in a
	 * plugin or theme file, as for any other kses protocol.
	 */

}
