<?php


namespace Jet_Form_Builder\Admin\Pages\Settings;

use Jet_Form_Builder\Admin\Vui_Boxes\Base_Vui_Panel_Box;

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
		$author_slug = jet_fb_current_page()->theme()->author_slug();
		$license     = jet_form_builder()->addons_manager->get_slug();

		return array_merge(
			parent::to_array(),
			array(
				'link_knowledge'  => add_query_arg(
					array(
						'utm_source'   => rawurlencode( 'jetformbuilder-dashboard/settings-help-center' ),
						'utm_medium'   => rawurlencode( "$license/$author_slug" ),
						'utm_campaign' => 'knowledge-base',
					),
					JET_FORM_BUILDER_SITE . '/features/overview/'
				),
				'link_community'  => 'https://www.facebook.com/crocoblock/',
				'link_support'    => 'https://crocoblock.com/help-center/',
				'link_git'        => 'https://github.com/Crocoblock/jetformbuilder',
				'label_knowledge' => __( 'Knowledge base', 'jet-form-builder' ),
				'label_community' => __( 'Ask the community', 'jet-form-builder' ),
				'label_support'   => __( 'Contact support', 'jet-form-builder' ),
				'label_git'       => __( 'Feature requests & bug fixes', 'jet-form-builder' ),
			)
		);
	}

}
