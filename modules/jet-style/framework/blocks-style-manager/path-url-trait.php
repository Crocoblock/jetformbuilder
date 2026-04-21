<?php
namespace Crocoblock\Blocks_Style;

/**
 * Path and URL trait
 *
 * @since 1.0.0
 */
trait Path_Url_Trait {

	/**
	 * Module directory path.
	 *
	 * @since 1.0.0
	 * @access protected
	 * @var srting.
	 */
	protected $path;

	/**
	 * Module directory URL.
	 *
	 * @since 1.0.0
	 * @access protected
	 * @var srting.
	 */
	protected $url;

	/**
	 * Set module directory path
	 *
	 * @param string $path Path.
	 * @return self
	 */
	public function set_path( $path ) {
		$this->path = $path;
		return $this;
	}

	/**
	 * Get module directory path to file
	 *
	 * @param string $file File name.
	 * @return string
	 */
	public function get_path( string $file = '' ) {
		if ( ! $this->path ) {
			$this->path = trailingslashit( plugin_dir_path( __FILE__ ) );
		}

		return $this->path . $file;
	}

	/**
	 * Set module directory URL
	 *
	 * @param string $url URL.
	 * @return self
	 */
	public function set_url( $url ) {
		$this->url = $url;
		return $this;
	}

	/**
	 * Get module directory URL to file
	 *
	 * @param string $file File name.
	 * @return string
	 */
	public function get_url( string $file = '' ) {
		if ( ! $this->url ) {
			$this->url = trailingslashit( plugin_dir_url( __FILE__ ) );
		}

		return $this->url . $file;
	}
}
