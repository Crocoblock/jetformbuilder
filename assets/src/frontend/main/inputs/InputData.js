import LoadingReactiveVar from '../reactive/LoadingReactiveVar';
import ReactiveVar from '../reactive/ReactiveVar';
import ReactiveHook from '../reactive/ReactiveHook';
import { getSignal } from '../signals/functions';
import { createReport } from '../reporting/functions';
import { getParsedName } from './functions';
import { getOffsetTop, isVisible } from '../functions';
import { STRICT_MODE } from '../signals/BaseSignal';

const { doAction } = JetPlugins.hooks;

/**
 * @typedef {InputData}
 *
 * @property {string}                             rawName    Name of html field
 *                                                           including special
 *                                                           characters
 * @property {string}                             name       Prepared name of
 *                                                           the field
 * @property {HTMLInputElement|*[]}               nodes      Related nodes
 * @property {ReactiveVar}                        value      Reactive value
 * @property {ConditionChecker|null}              checker    Condition checker
 *                                                           used by
 *                                                           Conditional Block
 * @property {*}                                  calcValue  Calculated value
 *                                                           used by Calculated
 *                                                           Field
 * @property {AdvancedReporting|BrowserReporting} reporting  Reporting object
 *                                                           for validation and
 *                                                           showing errors
 * @property {Observable}                         root       Nearest observable
 *                                                           instance, could be
 *                                                           row of the
 *                                                           repeater
 * @property {PageState}                          page       Related page in
 *                                                           multistep form
 * @property {LoadingReactiveVar}                 loading    Reactive var to
 *                                                           manage visual
 *                                                           state of the field
 * @property {Object<ReactiveVar>}                attrs      Object with
 *                                                           reactive attributes
 * @property {boolean}                            isRequired Is required field
 *                                                           or not
 * @property {null|ReactiveHook}                  enterKey   Used for handling
 *                                                           inner hooks on
 *                                                           press Enter button
 * @property {null|string}                        inputType  Type identifier of
 *                                                           the field
 */
function InputData() {
	this.rawName = '';
	this.name    = '';
	this.comment = false;
	/**
	 * @type {HTMLElement[]|HTMLInputElement[]}
	 */
	this.nodes = [];
	this.attrs         = {};
	this.enterKey      = null;
	this.inputType     = null;
	this.offsetOnFocus = 75;

	/**
	 * Path from top of form to current field name
	 * Ex.: [ 'repeater_name', 0, 'text_field' ]
	 * Where:
	 *  - 'repeater_name': name of repeater, where current field is placed
	 *  - 0: index of repeater row, where current field is placed
	 *  - 'text_field': name of current field name
	 * @type {Array<string | number>}
	 */
	this.path = [];

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

	/**
	 * In CheckboxData case we have just main sanitizer, without callable.
	 * So we set .calcValue inside callable.runSignal()
	 *
	 * And to prevent resetting .calcValue by onChange
	 * set this property to FALSE.
	 * @type {boolean}
	 */
	this.isResetCalcValue = true;
}

InputData.prototype.attrs = {};

/**
 * @param  node {HTMLElement}
 * @return {boolean}
 */
// eslint-disable-next-line no-unused-vars
InputData.prototype.isSupported = function ( node ) {
	return false;
};
InputData.prototype.addListeners = function () {
	const [ node ] = this.nodes;

	/**
	 * Related to issue
	 * @see https://github.com/Crocoblock/issues-tracker/issues/9973#issuecomment-2182625396
	 */
	var timer = null;

	node.addEventListener( 'input', event => {
		this.value.current = event.target.value;

		var _this = this;

		clearTimeout( timer );

		timer = setTimeout( function() {
			_this.reportOnChange();
		}, 450 );
	} );

	node.addEventListener( 'blur', () => {
		this.reportOnBlur();
	} );

	/**
	 * @since 3.0.1
	 */
	// eslint-disable-next-line no-unused-expressions
	!STRICT_MODE && jQuery( node ).on( 'change', event => {
		// eslint-disable-next-line eqeqeq
		if ( this.value.current == event.target.value ) {
			return;
		}
		this.callable.lockTrigger();
		this.value.current = event.target.value;
		this.callable.unlockTrigger();
	} );

	if ( 'input' !== this.inputType ) {
		return;
	}

	this.enterKey = new ReactiveHook();
	node.addEventListener( 'keydown', this.handleEnterKey.bind( this ) );
};
InputData.prototype.makeReactive = function () {
	this.onObserve();
	this.addListeners();
	this.setValue();
	this.initNotifyValue();

	this.value.make();

	doAction( 'jet.fb.input.makeReactive', this );
};
InputData.prototype.onChange     = function ( prevValue ) {
	if ( this.isResetCalcValue ) {
		this.calcValue = this.value.current;
	}

	// apply changes in DOM
	this?.callable?.run( prevValue );

	// show errors
	this.report();
};
InputData.prototype.report       = function () {
	this.reporting.validateOnChange();
};
InputData.prototype.reportOnBlur = function () {
	this.reporting.validateOnBlur();
};
InputData.prototype.reportOnChange = function () {
	this.reporting.validateOnBlur();
};
/**
 * @param  callable
 * @return {(function(): *|*[])|*}
 */
InputData.prototype.watch = function ( callable ) {
	return this.value.watch( callable );
};
InputData.prototype.watchValidity = function ( callable ) {
	return this.reporting.validityState.watch( callable );
};
/**
 * @param  callable
 * @return {(function(): *|*[])|*}
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
	let fieldValue;
	if ( this.isArray() ) {
		fieldValue = Array.from( this.nodes ).
			map( ( { value } ) => value );
	}
	else {
		fieldValue = this.nodes[ 0 ]?.value;
	}
	this.calcValue     = fieldValue;
	this.value.current = fieldValue;
};
/**
 * @param node {HTMLElement|HTMLInputElement}
 */
InputData.prototype.setNode = function ( node ) {
	this.nodes   = [ node ];
	this.rawName = node.name ?? '';
	this.name    = getParsedName( this.rawName );

	this.inputType = node.nodeName.toLowerCase();
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

	this.reporting = createReport( this );

	this.loading.watch( () => this.onChangeLoading() );

	this.path = [ ...this.getParentPath(), this.name ];

	if (
		// is ajax
		!this.getSubmit().submitter.hasOwnProperty( 'status' ) ||
		this.hasParent()
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
 * @return {string}
 */
InputData.prototype.getName = function () {
	return this.name;
};
/**
 * @return {Array | string | boolean}
 */
InputData.prototype.getValue = function () {
	return this.value.current;
};
/**
 * @return {Array}
 */
InputData.prototype.getNode = function () {
	return this.nodes;
};
/**
 * @return {boolean}
 */
InputData.prototype.isArray = function () {
	return this.rawName.includes( '[]' );
};
/**
 * @param callable     {Function|mixed}
 * @param inputContext {InputData|Boolean}
 */
InputData.prototype.beforeSubmit = function ( callable, inputContext = false ) {
	this.getSubmit().submitter.promise( callable, inputContext );
};
/**
 * @return {FormSubmit}
 */
InputData.prototype.getSubmit = function () {
	return this.getRoot().form;
};
/**
 * @return {Observable}
 */
InputData.prototype.getRoot = function () {
	if ( !this.root?.parent ) {
		return this.root;
	}
	return this.root.parent.getRoot();
};

InputData.prototype.isVisible = function () {
	const wrapper = this.getWrapperNode();

	return isVisible( wrapper );
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
	 * @see https://github.com/Crocoblock/issues-tracker/issues/1261#issuecomment-1293290291
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

/**
 * For insert errors in advanced validation mode
 * @return {*}
 */
InputData.prototype.getWrapperNode = function () {
	return this.nodes[ 0 ].closest( '.jet-form-builder-row' );
};

InputData.prototype.handleEnterKey = function ( event ) {
	if ( event.key !== 'Enter' || // not enter key
		!this.enterKey || // handling enter key is disabled
		event.shiftKey || // the shift key was pressed
		event.isComposing // if the event is fired within a composition session
	) {
		return;
	}

	event.preventDefault();

	this.onEnterKey();
};

InputData.prototype.onEnterKey = function () {
	const canSubmit = this.enterKey.applyFilters( true );

	if ( canSubmit ) {
		this.getSubmit().submit();
	}
};

InputData.prototype.initNotifyValue = function () {
	this.silenceNotify();
};

InputData.prototype.onFocus  = function () {
	this.scrollTo();
	this.focusRaw();
};
InputData.prototype.focusRaw = function () {
	const [ node ] = this.nodes;

	/**
	 * @see https://github.com/Crocoblock/issues-tracker/issues/2265#issuecomment-1447988718
	 */
	if ( [ 'date', 'time', 'datetime-local' ].includes( node.type ) ) {
		return;
	}

	node?.focus( { preventScroll: true } );
};
InputData.prototype.scrollTo = function () {
	const wrapper = this.getWrapperNode();

	window.scrollTo( {
		top: getOffsetTop( wrapper ) - this.offsetOnFocus,
		behavior: 'smooth',
	} );
};

/**
 * @return {ReportingContext}
 */
InputData.prototype.getContext = function () {
	return this.root.getContext();
};

/**
 * @return {boolean|InputData[]}
 */
InputData.prototype.populateInner = function () {
	return false;
};

/**
 * Executed with default browser validation
 *
 * @return {boolean}
 */
InputData.prototype.hasAutoScroll = function () {
	return true;
};

/**
 * @return {HTMLInputElement|HTMLElement}
 */
InputData.prototype.getReportingNode = function () {
	return this.nodes[ 0 ];
};

InputData.prototype.getParentPath = function () {
	if ( !this.root?.parent ) {
		return [];
	}

	/**
	 * @type {Array|Object}
	 */
	const value = this.root.parent.value.current;

	if ( 'object' !== typeof value ) {
		return [];
	}

	for ( const [ index, row ] of Object.entries( value ) ) {
		if ( row !== this.root ) {
			continue;
		}
		return [
			...this.root.parent.getParentPath(),
			this.root.parent.name,
			index,
		];
	}

	return [];
};

/**
 * Runs only once on window "load" event
 */
InputData.prototype.reQueryValue = function () {
	this.setValue();
	this.initNotifyValue();
};

/**
 * Runs on set Observable.value.current
 * @param value
 */
InputData.prototype.revertValue = function ( value ) {
	this.value.current = value;
};

export default InputData;