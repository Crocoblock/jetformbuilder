<?php


namespace Jet_Form_Builder;

// If this file is called directly, abort.
use Jet_Form_Builder\Classes\Get_Template_Trait;

if ( ! defined( 'WPINC' ) ) {
    die;
}

/**
 * Form messages class
 */
class Form_Messages_Builder
{

    use Get_Template_Trait;

    private $form_id = null;
    private $status = null;
    private $is_ajaxified = false;

    public  $manager;

    /**
     * Class constructor
     * @param $form_id
     * @param $status
     * @param bool $is_ajaxified
     */
    public function __construct( $form_id, $status, $is_ajaxified = true )
    {
        $this->form_id = $form_id;
        $this->manager = Plugin::instance()->form->messages_manager;

        $this->set_form_status( $status );
        $this->set_is_ajaxified( $is_ajaxified );
    }

    /**
     * Set form submittion status
     * @param [type] $status [description]
     */
    public function set_form_status($status)
    {
        $this->status = $status;
    }

    /**
     * Set is ajaxified status
     *
     * @param [type] $is_ajaxified [description]
     */
    public function set_is_ajaxified( $is_ajaxified )
    {
        $this->is_ajaxified = $is_ajaxified;
    }

    /**
     * Get form submittion status
     */
    public function get_form_status()
    {
        if ( ! $this->status ) {
            $this->status = isset($_REQUEST['status']) ? $_REQUEST['status'] : null;
        }

        return $this->status;
    }

    public function render_empty_field_message()
    {
        $message_content = $this->manager->get_message_text( 'empty_field', $this->form_id );

        include $this->get_template('common/field-message.php');
    }

    /**
     * Render form messages
     *
     * @return void
     */
    public function render_messages()
    {
        $status = $this->get_form_status();

        if ( 'success' === $status ) {
            $status_class = 'success';
        } else {
            $status_class = 'error';
        }

        $message_content = $this->manager->get_message_text( $status, $this->form_id );

        $class = 'jet-form-message';
        $class .= ' jet-form-message--' . $status_class;

        include $this->get_template('common/messages.php');
    }

    public function get_messages_data()
    {
        $all_messages = jet_engine()->forms->editor->get_messages($this->form_id);
        $default_messages = jet_engine()->forms->get_message_types();

        foreach ($default_messages as $status => $message) {
            if (!isset($all_messages[$status])) {
                $all_messages[$status] = $message['default'];
            }
        }

        return $all_messages;

    }

    /**
     * Render message samples for editor
     *
     * @return [type] [description]
     */
    public function render_messages_samples()
    {
        // Render success sample
        $this->set_form_status('success');
        $this->render_messages();

        // Render error sample
        $this->set_form_status('failed');
        $this->render_messages();

        // Reset status
        $this->set_form_status(null);

    }




}