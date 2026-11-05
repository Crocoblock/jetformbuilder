<?php

namespace JFB_Tests\Wpunit;

/**
 * Dynamic Value groups ("Set value" of a field) are run as formulas in the
 * browser. A dynamic preset in "to_set" or in a condition value is resolved
 * on the server into data from its source (post meta, query var...), which
 * visitors can write; such a value is marked so the browser uses it as plain
 * data. Values the form author typed (formulas with %field% macros) are not
 * marked and keep working as formulas.
 */
class DynamicValuePresetLiteralTest extends \Codeception\TestCase\WPTestCase {

	const PAYLOAD = '(alert(document.domain),%note%)';

	private $admin_id;

	protected function setUp(): void {
		parent::setUp();

		$this->admin_id = self::factory()->user->create( array( 'role' => 'administrator' ) );
	}

	protected function tearDown(): void {
		$_GET = array();
		wp_set_current_user( 0 );

		parent::tearDown();
	}

	private function preset( string $query_var ): string {
		return wp_json_encode(
			array(
				'jet_preset'        => 1,
				'from'              => 'query_var',
				'current_field_key' => $query_var,
				'query_var'         => $query_var,
			)
		);
	}

	/**
	 * Renders a text field with the given Dynamic Value groups and returns
	 * the groups the browser receives.
	 */
	private function user_id_preset(): string {
		return wp_json_encode(
			array(
				'jet_preset'         => 1,
				'from'               => 'user',
				'user_from'          => 'current_user',
				'current_field_prop' => 'ID',
			)
		);
	}

	private function groups( array $groups, int $viewer_id = 0 ): array {
		wp_set_current_user( $this->admin_id );

		$form_id = wp_insert_post(
			array(
				'post_type'    => 'jet-form-builder',
				'post_status'  => 'publish',
				'post_title'   => 'Dynamic value',
				'post_content' => wp_slash(
					'<!-- wp:jet-forms/text-field ' . wp_json_encode(
						array(
							'name'  => 'note',
							'value' => array( 'groups' => $groups ),
						)
					) . ' /-->'
				),
			)
		);

		wp_set_current_user( $viewer_id );

		$html = (string) jet_fb_render_form( array( 'form_id' => $form_id ) );

		$dom = new \DOMDocument();
		libxml_use_internal_errors( true );
		$dom->loadHTML( '<?xml encoding="utf-8"?>' . $html );
		libxml_clear_errors();

		$node = ( new \DOMXPath( $dom ) )->query( '//*[contains(@class,"jet-form-builder-row")][@data-value]' )->item( 0 );

		$this->assertNotNull( $node, 'no data-value on the field row' );

		return json_decode( $node->getAttribute( 'data-value' ), true );
	}

	public function testPresetToSetIsMarkedAsData(): void {
		$_GET['jfb_post'] = wp_slash( self::PAYLOAD );

		$groups = $this->groups( array( array( 'to_set' => $this->preset( 'jfb_post' ) ) ) );

		$this->assertSame( self::PAYLOAD, $groups[0]['to_set'] );
		$this->assertTrue( $groups[0]['to_set_from_preset'] ?? false );
	}

	public function testPresetConditionValueIsMarkedAsData(): void {
		$_GET['c'] = wp_slash( self::PAYLOAD );

		$groups = $this->groups(
			array(
				array(
					'to_set'     => 'yes',
					'conditions' => array(
						array(
							'field'    => 'note',
							'operator' => 'equal',
							'value'    => $this->preset( 'c' ),
						),
					),
				),
			)
		);

		$this->assertSame( self::PAYLOAD, $groups[0]['conditions'][0]['value'] );
		$this->assertTrue( $groups[0]['conditions'][0]['use_preset'] ?? false );
		$this->assertArrayNotHasKey( 'to_set_from_preset', $groups[0] );
	}

	/**
	 * A preset can return a number (a user or post ID). The browser compares
	 * field and condition values as strings, so a number is sent as a string.
	 */
	public function testNumericPresetValuesAreSentAsStrings(): void {
		$groups = $this->groups(
			array(
				array(
					'to_set'     => $this->user_id_preset(),
					'conditions' => array(
						array(
							'field'    => 'note',
							'operator' => 'equal',
							'value'    => $this->user_id_preset(),
						),
					),
				),
			),
			$this->admin_id
		);

		$this->assertSame( (string) $this->admin_id, $groups[0]['to_set'] );
		$this->assertTrue( $groups[0]['to_set_from_preset'] );
		$this->assertSame( (string) $this->admin_id, $groups[0]['conditions'][0]['value'] );
		$this->assertTrue( $groups[0]['conditions'][0]['use_preset'] );
	}

	/**
	 * A preset can return a list of IDs (for example post terms). Each
	 * number in the list is sent as a string, so "equal" and "one of"
	 * conditions match string field values.
	 */
	public function testNumericPresetListItemsAreSentAsStrings(): void {
		$to_ids = static function () {
			return array( 3, 7.5, 'x' );
		};
		add_filter( 'jet-form-builder/preset/source/value', $to_ids );

		try {
			$groups = $this->groups(
				array(
					array(
						'to_set'     => $this->user_id_preset(),
						'conditions' => array(
							array(
								'field'    => 'note',
								'operator' => 'one_of',
								'value'    => $this->user_id_preset(),
							),
						),
					),
				),
				$this->admin_id
			);
		} finally {
			remove_filter( 'jet-form-builder/preset/source/value', $to_ids );
		}

		$this->assertSame( array( '3', '7.5', 'x' ), $groups[0]['to_set'] );
		$this->assertSame( array( '3', '7.5', 'x' ), $groups[0]['conditions'][0]['value'] );
		$this->assertTrue( $groups[0]['conditions'][0]['use_preset'] );
	}

	/**
	 * A preset list (for checkboxes) stays a list.
	 */
	public function testPresetListIsKept(): void {
		$_GET['jfb_post'] = array( 'a', 'b' );

		$groups = $this->groups( array( array( 'to_set' => $this->preset( 'jfb_post' ) ) ) );

		$this->assertSame( array( 'a', 'b' ), $groups[0]['to_set'] );
		$this->assertTrue( $groups[0]['to_set_from_preset'] );
	}

	/**
	 * Backward compatibility: formulas and plain values written by the form
	 * author are not marked.
	 */
	public function testAuthorValuesAreNotMarked(): void {
		$groups = $this->groups(
			array(
				array(
					'to_set'     => '%note% + 1',
					'conditions' => array(
						array(
							'field'    => 'note',
							'operator' => 'equal',
							'value'    => '5',
						),
					),
				),
			)
		);

		$this->assertSame( '%note% + 1', $groups[0]['to_set'] );
		$this->assertArrayNotHasKey( 'to_set_from_preset', $groups[0] );
		$this->assertArrayNotHasKey( 'use_preset', $groups[0]['conditions'][0] );
	}
}
