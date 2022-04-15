<?php


namespace Jet_Form_Builder\Classes\Security;

use Jet_Form_Builder\Classes\Http\Http_Tools;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Live_Form;

class Csrf_Tools {

	const FIELD = '_jfb_csrf_token';

	public static function register() {
		add_filter( 'jet-form-builder/request-handler/request', array( self::class, 'handle_request' ) );
	}

	public static function get_field(): string {
		if ( ! jet_fb_live_args()->is_use_csrf() ) {
			return '';
		}

		// generate new unique token
		$csrf = self::generate();

		// get hashed string with user-agent, ip address & form-id
		$client_id = self::client_id( jet_fb_live_args()->form_id );

		try {
			// insert new token if client_id is not exist in table
			self::add( $csrf, $client_id );
		} catch ( Sql_Exception $exception ) {
			return '';
		}

		return Live_Form::force_render_field(
			'hidden-field',
			array(
				'field_value' => $csrf,
				'name'        => self::FIELD,
			)
		);
	}

	/**
	 * @param array $request
	 *
	 * @return array
	 * @throws Request_Exception
	 */
	public static function handle_request( array $request ): array {
		if ( ! jet_fb_live_args()->is_use_csrf() ) {
			return $request;
		}

		$token     = $request[ self::FIELD ] ?? false;
		$client_id = static::client_id( jet_fb_live_args()->form_id );

		// delete all old tokens
		Csrf_Token_Model::clear();

		if ( ! static::verify( $token, $client_id ) ) {
			throw ( new Request_Exception( 'Invalid token' ) )->dynamic_error();
		}

		return $request;
	}

	/**
	 * @param string $token
	 * @param string $client_id
	 *
	 * @return int
	 * @throws Sql_Exception
	 */
	public static function add( string $token, string $client_id ): int {
		$self = ( new Csrf_Token_Model() )->create();

		try {
			Csrf_Token_View::by_client( $client_id );

			return 0;
		} catch ( Query_Builder_Exception $exception ) {
			return $self->insert(
				array(
					'token'     => $token,
					'client_id' => $client_id,
				)
			);
		}
	}


	public static function verify( string $token, string $client_id ): bool {
		$where = array(
			'token'     => $token,
			'client_id' => $client_id,
		);

		try {
			Csrf_Token_View::delete( $where );
		} catch ( Query_Builder_Exception $exception ) {
			return false;
		}

		return true;
	}

	public static function generate(): string {
		try {
			return \bin2hex( \random_bytes( 16 ) );
		} catch ( \Exception $e ) {
			return uniqid( wp_rand(), true );
		}
	}

	public static function client_id( $suffix = '' ): string {
		$user_agent = Http_Tools::get_user_agent();
		$ip_address = Http_Tools::get_ip_address();

		return md5( $user_agent . $ip_address . $suffix );
	}
}
