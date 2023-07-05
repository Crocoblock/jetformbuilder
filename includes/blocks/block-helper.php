<?php


namespace Jet_Form_Builder\Blocks;

use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Form_Manager;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Class Helper
 *
 * @package Jet_Form_Builder\Blocks
 */
class Block_Helper {

	/**
	 * @param $value
	 * @param $blocks
	 *
	 * @return array
	 */
	public static function find_block_by_name( $value, $blocks ): array {
		return self::find_block_by_attr( $value, 'name', $blocks );
	}

	/**
	 * @param $value
	 * @param $attr_name
	 * @param $blocks
	 *
	 * @return array
	 */
	public static function find_block_by_attr( $value, $attr_name, $blocks ): array {
		return self::find_block(
			function ( $block ) use ( $value, $attr_name ) {
				if ( empty( $block['blockName'] ) || ! self::is_field( $block['blockName'] ) ) {
					return false;
				}
				return ( ( $block['attrs'][ $attr_name ] ?? false ) === $value );
			},
			$blocks
		);
	}

	public static function find_by_block_name( array $blocks, string $block_name ): array {
		return self::find_block(
			function ( $block ) use ( $block_name ) {
				return ( ( $block['blockName'] ?? false ) === $block_name );
			},
			$blocks
		);
	}

	public static function get_form_field_names( $blocks ): array {
		$names = array();

		self::find_block(
			function ( $block ) use ( &$names ) {
				if ( empty( $block['blockName'] ) || ! self::is_field( $block['blockName'] ) ) {
					return false;
				}
				if ( ! empty( $block['attrs']['name'] ) ) {
					$names[ $block['attrs']['name'] ] = 1;
				}

				return false;
			},
			$blocks
		);

		return $names;
	}

	public static function find_block( $callback, $blocks ): array {
		if ( ! is_callable( $callback ) ) {
			return array();
		}
		foreach ( $blocks as $block ) {
			if ( ! isset( $block['blockName'] ) || ! isset( $block['attrs'] ) ) {
				continue;
			}
			if ( call_user_func( $callback, $block ) ) {
				return $block;
			}

			if ( 0 < count( $block['innerBlocks'] ) ) {
				$find = self::find_block( $callback, $block['innerBlocks'] );

				if ( $find ) {
					return $find;
				}
			}
		}

		return array();
	}


	/**
	 * @param $blocks
	 * @param string $scope
	 *
	 * @return array
	 */
	public static function filter_blocks_by_namespace( $blocks, string $scope = Form_Manager::NAMESPACE_FIELDS ): array {
		$fields    = array();
		$generator = self::generate_blocks_in_space( $blocks, $scope );

		foreach ( $generator as $block ) {
			$fields[] = $block;
		}

		return $fields;
	}

	/**
	 * @since 3.1.0
	 *
	 * @param array $blocks
	 * @param string $scope
	 *
	 * @return \Generator
	 */
	public static function generate_blocks_in_space(
		array $blocks,
		string $scope = Form_Manager::NAMESPACE_FIELDS
	): \Generator {
		return self::generate_blocks(
			static function ( $block ) use ( $scope ) {
				return ( false !== stripos( $block['blockName'], $scope ) );
			},
			$blocks
		);
	}

	/**
	 * @param $callback
	 * @param array $source
	 *
	 * @return \Generator
	 * @since 3.1.0
	 */
	public static function generate_blocks( $callback, array $source ): \Generator {
		foreach ( $source as $index => $block ) {
			if ( ! isset( $block['blockName'] ) ) {
				continue;
			}
			if ( call_user_func( $callback, $block ) ) {
				yield $block;
			}

			if ( ! empty( $block['innerBlocks'] ) ) {
				yield from self::generate_blocks( $callback, $block['innerBlocks'] );
			}
		}
	}

	public static function get_blocks_by_post( $post_id ): array {
		$post = get_post( $post_id );

		if ( ! is_a( $post, \WP_Post::class ) ) {
			return array();
		}

		return array_map(
			function ( $block ) {
				self::walk_by_reusable( $block );

				return $block;
			},
			parse_blocks( $post->post_content )
		);
	}

	private static function walk_by_reusable( array &$block ) {
		if ( ! empty( $block['innerBlocks'] ) ) {
			foreach ( $block['innerBlocks'] as &$current ) {
				self::walk_by_reusable( $current );
			}

			return;
		}

		if ( 'core/block' !== $block['blockName'] ) {
			return;
		}

		$reusable_id          = $block['attrs']['ref'] ?? 0;
		$block['innerBlocks'] = self::get_blocks_by_post( $reusable_id );
	}

	public static function delete_namespace( $block ): string {
		if ( is_array( $block ) ) {
			$block = $block['blockName'] ?? '';
		}

		if ( stripos( $block, '/' ) === false ) {
			return $block;
		}

		return explode( '/', $block )[1] ?? '';
	}

	public static function is_field( string $block_name ): bool {
		return ( stripos( $block_name, Form_Manager::NAMESPACE_FIELDS ) !== false );
	}

	public static function render_with_context( $block, $context ) {
		return ( new \WP_Block( $block, $context ) )->render();
	}

	public static function pref( string $block_name ): string {
		return Form_Manager::NAMESPACE_FIELDS . self::delete_namespace( $block_name );
	}

	public static function get_attrs_from_block( array $block, array $attrs_list ): array {
		$source = $block['attrs'] ?? $block;
		$attrs  = array();

		foreach ( $attrs_list as $attr_name ) {
			if ( ! isset( $source[ $attr_name ] ) ) {
				continue;
			}
			$attrs[ $attr_name ] = $source[ $attr_name ];
		}

		return $attrs;
	}

	/**
	 * @param $names
	 *
	 * @return array|string
	 */
	public static function get_block_names( $names ) {
		if ( ! is_array( $names ) ) {
			$block = jet_form_builder()->blocks->get_field_by_name( $names );

			return $block->get_name();
		}

		return array_map(
			array( static::class, 'get_block_names' ),
			$names
		);
	}

	public static function current_block(): array {
		return is_array( \WP_Block_Supports::$block_to_render )
			? \WP_Block_Supports::$block_to_render
			: array();
	}


	/**
	 * @return \WP_Block_Type|null
	 */
	public static function current_block_type() {
		$name = self::current_block()['blockName'] ?? '';

		return \WP_Block_Type_Registry::get_instance()->get_registered( $name );
	}

}
