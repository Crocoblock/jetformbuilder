<?php


namespace Jet_Form_Builder\Presets;

use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Plain_Default_Exception;
use Jet_Form_Builder\Exceptions\Preset_Exception;
use Jet_Form_Builder\Presets\Sources;
use Jet_Form_Builder\Presets\Types\Base_Preset;
use Jet_Form_Builder\Presets\Types\Dynamic_Preset;
use Jet_Form_Builder\Presets\Types\General_Preset;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @method static Preset_Manager instance()
 *
 * Class Preset_Manager
 * @package Jet_Form_Builder\Presets
 */
class Preset_Manager {

	use Instance_Trait;

	protected $data     = null;
	protected $source   = null;
	protected $defaults = array(
		'enabled'    => false,
		'from'       => 'post',
		'post_from'  => 'current_post',
		'user_from'  => 'current_user',
		'query_var'  => '_post_id',
		'term_from'  => 'current_term',
		'fields_map' => array(),
	);

	// phpcs:disable PSR2.Classes.PropertyDeclaration.Underscore
	private $_preset_types = array();
	private $_source_types;

	// phpcs:enable PSR2.Classes.PropertyDeclaration.Underscore


	protected function __construct() {
		$this->register_preset_types();
		$this->register_source_types();

		do_action( 'jet-form-builder/after-init/preset-manager' );
	}

	public function set_form_id( $form_id ): Preset_Manager {
		if ( ! $form_id ) {
			return $this;
		}

		// General_Preset is not unique (Preset_Manager::general() always
		// returns the same shared instance), and Base_Preset::set_init_data()
		// merges into any existing $data rather than replacing it. Reset the
		// instance's $data before loading the current form's preset config,
		// otherwise a page rendering multiple forms could leak one form's
		// `restricted` flag (or other preset config) into another form's
		// permission evaluation via array_merge() carrying over keys the
		// current form's own config doesn't set - see issues-tracker #20359.
		//
		// trust_restriction_flag( true ) is set unconditionally here, not
		// saved/restored like the equivalent call in get_field_value(): this
		// form's config is always admin-authored (post meta), so General
		// Preset's own default already resolves to trusted
		// (trusts_restriction_flag_by_default()). The explicit call exists
		// only to document that intent at the call site, not to override a
		// caller-supplied value - unlike get_field_value(), nothing calls
		// set_form_id() expecting an untrusted evaluation afterwards.
		$this->general()
			->trust_restriction_flag( true )
			->reset_init_data( $this->general()->preset_source( $form_id ) );

		try {
			$this->general()->get_source();
		} catch ( Preset_Exception $exception ) {
			// do nothing
		}

		return $this;
	}

	/**
	 * @return Base_Preset[]
	 */
	protected function preset_types(): array {
		return $this->_preset_types;
	}

	/**
	 * @param $slug
	 *
	 * @return Base_Preset|void
	 */
	public function get_preset_type_raw( $slug ): Base_Preset {
		if ( isset( $this->_preset_types[ $slug ] ) ) {
			return $this->_preset_types[ $slug ];
		}

		_doing_it_wrong(
			esc_html( static::class . '::' . __METHOD__ ),
			'Undefined preset type',
			'1.4.2'
		);
	}

	public function get_preset_type( $slug ): Base_Preset {
		$type = $this->get_preset_type_raw( $slug );

		return $type->is_unique() ? clone $type : $type;
	}

	/**
	 * @return Dynamic_Preset|Base_Preset
	 */
	public function dynamic() {
		return $this->get_preset_type( Dynamic_Preset::SLUG );
	}

	/**
	 * @return General_Preset|Base_Preset
	 */
	public function general() {
		return $this->get_preset_type( General_Preset::SLUG );
	}

	private function register_source_types() {
		/** @var Sources\Base_Source[] $types */

		$types = apply_filters(
			'jet-form-builder/preset/source-types',
			array(
				new Sources\Preset_Source_Post(),
				new Sources\Preset_Source_User(),
				new Sources\Preset_Source_Query_Var(),
				new Sources\Preset_Source_Term(),
			)
		);

		foreach ( $types as $type ) {
			$this->register_source_type( $type );
		}
	}

	public function register_source_type( Sources\Base_Source $source ) {
		if ( ! $source->condition() ) {
			return;
		}
		$this->_source_types[ $source->get_id() ] = $source;

		$source->after_register();
	}

	private function register_preset_types() {
		$types = array(
			new Dynamic_Preset(),
			new General_Preset(),
		);

		foreach ( $types as $type ) {
			$this->register_preset_type( $type );
		}
	}

	/**
	 * @param $args
	 *
	 * @return Base_Preset
	 * @throws Plain_Default_Exception|Preset_Exception
	 */
	protected function get_preset_type_manager( $args ) {
		foreach ( $this->preset_types() as $type ) {
			$preset = $type->is_unique() ? clone $type : $type;

			if ( $preset->is_active_preset( $args ) ) {
				return $preset;
			}
		}

		throw new Preset_Exception( 'Preset manager is not installed.' );
	}


	protected function register_preset_type( Base_Preset $type ) {
		$this->_preset_types[ $type->get_slug() ] = $type;
	}

	/**
	 * Returns field value
	 *
	 * $args here are a form field block's attributes, which live in the
	 * form's own post content/meta and require `edit_post` on the form to
	 * write. That makes this a trusted origin: a `restricted: false` set by
	 * the form author through the editor's "Restrict access" toggle is
	 * honoured, exactly as that toggle's help text promises.
	 *
	 * Untrusted entry points - Rich_Content parsing a submitted field value
	 * via jet_fb_parse_dynamic() - deliberately do NOT declare trust, so a
	 * `restricted` flag smuggled through a submitted value is ignored and the
	 * permission check always runs. Admin-authored call sites use
	 * jet_fb_parse_dynamic_trusted() instead. See issues-tracker #20359.
	 *
	 * @param array $args
	 *
	 * @return [type] [description]
	 */
	public function get_field_value( $args = array() ) {
		if ( empty( $args['name'] ) ) {
			return '';
		}

		try {
			$manager = $this->get_preset_type_manager( $args );
		} catch ( Plain_Default_Exception $exception ) {
			return $exception->getMessage();
		} catch ( Preset_Exception $exception ) {
			return '';
		}

		/**
		 * Save & restore: get_preset_type_manager() only clones unique preset
		 * types, so for a non-unique one (General_Preset) $manager IS the
		 * process-wide shared instance. Leaving `true` on it would make the
		 * trust sticky for every later caller that reaches the same instance
		 * without an intervening reset - see issues-tracker #20359.
		 */
		$restore_trust = $manager->trusts_restriction_flag();

		$manager->trust_restriction_flag( true );

		try {
			return $manager->get_source( $args )->result();
		} catch ( Preset_Exception $exception ) {
			return '';
		} finally {
			$manager->trust_restriction_flag( $restore_trust );
		}
	}

	/**
	 * @param $type
	 *
	 * @return Sources\Base_Source
	 * @throws Preset_Exception
	 */
	public function get_source_by_type( $type ): Sources\Base_Source {
		if ( ! isset( $this->_source_types[ $type ] ) ) {
			throw new Preset_Exception(
				esc_html( "Undefined source type: {$type}" )
			);
		}

		return clone $this->_source_types[ $type ];
	}

	public function prepare_result( $field_type, $value ) {
		// Prepare value for date field
		switch ( $field_type ) {
			case 'date-field':
				if ( ! Tools::is_valid_timestamp( $value ) ) {
					return $value;
				}

				return date_i18n( 'Y-m-d', $value );
			case 'datetime-field':
				if ( ! Tools::is_valid_timestamp( $value ) ) {
					return $value;
				}

				return date_i18n( 'Y-m-d\TH:i', $value );
			default:
				return apply_filters( 'jet-form-builder/preset/parse-value', $value, $this );
		}
	}

}
