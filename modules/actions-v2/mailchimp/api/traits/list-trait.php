<?php

namespace JFB_Modules\Actions_V2\Mailchimp\Api\traits;

trait List_Trait {
	public function set_list_id( string $list_id ) {
		$this->set_path(
			array(
				'list_id' => $list_id,
			)
		);
	}

}
