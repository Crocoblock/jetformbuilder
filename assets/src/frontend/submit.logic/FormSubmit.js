import AjaxSubmit from './AjaxSubmit';
import ReloadSubmit from './ReloadSubmit';

class FormSubmit {

	/**
	 * @param observable {Observable}
	 */
	constructor( observable ) {
		this.observable = observable;

		this.observable.rootNode.addEventListener(
			'submit',
			this.onSubmit.bind( this ),
		);

		/**
		 * @type {NodeListOf<Element>}
		 */
		this.buttons = this.observable.rootNode.querySelectorAll(
			'.jet-form-builder__submit',
		);

		/**
		 * @type {AjaxSubmit|ReloadSubmit}
		 */
		this.submitter = this.createSubmitter();
	}

	/**
	 * @param event {Event}
	 */
	onSubmit( event ) {
		event.preventDefault();

		this.submit();
	}

	submit() {
		if ( !this.observable.inputsAreValid() ) {
			return;
		}
		this.clearErrors();
		this.toggle();

		this.submitter.submit();
	}

	clearErrors() {
		const messages = this.observable.rootNode.querySelectorAll(
			'.jet-form-builder-messages-wrap',
		);

		for ( const message of messages ) {
			message.remove();
		}
	}

	toggle() {
		this.toggleLoading();
		this.toggleDisableButtons();
	}

	toggleDisableButtons() {
		for ( const button of this.buttons ) {
			button.disabled = !button.disabled;
		}
	}

	toggleLoading() {
		this.observable.rootNode.classList.toggle( 'is-loading' );
	}

	createSubmitter() {
		const { classList } = this.observable.rootNode;
		const isAjax        = classList.contains( 'submit-type-ajax' );

		return isAjax ? new AjaxSubmit( this ) : new ReloadSubmit( this );
	}

	getFormId() {
		const { rootNode } = this.observable;

		return +rootNode.dataset.formId;
	}

}

export default FormSubmit;