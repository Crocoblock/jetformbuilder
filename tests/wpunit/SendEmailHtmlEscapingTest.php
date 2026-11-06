<?php

namespace JFB_Tests\Wpunit;

use JFB_Modules\Actions_V2\Send_Email\Send_Email_Action;
use JFB_Modules\Actions_V2\Send_Email\Send_Email_Hooks;
use Jet_Form_Builder\Request\Parser_Context;

/**
 * In a text/html e-mail request data is shown as text, not as markup - every field value except
 * WYSIWYG and server-computed hidden fields, values passed through macro
 * filters, repeater rows and dynamic presets from request sources.
 * The template's own markup, WYSIWYG, galleries and other filter output,
 * custom macros, site-data presets and plain-text e-mails keep working as
 * before.
 */
class SendEmailHtmlEscapingTest extends \Codeception\TestCase\WPTestCase {

	const VALUE = 'Hi <b>there</b> & bye';

	protected function tearDown(): void {
		$property = new \ReflectionProperty( Parser_Context::class, 'parsers' );
		$property->setAccessible( true );
		$property->setValue( jet_fb_context(), array() );

		remove_all_filters( 'jet-form-builder/send-email/escape-field-value' );
		remove_all_filters( 'jet-form-builder/send-email/escape-preset-value' );
		remove_all_filters( 'jet-form-builder/send-email/template-repeater' );
		remove_all_filters( 'jet-form-builder/custom-macro' );
		$_GET     = array();
		$_REQUEST = array();
		$GLOBALS['post'] = null;

		parent::tearDown();
	}

	/**
	 * Builds the request context from real field blocks, as on submit, so
	 * every field has its real type.
	 */
	private function submit( string $block, $value ): void {
		$blocks = parse_blocks( '<!-- wp:jet-forms/' . $block . ' {"name":"f"} /-->' );

		jet_fb_context()->set_parsers( $blocks );
		jet_fb_context()->set_request( array( 'f' => $value ) );
		jet_fb_context()->apply_request();
		jet_fb_context()->update_request( $value, 'f' );
	}

	private function body( string $template, string $content_type = 'text/html' ): string {
		$email = new Send_Email_Action();
		$email->set_content_type( $content_type );
		$email->set_content( $template );
		$email->set_subject( 'Subject' );

		Send_Email_Hooks::basic_formatting( $email );

		return $email->get_content();
	}

	/**
	 * Builds the context from block markup and a raw request, without
	 * overriding values: server-computed fields keep their own value.
	 */
	private function submit_blocks( string $markup, array $request ): void {
		jet_fb_context()->set_parsers( parse_blocks( $markup ) );
		jet_fb_context()->set_request( $request );
		jet_fb_context()->apply_request();
	}

	public function plainTypeProvider(): array {
		return array(
			'text'       => array( 'text-field' ),
			'textarea'   => array( 'textarea-field' ),
			'number'     => array( 'number-field' ),
			// The browser sends these values too.
			'hidden'     => array( 'hidden-field' ),
			'calculated' => array( 'calculated-field' ),
			'media'      => array( 'media-field' ),
		);
	}

	/**
	 * @dataProvider plainTypeProvider
	 */
	public function testPlainTextValueIsEscapedInHtmlEmail( string $block ): void {
		$this->submit( $block, self::VALUE );

		$body = $this->body( 'Message: %f%' );

		$this->assertStringNotContainsString( '<b>', $body );
		$this->assertStringContainsString( 'Hi &lt;b&gt;there&lt;/b&gt; &amp; bye', $body );
	}

	/**
	 * Backward compatibility: the template's own markup is untouched.
	 */
	public function testTemplateMarkupIsKept(): void {
		$this->submit( 'text-field', 'Anna' );

		$this->assertSame( '<p><strong>Name:</strong> Anna</p>', $this->body( '<p><strong>Name:</strong> %f%</p>' ) );
	}

	/**
	 * Backward compatibility: WYSIWYG content is HTML on purpose.
	 */
	public function testWysiwygValueIsNotEscaped(): void {
		$this->submit( 'wysiwyg-field', '<p><b>formatted</b></p>' );

		$this->assertStringContainsString( '<b>formatted</b>', $this->body( '%f%' ) );
	}

	/**
	 * Backward compatibility: plain-text e-mails get the value as is.
	 */
	public function testPlainTextEmailIsNotEscaped(): void {
		$this->submit( 'text-field', 'Tom & Jerry' );

		$this->assertSame( 'Hello Tom & Jerry', $this->body( 'Hello %f%', 'text/plain' ) );
	}

	/**
	 * Backward compatibility: per-value opt-out through the filter.
	 */
	public function testFilterCanDisableEscaping(): void {
		add_filter( 'jet-form-builder/send-email/escape-field-value', '__return_false' );

		$this->submit( 'text-field', self::VALUE );

		$this->assertStringContainsString( '<b>there</b>', $this->body( '%f%' ) );
	}

	/**
	 * Values without special characters are byte-identical to before.
	 */
	public function testOrdinaryValueIsUnchanged(): void {
		$this->submit( 'text-field', 'Order 42, delivery tomorrow' );

		$this->assertSame( 'Text: Order 42, delivery tomorrow', $this->body( 'Text: %f%' ) );
	}

	/**
	 * Every type escapes except the ones that are HTML on purpose. A new or
	 * add-on field type is escaped without being listed anywhere.
	 */
	public function testOnlyWysiwygIsHtmlOnPurpose(): void {
		$this->assertSame( array( 'wysiwyg-field' ), \JFB_Modules\Rich_Content\Module::HTML_FIELD_TYPES );
	}

	private function server_hidden( array $attrs, array $request = array() ): string {
		$this->submit_blocks(
			'<!-- wp:jet-forms/hidden-field ' . wp_json_encode( array_merge( array( 'name' => 'f', 'render' => false ), $attrs ) ) . ' /-->',
			$request
		);

		return $this->body( 'Value: %f%' );
	}

	/**
	 * "Render in HTML" off is computed on the server,
	 * but from data visitors can write - here post meta saved by a public
	 * Insert Post form.
	 */
	public function testServerHiddenFromPostMetaIsEscaped(): void {
		$post_id = self::factory()->post->create();
		update_post_meta( $post_id, 'qa_meta', self::VALUE );
		$GLOBALS['post'] = get_post( $post_id );

		$body = $this->server_hidden( array( 'field_value' => 'post_meta', 'hidden_value_field' => 'qa_meta' ) );

		$this->assertStringNotContainsString( '<b>', $body );
		$this->assertStringContainsString( 'Hi &lt;b&gt;there&lt;/b&gt; &amp; bye', $body );
	}

	/**
	 * The referer URL source is the raw request value.
	 */
	public function testServerHiddenFromRefererIsEscaped(): void {
		$_REQUEST['_wp_http_referer'] = wp_slash( self::VALUE );

		$body = $this->server_hidden( array( 'field_value' => 'referer_url' ) );

		$this->assertStringNotContainsString( '<b>', $body );
	}

	/**
	 * Backward compatibility: a hidden field with "Render in HTML" off is
	 * computed on the server, so the author's markup is kept and the value
	 * sent by the browser is ignored as before.
	 */
	public function testServerComputedHiddenFieldKeepsMarkup(): void {
		$attrs = array(
			'name'         => 'f',
			'render'       => false,
			'field_value'  => 'manual_input',
			'hidden_value' => '<strong>VIP</strong>',
		);

		$this->submit_blocks(
			'<!-- wp:jet-forms/hidden-field ' . wp_json_encode( $attrs ) . ' /-->',
			array( 'f' => '<a href="https://example.com">x</a>' )
		);

		$body = $this->body( 'Plan: %f%' );

		$this->assertStringContainsString( '<strong>VIP</strong>', $body );
		$this->assertStringNotContainsString( '<a ', $body );
	}

	/**
	 * An empty Manual Input falls back to the field default.
	 * When a preset fills that default from a query var, the value is the
	 * visitor's, so the exception for the author's value must not apply.
	 */
	public function testServerHiddenEmptyManualWithPresetFallbackIsEscaped(): void {
		$_GET['q'] = wp_slash( self::VALUE );

		$body = $this->server_hidden(
			array(
				'field_value'  => 'manual_input',
				'hidden_value' => '',
				'default'      => $this->preset_json( array( 'from' => 'query_var', 'query_var' => 'q', 'current_field_key' => 'q' ) ),
			)
		);

		$this->assertStringNotContainsString( '<b>', $body );
		$this->assertStringContainsString( 'Hi &lt;b&gt;there&lt;/b&gt; &amp; bye', $body );
	}

	/**
	 * Backward compatibility: the fallback to the author's own Default Value
	 * is still the author's markup.
	 */
	public function testServerHiddenEmptyManualWithAuthorDefaultKeepsMarkup(): void {
		$body = $this->server_hidden(
			array(
				'field_value'  => 'manual_input',
				'hidden_value' => '',
				'default'      => '<strong>VIP</strong>',
			),
			array( 'f' => '<a href="https://example.com">x</a>' )
		);

		$this->assertStringContainsString( '<strong>VIP</strong>', $body );
		$this->assertStringNotContainsString( '<a ', $body );
	}

	/**
	 * A filter that returns its input when the lookup
	 * fails (term_title_by_id) cannot return markup any more.
	 */
	public function testFilterPassThroughCannotReturnMarkup(): void {
		$this->submit( 'text-field', self::VALUE );

		$body = $this->body( 'Term: %f|term_title_by_id%' );

		$this->assertStringNotContainsString( '<b>', $body );
		$this->assertStringContainsString( '&lt;b&gt;', $body );
	}

	/**
	 * Backward compatibility: filters that build HTML from IDs produce the
	 * same output as without escaping.
	 */
	public function testGalleryFilterOutputIsUnchanged(): void {
		$ids = array();

		foreach ( array( 'a', 'b' ) as $title ) {
			$ids[] = self::factory()->attachment->create_object(
				$title . '.jpg',
				0,
				array( 'post_mime_type' => 'image/jpeg', 'post_title' => $title )
			);
		}

		$this->submit( 'text-field', implode( ',', $ids ) );
		$escaped = $this->body( '%f|image_gallery_grid%' );

		add_filter( 'jet-form-builder/send-email/escape-field-value', '__return_false' );
		$raw = $this->body( '%f|image_gallery_grid%' );

		$this->assertNotSame( '', $raw );
		$this->assertSame( $raw, $escaped );
	}

	/**
	 * Backward compatibility: md5 gets the exact value (e.g. Gravatar hash),
	 * format_date gets a date it can parse.
	 */
	public function testValueSensitiveFiltersAreUnchanged(): void {
		$this->submit( 'text-field', "o'brien+tag@example.com" );
		$this->assertSame( md5( "o'brien+tag@example.com" ), $this->body( '%f|md5%' ) );
		// The filter manager also accepts a space before the filter name.
		$this->assertSame( md5( "o'brien+tag@example.com" ), $this->body( '%f| md5%' ) );

		$this->submit( 'text-field', '2026-05-01' );
		$this->assertSame( date_i18n( 'd.m.Y', strtotime( '2026-05-01' ) ), $this->body( '%f|format_date(d.m.Y)%' ) );
	}

	/**
	 * Backward compatibility: embed_url gets the URL exactly as submitted, so
	 * query parameters reach the oEmbed lookup unchanged.
	 */
	public function testEmbedFilterGetsRawUrl(): void {
		$url  = 'https://video.example/watch?v=123&start=30';
		$seen = array();
		$stub = static function ( $result, $requested ) use ( &$seen, $url ) {
			$seen[] = $requested;

			return $url === $requested ? '<blockquote>embed</blockquote>' : false;
		};

		add_filter( 'pre_oembed_result', $stub, 10, 2 );

		try {
			$this->submit( 'text-field', $url );
			$body = $this->body( '<div>%f|embed_url%</div>' );
		} finally {
			remove_filter( 'pre_oembed_result', $stub, 10 );
		}

		$this->assertSame( array( $url ), $seen );
		$this->assertSame( '<div><blockquote>embed</blockquote></div>', $body );
	}

	/**
	 * A value that is not an embeddable URL gives no output: the filter never
	 * returns its input.
	 */
	public function testEmbedFilterDoesNotReturnMarkupFromValue(): void {
		$stub = static function () {
			return false;
		};

		add_filter( 'pre_oembed_result', $stub );

		try {
			$this->submit( 'text-field', self::VALUE );
			$body = $this->body( '<div>%f|embed_url%</div>' );
		} finally {
			remove_filter( 'pre_oembed_result', $stub );
		}

		$this->assertStringNotContainsString( '<b>', $body );
	}

	/**
	 * Repeater rows keep their layout, the values
	 * inside are escaped.
	 */
	public function testRepeaterValuesAreEscapedLayoutKept(): void {
		$this->submit( 'repeater-field', array( array( 'title' => self::VALUE ), array( 'title' => 'Plain' ) ) );

		$body = $this->body( '%f%' );

		$this->assertStringNotContainsString( '<b>', $body );
		$this->assertStringContainsString( 'Hi &lt;b&gt;there&lt;/b&gt; &amp; bye;<br>', $body );
		$this->assertStringContainsString( 'Plain;<br>', $body );
	}

	/**
	 * Repeater rows: each child value is checked against the child field
	 * itself - a WYSIWYG child keeps its markup, a text child is escaped.
	 */
	public function testRepeaterChildFieldsUseTheirOwnType(): void {
		$this->submit_blocks(
			'<!-- wp:jet-forms/repeater-field {"name":"f"} -->'
			. '<!-- wp:jet-forms/wysiwyg-field {"name":"bio"} /-->'
			. '<!-- wp:jet-forms/text-field {"name":"title"} /-->'
			. '<!-- /wp:jet-forms/repeater-field -->',
			array(
				'f' => array(
					array(
						'bio'   => '<p><b>formatted</b></p>',
						'title' => self::VALUE,
					),
				),
			)
		);

		$body = $this->body( '%f%' );

		$this->assertStringContainsString( '<b>formatted</b>', $body );
		$this->assertStringContainsString( 'Hi &lt;b&gt;there&lt;/b&gt; &amp; bye', $body );
	}

	/**
	 * Backward compatibility: a custom repeater template (developer code)
	 * still receives the submitted rows unchanged.
	 */
	public function testRepeaterTemplateFilterGetsRawItems(): void {
		$received = null;

		add_filter(
			'jet-form-builder/send-email/template-repeater',
			function ( $result, $items ) use ( &$received ) {
				$received = $items;

				return '<ul><li>custom</li></ul>';
			},
			10,
			2
		);

		$this->submit( 'repeater-field', array( array( 'title' => 'A & B' ) ) );

		$this->assertSame( '<ul><li>custom</li></ul>', $this->body( '%f%' ) );
		$this->assertSame( 'A & B', $received[0]['title'] );
	}

	/**
	 * Backward compatibility: custom macros are code of the site.
	 */
	public function testCustomMacroIsNotEscaped(): void {
		add_filter(
			'jet-form-builder/custom-macro',
			function ( $value, $name ) {
				return 'QA::badge' === $name ? '<span class="badge">ok</span>' : $value;
			},
			10,
			2
		);

		$this->submit( 'text-field', 'x' );

		$this->assertStringContainsString( '<span class="badge">ok</span>', $this->body( '%QA::badge%' ) );
	}

	private function preset_json( array $preset ): string {
		return wp_json_encode( array_merge( array( 'jet_preset' => 1 ), $preset ) );
	}

	/**
	 * A query var preset in the e-mail body is text.
	 */
	public function testQueryVarPresetIsEscaped(): void {
		$this->submit( 'text-field', 'x' );
		$_GET['q'] = wp_slash( self::VALUE );

		$body = $this->body( $this->preset_json( array( 'from' => 'query_var', 'query_var' => 'q', 'current_field_key' => 'q' ) ) );

		$this->assertStringNotContainsString( '<b>', $body );
		$this->assertStringContainsString( 'Hi &lt;b&gt;there&lt;/b&gt; &amp; bye', $body );
	}

	/**
	 * Backward compatibility: a site-data preset keeps its formatting; only
	 * markup not allowed in post content is removed.
	 */
	public function testSiteDataPresetKeepsFormatting(): void {
		$admin = self::factory()->user->create( array( 'role' => 'administrator' ) );
		wp_set_current_user( $admin );

		$post_id = self::factory()->post->create(
			array(
				'post_author' => $admin,
				'post_title'  => 'Plan <em>Pro</em>',
			)
		);

		$this->submit( 'text-field', 'x' );
		$_REQUEST['pid'] = (string) $post_id;
		$_GET['pid']     = (string) $post_id;

		$body = $this->body(
			$this->preset_json(
				array(
					'from'               => 'post',
					'post_from'          => 'query_var',
					'query_var'          => 'pid',
					'current_field_prop' => 'post_title',
				)
			)
		);

		$this->assertStringContainsString( 'Plan <em>Pro</em>', $body );
	}

	private function post_preset( int $post_id, string $prop, string $key = '' ): string {
		$_REQUEST['pid'] = (string) $post_id;
		$_GET['pid']     = (string) $post_id;

		return $this->body(
			$this->preset_json(
				array(
					'from'               => 'post',
					'post_from'          => 'query_var',
					'query_var'          => 'pid',
					'current_field_prop' => $prop,
					'current_field_key'  => $key,
				)
			)
		);
	}

	/**
	 * Backward compatibility: post content sent as the
	 * e-mail body keeps its formatting and links.
	 */
	public function testPostContentPresetKeepsFormatting(): void {
		$admin = self::factory()->user->create( array( 'role' => 'administrator' ) );
		wp_set_current_user( $admin );

		$post_id = self::factory()->post->create(
			array(
				'post_author'  => $admin,
				'post_content' => '<p><strong>Offer</strong> <a href="https://example.com/">details</a></p>',
			)
		);

		$this->submit( 'text-field', 'x' );

		$body = $this->post_preset( $post_id, 'post_content' );

		$this->assertStringContainsString( '<strong>Offer</strong>', $body );
		$this->assertStringContainsString( '<a href="https://example.com/">details</a>', $body );
	}

	/**
	 * Post meta can be written by visitors through
	 * forms, so in the e-mail body it is text.
	 */
	public function testPostMetaPresetIsEscaped(): void {
		$admin = self::factory()->user->create( array( 'role' => 'administrator' ) );
		wp_set_current_user( $admin );

		$post_id = self::factory()->post->create( array( 'post_author' => $admin ) );
		update_post_meta( $post_id, 'qa_meta', '<a href="https://example.com/">Confirm</a>' );

		$this->submit( 'text-field', 'x' );

		$body = $this->post_preset( $post_id, 'post_meta', 'qa_meta' );

		$this->assertStringNotContainsString( '<a ', $body );
		$this->assertStringContainsString( '&lt;a href=', $body );
	}

	/**
	 * Backward compatibility: opt-out for a trusted preset.
	 */
	public function testPresetFilterCanDisableEscaping(): void {
		add_filter( 'jet-form-builder/send-email/escape-preset-value', '__return_false' );

		$this->submit( 'text-field', 'x' );
		$_GET['q'] = wp_slash( self::VALUE );

		$body = $this->body( $this->preset_json( array( 'from' => 'query_var', 'query_var' => 'q', 'current_field_key' => 'q' ) ) );

		$this->assertStringContainsString( '<b>there</b>', $body );
	}
}
