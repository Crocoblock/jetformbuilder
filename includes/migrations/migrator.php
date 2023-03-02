<?php


namespace Jet_Form_Builder\Migrations;

use Jet_Form_Builder\Classes\Instance_Trait;
use Jet_Form_Builder\Classes\Repository\Repository_Pattern_Trait;
use Jet_Form_Builder\Db_Queries\Execution_Builder;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Migrations\Profilers\Base_Migration_Profiler;
use Jet_Form_Builder\Migrations\Versions\Base_Migration;
use Jet_Form_Builder\Migrations\Versions\Version_2_1_0;
use Jet_Form_Builder\Migrations\Versions\Version_2_1_7;
use Jet_Form_Builder\Migrations\Versions\Version_2_1_8;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * @method static Migrator instance()
 *
 * Class Migrator
 * @package Jet_Form_Builder\Migrations
 */
class Migrator {

	use Instance_Trait;
	use Repository_Pattern_Trait;

	private $installed_migrations = array();

	public function __construct() {
		$this->rep_install();
	}

	/**
	 * @return array
	 */
	public function rep_instances(): array {
		return array(
			new Version_2_1_0(),
			new Version_2_1_7(),
			new Version_2_1_8(),
		);
	}

	/**
	 * @param null|Base_Migration_Profiler $profiler
	 *
	 * @throws Migration_Exception
	 */
	public function install( $profiler = null ) {
		/** @var Base_Migration $migration */
		foreach ( $this->rep_get_items() as $migration ) {
			$migration->set_profiler( $profiler )->install();
		}
	}

	/**
	 * @param null|Base_Migration_Profiler $profiler
	 *
	 * @throws Migration_Exception
	 */
	public function uninstall( $profiler = null ) {
		/** @var Base_Migration $migration */
		foreach ( $this->rep_get_items() as $migration ) {
			$migration->set_profiler( $profiler )->uninstall();
		}
	}

	public function is_installed_all(): bool {
		$items = $this->rep_get_items();

		/** @var Base_Migration $item */
		foreach ( $items as $item ) {
			if ( ! $item->is_installed() ) {
				return false;
			}
		}

		return true;
	}

	public function is_installed( Base_Migration $migration ): bool {
		$version = get_class( $migration );

		if ( isset( $this->installed_migrations[ $version ] ) ) {
			return $this->installed_migrations[ $version ];
		}

		$installed = true;

		try {
			View_Migrations::findOne(
				array(
					'version' => $version,
				)
			)->query()->query_one();
		} catch ( Query_Builder_Exception $exception ) {
			$exception->unset_from_logger();
			$installed = false;
		}

		$this->installed_migrations[ $version ] = $installed;

		return $this->installed_migrations[ $version ];
	}

	public function set_installed( Base_Migration $migration ): Migrator {
		$version = get_class( $migration );

		$this->installed_migrations[ $version ] = true;

		return $this;
	}

	public function set_uninstalled( Base_Migration $migration ): Migrator {
		$version = get_class( $migration );

		$this->installed_migrations[ $version ] = false;

		return $this;
	}
}
