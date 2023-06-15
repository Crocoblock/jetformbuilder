<?php
/**
 * @var $this Header
 */

// If this file is called directly, abort.
use JFB_Components\Admin\Print_Page\Header;

if ( ! defined( 'WPINC' ) ) {
	die;
}

$meta_content_type = get_option( 'html_type' ) . '; charset=' . get_option( 'blog_charset' );

?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="<?php echo esc_attr( $meta_content_type ); ?>">
	<title><?php echo esc_html( $this->get_title() ); ?></title>
	<?php $this->do_styles(); ?>
	<?php $this->do_scripts(); ?>
	<style>
		#wpcontent {
			margin-left: unset;
		}
	</style>
</head>
<body class="<?php echo esc_attr( $this->get_body_classes() ); ?>">
<div id="wpcontent">
<div id="wpbody-content">
