import { createInput } from './functions';
import {
	createConditionalBlock,
	createMultiStep,
} from '../conditional.logic/functions';

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
		 * @type {MultiStepState}
		 */
		this.multistep = null;

		/**
		 * @type {HTMLElement|HTMLFormElement}
		 */
		this.rootNode   = null;
		this.isObserved = false;
	}

	observe( root ) {
		if ( this.isObserved ) {
			return;
		}
		this.isObserved = true;
		this.rootNode   = root;

		/**
		 * Initialize dataInputs with fields.
		 * Without values
		 */
		this.initFields();

		/**
		 * Setup fields values and make them reactive
		 */
		this.makeReactiveProxy();

		/**
		 * Calculate conditional blocks, based on values
		 */
		this.initConditionalBlocks();

		this.initMultistep();

		this.initSubmitHandler();
	}

	initFields() {
		for ( const formElement of this.rootNode.querySelectorAll(
			'[data-jfb-sync]',
		) ) {
			this.pushData( createInput( formElement, this ) );
		}

		for ( const name in this.dataInputs ) {
			if ( !this.dataInputs.hasOwnProperty( name ) ) {
				continue;
			}
			const current = this.dataInputs[ name ];

			current.watch( () => current.onChange() );
		}
	}

	initConditionalBlocks() {
		for ( const node of this.rootNode.querySelectorAll(
			`[data-jfb-conditional]`,
		) ) {
			createConditionalBlock( node, this );
		}
	}

	initMultistep() {
		const multistep = createMultiStep( this );

		if ( !multistep.getPages()?.length ) {
			return;
		}

		this.multistep = multistep;
	}

	initSubmitHandler() {
		// check is current object related for global form element
		if ( this.parent ) {
			return;
		}


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
					return current.value.current;
				},
				set( newValue ) {
					current.value.current = newValue;
				},
			} );
		}
	}

	onRemove() {
		for ( const name in this.dataInputs ) {
			if ( !this.dataInputs.hasOwnProperty( name ) ) {
				continue;
			}
			this.dataInputs[ name ].onRemove();
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