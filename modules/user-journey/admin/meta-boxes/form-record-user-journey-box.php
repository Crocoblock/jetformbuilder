<?php


namespace JFB_Modules\User_Journey\Admin\Meta_Boxes;

use JFB_Modules\User_Journey\Admin\View_Columns\User_Journey_Date_Column;
use JFB_Modules\User_Journey\Admin\View_Columns\User_Journey_Url_Column;
use JFB_Modules\User_Journey\Admin\View_Columns\User_Journey_Title_Column;
use JFB_Modules\User_Journey\Admin\View_Columns\User_Journey_Query_Column;
use JFB_Modules\User_Journey\Admin\View_Columns\User_Journey_Duration_Column;
use JFB_Modules\User_Journey\Rest_Endpoints\Fetch_User_Journey_Box_Endpoint;
use JFB_Modules\User_Journey\Models\User_Journey_Model;
use JFB_Modules\Form_Record\Query_Views\Record_View;
use JFB_Modules\User_Journey\Query_Views\User_Journey_View;
use JFB_Modules\User_Journey\Query_Views\User_Journey_View_Count;
use Jet_Form_Builder\Admin\Exceptions\Empty_Box_Exception;
use Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes\Base_Table_Box;
use Jet_Form_Builder\Admin\Table_Views\Column_Base;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Form_Record_User_Journey_Box extends Base_Table_Box {

	protected $show_overflow = true;

	public function get_title(): string {
		return __( 'User Journey', 'jet-form-builder' );
	}

	public function get_dependencies(): array {
		return array(
			new User_Journey_Model(),
		);
	}

	/**
	 * @return Column_Base[]
	 */
	public function get_columns(): array {
		return array(
			'date'     => new User_Journey_Date_Column(),
			'title'    => new User_Journey_Title_Column(),
			'url'      => new User_Journey_Url_Column(),
			'query'    => new User_Journey_Query_Column(),
			'duration' => new User_Journey_Duration_Column(),
		);
	}

	/**
	 * @param array $args
	 *
	 * @return array
	 * @throws Empty_Box_Exception
	 */
	public function get_raw_list( array $args ): array {
		try {
			$per_page     = isset( $args['limit'] ) ? (int) $args['limit'] : 10;
			$current_page = isset( $args['page'] ) ? (int) $args['page'] : 1;
			$offset       = isset( $args['offset'] ) ? (int) $args['offset'] : 0;

			$query_args = array(
				'record_id' => $this->get_id(),
				'limit'     => $per_page,
				'paged'     => $current_page,
				'offset'    => $offset,
			);

			$journey_items = User_Journey_View::find(
				array( 'record_id' => $this->get_id() )
			)->set_table_args( $query_args )
			->query()
			->query_all();

			if ( empty( $journey_items ) ) {
				return array();
			}

			$record_created_at = $this->get_form_record_status_by_id( $journey_items[0]['record_id'] );
			$journey_items     = $this->add_journey_durations_to_journey( $journey_items, $record_created_at );

			return $journey_items;

		} catch ( Query_Builder_Exception $exception ) {
			throw new Empty_Box_Exception(
				esc_html( $exception->getMessage() ),
				// phpcs:ignore WordPress.Security.EscapeOutput.ExceptionNotEscaped
				...$exception->get_additional()
			);
		}
	}

	public function get_prepared_list( array $custom_list = array() ): array {
		return apply_filters(
			'jet-form-builder/user-journey/list',
			$this->prepare_list( $custom_list )
		);
	}

	public function get_total(): int {
		return User_Journey_View_Count::count(
			array(
				'record_id' => $this->get_id(),
			)
		);
	}

	public function get_rest_url(): string {
		return Fetch_User_Journey_Box_Endpoint::dynamic_rest_url(
			array(
				'id' => $this->get_id(),
			)
		);
	}

	public function get_rest_methods(): string {
		return Fetch_User_Journey_Box_Endpoint::get_methods();
	}

	/**
	 * Get form record status by ID
	 *
	 * @param int $record_id The ID of the form record
	 * @return string|null The status of the record or null if not found
	 */
	public function get_form_record_status_by_id( $record_id ) {
		try {
			$record = Record_View::find( array( 'id' => $record_id ) )
				->query()
				->query_one();

			return $record['created_at'] ?? null;
		} catch ( Query_Builder_Exception $e ) {
			return null;
		}
	}

	/**
	 * Add date separators to user journey list
	 *
	 * @param array $journey_items List of user journey items
	 * @return array Modified list with date separators
	 */
	// function add_date_separators_to_journey( $journey_items ) {
	// 	if ( empty( $journey_items ) ) {
	// 		return array();
	// 	}

	// 	$result       = array();
	// 	$current_date = null;

	// 	foreach ($journey_items as $index => $item) {
	// 		$timestamp = $item['timestamp'] ?? 0;
	// 		$timestamp = ( int ) ( $timestamp / 1000 );

	// 		$timezone = new \DateTimeZone( wp_timezone_string() );
	// 		$date     = new \DateTime();
	// 		$date->setTimestamp($timestamp);
	// 		$date->setTimezone($timezone);

	// 		$item_date = $date->format('Y-m-d');

	// 		if ( $item_date !== $current_date ) {
	// 			$result[] = array(
	// 				'is_separator'   => true,
	// 				'formatted_date' => $date->format( 'F j, Y' ),
	// 			);

	// 			$this->date_separators++;

	// 			$current_date = $item_date;
	// 		}

	// 		$result[] = $item;
	// 	}

	// 	return $result;
	// }

	function add_journey_durations_to_journey( $journey_items, string $record_created_at ) {
		if ( empty( $journey_items ) ) {
			return array();
		}

		$result = array();

		foreach ( $journey_items as $index => $item ) {
			if ( isset( $journey_items[ $index + 1 ] ) ) {
				$current_timestamp = $item['timestamp'] ?? 0;
				$next_timestamp    = $journey_items[ $index + 1 ]['timestamp'] ?? 0;
				$duration          = (int)( ( $next_timestamp - $current_timestamp ) / 1000 );

				$item['duration'] = $duration;
			} else {
				$timezone = wp_timezone();

				$record_created_at_dt = \DateTime::createFromFormat(
					'Y-m-d H:i:s',
					$record_created_at,
					$timezone
				);

				$record_timestamp  = (int) $record_created_at_dt->format('U') * 1000;
				$current_timestamp = $item['timestamp'] ?? 0;
				$duration          = (int)( ( $record_timestamp - $current_timestamp ) / 1000 );
				$item['duration']  = $duration;
			}

			$result[] = $item;
		}

		return $result;
	}
}
