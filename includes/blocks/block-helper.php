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
	 * @param string $namespace
	 *
	 * @return array
	 */
	public static function filter_blocks_by_namespace( $blocks, $scope = Form_Manager::NAMESPACE_FIELDS ): array {
		$fields = array();

		self::filter_blocks(
			function ( $block ) use ( $scope ) {
				return ( false !== stripos( $block['blockName'], $scope ) );
			},
			$fields,
			$blocks
		);

		return $fields;
	}

	public static function filter_blocks( $callback, array &$storage, array $source ) {
		foreach ( $source as $index => $block ) {
			if ( ! isset( $block['blockName'] ) ) {
				continue;
			}
			if ( call_user_func( $callback, $block ) ) {
				$storage[] = $block;
			}

			if ( ! empty( $block['innerBlocks'] ) ) {
				self::filter_blocks( $callback, $storage, $block['innerBlocks'] );
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
				if ( 'core/block' !== $block['blockName'] ) {
						return $block;
				}
				$reusable_id          = $block['attrs']['ref'] ?? 0;
				$block['innerBlocks'] = self::get_blocks_by_post( $reusable_id );

				return $block;
			},
			parse_blocks( $post->post_content )
		);
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

	public static function is_field( $block_name ): bool {
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

}
