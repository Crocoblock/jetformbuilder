<?php

namespace JFB_Tests\Wpunit\Modules\Admin;

use Jet_Form_Builder\Admin\Tabs_Handlers\Options_Handler;
use Jet_Form_Builder\Admin\Tabs_Handlers\Tab_Handler_Manager;

class OnPluginActivateTest extends \Codeception\TestCase\WPTestCase {

	private $options_tab;

	protected function setUp(): void {
		parent::setUp();

		/** @var Options_Handler $options */
		$this->options_tab = Tab_Handler_Manager::instance()->tab( 'options-tab' );
	}

	public function testAdvancedOptionsHasBeenUpdated() {
		$this->reset_options();

		do_action( 'activate_' . JET_FORM_BUILDER_PLUGIN_BASE );

		$options = $this->options_tab->get_options();

		$this->assertEquals(
			array(
				'disable_next_button'            => false,
				'scroll_on_next'                 => true,
				'auto_focus'                     => true,
				'form_records_access_capability' => 'manage_options',
			),
			$options
		);
	}

	public function testDisableNextButtonOptionNotChanged() {
		$this->reset_options();

		$this->options_tab->update_options(
			array(
				'disable_next_button' => true,
			)
		);

		do_action( 'activate_' . JET_FORM_BUILDER_PLUGIN_BASE );

		$options = $this->options_tab->get_options();

		$this->assertEquals(
			array(
				'disable_next_button'            => true,
				'scroll_on_next'                 => true,
				'auto_focus'                     => true,
				'form_records_access_capability' => 'manage_options',
			),
			$options
		);
	}

	public function testScrollOnNextOptionNotChanged() {
		$this->reset_options();

		$this->options_tab->update_options(
			array(
				'scroll_on_next' => false,
			)
		);

		do_action( 'activate_' . JET_FORM_BUILDER_PLUGIN_BASE );

		$options = $this->options_tab->get_options();

		$this->assertEquals(
			array(
				'disable_next_button'            => false,
				'scroll_on_next'                 => false,
				'auto_focus'                     => true,
				'form_records_access_capability' => 'manage_options',
			),
			$options
		);
	}

	public function testAutoFocusOptionNotChanged() {
		$this->reset_options();

		$this->options_tab->update_options(
			array(
				'auto_focus' => false,
			)
		);

		do_action( 'activate_' . JET_FORM_BUILDER_PLUGIN_BASE );

		$options = $this->options_tab->get_options();

		$this->assertEquals(
			array(
				'disable_next_button'            => false,
				'scroll_on_next'                 => true,
				'auto_focus'                     => false,
				'form_records_access_capability' => 'manage_options',
			),
			$options
		);
	}

	public function testWithOtherOptions() {
		$this->reset_options();

		$this->options_tab->update_options(
			array(
				'enable_dev'       => true,
				'clear_on_install' => true,
				'form_records_access_capability' => 'edit_posts',
			)
		);

		do_action( 'activate_' . JET_FORM_BUILDER_PLUGIN_BASE );

		$options = $this->options_tab->get_options();

		$this->assertEquals(
			array(
				'enable_dev'                     => true,
				'clear_on_install'               => true,
				'form_records_access_capability' => 'edit_posts',
				'disable_next_button'            => false,
				'scroll_on_next'                 => true,
				'auto_focus'                     => true,
			),
			$options
		);
	}

	protected function reset_options() {
		delete_option( $this->options_tab->option_name() );
	}


}
