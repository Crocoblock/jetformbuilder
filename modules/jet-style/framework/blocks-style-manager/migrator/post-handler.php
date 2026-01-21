<?php
namespace Crocoblock\Blocks_Style\Migrator;

class Post_Handler {

	private $post_id;
	private $data;
	private $normalizer;

	/**
	 * Migrator_Post_Handler constructor.
	 *
	 * @param int    $post_id Post ID.
	 * @param string $meta_value Meta value to migrate.
	 */
	public function __construct( int $post_id, string $json_data ) {
		$this->post_id    = $post_id;
		$this->data       = json_decode( $json_data, true );
		$this->normalizer = new Data_Normalizer();
	}

	/**
	 * Migrate data.
	 *
	 * return bool
	 */
	public function migrate_data() {

		if ( ! $this->post_id || ! $this->data ) {
			return false;
		}

		foreach ( $this->data as $block_id => $block_controls ) {
			$new_data = $this->normalizer->normalize( $block_controls );
			$post_blocks[ $block_id ] = $new_data;
		}

		$post = get_post( $this->post_id );

		if ( ! $post ) {
			return false;
		}

		$post_content = $post->post_content;

		foreach ( $post_blocks as $block_id => $controls ) {
			$controls_json = $this->controls_json( $controls );
			$block_id_pattern = '"blockID":"' . $block_id . '"';

			// Add new controls only if they are not already present.
			if ( false === strpos( $post_content, $block_id_pattern . ',"crocoblock_styles"' ) ) {
				$post_content  = str_replace(
					$block_id_pattern,
					$block_id_pattern . ',' . $controls_json,
					$post_content
				);
			}
		}

		$post_content = wp_slash( $post_content );

		// Update post content with new controls.
		wp_update_post( [
			'ID'           => $this->post_id,
			'post_content' => $post_content,
		] );

		return true;
	}

	/**
	 * Convert controls to JSON.
	 *
	 * @param array $controls Controls to convert.
	 *
	 * @return string JSON encoded controls.
	 */
	private function controls_json( array $controls ): string {
		$controls['_uniqueClassName'] = substr( uniqid('cb-'), 0, 11 );
		return '"crocoblock_styles":' . json_encode( $controls, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE );
	}
}