<?php
/**
 * Progress pages template
 */
?>
<div class="jet-form-builder-progress-pages">
	<?php $breaks = count( $this->form_breaks ); ?>
	<?php
	foreach ( $this->form_breaks as $index => $break ) :
		$label = empty( $break['label_progress'] ) ? $break['label'] : $break['label_progress'];
		?>
		<div class="<?php echo esc_attr( $this->get_progress_item_class( $index ) ); ?>" data-page="<?php echo absint( $index + 1 ); ?>">
			<div class="jet-form-builder-progress-pages__item">
				<div class="jet-form-builder-progress-pages__item--circle"><?php echo absint( $index + 1 ); ?></div>
				<div class="jet-form-builder-progress-pages__item--label"><?php echo wp_kses_post( $label ); ?></div>
			</div>
			<?php if ( $index + 1 !== $breaks ) : ?>
				<div class="jet-form-builder-progress-pages__separator"></div>
			<?php endif; ?>
		</div>
	<?php endforeach; ?>
</div>
