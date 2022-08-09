<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Object_Dynamic_Property;
use Jet_Form_Builder\Classes\Arrayable\Array_Continue_Exception;

class Post_Je_Relation_Property extends Base_Post_Property implements
	Object_Dynamic_Property {

	protected $relation = array();

	public function get_prop_name(): string {
		return 'je_relation';
	}

	public function is_supported( Abstract_Modifier $modifier ): bool {
		return function_exists( 'jet_engine' )
		       && jet_engine()->relations
		       && jet_engine()->relations->is_relation_key( $modifier->current_prop );
	}

	public function do_before( Abstract_Modifier $modifier ) {
		$this->relation = $modifier->current_value;
	}

	/**
	 * @param Abstract_Modifier|Post_Modifier $modifier
	 */
	public function do_after( Abstract_Modifier $modifier ) {
		if ( ! in_array( $modifier->get_action(), array( 'insert', 'update' ), true )
		     || ! function_exists( 'jet_engine' )
		     || ! isset( jet_engine()->relations )
		) {
			return;
		}

		foreach ( $this->relation as $rel_key => $rel_posts ) {
			jet_engine()->relations->process_meta(
				false,
				$modifier->inserted_post_id,
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