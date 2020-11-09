<?php


namespace Jet_Form_Builder\Classes;


class Gallery
{

    /**
     * Render images gallery as slider
     *
     * @param  array  $images [description]
     * @param  array  $args   [description]
     * @return [type]         [description]
     */
    public static function slider( $images = array(), $args = array() ) {

        if ( empty( $images ) ) {
            return '';
        }

        wp_enqueue_script( 'jquery-slick' );
        wp_enqueue_script( 'imagesloaded' );
        wp_enqueue_script( 'jet-engine-frontend' );

        $args = wp_parse_args( $args, array(
            'size'             => 'full',
            'lightbox'         => false,
            'slides_to_show'   => 1,
            'slides_to_show_t' => false,
            'slides_to_show_m' => false,
        ) );

        $slider_atts =  array(
            'slidesToShow'   => $args['slides_to_show'],
            'dots'           => false,
            'slidesToScroll' => 1,
            'adaptiveHeight' => true,
            'prevArrow'      => '<i class="fa fa-angle-left prev-arrow jet-engine-arrow"></i>',
            'nextArrow'      => '<i class="fa fa-angle-right next-arrow jet-engine-arrow"></i>',
            'rtl'            => is_rtl(),
        );

        $mobile_settings = apply_filters( 'jet-form-builder/gallery/slider/mobile-settings', array(
            'slides_to_show_t' => 1025,
            'slides_to_show_m' => 768,
        ) );

        foreach ( $mobile_settings as $key => $breakpoint ) {

            if ( ! empty( $args[ $key ] ) ) {

                if ( ! isset( $slider_atts['responsive'] ) ) {
                    $slider_atts['responsive'] = array();
                }

                $slider_atts['responsive'][] = array(
                    'breakpoint' => $breakpoint,
                    'settings'   => array(
                        'slidesToShow' => $args[ $key ],
                    ),
                );

            }
        }

        $slider_atts = apply_filters( 'jet-form-builder/gallery/slider/atts', $slider_atts );
        $slider_atts = htmlspecialchars( json_encode( $slider_atts ) );

        echo '<div class="jet-engine-gallery-slider" data-atts="' . $slider_atts . '">';

        $gallery_id = self::get_gallery_id();

        foreach ( $images as $img_id ) {

            if ( 'full' === $args['size'] ) {
                $img_url = $img_full = wp_get_attachment_image_url( $img_id, $args['size'] );
            } else {
                $img_url  = wp_get_attachment_image_url( $img_id, $args['size'] );
                $img_full = wp_get_attachment_image_url( $img_id, 'full' );
            }

            echo '<div class="jet-engine-gallery-slider__item">';

            if ( $args['lightbox'] ) {
                echo '<a href="' . $img_full . '" class="jet-engine-gallery-slider__item-wrap jet-engine-gallery-item-wrap is-lightbox" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="' . $gallery_id . '">';
            } else {
                echo '<span class="jet-engine-gallery-slider__item-wrap jet-engine-gallery-item-wrap">';
            }

            $alt = get_post_meta( $img_id, '_wp_attachment_image_alt', true );

            echo '<img src="' . $img_url . '" alt="' . $alt . '" class="jet-engine-gallery-slider__item-img">';

            if ( $args['lightbox'] ) {
                echo '</a>';
            } else {
                echo '</span>';
            }

            echo '</div>';

        }

        echo '</div>';

    }

    /**
     * Render images gallery as grid
     *
     * @param  array   $images   [description]
     * @param  string  $size     [description]
     * @param  boolean $lightbox [description]
     * @return string
     */
    public static function grid( $images = array(), $args = array() ) {

        if ( empty( $images ) ) {
            return '';
        }

        $args = wp_parse_args( $args, array(
            'size'        => 'full',
            'lightbox'    => false,
            'cols_desk'   => 3,
            'cols_tablet' => 3,
            'cols_mobile' => 1,
        ) );

        ob_start();

        $classes = array(
            'grid-col-desk-' . $args['cols_desk'],
            'grid-col-tablet-' . $args['cols_tablet'],
            'grid-col-mobile-' . $args['cols_mobile'],
        );
        $classes = sprintf( ' %s', implode( ' ', $classes ) );

        echo '<div class="jet-engine-gallery-grid' . $classes . '">';

        $gallery_id = self::get_gallery_id();

        foreach ( $images as $img_id ) {

            if ( 'full' === $args['size'] ) {
                $img_url = $img_full = wp_get_attachment_image_url( $img_id, $args['size'] );
            } else {
                $img_url  = wp_get_attachment_image_url( $img_id, $args['size'] );
                $img_full = wp_get_attachment_image_url( $img_id, 'full' );
            }

            echo '<div class="jet-engine-gallery-grid__item">';

            if ( $args['lightbox'] ) {
                echo '<a href="' . $img_full . '" class="jet-engine-gallery-grid__item-wrap jet-engine-gallery-item-wrap is-lightbox" data-elementor-open-lightbox="yes" data-elementor-lightbox-slideshow="' . $gallery_id . '">';
            } else {
                echo '<span class="jet-engine-gallery-grid__item-wrap jet-engine-gallery-item-wrap">';
            }

            $alt = get_post_meta( $img_id, '_wp_attachment_image_alt', true );

            echo '<img src="' . $img_url . '" alt="' . $alt . '" class="jet-engine-gallery-grid__item-img">';

            if ( $args['lightbox'] ) {
                echo '</a>';
            } else {
                echo '</span>';
            }

            echo '</div>';

        }

        echo '</div>';

        return ob_get_clean();

    }

    /**
     * Returns random ID for gallery
     *
     * @return [type] [description]
     */
    public static function get_gallery_id() {
        return 'gallery_' . rand( 1000, 9999 );
    }

}