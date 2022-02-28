<?php


namespace Jet_Form_Builder\Blocks;

use Jet_Form_Builder\Form_Manager;

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

	public static function find_block( $callable, $blocks ): array {
		if ( ! is_callable( $callable ) ) {
			return array();
		}
		foreach ( $blocks as $block ) {
			if ( ! isset( $block['blockName'] ) || ! isset( $block['attrs'] ) ) {
				continue;
			}
			if ( call_user_func( $callable, $block ) ) {
				return $block;
			}

			if ( 0 < count( $block['innerBlocks'] ) ) {
				$find = self::find_block( $callable, $block['innerBlocks'] );

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
	public static function filter_blocks_by_namespace( $blocks, $namespace = Form_Manager::NAMESPACE_FIELDS ): array {
		$fields = array();

		self::filter_blocks(
			function ( $block ) use ( $namespace ) {
				return ( false !== stripos( $block['blockName'], $namespace ) );
			},
			$fields,
			$blocks
		);

		return $fields;
	}

	public static function filter_blocks( $callable, array &$storage, array $source ) {
		foreach ( $source as $index => $block ) {
			if ( ! isset( $block['blockName'] ) ) {
				continue;
			}
			if ( call_user_func( $callable, $block ) ) {
				$storage[] = $block;
			}

			if ( ! empty( $block['innerBlocks'] ) ) {
				self::filter_blocks( $callable, $storage, $block['innerBlocks'] );
			}
		}
	}

	public static function get_blocks_by_post( $post_id ): array {
		return parse_blocks( get_post( $post_id )->post_content );
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

}
