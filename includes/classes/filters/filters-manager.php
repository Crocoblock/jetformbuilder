<?php


namespace Jet_Form_Builder\Classes\Filters;


use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Exceptions\Repository_Exception;

/**
 * @method static Filters_Manager instance()
 *
 * Class Filters_Manager
 * @package Jet_Form_Builder\Classes\Filters
 */
class Filters_Manager {

	use Repository_Pattern_Trait;
	use Instance_Trait;

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
			)
		);
	}

	public function apply( $value, $filter ) {
		preg_match( '/([a-zA-Z0-9_-]+)(\([a-zA-Z0-9\,\:\/\s_-]+\))?/', $filter, $filter_data );

		if ( empty( $filter_data ) ) {
			return $value;
		}

		$filter_name = $filter_data[1] ?? false;
		$filter_arg  = isset( $filter_data[2] ) ? trim( $filter_data[2], '()' ) : false;

		try {
			/** @var Base_Filter $filter */
			$filter = $this->rep_get_item( $filter_name );
		} catch ( Repository_Exception $exception ) {
			return $value;
		}

		return $filter->apply( $value, $filter_arg );

	}

}