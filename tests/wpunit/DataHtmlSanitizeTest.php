<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Classes\Tools;

/**
 * HTML from site data (a dynamic preset in Label or Description, option
 * labels generated from post meta a visitor wrote) is printed inside the
 * form. The frontend script reads its own data-* attributes, plugin classes and
 * JFB_FIELD macros in the markup as its own instructions, and an unclosed
 * tag would wrap the next fields of the form. Such markup is removed; text,
 * formatting, links and images stay.
 */
class DataHtmlSanitizeTest extends \Codeception\TestCase\WPTestCase {

	private $admin_id;

	protected function setUp(): void {
		parent::setUp();

		$this->admin_id = self::factory()->user->create( array( 'role' => 'administrator' ) );
		add_shortcode( 'jfb_data_html_marker', static function () { return 'DATA-HTML-MARKER-EXECUTED'; } );
	}

	protected function tearDown(): void {
		$_GET = array();
		remove_shortcode( 'jfb_data_html_marker' );
		wp_set_current_user( 0 );

		parent::tearDown();
	}

	private function block( string $name, array $attrs ): string {
		return '<!-- wp:jet-forms/' . $name . ' ' . wp_json_encode( (object) $attrs ) . ' /-->';
	}

	private function preset( string $var ): string {
		return wp_json_encode(
			array(
				'jet_preset'        => 1,
				'from'              => 'query_var',
				'current_field_key' => $var,
				'query_var'         => $var,
			)
		);
	}

	/**
	 * Renders the form as a guest and runs do_shortcode() over it, as core
	 * does for the page.
	 */
	private function render( string $blocks ): string {
		wp_set_current_user( $this->admin_id );

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Data HTML',
				'post_content' => wp_slash( $blocks ),
			)
		);

		wp_set_current_user( 0 );

		return do_shortcode( (string) jet_fb_render_form( array( 'form_id' => $form_id ) ) );
	}

	/**
	 * Counts markup the frontend script would take as its own instruction.
	 */
	private function instructions( string $html ): array {
		$dom = new \DOMDocument();
		libxml_use_internal_errors( true );
		$dom->loadHTML( '<?xml encoding="utf-8"?><div>' . $html . '</div>' );
		libxml_clear_errors();
		$xpath = new \DOMXPath( $dom );

		return array(
			'gadget attributes' => $xpath->query( '//*[@data-jfb-conditional or @data-jfb-macro or @data-formula or @data-validation-rules or @data-validation-type or @data-value or @data-dynamic-value or @data-switch-on]' )->length,
			'calculated wrapper' => $xpath->query( '//*[contains(@class,"jet-form-builder__calculated-field")]' )->length,
			'row wrapper' => $xpath->query( '//*[contains(concat(" ",@class," ")," jet-form-builder-row ")]' )->length,
			'field macro attributes' => $xpath->query( '//*[contains(@href,"JFB_FIELD::") or contains(@src,"JFB_FIELD::") or contains(@alt,"JFB_FIELD::") or contains(@title,"JFB_FIELD::") or contains(@placeholder,"JFB_FIELD::")]' )->length,
			'field macro comments' => $xpath->query( '//comment()[contains(.,"JFB_FIELD")]' )->length,
			'shortcode executed' => substr_count( $html, 'DATA-HTML-MARKER-EXECUTED' ),
		);
	}

	private function assertSameInstructions( string $expected_html, string $html, string $context = '' ): void {
		$this->assertSame( $this->instructions( $expected_html ), $this->instructions( $html ), $context );
	}

	public function payloadProvider(): array {
		$cond = "data-jfb-conditional='[{\"field\":\"x\",\"value\":\"%x%+(window.jfbTest=1)\"}]'";

		return array(
			'unclosed calculated wrapper' => array( '<div class="jet-form-builder__calculated-field" data-formula="window.jfbTest=1"><div><div>City' ),
			'unclosed row with rules'     => array( '<div class="jet-form-builder-row" data-validation-type="advanced" data-validation-rules=\'[{"type":"regexp","value":"^$","message":"x"}]\'><div>City' ),
			'unclosed row with value'     => array( '<div class="jet-form-builder-row" data-value=\'[{"to_set":"(window.jfbTest=1,%this%)"}]\'><div>City' ),
			'space after <'               => array( '< span ' . $cond . '>City' ),
			'tab after <'                 => array( "<\tspan " . $cond . '>City' ),
			'form feed after <'           => array( "<\fspan " . $cond . '>City' ),
			'slash before attribute'      => array( '<span/data-jfb-macro="x">City' ),
			'no closing >'                => array( '<span data-jfb-conditional=\'[]\'>City</span><span data-jfb-macro="x"' ),
			'field macro in src'          => array( '<img src="https://example.invalid/c?JFB_FIELD::x" alt="City">City' ),
			'field macro comment'         => array( 'City<!--JFB_FIELD::x-->' ),
			'shortcode in title'          => array( '<span title="[jfb_data_html_marker]">City</span>' ),
			'entity shortcode in title'   => array( '<span title="&#x5B;jfb_data_html_marker&#x5D;">City</span>' ),
			'named entity in title'       => array( '<span title="&lsqb;jfb_data_html_marker&rsqb;">City</span>' ),
		);
	}

	/**
	 * @dataProvider payloadProvider
	 */
	public function testSanitizedValue( string $payload ): void {
		$html = Tools::sanitize_data_html( $payload );

		$this->assertSameInstructions( 'City', do_shortcode( wp_kses_post( $html ) ) );
		$this->assertSame( force_balance_tags( $html ), $html, 'tags are balanced' );
		$this->assertStringNotContainsString( 'jet-form-builder', $html );
		$this->assertStringContainsString( 'City', $html );
	}

	/**
	 * @dataProvider payloadProvider
	 */
	public function testPresetInLabelAndDescription( string $payload ): void {
		foreach ( array( 'label', 'desc' ) as $attr ) {
			$blocks = $this->block( 'text-field', array( 'name' => 'x', $attr => $this->preset( 'f' ) ) )
				. $this->block( 'text-field', array( 'name' => 'next' ) );

			$_GET     = array( 'f' => 'City' );
			$expected = $this->render( $blocks );
			$_GET     = array( 'f' => wp_slash( $payload ) );
			$html     = $this->render( $blocks );

			$this->assertSameInstructions( $expected, $html, $attr );
			$this->assertStringContainsString( 'City', $html, $attr );
		}
	}

	/**
	 * A value stored by a public Insert Post form becomes an option label
	 * through the "Get values list from database" generator.
	 *
	 * @dataProvider payloadProvider
	 */
	public function testGeneratedOptionLabels( string $payload ): void {
		foreach ( array( 'radio-field', 'checkbox-field' ) as $block ) {
			$blocks  = $this->block(
				$block,
				array(
					'name'               => 'choice',
					'field_options_from' => 'generate',
					'generator_function' => 'get_from_db',
					'generator_field'    => 'reaudit_label',
				)
			) . $this->block( 'text-field', array( 'name' => 'next' ) );
			$post_id = self::factory()->post->create( array( 'post_status' => 'draft' ) );

			update_post_meta( $post_id, 'reaudit_label', 'City' );
			$expected = $this->render( $blocks );

			update_post_meta( $post_id, 'reaudit_label', wp_slash( Tools::sanitize_text_field( $payload ) ) );
			$html = $this->render( $blocks );

			$this->assertSameInstructions( $expected, $html, $block );

			wp_delete_post( $post_id, true );
		}
	}

	/**
	 * Backward compatibility: text, formatting, links and images from site
	 * data are kept.
	 */
	public function testOrdinaryHtmlIsKept(): void {
		$this->assertSame( 'Kyiv', Tools::sanitize_data_html( 'Kyiv' ) );
		$this->assertSame( '5 < 6 & 7 > 3', Tools::sanitize_data_html( '5 < 6 & 7 > 3' ) );
		$this->assertSame( 'Price [USD]', Tools::sanitize_data_html( 'Price [USD]' ) );

		$html = '<b>Bold</b> <em>i</em> <a href="https://example.com/a?x=1&amp;y=2" title="Go" class="link">Link</a> <img src="https://example.com/i.png" alt="Pic">';
		// Only the void tag is closed by force_balance_tags().
		$this->assertSame( substr( $html, 0, -1 ) . '/>', Tools::sanitize_data_html( $html ) );

		$this->assertSame(
			'<a href="https://example.com/?ids%5B%5D=1">L</a>',
			Tools::sanitize_data_html( '<a href="https://example.com/?ids[]=1">L</a>' )
		);
		$this->assertSame(
			'<span class="note" data-x="1">x</span>',
			Tools::sanitize_data_html( '<span class="note jet-form-builder__field jfb-x" id="a" data-x="1">x</span>' )
		);
	}

	/**
	 * Backward compatibility: data-* attributes of the site (tooltips, lazy
	 * images, theme scripts) stay; only those the form scripts read as
	 * their own settings are removed.
	 */
	public function testSiteDataAttributesAreKept(): void {
		$site = '<span data-tooltip="Hint" data-bs-toggle="tooltip" data-aos="fade-up" data-title="T">x</span>'
			. '<img src="https://example.com/1.png" data-src="https://example.com/2.png" data-srcset="https://example.com/2.png 2x" alt="a" />';

		$this->assertSame( $site, Tools::sanitize_data_html( $site ) );

		$service = array(
			'data-jfb-macro', 'data-jfb-conditional', 'data-jfbx', 'data-jet-engine-x', 'data-formula',
			'data-value', 'data-dynamic-value', 'data-validation-rules', 'data-validation-message-required',
			'data-field-name', 'data-form-id', 'data-form_id', 'data-switch-on', 'data-default-val',
			'data-listen-to', 'data-repeater-row', 'data-calculate', 'data-args', 'data-custom',
			'data-max_files', 'data-inputmask-inputformat', 'data-page', 'data-type', 'data-settings',
		);

		foreach ( $service as $name ) {
			$this->assertSame(
				'<span data-tooltip="Hint">x</span>',
				Tools::sanitize_data_html( '<span data-tooltip="Hint" ' . $name . '="1">x</span>' ),
				$name
			);
		}
	}

	/**
	 * A site can mark its own data-* attributes as service ones.
	 */
	public function testServiceAttributesFilter(): void {
		$filter = static function ( array $stems ): array {
			$stems[] = 'tooltip';

			return $stems;
		};

		add_filter( 'jet-form-builder/data-html/service-data-attributes', $filter );

		try {
			$this->assertSame( '<span>x</span>', Tools::sanitize_data_html( '<span data-tooltip="Hint">x</span>' ) );
		} finally {
			remove_filter( 'jet-form-builder/data-html/service-data-attributes', $filter );
		}

		$this->assertSame( '<span data-tooltip="Hint">x</span>', Tools::sanitize_data_html( '<span data-tooltip="Hint">x</span>' ) );
	}

	/**
	 * Backward compatibility: Label typed by the form author keeps its HTML,
	 * including plugin markup and macros.
	 */
	public function testAuthorLabelIsKept(): void {
		$label = '<span data-jfb-macro="name" class="jet-form-builder__x"></span> <b>Name</b>';
		$html  = $this->render( $this->block( 'text-field', array( 'name' => 'name', 'label' => $label ) ) );

		$this->assertStringContainsString( 'data-jfb-macro="name"', $html );
		$this->assertStringContainsString( '<b>Name</b>', $html );
	}

	/**
	 * Backward compatibility: ordinary values from a preset and from site
	 * data look as before.
	 */
	public function testOrdinaryPresetLabel(): void {
		$_GET['f'] = wp_slash( '<b>Kyiv</b> & <a href="https://example.com">site</a>' );

		$html = $this->render( $this->block( 'text-field', array( 'name' => 'x', 'label' => $this->preset( 'f' ) ) ) );

		$this->assertStringContainsString( '<b>Kyiv</b>', $html );
		$this->assertStringContainsString( '<a href="https://example.com">site</a>', $html );
	}
}
