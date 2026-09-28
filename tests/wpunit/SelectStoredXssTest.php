<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Generators\Get_From_DB;
use JFB_Modules\Option_Field\Blocks\Select\Block_Render;
use JFB_Modules\Option_Field\Blocks\Select\Block_Type;

class SelectStoredXssTest extends \Codeception\TestCase\WPTestCase {

	public function testSubmittedKeysAreSanitizedRecursivelyAndCollisionsKeepFirstValue() {
		$payload = '"></option></select><img src=x onerror=alert(document.domain)><script>window.__JFB_XSS=1</script>';
		$input   = array(
			'<b>colors</b>' => array(
				'nested' => array(
					$payload       => 'first',
					'<b>same</b>' => 'second',
					'same'        => 'third',
					2             => 'fourth',
				),
			),
		);

		$result = Tools::sanitize_recursive( $input );
		$nested = $result['colors']['nested'];

		$this->assertSame( array( 'colors' ), array_keys( $result ) );
		$this->assertSame( array( 'nested' ), array_keys( $result['colors'] ) );
		$this->assertArrayNotHasKey( $payload, $nested );
		$this->assertSame( 'first', $nested[ sanitize_text_field( $payload ) ] );
		$this->assertSame( 'second', $nested['same'] );
		$this->assertCount( 3, $nested );
		$this->assertArrayHasKey( 2, $nested );
		$this->assertSame( 'fourth', $nested[2] );
	}

	public function testSelectEscapesPreviouslyStoredOptionValueAndLabel() {
		$payload = '"></option></select><img src=x onerror=alert(document.domain)><script>window.__JFB_XSS=1</script>';
		$post_id = $this->factory()->post->create();

		update_post_meta( $post_id, 'poc_colors', array( $payload => $payload ) );
		$options = ( new Get_From_DB() )->generate( array( 'meta_key' => 'poc_colors' ) );

		$this->assertCount( 1, $options );
		$this->assertSame( $options[0]['value'], $options[0]['label'] );
		$this->assertStringContainsString( $payload, $options[0]['value'] );

		$html = $this->render_select(
			array(
				'field_options' => $options,
			)
		);

		$this->assertStringContainsString( 'value="' . esc_attr( $options[0]['value'] ) . '"', $html );
		$this->assertStringNotContainsString( '<img src=x onerror=alert(document.domain)>', $html );
		$this->assertStringNotContainsString( '<script>window.__JFB_XSS=1</script>', $html );
		$this->assertSame( 1, substr_count( $html, '</select>' ) );
	}

	public function testQuoteOnlyStoredValueCannotAddOptionAttribute() {
		$meta_key = 'jfb_select_escape_' . wp_generate_password( 8, false );
		$payload  = '" onpointerover=alert(document.domain) x="';
		$post_id  = $this->factory()->post->create();

		update_post_meta( $post_id, $meta_key, $payload );
		$options = ( new Get_From_DB() )->generate( array( 'meta_key' => $meta_key ) );
		$html    = $this->render_select( array( 'field_options' => $options ) );

		$this->assertSame( $payload, $options[0]['value'] );
		$this->assertStringContainsString( '<option value="' . esc_attr( $payload ) . '"', $html );
		$this->assertStringContainsString( esc_html( $payload ) . '</option>', $html );
		$this->assertStringNotContainsString( '<option value="" onpointerover=', $html );
	}

	public function testSelectKeepsSelectionAndRendersLabelsAsText() {
		$html = $this->render_select(
			array(
				'placeholder'   => '<script>alert(1)</script>',
				'default'       => 'safe & sound',
				'field_options' => array(
					array(
						'value' => 'safe & sound',
						'label' => '<img src=x onerror=alert(1)>',
					),
				),
			)
		);

		$this->assertStringContainsString( '&lt;script&gt;alert(1)&lt;/script&gt;', $html );
		$this->assertStringContainsString( '<option value="safe &amp; sound" selected="selected">&lt;img src=x onerror=alert(1)&gt;</option>', $html );
		$this->assertStringNotContainsString( '<img src=x onerror=alert(1)>', $html );
	}

	public function testFieldNamesWithSpacesAndPercentSequencesSurviveSanitization() {
		$input = array(
			'my field'       => 'value_a',
			'discount%2015'  => 'value_b',
			'  spaced name ' => 'value_c',
		);

		$result = Tools::sanitize_recursive( $input );

		$this->assertSame( array( 'my field', 'discount%2015', '  spaced name ' ), array_keys( $result ) );
		$this->assertSame( 'value_a', $result['my field'] );
		$this->assertSame( 'value_b', $result['discount%2015'] );
		$this->assertSame( 'value_c', $result['  spaced name '] );
	}

	public function testTagsAreStillStrippedFromArrayKeys() {
		$input = array(
			'"></option></select><img src=x onerror=alert(1)>colors' => 'value',
		);

		$result = Tools::sanitize_recursive( $input );

		$this->assertSame( array( '">colors' ), array_keys( $result ) );
		$this->assertStringNotContainsString( '<img', implode( '', array_keys( $result ) ) );
	}

	public function testCollidingEmptyKeysAfterSanitizationKeepFirstValue() {
		$input = array(
			'<b></b>' => 'first',
			'<i></i>' => 'second',
		);

		$result = Tools::sanitize_recursive( $input );

		$this->assertSame( array( '' ), array_keys( $result ) );
		$this->assertSame( 'first', $result[''] );
	}

	private function render_select( array $args ): string {
		$block_type              = new Block_Type();
		$block_type->block_attrs = array( 'name' => 'colors' );
		$render                  = new Block_Render( $block_type );

		return $render->render_without_layout(
			null,
			array_merge(
				array(
					'name'        => 'colors',
					'class_name'  => '',
					'default'     => '',
					'placeholder' => '',
				),
				$args
			)
		);
	}
}
