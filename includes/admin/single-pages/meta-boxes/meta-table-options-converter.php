<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes;

class Meta_Table_Options_Converter extends Meta_Box_Options_Converter {

	protected $footer_heading        = true;
	protected $show_overflow         = false;
	protected $show_overflow_control = false;

	public function __construct( Meta_Table_Options $box ) {
		parent::__construct( $box );

		$this->show_overflow         = $box->is_show_overflow();
		$this->show_overflow_control = $box->is_show_overflow_control();
		$this->footer_heading        = $box->is_footer_heading();
	}

	public function to_array(): array {
		return parent::to_array() + array(
			'footer_heading'        => $this->footer_heading,
			'show_overflow'         => $this->show_overflow,
			'show_overflow_control' => $this->show_overflow_control,
		);
	}

}
