<?php declare(strict_types=1);

/*
 * This file is part of Composer.
 *
 * (c) Nils Adermann <naderman@naderman.de>
 *     Jordi Boggiano <j.boggiano@seld.be>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Composer\Repository;

use Composer\Package\AliasPackage;
use Composer\Package\PackageInterface;

/**
 * Provides getCanonicalPackages() to various repository implementations
 *
 * @internal
 */
trait CanonicalPackagesTrait
{
    /**
     * Get unique packages (at most one package of each name), with aliases resolved and removed.
     *
     * @return PackageInterface[]
     */
    public function getCanonicalPackages()
    {
        $packages = $this->getPackages();

        // get at most one package of each name, preferring non-aliased ones
        $packagesByName = [];
        foreach ($packages as $package) {
            if (!isset($packagesByName[$package->getName()]) || $packagesByName[$package->getName()] instanceof AliasPackage) {
                $packagesByName[$package->getName()] = $package;
            }
        }

        $canonicalPackages = [];

        // unfold aliased packages
        foreach ($packagesByName as $package) {
            while ($package instanceof AliasPackage) {
                $package = $package->getAliasOf();
            }

            $canonicalPackages[] = $package;
        }

        return $canonicalPackages;
    }
}
