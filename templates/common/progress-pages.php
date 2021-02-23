<?php
/**
 * Progress pages template
 */
?>
<div class="jet-form-builder-progress-pages">
    <?php $breaks = count( $this->form_breaks ); ?>
    <?php foreach ( $this->form_breaks as $index => $break ): ?>
        <div class="<?= $this->get_progress_item_class( $index ) ?>" data-page="<?= $index + 1 ?>">
            <div class="jet-form-builder-progress-pages__item">
                <div class="jet-form-builder-progress-pages__item--circle"><?= $index + 1 ?></div>
                <div class="jet-form-builder-progress-pages__item--label"><?= $break['label'] ?></div>
            </div>
            <?php if ( $index + 1 !== $breaks ): ?>
                <div class="jet-form-builder-progress-pages__separator"></div>
            <?php endif; ?>
        </div>
    <?php endforeach; ?>
</div>