<?php


namespace Jet_Form_Builder;

use Jet_Form_Builder\Blocks\Block_Helper;
use Jet_Form_Builder\Classes\Get_Template_Trait;
use Jet_Form_Builder\Classes\Tools;

class Form_Break {

	use Get_Template_Trait;

	private $pages = 0;
	private $form_breaks = array();
	private $count_form_breaks = null;
	private $current_page = 1;
	private $current_form_break = 0;
	private $is_editor = false;
	private $progress_type = 'default';
	private $has_start = false;

	public function get_pages() {
		return $this->pages;
	}

	public function get_breaks() {
		return $this->form_breaks;
	}

	public function get_count_breaks() {
		if ( is_null( $this->count_form_breaks ) ) {
			$this->count_form_breaks = count( $this->form_breaks );
		}

		return $this->count_form_breaks;
	}

	public function get_current() {
		return $this->current_page;
	}

	public function set_progress_type( $type ) {
		if ( ! is_string( $type ) ) {
			return;
		}
		$this->progress_type = $type;
	}

	public function set_editor_mode( $is_editor ) {
		if ( ! $is_editor ) {
			$this->is_editor         = false;
			$this->pages             = 0;
			$this->form_breaks       = array();
			$this->count_form_breaks = 0;

			return $this;
		}

		$this->is_editor   = true;
		$this->pages       = 2;
		$this->form_breaks = array(
			array(
				'label' => 'Start Page',
			),
			array(
				'label' => 'Second Page',
			),
			array(
				'label' => 'Last Page',
			),
		);

		return $this;
	}

	public function add_progress( $last_progress ) {
		$this->form_breaks[] = $last_progress;

		return $this;
	}


	public function set_pages( $blocks, $last_page_from_blocks = true ) {
		$count_blocks = count( $blocks );
		$last_break   = false;

		foreach ( $blocks as $index => $field ) {
			if ( 'core/block' === $field['blockName'] ) {
				$this->set_pages( $field['innerBlocks'] ?? array(), false );

				continue;
			}
			if ( 'form-break-start' === Block_Helper::delete_namespace( $field ) ) {
				$this->has_start = true;

				continue;

			} elseif ( 'form-break-field' !== Block_Helper::delete_namespace( $field ) ) {
				continue;
			}
			$form_break = Plugin::instance()->blocks->get_field_attrs( $field['blockName'], $field['attrs'] );

			if ( $last_page_from_blocks && $index + 1 === $count_blocks ) {
				$last_break = $form_break;
				unset( $blocks[ $index ] );
				continue;
			}

			$this->pages ++;
			$this->form_breaks[] = $form_break;
		}
		if ( $last_page_from_blocks && ! empty( $this->form_breaks ) ) {
			$this->form_breaks[] = $last_break ? $last_break : array( 'label' => __( 'Last Page' ) );
		}

		return $blocks;
	}

	public function with_progress_wrapper( $content, $additional_classes = array() ) {
		$type = $this->progress_type ?: 'default';

		$classes = array_merge(
			array(
				'jet-form-builder-progress-pages',
				"jfb-progress-type--$type",
			),
			$additional_classes
		);

		return sprintf(
			'<div class="%1$s" data-type="%2$s">%3$s</div>',
			implode( ' ', $classes ),
			$type,
			$content
		);
	}

	public function render_default_progress() {
		ob_start();
		include Tools::get_global_template( 'fields/progress-bar.php' );

		return ob_get_clean();
	}

	public function render_progress( $type = '', $additional_classes = array() ) {
		if ( $type ) {
			$this->set_progress_type( $type );
		}

		switch ( $this->progress_type ) {
			case 'default':
				$content = $this->render_default_progress();
				break;
			default:
				$content = apply_filters( "jet-form-builder/render/progress-bar/$this->progress_type", '', $this );
				break;
		}

		return $this->with_progress_wrapper( $content, $additional_classes );
	}

	public function get_progress_item_class( $index ) {
		$classes = array( 'jet-form-builder-progress-pages__item--wrapper' );

		if ( $this->is_editor ) {
			if ( 0 === $index ) {
				$classes[] = 'passed-page';
			}
			if ( 1 === $index ) {
				$classes[] = 'active-page';
			}
		} elseif ( $index === $this->current_form_break ) {
			$classes[] = 'active-page';
		} elseif ( $index < $this->current_form_break ) {
			$classes[] = 'passed-page';
		}

		return implode( ' ', $classes );
	}

	/**
	 * Maybe start new page
	 *
	 * @param bool $force_first
	 *
	 * @return string
	 */
	public function maybe_start_page( $force_first = false ) {
		if ( 0 >= $this->pages || $this->is_has_start() ) {
			return '';
		}

		if ( $force_first ) {
			$this->current_page       = 1;
			$this->current_form_break = 0;
		} else {
			$this->current_page ++;
			$this->current_form_break ++;
		}

		ob_start();
		do_action( 'jet-form-builder/before-page-start', $this );

		$hidden_class = '';

		if ( 1 < $this->current_page ) {
			$hidden_class = 'jet-form-builder-page--hidden';
		}

		include Tools::get_global_template( 'common/start-page.php' );

		do_action( 'jet-form-builder/after-page-start', $this );

		return ob_get_clean();
	}

	/**
	 * Maybe start new page
	 *
	 * @param $is_last
	 * @param $field
	 *
	 * @return string
	 */
	public function maybe_end_page( $is_last = false, $field = false ) {
		if ( 0 >= $this->pages ) {
			return '';
		}

		if ( ! $is_last && 'form-break-field' !== Block_Helper::delete_namespace( $field ) ) {
			return '';
		}

		ob_start();
		do_action( 'jet-form-builder/before-page-end', $this );

		include Tools::get_global_template( 'common/end-page.php' );

		do_action( 'jet-form-builder/after-page-end', $this );

		return ob_get_clean();
	}

	/**
	 * @return bool
	 */
	public function is_has_start(): bool {
		$has_start       = $this->has_start;
		$this->has_start = false;

		return $has_start;
	}

}
