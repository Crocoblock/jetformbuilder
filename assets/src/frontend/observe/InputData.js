import ConditionChecker from '../conditional.logic/ConditionChecker';
import SignalHiddenArray from '../signals/SignalHiddenArray';
import SignalCheckbox from '../signals/SignalCheckbox';
import SignalRadio from '../signals/SignalRadio';
import SignalText from '../signals/SignalText';
import SignalRepeater from '../signals/SignalRepeater';
import { getParsedName } from './functions';
import SignalCalculated from '../signals/SignalCalculated';
import SignalMultiSelect from '../signals/SignalMultiSelect';
import SignalFile from '../signals/SignalFile';
import ReactiveVar from '../ReactiveVar';

/**
 * @type {(BaseSignal)[]}
 */
const signalTypes = [
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

		this.value     = new ReactiveVar( null );
		this.calcValue = null;

		/**
		 * @type {ConditionChecker}
		 */
		this.checker = this.conditionChecker();
		/**
		 * @type {Observable}
		 */
		this.root = null;
	}

	isSupported( node ) {
		return true;
	}

	/**
	 * @returns {boolean}
	 */
	isRequired() {
		return !!this.nodes[ 0 ]?.required;
	}

	/**
	 * @returns {boolean}
	 */
	isValid() {
		return this.nodes[ 0 ].checkValidity();
	}

	report() {
		this.nodes[ 0 ].reportValidity();
	}

	addListener() {
		const [ node ] = this.nodes;

		node.addEventListener( 'input', event => {
			this.value.current = event.target.value;
		} );
	}

	makeReactive() {
		this.addListener();
		this.setValue();
		this.setComment();

		this.value.make();
	}

	onChange() {
		this.calcValue = this.value.current;
		const callable = signalTypes.find(
			( type ) => type.isSupported( this ),
		);

		callable.runSignal( this );
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
		this.rawName = node.name;
		this.name    = getParsedName( this.rawName );

		/**
		 * Save link to this object
		 * @type {InputData}
		 */
		node.jfbSync = this;
	}

	/**
	 * @param observable {Observable}
	 */
	setRoot( observable ) {
		this.root = observable;
	}

	setComment() {
		this.comment   = document.createComment( this.name );
		const [ node ] = this.nodes;

		node.parentElement.insertBefore( this.comment, node );
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
}

export default InputData;