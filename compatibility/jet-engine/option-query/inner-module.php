<?php


namespace JFB_Compatibility\Jet_Engine\Option_Query;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use JFB_Modules\Option_Field\Interfaces\Support_Option_Query_It;
use Jet_Form_Builder\Blocks\Types\Base;
use JFB_Modules\Option_Query\Module;

class Inner_Module implements \JFB_Components\Module\Base_Module_It {

	public function rep_item_id() {
		return 'je-option-query';
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_action(
			'jet-form-builder/option-query/on-install',
			array( $this, 'add_option_queries' )
		);
		// connect to the blocks
		add_action(
			'jet-form-builder/option-query/set-in-block',
			array( $this, 'on_set_in_block' )
		);
	}

	public function remove_hooks() {
		remove_action(
			'jet-form-builder/option-query/on-install',
			array( $this, 'add_option_queries' )
		);
		remove_action(
			'jet-form-builder/option-query/set-in-block',
			array( $this, 'on_set_in_block' )
		);
	}

	public function add_option_queries( Module $module ) {
		if ( jet_engine()->glossaries ) {
			$module->install( new Glossary_Query() );
		}
	}

	/**
	 * @param Base|Support_Option_Query_It $block
	 */
	public function on_set_in_block( Base $block ) {
		switch ( $block->get_query()->rep_item_id() ) {
			case 'glossary':
				$block->get_query()->set_query(
					'id',
					$block->block_attrs['glossary_id'] ?? 0
				);
				break;
		}
	}

}
