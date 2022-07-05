import ConditionChecker from '../conditional.logic/ConditionChecker';
import SignalHiddenArray from '../signals/SignalHiddenArray';
import SignalCheckbox from '../signals/SignalCheckbox';
import SignalRadio from '../signals/SignalRadio';
import SignalText from '../signals/SignalText';
import SignalRepeater from '../signals/SignalRepeater';
import { getParsedName } from './functions';
import SignalCalculated from '../signals/SignalCalculated';

/**
 * @type {(BaseSignal)[]}
 */
const signalTypes = [
	new SignalHiddenArray(),
	new SignalCheckbox(),
	new SignalRadio(),
	new SignalRepeater(),
	new SignalCalculated(),
	new SignalText(),
];

class InputData {

	constructor() {
		this.signals = [];
		this.rawName = '';
		this.name = '';
		this.comment = false;
		this.nodes = [];
		this.relatedConditional = [];
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

	addListener() {
		const [ node ] = this.nodes;

		node.addEventListener( 'input', event => {
			this.value = event.target.value;
		} );
	}

	makeReactive() {
		this.addListener();
		this.setValue();
		this.setComment();

		let val = this.value;
		const self = this;

		Object.defineProperty( this, 'value', {
			get() {
				return val;
			},
			set( newVal ) {
				val = newVal;
				self.notify();
			},
		} );
	}

	onChange() {
		const callable = signalTypes.find( ( type ) => type.isSupported( this ) );

		callable.runSignal( this );
	}

	notify() {
		if ( ! this.signals?.length ) {
			return;
		}

		this.signals.forEach( signal => signal( this.name ) );
	}

	watch( callable ) {
		this.signals.push( callable.bind( this ) );
	}

	/**
	 * @param inputData {InputData}
	 */
	merge( inputData ) {
		this.nodes.push( ...inputData.getNode() );
	}

	setValue() {
		if ( this.isArray() ) {
			this.value = Array.from( this.nodes ).map( ( { value } ) => value );
		} else {
			this.value = this.nodes[ 0 ]?.value;
		}
	}

	setNode( node ) {
		this.nodes = [ node ];
		this.rawName = node.name;
		this.name = getParsedName( this.rawName );
	}


	/**
	 * @param observable {Observable}
	 */
	setRoot( observable ) {
		this.root = observable;
	}

	setComment() {
		this.comment = document.createComment( this.name );
		const [ node ] = this.nodes;

		node.parentElement.insertBefore( this.comment, node );
	}

	pushConditionalIndex( index ) {
		this.relatedConditional.push( + index );

		this.relatedConditional = [
			...new Set( this.relatedConditional ),
		];
	}

	getConditionalIndexes() {
		return this.relatedConditional ?? [];
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
		return this.value;
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