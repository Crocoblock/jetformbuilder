<?php


namespace Jet_Form_Builder\Classes\Resources;


interface Media_Block_Value {

	public function get_attachment_id(): string;

	public function get_attachment_url(): string;

	public function get_attachment_both(): array;

}