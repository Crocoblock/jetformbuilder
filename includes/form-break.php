<?php


namespace Jet_Form_Builder;


use Jet_Form_Builder\Classes\Get_Template_Trait;
use Jet_Form_Builder\Classes\Tools;

class Form_Break {

	use Get_Template_Trait;

	private $pages = 0;
	private $form_breaks = array();
	private $count_form_breaks = 0;
	private $current_page = 1;
	private $current_form_break = 0;
	private $is_editor = false;
	private $progress_type = 'default';
	private $last_progress_step = array();
	private $last_break;

	public function get_pages() {
		return $this->pages;
	}

	public function get_breaks() {
		return $this->form_breaks;
	}

	public function get_count_breaks() {
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

		$this->is_editor         = true;
		$this->pages             = 2;
		$this->form_breaks       = array(
			array(
				'label' => 'Start Page'
			),
			array(
				'label' => 'Second Page'
			),
			array(
				'label' => 'Last Page'
			),
		);
		$this->count_form_breaks = count( $this->form_breaks );

		return $this;
	}


	public function last_page_from_break( $mode ) {
		$this->get_last_page_from_break = $mode;

		return $this;
	}

	public function before_get( Blocks\Types\Base $instance ) {
		if ( 'progress-bar' !== $instance->get_name() ) {
			return;
		}
	}

	public function set_pages( $blocks ) {
		$count_blocks = count( $blocks );

		foreach ( $blocks as $index => $field ) {
			if ( ! Live_Form::instance()->is_field( $field, 'form-break' ) ) {
				continue;
			}
			$form_break = Plugin::instance()->blocks->get_field_attrs( $field['blockName'], $field['attrs'] );

			if ( $index + 1 === $count_blocks ) {
				$this->last_break = $form_break;
				unset( $blocks[ $index ] );
				continue;
			}

			$this->pages ++;
			$this->form_breaks[] = $form_break;
		}
		$this->count_form_breaks = count( $this->form_breaks );

		return $blocks;
	}

	public function set_last_page( $last_page ) {
		if ( empty( $this->form_breaks ) ) {
			return;
		}

		if ( $this->get_last_page_from_break ) {
			$this->form_breaks[] = $this->last_break ? $this->last_break : array( 'label' => __( 'Last Page' ) );
		} elseif ( $last_page ) {
			$this->form_breaks[] = $last_page;
		}

	}

	public function with_progress_wrapper( $content ) {
		$type = $this->progress_type ?: 'default';

		$classes = array(
			"jet-form-builder-progress-pages",
			"jfb-progress-type--$type"
		);

		return sprintf(
			'<div class="%1$s">%2$s</div>',
			implode( ' ', $classes ),
			$content
		);
	}

	public function render_default_progress() {
		ob_start();
		include Tools::get_global_template( 'fields/progress-bar.php' );

		return ob_get_clean();
	}

	public function render_progress( $type = '' ) {
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

		return $this->with_progress_wrapper( $content );
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
		} elseif ( - 1 === $index ) {
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

		if ( 0 >= $this->pages ) {
			return '';
		}

		if ( $force_first ) {
			$this->current_page = 1;
		} else {
			$this->current_page ++;
		}
		$this->current_form_break ++;

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

		if ( ! $is_last && ! Live_Form::instance()->is_field( $field, 'form-break' ) ) {
			return '';
		}

		ob_start();
		do_action( 'jet-form-builder/before-page-end', $this );

		include Tools::get_global_template( 'common/end-page.php' );

		do_action( 'jet-form-builder/after-page-end', $this );

		return ob_get_clean();
	}

}