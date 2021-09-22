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

	public function set_pages( $blocks ) {
		$count_blocks       = count( $blocks );
		$break_after_submit = false;

		foreach ( $blocks as $index => $field ) {
			if ( ! Live_Form::instance()->is_field( $field, 'form-break' ) ) {
				continue;
			}
			$form_break = Plugin::instance()->blocks->get_field_attrs( $field['blockName'], $field['attrs'] );

			if ( $index + 1 === $count_blocks ) {
				$break_after_submit = $form_break;
				unset( $blocks[ $index ] );
				continue;
			}

			$this->pages ++;
			$this->form_breaks[] = $form_break;
		}
		if ( ! empty( $this->form_breaks ) ) {
			$this->form_breaks[] = $break_after_submit ? $break_after_submit : array( 'label' => __( 'Last Page' ) );
		}
		$this->count_form_breaks = count( $this->form_breaks );


		return $this;
	}

	public function render_progress() {
		ob_start();
		include Tools::get_global_template( 'fields/progress-pages-field.php' );

		return ob_get_clean();
	}

	public function get_progress_item_class( $index ) {
		$classes = array( 'jet-form-builder-progress-pages__item--wrapper' );

		if ( $index === $this->current_page ) {
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