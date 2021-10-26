<?php
/**
 * Progress pages template
 *
 * @var Form_Break $this
 */

use Jet_Form_Builder\Form_Break;

// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
?>
<?php foreach ( $this->get_breaks() as $index => $break ) : ?>
	<div class="<?php echo $this->get_progress_item_class( $index ); ?>" data-page="<?php echo $index + 1; ?>">
		<div class="jet-form-builder-progress-pages__item">
			<div class="jet-form-builder-progress-pages__item--circle"><?php echo $index + 1; ?></div>
			<div class="jet-form-builder-progress-pages__item--label"><?php echo empty( $break['label_progress'] ) ? $break['label'] : $break['label_progress']; ?></div>
		</div>
		<?php if ( $index + 1 !== $this->get_count_breaks() ) : ?>
			<div class="jet-form-builder-progress-pages__separator"></div>
		<?php endif; ?>
	</div>
	<?php
endforeach;
// phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped

