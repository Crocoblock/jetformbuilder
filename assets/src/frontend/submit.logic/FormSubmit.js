import AjaxSubmit from './AjaxSubmit';
import ReloadSubmit from './ReloadSubmit';
import ReactiveVar from '../ReactiveVar';

class FormSubmit {

	/**
	 * @param observable {Observable}
	 */
	constructor( observable ) {
		this.observable = observable;
		this.lockState  = new ReactiveVar( false );
		this.lockState.make();

		this.observable.rootNode.addEventListener(
			'submit',
			this.onSubmit.bind( this ),
		);

		/**
		 * @type {AjaxSubmit|ReloadSubmit}
		 */
		this.submitter = this.createSubmitter();

		this.handleButtons();
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
		this.lockState.current = !this.lockState.current;
		this.toggleLoading();
	}

	/**
	 * @private
	 */
	handleButtons() {
		/**
		 * @type {NodeListOf<Element>}
		 */
		const buttons = this.observable.rootNode.querySelectorAll(
			'.jet-form-builder__submit',
		);

		this.lockState.watch( () => {
			for ( const button of buttons ) {
				button.disabled = this.lockState.current;
			}
		} );
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

	lock() {
		this.lockState.current = true;
	}

	unlock() {
		this.lockState.current = false;
	}

	toggleLock() {
		this.lockState.current = !this.lockState.current;
	}
}

export default FormSubmit;