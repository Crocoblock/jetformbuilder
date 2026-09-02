<?php

function jfb_20361_late_loaded_callback( $value ) {
	return is_email( $value );
}
