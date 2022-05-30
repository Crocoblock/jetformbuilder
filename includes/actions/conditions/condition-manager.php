<?php


namespace Jet_Form_Builder\Actions\Conditions;

use Jet_Form_Builder\Exceptions\Condition_Exception;
use Jet_Form_Builder\Exceptions\Condition_Silence_Exception;

class Condition_Manager {

	const THROW_IF_ONE_MATCH          = 'throw_out_if_at_least_one_match';
	const THROW_IF_ONE_WRONG          = 'throw_out_if_at_least_one_wrong';
	const TRANSFORM_DATE_TO_TIMESTAMP = 'date_to_timestamp';

	/** @var Condition_Instance[] */
	private $conditions;
	private $operator;
	private $settings;

	private function settings(): array {
		return array(
			'item'                       => array(
				'execute'                     => true,
				'operator'                    => '',
				'field'                       => '',
				'default'                     => '',
				'compare_value_format_type'   => '',
				'compare_value_format_custom' => '',
			),
			'compare_value_formats'      => array(
				array(
					'label' => '--',
					'value' => '',
				),
				array(
					'value'    => self::TRANSFORM_DATE_TO_TIMESTAMP,
					'callback' => 'strtotime',
					'label'    => __( 'String to Timestamp', 'jet-form-builder' ),
					'help'     => sprintf(
					// phpcs:ignore WordPress.WP.I18n.MissingTranslatorsComment
						__( 'Useful when comparing dates. See more here: %1$sstrtotime%2$s', 'jet-form-builder' ),
						'<a target="_blank" href="https://www.php.net/manual/en/function.strtotime.php">',
						'</a>'
					),
				),
			),
			'help_for_exploding_compare' => __( 'List the values separated by commas', 'jet-form-builder' ),
			'operators'                  => array(
				array(
					'label' => '--',
					'value' => '',
				),
				array(
					'label' => __( 'Equal', 'jet-form-builder' ),
					'value' => 'equal',
				),
				array(
					'label' => __( 'Greater than', 'jet-form-builder' ),
					'value' => 'greater',
				),
				array(
					'label' => __( 'Less than', 'jet-form-builder' ),
					'value' => 'less',
				),
				array(
					'label'        => __( 'Between', 'jet-form-builder' ),
					'value'        => 'between',
					'need_explode' => true,
				),
				array(
					'label'        => __( 'In the list', 'jet-form-builder' ),
					'value'        => 'one_of',
					'need_explode' => true,
				),
				array(
					'label' => __( 'Contain text', 'jet-form-builder' ),
					'value' => 'contain',
				),
			),
		);
	}

	public function get_transformers( $value_key = 'value' ): array {
		return $this->get_settings_list( 'compare_value_formats', $value_key );
	}

	/**
	 * @param $key
	 * @param $must_be_value
	 * @param string $return_key
	 *
	 * @return array
	 */
	public function get_transformers_find( $key, $must_be_value ): array {
		return $this->get_settings_list_find( $key, $must_be_value, 'compare_value_formats' );
	}

	public function get_operators_list( $value_key = 'value' ): array {
		return $this->get_settings_list( 'operators', $value_key );
	}

	public function get_operators_filter( $key, $must_be_value, $return_key = 'value' ) {
		return $this->get_settings_list_filter( $key, $must_be_value, 'operators', $return_key );
	}


	/**
	 * @throws Condition_Exception
	 */
	public function check_all() {
		if ( empty( $this->conditions ) ) {
			return;
		}

		foreach ( $this->conditions as $condition ) {
			try {
				$condition->is_correct();

			} catch ( Condition_Silence_Exception $exception ) {
				switch ( $exception->getMessage() ) {
					case self::THROW_IF_ONE_MATCH:
						return;
					case self::THROW_IF_ONE_WRONG:
					default:
						throw new Condition_Exception( $exception->getMessage(), ...$exception->get_additional() );
				}
			}
		}

		if ( 'or' === $this->operator ) {
			throw new Condition_Exception( 'None of the conditions are met' );
		}
	}

	public function set_conditions( array $conditions ): Condition_Manager {
		$this->conditions = array_map( array( new Condition_Instance(), 'set_condition' ), $conditions );

		return $this;
	}

	public function set_condition_operator( string $operator ): Condition_Manager {
		$this->operator = $operator;

		return $this;
	}

	protected function set_fields_conditions(): Condition_Manager {
		return $this;
	}

	/**
	 * @param $is_success
	 * @param mixed ...$additional
	 *
	 * @throws Condition_Silence_Exception
	 */
	public function throw_by_method( $is_success, ...$additional ) {
		switch ( $this->operator ) {
			case 'or':
				if ( $is_success ) {
					throw new Condition_Silence_Exception(
						self::THROW_IF_ONE_MATCH,
						...$additional
					);
				}
				break;
			case 'and':
				if ( ! $is_success ) {
					throw new Condition_Silence_Exception(
						self::THROW_IF_ONE_WRONG,
						...$additional
					);
				}
				break;
		}
	}

	public function get_settings() {
		if ( ! $this->settings ) {
			$this->settings = apply_filters(
				'jet-form-builder/register/action-condition-settings',
				$this->settings()
			);
		}

		return $this->settings;
	}

	public function get_settings_list( $list_key, $return_key = 'value' ): array {
		$list = $this->get_settings()[ $list_key ] ?? array();

		return array_map(
			function ( $operator ) use ( $return_key ) {
				return $operator[ $return_key ] ?? false;
			},
			$list
		);
	}

	/**
	 * @param $key
	 * @param $must_be_value
	 * @param $list_key
	 *
	 * @return false|array
	 */
	public function get_settings_list_find( $key, $must_be_value, $list_key ) {
		$list = $this->get_settings()[ $list_key ] ?? array();

		foreach ( $list as $item ) {
			if ( ( $item[ $key ] ?? false ) === $must_be_value ) {
				return $item;
			}
		}

		return false;
	}

	/**
	 * @param $key
	 * @param $must_be_value
	 * @param $list_key
	 * @param string $return_key
	 *
	 * @return array
	 */
	public function get_settings_list_filter( $key, $must_be_value, $list_key, $return_key = 'value' ) {
		$list     = $this->get_settings()[ $list_key ] ?? array();
		$filtered = array();

		foreach ( $list as $item ) {
			if ( ( $item[ $key ] ?? false ) === $must_be_value ) {
				$filtered[] = ( false !== $return_key ) ? ( $item[ $return_key ] ?? false ) : $item;
			}
		}

		return array_filter( $filtered );
	}


}
