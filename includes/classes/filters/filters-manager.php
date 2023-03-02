<?php


namespace Jet_Form_Builder\Classes\Filters;


use Jet_Form_Builder\Actions\Types\Send_Email;
use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Invalid_Macro_Exception;
use Jet_Form_Builder\Exceptions\Repository_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @method static Filters_Manager instance()
 *
 * Class Filters_Manager
 * @package Jet_Form_Builder\Classes\Filters
 */
class Filters_Manager {

	use Repository_Pattern_Trait;
	use Instance_Trait;

	public function __construct() {
		$this->rep_install();
	}

	public function rep_instances(): array {
		return apply_filters(
			'jet-form-builder/content-filters',
			array(
				new Embed_Url_Filter(),
				new File_Url_By_Id_Filter(),
				new Format_Date_Filter(),
				new Image_Url_By_Id_Filter(),
				new Image_Alt_By_Id_Filter(),
				new Image_Gallery_Grid_Filter(),
				new Image_Gallery_Slider_Filter(),
				new Post_Link_By_Id_Filter(),
				new Post_Title_By_Id_Filter(),
				new Post_Titles_By_Ids_Filter(),
				new Post_Url_By_Id_Filter(),
				new Render_Acf_Checkbox_Filter(),
				new Term_Title_By_Id_Filter(),
				new Term_Titles_By_Ids_Filter(),
				new Md5_Filter(),
				new User_Prop_By_Id_Filter(),
			)
		);
	}

	public function apply( $value, $filters ) {
		foreach ( $filters as $filter ) {
			$value = $this->apply_single( $value, $filter );
		}

		return $value;
	}

	private function apply_single( $value, $filter ) {
		preg_match( '/([-\w]+)(\(.+?\))?/', $filter, $filter_data );

		if ( empty( $filter_data ) ) {
			return $value;
		}

		$filter_name = $filter_data[1] ?? false;

		try {
			/** @var Base_Filter $filter */
			$filter = $this->rep_get_item( $filter_name );
		} catch ( Repository_Exception $exception ) {
			return $value;
		}

		$filter_arg = isset( $filter_data[2] ) ? trim( $filter_data[2], '()' ) : false;

		try {
			return $filter->apply( $value, $filter_arg );
		} catch ( Invalid_Macro_Exception $exception ) {
			return $value;
		}
	}


}