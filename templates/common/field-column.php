<?php
/**
 * Row-layout field template
 */

echo $label;

if ( $template ) {
	if ( is_readable( $template ) ) {
		include $template;
	} else {
		echo $template;
	}
}

echo $desc;