<?php

namespace JFB_Tests\Wpunit\Actions\InsertPost;

use JFB_Modules\Actions_V2\Insert_Post\Insert_Post_Action;
use JFB_Modules\Actions_V2\Insert_Post\Properties\Post_Modifier;
use JFB_Modules\Actions_V2\Insert_Post\Properties\Post_Terms_Property;

/**
 * Insert/Update Post maps form fields to taxonomies ("jet_tax__<taxonomy>").
 * A submitted value is matched to an existing term (by ID, slug, name or the
 * term meta the field takes its option values from). A new term is created
 * only from free input - text fields, "custom value" options - or from a
 * manual option the form author listed. A choice field with options listed
 * from the same taxonomy never creates terms: an honest value always matches
 * an existing term, anything else was changed in the request.
 */
class PostTermsCreationTest extends \Codeception\TestCase\WPTestCase {

	protected function tearDown(): void {
		remove_all_filters( 'jet-form-builder/insert-post/create-missing-term' );
		wp_set_current_user( 0 );

		parent::tearDown();
	}

	private function block( string $name, array $attrs ): string {
		return '<!-- wp:jet-forms/' . $name . ' ' . wp_json_encode( (object) $attrs ) . ' /-->';
	}

	/**
	 * Runs the Insert/Update Post action for a form and a request.
	 *
	 * @return int Inserted or updated post ID.
	 */
	private function submit( string $blocks, array $fields_map, array $request ): int {
		// The handler is shared between submissions in one PHP process.
		jet_fb_action_handler()->response_data = array();

		jet_fb_context()->set_parsers( parse_blocks( $blocks ) );
		jet_fb_context()->set_request( $request );
		jet_fb_context()->apply_request();

		$action      = new Insert_Post_Action();
		$action->_id = 9100;

		jet_fb_action_handler()->save_action( $action, array() );

		$action->settings = array(
			'post_type'   => 'post',
			'post_status' => 'publish',
			'fields_map'  => array_merge( array( 'title' => 'post_title' ), $fields_map ),
		);

		jet_fb_action_handler()->process_single_action( $action );

		return jet_fb_action_handler()->get_inserted_post_id();
	}

	private function names( int $post_id, string $tax ): array {
		$names = wp_get_post_terms( $post_id, $tax, array( 'fields' => 'names' ) );
		sort( $names );

		return $names;
	}

	private function term_exists( string $name, string $tax ): bool {
		return (bool) get_term_by( 'name', $name, $tax );
	}

	private function checkbox_from_terms( string $tax, array $extra = array() ): string {
		return $this->block( 'text-field', array( 'name' => 'title' ) )
			. $this->block(
				'checkbox-field',
				array_merge(
					array(
						'name'               => 'pick',
						'field_options_from' => 'terms',
						'field_options_tax'  => $tax,
					),
					$extra
				)
			);
	}

	// Free input keeps creating terms.

	public function testTextFieldCreatesTagsAndCategories(): void {
		$post_id = $this->submit(
			$this->block( 'text-field', array( 'name' => 'title' ) )
			. $this->block( 'text-field', array( 'name' => 'tag' ) )
			. $this->block( 'text-field', array( 'name' => 'cat' ) ),
			array(
				'tag' => 'jet_tax__post_tag',
				'cat' => 'jet_tax__category',
			),
			array(
				'title' => 'T',
				'tag'   => 'Brand New',
				'cat'   => 'New Cat',
			)
		);

		$this->assertSame( array( 'Brand New' ), $this->names( $post_id, 'post_tag' ) );
		$this->assertSame( array( 'New Cat' ), $this->names( $post_id, 'category' ) );
	}

	public function testTextFieldCreatesNumericTag(): void {
		$post_id = $this->submit(
			$this->block( 'text-field', array( 'name' => 'title' ) ) . $this->block( 'text-field', array( 'name' => 'tag' ) ),
			array( 'tag' => 'jet_tax__post_tag' ),
			array(
				'title' => 'T',
				'tag'   => '2025',
			)
		);

		$this->assertSame( array( '2025' ), $this->names( $post_id, 'post_tag' ) );
	}

	public function testTextFieldReusesExistingTermBySlug(): void {
		wp_insert_term( 'My Topic', 'post_tag' );

		$post_id = $this->submit(
			$this->block( 'text-field', array( 'name' => 'title' ) ) . $this->block( 'text-field', array( 'name' => 'tag' ) ),
			array( 'tag' => 'jet_tax__post_tag' ),
			array(
				'title' => 'T',
				'tag'   => 'my-topic',
			)
		);

		$this->assertSame( array( 'My Topic' ), $this->names( $post_id, 'post_tag' ) );
		$this->assertSame( 1, (int) wp_count_terms( array( 'taxonomy' => 'post_tag', 'hide_empty' => false ) ) );
	}

	/**
	 * A typed name wins over another term whose slug equals it.
	 */
	public function testTextFieldMatchesNameBeforeSlug(): void {
		wp_insert_term( 'Beta', 'post_tag', array( 'slug' => 'alpha' ) );
		wp_insert_term( 'Alpha', 'post_tag', array( 'slug' => 'alpha-2' ) );

		$post_id = $this->submit(
			$this->block( 'text-field', array( 'name' => 'title' ) ) . $this->block( 'text-field', array( 'name' => 'tag' ) ),
			array( 'tag' => 'jet_tax__post_tag' ),
			array(
				'title' => 'T',
				'tag'   => 'Alpha',
			)
		);

		$this->assertSame( array( 'Alpha' ), $this->names( $post_id, 'post_tag' ) );
	}

	// Choice field with options from the same taxonomy.

	public function testChoiceFromTermsAttachesSelectedTerm(): void {
		$term = wp_insert_term( 'Kyiv', 'category' );

		$post_id = $this->submit(
			$this->checkbox_from_terms( 'category' ),
			array( 'pick' => 'jet_tax__category' ),
			array(
				'title' => 'T',
				'pick'  => array( (string) $term['term_id'] ),
			)
		);

		$this->assertSame( array( 'Kyiv' ), $this->names( $post_id, 'category' ) );
	}

	public function tamperedProvider(): array {
		return array(
			'new name'        => array( 'Evil [gallery]' ),
			'unknown term id' => array( '99999' ),
		);
	}

	/**
	 * @dataProvider tamperedProvider
	 */
	public function testChoiceFromTermsDoesNotCreateFromChangedValue( string $value ): void {
		$post_id = $this->submit(
			$this->checkbox_from_terms( 'category' ),
			array( 'pick' => 'jet_tax__category' ),
			array(
				'title' => 'T',
				'pick'  => array( $value ),
			)
		);

		$this->assertGreaterThan( 0, $post_id );
		$this->assertFalse( $this->term_exists( $value, 'category' ) );
		$this->assertNotContains( $value, $this->names( $post_id, 'category' ) );
	}

	public function valueFromProvider(): array {
		return array(
			'slug'         => array( 'slug', 'my-city' ),
			'name'         => array( 'name', 'My City' ),
			'numeric name' => array( 'name', '2024' ),
			'term meta'    => array( 'city_code', 'C-77' ),
		);
	}

	/**
	 * The field sends the slug, name or a term meta value instead of the ID.
	 *
	 * @dataProvider valueFromProvider
	 */
	public function testChoiceFromTermsMatchesValueFromKey( string $value_from, string $value ): void {
		$term = wp_insert_term( '2024' === $value ? '2024' : 'My City', 'post_tag' );
		add_term_meta( $term['term_id'], 'city_code', 'C-77' );

		$count = (int) wp_count_terms( array( 'taxonomy' => 'post_tag', 'hide_empty' => false ) );

		$post_id = $this->submit(
			$this->checkbox_from_terms( 'post_tag', array( 'value_from_key' => $value_from ) ),
			array( 'pick' => 'jet_tax__post_tag' ),
			array(
				'title' => 'T',
				'pick'  => array( $value ),
			)
		);

		$this->assertSame( array( '2024' === $value ? '2024' : 'My City' ), $this->names( $post_id, 'post_tag' ) );
		$this->assertSame( $count, (int) wp_count_terms( array( 'taxonomy' => 'post_tag', 'hide_empty' => false ) ) );
	}

	// Choice field with options from another taxonomy.

	public function testOptionsFromAnotherTaxonomyCreateSameNamedTerm(): void {
		$category = wp_insert_term( 'Lviv', 'category' );

		$post_id = $this->submit(
			$this->checkbox_from_terms( 'category' ),
			array( 'pick' => 'jet_tax__post_tag' ),
			array(
				'title' => 'T',
				'pick'  => array( (string) $category['term_id'], 'Not an option' ),
			)
		);

		$this->assertSame( array( 'Lviv' ), $this->names( $post_id, 'post_tag' ) );
		$this->assertFalse( $this->term_exists( 'Not an option', 'post_tag' ) );
		$this->assertFalse( $this->term_exists( (string) $category['term_id'], 'post_tag' ) );
	}

	/**
	 * Options from another taxonomy sent as slugs: the selected category is
	 * resolved first; a tag that only shares the slug is not attached.
	 */
	public function testOptionsFromAnotherTaxonomyResolveSourceOptionFirst(): void {
		wp_insert_term( 'News', 'category', array( 'slug' => 'news' ) );
		wp_insert_term( 'Newsroom', 'post_tag', array( 'slug' => 'news' ) );

		$post_id = $this->submit(
			$this->checkbox_from_terms( 'category', array( 'value_from_key' => 'slug' ) ),
			array( 'pick' => 'jet_tax__post_tag' ),
			array(
				'title' => 'T',
				'pick'  => array( 'news' ),
			)
		);

		$this->assertSame( array( 'News' ), $this->names( $post_id, 'post_tag' ) );
	}

	/**
	 * "Value from" = term_taxonomy_id on a site where it differs from the
	 * term ID.
	 */
	public function testChoiceFromTermsMatchesTermTaxonomyId(): void {
		global $wpdb;

		// Make term IDs and term_taxonomy IDs diverge.
		$wpdb->insert( $wpdb->terms, array( 'name' => 'gap', 'slug' => 'gap-' . wp_generate_password( 6, false ), 'term_group' => 0 ) );

		$target = wp_insert_term( 'TT Target', 'post_tag' );
		$this->assertNotSame( (int) $target['term_id'], (int) $target['term_taxonomy_id'] );

		$post_id = $this->submit(
			$this->checkbox_from_terms( 'post_tag', array( 'value_from_key' => 'term_taxonomy_id' ) ),
			array( 'pick' => 'jet_tax__post_tag' ),
			array(
				'title' => 'T',
				'pick'  => array( (string) $target['term_taxonomy_id'] ),
			)
		);

		$this->assertSame( array( 'TT Target' ), $this->names( $post_id, 'post_tag' ) );
	}

	/**
	 * "Value from" = another WP_Term field (description).
	 */
	public function testChoiceFromTermsMatchesTermField(): void {
		wp_insert_term( 'Described', 'post_tag', array( 'description' => 'unique-desc-77' ) );

		$post_id = $this->submit(
			$this->checkbox_from_terms( 'post_tag', array( 'value_from_key' => 'description' ) ),
			array( 'pick' => 'jet_tax__post_tag' ),
			array(
				'title' => 'T',
				'pick'  => array( 'unique-desc-77' ),
			)
		);

		$this->assertSame( array( 'Described' ), $this->names( $post_id, 'post_tag' ) );
	}

	/**
	 * A terms field that keeps the block's default taxonomy (category) has no
	 * field_options_tax in its saved attributes.
	 */
	public function testTermsFieldWithDefaultTaxonomy(): void {
		$category = wp_insert_term( 'Default Tax City', 'category' );

		$post_id = $this->submit(
			$this->block( 'text-field', array( 'name' => 'title' ) )
			. $this->block(
				'checkbox-field',
				array(
					'name'               => 'pick',
					'field_options_from' => 'terms',
				)
			),
			array( 'pick' => 'jet_tax__post_tag' ),
			array(
				'title' => 'T',
				'pick'  => array( (string) $category['term_id'] ),
			)
		);

		$this->assertSame( array( 'Default Tax City' ), $this->names( $post_id, 'post_tag' ) );
	}

	/**
	 * Options from another taxonomy, restricted by the option query: a
	 * category that exists but is not offered in the form is not an option.
	 */
	public function testOptionsFromAnotherTaxonomyRespectOfferedOptions(): void {
		$offered = wp_insert_term( 'Offered City', 'category' );
		$hidden  = wp_insert_term( 'Hidden City', 'category' );

		$restrict = static function ( $block ) use ( $offered ) {
			if ( 'terms' === $block->get_query()->rep_item_id() ) {
				$block->get_query()->set_query( 'include', array( (int) $offered['term_id'] ) );
			}
		};

		add_action( 'jet-form-builder/option-query/set-in-block', $restrict, 20 );

		try {
			$post_id = $this->submit(
				$this->checkbox_from_terms( 'category' ),
				array( 'pick' => 'jet_tax__post_tag' ),
				array(
					'title' => 'T',
					'pick'  => array( (string) $offered['term_id'], (string) $hidden['term_id'] ),
				)
			);
		} finally {
			remove_action( 'jet-form-builder/option-query/set-in-block', $restrict, 20 );
		}

		$this->assertSame( array( 'Offered City' ), $this->names( $post_id, 'post_tag' ) );
		$this->assertFalse( $this->term_exists( 'Hidden City', 'post_tag' ) );
	}

	// Manual options and custom values.

	public function testManualOptionCreatesTermOnlyForListedValue(): void {
		$blocks = $this->block( 'text-field', array( 'name' => 'title' ) )
			. $this->block(
				'select-field',
				array(
					'name'          => 'stage',
					'field_options' => array(
						array(
							'value' => 'Planned',
							'label' => 'Planned',
						),
					),
				)
			);

		$post_id = $this->submit( $blocks, array( 'stage' => 'jet_tax__category' ), array( 'title' => 'T', 'stage' => 'Planned' ) );

		$this->assertSame( array( 'Planned' ), $this->names( $post_id, 'category' ) );

		$this->submit( $blocks, array( 'stage' => 'jet_tax__category' ), array( 'title' => 'T', 'stage' => 'Injected' ) );

		$this->assertFalse( $this->term_exists( 'Injected', 'category' ) );
	}

	/**
	 * A manual option without a value key is rendered with its index as the
	 * value (Manual_Query::fetch()); that value is one of the options.
	 */
	public function testManualOptionWithoutValueUsesIndex(): void {
		$blocks = $this->block( 'text-field', array( 'name' => 'title' ) )
			. $this->block(
				'select-field',
				array(
					'name'          => 'stage',
					'field_options' => array(
						array( 'label' => 'First' ),
						array( 'label' => 'Second' ),
					),
				)
			);

		$post_id = $this->submit( $blocks, array( 'stage' => 'jet_tax__post_tag' ), array( 'title' => 'T', 'stage' => '1' ) );

		$this->assertSame( array( '1' ), $this->names( $post_id, 'post_tag' ) );

		$this->submit( $blocks, array( 'stage' => 'jet_tax__post_tag' ), array( 'title' => 'T', 'stage' => '7' ) );

		$this->assertFalse( $this->term_exists( '7', 'post_tag' ) );
	}

	public function testCustomValueOptionKeepsCreatingTerms(): void {
		$post_id = $this->submit(
			$this->checkbox_from_terms( 'post_tag', array( 'custom_option' => array( 'allow' => true ) ) ),
			array( 'pick' => 'jet_tax__post_tag' ),
			array(
				'title' => 'T',
				'pick'  => array( 'Typed by visitor' ),
			)
		);

		$this->assertSame( array( 'Typed by visitor' ), $this->names( $post_id, 'post_tag' ) );
	}

	/**
	 * Custom values enabled: a selected option is still resolved through the
	 * field's "Value from" key; only an unmatched value is the visitor's own.
	 */
	public function testCustomValueFieldStillResolvesSelectedOption(): void {
		$odesa = wp_insert_term( 'Odesa', 'post_tag' );
		add_term_meta( $odesa['term_id'], 'city_code', 'C-77' );

		$post_id = $this->submit(
			$this->checkbox_from_terms(
				'post_tag',
				array(
					'value_from_key' => 'city_code',
					'custom_option'  => array( 'allow' => true ),
				)
			),
			array( 'pick' => 'jet_tax__post_tag' ),
			array(
				'title' => 'T',
				'pick'  => array( 'C-77', 'Fresh Tag' ),
			)
		);

		$this->assertSame( array( 'Fresh Tag', 'Odesa' ), $this->names( $post_id, 'post_tag' ) );
		$this->assertFalse( $this->term_exists( 'C-77', 'post_tag' ) );
	}

	public function testCustomValueFieldWithOptionsFromAnotherTaxonomy(): void {
		$lviv = wp_insert_term( 'Lviv', 'category' );

		$post_id = $this->submit(
			$this->checkbox_from_terms( 'category', array( 'custom_option' => array( 'allow' => true ) ) ),
			array( 'pick' => 'jet_tax__post_tag' ),
			array(
				'title' => 'T',
				'pick'  => array( (string) $lviv['term_id'], 'Typed Cross' ),
			)
		);

		$this->assertSame( array( 'Lviv', 'Typed Cross' ), $this->names( $post_id, 'post_tag' ) );
		$this->assertFalse( $this->term_exists( (string) $lviv['term_id'], 'post_tag' ) );
	}

	/**
	 * Radio stores "custom value" as a boolean.
	 */
	public function testRadioCustomValueCreatesTerm(): void {
		$existing = wp_insert_term( 'Radio Existing', 'post_tag' );

		$blocks = $this->block( 'text-field', array( 'name' => 'title' ) )
			. $this->block(
				'radio-field',
				array(
					'name'               => 'pick',
					'field_options_from' => 'terms',
					'field_options_tax'  => 'post_tag',
					'custom_option'      => true,
				)
			);

		$post_id = $this->submit( $blocks, array( 'pick' => 'jet_tax__post_tag' ), array( 'title' => 'T', 'pick' => 'Radio Typed' ) );
		$this->assertSame( array( 'Radio Typed' ), $this->names( $post_id, 'post_tag' ) );

		$post_id = $this->submit( $blocks, array( 'pick' => 'jet_tax__post_tag' ), array( 'title' => 'T', 'pick' => (string) $existing['term_id'] ) );
		$this->assertSame( array( 'Radio Existing' ), $this->names( $post_id, 'post_tag' ) );
	}

	public function testRadioCustomValueWithManualOptions(): void {
		$post_id = $this->submit(
			$this->block( 'text-field', array( 'name' => 'title' ) )
			. $this->block(
				'radio-field',
				array(
					'name'          => 'stage',
					'custom_option' => true,
					'field_options' => array(
						array(
							'value' => 'Planned',
							'label' => 'Planned',
						),
					),
				)
			),
			array( 'stage' => 'jet_tax__category' ),
			array(
				'title' => 'T',
				'stage' => 'Own Stage',
			)
		);

		$this->assertSame( array( 'Own Stage' ), $this->names( $post_id, 'category' ) );
	}

	// Filter and updates.

	public function testFilterCanDisableCreation(): void {
		add_filter( 'jet-form-builder/insert-post/create-missing-term', '__return_false' );

		$post_id = $this->submit(
			$this->block( 'text-field', array( 'name' => 'title' ) ) . $this->block( 'text-field', array( 'name' => 'tag' ) ),
			array( 'tag' => 'jet_tax__post_tag' ),
			array(
				'title' => 'T',
				'tag'   => 'Should Not Exist',
			)
		);

		$this->assertSame( array(), $this->names( $post_id, 'post_tag' ) );
		$this->assertFalse( $this->term_exists( 'Should Not Exist', 'post_tag' ) );
	}

	/**
	 * The filter can allow new terms for one field, e.g. a list that the
	 * site's own script extends with new options.
	 */
	public function testFilterCanAllowCreationForOneField(): void {
		add_filter(
			'jet-form-builder/insert-post/create-missing-term',
			static function ( $create, $term, $tax, $field ) {
				return 'pick' === $field ? true : $create;
			},
			10,
			4
		);

		$post_id = $this->submit(
			$this->checkbox_from_terms( 'category' ),
			array( 'pick' => 'jet_tax__category' ),
			array(
				'title' => 'T',
				'pick'  => array( 'Added By Script' ),
			)
		);

		$this->assertSame( array( 'Added By Script' ), $this->names( $post_id, 'category' ) );
	}

	/**
	 * The filter can also allow a value that is not an option of a field
	 * listing another taxonomy; the submitted value becomes the term name.
	 */
	public function testFilterCanAllowUnlistedValueOfCrossTaxonomyField(): void {
		$existing = wp_insert_term( 'Existing Script Tag', 'post_tag' );

		add_filter(
			'jet-form-builder/insert-post/create-missing-term',
			static function ( $create, $term, $tax, $field ) {
				return 'pick' === $field ? true : $create;
			},
			10,
			4
		);

		$post_id = $this->submit(
			$this->checkbox_from_terms( 'category' ),
			array( 'pick' => 'jet_tax__post_tag' ),
			array(
				'title' => 'T',
				'pick'  => array( 'Script Added', 'Existing Script Tag' ),
			)
		);

		$this->assertSame( array( 'Existing Script Tag', 'Script Added' ), $this->names( $post_id, 'post_tag' ) );
		$this->assertSame( 1, count( get_terms( array( 'taxonomy' => 'post_tag', 'name' => 'Existing Script Tag', 'hide_empty' => false ) ) ) );
		$this->assertSame( (int) $existing['term_id'], (int) get_term_by( 'name', 'Existing Script Tag', 'post_tag' )->term_id );
	}

	public function testSkippedValuesKeepPostTermsOnUpdate(): void {
		// Updating a post needs the right to edit it.
		wp_set_current_user( self::factory()->user->create( array( 'role' => 'administrator' ) ) );

		$kept    = wp_insert_term( 'Kept', 'category' );
		$post_id = self::factory()->post->create();
		wp_set_post_terms( $post_id, array( $kept['term_id'] ), 'category' );

		$this->submit(
			$this->block( 'text-field', array( 'name' => 'title' ) )
			. $this->block( 'text-field', array( 'name' => 'pid' ) )
			. $this->block( 'checkbox-field', array( 'name' => 'pick', 'field_options_from' => 'terms', 'field_options_tax' => 'category' ) ),
			array(
				'pid'  => 'ID',
				'pick' => 'jet_tax__category',
			),
			array(
				'title' => 'T',
				'pid'   => (string) $post_id,
				'pick'  => array( 'Injected' ),
			)
		);

		$this->assertSame( array( 'Kept' ), $this->names( $post_id, 'category' ) );
	}

	/**
	 * A term_taxonomy_id of another taxonomy is not a term of this one
	 * (get_term_by() ignores the taxonomy for that field). On an update the
	 * post keeps its terms instead of losing them.
	 */
	public function testForeignTermTaxonomyIdIsRejected(): void {
		wp_set_current_user( self::factory()->user->create( array( 'role' => 'administrator' ) ) );

		$kept     = wp_insert_term( 'Kept Tag', 'post_tag' );
		$category = wp_insert_term( 'Foreign Category', 'category' );
		$post_id  = self::factory()->post->create();
		wp_set_post_terms( $post_id, array( (int) $kept['term_id'] ), 'post_tag' );

		$this->submit(
			$this->block( 'text-field', array( 'name' => 'title' ) )
			. $this->block( 'text-field', array( 'name' => 'pid' ) )
			. $this->block(
				'checkbox-field',
				array(
					'name'               => 'pick',
					'field_options_from' => 'terms',
					'field_options_tax'  => 'post_tag',
					'value_from_key'     => 'term_taxonomy_id',
				)
			),
			array(
				'pid'  => 'ID',
				'pick' => 'jet_tax__post_tag',
			),
			array(
				'title' => 'T',
				'pid'   => (string) $post_id,
				'pick'  => array( (string) $category['term_taxonomy_id'] ),
			)
		);

		$this->assertSame( array( 'Kept Tag' ), $this->names( $post_id, 'post_tag' ) );
	}

	/**
	 * Backward compatibility: an extension that replaces the property (via
	 * jet-form-builder/post-modifier/object-properties) and overrides
	 * sanitize_term() still decides the terms of every submitted value.
	 */
	public function testSanitizeTermOverrideIsUsed(): void {
		$override = new class() extends Post_Terms_Property {
			public $seen = array();

			protected function sanitize_term( $term, $tax ) {
				$this->seen[] = $term;

				return 'custom-' . $term;
			}

			public function collected(): array {
				return $this->taxonomies;
			}
		};

		$override->do_before( 'jet_tax__post_tag', array( 'Anything', 'Other' ), new Post_Modifier() );

		$this->assertSame( array( 'Anything', 'Other' ), $override->seen );
		$this->assertSame( array( 'post_tag' => array( 'custom-Anything', 'custom-Other' ) ), $override->collected() );
		$this->assertFalse( $this->term_exists( 'Anything', 'post_tag' ) );
	}

	/**
	 * Backward compatibility: without a known source field (the property is
	 * used directly) a missing term is created as before.
	 */
	public function testUnknownSourceFieldKeepsCreatingTerms(): void {
		$property = new Post_Terms_Property();
		$method   = new \ReflectionMethod( $property, 'sanitize_term' );
		$method->setAccessible( true );

		$term_id = $method->invoke( $property, 'Legacy Tag', 'post_tag' );

		$this->assertSame( 'Legacy Tag', get_term( $term_id, 'post_tag' )->name );
	}
}
