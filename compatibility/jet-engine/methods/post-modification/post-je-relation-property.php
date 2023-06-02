<?php


namespace JFB_Compatibility\Jet_Engine\Methods\Post_Modification;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Object_Dynamic_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Base_Post_Action;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Trash_Action;
use Jet_Form_Builder\Classes\Arrayable\Array_Continue_Exception;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Post_Je_Relation_Property extends Base_Object_Property implements
	Object_Dynamic_Property {

	protected $relation = array();

	public function get_id(): string {
		return 'je_relation';
	}

	public function is_supported( string $key, $value ): bool {
		return jet_engine()->relations->is_relation_key( $key );
	}

	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$this->relation[ $key ] = $value;
	}

	/**
	 * @param Abstract_Modifier $modifier
	 */
	public function do_after( Abstract_Modifier $modifier ) {
		if ( Trash_Action::is_supported( $modifier ) ) {
			return;
		}

		/** @var Base_Post_Action $action */
		$action = $modifier->get_action();
		$id     = $action->get_inserted();

		if ( ! $id ) {
			return;
		}

		foreach ( $this->relation as $rel_key => $rel_posts ) {
			jet_engine()->relations->process_meta(
				false,
				$id,
				$rel_key,
				$rel_posts
			);
		}
	}

	/**
	 * @return string
	 * @throws Array_Continue_Exception
	 */
	public function get_label(): string {
		throw new Array_Continue_Exception( 'Exclude this from properties list' );
	}
}
