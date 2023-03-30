<?php
// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}
?>
<a href="#" class="page-title-action" id="<?php echo esc_attr( $this->get_id() ); ?>-trigger">
	<?php echo esc_html( $this->get_title() ); ?>
</a>
<form id="<?php echo esc_attr( $this->get_id() ); ?>"
		style="display: none; margin: -0 0 0 20px; padding: 5px 15px; align-items: center; background: #fff;"
		method="post"
		action="<?php echo esc_url_raw( $this->action_url() ); ?>"
		enctype="multipart/form-data">
	<input type="file" name="form_file" accept="application/json" multiple="false">
	<button class="button button-primary" type="submit" style="margin: 0 0 0 5px;">
		<?php echo esc_html( $import_button ); ?>
	</button>
</form>
