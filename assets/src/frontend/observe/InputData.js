import ConditionChecker from '../conditional.logic/ConditionChecker';
import SignalHiddenArray from '../signals/SignalHiddenArray';
import SignalCheckbox from '../signals/SignalCheckbox';
import SignalRadio from '../signals/SignalRadio';
import SignalText from '../signals/SignalText';
import SignalRepeater from '../signals/SignalRepeater';
import { createReport, getParsedName } from './functions';
import SignalCalculated from '../signals/SignalCalculated';
import SignalMultiSelect from '../signals/SignalMultiSelect';
import SignalFile from '../signals/SignalFile';
import ReactiveVar from '../ReactiveVar';
import SignalWysiwyg from '../signals/SignalWysiwyg';
import SignalRange from '../signals/SignalRange';
import LoadingReactiveVar from '../reactive/LoadingReactiveVar';
import AdvancedReporting from '../reporting/AdvancedReporting';

/**
 * @type {(BaseSignal)[]}
 */
const signalTypes = [
	new SignalRange(),
	new SignalWysiwyg(),
	new SignalFile(),
	new SignalMultiSelect(),
	new SignalCheckbox(),
	new SignalRadio(),
	new SignalRepeater(),
	new SignalCalculated(),
	new SignalHiddenArray(),
	new SignalText(),
];

class InputData {

	constructor() {
		this.rawName            = '';
		this.name               = '';
		this.comment            = false;
		this.nodes              = [];
		this.relatedConditional = [];

		/**
		 * @type {ReactiveVar}
		 */
		this.value = null;
		this.calcValue = null;

		/**
		 * @type {ConditionChecker}
		 */
		this.checker = this.conditionChecker();

		/**
		 * @type {AdvancedReporting|BrowserReporting}
		 */
		this.reporting = null;

		/**
		 * @type {Observable}
		 */
		this.root = null;

		/**
		 * @type {PageState}
		 */
		this.page = null;

		this.loading = new LoadingReactiveVar( false );
		this.loading.make();
	}

	isSupported( node ) {
		return true;
	}

	addListeners() {
		const [ node ] = this.nodes;

		node.addEventListener( 'input', event => {
			this.value.current = event.target.value;
		} );
	}

	makeReactive() {
		this.onObserve();
		this.addListeners();
		this.setValue();

		this.value.make();
	}

	onChange() {
		this.calcValue = this.value.current;

		// apply changes in DOM
		this.callable.runSignal();

		// show errors
		this.reporting.validateWithNoticeDebounced();
	}

	watch( callable ) {
		this.value.watch( callable );
	}

	/**
	 * @param inputData {InputData}
	 */
	merge( inputData ) {
		this.nodes.push( ...inputData.getNode() );
	}

	setValue() {
		if ( this.isArray() ) {
			this.value.current = Array.from( this.nodes ).
				map( ( { value } ) => value );
		}
		else {
			this.value.current = this.nodes[ 0 ]?.value;
		}
	}

	setNode( node ) {
		this.nodes   = [ node ];
		this.rawName = node.name ?? '';
		this.name    = getParsedName( this.rawName );
	}

	/**
	 * Runs once in lifecycle.
	 */
	onObserve() {
		this.value     = new ReactiveVar( null );
		const [ node ] = this.nodes;

		/**
		 * Save link to this object
		 * @type {InputData}
		 */
		node.jfbSync = this;

		/**
		 * @type {BaseSignal}
		 */
		this.callable = signalTypes.find(
			( type ) => type.isSupported( node, this ),
		);
		this.callable.setInput( this );

		this.reporting = createReport( this );

		this.loading.watch( () => this.onChangeLoading() );
	}

	onChangeLoading() {
		this.getSubmit().lockState.current = this.loading.current;

		const [ node ] = this.nodes;
		const wrapper  = node.closest( '.jet-form-builder-row' );

		wrapper.classList.toggle( 'is-loading', this.loading.current );
	}

	/**
	 * @param observable {Observable}
	 */
	setRoot( observable ) {
		this.root = observable;
	}

	/**
	 * By default it runs only if repeater item was removed
	 */
	onRemove() {
	}

	/**
	 * @private
	 * @returns {ConditionChecker}
	 */
	conditionChecker() {
		return new ConditionChecker();
	}

	/**
	 * @returns {string}
	 */
	getName() {
		return this.name;
	}

	/**
	 * @returns {array|string}
	 */
	getValue() {
		return this.value.current;
	}

	/**
	 * @returns {array}
	 */
	getNode() {
		return this.nodes;
	}

	/**
	 * @returns {boolean}
	 */
	isArray() {
		return this.rawName.includes( '[]' );
	}

	/**
	 * @return {*}
	 */
	valueType() {
		return String;
	}

	/**
	 * @returns {FormSubmit}
	 */
	getSubmit() {
		return this.getRoot().form;
	}

	/**
	 * @returns {Observable}
	 */
	getRoot() {
		return this.root?.parent?.root ?? this.root;
	}

	/**
	 * @param page {PageState}
	 */
	setPage( page ) {
		this.page = page;

		this.watch( () => page.updateState() );
	}
}

export default InputData;