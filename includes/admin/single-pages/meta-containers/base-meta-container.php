<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Meta_Containers;

use Jet_Form_Builder\Admin\Exceptions\Empty_Box_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_Meta_Box;
use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;

abstract class Base_Meta_Container implements Arrayable {

	use Repository_Pattern_Trait;

	const TYPE_NORMAL = 'normal-sortables';
	const TYPE_SIDE = 'side-sortables';

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

	public function get_box( string $slug ): Base_Meta_Box {
		return $this->rep_get_item_or_die( $slug );
	}

	/**
	 * @param string $scoped_slug
	 *
	 * @return Base_Meta_Box
	 * @throws Repository_Exception
	 */
	public function get_box_by_scope( string $scoped_slug ): Base_Meta_Box {
		// cut the `scope-`
		$slug = substr( $scoped_slug, 6, 0 );

		foreach ( $this->get_boxes() as $box ) {
			if ( $box->get_slug() === $slug ) {
				return $box;
			}
		}

		throw new Repository_Exception( 'Undefined ' . $scoped_slug );
	}

	public function get_migrations(): \Generator {
		foreach ( $this->get_boxes() as $box ) {
			yield from $box->get_migrations();
		}
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
		$boxes   = array();
		$storage = jet_fb_current_page()->get_storage();

		foreach ( $this->get_boxes() as $box ) {
			try {
				$box->set_single_id();

				$boxes[] = $storage->to_array( $box );
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
