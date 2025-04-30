<?php
namespace JFB_Modules\User_Journey;

use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;
use JFB_Components\Module\Base_Module_After_Install_It;
use JFB_Components\Module\Base_Module_Dir_It;
use JFB_Components\Module\Base_Module_Dir_Trait;
use JFB_Components\Module\Base_Module_Handle_It;
use JFB_Components\Module\Base_Module_Handle_Trait;
use JFB_Components\Module\Base_Module_It;
use JFB_Components\Module\Base_Module_Static_Instance_It;
use JFB_Components\Module\Base_Module_Static_Instance_Trait;
use JFB_Components\Module\Base_Module_Url_It;
use JFB_Components\Module\Base_Module_Url_Trait;
use JFB_Modules\User_Journey\Admin\Meta_Boxes\Form_Record_User_Journey_Box;
use JFB_Modules\User_Journey\Models\User_Journey_Model;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use JFB_Modules\User_Journey\User_Journey_Rest_Controller;
// If this file is called directly, abort.  
if ( ! defined( 'WPINC' ) ) {
    die;
}

/**
 * @method static Module instance()
 *
 * @package JFB_Modules\User_Journey
 */
class Module implements
    Base_Module_Dir_It,
    Base_Module_It,
    Base_Module_Handle_It,
    Base_Module_Url_It,
    Base_Module_After_Install_It,
    Base_Module_Static_Instance_It {

    use Base_Module_Handle_Trait;
    use Base_Module_Dir_Trait;
    use Base_Module_Url_Trait;
    use Base_Module_Static_Instance_Trait;

    private $rest;
    private $form_id;

    /**
     * Returns the instance ID for the module.
     *
     * @return string The instance ID.
     */
    public static function get_instance_id(): string {
        return 'user-journey';
    }

    /**
     * Checks if the form-record module is available.
     *
     * @return bool True if the module is available, false otherwise.
     */
    public function condition(): bool {
        return jet_form_builder()->has_module( 'form-record' );
    }

    /**
     * Initializes hooks for the module.
     */
    public function init_hooks() {
        add_action(
			'rest_api_init',
			array( $this->get_rest(), 'register_routes' )
		);

        add_filter(
            'jet-form-builder/page-containers/jfb-records-single',
            array( $this, 'add_box_to_single_record' ),
            0
        );

        if ( $this->is_user_journey_enabled() ) {
            add_action(
                'wp_footer',
                array( $this, 'enqueue_journey_script' )
            );

            add_filter(
                'jet-form-builder/editor/config',
                array( $this, 'add_user_journey_settings' ),
                10,
                1
            );

            add_action(
                'jet-form-builder/form-record/save-record-action',
                array( $this, 'save_user_journey' ),
                10,
                2
            );

            add_filter(
                'jet-form-builder/before-start-form',
                array( $this, 'add_form_attributes' ),
                10,
                2
            );
        }
    }

    /**
     * Removes hooks for the module.
     */
    public function remove_hooks() {
        remove_action(
			'rest_api_init',
			array( $this->get_rest(), 'register_routes' )
		);

        remove_filter(
            'jet-form-builder/page-containers/jfb-records-single',
            array( $this, 'add_box_to_single_record' ),
            0
        );

        if ( $this->is_user_journey_enabled() ) {
            remove_action(
                'wp_footer',
                array( $this, 'enqueue_journey_script' )
            );

            remove_filter(
                'jet-form-builder/editor/config',
                array( $this, 'add_user_journey_settings' )
            );

            remove_action(
                'jet-form-builder/form-record/save-record-action',
                array( $this, 'save_user_journey' )
            );

            remove_filter(
                'jet-form-builder/before-start-form',
                array( $this, 'add_form_attributes' )
            );
        }
    }

    /**
     * Handles actions to perform on module installation.
     */
    public function on_install() {
        $this->rest = new User_Journey_Rest_Controller();

        Tab_Handler_Manager::instance()->install( new Tab_Handlers\User_Journey_Handler() );
    }

    /**
     * Handles actions to perform on module uninstallation.
     */
    public function on_uninstall() {
        Tab_Handler_Manager::instance()->uninstall( new Tab_Handlers\User_Journey_Handler() );
    }

    /**
     * Adds user journey settings to the provided settings array.
     *
     * @param array $settings The settings array to modify.
     *
     * @return array The modified settings array.
     */
    function add_user_journey_settings( $settings ) {
        $user_journey_settings = Tab_Handler_Manager::get_options( 'user-journey-tab' );

        $settings['user_journey'] = array(
            'enabled'            => $user_journey_settings['enable_user_journey'] ?? false,
            'storage_type'       => $user_journey_settings['storage_type'] ?? 'local',
            'clear_after_submit' => $user_journey_settings['clear_after_submit'] ?? 'success',
        );

        return $settings;
    }

    /**
     * Adds a meta box to a single record.
     *
     * @param Base_Meta_Container[] $containers The array of meta containers.
     *
     * @return array The modified array of meta containers.
     */
    public function add_box_to_single_record( array $containers ): array {
        $containers[0]->add_meta_box( new Form_Record_User_Journey_Box() );

        return $containers;
    }

    /**
     * Checks if user journey tracking is enabled in the settings.
     *
     * @return bool True if user journey tracking is enabled, false otherwise.
     */
    public function is_user_journey_enabled() {
        $options = Tab_Handler_Manager::get_options( 'user-journey-tab' );
        return ! empty( $options['enable_user_journey'] );
    }

    /**
     * Returns the user journey tracking settings.
     *
     * @return array The user journey settings.
     */
    public function get_journey_settings() {
        $options = Tab_Handler_Manager::get_options('user-journey-tab');
        return array(
            'enabled'            => !empty($options['enable_user_journey']),
            'storage_type'       => $options['storage_type'] ?? 'session',
            'clear_after_submit' => $options['clear_after_submit'] ?? 'success',
        );
    }

    /**
     * Enqueues JavaScript for tracking the user journey.
     */
    public function enqueue_journey_script() {
        $jet_fb_user_journey_settings = $this->get_journey_settings();
        ?>
        <script>
        ( function() {
            const settings    = <?php echo wp_json_encode( $jet_fb_user_journey_settings ); ?>;
            const storageKey  = 'jet_fb_user_journey';
            const storage     = settings.storage_type === 'local' ? localStorage : sessionStorage;
            const currentUrl  = window.location.pathname;
            const queryString = window.location.search;

            let journey = [];

            try {
                const savedJourney = storage.getItem( storageKey );
                if ( savedJourney ) {
                    journey = JSON.parse( savedJourney );
                }
            } catch( e ) {
                console.error( 'Error parsing user journey data:', e );
            }

            const lastEntry = 0 < journey.length ? journey[ journey.length - 1 ] : false;

            function addJourneyEntry( url, query ) {
                journey.push( {
                    url: url,
                    query: query,
                    timestamp: Date.now()
                } );
            }

            if (!lastEntry) {
                addJourneyEntry(currentUrl, queryString);
            } else if (currentUrl !== lastEntry.url || queryString !== lastEntry.query) {
                addJourneyEntry(currentUrl, queryString);
            }

            storage.setItem( storageKey, JSON.stringify( journey ) );

            jQuery( document ).ready( function() {
                JetPlugins.hooks.addFilter(
                    'jet.fb.submit.ajax.promises',
                    'user_journey_promise',
                    function ( promises, $form ) {
                        promises.push( new Promise( ( resolve, reject ) => {
                            const formData        = new FormData( $form[0] );
                            const userJourneyData = storage.getItem( storageKey );
                            const formElement     = $form instanceof jQuery ? $form[0] : $form;

                            if ( formElement ) {
                                if ( formElement.dataset.userJourney === 'true' ) {
                                    if ( userJourneyData ) {
                                        let hiddenInput = $form[0].querySelector( 'input[name="_user_journey"]' );

                                        if ( !hiddenInput ) {
                                            hiddenInput = document.createElement( 'input' );

                                            hiddenInput.type = 'hidden';
                                            hiddenInput.name = '_user_journey';

                                            $form[0].appendChild( hiddenInput );
                                        }

                                        hiddenInput.value = userJourneyData;
                                    }
                                }
                            }

                            resolve();
                        } ) );

                        return promises;
                    }
                );

                JetPlugins.hooks.addFilter(
                    'jet.fb.submit.reload.promises',
                    'user_journey_promise',
                    function ( promises, $form ) {
                        promises.push( new Promise( ( resolve, reject ) => {
                            const formData        = new FormData( $form[0] );
                            const userJourneyData = storage.getItem( storageKey );
                            const formElement     = $form instanceof jQuery ? $form[0] : $form;

                            if ( formElement ) {
                                if ( formElement.dataset.userJourney === 'true' ) {
                                    if ( userJourneyData ) {
                                        let hiddenInput = $form[0].querySelector( 'input[name="_user_journey"]' );

                                        if ( !hiddenInput ) {
                                            hiddenInput = document.createElement( 'input' );

                                            hiddenInput.type = 'hidden';
                                            hiddenInput.name = '_user_journey';

                                            $form[0].appendChild( hiddenInput );
                                        }

                                        hiddenInput.value = userJourneyData;
                                    }
                                }
                            }

                            resolve();
                        } ) );
                    }
                );

                jQuery( document ).on('jet-form-builder/ajax/on-success', function( event, response, form ) {
                    const formElement = form instanceof jQuery ? form[0] : form;

                    if ( formElement ) {
                        if ( 'true' === formElement.dataset.userJourney ) {
                            if ( 'success' === settings.clear_after_submit || 'always' === settings.clear_after_submit ) {
                                storage.removeItem( storageKey );
                            }
                        }
                    } else {
                        console.error('Form element is not defined or not a valid DOM element.');
                    }
                } );

                jQuery( document ).on('jet-form-builder/ajax/on-fail', function( event, jqXHR, textStatus, errorThrown, form ) {
                    const formElement = form instanceof jQuery ? form[0] : form;

                    if ( formElement ) {
                        if ( 'true' === formElement.dataset.userJourney ) {
                            if ( 'always' === settings.clear_after_submit ) {
                                storage.removeItem( storageKey );
                            }
                        }
                    } else {
                        console.error('Form element is not defined or not a valid DOM element.');
                    }
                } );
            } );

        } )();
        </script>
        <?php
    }

    /**
     * Saves the user journey to the database after form submission.
     *
     * @param int   $record_id      The ID of the form record.
     * @param array $action_request The action request data.
     */
    public function save_user_journey( $record_id, $action_request ) {
        try {
            ( new User_Journey_Model() )->create();
        } catch ( Sql_Exception $e ) {
            if ( defined('WP_DEBUG') && WP_DEBUG ) {
                error_log( $e->getMessage() );
            }
        }

        if ( !$record_id ) {
            return;
        }

        $user_journey = isset( $_POST['_user_journey'] ) ? sanitize_text_field( $_POST['_user_journey'] ) : null;

        if ( !$user_journey ) {
            return;
        }

        $journey_data = json_decode( wp_unslash( $user_journey ), true );

        if ( ! is_array( $journey_data ) ) {
            return;
        }

        foreach ( $journey_data as $step => $item ) {
            $journey_results[] = array(
                'record_id'     => $record_id,
                'journey_step'  => $step,
                'journey_url'   => sanitize_text_field( $item['url'] ),
                'journey_query' => sanitize_text_field( $item['query'] ?? '' ),
                'timestamp'     => $item['timestamp'],
            );
        }

        ( new User_Journey_Model() )->insert_many( $journey_results );
    }

    /**
     * Adds attributes to the form for user journey tracking.
     *
     * @param array $form_attrs   The form attributes.
     * @param mixed $form_handler The form handler object.
     *
     * @return array The modified form attributes.
     */
    public function add_form_attributes( $form_attrs, $form_handler) {
        $form_id = isset( $form_handler->form_id ) ? $form_handler->form_id : 0;

        $this->form_id = $form_id;

        if ( !$form_id ) {
            return $form_attrs;
        }

        $actions = \Jet_Form_Builder\Plugin::instance()->post_type->get_actions( $form_id );
        $save_journey = false;

        if ( ! empty( $actions ) ) {
            foreach ( $actions as $action ) {
                if ( isset( $action['type'] ) && $action['type'] === 'save_record' &&
                    isset( $action['settings']['save_record']['save_user_journey'] ) &&
                    filter_var( $action['settings']['save_record']['save_user_journey'], FILTER_VALIDATE_BOOLEAN ) ) {
                    $save_journey = true;
                    break;
                }
            }
        }

        $form_attrs = $form_handler->add_attribute( 'data-user-journey', $save_journey ? 'true' : 'false' );

        return $form_attrs;
    }

    /**
     * Returns the REST controller for the user journey.
     *
     * @return User_Journey_Rest_Controller The REST controller instance.
     */
    public function get_rest(): User_Journey_Rest_Controller {
        return $this->rest;
    }

    /**
     * Returns the form ID.
     *
     * @return int The form ID.
     */
    public function get_form_id(): int {
        return $this->form_id;
    }
}