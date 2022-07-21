import ConditionalBlock from '../conditional.logic/ConditionalBlock';
import { createInput } from './functions';
import MultiStepState from '../multi.step/MultiStepState';

class Observable {
	constructor( parent = null ) {
		/**
		 * @type {Observable}
		 */
		this.parent = parent;
		/**
		 * {
		 *     [field_name]: {InputData}
		 * }
		 */
		this.dataInputs = {};
		this.data = {};
		/**
		 * [ ...ConditionalBlock ]
		 */
		this.conditionalBlocks = [];

		/**
		 * @type {MultiStepState}
		 */
		this.multistep = null;
		this.rootNode   = null;
		this.isObserved = false;
	}

	observe( root ) {
		if ( this.isObserved ) {
			return;
		}
		/**
		 * Initialize dataInputs with fields.
		 * Without values
		 */
		this.parseDOM();

		/**
		 * Setup fields values and make them reactive
		 */
		this.makeReactiveProxy();

		/**
		 * Calculate conditional blocks, based on values
		 */
		this.initConditionalBlocks();

		this.initMultistep();
	}

	parseDOM( root ) {
		this.rootNode = root;

		for ( const formElement of root.querySelectorAll(
			'[data-jfb-sync]',
		) ) {
			this.pushData( createInput( formElement, this ) );
		}

		for ( const node of root.querySelectorAll( `[data-jfb-conditional]` ) ) {
			const block = new ConditionalBlock( node, this );
			this.conditionalBlocks.push( block );

			block.observe();
		}

		for ( const name in this.dataInputs ) {
			if ( !this.dataInputs.hasOwnProperty( name ) ) {
				continue;
			}
			const current = this.dataInputs[ name ];

			current.watch( () => current.onChange() );
		}

		this.isObserved = true;
	}

	initConditionalBlocks() {
		this.conditionalBlocks.forEach( block => block.calculate() );
	}

	initMultistep() {
		this.multistep = new MultiStepState();
		this.multistep.setScope( this.rootNode );
	}

	watch( fieldName, callable ) {
		if ( this.dataInputs.hasOwnProperty( fieldName ) ) {
			this.dataInputs[ fieldName ].watch( callable );
		}
		else {
			console.error(
				`dataInputs in Observable don\'t have ${ fieldName } field`,
			);
		}
	}

	makeReactiveProxy() {
		for ( const fieldName in this.dataInputs ) {
			if ( !this.dataInputs.hasOwnProperty( fieldName ) ) {
				continue;
			}
			const current = this.dataInputs[ fieldName ];
			current.makeReactive();

			Object.defineProperty( this.data, fieldName, {
				get() {
					return current.value;
				},
				set( newValue ) {
					current.value = newValue;
				},
			} );
		}
	}

	/**
	 * @param inputData {InputData}
	 */
	pushData( inputData ) {
		const findInput = this.dataInputs[ inputData.getName() ] ?? false;

		if ( false === findInput ) {
			this.dataInputs[ inputData.getName() ] = inputData;

			return;
		}

		const [ findNode ]  = findInput.getNode();
		const [ inputNode ] = inputData.getNode();

		if ( findNode.type !== inputNode.type ) {
			return;
		}

		findInput.merge( inputData );
	}
}

export default Observable;