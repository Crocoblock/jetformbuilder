<?php


namespace JFB_Compatibility\Jet_Engine\Preset_Sources;

use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Preset_Exception;
use Jet_Form_Builder\Presets\Sources\Base_Source;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

class Preset_Source_Options_Page extends Base_Source {

	private $page = '';

	public function get_id() {
		return 'option_page';
	}

	/**
	 * @return object
	 * @throws Preset_Exception
	 */
	public function query_source() {
		if ( empty( $this->page ) ) {
			throw new Preset_Exception( 'Empty page' );
		}

		$item = jet_engine()->options_pages->registered_pages[ $this->page ] ?? false;

		if ( ! $item ) {
			throw new Preset_Exception(
				sprintf(
					'Undefined option page: %s',
					esc_html( $this->page )
				)
			);
		}

		return $item;
	}

	/**
	 * @return string
	 * @throws Preset_Exception
	 */
	protected function get_prop() {
		$prop = explode( '::', parent::get_prop() );

		$this->page = $prop[0] ?? '';
		$slug       = $prop[1] ?? '';

		if ( empty( $this->page ) || empty( $slug ) ) {
			throw new Preset_Exception( 'Undefined option' );
		}

		return $slug;
	}

	/**
	 * @param string $prop
	 *
	 * @return string
	 *
	 * @throws Preset_Exception
	 * @see https://gist.github.com/MjHead/49ebe7ecc20bff9aaf8516417ed27c38
	 */
	public function default_prop( string $prop ) {
		if ( ! is_a( $this->src(), '\Jet_Engine_Options_Page_Factory' ) ) {
			throw new Preset_Exception( 'Source is not instance of ' . \Jet_Engine_Options_Page_Factory::class );
		}

		return $this->src()->get( $prop );
	}

	protected function before_query_extra_field( $field ) {
		$this->prop = $field;
	}

	/**
	 * Reading Options Page values requires the same capability as writing
	 * them, otherwise presets could leak site-wide settings (API keys,
	 * private options) to any visitor able to reach a form using this
	 * source.
	 *
	 * The capability is the one the Options Page itself declares, not a
	 * hardcoded `manage_options`: JetEngine lets the page author pick it
	 * (see `$page['capability']`, defaulting to `manage_options`), and a
	 * page restricted to, say, `edit_shop_orders` should be readable by
	 * exactly those users - no more, no less.
	 *
	 * NOTE on the "Restrict access" toggle: this source deliberately does
	 * NOT block the opt-out (there is no allows_restriction_bypass()
	 * override here). Blocking it broke every existing form that pre-fills
	 * a public value - a region list, a company phone, an offer text -
	 * from an Options Page: the toggle promised "Always set default value
	 * from preset" and silently returned nothing. Those forms are
	 * configured in the editor, which requires `edit_post` on the form, so
	 * the opt-out is an admin decision on admin-authored config - the exact
	 * same trust model already applied to Post/User/Term sources, where a
	 * disabled toggle exposes a private post.
	 *
	 * That does not reopen issues-tracker #20359: the reported attack sends
	 * preset JSON as a *field value*, which reaches this source through
	 * Dynamic_Preset::parse_json() - an untrusted origin that never carries
	 * `_trusts_restriction_flag`, so `restricted` is ignored there and this
	 * capability check always runs. See Base_Source::has_permission().
	 *
	 * The `jet-form-builder/preset/options-page/can-read` filter below
	 * stays available for sites that want to open a specific field without
	 * touching the toggle. It receives the page slug and field name so it
	 * CAN be scoped to a single field, and the default is `false` (closed).
	 * It is a normal WordPress filter, though - a callback returning an
	 * unconditional `true` does open every Options Page field to every
	 * visitor. That is a deliberate escape hatch for the site owner, not a
	 * guardrail against them; callbacks should always check `$page`/`$prop`.
	 *
	 * @return bool
	 * @throws Preset_Exception
	 */
	protected function can_get_preset() {
		if ( ! parent::can_get_preset() ) {
			return false;
		}

		if ( current_user_can( $this->get_page_capability() ) ) {
			return true;
		}

		/**
		 * Allow a specific Options Page field to be read via a preset
		 * without the page's capability, for fields the site owner has
		 * confirmed are not sensitive (e.g. a public list used only to
		 * pre-fill a form field). Defaults to false - opt-in only.
		 *
		 * SCOPE: permission is evaluated once, against the field named in
		 * the preset, before any value is read. Blocks that expand one
		 * preset prop into several related options - JetEngine's Map Field
		 * reads `<prop>`, `<md5(prop)>_lat` and `<md5(prop)>_lng`, see
		 * Map_Field::get_extra_fields() - are covered by that single
		 * decision. Allowing `$prop` therefore allows the whole group it
		 * expands into, not just the literal option name passed here.
		 *
		 * @param bool   $allowed Whether to allow the read. Default false.
		 * @param string $page    Options page slug.
		 * @param string $prop    Option field name within that page.
		 */
		return (bool) apply_filters(
			'jet-form-builder/preset/options-page/can-read',
			false,
			$this->page,
			$this->prop
		);
	}

	/**
	 * Capability declared by the Options Page being read.
	 *
	 * Falls back to `manage_options` - JetEngine's own default - whenever
	 * the page can't be resolved or declares nothing, so an unknown page is
	 * never *less* protected than a known one.
	 *
	 * @return string
	 */
	protected function get_page_capability(): string {
		$default = 'manage_options';

		if ( ! function_exists( 'jet_engine' ) || ! jet_engine()->options_pages ) {
			return $default;
		}

		$item = jet_engine()->options_pages->registered_pages[ $this->page ] ?? false;

		if ( ! $item || empty( $item->page['capability'] ) ) {
			return $default;
		}

		return $item->page['capability'];
	}

	public function after_register() {
		add_filter( 'jet-form-builder/editor/preset-config', array( $this, 'manage_config' ) );
	}

	public function manage_config( $config ) {
		$config['global_fields'][0]['options'][] = array(
			'value' => $this->get_id(),
			'label' => __( 'Option Page', 'jet-form-builder' ),
		);

		$config['map_fields'][] = array(
			'name'             => 'prop',
			'label'            => __( 'Option Value', 'jet-form-builder' ),
			'type'             => 'grouped_select',
			'options'          => Tools::with_placeholder(
				$this->get_options_fields_for_select()
			),
			'parent_condition' => array(
				'field' => 'from',
				'value' => $this->get_id(),
			),
		);

		return $config;
	}

	public function get_options_fields_for_select(): array {
		$result = array();

		foreach ( jet_engine()->options_pages->options_list as $slug => $data ) {
			$blocks_group = array();

			foreach ( $data['options'] as $name => $field_data ) {
				$black_list = array( 'html', 'tab', 'accordion', 'endpoint' );

				if ( ! in_array( $field_data['type'], $black_list, true ) ) {
					$group[ $name ] = $field_data['title'];

					$blocks_group[] = array(
						'value' => $name,
						'label' => $field_data['title'],
					);
				}
			}
			if ( ! empty( $blocks_group ) ) {
				$result[] = array(
					'label'  => $data['label'],
					'values' => $blocks_group,
				);
			}
		}

		return $result;
	}

}
