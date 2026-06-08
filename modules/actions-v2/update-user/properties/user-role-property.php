<?php


namespace JFB_Modules\Actions_V2\Update_User\Properties;

use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Base_Object_Property;
use Jet_Form_Builder\Classes\Arrayable\Array_Continue_Exception;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Silence_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class User_Role_Property extends Base_Object_Property {

	public function get_id(): string {
		return 'role';
	}

	public function can_attach( string $key, $value ): bool {
		if ( empty( $value ) || 'administrator' === $value ) {
			return false;
		}

		return parent::can_attach( $key, $value );
	}

	public function do_before( string $key, $value, Abstract_Modifier $modifier ) {
		$roles = $this->normalize_roles( $value );

		if ( Tools::is_webhook() || current_user_can( 'promote_users' ) ) {
			parent::do_before( $key, $roles, $modifier );

			return;
		}

		if ( $this->is_noop_role_update( $modifier, $roles ) ) {
			parent::do_before( $key, $roles, $modifier );

			return;
		}

		if ( ! $this->can_self_promote_to_roles( $modifier, $roles ) ) {
			$this->exclude();

			return;
		}

		parent::do_before( $key, $roles, $modifier );
	}

	public function get_related(): array {
		return array( 'ID' );
	}

	public function do_after( Abstract_Modifier $modifier ) {
		/** @var User_Id_Property $id */
		$id = $modifier->get( 'ID' );

		if ( empty( $this->value ) ) {
			return;
		}

		if ( ! is_array( $this->value ) ) {
			$this->value = array( $this->value );
		}

		if ( ! Tools::is_webhook() ) {
			$available_roles = current_user_can( 'promote_users' )
				? Tools::get_editable_roles_safe()
				: Tools::get_registered_roles_safe();

			if ( empty( $available_roles ) ) {
				$this->exclude();

				return;
			}

			$this->value = array_values(
				array_filter(
					$this->value,
					function ( string $role ) use ( $available_roles ): bool {
						return 'administrator' !== $role && isset( $available_roles[ $role ] );
					}
				)
			);

			if ( empty( $this->value ) ) {
				$this->exclude();

				return;
			}
		}

		$main_role = array_shift( $this->value );

		if ( 'administrator' !== $main_role ) {
			$id->user->set_role( $main_role );
		}

		foreach ( $this->value as $role ) {
			if ( 'administrator' !== $role ) {
				$id->user->add_role( $role );
			}
		}
	}

	/**
	 * @return string
	 * @throws Array_Continue_Exception
	 */
	public function get_label(): string {
		throw new Array_Continue_Exception();
	}

	public function get_value( Abstract_Modifier $modifier ) {
		throw new Silence_Exception();
	}

	private function normalize_roles( $roles ): array {
		if ( ! is_array( $roles ) ) {
			$roles = array( $roles );
		}

		$roles = array_map( 'strval', $roles );
		$roles = array_filter( $roles );
		$roles = array_values( array_unique( $roles ) );

		return $roles;
	}

	private function is_noop_role_update( Abstract_Modifier $modifier, array $requested_roles ): bool {
		if ( ! $modifier instanceof User_Modifier ) {
			return false;
		}

		/** @var User_Id_Property $id */
		$id = $modifier->get( 'ID' );

		if ( ! is_a( $id->user ?? null, \WP_User::class ) ) {
			return false;
		}

		return $this->normalize_roles( $id->user->roles )
			=== $this->normalize_roles( $requested_roles );
	}

	private function can_self_promote_to_roles( Abstract_Modifier $modifier, array $roles ): bool {
		if ( ! $modifier instanceof User_Modifier ) {
			return false;
		}

		/** @var User_Id_Property $id */
		$id = $modifier->get( 'ID' );

		if ( ! is_a( $id->user ?? null, \WP_User::class ) ) {
			return false;
		}

		if ( get_current_user_id() !== (int) $id->user->ID ) {
			return false;
		}

		$allowed_roles = $modifier->get_self_promotable_roles();
		$current_roles = $this->normalize_roles( $id->user->roles );

		if ( empty( $allowed_roles ) && empty( $current_roles ) ) {
			return false;
		}

		foreach ( $roles as $role ) {
			if ( in_array( $role, $current_roles, true ) ) {
				continue;
			}

			if ( ! in_array( $role, $allowed_roles, true ) ) {
				return false;
			}
		}

		return true;
	}
}
