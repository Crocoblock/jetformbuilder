<?php

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

return array(
	array(
		'value'     => 'first_option',
		'label'     => __( 'First Option', 'jet-form-builder' ),
		'calculate' => 1,
	),
	array(
		'value'     => 'second_option',
		'label'     => __( 'Second Option', 'jet-form-builder' ),
		'calculate' => 2,
	),
	array(
		'value'     => 'third_option',
		'label'     => __( 'Third Option', 'jet-form-builder' ),
		'calculate' => 3,
	),
);
