<?php


namespace Tests\Unit;

use JFB_Components\Repository\Repository_Item_Instance_Trait;
use JFB_Components\Repository\Repository_Pattern_Trait;
use JFB_Components\Repository\Interfaces\Repository_Pattern_Interface;
use Tests\Support\UnitTester;

class RepositoryTest extends \Codeception\Test\Unit {

	protected UnitTester                   $tester;
	protected Repository_Pattern_Interface $repository;

	protected function _before() {
		$this->repository = new class() implements Repository_Pattern_Interface {
			use Repository_Pattern_Trait;

			public function rep_instances(): array {
				return array(
					new class implements Repository_Item_Instance_Trait {
						public function rep_item_id() {
							return 'first';
						}
					},
					new class implements Repository_Item_Instance_Trait {
						public function rep_item_id() {
							return 'second';
						}
					},
					new class implements Repository_Item_Instance_Trait {
						public function rep_item_id() {
							return 'third';
						}
					}
				);
			}
		};
	}

	public function testHasItems() {
		$this->reset();

		$this->assertCount( 3, $this->repository->rep_get_values() );
	}

	// tests
	public function testGetById() {
		$this->reset();

		$this->assertTrue( $this->repository->rep_isset_item( 'first' ) );
		$this->assertTrue( $this->repository->rep_isset_item( 'second' ) );
		$this->assertTrue( $this->repository->rep_isset_item( 'third' ) );
	}

	public function testInstallNewItem() {
		$this->reset();

		$this->repository->rep_install_item(
			new class implements Repository_Item_Instance_Trait {
				public function rep_item_id() {
					return 'new';
				}
			}
		);

		$this->assertTrue( $this->repository->rep_isset_item( 'new' ) );
	}

	protected function reset() {
		$this->repository->rep_clear();
		$this->repository->rep_install();
	}
}
