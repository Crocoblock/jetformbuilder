<?php

namespace JFB_Tests\Wpunit;

/**
 * Thrown by the `wp_die_ajax_handler` override in `SsrCallbacksHandlerMigrationGuardTest::
 * captureAjaxResponse()` to unwind out of `wp_die()` without actually terminating the test
 * process.
 *
 * Lives outside `tests/wpunit/` (not alongside the test class that uses it) because
 * Codeception's test loader scans every class declared in any `tests/wpunit/*.php` file for
 * test methods. PHPUnit's annotation reader calls `ReflectionMethod::getStartLine()` on each
 * method it inspects, including inherited ones — and for a method that resolves to an
 * internal (compiled-in) class like `\Exception` (e.g. its `__wakeup()`), `getStartLine()`
 * returns `false` instead of an `int`, which PHPUnit's `DocBlock` constructor (typed
 * `int $startLine`) rejects with a fatal `TypeError` before a single test in the suite runs.
 * Overriding only the specific inherited methods PHPUnit happens to walk into is fragile
 * (`__wakeup()`, `__toString()`, etc. would each need the same treatment); living outside the
 * scanned directory avoids the problem entirely.
 */
class Ajax_Die_Signal extends \Exception {
}
