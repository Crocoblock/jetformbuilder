import LoadingReactiveVar from '../reactive/LoadingReactiveVar';
import AjaxSubmit from './AjaxSubmit';
import ReloadSubmit from './ReloadSubmit';

/**
 * @param observable {Observable}
 * @constructor
 */
function FormSubmit( observable ) {

	this.observable = observable;
	this.lockState  = new LoadingReactiveVar( false );
	this.lockState.make();

	/**
	 * @param event {Event}
	 */
	this.onSubmit = function ( event ) {
		event.preventDefault();

		this.submit();
	};

	this.submit = function () {
		if ( !this.observable.inputsAreValid() ) {
			return;
		}
		this.clearErrors();
		this.toggle();

		this.submitter.submit();
	};

	this.clearErrors = function () {
		const messages = this.observable.rootNode.querySelectorAll(
			'.jet-form-builder-messages-wrap',
		);

		for ( const message of messages ) {
			message.remove();
		}
	};

	this.toggle = function () {
		this.lockState.toggle();
		this.toggleLoading();
	};

	/**
	 * @private
	 */
	this.handleButtons = function () {
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
	};

	this.toggleLoading = function () {
		this.observable.rootNode.classList.toggle( 'is-loading' );
	};

	this.createSubmitter = function () {
		const { classList } = this.observable.rootNode;
		const isAjax        = classList.contains( 'submit-type-ajax' );

		return isAjax ? new AjaxSubmit( this ) : new ReloadSubmit( this );
	};

	this.getFormId = function () {
		const { rootNode } = this.observable;

		return +rootNode.dataset.formId;
	};

	this.observable.rootNode.addEventListener(
		'submit',
		( event ) => this.onSubmit( event ),
	);

	/**
	 * @type {AjaxSubmit|ReloadSubmit}
	 */
	this.submitter = this.createSubmitter();

	this.handleButtons();
}

export default FormSubmit;