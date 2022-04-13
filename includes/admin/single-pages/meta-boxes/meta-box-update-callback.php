<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes;


use Jet_Form_Builder\Admin\Exceptions\Failed_Box_Update;

interface Meta_Box_Update_Callback {

	/**
	 * @param array $state
	 * @param \WP_REST_Request $request
	 * @param $resource
	 *
	 * @return mixed
	 * @throws Failed_Box_Update
	 */
	public function on_update( array $state, \WP_REST_Request $request, $resource );

}