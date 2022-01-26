<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record\Table_Views;


use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Form_Record_View;
use Jet_Form_Builder\Actions\Methods\Form_Record\Query_Views\Form_Record_View_Count;
use Jet_Form_Builder\Admin\Table_Views\View_Base;
use Jet_Form_Builder\Classes\Repository_Item_With_Class;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;

class Records_Table_View extends View_Base {

	use Repository_Item_With_Class;

	public function get_columns_handlers(): array {
		return array(
			'id'       => array(
				'value' => array( $this, 'get_row_id' ),
				'type'  => 'integer',
			),
			'referrer' => array(
				'value' => array( $this, 'get_referrer' ),
				'type'  => 'link',
			),
			'user'     => array(
				'value' => array( $this, 'get_user' )
			)
		);
	}

	public function get_raw_list( $offset, $limit ) {
		try {
			return ( new Form_Record_View )
				->set_limit( array( $offset, $limit ) )
				->query()
				->query_all();
		} catch ( Query_Builder_Exception $exception ) {
			return array();
		}
	}

	public function load_data(): array {
		return array(
			'receive_url' => array(),
			'total'       => Form_Record_View_Count::count()
		);
	}

	public function get_columns_headings(): array {
		return array(
			'id'     => array(
				'label' => __( 'ID', 'jet-form-builder' )
			),
			'status' => array(
				'label' => __( 'Status', 'jet-form-builder' )
			),
			'user'   => array(
				'label' => __( 'Submitted By', 'jet-form-builder' )
			)
		);
	}

	public function get_row_id( $record ) {
		return $record['id'] ?? 0;
	}

	public function get_referrer( $record ) {
		$text   = get_the_title( $record['from_content_id'] ?? 0 );
		$params = array(
			'text' => $text ?: '--'
		);

		if ( ! empty( $record['referrer'] ) ) {
			$params['href'] = $record['referrer'];
		}

		return $params;
	}

	public function get_user( $record ) {
		$user = get_user_by( 'ID', $record['user_id'] ?? 0 );

		return $user->user_login ?? 'Guest';
	}
}