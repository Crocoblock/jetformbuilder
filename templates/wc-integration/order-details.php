<?php
/**
 * WooCommerce order details
 *
 * @var array $details
 */
?>
<h2 class="woocommerce-order-details__title"><?php echo $details['heading']; ?></h2>
<ul class="woocommerce-order-overview woocommerce-thankyou-order-details order_details">
	<?php
		foreach ( $details as $index => $item ) {
		    if ( ! is_int( $index ) ) {
		        continue;
            }
			echo '<li>';
				if ( ! empty( $item['key'] ) ) {
					echo $item['key'] . ': ';
				}

				if ( ! empty( $item['is_html'] ) ) {
					echo $item['display'];
				} else {
					echo '<strong>' . $item['display'] . '</strong>';
				}

			echo '</li>';
		}
	?>
</ul>
