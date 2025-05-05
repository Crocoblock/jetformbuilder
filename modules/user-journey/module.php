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
                'jet-form-builder/form-handler/before-send',
                array( $this, 'add_query_args' ),
                10
            );

            add_filter(
                'jet-form-builder/actions/redirect-to-page/redirect-args',
                array( $this, 'add_redirect_to_page_action_query_args' ),
                10,
                2
            );

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

            add_action( 'wp_head',
                array( $this, 'clear_journey_data_on_reload' ),
                -9999,
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

            remove_action(
                'wp_head',
                array( $this, 'clear_journey_data_on_reload' ),
            );

            remove_filter(
                'jet-form-builder/actions/redirect-to-page/redirect-args',
                array( $this, 'add_redirect_to_page_action_query_args' ),
            );

            remove_action(
                'jet-form-builder/form-handler/before-send',
                array( $this, 'add_query_args' ),
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

    public function add_redirect_to_page_action_query_args( $args, $handler ) {

        if ( ! \JFB_Modules\Post_Type\Module::class ) {
            return $args;
        }

        $post_type_module = \Jet_Form_Builder\Plugin::instance()->module(\JFB_Modules\Post_Type\Module::class);
        $journey_form_ids = $this->get_form_ids_with_save_user_journey();

        $forms = get_posts( array(
            'post_type'      => \JFB_Modules\Post_Type\Module::SLUG,
            'posts_per_page' => -1,
        ) );

        foreach ( $forms as $form ) {
            $actions = $post_type_module->get_actions( $form->ID );
            foreach ( $actions as $action ) {
                if ( ( $action['type'] ?? '' ) === 'redirect_to_page' ) {
                    if ( in_array( $form->ID, $journey_form_ids ) && $action['id'] === $handler->_id ) {
                        $action_args = $action['settings']['redirect_to_page']['redirect_args'] ?? false;

                        if ( $action_args ) {
                            $args['jfb_clear_journey'] = $form->ID;
                        }
                    }
                    break;
                }
            }
        }

        return $args;
    }

    public function get_form_ids_with_save_user_journey() {
        $post_type_module = \Jet_Form_Builder\Plugin::instance()->module( \JFB_Modules\Post_Type\Module::class );
        $matched_form_ids = [];

        $forms = get_posts( array(
            'post_type'      => \JFB_Modules\Post_Type\Module::SLUG,
            'posts_per_page' => -1,
        ) );

        foreach ( $forms as $form ) {
            $actions = $post_type_module->get_actions( $form->ID );

            foreach ( $actions as $action ) {
                if ( ( $action['type'] ?? '' ) === 'save_record' ) {
                    $save_user_journey = $action['settings']['save_record']['save_user_journey'] ?? false;

                    if ( $save_user_journey && true === $save_user_journey ) {
                        $matched_form_ids[] = $form->ID;
                    }
                }
            }
        }

        return $matched_form_ids;
    }

    public function add_query_args( $instance ) {
        $form_id = $instance->form_id;

        $instance->add_response_data( array( 'jfb_clear_journey' => $form_id ) );
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
     * Returns the journey tracking settings.
     *
     * @return array The journey settings.
     */
    public function get_journey_settings() {
        $options = Tab_Handler_Manager::get_options('user-journey-tab');
        return array(
            'enabled'                         => !empty($options['enable_user_journey']),
            'storage_type'                    => $options['storage_type'] ?? 'local',
            'clear_after_submit'              => $options['clear_after_submit'] ?? 'success',
            'form_ids_with_save_user_journey' => $this->get_form_ids_with_save_user_journey(),
        );
    }

    public function clear_journey_data_on_reload() {
        $jet_fb_user_journey_settings = $this->get_journey_settings();
    ?>
        <script>
            ( function() {
                const settings    = <?php echo wp_json_encode( $jet_fb_user_journey_settings ); ?>;
                const storageKey  = 'jet_fb_user_journey';
                const storage     = settings.storage_type === 'local' ? localStorage : sessionStorage;

                var params = new URLSearchParams( window.location.search );

                if ( params.has('jfb_clear_journey') ) {
                    var status = params.get('status') ?? 'unknown',
                        formId = params.get('jfb_clear_journey');

                    params.delete('jfb_clear_journey');

                    var newSearch = params.toString();

                    var newUrl = window.location.origin
                                + window.location.pathname
                                + ( newSearch ? '?' + newSearch : '' )
                                + window.location.hash;

                    window.history.replaceState( null, document.title, newUrl );

                    if ( ( ( 'success' === settings.clear_after_submit || 'always' === settings.clear_after_submit ) && 'success' === status
                ) || 'always' === settings.clear_after_submit || 'unknown' === status )
                    {
                        const raw  = storage.getItem( storageKey );

                        if ( ! raw ) {
                            return;
                        }

                        let data = JSON.parse( raw );

                        if ( ! Array.isArray( data ) && data.hasOwnProperty( formId ) ) {
                            delete data[ formId ];
                        }

                        storage.setItem( storageKey, JSON.stringify( data ) );
                    }
                }
            } )();
        </script>
    <?php
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
            const formIds     = new Set( ( settings.form_ids_with_save_user_journey || [] ).map( Number ) );

            let journeys;

            try {
                journeys = JSON.parse( storage.getItem( storageKey ) ) || {};
            } catch {
                journeys = {};
            }

            Object.keys( journeys ).forEach( id => {
                if ( ! formIds.has( +id ) ) delete journeys[ id ];
            } );

            const pageEntry = { url: currentUrl, query: queryString, timestamp: Date.now() };

            function addJourney( journeys, formIds, to_form_id = null ) {

                if ( null !== to_form_id ) {
                    journeys[ to_form_id ] = [];
                    journeys[ to_form_id ].push( pageEntry );
                } else {
                    formIds.forEach( formId => {
                        if ( ! journeys[ formId ] ) {
                            journeys[ formId ] = [];
                        }

                        const journey   = journeys[ formId ];
                        const lastEntry = 0 < journey.length ? journey[ journey.length - 1 ] : false;

                        if ( ! lastEntry ) {
                            journey.push( pageEntry );
                        } else if ( currentUrl !== lastEntry.url || queryString !== lastEntry.query ) {
                            journey.push( pageEntry );
                        }
                    } );
                }

                storage.setItem( storageKey, JSON.stringify( journeys ) );
            }

            function clearJourney( form, on_success = true ) {
                const formElement = form instanceof jQuery ? form[0] : form;
                const formId      = formElement.dataset.formId;

                let can_clear = false;

                if ( on_success ) {
                    if ( 'success' === settings.clear_after_submit || 'always' === settings.clear_after_submit ) {
                        can_clear = true;
                    }
                } else {
                    if ( 'always' === settings.clear_after_submit ) {
                        can_clear = true;
                    }
                }

                if ( formElement ) {
                    if ( formIds.has( +formId ) ) {

                        if ( can_clear ) {
                            const raw  = storage.getItem( storageKey );

                            if ( ! raw ) {
                                return;
                            }

                            let data = JSON.parse( raw );

                            if ( ! Array.isArray( data ) && data.hasOwnProperty( formId ) ) {
                                delete data[ formId ];
                            }

                            storage.setItem( storageKey, JSON.stringify( data ) );

                            const savedJourneys = storage.getItem( storageKey );

                            if ( savedJourneys ) {
                                journeys = JSON.parse( savedJourneys );
                            }

                            addJourney( journeys, formIds, formId );

                            if ( window?.JetFormBuilderSettings?.devmode ) {
                                /* eslint-disable no-console */
                                console.group( 'User Journeys' );
                                console.info( journeys );
                                console.groupEnd();
                                /* eslint-enable no-console */
                            }
                        }
                    }
                } else {
                    console.error('Form element is not defined or not a valid DOM element.');
                }
            }

            addJourney( journeys, formIds );

            jQuery( document ).ready( function() {
                if ( window?.JetFormBuilderSettings?.devmode ) {
                    /* eslint-disable no-console */
                    console.group( 'User Journeys' );
                    console.info( journeys );
                    console.groupEnd();
                    /* eslint-enable no-console */
                }

                JetPlugins.hooks.addFilter(
                    'jet.fb.submit.ajax.promises',
                    'user_journey_promise',
                    function ( promises, $form ) {
                        promises.push( new Promise( ( resolve, reject ) => {
                            const formElement           = $form instanceof jQuery ? $form[0] : $form;
                            const formId                = formElement.dataset.formId;
                            const userJourneyData       = storage.getItem( storageKey );
                            const userJourneyDataParsed = JSON.parse(userJourneyData || '{}');
                            const formSpecificData      = userJourneyDataParsed[formId] || '';

                            if ( formElement ) {
                                if ( formIds.has( +formId ) ) {
                                    if ( userJourneyData ) {
                                        let hiddenInput = $form[0].querySelector( 'input[name="_user_journey"]' );

                                        if ( !hiddenInput ) {
                                            hiddenInput = document.createElement( 'input' );

                                            hiddenInput.type = 'hidden';
                                            hiddenInput.name = '_user_journey';

                                            $form[0].appendChild( hiddenInput );
                                        }
                                        hiddenInput.value = JSON.stringify( formSpecificData );
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
                    function( $promises, $context ) {
                        $promises.push(
                            new Promise( ( resolve ) => {
                                const rootNode              = $context.target;
                                const userJourneyData       = storage.getItem( storageKey );
                                const formId                = rootNode.dataset.formId;
                                const userJourneyDataParsed = JSON.parse(userJourneyData || '{}');
                                const formSpecificData      = userJourneyDataParsed[formId] || '';

                                if ( formIds.has( +formId ) && userJourneyData ) {
                                    let hiddenInput = rootNode.querySelector( 'input[name="_user_journey"]' );

                                    if ( ! hiddenInput ) {
                                        hiddenInput = document.createElement( 'input' );

                                        hiddenInput.type = 'hidden';
                                        hiddenInput.name = '_user_journey';

                                        rootNode.appendChild( hiddenInput );
                                    }
                                    hiddenInput.value = JSON.stringify( formSpecificData );
                                }
                                resolve();
                            } )
                        );

                        return $promises;
                    }
                );

                jQuery( document ).on('jet-form-builder/ajax/on-success', function( event, response, form ) {
                    clearJourney( form );
                } );

                jQuery( document ).on('jet-form-builder/ajax/on-success/not-success-status', function( event, response, form ) {
                    clearJourney( form, false );
                } );

                jQuery( document ).on('jet-form-builder/ajax/on-fail', function( event, jqXHR, textStatus, errorThrown, form ) {
                    clearJourney( form, false );
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
     * Returns the REST controller for the user journey.
     *
     * @return User_Journey_Rest_Controller The REST controller instance.
     */
    public function get_rest(): User_Journey_Rest_Controller {
        return $this->rest;
    }
}