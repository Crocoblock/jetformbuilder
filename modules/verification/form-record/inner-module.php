<?php


namespace JFB_Modules\Verification\Form_Record;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

use Jet_Form_Builder\Admin\Single_Pages\Meta_Containers\Base_Meta_Container;
use JFB_Components\Module\Base_Module_It;
use JFB_Modules\Verification\Form_Record\Admin\Meta_Boxes\Verification_Box;

final class Inner_Module implements Base_Module_It {

	public function rep_item_id() {
		// not used
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		add_filter(
			'jet-form-builder/page-containers/jfb-records-single',
			array( $this, 'add_box_to_single_record' )
		);
		add_filter(
			'jet-form-builder/page-config/jfb-records',
			array( $this, 'add_actions_for_records_page' )
		);
	}

	public function remove_hooks() {
		remove_filter(
			'jet-form-builder/page-containers/jfb-records-single',
			array( $this, 'add_box_to_single_record' )
		);
		remove_filter(
			'jet-form-builder/page-config/jfb-records',
			array( $this, 'add_actions_for_records_page' )
		);
	}

	/**
	 * @param Base_Meta_Container[] $containers
	 *
	 * @return array
	 */
	public function add_box_to_single_record( array $containers ): array {
		$containers[1]->add_meta_box( new Verification_Box() );

		return $containers;
	}

	public function add_actions_for_records_page( array $config ): array {
		$delete_action = false;

		foreach ( $config['actions'] as $index => $action ) {
			if ( 'delete' !== $action['value'] ) {
				continue;
			}
			$delete_action = $config['actions'][ $index ];
			unset( $config['actions'][ $index ] );
			break;
		}
		$config['actions'] = array_values( $config['actions'] );

		array_push(
			$config['actions'],
			array(
				'value' => 'verify',
				'label' => __( 'Verify manually', 'jet-form-builder' ),
			),
			$delete_action
		);

		return $config;
	}
}
