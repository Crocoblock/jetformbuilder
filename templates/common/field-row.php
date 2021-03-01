<?php
/**
 * Row-layout field template
 */

$fullwidth = ' content-fullwidth';

?>
<?php if ( $label || $desc ) : ?>
<div class="jet-form-builder-col__start"><?php

	echo $label;
	echo $desc;

	// Reset fullwidth content if we have label or description for field
	$fullwidth = '';

?></div>
<?php endif; ?>
<div class="jet-form-builder-col__end<?php echo $fullwidth; ?>"><?php
	if ( $template ) {
		if ( is_readable( $template ) ) {
			include $template;
		} else {
			echo $template;
		}
	}
?></div>