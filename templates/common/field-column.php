<?php
use Jet_Form_Builder\Classes\Tools;

/**
 * Row-layout field template
 */

echo $label;

if ( $template ) {
	if ( Tools::is_readable( $template ) ) {
		include $template;
	} else {
		echo $template;
	}
}

echo $desc;