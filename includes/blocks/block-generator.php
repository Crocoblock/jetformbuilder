<?php


namespace Jet_Form_Builder\Blocks;


class Block_Generator {

	private $raw_blocks;
	private $response = '';

	public function __construct( $raw_blocks ) {
		$this->raw_blocks = $raw_blocks;
	}

	private function open_block_namespace( $block ) {
		$this->response .= "\n<!-- wp:" . $block['blockName'] . " \n";
	}

	private function add_block_attrs( $block ) {
		if ( ! empty( $block['attrs'] ) ) {
			$this->response .= json_encode( $block['attrs'] ) . ' ';
		}
	}

	private function close_block_namespace( $block ) {
		if ( empty( $block['innerContent'] ) && empty( $block['innerBlocks'] ) ) {
			$this->response .= '/';
		}
		$this->response .= "--> \n";
	}

	private function set_block_content( $block ) {
		if ( empty( $block['innerContent'] ) && empty( $block['innerBlocks'] ) ) {
			return;
		}
		elseif ( empty( $block['innerContent'] ) ) {
			$this->maybe_set_inner_blocks( $block );
			return;
		}

		if ( isset( $block['innerContent'][0] ) ) {
			$this->response .= $block['innerContent'][0];
		}
		$this->maybe_set_inner_blocks( $block );

		if ( isset( $block['innerContent'][1] ) ) {
			$this->response .= $block['innerContent'][1];
		}
	}

	private function maybe_set_inner_blocks( $block ) {
		if ( empty( $block['innerBlocks'] ) ) {
			return;
		}
		$this->generate_blocks( $block['innerBlocks'] );
	}

	private function maybe_close_block( $block ) {
		if ( empty( $block['innerContent'] ) && empty( $block['innerBlocks'] ) ) {
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
			$this->set_block_content( $block );
			$this->maybe_close_block( $block );
		}
	}

}