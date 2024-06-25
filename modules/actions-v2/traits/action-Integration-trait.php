<?php

namespace JFB_Modules\Actions_V2\traits;

use JFB_Modules\Actions_V2\Module;

trait Action_Integration_Trait {

	public function get_handle( string $unique_string = '' ): string {
		/** @var Module $module */
		/** @noinspection PhpUnhandledExceptionInspection */
		$module = jet_form_builder()->module( 'actions-v2' );

		return $module->get_handle(
			trim( $this->rep_item_id() . '-' . $unique_string, '-' )
		);
	}

	public function get_dir( string $path ): string {
		/** @var Module $module */
		/** @noinspection PhpUnhandledExceptionInspection */
		$module = jet_form_builder()->module( 'actions-v2' );

		return $module->get_dir( $this->rep_item_id() . '/' . $path );
	}

	public function get_url( string $url ): string {
		/** @var Module $module */
		/** @noinspection PhpUnhandledExceptionInspection */
		$module = jet_form_builder()->module( 'actions-v2' );

		return $module->get_url( $this->rep_item_id() . '/' . $url );
	}

}
