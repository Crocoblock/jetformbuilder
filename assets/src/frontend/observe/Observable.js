import { createInput } from './functions';
import {
	createConditionalBlock,
	createMultiStep,
} from '../conditional.logic/functions';
import FormSubmit from '../submit.logic/FormSubmit';
import {
	iterateJfbComments,
	observeComment,
	queryByAttrValue,
	replaceAttrs,
	macrosPrefix, observeMacroAttr,
} from '../macro/functions';

class Observable {
	constructor( parent = null ) {
		/**
		 * @type {RepeaterData}
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
		 * @type {FormSubmit}
		 */
		this.form = null;

		/**
		 * @type {MultiStepState}
		 */
		this.multistep = null;

		/**
		 * @type {HTMLElement|HTMLFormElement}
		 */
		this.rootNode = null;
		this.isObserved = false;
	}

	observe( root ) {
		if ( this.isObserved ) {
			return;
		}
		this.isObserved = true;
		this.rootNode   = root;

		this.initSubmitHandler();

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

		this.initMacros();
	}

	initFields() {
		for ( const formElement of this.rootNode.querySelectorAll(
			'[data-jfb-sync]',
		) ) {
			this.pushData( createInput( formElement, this ) );
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

	initMacros() {
		for (
			const comment of iterateJfbComments( this.rootNode )
			) {
			observeComment( comment, this );
		}

		const nodes = queryByAttrValue( this.rootNode, macrosPrefix() );

		for ( const node of nodes ) {
			for ( const replaceAttr of replaceAttrs ) {
				observeMacroAttr( node, replaceAttr, this );
			}
		}
	}

	initSubmitHandler() {
		// check is current object related for global form element
		if ( this.parent ) {
			return;
		}

		this.form = new FormSubmit( this );
	}

	inputsAreValid() {
		for ( const inputName in this.dataInputs ) {
			if ( !this.dataInputs.hasOwnProperty( inputName ) ) {
				continue;
			}
			const input = this.getInput( inputName );

			if ( !input.reporting.validate() ) {
				return false;
			}
		}

		return true;
	}

	watch( fieldName, callable ) {
		const input = this.getInput( fieldName );

		if ( input ) {
			input.watch( callable );

			return;
		}

		console.error(
			`dataInputs in Observable don\'t have ${ fieldName } field`,
		);
	}

	makeReactiveProxy() {
		for ( const fieldName in this.dataInputs ) {
			if ( !this.dataInputs.hasOwnProperty( fieldName ) ) {
				continue;
			}
			const current = this.getInput( fieldName );
			current.makeReactive();

			current.watch( () => current.onChange() );

			if ( this.parent ) {
				current.watch( () => {
					this.parent.value.notify();
				} );
			}

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

	/**
	 * @returns {array<InputData>}
	 */
	getInputs() {
		return this.dataInputs;
	}

	/**
	 * @param fieldName
	 * @returns {null|InputData}
	 */
	getInput( fieldName ) {
		if ( this.dataInputs.hasOwnProperty( fieldName ) ) {
			return this.dataInputs[ fieldName ];
		}
		const root = this.parent?.root ?? null;

		if ( !root ) {
			return null;
		}

		if ( root.dataInputs.hasOwnProperty( fieldName ) ) {
			return root.dataInputs[ fieldName ];
		}

		return null;
	}
}

export default Observable;