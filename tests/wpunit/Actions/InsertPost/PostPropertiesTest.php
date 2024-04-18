<?php

namespace JFB_Tests\Wpunit\Actions\InsertPost;

use Codeception\AssertThrows;
use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Author_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Comments_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Content_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Date_Gmt_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Date_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Excerpt_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Id_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Meta_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Parent_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Status_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Terms_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Thumbnail_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Title_Property;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Type_Property;
use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Silence_Exception;

class PostPropertiesTest extends \Codeception\TestCase\WPTestCase {

	use AssertThrows;

	const PROPERTIES = array(
		Post_Author_Property::class    => 'post_author',
		Post_Comments_Property::class  => 'comment_status',
		Post_Content_Property::class   => 'post_content',
		Post_Date_Property::class      => 'post_date',
		Post_Date_Gmt_Property::class  => 'post_date_gmt',
		Post_Excerpt_Property::class   => 'post_excerpt',
		Post_Id_Property::class        => 'ID',
		Post_Meta_Property::class      => 'meta_input',
		Post_Parent_Property::class    => 'post_parent',
		Post_Status_Property::class    => 'post_status',
		Post_Terms_Property::class     => 'post_terms',
		Post_Thumbnail_Property::class => '_thumbnail_id',
		Post_Title_Property::class     => 'post_title',
		Post_Type_Property::class      => 'post_type',
	);

	private $modifier;

	protected function setUp(): void {
		parent::setUp();

		$this->modifier = new Post_Modifier();
		$this->modifier->properties->replace( new class extends Post_Meta_Property {
			public function get_value( Abstract_Modifier $modifier ) {
				return $this->value;
			}
		} );
	}

	public function testGetEachProperty() {
		foreach ( self::PROPERTIES as $prop_class_name => $slug ) {
			$property = $this->modifier->get( $slug );

			$this->assertInstanceOf( $prop_class_name, $property );
		}
	}

	public function testPostMetaProperty() {
		$this->modifier->set( 'meta_input', 111, 'meta_1' );
		$this->modifier->set( 'meta_input', "some string", 'meta_2' );
		$this->modifier->set(
			'meta_input',
			array(
				array(
					'text_field'    => 'meta_text',
					'content_field' => 'meta_text',
				)
			),
			'meta_3'
		);


		/** @var Post_Meta_Property $meta_input */
		$meta_input = $this->modifier->get( 'meta_input' );

		$this->assertEqualSets(
			array(
				'meta_1' => 111,
				'meta_2' => 'some string',
				'meta_3' => array(
					'item-0' => array(
						'text_field'    => 'meta_text',
						'content_field' => 'meta_text',
					),
				)
			),
			$meta_input->get_value( $this->modifier )
		);
	}

	/**
	 * @throws \Throwable
	 */
	public function testPostStatusProperty() {
		/** @var Post_Status_Property $property */
		$property = $this->modifier->get( 'post_status' );

		$modifier = $this->modifier;
		$property->set_value( '', '', $modifier );
		$this->assertThrows( Silence_Exception::class, static function () use ( $property, $modifier ) {
			$property->get_value( $modifier );
		} );

		$property->set_value( '', 'from-field', $modifier );
		$this->assertThrows( Silence_Exception::class, static function () use ( $property, $modifier ) {
			$property->get_value( $modifier );
		} );

		$property->set_value( '', 'keep-current', $modifier );

		// because of excluding by the 'keep-current' status
		$this->assertNotTrue( $property->can_attach( '', 'published' ) );
	}

}