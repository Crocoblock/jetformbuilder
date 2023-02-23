import LoadingReactiveVar from '../reactive/LoadingReactiveVar';
import AjaxSubmit from './AjaxSubmit';
import ReloadSubmit from './ReloadSubmit';
import { focusOnInvalidInput } from '../functions';
import { populateInputs } from '../inputs/functions';

/**
 * @param observable {Observable}
 * @constructor
 */
function FormSubmit( observable ) {

	this.observable = observable;
	this.lockState  = new LoadingReactiveVar( false );
	this.lockState.make();
	this.autoFocus = window.JetFormBuilderSettings?.auto_focus;

	/**
	 * @param event {Event}
	 */
	this.onSubmit = function ( event ) {
		event.preventDefault();

		this.submit();
	};

	this.submit = function () {
		this.observable.inputsAreValid().then( () => {
			this.clearErrors();
			this.toggle();

			this.submitter.submit();
		} ).catch( () => {
			this.autoFocus && focusOnInvalidInput(
				populateInputs( this.observable.getInputs() ),
			);
		} );
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

	this.onEndSubmit = function ( callable ) {
		this.submitter.hasOwnProperty( 'status' )
		? this.submitter.status.watch( callable )
		: this.submitter.onFailSubmit( callable );
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