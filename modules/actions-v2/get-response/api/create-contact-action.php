<?php

namespace JFB_Modules\Actions_V2\Get_Response\Api;

class Create_Contact_Action extends Base_Api_Action {

	protected $method = 'POST';

	private $list_id       = '';
	private $email         = '';
	private $name          = '';
	private $day_of_cycle  = '';
	private $custom_fields = array();

	public function action_endpoint() {
		return 'contacts';
	}

	public function action_body() {
		return array(
			'campaign'          => array(
				'campaignId' => $this->get_list_id(),
			),
			'email'             => $this->get_email(),
			'name'              => $this->get_name(),
			'customFieldValues' => $this->get_custom_fields(),
			'dayOfCycle'        => (int) $this->get_day_of_cycle(),
		);
	}



	public function add_custom_field( string $name, $value ) {
		$this->custom_fields[] = array(
			'customFieldId' => $name,
			'value'         => array( $value ),
		);
	}

	/**
	 * @param string $list_id
	 */
	public function set_list_id( string $list_id ) {
		$this->list_id = $list_id;
	}

	/**
	 * @return string
	 */
	public function get_list_id(): string {
		return $this->list_id;
	}

	/**
	 * @param array $custom_fields
	 */
	public function set_custom_fields( array $custom_fields ) {
		$this->custom_fields = $custom_fields;
	}

	/**
	 * @return array
	 */
	public function get_custom_fields(): array {
		return $this->custom_fields;
	}

	/**
	 * @return string
	 */
	public function get_email(): string {
		return $this->email;
	}

	/**
	 * @param string $email
	 */
	public function set_email( string $email ) {
		$this->email = $email;
	}

	/**
	 * @return string
	 */
	public function get_name(): string {
		return $this->name;
	}

	/**
	 * @param string $name
	 */
	public function set_name( string $name ) {
		$this->name = $name;
	}

	/**
	 * @param string $day_of_cycle
	 */
	public function set_day_of_cycle( string $day_of_cycle ) {
		$this->day_of_cycle = $day_of_cycle;
	}

	/**
	 * @return string
	 */
	public function get_day_of_cycle(): string {
		return $this->day_of_cycle;
	}


}
