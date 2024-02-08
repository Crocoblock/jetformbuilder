<?php

namespace JFB_Tests\Wpunit;

use Jet_Form_Builder\Exceptions\Repository_Exception;
use JFB_Components\Repository\Interfaces\Repository_Pattern_Interface;
use JFB_Components\Repository\Repository_Item_Instance_Trait;
use JFB_Components\Repository\Repository_Pattern_Trait;

class RepositoryTest extends \Codeception\TestCase\WPTestCase
{
	/**
     * @var \WpunitTester
     */
    protected $tester;
	/**
	 * @var Repository_Pattern_Interface
	 */
	protected $repository;

	public function setUp(): void
    {
        // Before...
        parent::setUp();

        // Your set up methods here.
	    $this->repository = new class() implements Repository_Pattern_Interface {
		    use Repository_Pattern_Trait;

		    public function rep_instances(): array {
			    return array(
				    new class() implements Repository_Item_Instance_Trait {
					    public function rep_item_id() {
						    return 'first';
					    }
				    },
				    new class() implements Repository_Item_Instance_Trait {
					    public function rep_item_id() {
						    return 'second';
					    }
				    },
				    new class() implements Repository_Item_Instance_Trait {
					    public function rep_item_id() {
						    return 'third';
					    }
				    },
			    );
		    }
	    };
    }

	public function tearDown(): void
    {
        // Your tear down methods here.

        // Then...
        parent::tearDown();
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

		try {
			$this->repository->rep_install_item(
				new class() implements Repository_Item_Instance_Trait {
					public function rep_item_id() {
						return 'new';
					}
				}
			);
		} catch ( Repository_Exception $exception ) {
			$this->addWarning( $exception->getMessage() );
		}

		$this->assertTrue( $this->repository->rep_isset_item( 'new' ) );
	}

	protected function reset() {
		$this->repository->rep_clear();
		$this->repository->rep_install();
	}
}
