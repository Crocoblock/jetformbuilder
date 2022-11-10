<?php


namespace Jet_Form_Builder\Migrations\Versions;

use Jet_Form_Builder\Classes\Repository\Repository_Item_With_Class;
use Jet_Form_Builder\Classes\Repository\Repository_Static_Item_It;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Migrations\Migration_Exception;
use Jet_Form_Builder\Migrations\Migration_Model;
use Jet_Form_Builder\Migrations\Migrator;
use Jet_Form_Builder\Migrations\Profilers\Base_Migration_Profiler;

abstract class Base_Migration implements Repository_Static_Item_It {

	use Repository_Item_With_Class;

	/** @var Base_Migration_Profiler */
	private $profiler;

	abstract public function up( \wpdb $wpdb );

	abstract public function down( \wpdb $wpdb );

	public function __construct( Base_Migration_Profiler $profiler = null ) {
		$this->set_profiler( $profiler );
	}

	/**
	 * @throws Migration_Exception
	 */
	final public function install() {
		if ( $this->is_installed() ) {
			return;
		}

		try {
			$this->run_up();
		} catch ( Migration_Exception $exception ) {
			throw $exception->set_version( static::class );
		}

		$this->set_installed();
	}

	/**
	 * @throws Migration_Exception
	 */
	final public function uninstall() {
		if ( ! $this->is_installed() ) {
			return;
		}
		$this->run_down();
		$this->set_uninstalled();
	}

	final public function install_automatic() {
		if ( $this->is_installed() ) {
			return;
		}

		$this->save( 0 );
		$this->set_installed();
	}

	/**
	 * @throws Migration_Exception
	 */
	final protected function run_up() {
		global $wpdb;

		timer_start();
		$this->up( $wpdb );

		$timer_stop = timer_stop();
		$time       = $timer_stop * 1000;

		$this->profiler->on_up_end( $this, $timer_stop );

		if ( $wpdb->last_error ) {
			throw new Migration_Exception( $wpdb->last_error );
		}

		$this->save( $time );
	}

	/**
	 * @throws Migration_Exception
	 */
	final public function run_down() {
		global $wpdb;

		timer_start();
		$this->down( $wpdb );
		$timer_stop = timer_stop();

		$this->profiler->on_down_end( $this, $timer_stop );

		if ( $wpdb->last_error ) {
			throw new Migration_Exception( $wpdb->last_error );
		}

		try {
			$this->delete();
		} catch ( Sql_Exception $exception ) {
			throw new Migration_Exception( $exception->getMessage() );
		}
	}

	public function save( int $time ) {
		( new Migration_Model() )->insert_soft(
			array(
				'version'        => get_class( $this ),
				'execution_time' => $time,
				'executed_at'    => current_time( 'mysql' ),
			)
		);
	}

	/**
	 * @throws Sql_Exception
	 */
	public function delete() {
		( new Migration_Model() )->delete(
			array(
				'version' => get_class( $this ),
			)
		);
	}

	final public function set_installed() {
		Migrator::instance()->set_installed( $this );
	}

	final public function set_uninstalled() {
		Migrator::instance()->set_uninstalled( $this );
	}

	final public function is_installed(): bool {
		return Migrator::instance()->is_installed( $this );
	}

	public function set_profiler( Base_Migration_Profiler $profiler = null ): Base_Migration {
		$this->profiler = $profiler ?? new Base_Migration_Profiler();

		return $this;
	}

}
