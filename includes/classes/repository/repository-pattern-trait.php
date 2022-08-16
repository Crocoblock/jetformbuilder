<?php


namespace Jet_Form_Builder\Classes\Repository;

use Jet_Form_Builder\Exceptions\Repository_Exception;

trait Repository_Pattern_Trait {

	use Repository_Aborts_Trait;

	private $__repository      = array();
	private $__failed_installs = array();

	abstract public function rep_instances(): array;

	public function rep_save_fails(): bool {
		return false;
	}

	public function rep_install( $instances = array() ) {
		if ( empty( $instances ) ) {
			$instances = $this->rep_instances();
		}
		try {
			foreach ( $instances as $instance ) {
				$this->rep_install_item( $instance );
			}
		} catch ( Repository_Exception $exception ) {
			$this->_rep_save_fail( $exception );

			switch ( $exception->getCode() ) {

				case $this->_rep_abort_and_die_code():
					_doing_it_wrong(
						__METHOD__,
						$exception->getMessage(),
						'2.0.0'
					);
			}
		}

		foreach ( $this->rep_get_items() as $item ) {
			$this->rep_after_install_item( $item );
		}
	}

	public function rep_allow_rewrite() {
		return true;
	}

	public function rep_install_item_soft( $item_trait ) {
		try {
			$this->rep_item_check( $item_trait );
			$this->rep_throw_if_cant_rewrite( $item_trait );
			$this->rep_run_install_flow( $item_trait->rep_item_id(), $item_trait );

			$this->rep_after_install_item( $item_trait );

		} catch ( Repository_Exception $exception ) {
			$this->_rep_save_fail( $exception );
		}
	}

	/**
	 * @param $item_trait
	 * @param $item_key
	 */
	public function rep_run_install_flow( string $item_key, $item_trait ) {
		$this->rep_before_install_item( $item_trait );

		$this->__repository[ $item_key ] = $item_trait;
	}

	/**
	 * @param $item_trait
	 *
	 * @return $this
	 * @throws Repository_Exception
	 */
	public function rep_install_item( $item_trait ) {
		$this->rep_item_check( $item_trait );
		$this->rep_throw_if_cant_rewrite( $item_trait );

		try {
			$this->rep_run_install_flow( $item_trait->rep_item_id(), $item_trait );
		} catch ( Repository_Exception $exception ) {
			$this->_rep_save_fail( $exception );

			switch ( $exception->getCode() ) {

				case $this->_rep_abort_all_code():
					$item_class = get_class( $item_trait );

					throw ( new Repository_Exception(
						"The installation was aborted on the item: {$item_class}",
						$exception->getMessage(),
						...$exception->get_additional()
					) )->set_code( $exception->getCode() );

				case $this->_rep_abort_and_die_code():
					$item_class = get_class( $item_trait );

					throw ( new Repository_Exception(
						"The installation was aborted and died on the item: {$item_class}",
						$exception->getMessage(),
						...$exception->get_additional()
					) )->set_code( $exception->getCode() );
			}
		}

		return $this;
	}

	public function rep_before_install_item( $item ) {
	}

	public function rep_after_install_item( $item ) {
	}

	public function rep_get_items(): array {
		return $this->__repository;
	}

	public function rep_get_values(): array {
		return array_values( $this->__repository );
	}

	public function rep_get_keys(): array {
		return array_keys( $this->__repository );
	}

	private function _rep_get_item( $slug ) {
		return $this->__repository[ $slug ];
	}

	/**
	 * @param $class_or_slug
	 *
	 * @return mixed
	 * @throws Repository_Exception
	 */
	public function rep_get_item( $class_or_slug ) {
		// if we got normal slug
		if ( ! class_exists( $class_or_slug ) ) {
			$this->rep_throw_if_undefined( $class_or_slug );

			return $this->_rep_get_item( $class_or_slug );

		} elseif ( $this->rep_isset_item( $class_or_slug ) ) {

			// if we got class string, which used as key
			return $this->_rep_get_item( $class_or_slug );
		}

		foreach ( $this->rep_get_items() as $item ) {
			if ( is_a( $item, $class_or_slug ) ) {
				return $item;
			}
		}

		throw new Repository_Exception( "Undefined item: {$class_or_slug}" );
	}

	public function rep_get_item_or_die( $slug ) {
		if ( ! $this->rep_isset_item( $slug ) ) {
			_doing_it_wrong( __METHOD__, "Undefined item: {$slug}", '2.0.0' );
		}

		return $this->_rep_get_item( $slug );
	}

	/**
	 * @param $slug
	 *
	 * @return mixed
	 * @throws Repository_Exception
	 */
	public function rep_clone_item( $slug ) {
		$this->rep_throw_if_undefined( $slug );

		return clone $this->_rep_get_item( $slug );
	}

	public function rep_clone_item_or_die( $slug ) {
		if ( ! $this->rep_isset_item( $slug ) ) {
			_doing_it_wrong( __METHOD__, "Undefined item: {$slug}", '2.0.0' );
		}

		return clone $this->_rep_get_item( $slug );
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
			$class_name = get_class( $item );
			throw new Repository_Exception( "Instance {$class_name} does not use the Repository_Item_Trait." );
		}
	}

	public function rep_isset_item( $slug ) {
		return isset( $this->__repository[ $slug ] );
	}

	/**
	 * @param $slug
	 *
	 * @return void
	 * @throws Repository_Exception
	 */
	public function rep_throw_if_undefined( $slug ) {
		if ( ! $this->rep_isset_item( $slug ) ) {
			throw new Repository_Exception( "Undefined item: {$slug}" );
		}
	}

	/**
	 * @param $item_trait
	 *
	 * @throws Repository_Exception
	 */
	public function rep_throw_if_cant_rewrite( $item_trait ) {
		if ( $this->rep_isset_item( $item_trait->rep_item_id() ) && ! $this->rep_allow_rewrite() ) {
			throw new Repository_Exception(
				"You can't rewrite instance: " . $item_trait->rep_item_id()
			);
		}
	}

	public function _rep_save_fail( Repository_Exception $exception ) {
		if ( $this->rep_save_fails() ) {
			$this->__failed_installs[] = $exception->getMessage();
		}
	}

	/**
	 * @return array
	 */
	public function _rep_get_fails(): array {
		return $this->__failed_installs;
	}

}
