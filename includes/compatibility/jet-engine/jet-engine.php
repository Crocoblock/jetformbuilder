<?php


namespace Jet_Form_Builder\Compatibility\Jet_Engine;


use Jet_Form_Builder\Actions\Methods\Object_Properties_Collection;
use Jet_Form_Builder\Blocks\Manager;
use Jet_Form_Builder\Compatibility\Jet_Engine\Actions\Update_Options;
use Jet_Form_Builder\Compatibility\Jet_Engine\Blocks\Map_Field;
use Jet_Form_Builder\Compatibility\Jet_Engine\Generators\Get_From_Field;
use Jet_Form_Builder\Compatibility\Jet_Engine\Generators\Get_From_Je_Query;
use Jet_Form_Builder\Compatibility\Jet_Engine\Methods\Post_Modification\Post_Je_Relation_Property;
use Jet_Form_Builder\Compatibility\Jet_Engine\Parsers\Map_Field_Parser;
use Jet_Form_Builder\Compatibility\Jet_Engine\Preset_Sources\Preset_Source_Options_Page;

class Jet_Engine {

	public static function register() {
		if ( ! function_exists( 'jet_engine' ) ) {
			return;
		}
		new static();
	}

	private function __construct() {
		add_filter(
			'jet-form-builder/preset/source-types',
			array( $this, 'add_sources' )
		);
		add_filter(
			'jet-form-builder/forms/options-generators',
			array( $this, 'add_generators' )
		);
		add_filter(
			'jet-form-builder/parsers-request/register',
			array( $this, 'add_parsers' )
		);
		add_action(
			'jet-form-builder/blocks/register',
			array( $this, 'add_blocks' )
		);
		add_action(
			'jet-form-builder/actions/register',
			array( $this, 'add_actions' )
		);

		if ( jet_engine()->relations ) {
			add_filter(
				'jet-form-builder/post-modifier/object-properties',
				array( $this, 'add_post_properties' )
			);
		}
	}

	public function add_sources( array $sources ): array {
		$sources[] = new Preset_Source_Options_Page();

		return $sources;
	}

	public function add_generators( array $generators ): array {
		array_push(
			$generators,
			new Get_From_Field(),
			new Get_From_Je_Query()
		);

		return $generators;
	}

	public function add_parsers( array $parsers ): array {
		$parsers[] = new Map_Field_Parser();

		return $parsers;
	}

	public function add_blocks( Manager $manager ) {
		$manager->register_block_type( new Map_Field() );
	}

	public function add_actions( \Jet_Form_Builder\Actions\Manager $manager ) {
		$manager->register_action_type( new Update_Options() );
	}

	public function add_post_properties(
		Object_Properties_Collection $collection
	): Object_Properties_Collection {
		return $collection->add( new Post_Je_Relation_Property() );
	}

}