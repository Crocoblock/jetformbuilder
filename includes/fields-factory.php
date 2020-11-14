<?php
namespace Jet_Form_Builder;

use Jet_Form_Builder\Blocks\Render\Base;
use Jet_Form_Builder\Classes\Attributes_Trait;
use Jet_Form_Builder\Classes\Get_Template_Trait;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Main file
 */
class Fields_Factory {

    use Attributes_Trait;
    use Get_Template_Trait;

	private $form_id = false;
	private $form    = false;


    private $pages                  = 0;
    private $rendered_rows          = 0;
    private $field_name;
    private $current_field_data;
    private $start_new_page;

    private $is_hidden_row;
    private $is_submit_row;
    private $is_page_break_row;

    public $current_repeater;
    public $current_repeater_i;
    public $preset;
    public $spec_data;

    public $page;
    public $has_prev;

	/**
	 * Create form instance
	 *
	 * @param [type] $form_id [description]
	 */
	public function __construct( $form_id ) {
	    $this->form_id = $form_id;
        $this->preset = Form_Preset::instance( $form_id );

        $this->set_specific_data_for_render();

        $this->rendered_rows = 0;
        $this->page = 0;
        $this->has_prev = false;
	}

	public function set_repeater( $item, $count = false ) {
	    $this->current_repeater = $item;
	    $this->current_repeater_i = $count;

	    return $this;
    }

    private function set_specific_data_for_render() {
        $spec_data = Plugin::instance()->post_type->get_args( $this->form_id );

        $spec_data['has_prev'] = $this->has_prev;
        $spec_data['page'] = $this->page;

        $this->spec_data = ( object ) $spec_data;
    }

    private function is_not_field() {
	    return Plugin::instance()->form->is_not_field( $this->current_field_data['blockName'] );
    }

    private function is_field( $needle ) {
	    return Plugin::instance()->form->is_field( $this->current_field_data['blockName'], $needle );
    }

    /**
     * Setup fields prop
     * @param $fields
     */
    public function setup_fields( $fields ) {
        foreach ( $fields as $field ) {
            $this->current_field_data = $field;

            if ( ! $this->is_not_field() && $this->is_field( 'form-break' ) ) {
                $this->pages++;
            }

            $this->current_field_data = null;
        }
    }


    /**
     * @param $source
     * @return string
     */
    public function render_form_blocks( $source ) {
        $fields = array();

        $this->setup_fields( $source );

        foreach ( $source as $block ) {

            $this->current_field_data = $block;

            /**
             * TODO: change render algorithm.
             * This way it will not work to render form fields
             * inside third-party blocks (columns)
             *
             * Most likely we will have to switch to render
             * through the pre_render_block action or render_callback
             */
            if ( ! empty( $block['innerBlocks'] ) && ! $this->is_field( 'repeater' ) ) {
                $fields[] = $this->render_form_blocks( $block['innerBlocks'] );
            }

            if ( $this->is_not_field() ) {
                $fields[] = render_block( $block );
                continue;
            }

            $this->set_field_name()->set_field_args();
            $field = $this->get_field_object();


            $fields[] = $this->render_item( $field );
            $this->current_field_data = null;
        }
        $this->maybe_end_page( true );

        return implode( "\n", $fields );
    }

    public function render_item( $field ) {
        $result = [];

        $this->is_hidden_row     = true;
        $this->is_submit_row     = false;

        $result[] = $this->maybe_start_page();
        $result[] = $this->start_form_row();

        if ( $this->is_field_visible() ) {

            $result[] = $field->render();
        }

        $result[] = $this->end_form_row();
        $result[] = $this->maybe_end_page();

        return implode( "\n", $result );
    }



    /**
     * @return Base [render]
     */
    public function get_field_object() {
        $block = Plugin::instance()->blocks->get_field_by_name( $this->field_name );

        $this->current_field_data['attrs'] = array_merge(
            $block->get_default_attributes(),
            $this->current_field_data['attrs']
        );

        return $block->get_block_renderer( $this->form_id, $this->current_field_data, $this );
    }

    /**
     *
     */
    public function set_field_name() {
        $block = explode( jet_form_builder()->form::NAMESPACE_FIELDS, $this->current_field_data['blockName'] );

        $this->field_name = $block[1];

        return $this;
    }



    /**
     *
     */
    public function set_field_args() {
        $this->current_field_data['attrs'] = jet_form_builder()->blocks
            ->get_field_attrs(
                $this->field_name,
                $this->current_field_data['attrs']
            );
    }

    public static function force_render_field( $name, $form_id = 0, $arguments = array() ) {

        if( empty( $name ) ) {
            return;
        }
        $field = jet_form_builder()->blocks->get_field_by_name( $name );

        if( ! $field ) {
            return;
        }
        $attrs = array(
            'attrs' => $arguments
        );

        return $field->get_block_renderer( $form_id, $attrs )->render();
    }

    /**
     * Open form wrapper
     *
     * @return [type] [description]
     */
    public function start_form_row() {

        if ( ! $this->is_hidden_row ) {
            $this->rendered_rows++;
        }

        ob_start();

        do_action( 'jet-engine/forms/booking/before-start-form-row', $this );

        $this->add_attribute( 'class', 'jet-form-row' );

        if ( $this->is_hidden_row ) {
            $this->add_attribute( 'class', 'jet-form-row--hidden' );
        }

        if ( $this->is_field( 'submit' ) ) {
            $this->add_attribute( 'class', 'jet-form-row--submit' );
        }

        if ( $this->is_field( 'form-break' ) ) {
            $this->add_attribute( 'class', 'jet-form-row--page-break' );
        }

        if ( 1 === $this->rendered_rows ) {
            $this->add_attribute( 'class', 'jet-form-row--first-visible' );
        }

        include $this->get_template( 'common/start-form-row.php' );

        do_action( 'jet-engine/forms/booking/after-start-form-row', $this );

        return ob_get_clean();
    }

    /**
     * Close form wrapper
     *
     * @return [type] [description]
     */
    public function end_form_row() {

        ob_start();
        do_action( 'jet-engine/forms/booking/before-end-form-row', $this );

        include $this->get_template( 'common/end-form-row.php' );

        do_action( 'jet-engine/forms/booking/after-end-form-row', $this );
        return ob_get_clean();
    }


    /**
     * Maybe start new page
     *
     * @return false|string|void
     */
    public function maybe_start_page() {

        if ( 0 >= $this->pages ) {
            return;
        }

        if ( false === $this->start_new_page ) {
            return;
        }

        $this->start_new_page = false;
        $this->has_prev       = true;

        $this->page++;

        ob_start();
        do_action( 'jet-engine/forms/before-page-start', $this );

        $hidden_class = '';

        if ( 1 < $this->page ) {
            $hidden_class = 'jet-form-page--hidden';
        }

        include $this->get_template( 'common/start-page.php' );

        do_action( 'jet-engine/forms/after-page-start', $this );

        return ob_get_clean();
    }

    /**
     * Maybe start new page
     *
     * @return [type] [description]
     */
    public function maybe_end_page( $is_last = false ) {

        if ( 0 >= $this->pages ) {
            return;
        }

        if ( ! $is_last && ! $this->is_field( 'form-break' ) ) {
            return;
        }

        $this->start_new_page = true;
        $this->has_prev       = true;

        ob_start();
        do_action( 'jet-engine/forms/before-page-end', $this );

        include $this->get_template( 'common/end-page.php' );

        do_action( 'jet-engine/forms/after-page-end', $this );
        return ob_get_clean();
    }

    /**
     * Returns true if field is visible
     *
     * @return boolean        [description]
     */
    public function is_field_visible() {

        $field = $this->current_field_data['attrs'];

        // For backward compatibility and hidden fields
        if ( empty( $field['visibility'] ) ) {
            return true;
        }

        // If is visible for all - show field
        if ( 'all' === $field['visibility'] ) {
            return true;
        }

        // If is visible for logged in users and user is logged in - show field
        if ( 'logged_id' === $field['visibility'] && is_user_logged_in() ) {
            return true;
        }

        // If is visible for not logged in users and user is not logged in - show field
        if ( 'not_logged_in' === $field['visibility'] && ! is_user_logged_in() ) {
            return true;
        }

        return false;

    }

}
