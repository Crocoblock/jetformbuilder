<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Meta_Containers;

use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_Meta_Box;
use Jet_Form_Builder\Classes\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;

abstract class Base_Meta_Container {

	use Repository_Pattern_Trait;

	const TYPE_NORMAL = 'normal-sortables';
	const TYPE_SIDE   = 'side-sortables';

	abstract public function get_type(): string;

	/**
	 * Base_Meta_Container constructor.
	 *
	 * @param Base_Meta_Box[] $meta_boxes
	 */
	public function __construct( ...$meta_boxes ) {
		$this->rep_install( $meta_boxes );
	}

	public function rep_instances(): array {
		return array();
	}

	/**
	 * @param Base_Meta_Box $box
	 *
	 * @throws Repository_Exception
	 */
	public function add_meta_box( Base_Meta_Box $box ) {
		$this->rep_install_item( $box );
	}
}
