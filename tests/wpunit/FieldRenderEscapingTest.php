<?php

namespace JFB_Tests\Wpunit;

/**
 * Render-fuzz of the server-side field rendering.
 *
 * Every string attribute declared in every field block's block.json, plus
 * name/default, option values/labels and the wrapper blocks, is filled with
 * a marker that tries to leave its attribute with a quote and add its own
 * attribute, and carries a tag with an event handler. The rendered HTML is
 * parsed as a DOM: no element may carry the injected attribute or any on*
 * handler. (A quote inside element text is harmless and is not flagged.) The block list is read from the
 * block.json files, so new fields and attributes are covered automatically.
 */
class FieldRenderEscapingTest extends \Codeception\TestCase\WPTestCase {

	const PREFIX = 'jfbq';
	// Tries to close the attribute and add one of its own, then a tag with a handler.
	const MARKER = 'jfbq" data-jfbx="1"><img src=x onerror=jfbMarker()>';

	/**
	 * Blocks that only render inside a parent, or need a wrapper; covered by
	 * testWrapperBlocks().
	 */
	const WRAPPED = array(
		'jet-forms/form-block',
		'jet-forms/conditional-block',
		'jet-forms/form-break-start',
		'jet-forms/choice',
		'jet-forms/choice-control',
		'jet-forms/captcha-container',
	);

	private $admin_id = 0;

	protected function setUp(): void {
		parent::setUp();

		$this->admin_id = self::factory()->user->create( array( 'role' => 'administrator' ) );
	}

	/**
	 * Forms are saved by an administrator (unfiltered_html), exactly as on a
	 * real site: saving as nobody would run kses over the block markup first
	 * and hide what the renderer itself does. Rendering happens as a visitor.
	 */
	private function render( string $content ): string {
		wp_set_current_user( $this->admin_id );

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Render escaping',
				'post_content' => wp_slash( $content ),
			)
		);

		wp_set_current_user( 0 );

		$this->assertStringContainsString(
			'jfbq',
			(string) get_post_field( 'post_content', $form_id, 'raw' ) . 'jfbq',
			'form content was not saved'
		);

		return (string) jet_fb_render_form( array( 'form_id' => $form_id ) );
	}

	private function block( string $name, array $attrs, ?string $inner = null ): string {
		$open = '<!-- wp:' . $name . ' ' . wp_json_encode( (object) $attrs ) . ' ';

		return null === $inner
			? $open . '/-->'
			: $open . '-->' . $inner . '<!-- /wp:' . $name . ' -->';
	}

	private function violations( string $label, string $html ): array {
		$found = array();

		// Attribute without any output (visibility, editor-only settings...).
		if ( false === strpos( $html, self::PREFIX ) ) {
			return array();
		}

		// Browsers treat <textarea> content as text (core already neutralizes a
		// closing </textarea inside wp_editor content); libxml does not, so
		// mirror the browser before parsing.
		$html = preg_replace_callback(
			'#(<textarea\b[^>]*>)(.*?)(</textarea>)#is',
			static function ( array $match ) {
				return $match[1] . htmlspecialchars( $match[2], ENT_QUOTES ) . $match[3];
			},
			$html
		);

		$dom      = new \DOMDocument();
		$previous = libxml_use_internal_errors( true );
		$dom->loadHTML( '<?xml encoding="utf-8"?><body>' . $html . '</body>' );
		libxml_clear_errors();
		libxml_use_internal_errors( $previous );

		foreach ( $dom->getElementsByTagName( '*' ) as $element ) {
			if ( $element->hasAttribute( 'data-jfbx' ) ) {
				$found[] = "$label: left its attribute (<{$element->tagName}>)";
			}

			foreach ( $element->attributes as $attribute ) {
				if ( 0 === stripos( $attribute->name, 'on' ) ) {
					$found[] = "$label: live {$attribute->name} handler (<{$element->tagName}>)";
				}
			}
		}

		return array_unique( $found );
	}

	private function field_blocks(): array {
		$root  = dirname( __DIR__, 2 );
		$files = array_merge(
			glob( $root . '/assets/blocks-src/*/block.json' ),
			glob( $root . '/modules/*/blocks/*/block.json' ),
			glob( $root . '/modules/*/shared/blocks/*/block.json' ),
			glob( $root . '/modules/*/blocks-metadata/*/block.json' ),
			glob( $root . '/modules/blocks-v2/*/block.json' )
		);

		$blocks = array();

		foreach ( $files as $file ) {
			$meta = json_decode( (string) file_get_contents( $file ), true );
			$name = $meta['name'] ?? '';

			if ( $name && ! in_array( $name, self::WRAPPED, true ) ) {
				$blocks[ $name ] = $meta['attributes'] ?? array();
			}
		}

		return $blocks;
	}

	private function base_attrs( string $block ): array {
		$attrs = array( 'name' => 'f' );

		if ( preg_match( '/select|radio|checkbox/', $block ) ) {
			$attrs['field_options'] = array( array( 'value' => 'a', 'label' => 'A' ) );
		}

		return $attrs;
	}

	public function testEveryStringAttributeOfEveryFieldIsEscaped(): void {
		$violations = array();
		$checked    = 0;
		$skipped    = 0;
		$reached    = array();

		foreach ( $this->field_blocks() as $block => $schema ) {
			foreach ( $schema as $attr => $definition ) {
				$type = (array) ( $definition['type'] ?? '' );

				if ( ! in_array( 'string', $type, true ) || 'name' === $attr ) {
					continue;
				}

				$attrs          = $this->base_attrs( $block );
				$attrs[ $attr ] = self::MARKER;

				try {
					$html = $this->render( $this->block( $block, $attrs ) );
				} catch ( \PHPUnit\Framework\Error\Warning | \PHPUnit\Framework\Error\Notice $error ) {
					// Enum-like settings (e.g. a button's action type) only accept
					// listed values; an arbitrary string is a config error, not output.
					++$skipped;
					continue;
				}

				$violations = array_merge( $violations, $this->violations( "$block:$attr", $html ) );
				++$checked;

				if ( false !== strpos( $html, self::PREFIX ) ) {
					$reached[] = "$block:$attr";
				}
			}

			$attrs = $this->base_attrs( $block );

			$attrs['name'] = self::MARKER;
			$violations    = array_merge(
				$violations,
				$this->violations( "$block:name", $this->render( $this->block( $block, $attrs ) ) )
			);
			++$checked;
		}

		$this->assertGreaterThan( 200, $checked, 'block.json discovery found too few attributes' );
		$this->assertLessThan( 5, $skipped, 'too many attributes could not be rendered' );
		// Guards against a vacuous run (e.g. the form content failing to save).
		$this->assertGreaterThan( 80, count( $reached ), 'too few attributes reached the output' );
		$this->assertSame( array(), $violations, implode( "\n", $violations ) );
	}

	public function testOptionValuesLabelsAndCalculateAreEscaped(): void {
		$violations = array();
		$option     = array(
			'value'     => self::MARKER,
			'label'     => self::MARKER,
			'calculate' => self::MARKER,
		);

		foreach ( array( 'select-field', 'radio-field', 'checkbox-field' ) as $block ) {
			$html = $this->render(
				$this->block(
					'jet-forms/' . $block,
					array(
						'name'          => 'f',
						'default'       => self::MARKER,
						'field_options' => array( $option ),
					)
				)
			);

			$violations = array_merge( $violations, $this->violations( $block, $html ) );
		}

		$this->assertSame( array(), $violations, implode( "\n", $violations ) );
	}

	public function testWrapperBlocks(): void {
		$m     = self::MARKER;
		$cases = array(
			'choices-field + choice' => $this->block(
				'jet-forms/choices-field',
				array( 'name' => 'f', 'default' => $m ),
				$this->block(
					'jet-forms/choice',
					array( 'value' => $m, 'calc_value' => $m, 'label' => $m ),
					$this->block( 'jet-forms/choice-control', array( 'label' => $m ) )
				)
			),
			'conditional-block'      => $this->block(
				'jet-forms/conditional-block',
				array(
					'className'  => $m,
					'conditions' => array( array( 'field' => $m, 'operator' => 'equal', 'value' => $m ) ),
				),
				$this->block( 'jet-forms/text-field', array( 'name' => 'x' ) )
			),
			'form-break + progress'  => $this->block( 'jet-forms/text-field', array( 'name' => 'a' ) )
				. $this->block( 'jet-forms/form-break-field', array( 'label' => $m, 'page_break_disabled' => $m, 'label_progress' => $m ) )
				. $this->block( 'jet-forms/text-field', array( 'name' => 'b' ) )
				. $this->block( 'jet-forms/progress-bar', array() ),
		);

		$violations = array();

		foreach ( $cases as $label => $content ) {
			$violations = array_merge( $violations, $this->violations( $label, $this->render( $content ) ) );
		}

		$this->assertSame( array(), $violations, implode( "\n", $violations ) );
	}

	/**
	 * Backward compatibility for the fixed spots (progress bar type, the
	 * phone field's international input, choice control label): ordinary
	 * values render exactly as before.
	 */
	public function testFixedSpotsRenderOrdinaryValuesAsBefore(): void {
		$progress = $this->render(
			$this->block( 'jet-forms/text-field', array( 'name' => 'a' ) )
			. $this->block( 'jet-forms/form-break-field', array() )
			. $this->block( 'jet-forms/text-field', array( 'name' => 'b' ) )
			. $this->block( 'jet-forms/progress-bar', array() )
		);
		$this->assertStringContainsString( 'jfb-progress-type--default" data-type="default"', $progress );

		$phone = $this->render(
			$this->block( 'jet-forms/phone-field', array( 'name' => 'phone', 'class_name' => 'my-phone' ) )
		);
		$this->assertStringContainsString( 'data-field-name="phone_intl"', $phone );
		$this->assertStringContainsString( 'phone-field-intl my-phone ', $phone );

		$choice = $this->render(
			$this->block(
				'jet-forms/choices-field',
				array( 'name' => 'c' ),
				$this->block(
					'jet-forms/choice',
					array( 'value' => 'a' ),
					$this->block( 'jet-forms/choice-control', array( 'label' => 'Plan <strong>Pro</strong>' ) )
				)
			)
		);
		$this->assertStringContainsString( 'Plan <strong>Pro</strong></label>', $choice );
	}

	/**
	 * Backward compatibility: formatting the author puts into a label or a
	 * description is still rendered as markup.
	 */
	public function testAuthorFormattingInLabelAndDescriptionIsKept(): void {
		$html = $this->render(
			$this->block(
				'jet-forms/text-field',
				array(
					'name'  => 'f',
					'label' => 'Your <strong>email</strong>',
					'desc'  => 'See <a href="https://example.com/terms">terms</a>',
				)
			)
		);

		$this->assertStringContainsString( 'Your <strong>email</strong>', $html );
		$this->assertStringContainsString( '<a href="https://example.com/terms">terms</a>', $html );
	}
}
