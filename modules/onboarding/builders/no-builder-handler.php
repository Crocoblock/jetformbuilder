<?php

namespace JFB_Modules\Onboarding\Builders;

use JFB_Modules\Onboarding\Builders\Exceptions\Use_Form_Exception;
use JFB_Modules\Onboarding\Builders\Interfaces\Builder_Interface;

class No_Builder_Handler {

	public function init_hooks() {
		add_action( 'jet-form-builder/use-form', array( $this, 'check_redirect' ), 999 );
	}

	/**
	 * Check if some builders used the form correctly
	 *
	 * @param Builder_Interface $builder
	 *
	 * @return void
	 * @throws Use_Form_Exception
	 */
	public function check_redirect( Builder_Interface $builder ) {
		if ( $builder->get_redirect_url() ) {
			return;
		}

		throw new Use_Form_Exception(
			esc_html__( 'Something went wrong, check if you chose a builder.', 'jet-form-builder' )
		);
	}

}
