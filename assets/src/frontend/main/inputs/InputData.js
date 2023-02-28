import LoadingReactiveVar from '../reactive/LoadingReactiveVar';
import ReactiveVar from '../reactive/ReactiveVar';
import ReactiveHook from '../reactive/ReactiveHook';
import { getSignal } from '../signals/functions';
import { createReport } from '../reporting/functions';
import { getParsedName } from './functions';
import { getOffsetTop, setAttrs, isVisible } from '../functions';
import { STRICT_MODE } from '../signals/BaseSignal';

const { doAction } = JetPlugins.hooks;

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
 * @property {null|ReactiveHook} enterKey
 * @property {null|string} inputType
 *
 * @constructor
 */
function InputData() {
	this.rawName       = '';
	this.name          = '';
	this.comment       = false;
	this.nodes         = [];
	this.attrs         = {};
	this.enterKey      = null;
	this.inputType     = null;
	this.offsetOnFocus = 75;

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

	/**
	 * @since 3.0.1
	 */
	!STRICT_MODE && jQuery( node ).on( 'change', event => {
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
	this.calcValue = this.value.current;

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

	setAttrs( this );

	this.reporting = createReport( this );

	this.loading.watch( () => this.onChangeLoading() );

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
 * @param callable {Function|mixed}
 */
InputData.prototype.beforeSubmit = function ( callable ) {
	this.getSubmit().submitter.promise( callable );
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

/**
 * For insert errors in advanced validation mode
 * @returns {*}
 */
InputData.prototype.getWrapperNode = function () {
	return this.nodes[ 0 ].closest( '.jet-form-builder-row' );
};

InputData.prototype.handleEnterKey = function ( event ) {
	// not enter
	if ( +event.keyCode !== 13 ) {
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
 * @returns {boolean}
 */
InputData.prototype.hasAutoScroll = function () {
	return true;
};

/**
 * @returns {HTMLInputElement|HTMLElement}
 */
InputData.prototype.getReportingNode = function () {
	return this.nodes[ 0 ];
};

export default InputData;