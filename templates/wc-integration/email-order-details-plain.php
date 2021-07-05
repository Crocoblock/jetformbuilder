<?php
/**
 * WooCommerce order details
 *
 * @var array $details
 */
?>
<?php _e( 'Order Details', 'jet-form-builder' ); ?>
<?php
	foreach ( $details as $item ) {
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
