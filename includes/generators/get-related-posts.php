<?php
/**
 * Related Posts Generator.
 *
 * Generates a list of posts related to a value from another field.
 * Supports meta field, post_parent, and taxonomy-based relations.
 * Designed for cascading select scenarios (e.g. Project → Tasks).
 *
 * @package Jet_Form_Builder\Generators
 */

namespace Jet_Form_Builder\Generators;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Get_Related_Posts class.
 *
 * Generates options from posts related to the value of another field.
 */
class Get_Related_Posts extends Base_V2 {

	/**
	 * Returns generator ID.
	 *
	 * @return string
	 */
	public function get_id() {
		return 'get_related_posts';
	}

	/**
	 * Returns generator name.
	 *
	 * @return string
	 */
	public function get_name() {
		return __( 'Get related posts list', 'jet-form-builder' );
	}

	/**
	 * Returns structured settings schema.
	 *
	 * @return array
	 */
	public function get_settings_schema(): array {
		return array(
			'post_type'      => array(
				'type'    => 'string',
				'default' => 'post',
				'label'   => __( 'Post Type', 'jet-form-builder' ),
				'control' => 'select',
				'options' => $this->get_post_types_options(),
				'help'    => __( 'The type of posts to show as options in this field.', 'jet-form-builder' ),
			),
			'relation_type'  => array(
				'type'    => 'string',
				'default' => 'meta_field',
				'label'   => __( 'Filter By', 'jet-form-builder' ),
				'control' => 'select',
				'options' => array(
					array( 'value' => 'meta_field',  'label' => 'Match by meta key' ),
					array( 'value' => 'post_parent', 'label' => 'Match by WordPress parent post' ),
					array( 'value' => 'taxonomy',    'label' => 'Match by taxonomy term' ),
				),
				'help'    => __( 'How the listed posts are connected to the value from the watched field.', 'jet-form-builder' ),
			),
			'relation_key'       => array(
				'type'        => 'string',
				'default'     => '',
				'label'       => __( 'Relation Key', 'jet-form-builder' ),
				'control'     => 'text',
				'placeholder' => 'related_project_id',
				'help'        => __( 'Custom field name (for "Meta Field") or taxonomy slug (for "Taxonomy Term").', 'jet-form-builder' ),
				'condition'   => array(
					'relation_type!' => 'post_parent'
				),
			),
			'relation_key_value' => array(
				'type'        => 'string',
				'default'     => '',
				'label'       => __( 'Filter Value', 'jet-form-builder' ),
				'control'     => 'text',
				'placeholder' => '42',
				'help'        => __( 'Static value to filter by.', 'jet-form-builder' ),
				'condition'   => array(
					'relation_type!' => 'post_parent'
				),
			),
			'parent_post_id' => array(
				'type'      => 'string',
				'default'   => '',
				'label'     => __( 'Parent Post ID', 'jet-form-builder' ),
				'control'   => 'text',
				'help'      => __( 'Static or dynamic parent post ID used to load child posts when auto-update is not active. Enter `current_post_id` to load child posts of the current post.', 'jet-form-builder' ),
				'condition' => array(
					'relation_type' => 'post_parent'
				),
			),
			'value_field'    => array(
				'type'    => 'string',
				'default' => 'ID',
				'label'   => __( 'Option Value', 'jet-form-builder' ),
				'control' => 'select',
				'options' => array(
					array( 'value' => 'ID',         'label' => 'Post ID' ),
					array( 'value' => 'post_title', 'label' => 'Post Title' ),
					array( 'value' => 'post_name',  'label' => 'Post Slug' ),
				),
			),
			'label_field'    => array(
				'type'    => 'string',
				'default' => 'post_title',
				'label'   => __( 'Option Label', 'jet-form-builder' ),
				'control' => 'select',
				'options' => array(
					array( 'value' => 'post_title',   'label' => 'Post Title' ),
					array( 'value' => 'post_name',    'label' => 'Post Slug' ),
					array( 'value' => 'post_excerpt', 'label' => 'Post Excerpt' ),
				),
			),
			'posts_per_page' => array(
				'type'    => 'number',
				'default' => -1,
				'label'   => __( 'Max Items', 'jet-form-builder' ),
				'control' => 'number',
				'min'     => -1,
				'help'    => __( 'Maximum number of options to show. Set to -1 to show all.', 'jet-form-builder' ),
			),
			'orderby'        => array(
				'type'    => 'string',
				'default' => 'title',
				'label'   => __( 'Order By', 'jet-form-builder' ),
				'control' => 'select',
				'options' => array(
					array( 'value' => 'title',      'label' => 'Title' ),
					array( 'value' => 'date',       'label' => 'Date' ),
					array( 'value' => 'ID',         'label' => 'ID' ),
					array( 'value' => 'menu_order', 'label' => 'Menu Order' ),
				),
			),
		);
	}

	/**
	 * Get public post types as select options.
	 *
	 * @return array
	 */
	private function get_post_types_options(): array {
		$options = array();

		foreach ( get_post_types( array(), 'objects' ) as $post_type ) {
			$options[] = array(
				'value' => $post_type->name,
				'label' => $post_type->label,
			);
		}

		return $options;
	}

	/**
	 * Whether this generator supports auto-update.
	 *
	 * @return bool
	 */
	public function supports_auto_update(): bool {
		return true;
	}

	/**
	 * Returns context field descriptions for auto-update.
	 *
	 * @return array
	 */
	public function get_auto_update_context_fields(): array {
		return array(
			array(
				'single'      => true,
				'description' => __( 'The Trigger Field value overrides the static filter above. If the Trigger Field is empty, the static filter is used when configured. Otherwise, this list will be empty.', 'jet-form-builder' ),
				'example'     => __( 'Select the field that controls this list.', 'jet-form-builder' ),
			),
		);
	}

	/**
	 * Returns the auto-update value type supported by this generator.
	 *
	 * @return string
	 */
	public function get_auto_update_value_type(): string {
		return 'scalar';
	}

	/**
	 * Empty trigger may fall back to static filter settings when configured.
	 *
	 * @return string
	 */
	public function get_auto_update_empty_context_policy(): string {
		return 'fallback_to_static_if_configured';
	}

	/**
	 * Whether current related-posts settings provide a valid static fallback.
	 *
	 * @param array $settings Parsed generator settings.
	 *
	 * @return bool
	 */
	public function has_auto_update_static_fallback( array $settings ): bool {
		$relation_type = $settings['relation_type'] ?? 'meta_field';
		$filter_value  = $this->resolve_source_value( $this->get_static_source_value( $settings ) );

		if ( 'post_parent' === $relation_type ) {
			return null !== $filter_value && '' !== $filter_value;
		}

		$relation_key = trim( (string) ( $settings['relation_key'] ?? '' ) );

		return '' !== $relation_key && null !== $filter_value && '' !== $filter_value;
	}

	/**
	 * Generate with context from dependent fields.
	 *
	 * @param array $settings Parsed settings.
	 * @param array $context  ['field_name' => 'value'] from listened fields.
	 *
	 * @return array
	 */
	public function generate_with_context( array $settings, array $context = array() ): array {
		if ( empty( $context ) ) {
			if ( $this->has_auto_update_static_fallback( $settings ) ) {
				$settings['_related_value'] = $this->get_static_source_value( $settings );
				return $this->generate( $settings );
			}

			return array();
		}

		// Take the first context value as the relation source.
		$settings['_related_value'] = reset( $context );
		$source_value               = $this->resolve_source_value( $settings['_related_value'] );

		if ( null === $source_value || '' === $source_value ) {
			if ( $this->has_auto_update_static_fallback( $settings ) ) {
				$settings['_related_value'] = $this->get_static_source_value( $settings );
				return $this->generate( $settings );
			}

			return array();
		}

		return $this->generate( $settings );
	}

	/**
	 * Generates options from related posts.
	 *
	 * @param array $args Settings from schema + optional _related_value.
	 *
	 * @return array
	 */
	public function generate( $args ) {
		$post_type     = sanitize_key( $args['post_type'] ?? 'post' );
		$relation_type = $args['relation_type'] ?? 'meta_field';
		$raw_source_value = $args['_related_value'] ?? (
			'post_parent' === $relation_type
				? ( $args['parent_post_id'] ?? null )
				: ( $args['relation_key_value'] ?? null )
		);

		// _related_value comes from auto-update context.
		// Static fallback depends on the selected relation type.
		$source_value = $this->resolve_source_value( $raw_source_value );

		// If the relation filter is configured but the source value is empty, return nothing.
		if ( 'post_parent' !== $relation_type && ( null === $source_value || '' === $source_value ) ) {
			$relation_key = $args['relation_key'] ?? '';
			if ( $relation_key ) {
				return array();
			}
		}

		$query_args = array(
			'post_type'      => $post_type,
			'posts_per_page' => intval( $args['posts_per_page'] ?? -1 ),
			'post_status'    => 'publish',
			'orderby'        => $args['orderby'] ?? 'title',
			'order'          => 'ASC',
		);

		// Apply relation filter when a source value is present (direct call without context returns all posts).
		if ( null !== $source_value && '' !== $source_value ) {
			switch ( $relation_type ) {
				case 'meta_field':
					$relation_key = $args['relation_key'] ?? '';
					if ( $relation_key ) {
						$query_args['meta_query'] = array(
							array(
								'key'   => $relation_key,
								'value' => $source_value,
							),
						);
					}
					break;

				case 'post_parent':
					if ( '' !== (string) $raw_source_value && ! is_numeric( $source_value ) ) {
						return array();
					}

					$query_args['post_parent'] = intval( $source_value );
					break;

				case 'taxonomy':
					$taxonomy = $args['relation_key'] ?? 'category';
					$query_args['tax_query'] = array(
						array(
							'taxonomy' => $taxonomy,
							'field'    => 'term_id',
							'terms'    => intval( $source_value ),
						),
					);
					break;
			}
		}

		$posts       = get_posts( $query_args );
		$value_field = $args['value_field'] ?? 'ID';
		$label_field = $args['label_field'] ?? 'post_title';
		$result      = array();

		foreach ( $posts as $post ) {
			$result[] = array(
				'value' => strval( $post->$value_field ),
				'label' => strval( $post->$label_field ),
			);
		}

		return $result;
	}

	/**
	 * Resolve dynamic/static source value before applying filters.
	 *
	 * @param mixed $value Raw source value from settings or context.
	 *
	 * @return string|null
	 */
	private function resolve_source_value( $value ): ?string {
		if ( null === $value ) {
			return null;
		}

		if ( is_array( $value ) ) {
			$value = reset( $value );
		}

		$value = trim( (string) $value );

		if ( '' === $value ) {
			return '';
		}

		return $this->resolve_special_source_alias( $value );
	}

	/**
	 * Resolve simple aliases for current post context.
	 *
	 * @param string $value Raw or unresolved source value.
	 *
	 * @return string
	 */
	private function resolve_special_source_alias( string $value ): string {
		if ( 'current_post_id' !== $value ) {
			return $value;
		}

		$current_post_id = $this->get_current_post_id();

		return $current_post_id ? (string) $current_post_id : '';
	}

	/**
	 * Get current post ID for frontend render and AJAX fallback.
	 *
	 * @return int
	 */
	private function get_current_post_id(): int {
		global $post;

		if ( ! empty( $post->ID ) ) {
			return absint( $post->ID );
		}

		if ( wp_doing_ajax() ) {
			return absint( url_to_postid( wp_get_referer() ) );
		}

		return 0;
	}

	/**
	 * Get static fallback source value from generator settings.
	 *
	 * @param array $settings Parsed generator settings.
	 *
	 * @return mixed
	 */
	private function get_static_source_value( array $settings ) {
		return 'post_parent' === ( $settings['relation_type'] ?? 'meta_field' )
			? ( $settings['parent_post_id'] ?? null )
			: ( $settings['relation_key_value'] ?? null );
	}
}
