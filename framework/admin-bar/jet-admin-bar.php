<?php
/**
 * Admin Bar module
 *
 * Version: 1.0.2
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( ! class_exists( 'Jet_Admin_Bar' ) ) {

	/**
	 * Admin Bar management module.
	 */
	class Jet_Admin_Bar {

		/**
		 * A reference to an instance of this class.
		 *
		 * @access private
		 * @var    object
		 */
		private static $instance = null;

		/**
		 * A reference to an instance of this class.
		 *
		 * @access private
		 * @var    object
		 */
		public $args = array();

		/**
		 * Module version.
		 *
		 * @var string
		 */
		protected $version = '1.0.2';

		private $items = array();

		private $default_parent_item = 'jet_plugins';

		/**
		 * Constructor.
		 *
		 * @param  array $args
		 * @access public
		 * @return void
		 */
		public function __construct( $args = array() ) {

			if ( is_admin() || ! is_admin_bar_showing() ) {
				return;
			}

			if ( ! current_user_can( 'manage_options' ) ) {
				return;
			}

			remove_action( 'wp_body_open', 'wp_admin_bar_render', 0 );

			add_action( 'init',           array( $this, 'register_default_items' ) );
			add_action( 'admin_bar_menu', array( $this, 'register_items' ), 99 );

			add_action( 'wp_enqueue_scripts', array( $this, 'add_inline_style' ) );
		}

		/**
		 * Register default items.
		 */
		public function register_default_items() {
			$this->register_parent_item(
				$this->default_parent_item,
				array(
					'title' => 'Edit with JetPlugins',
				)
			);
		}

		/**
		 * Register items.
		 *
		 * @param WP_Admin_Bar $wp_admin_bar
		 */
		public function register_items( $wp_admin_bar ) {

			foreach ( $this->items as $parent_id => $parent_args ) {

				if ( empty( $parent_args['children'] ) ) {
					continue;
				}

				$_parent_args = $parent_args;
				$_parent_args['id'] = $parent_id;

				unset( $_parent_args['children'] );

				$wp_admin_bar->add_menu( $_parent_args );

				// Register children items.
				$parent_args['children'] = $this->sort_children_items( $parent_args['children'] );

				foreach ( $parent_args['children'] as $child_id => $child_args ) {
					$child_args['id'] = $child_id;
					$child_args = $this->prepare_child_item_args( $child_args );
					$wp_admin_bar->add_menu( $child_args );
				}
			}

		}

		/**
		 * Sorting children items.
		 *
		 * @param  array $children
		 * @return array
		 */
		public function sort_children_items( $children ) {
			$children = wp_list_sort( $children, array( 'priority' => 'ASC', 'sub_title' => 'ASC' ), null, true );
			return $children;
		}

		/**
		 * Register parent item.
		 *
		 * @param string $id
		 * @param array  $args
		 */
		public function register_parent_item( $id = null, $args = array() ) {
			$args['id'] = $id;
			$this->items[ $id ] = $args;
		}

		/**
		 * Register child item.
		 *
		 * @param string $id
		 * @param array  $args
		 */
		public function register_item( $id = null, $args = array() ) {

			$default_args = array(
				'title'        => '',
				'sub_title'    => '',
				'href'         => '',
				'parent'       => $this->default_parent_item,

				// Additional arguments
				'class'        => '',
				'target_blank' => true,
				'priority'     => 10,
			);

			$args = array_merge( $default_args, $args );

			if ( $this->has_item( $id, $args ) ) {
				return;
			}

			$this->items[ $args['parent'] ]['children'][ $id ] = $args;
		}

		/**
		 * Prepare child item arguments.
		 *
		 * @param  array $args
		 * @return array
		 */
		public function prepare_child_item_args( $args ) {

			if ( ! empty( $args['sub_title'] ) ) {
				$args['title'] = sprintf(
					'<span class="jet-ab-title">%1$s</span><span class="jet-ab-sub-title">%2$s</span>',
					$args['title'],
					$args['sub_title']
				);
			}

			$classes = array( 'jet-ab-item' );

			if ( ! empty( $args['class'] ) ) {
				$classes[] = $args['class'];
			}

			$args['meta']['class'] = join( ' ', $classes );

			if ( $args['target_blank'] ) {
				$args['meta']['target'] = '_blank';
			}

			unset( $args['sub_title'] );
			unset( $args['class'] );
			unset( $args['target_blank'] );
			unset( $args['priority'] );

			return $args;
		}

		/**
		 * Register child item by post ID.
		 *
		 * @param int   $post_id
		 * @param array $args
		 */
		public function register_post_item( $post_id = null, $args = array() ) {

			if ( empty( $post_id ) ) {
				return;
			}

			$id = 'edit_post_' . $post_id;

			if ( $this->has_item( $id, $args ) ) {
				return;
			}

			$post = get_post( $post_id );

			if ( empty( $post ) ) {
				return;
			}

			$default_args = array(
				'title'     => $post->post_title,
				'sub_title' => $this->get_post_type_label( $post->post_type ),
				'href'      => $this->get_edit_url( $post_id ),
			);

			$args = array_merge( $default_args, $args );

			$this->register_item( $id, $args );
		}

		public function has_item( $id, $args ) {
			$args['parent'] = ! empty( $args['parent'] ) ? $args['parent'] : $this->default_parent_item;
			return isset( $this->items[ $args['parent'] ]['children'][ $id ] );
		}

		public function get_post_type_label( $post_type ) {
			$post_type_obj = get_post_type_object( $post_type );
			return $post_type_obj->labels->singular_name;
		}

		public function get_edit_url( $id ) {
			$is_build_with_elementor = ! ! get_post_meta( $id, '_elementor_edit_mode', true );

			if ( $is_build_with_elementor && class_exists( 'Elementor\Plugin' ) ) {
				$edit_url = Elementor\Plugin::instance()->documents->get( $id )->get_edit_url();
			} else {
				$edit_url = get_edit_post_link( $id, '' );
			}

			return $edit_url;
		}

		public function add_inline_style() {
			$css = '
				#wpadminbar #wp-admin-bar-jet_plugins > .ab-item::before {
					content: "";
					width: 20px;
					height: 18px;
					top: 3px;
					background-size: contain;
					background-repeat: no-repeat;
					background-position: center center;
					background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2E3YWFhZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwIDFINEMyLjM0MzE1IDEgMSAyLjM0MzE1IDEgNFYyMEMxIDIxLjY1NjkgMi4zNDMxNSAyMyA0IDIzSDIwQzIxLjY1NjkgMjMgMjMgMjEuNjU2OSAyMyAyMFY0QzIzIDIuMzQzMTUgMjEuNjU2OSAxIDIwIDFaTTQgMEMxLjc5MDg2IDAgMCAxLjc5MDg2IDAgNFYyMEMwIDIyLjIwOTEgMS43OTA4NiAyNCA0IDI0SDIwQzIyLjIwOTEgMjQgMjQgMjIuMjA5MSAyNCAyMFY0QzI0IDEuNzkwODYgMjIuMjA5MSAwIDIwIDBINFoiIGZpbGw9IiNhN2FhYWQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxLjYyOTMgNi4wMDA2NkMyMS45NDAyIDUuOTgxNDggMjIuMTE3NiA2LjM4NTc4IDIxLjkxMSA2LjY0Mjc3TDIwLjA3MjIgOC45MzAzNUMxOS44NTY5IDkuMTk4MjQgMTkuNDU1NiA5LjAyNjk4IDE5LjQ1OTggOC42NjlMMTkuNDcwOCA3Ljc0MDg0QzE5LjQ3MjIgNy42MTkyMyAxOS40MjE2IDcuNTAzOTggMTkuMzM0MyA3LjQyOTc1TDE4LjY2NzYgNi44NjMyMUMxOC40MTA1IDYuNjQ0NyAxOC41Mzc4IDYuMTkxMzQgMTguODYxOSA2LjE3MTM1TDIxLjYyOTMgNi4wMDA2NlpNNi45OTgzNSAxMi4wMDhDNi45OTgzNSAxNC4xOTkzIDUuMjA3MDYgMTUuOTc1MSAyLjk5OTY3IDE1Ljk3NTFDMi40NDY1NSAxNS45NzUxIDIgMTUuNTI5MyAyIDE0Ljk4MjdDMiAxNC40MzYxIDIuNDQ2NTUgMTMuOTkyOCAyLjk5OTY3IDEzLjk5MjhDNC4xMDMzNiAxMy45OTI4IDQuOTk5MDEgMTMuMTAzNiA0Ljk5OTAxIDEyLjAwOFY5LjAzMzIzQzQuOTk5MDEgOC40ODQxMyA1LjQ0NTU2IDguMDQwODIgNS45OTg2OCA4LjA0MDgyQzYuNTUxNzkgOC4wNDA4MiA2Ljk5ODM1IDguNDg0MTMgNi45OTgzNSA5LjAzMzIzVjEyLjAwOFpNMTcuNzc2NSAxMi4wMDhDMTcuNzc2NSAxMy4xMDM2IDE4LjY3MjEgMTMuOTkyOCAxOS43NzU4IDEzLjk5MjhDMjAuMzI5IDEzLjk5MjggMjAuNzc1NSAxNC40MzM2IDIwLjc3NTUgMTQuOTgyN0MyMC43NzU1IDE1LjUzMTggMjAuMzI5IDE1Ljk3NTEgMTkuNzc1OCAxNS45NzUxQzE3LjU2ODQgMTUuOTc1MSAxNS43NzcyIDE0LjE5OTMgMTUuNzc3MiAxMi4wMDhWOS4wMzMyM0MxNS43NzcyIDguNDg0MTMgMTYuMjIzNyA4LjA0MDgyIDE2Ljc3NjggOC4wNDA4MkMxNy4zMyA4LjA0MDgyIDE3Ljc3NjUgOC40ODY2NSAxNy43NzY1IDkuMDMzMjNWOS45MjIzN0gxOC41NzA3QzE5LjEyMzggOS45MjIzNyAxOS41NzI5IDEwLjM2ODIgMTkuNTcyOSAxMC45MTczQzE5LjU3MjkgMTEuNDY2NCAxOS4xMjM4IDExLjkxMjIgMTguNTcwNyAxMS45MTIySDE3Ljc3NjVWMTIuMDA4Wk0xNS4yMDM4IDEwLjYxNzZDMTUuMjA2MyAxMC42MTUxIDE1LjIwODggMTAuNjE1MSAxNS4yMDg4IDEwLjYxNTFDMTQuODk0MiA5Ljc5MzkzIDE0LjMwNTYgOS4wNzM1NSAxMy40ODM1IDguNjAwMDFDMTEuNTc1NSA3LjUwMTgxIDkuMTM5NzkgOC4xNTE2NiA4LjA0MTE3IDEwLjA1MDhDNi45NDAwMSAxMS45NDc1IDcuNTk0NjIgMTQuMzczMSA5LjUwMDA4IDE1LjQ2ODhDMTAuOTAzMiAxNi4yNzQ5IDEyLjU5MyAxNi4xMzM4IDEzLjgyNjEgMTUuMjQ3MkwxMy44MTg0IDE1LjIzNzFDMTQuMTAyNiAxNS4wNjMzIDE0LjI5MDQgMTQuNzUxIDE0LjI5MDQgMTQuMzk1OEMxNC4yOTA0IDEzLjg0OTIgMTMuODQzOCAxMy40MDU5IDEzLjI5MzIgMTMuNDA1OUMxMy4wMjY4IDEzLjQwNTkgMTIuNzgzMyAxMy41MDkyIDEyLjYwNTcgMTMuNjgwNUMxMi4wMDY5IDE0LjA4MSAxMS4yMTAyIDE0LjE0MzkgMTAuNTM3OCAxMy43NzYyTDE0LjU2NDQgMTEuOTE5OEMxNC43OTc4IDExLjg0OTMgMTUuMDA1OSAxMS42OTMxIDE1LjEzNTMgMTEuNDY2NEMxNS4yOTI2IDExLjE5NjkgMTUuMzA3OCAxMC44ODcxIDE1LjIwMzggMTAuNjE3NlpNMTIuNDg2NCAxMC4zMTUzQzEyLjYwNTcgMTAuMzgzMyAxMi43MTIyIDEwLjQ2MTQgMTIuODExMiAxMC41NDcxTDkuNDk3NTQgMTIuMDcwOUM5LjQ4OTkzIDExLjcyMDggOS41NzYyIDExLjM2NTcgOS43NjM5NSAxMS4wNDA3QzEwLjMxNDUgMTAuMDkzNyAxMS41MzI0IDkuNzY4NzQgMTIuNDg2NCAxMC4zMTUzWiIgZmlsbD0iI2E3YWFhZCIvPjwvc3ZnPg==")!important;
				}
				#wpadminbar #wp-admin-bar-jet_plugins > .ab-sub-wrapper {
					max-height: calc(100vh - 50px);
					overflow-y: auto;
				}
				#wpadminbar .jet-ab-item .ab-item {
					display: flex;
					justify-content: space-between;
					align-items: center;
					gap: 10px;
				}
				#wpadminbar .jet-ab-title {
					white-space: nowrap;
					text-overflow: ellipsis;
					overflow: hidden;
					width: 100%;
				}
				#wpadminbar .jet-ab-sub-title {
					padding: 4px 8px;
					font-size: 11px;
					line-height: 9px;
					background: #55595c;
					border-radius: 3px;
				}
			';

			wp_add_inline_style( 'admin-bar', $css );
		}

		/**
		 * Returns the instance.
		 *
		 * @param  array $args
		 * @access public
		 * @return object
		 */
		public static function get_instance( array $args = array() ) {
			// If the single instance hasn't been set, set it now.
			if ( null == self::$instance ) {
				self::$instance = new self( $args );
			}

			return self::$instance;
		}
	}
}
