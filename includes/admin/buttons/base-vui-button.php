<?php


namespace Jet_Form_Builder\Admin\Buttons;

use Jet_Form_Builder\Classes\Arrayable\Arrayable;

class Base_Vui_Button implements Arrayable {

	const STYLE_ACCENT         = 'accent';
	const STYLE_DEFAULT        = 'default';
	const STYLE_LINK_ACCENT    = 'link-accent';
	const STYLE_LINK_ERROR     = 'link-error';
	const STYLE_ACCENT_BORDER  = 'accent-border';
	const STYLE_DEFAULT_BORDER = 'default-border';

	const TYPE_BUTTON = 'button';
	const TYPE_SUBMIT = 'submit';
	const TYPE_RESET  = 'reset';

	const SIZE_DEFAULT = 'default';
	const SIZE_MINI    = 'mini';
	const SIZE_LINK    = 'link';

	protected $slug  = 'default';
	protected $url   = '';
	protected $style = self::STYLE_ACCENT;
	protected $type  = self::TYPE_BUTTON;
	protected $size  = self::SIZE_DEFAULT;
	protected $label = '';

	public function __construct( string $slug ) {
		$this->slug = $slug;
	}

	/** Getters */

	public function get_slug(): string {
		return $this->slug;
	}

	public function get_style(): string {
		return $this->style;
	}

	public function get_type(): string {
		return $this->type;
	}

	public function get_size(): string {
		return $this->size;
	}

	public function get_url(): string {
		return $this->url;
	}

	public function get_label(): string {
		return $this->label;
	}

	/** Setters */

	public function set_style( string $style ): Base_Vui_Button {
		$this->style = $style;

		return $this;
	}

	public function set_type( string $type ): Base_Vui_Button {
		$this->type = $type;

		return $this;
	}

	public function set_size( string $size ): Base_Vui_Button {
		$this->size = $size;

		return $this;
	}

	public function set_url( string $url ): Base_Vui_Button {
		$this->url = $url;

		return $this;
	}

	public function set_label( string $label ): Base_Vui_Button {
		$this->label = $label;

		return $this;
	}

	/**
	 * Get the instance as an array.
	 *
	 * @return array
	 */
	public function to_array(): array {
		return array(
			'slug'  => $this->get_slug(),
			'size'  => $this->get_size(),
			'style' => $this->get_style(),
			'type'  => $this->get_type(),
			'url'   => $this->get_url(),
			'label' => $this->get_label(),
		);
	}
}
