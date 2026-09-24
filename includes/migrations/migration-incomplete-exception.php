<?php


namespace Jet_Form_Builder\Migrations;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Signals that a time-boxed migration batch (`Ssr_Callback_Allowlist::rebuild_from_all_forms()`,
 * `Version_3_6_5_3::up()`) persisted a resume cursor and yielded before finishing, as opposed to
 * a genuine failure. Extends `\RuntimeException` so existing `catch ( \RuntimeException $e )`
 * call sites keep working unchanged. `Auto_Migrator::install_migrations()` does not catch this
 * type specially: it propagates straight to `run()`'s catch block like any other failure, since
 * the migration that threw it already committed its own partial progress, leaving the outer
 * transaction no longer intact for whatever migration would have run next.
 *
 * @since 3.6.5.3
 */
class Migration_Incomplete_Exception extends \RuntimeException {

}
