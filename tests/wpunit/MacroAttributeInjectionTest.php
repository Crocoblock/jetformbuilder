<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Classes\Tools;

/**
 * The frontend script treats a data-jfb-macro element inside the form as an
 * HTML macro and writes its result with innerHTML. wp_kses_post() keeps
 * data-* attributes, so HTML from site data (an option label generated from
 * post meta that a visitor wrote, a dynamic preset in Label or Description)
 * must not bring such attributes into the form. Macro elements the form
 * author placed in the form keep working.
 */
class MacroAttributeInjectionTest extends \Codeception\TestCase\WPTestCase {

	const PAYLOAD = '<span data-jfb-macro="z%&lt;img src=x onerror=&quot;alert(1)&quot;&gt;%z">City</span>';

	private $admin_id;

	protected function setUp(): void {
		parent::setUp();

		$this->admin_id = self::factory()->user->create( array( 'role' => 'administrator' ) );
	}

	protected function tearDown(): void {
		$_GET = array();

		parent::tearDown();
	}

	private function block( string $name, array $attrs ): string {
		return '<!-- wp:jet-forms/' . $name . ' ' . wp_json_encode( (object) $attrs ) . ' /-->';
	}

	private function render( string $blocks ): \DOMXPath {
		wp_set_current_user( $this->admin_id );

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Macro attributes',
				'post_content' => wp_slash( $blocks ),
			)
		);

		wp_set_current_user( 0 );

		$dom = new \DOMDocument();
		libxml_use_internal_errors( true );
		$dom->loadHTML( '<?xml encoding="utf-8"?>' . jet_fb_render_form( array( 'form_id' => $form_id ) ) );
		libxml_clear_errors();

		return new \DOMXPath( $dom );
	}

	private function macro_elements( \DOMXPath $xpath ): array {
		$found = array();

		foreach ( $xpath->query( '//*[@data-jfb-macro]' ) as $node ) {
			$found[] = $node->getAttribute( 'data-jfb-macro' );
		}

		return $found;
	}

	private function text( \DOMXPath $xpath ): string {
		return (string) $xpath->document->textContent;
	}

	public function choiceProvider(): array {
		return array(
			'radio'    => array( 'radio-field' ),
			'checkbox' => array( 'checkbox-field' ),
			'select'   => array( 'select-field' ),
		);
	}

	/**
	 * A value stored by a public Insert Post form (post meta, sanitized on
	 * input like any submitted text) becomes an option label through the
	 * "Get values list from database" generator.
	 *
	 * @dataProvider choiceProvider
	 */
	public function testGeneratedOptionLabelCannotAddMacro( string $block ): void {
		$post_id = self::factory()->post->create( array( 'post_status' => 'draft' ) );
		update_post_meta( $post_id, 'listing_city', wp_slash( Tools::sanitize_text_field( self::PAYLOAD ) ) );

		$xpath = $this->render(
			$this->block(
				$block,
				array(
					'name'               => 'city',
					'field_options_from' => 'generate',
					'generator_function' => 'get_from_db',
					'generator_field'    => 'listing_city',
				)
			)
		);

		$this->assertSame( array(), $this->macro_elements( $xpath ) );
		$this->assertStringContainsString( 'City', $this->text( $xpath ) );
	}

	public function attributeProvider(): array {
		return array(
			'label'       => array( 'label' ),
			'description' => array( 'desc' ),
		);
	}

	/**
	 * A dynamic preset from the URL in Label or Description.
	 *
	 * @dataProvider attributeProvider
	 */
	public function testPresetInLabelCannotAddMacro( string $attr ): void {
		$_GET['f'] = wp_slash( self::PAYLOAD );

		$xpath = $this->render(
			$this->block(
				'text-field',
				array(
					'name' => 'x',
					$attr  => wp_json_encode(
						array(
							'jet_preset'        => 1,
							'from'              => 'query_var',
							'current_field_key' => 'f',
							'query_var'         => 'f',
						)
					),
				)
			)
		);

		$this->assertSame( array(), $this->macro_elements( $xpath ) );
		$this->assertStringContainsString( 'City', $this->text( $xpath ) );
	}

	/**
	 * Backward compatibility: macro elements written by the form author (as
	 * the Macros Inserter block creates them) stay in Label, Description and
	 * manual option labels.
	 */
	public function testAuthorMacrosAreKept(): void {
		$macro = '<span data-jfb-macro="name"></span>';

		$xpath = $this->render(
			$this->block( 'text-field', array( 'name' => 'name' ) )
			. $this->block(
				'text-field',
				array(
					'name'  => 'a',
					'label' => 'Hello ' . $macro,
					'desc'  => 'Dear ' . $macro,
				)
			)
			. $this->block(
				'radio-field',
				array(
					'name'          => 'r',
					'field_options' => array(
						array(
							'value' => 'one',
							'label' => 'One for ' . $macro,
						),
					),
				)
			)
		);

		$this->assertSame( array( 'name', 'name', 'name' ), $this->macro_elements( $xpath ) );
	}

	/**
	 * Attributes of every element as the browser sees them.
	 */
	private function dom_attributes( string $html ): array {
		$dom = new \DOMDocument();
		libxml_use_internal_errors( true );
		$dom->loadHTML( '<?xml encoding="utf-8"?><div id="root">' . $html . '</div>' );
		libxml_clear_errors();

		$result = array();

		foreach ( ( new \DOMXPath( $dom ) )->query( '//*[@id="root"]//*' ) as $node ) {
			$attributes = array();

			foreach ( $node->attributes as $attribute ) {
				$attributes[ $attribute->name ] = $attribute->value;
			}

			$result[] = array( $node->nodeName, $attributes );
		}

		return $result;
	}

	public function kses6OutputProvider(): array {
		return array(
			// WordPress before 7.0 keeps single-quoted values as they are.
			'macro name inside a single-quoted value' => array(
				'<a title=\'p data-jfb-x="\' href="http://x">Z</a><abbr title=\' onmouseover=window.__JFB_XSS=1 x\'>Y</abbr>',
			),
			'macro name inside a double-quoted value' => array(
				'<span title=" data-jfb-a=\'x" id=\'y\'>City</span><i title=\'"\'>i</i>',
			),
			'real macro attribute between quoted values' => array(
				'<span title=\'a "b" data-jfb-z="\' data-jfb-macro=\'z%x%z\' class="c">City</span><b title=\'x\'>B</b>',
			),
		);
	}

	/**
	 * Removing macro attributes never changes how the browser reads the rest:
	 * the same elements with the same attributes, minus data-jfb-* ones.
	 *
	 * @dataProvider kses6OutputProvider
	 */
	public function testStripMacroAttributesKeepsQuotesBalanced( string $html ): void {
		$expected = array_map(
			static function ( $element ) {
				$element[1] = array_filter(
					$element[1],
					static function ( $name ) {
						return 0 !== stripos( $name, 'data-jfb-' );
					},
					ARRAY_FILTER_USE_KEY
				);

				return $element;
			},
			$this->dom_attributes( $html )
		);

		$this->assertSame( $expected, $this->dom_attributes( Tools::strip_macro_attributes( $html ) ) );
	}

	public function testStripMacroAttributesLeavesValuesUntouched(): void {
		$html = '<a title=\'p data-jfb-x="\' href="http://x">Z</a>';

		$this->assertSame( $html, Tools::strip_macro_attributes( $html ) );
	}

	public function testStripMacroAttributes(): void {
		$this->assertSame(
			'<span class="c" data-tooltip="t">City</span> data-jfb-macro text',
			Tools::strip_macro_attributes( '<span data-jfb-macro="a%b" class="c" data-jfb-sync data-tooltip="t" data-JFB-x=\'1\' data-jfb-y=2>City</span> data-jfb-macro text' )
		);
		$this->assertSame( '<b>plain</b>', Tools::strip_macro_attributes( '<b>plain</b>' ) );
	}
}
