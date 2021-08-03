<?php

namespace Jet_Form_Builder\Form_Patterns;

use Jet_Form_Builder\Plugin;

class Manager {

	public function __construct() {
		add_action( 'current_screen', array( $this, 'maybe_register_patterns' ) );
	}

	private function namespace() {
		return Plugin::instance()->post_type->slug();
	}

	public function maybe_register_patterns() {
		if ( get_current_screen()->post_type !== $this->namespace() ) {
			return;
		}

		$this->register_block_patterns();
	}

	public function get_patterns() {
		return apply_filters( 'jet-form-builder/form-patterns', array(
			'contact_form' => array(
				'title'   => __( 'Contact Us Form', 'jet-form-builder' ),
				'content' => '<!-- wp:jet-forms/text-field {
					"label":"Name","name":"name","required":true,
					"className":" jet-sm-gb-wrapper jet-sm-gb-582e3284-467f-41dc-a95b-801961ae40ba",
					"blockID":"jet-sm-gb-582e3284-467f-41dc-a95b-801961ae40ba"} /-->

					<!-- wp:jet-forms/text-field {
					"field_type":"email","label":"Email","name":"email","required":true,
					"className":" jet-sm-gb-wrapper jet-sm-gb-582e3284-467f-41dc-a95b-801961ae40ba",
					"blockID":"jet-sm-gb-582e3284-467f-41dc-a95b-801961ae40ba"} /-->

					<!-- wp:jet-forms/text-field {
					"field_type":"tel","label":"Phone","name":"phone","required":true,
					"className":" jet-sm-gb-wrapper jet-sm-gb-582e3284-467f-41dc-a95b-801961ae40ba",
					"blockID":"jet-sm-gb-582e3284-467f-41dc-a95b-801961ae40ba"} /-->

					<!-- wp:jet-forms/radio-field {
					"field_options":[{"label":"Email","value":"email","calculate":"","__visible":false},
					{"label":"Phone","value":"phone","calculate":"","__visible":false}],
					"label":"Preffered method of communication","name":"preffered-method-of",
					"className":" jet-sm-gb-wrapper jet-sm-gb-42aac671-fc51-437b-a9fc-7530c9207bb4",
					"blockID":"jet-sm-gb-42aac671-fc51-437b-a9fc-7530c9207bb4"} /-->

					<!-- wp:jet-forms/textarea-field {
					"label":"Message","name":"message",
					"className":" jet-sm-gb-wrapper jet-sm-gb-729cb67e-3122-4a5a-a170-95a51ba95881",
					"blockID":"jet-sm-gb-729cb67e-3122-4a5a-a170-95a51ba95881"} /-->

					<!-- wp:jet-forms/submit-field {
					"className":" jet-sm-gb-wrapper jet-sm-gb-e49443d8-8a29-40ba-8288-836622af67ec",
					"blockID":"jet-sm-gb-e49443d8-8a29-40ba-8288-836622af67ec"} /-->'

			),
		) );
	}

	public function register_block_patterns() {
		register_block_pattern_category(
			$this->namespace(),
			array(
				'label' => __( 'JetForms', 'jet-form-builder' )
			)
		);


		foreach ( $this->get_patterns() as $pattern_name => $pattern ) {
			$pattern['categories'] = array( $this->namespace() );

			register_block_pattern( $this->pattern_name( $pattern_name ), $pattern );
		}
	}

	private function pattern_name( $name ) {
		return $this->namespace() . '/' . $name;
	}

}