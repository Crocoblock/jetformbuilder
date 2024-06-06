<?php

namespace JFB_Modules\Onboarding;

use Jet_Form_Builder\Blocks\Module;
use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Wp_Nonce\Wp_Nonce;

class Preview {

	const NONCE_FIELD = 'jfb_preview_nonce';

	private $nonce;

	public function __construct() {
		$this->nonce = new Wp_Nonce(
			'jfb-preview-form',
			array(
				'name' => self::NONCE_FIELD,
			)
		);
	}

	public function init_hooks() {
		add_filter(
			'jet-form-builder/post-type/args',
			array( $this, 'set_form_publicly_queryable' )
		);
		add_filter(
			'the_content',
			array( $this, 'render_form_preview' )
		);
		add_action(
			'jet-form-builder/editor-assets/before',
			array( $this, 'editor_assets_before' ),
			20
		);
	}

	public function set_form_publicly_queryable( array $args ): array {
		if ( is_admin() ||
			! $this->get_nonce()->verify() ||
			! current_user_can( 'edit_jet_fb_form', get_the_ID() )
		) {
			return $args;
		}

		$args['publicly_queryable'] = true;

		return $args;
	}

	public function render_form_preview( $content ) {
		if ( ! is_singular( 'jet-form-builder' ) ) {
			return $content;
		}

		/** @var Module $blocks */
		/** @noinspection PhpUnhandledExceptionInspection */
		$blocks = jet_form_builder()->module( Module::class );

		return $blocks->get_form_class()->render_callback_field( array( 'form_id' => get_the_ID() ) );
	}

	/**
	 * @return void
	 * @throws Repository_Exception
	 */
	public function editor_assets_before() {
		/** @var \JFB_Modules\Onboarding\Module $onboarding */
		$onboarding = jet_form_builder()->module( 'onboarding' );

		wp_localize_script(
			$onboarding->get_handle(),
			'JFBOnboardingConfig',
			array(
				'previewURL' => add_query_arg(
					array(
						self::NONCE_FIELD => $this->get_nonce()->create(),
					),
					get_permalink()
				),
			)
		);
	}

	/**
	 * @return Wp_Nonce
	 */
	public function get_nonce(): Wp_Nonce {
		return $this->nonce;
	}

}
