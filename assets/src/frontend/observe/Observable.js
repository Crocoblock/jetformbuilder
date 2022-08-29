import { createInput, iterateComments } from './functions';
import {
	createConditionalBlock,
	createMultiStep,
} from '../conditional.logic/functions';
import FormSubmit from '../submit.logic/FormSubmit';
import RadioData from './RadioData';
import CheckboxData from './CheckboxData';

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
		const macrosPrefix   = ( suffix = '' ) => 'JFB_FIELD::' + suffix;
		const acceptCallback = node => {
			return node.textContent.includes( macrosPrefix() );
		};

		const replaceMacros = (
			replaceFrom, fieldName, fieldValue, withBrackets = true ) => {
			const regExp = withBrackets
			               ? new RegExp( `<!--\\s*JFB_FIELD::${ fieldName }\\s*-->`,
					'gi' )
			               : new RegExp( `\\s*JFB_FIELD::${ fieldName }\\s*`,
					'gi' );

			return replaceFrom.replace( regExp, fieldValue );
		};

		const getValueFromField = field => {
			const is_radio = (
				field instanceof RadioData
			);

			if ( !is_radio ) {
				return field.value.current;
			}

			return [ ...field.value.current ].join( ', ' );
		};

		const getFieldNamesWithBrackets = macrosValue => {
			const matches = macrosValue.match(
				/(?:<!\-{2}\s*JFB_FIELD::)([\w\-]+)\s*(?:\-{2}>)/gi );

			if ( !matches ) {
				return [];
			}

			return matches.map(
				match => match.replace( /<!\-{2}\s*JFB_FIELD::/gi, '' ).
					replace( /\-{2}>/gi, '' ),
			);
		};

		const getFieldNamesWithOutBrackets = macrosValue => {
			const matches = macrosValue.match(
				/(?:\s*JFB_FIELD::)([\w\-]+)\s*/gi );

			if ( !matches ) {
				return [];
			}

			return matches.map(
				match => match.replace( /\s*JFB_FIELD::/gi, '' ),
			);
		};

		const getFieldNames = ( macrosValue, withBrackets = true ) => {
			return withBrackets
			       ? getFieldNamesWithBrackets( macrosValue )
			       : getFieldNamesWithOutBrackets( macrosValue );
		};

		const prepareValueFromMacros = (
			initialValue, withBrackets = true,
		) => {

			const fieldNames       = getFieldNames(
				initialValue,
				withBrackets,
			);
			const { applyFilters } = wp.hooks;

			fieldNames.forEach( name => {
				const fieldElement = this.getInput( name );

				let fieldValue = applyFilters(
					'jet.fb.macro.field.value',
					false,
					jQuery( fieldElement.nodes[ 0 ] ),
				);

				if ( false === fieldValue ) {
					fieldValue = getValueFromField( fieldElement );
				}

				initialValue = replaceMacros(
					initialValue,
					name,
					fieldValue,
					withBrackets,
				);
			} );

			return initialValue;
		};

		for (
			const comment of iterateComments( this.rootNode, acceptCallback )
			) {
			const [ , fieldName ] = comment.textContent.split(
				'JFB_FIELD::',
			);

			if ( !this.dataInputs.hasOwnProperty( fieldName ) ) {
				console.groupCollapsed(
					`Undefined field name: ${ fieldName } in this scope`,
				);
				console.warn( 'Scope:', this.rootNode );
				console.warn( 'Comment:', comment );
				console.groupEnd();

				continue;
			}
			const input = this.getInput( fieldName );

			const wrapper     = document.createElement( 'span' );
			wrapper.innerHTML = prepareValueFromMacros( comment.nodeValue,
				false );

			let prevSibling = comment.parentNode.insertBefore(
				wrapper,
				comment,
			);

			input.watch( () => {
				prevSibling.innerHTML = prepareValueFromMacros(
					comment.nodeValue,
					false,
				);
			} );
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
	 * @returns {boolean|InputData}
	 */
	getInput( fieldName ) {
		if ( !this.dataInputs.hasOwnProperty( fieldName ) ) {
			return false;
		}

		return this.dataInputs[ fieldName ];
	}
}

export default Observable;