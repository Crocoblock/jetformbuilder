<?php


namespace Jet_Form_Builder\Actions;


use Jet_Form_Builder\Actions\Types\Send_Email;
use Jet_Form_Builder\Classes\Http\Http_Tools;

class Send_Email_Hooks {

	public static function register() {
		add_action(
			'jet-form-builder/send-email/send-before',
			array( self::class, 'basic_formatting' )
		);
		add_action(
			'jet-form-builder/send-email/send-before',
			array( self::class, 'basic_content_formatting' )
		);
		add_action(
			'jet-form-builder/send-email/send-before',
			array( self::class, 'content_unslash' )
		);
	}

	public static function basic_formatting( Send_Email $email ) {
		$email->set_content(
			jet_fb_parse_macro( $email->get_content() )
		);
		$email->set_content(
			do_shortcode( $email->get_content() )
		);
		$email->set_subject(
			jet_fb_parse_macro( $email->get_subject() )
		);
		$email->set_from_name(
			jet_fb_parse_macro( $email->get_from_name() )
		);
		$email->set_from_address(
			jet_fb_parse_macro( $email->get_from_address() )
		);
		$email->set_reply_to(
			jet_fb_parse_macro( $email->get_reply_to() )
		);

		if ( ! is_email( $email->get_reply_to() ) ) {
			$email->set_reply_to( 'noreply@' . Http_Tools::get_site_host() );
		}

		if ( ! is_email( $email->get_from_address() ) ) {
			$email->set_from_address( get_option( 'admin_email' ) );
		}

		$email->update_headers();
	}

	public static function basic_content_formatting( Send_Email $email ) {
		$message = $email->get_content();

		if ( $email->is_html() && empty( $email->settings['disable_format'] ) ) {
			$message = make_clickable( wpautop( $message ) );
		}

		$email->set_content(
			str_replace( '&#038;', '&amp;', $message )
		);
	}

	public static function content_unslash( Send_Email $email ) {
		$email->set_content( wp_unslash( $email->get_content() ) );
	}

}