<?php


namespace JFB_Modules\Jobs\Interfaces;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die();
}

interface Once_Job_It extends Job_It, Time_Based_It {
}
