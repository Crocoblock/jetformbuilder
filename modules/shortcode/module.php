<?php


namespace JFB_Modules\Shortcode;

use Jet_Form_Builder\Classes\Arguments\Default_Form_Arguments;
use Jet_Form_Builder\Classes\Arguments\Form_Arguments;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Repository\Repository_Pattern_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Class Manager
 *
 * @package JFB_Modules\Shortcode
 */
final class Module implements Base_Module_It, Base_Module_After_Install_It {

	use Repository_Pattern_Trait;

	public function rep_item_id() {
		return 'shortcode';
	}

	public function on_install() {
		$this->rep_install();
	}

	public function on_uninstall() {
		$this->rep_clear();
	}

	public function condition(): bool {
		return true;
	}

	public function init_hooks() {
		$slug = \JFB_Modules\Post_Type\Module::SLUG;

		// post-type related
		add_filter(
			"manage_{$slug}_posts_columns",
			array( $this, 'filter_columns' )
		);
		add_action(
			"manage_{$slug}_posts_custom_column",
			array( $this, 'add_admin_column_content' ),
			10,
			2
		);
	}

	public function remove_hooks() {
		$slug = \JFB_Modules\Post_Type\Module::SLUG;

		// post-type related
		remove_filter(
			"manage_{$slug}_posts_columns",
			array( $this, 'filter_columns' )
		);
		remove_action(
			"manage_{$slug}_posts_custom_column",
			array( $this, 'add_admin_column_content' )
		);
	}

	public function rep_instances(): array {
		return array(
			new Form_Shortcode(),
		);
	}

	public function filter_columns( $columns ) {
		$after = array( 'date' => $columns['date'] );
		unset( $columns['date'] );

		$columns['jfb_shortcode'] = __( 'Shortcode', 'jet-form-builder' );

		return array_merge( $columns, $after );
	}

	/**
	 * @param $column
	 * @param $form_id
	 *
	 * @return void
	 * @throws Repository_Exception
	 */
	public function add_admin_column_content( $column, $form_id ) {
		if ( 'jfb_shortcode' !== $column ) {
			return;
		}
		/** @var \JFB_Modules\Post_Type\Module $post_type */
		$post_type = jet_form_builder()->module( 'post-type' );
		$arguments = array_diff( $post_type->get_args( $form_id ), Form_Arguments::arguments() );

		$arguments = array_merge(
			array( 'form_id' => $form_id ),
			Default_Form_Arguments::arguments(),
			$arguments
		);

		printf(
			'<input readonly type="text" onclick="this.select()" value="%s" style="%s"/>',
			esc_attr( $this->get_shortcode( 'jet_fb_form', $arguments ) ),
			'width: 100%'
		);
	}

	public function get_shortcode( $type, $arguments ): string {
		$format = '[%1$s %2$s]';

		try {
			$type = $this->rep_clone_item( $type );
		} catch ( Repository_Exception $exception ) {
			return '';
		}

		return sprintf( $format, $type->get_name(), $this->generate_arguments_string( $arguments ) );
	}

	private function generate_arguments_string( $arguments ): string {
		$response = array();

		foreach ( $arguments as $name => $value ) {
			$response[] = "$name=\"$value\"";
		}

		return implode( ' ', $response );
	}
}
