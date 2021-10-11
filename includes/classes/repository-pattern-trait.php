<?php


namespace Jet_Form_Builder\Classes;


use Jet_Form_Builder\Exceptions\Repository_Exception;

trait Repository_Pattern_Trait {

	protected $_repository = array();

	abstract public function rep_instances(): array;

	public function rep_install() {
		try {
			foreach ( $this->rep_instances() as $instance ) {
				$this->rep_install_item( $instance );
			}
		} catch ( Repository_Exception $exception ) {
			_doing_it_wrong(
				__METHOD__,
				'PLease check all your scenarios for Paypal gateway.',
				'1.4.0'
			);
		}

	}

	/**
	 * @param $item_trait
	 *
	 * @return $this
	 * @throws Repository_Exception
	 */
	public function rep_install_item( $item_trait ) {
		$this->rep_item_check( $item_trait );

		$this->_repository[ $item_trait->rep_item_id() ] = $item_trait;

		return $this;
	}

	public function rep_get_items() {
		return $this->_repository;
	}

	/**
	 * @param $slug
	 *
	 * @return mixed
	 * @throws Repository_Exception
	 */
	public function rep_get_item( $slug ) {
		if ( ! $this->rep_isset_item( $slug ) ) {
			throw new Repository_Exception( "Undefined item: {$slug}" );
		}
		$item = $this->_repository[ $slug ];

		$this->rep_item_check( $item, $slug );

		return clone $this->_repository[ $slug ];
	}

	/**
	 * @param $item
	 *
	 * @param string $slug
	 *
	 * @throws Repository_Exception
	 */
	public function rep_item_check( $item, $slug = '' ) {
		if ( ! method_exists( $item, 'rep_item_id' ) ) {
			throw new Repository_Exception( "Instance {{$slug}} does not use the Repository_Item_Trait." );
		}
	}

	public function rep_isset_item( $slug ) {
		return isset( $this->_repository[ $slug ] );
	}

}