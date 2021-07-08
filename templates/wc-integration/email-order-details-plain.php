<?php
/**
 * WooCommerce order details
 *
 * @var array $details
 */
?>
<?php echo $details['heading']; ?>
<?php
	foreach ( $details as $index => $item ) {
		if ( ! is_int( $index ) ) {
			continue;
		}
		echo '- ';
			if ( ! empty( $item['key'] ) ) {
				echo $item['key'] . ': ';
			}

			if ( ! empty( $item['is_html'] ) ) {
				echo $item['display'];
			} else {
				echo '<strong>' . $item['display'] . '</strong>';
			}

		echo '
';
	}
?>
