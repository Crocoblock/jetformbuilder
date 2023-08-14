<?php // phpcs:ignore Internal.Exception

namespace JFB_Components\Repository;

use Jet_Form_Builder\Exceptions\Repository_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

trait Repository_Aborts_Trait {

	// phpcs:disable PSR2.Methods.MethodDeclaration.Underscore

	/**
	 * @throws Repository_Exception
	 */
	final public function _rep_abort_this() {
		throw ( new Repository_Exception( 'replace this...' ) )->set_code( $this->_rep_abort_this_code() );
	}

	final public function _rep_abort_this_code() {
		return 1;
	}

	/**
	 * @throws Repository_Exception
	 */
	final public function _rep_abort_all() {
		throw ( new Repository_Exception( 'replace this...' ) )->set_code( $this->_rep_abort_all_code() );
	}

	final public function _rep_abort_all_code() {
		return 2;
	}

	/**
	 * @throws Repository_Exception
	 */
	final public function _rep_abort_and_die() {
		throw ( new Repository_Exception( 'replace this...' ) )->set_code( $this->_rep_abort_and_die_code() );
	}

	final public function _rep_abort_and_die_code() {
		return 3;
	}

	// phpcs:enable PSR2.Methods.MethodDeclaration.Underscore

}
