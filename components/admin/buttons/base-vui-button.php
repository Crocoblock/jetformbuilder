<?php


namespace JFB_Components\Admin\Buttons;

use Jet_Form_Builder\Classes\Arrayable\Arrayable;
use JFB_Components\Rest_Api\Rest_Api_Endpoint_Base;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Base_Vui_Button implements Arrayable {

	const STYLE_ACCENT              = 'accent';
	const STYLE_ACCENT_ERROR        = 'accent-error';
	const STYLE_ACCENT_ERROR_BORDER = 'accent-error-border';
	const STYLE_DEFAULT             = 'default';
	const STYLE_LINK_ACCENT         = 'link-accent';
	const STYLE_LINK_ERROR          = 'link-error';
	const STYLE_ACCENT_BORDER       = 'accent-border';
	const STYLE_DEFAULT_BORDER      = 'default-border';

	const TYPE_BUTTON = 'button';
	const TYPE_SUBMIT = 'submit';
	const TYPE_RESET  = 'reset';

	const SIZE_DEFAULT = 'default';
	const SIZE_MINI    = 'mini';
	const SIZE_MINI_X2 = 'mini-x2';
	const SIZE_LINK    = 'link';

	const PRESET_PAGE_ACTION = 'page_action';

	protected $slug;
	protected $url          = '';
	protected $rest_url     = '';
	protected $rest_methods = '';
	protected $style        = self::STYLE_ACCENT;
	protected $type         = self::TYPE_BUTTON;
	protected $size         = self::SIZE_DEFAULT;
	protected $label        = '';
	protected $disabled     = false;
	protected $classes      = array();

	public function __construct( string $slug = 'default' ) {
		$this->slug = $slug;
	}

	/** Getters */

	protected function get_presets(): array {
		return array(
			self::PRESET_PAGE_ACTION => array( $this, 'set_preset_page_action' ),
		);
	}

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

	public function get_rest_url(): string {
		return $this->rest_url;
	}

	public function get_rest_methods(): string {
		return $this->rest_methods;
	}

	public function get_label(): string {
		return $this->label;
	}

	public function get_classes(): array {
		return $this->classes;
	}

	public function is_disabled(): bool {
		return $this->disabled;
	}

	/** Setters */

	protected function set_preset_page_action() {
		$this->add_classes(
			array( 'unset-box-shadow' )
		);
		$this->set_size( self::SIZE_MINI_X2 );
	}

	public function set_preset( string $preset ): Base_Vui_Button {
		$presets = $this->get_presets();

		if ( ! isset( $presets[ $preset ] ) || ! is_callable( $presets[ $preset ] ) ) {
			// phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
			wp_die( 'Undefined style preset in ' . static::class );
		}
		call_user_func( $presets[ $preset ] );

		return $this;
	}

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

	public function set_rest( Rest_Api_Endpoint_Base $endpoint_base ): Base_Vui_Button {
		return $this->set_rest_url( $endpoint_base::rest_url() )
					->set_rest_methods( $endpoint_base::get_methods() );
	}

	public function set_rest_url( string $url ): Base_Vui_Button {
		$this->rest_url = $url;

		return $this->set_url( 'javascript:void(0)' );
	}

	public function set_rest_methods( string $rest_methods ): Base_Vui_Button {
		$this->rest_methods = $rest_methods;

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

	public function add_classes( array $classes ): Base_Vui_Button {
		$this->classes += $classes;

		return $this;
	}

	public function set_disabled( bool $disabled ): Base_Vui_Button {
		$this->disabled = $disabled;

		return $this;
	}

	/**
	 * Get the instance as an array.
	 *
	 * @return array
	 */
	public function to_array(): array {
		return array(
			'slug'     => $this->get_slug(),
			'size'     => $this->get_size(),
			'style'    => $this->get_style(),
			'type'     => $this->get_type(),
			'url'      => $this->get_url(),
			'rest'     => array(
				'url'    => $this->get_rest_url(),
				'method' => $this->get_rest_methods(),
			),
			'label'    => $this->get_label(),
			'classes'  => $this->get_classes(),
			'disabled' => $this->is_disabled(),
		);
	}
}
