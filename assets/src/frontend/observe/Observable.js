import ConditionalBlock from '../conditional.logic/ConditionalBlock';
import { createInput } from './functions';

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
		this.isObserved = false;
	}

	observe( root ) {
		if ( this.isObserved ) {
			return;
		}
		this.parseDOM( root );
		this.makeReactiveProxy();
		this.initConditionalBlocks();
	}

	parseDOM( root ) {
		for ( const formElement of root.querySelectorAll( '[data-jfb-sync]' ) ) {
			this.pushData( createInput( formElement, this ) );
		}

		for ( const node of root.querySelectorAll( `[data-jfb-conditional]` ) ) {
			const block = new ConditionalBlock( node, this );
			this.conditionalBlocks.push( block );

			for ( const { field } of block.getConditions() ) {
				this.addConditionalListener( field, this.conditionalBlocks.length - 1 );
			}
		}

		for ( const name in this.dataInputs ) {
			if ( ! this.dataInputs.hasOwnProperty( name ) ) {
				continue;
			}
			const current = this.dataInputs[ name ];

			current.watch( current.onChange.bind( current ) );
			current.watch( () => this.handleConditions( current ) );
		}

		this.isObserved = true;
	}

	initConditionalBlocks() {
		this.conditionalBlocks.forEach( block => block.calculate() );
	}

	watch( fieldName, callable ) {
		if ( this.dataInputs.hasOwnProperty( fieldName ) ) {
			this.dataInputs[ fieldName ].watch( callable );
		} else {
			console.error( `dataInputs in Observable don\'t have ${ fieldName } field` );
		}
	}

	addConditionalListener( fieldName, index ) {
		if ( ! this.dataInputs.hasOwnProperty( fieldName ) ) {
			return;
		}
		this.dataInputs[ fieldName ].pushConditionalIndex( index );
	}

	makeReactiveProxy() {
		for ( const fieldName in this.dataInputs ) {
			if ( ! this.dataInputs.hasOwnProperty( fieldName ) ) {
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
	 * @param input {InputData}
	 */
	handleConditions( input ) {
		const blocks = this.getConditionalBlocks( input );

		for ( const block of blocks ) {
			block.calculate();
		}
	}

	/**
	 * @param input {InputData}
	 */
	getConditionalBlocks( input ) {
		const conditionalIndexes = input.getConditionalIndexes();
		const blocks = [];

		for ( let index in this.conditionalBlocks ) {
			if ( ! this.conditionalBlocks.hasOwnProperty( + index ) || ! conditionalIndexes.includes( + index ) ) {
				continue;
			}
			blocks.push( this.conditionalBlocks[ + index ] );
		}

		return blocks;
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

		const [ findNode ] = findInput.getNode();
		const [ inputNode ] = inputData.getNode();

		if ( findNode.type !== inputNode.type ) {
			return;
		}

		findInput.merge( inputData );
	}
}

export default Observable;