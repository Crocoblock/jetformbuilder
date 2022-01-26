<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

abstract class Post_Modifier_Core extends Abstract_Modifier {

	/** @var int|\WP_Error */
	public $inserted_post_id;

	public $suppress_filters = true;


	/**
	 * @param bool $suppress
	 *
	 * @return $this
	 */
	public function suppress_filters( bool $suppress ) {
		$this->suppress_filters = $suppress;

		return $this;
	}

	public function get_action() {
		if ( is_null( $this->action ) ) {
			$this->action = 'insert';
		}

		return parent::get_action();
	}

	/**
	 * @param $post_type
	 *
	 * @return Post_Modifier_Core
	 * @throws Action_Exception
	 */
	public function set_post_type( $post_type ) {
		if ( $post_type && post_type_exists( $post_type ) ) {
			$this->source_arr['post_type'] = $post_type;

			return $this;
		}

		throw new Action_Exception(
			'failed',
			array(
				'post_type' => $post_type,
			)
		);
	}

	/**
	 * @param string $action
	 *
	 * @return Post_Modifier_Core
	 * @throws Silence_Exception
	 */
	public function set_action( string $action ) {
		$actions = $this->get_actions();

		if ( isset( $actions[ $action ]['action'] ) && is_callable( $actions[ $action ]['action'] ) ) {
			$this->action = $action;

			return $this;
		}

		throw new Silence_Exception(
			'Undefined action',
			array(
				$action,
				array_keys( $this->get_actions() )
			)
		);
	}

	/**
	 * @param string $action
	 *
	 * @return Post_Modifier_Core
	 * @throws Silence_Exception
	 */
	public function set_action_once( string $action ) {
		if ( 'insert' !== $this->action ) {
			return $this;
		}

		return $this->set_action( $action );
	}

	public function set_meta( $meta ) {
		if ( empty( $this->source_arr['meta_input'] ) || ! is_array( $this->source_arr['meta_input'] ) ) {
			$this->source_arr['meta_input'] = array();
		}

		foreach ( $meta as $meta_key => $meta_row ) {
			if ( ! empty( $meta_row['key'] ) ) {
				$meta[ $meta_row['key'] ] = $meta_row['value'];
				unset( $meta[ $meta_key ] );
			}
		}

		$this->source_arr['meta_input'] = array_merge( $this->source_arr['meta_input'], $meta );

		return $this;
	}



	/**
	 * @throws Silence_Exception
	 */
	public function pre_check() {
		if ( $this->suppress_filters ) {
			return;
		}

		$pre_post_check = apply_filters(
			'jet-form-builder/action/insert-post/pre-check',
			true,
			$this->source_arr,
			jet_form_builder()->form_handler->action_handler->get_current_action()
		);

		if ( ! $pre_post_check ) {
			throw new Silence_Exception( 'Pre check filter has returned FALSE.' );
		}
	}


}