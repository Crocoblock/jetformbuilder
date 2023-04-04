<?php


namespace Jet_Form_Builder\Classes\Security;

use Jet_Form_Builder\Classes\Http\Http_Tools;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Exceptions\Request_Exception;
use Jet_Form_Builder\Live_Form;

class Csrf_Tools {

	const FIELD = '_jfb_csrf_token';

	private $token;
	private $client;

	public function register() {
		add_filter( 'jet-form-builder/request-handler/request', array( $this, 'handle_request' ) );
		add_filter( 'jet-form-builder/message-types', array( $this, 'handle_messages' ) );
	}

	public static function get_field(): string {
		if ( ! jet_fb_live_args()->is_use_csrf() ) {
			return '';
		}

		// generate new unique token
		$csrf = static::generate();

		// get hashed string with user-agent, ip address & form-id
		$client_id = static::client_id( jet_fb_live()->form_id );

		try {
			// insert new token if client_id is not exist in table
			$token = static::add( $csrf, $client_id );
		} catch ( Sql_Exception $exception ) {
			return '';
		}

		return Live_Form::force_render_field(
			'hidden-field',
			array(
				'field_value' => $token,
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
	public function handle_request( array $request ): array {
		if ( ! jet_fb_live_args()->is_use_csrf() ) {
			return $request;
		}

		$this->token  = $request[ self::FIELD ] ?? false;
		$this->client = static::client_id( jet_fb_live()->form_id );

		// delete all old tokens
		Csrf_Token_Model::clear();

		if ( ! static::verify( $this->token, $this->client ) ) {
			throw new Request_Exception( 'csrf_failed' );
		}

		// delete verified token only on success
		add_action( 'jet-form-builder/form-handler/after-send', array( $this, 'handle_after_send' ) );

		return $request;
	}

	public function handle_after_send() {
		if ( ! jet_fb_handler()->is_success ) {
			return;
		}

		static::delete( $this->token, $this->client );
	}

	public function handle_messages( array $messages ): array {
		$messages['csrf_failed'] = array(
			'label' => __( 'CSRF token validation failed', 'jet-form-builder' ),
			'value' => __( 'Invalid token', 'jet-form-builder' ),
		);

		return $messages;
	}

	/**
	 * @param string $token
	 * @param string $client_id
	 *
	 * New token or existed
	 *
	 * @return string
	 * @throws Sql_Exception
	 */
	public static function add( string $token, string $client_id ): string {
		try {
			$row = Csrf_Token_View::by_client( $client_id );

			$token = $row['token'];
		} catch ( Query_Builder_Exception $exception ) {
			( new Csrf_Token_Model() )->insert(
				array(
					'token'     => $token,
					'client_id' => $client_id,
				)
			);
		}

		return $token;
	}


	public static function verify( string $token, string $client_id ): bool {
		$where = array(
			'token'     => $token,
			'client_id' => $client_id,
		);
		try {
			Csrf_Token_View::findOne( $where )->query()->query_one();
		} catch ( Query_Builder_Exception $exception ) {
			return false;
		}

		return true;
	}

	public static function delete( string $token, string $client_id ): int {
		$where = array(
			'token'     => $token,
			'client_id' => $client_id,
		);

		try {
			return Csrf_Token_View::delete( $where );
		} catch ( Query_Builder_Exception $exception ) {
			return 0;
		}
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
