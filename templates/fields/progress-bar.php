<?php
/**
 * Progress pages template
 *
 * @var Form_Break $this
 */

use Jet_Form_Builder\Form_Break;

?>
<?php foreach ( $this->get_breaks() as $index => $break ) : ?>
	<div class="<?php echo esc_attr( $this->get_progress_item_class( $index ) ); ?>" data-page="<?php echo absint( $index + 1 ); ?>">
		<div class="jet-form-builder-progress-pages__item">
			<div class="jet-form-builder-progress-pages__item--circle"><?php echo absint( $index + 1 ); ?></div>
			<div class="jet-form-builder-progress-pages__item--label"><?php echo empty( $break['label_progress'] ) ? wp_kses_post( $break['label'] ) : wp_kses_post( $break['label_progress'] ); ?></div>
		</div>
		<?php if ( $index + 1 !== $this->get_count_breaks() ) : ?>
			<div class="jet-form-builder-progress-pages__separator"></div>
		<?php endif; ?>
	</div>
<?php endforeach; ?>
