<?php


namespace Jet_Form_Builder\Admin\Table_Views\Actions;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

abstract class Link_Single_Action extends View_Single_Action {

	abstract public function get_href( array $record ): string;

	public function to_array( array $record ): array {
		$attrs         = parent::to_array( $record );
		$attrs['href'] = $this->get_href( $record );

		return $attrs;
	}
}
