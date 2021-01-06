<?php


namespace Jet_Form_Builder\Blocks;


class Block_Generator {

	private $raw_blocks = array();
	private $response = '';

	public function __construct( $raw_blocks ) {
		$this->raw_blocks = $raw_blocks;
	}

	private function open_block_namespace( $block ) {
		$this->response .= "\n<!-- wp:" . $block['blockName'] . " \n";
	}

	private function add_block_attrs( $block ) {
		if ( ! empty( $block['attrs'] ) ) {
			$this->response .= wp_unslash( json_encode( $block['attrs'] ) ) . ' ';
		}
	}

	private function close_block_namespace( $block ) {
		if ( empty( $block['innerBlocks'] ) ) {
			$this->response .= '/';
		}
		$this->response .= "--> \n";
	}

	private function maybe_set_inner_blocks( $block ) {
		if ( empty( $block['innerBlocks'] ) ) {
			return;
		}
		$this->generate_blocks( $block['innerBlocks'] );
	}

	private function maybe_close_block( $block ) {
		if ( empty( $block['innerBlocks'] ) ) {
			return;
		}
		$this->response .= "\n<!-- /wp:" . $block['blockName'] . " -->\n";
	}

	private function open_block( $block ) {
		$this->open_block_namespace( $block );
		$this->add_block_attrs( $block );
		$this->close_block_namespace( $block );
	}

	public function generate() {
		$this->generate_blocks( $this->raw_blocks );

		return $this->response;
	}

	public function generate_blocks( $source ) {
		foreach ( $source as $block ) {
			$this->open_block( $block );
			$this->maybe_set_inner_blocks( $block );
			$this->maybe_close_block( $block );
		}
	}

}