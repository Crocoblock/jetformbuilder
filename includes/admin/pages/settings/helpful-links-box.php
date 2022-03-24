<?php


namespace Jet_Form_Builder\Admin\Pages\Settings;

use Jet_Form_Builder\Admin\Vui_Boxes\Base_Vui_Panel_Box;
use Jet_Form_Builder\Classes\Http\Utm_Url;

class Helpful_Links_Box extends Base_Vui_Panel_Box {

	public function get_slug(): string {
		return 'help';
	}

	public function get_title(): string {
		return __( 'Help Center', 'jet-form-builder' );
	}

	public function get_description(): string {
		return __( 'Support & Info', 'jet-form-builder' );
	}

	public function to_array(): array {
		$utm = new Utm_Url( 'jetformbuilder-dashboard/settings-help-center' );
		$utm->set_license( true );

		return array_merge(
			parent::to_array(),
			array(
				'link_knowledge'  => $utm->set_campaign( 'knowledge-base' )
										->add_query( JET_FORM_BUILDER_SITE . '/features/overview/' ),
				'link_support'    => $utm->set_campaign( 'contact-support' )
										->add_query( 'https://support.crocoblock.com/support/home/' ),
				'link_community'  => 'https://www.facebook.com/groups/CrocoblockCommunity',
				'link_git'        => 'https://github.com/Crocoblock/jetformbuilder',
				'label_knowledge' => __( 'Knowledge base', 'jet-form-builder' ),
				'label_community' => __( 'Ask the community', 'jet-form-builder' ),
				'label_support'   => __( 'Contact support', 'jet-form-builder' ),
				'label_git'       => __( 'Feature requests & bug fixes', 'jet-form-builder' ),
			)
		);
	}

}
