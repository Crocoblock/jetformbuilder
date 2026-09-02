<?php


namespace Jet_Form_Builder\Migrations\Versions;

use Jet_Form_Builder\Migrations\Auto_Migrator;
use JFB_Modules\Validation\Advanced_Rules\Ssr_Callback_Allowlist;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Starts a bounded backfill of the SSR "Server-Side callback" allowlist. The first batch
 * runs immediately and a capable admin page processes the remainder through a sequence
 * of short AJAX requests, resuming from a persisted form-ID cursor when needed. Forms
 * reached before the backfill completes initialize their own allowlist lazily from saved
 * content, so unattended updates do not interrupt existing custom validation. The
 * backfill does not depend on WP-Cron.
 *
 * @since 3.6.5.2
 */
class Version_3_6_5_2 extends Base_Migration {

	public function up( \wpdb $wpdb ) {
		Ssr_Callback_Allowlist::rebuild_from_all_forms();
	}

	public function down( \wpdb $wpdb ) {
		delete_post_meta_by_key( Ssr_Callback_Allowlist::META_KEY );
		delete_option( Ssr_Callback_Allowlist::OPTION_KEY );
		delete_option( Ssr_Callback_Allowlist::REBUILD_PROGRESS_OPTION );
		delete_transient( Ssr_Callback_Allowlist::REBUILD_LOCK_TRANSIENT );
		delete_option( Auto_Migrator::DB_VERSION_OPTION );
	}
}
