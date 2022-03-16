<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Meta_Containers;

use Jet_Form_Builder\Admin\Exceptions\Empty_Box_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_Meta_Box;
use Jet_Form_Builder\Classes\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;

abstract class Base_Meta_Container {

	use Repository_Pattern_Trait;

	const TYPE_NORMAL = 'normal-sortables';
	const TYPE_SIDE   = 'side-sortables';

	protected $index;

	public function get_type(): string {
		return 1 !== $this->index ? self::TYPE_NORMAL : self::TYPE_SIDE;
	}

	/**
	 * @return string[]
	 */
	public function get_classes(): array {
		return array(
			'meta-box-sortables',
			'ui-sortable',
		);
	}

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
	 * @return Base_Meta_Box[]
	 */
	public function get_boxes(): array {
		return $this->rep_get_values();
	}

	/**
	 * @param Base_Meta_Box $box
	 */
	public function add_meta_box( Base_Meta_Box $box ) {
		$this->rep_install_item_soft( $box );
	}

	/**
	 * @param Base_Meta_Box $item
	 *
	 * @throws Repository_Exception
	 */
	public function rep_before_install_item( $item ) {
		if ( ! $item->is_active() ) {
			$this->_rep_abort_this();
		}
	}

	public function set_index( int $index ): Base_Meta_Container {
		$this->index = $index;

		return $this;
	}

	public function to_array(): array {
		$boxes = array();

		foreach ( $this->get_boxes() as $box ) {
			try {
				$boxes[] = $box->set_single_id()->to_array();
			} catch ( Empty_Box_Exception $exception ) {
				continue;
			}
		}

		return array(
			'wrap_id' => "postbox-container-{$this->index}",
			'id'      => $this->get_type(),
			'classes' => implode( ' ', $this->get_classes() ),
			'boxes'   => $boxes,
		);
	}
}
