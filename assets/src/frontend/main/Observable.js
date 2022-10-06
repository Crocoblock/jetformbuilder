import { createInput } from './inputs/functions';
import FormSubmit from './submit/FormSubmit';
import {
	iterateJfbComments, macrosPrefix,
	observeComment, observeMacroAttr,
	queryByAttrValue,
} from './html.macro/functions';
import { allRejected } from './functions';

const {
	      doAction,
      } = wp.hooks;

const { replaceAttrs = [] } = window.JetFormBuilderSettings;

function Observable( parent = null ) {

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

	this.observe = function ( root ) {
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

		this.initMacros();

		doAction( 'jet.fb.observe.after', this );
	};

	this.initFields = function () {
		for ( const formElement of this.rootNode.querySelectorAll(
			'[data-jfb-sync]',
		) ) {
			this.pushData( createInput( formElement, this ) );
		}
	};

	this.initMacros = function () {
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
	};

	this.initSubmitHandler = function () {
		// check is current object related for global form element
		if ( this.parent ) {
			return;
		}

		this.form = new FormSubmit( this );
	};

	/**
	 * @return {Promise<Promise<never>|Promise<void>>}
	 */
	this.inputsAreValid = async function () {
		const callbacks = [];

		for ( const inputName in this.dataInputs ) {
			if ( !this.dataInputs.hasOwnProperty( inputName ) ) {
				continue;
			}
			const input = this.getInput( inputName );

			callbacks.push(
				( resolve, reject ) => input.reporting.validateWithNotice().
					then( resolve ).
					catch( reject ),
			);
		}

		const invalid = await allRejected( callbacks );

		return Boolean( invalid.length )
		       ? Promise.reject( invalid )
		       : Promise.resolve();
	};

	this.watch = function ( fieldName, callable ) {
		const input = this.getInput( fieldName );

		if ( input ) {
			return input.watch( callable );
		}

		throw new Error(
			`dataInputs in Observable don\'t have ${ fieldName } field`,
		);
	};

	this.makeReactiveProxy = function () {
		for ( const current of this.getInputs() ) {
			current.makeReactive();

			if ( this.parent ) {
				current.watch( () => {
					this.parent.value.notify();
				} );
			}

			Object.defineProperty( this.data, current.name, {
				get() {
					return current.value.current;
				},
				set( newValue ) {
					current.value.current = newValue;
				},
			} );
		}
	};

	this.onRemove = function () {
		for ( const name in this.dataInputs ) {
			if ( !this.dataInputs.hasOwnProperty( name ) ) {
				continue;
			}
			this.dataInputs[ name ].onRemove();
		}
	};

	/**
	 * @param inputData {InputData}
	 */
	this.pushData = function ( inputData ) {
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
	};

	/**
	 * @returns {array<InputData>}
	 */
	this.getInputs = function () {
		return Object.values( this.dataInputs );
	};

	/**
	 * @param fieldName
	 * @returns {null|InputData}
	 */
	this.getInput = function ( fieldName ) {
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
	};
}

export default Observable;