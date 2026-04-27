<?php
namespace Crocoblock\Blocks_Style\Migrator;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

class UI {

	protected $page_slug = 'jet_sm_migration';
	protected $migrator_dir;

	public function __construct() {

		// Do nothing if Style Manager plugin is not active
		if ( ! class_exists( '\JET_SM\Gutenberg\Block_Manager' )
			|| ! is_admin()
		) {
			return;
		}

		$this->migrator_dir = plugin_dir_path( __FILE__ );

		// Add admin notice about migration
		add_action( 'admin_notices', [ $this, 'migration_notice' ] );
		// Add admin menu for migration
		add_action( 'admin_menu', [ $this, 'add_migration_page' ] );
		add_action( 'admin_init', [ $this, 'process_migration' ] );
		add_action( 'admin_init', [ $this, 'process_cleanup' ] );
		add_action( 'admin_init', [ $this, 'process_rollback' ] );
	}

	/**
	 * Process rollback to legacy JetStyleManager
	 */
	public function process_rollback() {

		if ( ! isset( $_GET['rollback'] ) || ! current_user_can( 'manage_options' ) ) {
			return;
		}

		if ( ! wp_verify_nonce( $_REQUEST['_wpnonce'], $this->page_slug ) ) {
			wp_send_json_error( esc_html__( 'The link is expired. Please reload the page and try again.', 'jet-engine' ) );
		}

		delete_option( 'jet_sm_migration_completed' );
	}

	/**
	 * Process cleanup of legacy data after migration
	 */
	public function process_cleanup() {

		if ( ! isset( $_GET['clean_up_migration'] ) || ! current_user_can( 'manage_options' ) ) {
			return;
		}

		if ( ! wp_verify_nonce( $_REQUEST['_wpnonce'], $this->page_slug ) ) {
			wp_send_json_error( esc_html__( 'The link is expired. Please reload the page and try again.', 'jet-engine' ) );
		}

		$migrated = get_option( 'jet_sm_migration_completed', false );

		if ( ! $migrated || 2 == (int) $migrated ) {
			wp_send_json_error( esc_html__( 'Migration process is not completed or already cleaned up.', 'jet-engine' ) );
		}

		$clear_meta_keys = [
			'_jet_sm_ready_style',
			'_jet_sm_style',
			'_jet_sm_controls_values',
			'_jet_sm_fonts_collection',
			'_jet_sm_fonts_links',
		];

		global $wpdb;

		foreach ( $clear_meta_keys as $meta_key ) {
			$wpdb->query( $wpdb->prepare(
				"DELETE FROM {$wpdb->postmeta} WHERE meta_key = %s",
				$meta_key
			) );
		}

		update_option( 'jet_sm_migration_completed', 2 );

		wp_send_json_success( [
			'message'   => esc_html__( 'Legacy data cleaned up successfully. You can now deactivate the JetStyleManager plugin to optimize your website performance.', 'jet-engine' ),
		] );
	}

	/**
	 * Process migration of the old JetStyleManager data to the new Style Manager module
	 */
	public function process_migration() {

		if ( ! isset( $_GET['run_migration'] ) || ! current_user_can( 'manage_options' ) ) {
			return;
		}

		if ( ! wp_verify_nonce( $_REQUEST['_wpnonce'], $this->page_slug ) ) {
			wp_send_json_error( esc_html__( 'The link is expired. Please reload the page and try again.', 'jet-engine' ) );
		}

		global $wpdb;
		$step = isset( $_REQUEST['step'] ) ? intval( $_REQUEST['step'] ) : 1;
		$limit = 20;
		$offset = ( $step - 1 ) * $limit;
		$items = $wpdb->get_results( "SELECT post_id, meta_value FROM {$wpdb->postmeta} WHERE meta_key = '_jet_sm_controls_values' LIMIT $limit OFFSET $offset" );

		if ( empty( $items ) ) {
			wp_send_json_error( esc_html__( 'No more posts to migrate.', 'jet-engine' ) );
		}

		$total    = $this->total_items_to_migrate();
		$migrated = $offset;

		if ( ! class_exists( '\Crocoblock\Blocks_Style\Migrator\Post_Handler' ) ) {
			require_once $this->migrator_dir . 'post-handler.php';
			require_once $this->migrator_dir . 'data-normalizer.php';
		}

		foreach ( $items as $item ) {
			$post_handler = new Post_Handler( $item->post_id, $item->meta_value );
			$res = $post_handler->migrate_data();

			if ( $res ) {
				$migrated++;
			}
		}

		if ( $total <= $offset + $limit ) {

			update_option( 'jet_sm_migration_completed', 1 );

			wp_send_json_success( [
				'message'   => sprintf(
					esc_html__( 'Migrated %d posts successfully. Migration completed.', 'jet-engine' ),
					$migrated,
				),
				'next_step' => 0,
			] );
		}

		wp_send_json_success( [
			'message' => sprintf(
				esc_html__( 'Migrated %d posts successfully.', 'jet-engine' ),
				$migrated,
			),
			'next_step' => $step + 1,
		] );
	}

	/**
	 * Add migration page to admin menu
	 */
	public function add_migration_page() {
		add_submenu_page(
			'',
			esc_html__( 'JetStyleManager Migration', 'jet-engine' ),
			esc_html__( 'Migration', 'jet-engine' ),
			'manage_options',
			$this->page_slug,
			[ $this, 'render_migration_page' ]
		);
	}

	/**
	 * Render migration page
	 */
	public function render_migration_page() {

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_die( esc_html__( 'You do not have sufficient permissions to access this page.', 'jet-engine' ) );
		}

		$migration_completed = get_option( 'jet_sm_migration_completed', false );
		$fonts_manager_url   = esc_url( admin_url( 'site-editor.php?p=/styles&section=/typography' ) );

		$fonts_manager_message  = '<p><b>' . esc_html__( 'Please note:', 'jet-engine' ) . '</b> ';
		$fonts_manager_message .= sprintf(
			esc_html__( ' The new Styles Manager uses fonts installed on your website. You can %1$smanage these fonts here%1$s.', 'jet-engine' ),
			'<a href="' . $fonts_manager_url . '" target="_blank">',
			'</a>'
		);
		$fonts_manager_message .= '</p>';

		if ( $migration_completed && 2 == (int) $migration_completed ) {
			echo '<div class="wrap">';
			echo '<h1>' . esc_html__( 'JetStyleManager Migration', 'jet-engine' ) . '</h1>';
			echo '<p>' . esc_html__( 'Migration process is already completed. You can now deactivate the JetStyleManager plugin to optimize your website performance.', 'jet-engine' ) . '</p>';

			echo $fonts_manager_message;

			echo '</div>';
			exit;
		}

		echo '<div class="wrap">';
		echo '<h1>' . esc_html__( 'JetStyleManager Migration', 'jet-engine' ) . '</h1>';
		echo '<p>' . esc_html__( 'This page allows you to migrate your styling settings to the new Style Manager module.', 'jet-engine' ) . '</p>';

		$completed_style = 'style="display: none;"';
		$run_style       = '';

		if ( $migration_completed && 1 == (int) $migration_completed ) {
			$completed_style = '';
			$run_style       = 'style="display: none;"';
		}

		echo '<div id="cleanup_section" ' . $completed_style . '>';

		echo '<p>' . esc_html__( 'Migration process is completed. Please check your content. If everything is ok, you can click the button below to remove the legacy data and then deactivate JetStyleManager plugin.', 'jet-engine' ) . '</p>';

		echo $fonts_manager_message;

		echo '<p><a href="' . $this->page_url( false, true ) . '" class="button button-primary" id="cleanup_button">' . esc_html__( 'Cleanup Legacy Data', 'jet-engine' ) . '</a></p>';

		echo '<p>' . esc_html__( 'If something went wrong click the button below to rollback to the legacy JetStyleManager.', 'jet-engine' ) . '</p>';

		echo '<p><a href="' . $this->page_url( false, false, true ) . '" class="button button-secondary" id="cleanup_button">' . esc_html__( 'Rollback to legacy JetStyleManager', 'jet-engine' ) . '</a></p>';

		echo '</div>';

		echo '<div id="run_section" ' . $run_style . '>';

		echo '<p>' . esc_html__( 'Click the button below to start the migration process. After migration, you can deactivate the JetStyleManager plugin to optimize your website performance.', 'jet-engine' ) . '</p>';

		$total_items = $this->total_items_to_migrate();

		if ( $total_items > 0 ) {
			echo '<p>' . sprintf(
				esc_html__( 'Total posts to migrate: %d', 'jet-engine' ),
				$total_items
			) . '</p>';

			echo '<p><a href="' . $this->page_url( true ) . '" class="button button-primary" id="run_migration">' . esc_html__( 'Start Migration', 'jet-engine' ) . '</a></p>';

			echo '<div id="migration_progress"></div>';
		} else {
			echo '<p><b>' . esc_html__( 'No posts to migrate. You can just disable an old JetStyleManager plugin and use the new functionality.', 'jet-engine' ) . '</b></p>';
		}

		echo '</div>';

		$this->inline_scripts();

		echo '</div>';
	}

	/**
	 * Get the total number of items to migrate
	 *
	 * @return int
	 */
	public function total_items_to_migrate() {

		global $wpdb;
		$count = $wpdb->get_var( "SELECT count(meta_id) FROM {$wpdb->postmeta} WHERE meta_key = '_jet_sm_controls_values';" );
		return $count;
	}

	/**
	 * Inline scripts for the migration page
	 */
	protected function inline_scripts() {
		?>
		<script type="text/javascript">

			document.addEventListener( 'DOMContentLoaded', function () {

				const migrationData = <?php echo wp_json_encode( [
					'confirmMessage' => __( 'Are you sure you want to start the migration? This process cannot be undone.', 'jet-engine' ),
				] ); ?>;

				const runMigrationButton = document.getElementById( 'run_migration' );
				const cleanupButton = document.getElementById( 'cleanup_button' );
				const cleanupSection = document.getElementById( 'cleanup_section' );
				const runSection = document.getElementById( 'run_section' );
				const midgrationProgress = document.getElementById( 'migration_progress' );

				const migrationStep = function( step ) {

					step = step || 1;

					jQuery.ajax({
						url: runMigrationButton.href,
						type: 'POST',
						data: {
							step: step,
						},
						success: function (response) {
							if ( response.success ) {

								const nextStep = parseInt( response.data.next_step );

								const progressItem = document.createElement( 'div' );
								progressItem.innerText = response.data.message;

								midgrationProgress.appendChild(
									progressItem
								);

								if ( nextStep && nextStep > 0 ) {
									migrationStep( nextStep );
								} else {
									cleanupSection.style.display = 'block';
									runSection.style.display = 'none';
								}
							} else {
								alert( response.data );
							}
						},
						error: function ( jqXHR, textStatus, errorThrown ) {
							alert( errorThrown );
							midgrationProgress.innerHTML = '';
							runMigrationButton.style.display = 'inline-block';
						}
					});
				}

				if ( runMigrationButton) {
					runMigrationButton.addEventListener( 'click', function ( event ) {

						event.preventDefault();

						if ( confirm( migrationData.confirmMessage ) ) {
							runMigrationButton.style.display = 'none';

							const progressItem = document.createElement( 'div' );
							progressItem.innerText = 'Migrating posts settings...';

							midgrationProgress.appendChild(
								progressItem
							);

							migrationStep();
						}
					});
				}

				if ( cleanupButton ) {
					cleanupButton.addEventListener( 'click', function ( event ) {

						event.preventDefault();

						if ( confirm( '<?php echo esc_js( __( 'Are you sure you want to clean up the legacy data?', 'jet-engine' ) ); ?>' ) ) {
							cleanupButton.style.display = 'none';

							jQuery.ajax({
								url: cleanupButton.href,
								type: 'POST',
								success: function (response) {
									if ( response.success ) {
										window.location.reload();
									} else {
										alert( response.data );
										cleanupButton.style.display = 'inline-block';
									}
								},
								error: function ( jqXHR, textStatus, errorThrown ) {
									alert( errorThrown );
									cleanupButton.style.display = 'inline-block';
								}
							});
						}
					});
				}
			});
		</script>
		<?php
	}

	/**
	 * Get the URL for the migration page
	 *
	 * @param bool $run_migration
	 * @return string
	 */
	public function page_url( $run_migration = false, $cleanup = false, $rollback = false ) {

		$url_args = [ 'page' => $this->page_slug ];

		if ( $run_migration ) {
			$url_args['run_migration'] = 1;
		}

		if ( $cleanup ) {
			$url_args['clean_up_migration'] = 1;
		}

		if ( $rollback ) {
			$url_args['rollback'] = 1;
		}

		$url = add_query_arg( $url_args, admin_url( 'admin.php' ) );

		return esc_url( wp_nonce_url( $url, $this->page_slug ) );
	}

	/**
	 * Notice about migration if there is a new style manager version
	 */
	public function migration_notice() {

		if (
			! current_user_can( 'manage_options' )
			|| isset( $_GET['page'] ) && $_GET['page'] === $this->page_slug
		) {
			return;
		}

		echo '<div class="notice notice-error is-dismissible">';
		echo '<p>' . esc_html__( 'JetStyleManager as a separate plugin has been replaced with a built-in Style Manager module for the plugins that support it. You can migrate your styling settings to the new style manager module and deactivate JetStyleManager plugin to optimize your website performance.', 'jet-engine' ) . '</p>';
		echo '<p><a href="' . $this->page_url() . '" class="button button-primary">' . esc_html__( 'Go to Migration Page', 'jet-engine' ) . '</a></p>';
		echo '</div>';
	}
}