<?php


namespace Jet_Form_Builder\Actions;

use Jet_Form_Builder\Exceptions\Condition_Exception;

class Condition_Manager {

	const THROW_IF_ONE_MATCH = 'throw_out_if_at_least_one_match';
	const THROW_IF_ONE_WRONG = 'throw_out_if_at_least_one_wrong';

	private $conditions;
	private $operator;
	private $settings;

	private function settings(): array {
		// Type transform comparing value

		return array(
			'item'                  => array(
				'execute'                     => true,
				'operator'                    => '',
				'field'                       => '',
				'default'                     => '',
				'compare_value_format_type'   => '',
				'compare_value_format_custom' => '',
			),
			'compare_value_formats' => array(
				array(
					'value' => 'date_to_timestamp',
					'label' => __( 'Datetime to Timestamp', 'jet-form-builder' )
				)
			),
			'help'                  => array(
				'compare_value_format' => __( 'Useful when comparing dates.', 'jet-form-builder' ),
			),
			'operators'             => array(
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
					'label' => __( 'Between', 'jet-form-builder' ),
					'value' => 'between',
				),
				array(
					'label' => __( 'In the list', 'jet-form-builder' ),
					'value' => 'one_of',
				),
				array(
					'label' => __( 'Contain text', 'jet-form-builder' ),
					'value' => 'contain',
				),
				array(
					'label' => __( 'Later than', 'jet-form-builder' ),
					'value' => 'later_than',
				),
				array(
					'label' => __( 'Earlier than', 'jet-form-builder' ),
					'value' => 'earlier_than',
				),
			),
		);
	}

	public function get_transformers() {
		return array(

		);
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
				$this->is_correct( $condition );

			} catch ( Condition_Exception $exception ) {
				switch ( $exception->getMessage() ) {
					case self::THROW_IF_ONE_MATCH:
						return;
					case self::THROW_IF_ONE_WRONG:
					default:
						throw new Condition_Exception( $exception->getMessage(), ...$exception->get_additional() );
				}
			}
		}
	}

	/**
	 * @param $condition
	 *
	 * @throws Condition_Exception
	 */
	public function is_correct( $condition ) {
		( new Condition_Instance() )->set_condition( $condition )->is_correct_with_throw();
	}




	public function set_conditions( array $conditions ) {
		$this->conditions = $conditions;

		return $this;
	}

	public function set_condition_operator( string $operator ) {
		$this->operator = $operator;

		return $this;
	}

	/**
	 * @param $is_success
	 * @param mixed ...$additional
	 *
	 * @throws Condition_Exception
	 */
	public function throw_by_method( $is_success, ...$additional ) {
		switch ( $this->operator ) {
			case 'or':
				if ( $is_success ) {
					throw new Condition_Exception( self::THROW_IF_ONE_MATCH, ...$additional );
				}
				break;
			case 'and':
				if ( ! $is_success ) {
					throw new Condition_Exception( self::THROW_IF_ONE_WRONG, ...$additional );
				}
				break;
		}
	}

	public function get_settings() {
		if ( ! $this->settings ) {
			$this->settings = $this->settings();
		}

		return $this->settings;
	}

	public function get_operators_list() {
		$operators = $this->get_settings()['operators'] ?? array();

		return array_map(
			function ( $operator ) {
				return $operator['value'];
			},
			$operators
		);
	}





}
