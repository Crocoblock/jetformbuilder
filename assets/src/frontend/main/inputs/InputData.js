import LoadingReactiveVar from '../reactive/LoadingReactiveVar';
import ReactiveVar from '../reactive/ReactiveVar';
import { getSignal } from '../signals/functions';
import { createReport } from '../reporting/functions';
import { getParsedName } from './functions';
import { setAttrs } from '../functions';

const { doAction } = wp.hooks;

/**
 * @property {string} rawName
 * @property {string} name
 * @property {Node|boolean} comment
 * @property {HTMLInputElement|*[]} nodes
 * @property {ReactiveVar} value
 * @property {ConditionChecker|null} checker
 * @property {*} calcValue
 * @property {AdvancedReporting|BrowserReporting} reporting
 * @property {Observable} root
 * @property {PageState} page
 * @property {LoadingReactiveVar} loading
 * @property {Object<ReactiveVar>} attrs
 * @property {boolean} isRequired
 *
 * @constructor
 */
function InputData() {
	this.rawName = '';
	this.name    = '';
	this.comment = false;
	this.nodes   = [];
	this.attrs   = {};

	/**
	 * @type {ReactiveVar}
	 */
	this.value = this.getReactive();
	this.value.watch( this.onChange.bind( this ) );

	this.isRequired = false;
	this.calcValue  = null;

	/**
	 * @type {AdvancedReporting|BrowserReporting}
	 */
	this.reporting = null;

	this.checker = null;

	/**
	 * @type {Observable}
	 */
	this.root = null;

	this.loading = new LoadingReactiveVar( false );
	this.loading.make();
}

InputData.prototype.attrs        = {};
InputData.prototype.isSupported  = function ( node ) {
	return true;
};
InputData.prototype.addListeners = function () {
	const [ node ] = this.nodes;

	node.addEventListener( 'input', event => {
		this.value.current = event.target.value;
	} );

	node.addEventListener( 'blur', event => {
		this.reportOnBlur();
	} );
};
InputData.prototype.makeReactive = function () {
	this.onObserve();
	this.addListeners();
	this.setValue();

	this.value.make();

	doAction( 'jet.fb.input.makeReactive', this );
};
InputData.prototype.onChange     = function () {
	this.calcValue = this.value.current;

	if ( this.callable ) {
		// apply changes in DOM
		this.callable.runSignal();
	}

	// show errors
	this.report();
};
InputData.prototype.report       = function () {
	this.reporting.validateOnChange();
};
InputData.prototype.reportOnBlur = function () {
	this.reporting.validateOnBlur();
};
/**
 * @param callable
 * @returns {(function(): *|*[])|*}
 */
InputData.prototype.watch = function ( callable ) {
	return this.value.watch( callable );
};
InputData.prototype.watchValidity = function ( callable ) {
	return this.reporting.validityState.watch( callable );
};
/**
 * @param callable
 * @returns {(function(): *|*[])|*}
 */
InputData.prototype.sanitize = function ( callable ) {
	return this.value.sanitize( callable );
};
/**
 * @param inputData {InputData}
 */
InputData.prototype.merge = function ( inputData ) {
	this.nodes = [ ...inputData.getNode() ];
};
InputData.prototype.setValue = function () {
	if ( this.isArray() ) {
		this.value.current = Array.from( this.nodes ).
			map( ( { value } ) => value );
	}
	else {
		this.value.current = this.nodes[ 0 ]?.value;
	}
	this.calcValue = this.value.current;
};
InputData.prototype.setNode  = function ( node ) {
	this.nodes   = [ node ];
	this.rawName = node.name ?? '';
	this.name    = getParsedName( this.rawName );
};
/**
 * Runs once in lifecycle.
 */
InputData.prototype.onObserve = function () {
	const [ node ] = this.nodes;

	/**
	 * Save link to this object
	 * @type {InputData}
	 */
	node.jfbSync = this;

	this.isRequired = this.checkIsRequired();

	this.callable = getSignal( node, this );
	this.callable.setInput( this );

	setAttrs( this );

	this.reporting = createReport( this );

	this.loading.watch( () => this.onChangeLoading() );

	if (
		// is ajax
		!this.getSubmit().submitter.hasOwnProperty( 'status' ) ||
		this.root?.parent
	) {
		return;
	}

	this.getSubmit().submitter.watchReset( () => this.onClear() );
};
InputData.prototype.onChangeLoading = function () {
	this.getSubmit().lockState.current = this.loading.current;

	const [ node ] = this.nodes;
	const wrapper  = node.closest( '.jet-form-builder-row' );

	node.readOnly = this.loading.current;
	wrapper.classList.toggle( 'is-loading', this.loading.current );
};
/**
 * @param observable {Observable}
 */
InputData.prototype.setRoot = function ( observable ) {
	this.root = observable;
};
/**
 * By default it runs only if repeater item was removed
 */
InputData.prototype.onRemove = function () {
};
/**
 * @returns {string}
 */
InputData.prototype.getName = function () {
	return this.name;
};
/**
 * @returns {array|string}
 */
InputData.prototype.getValue = function () {
	return this.value.current;
};
/**
 * @returns {array}
 */
InputData.prototype.getNode = function () {
	return this.nodes;
};
/**
 * @returns {boolean}
 */
InputData.prototype.isArray = function () {
	return this.rawName.includes( '[]' );
};
/**
 * @return {*}
 */
InputData.prototype.valueType = function () {
	return String;
};
/**
 * @returns {FormSubmit}
 */
InputData.prototype.getSubmit = function () {
	return this.getRoot().form;
};
/**
 * @returns {Observable}
 */
InputData.prototype.getRoot = function () {
	return this.root?.parent?.root ?? this.root;
};

InputData.prototype.isVisible = function () {
	const [ node ] = this.nodes;

	return (
		node?.isConnected
	);
};

InputData.prototype.onClear = function () {
	this.silenceSet( null );
};

InputData.prototype.getReactive = function () {
	return new ReactiveVar();
};

InputData.prototype.checkIsRequired = function () {
	const [ node ] = this.nodes;

	return node.required ?? !!node.dataset.required?.length;
};

InputData.prototype.silenceSet = function ( value ) {
	/**
	 * Related to issue
	 * @link https://github.com/Crocoblock/issues-tracker/issues/1261#issuecomment-1293290291
	 */
	const tempReport = this.report.bind( this );

	this.report = () => {};

	this.value.current = value;

	this.report = tempReport;
};

InputData.prototype.silenceNotify = function () {
	const tempReport = this.report.bind( this );

	this.report = () => {};

	this.value.notify();

	this.report = tempReport;
};

/**
 * @return {boolean}
 */
InputData.prototype.hasParent = function () {
	return !!this.root?.parent;
};

export default InputData;