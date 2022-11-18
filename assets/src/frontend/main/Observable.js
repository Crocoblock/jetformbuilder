import { createInput } from './inputs/functions';
import FormSubmit from './submit/FormSubmit';
import {
	iterateJfbComments,
	observeComment,
	observeMacroAttr,
	queryByAttrValue,
} from './html.macro/functions';
import { validateInputsAll } from './reporting/functions';

const {
	      doAction,
      } = wp.hooks;

function Observable( parent = null ) {
	this.parent     = parent;
	this.dataInputs = {};
	this.data       = {};
	this.form       = null;
	this.multistep  = null;
	this.rootNode   = null;
	this.isObserved = false;
}

Observable.prototype = {
	/**
	 * @type {RepeaterData|null}
	 */
	parent: null,
	/**
	 * {
	 *     [field_name]: {InputData}
	 * }
	 */
	dataInputs: {},
	data: {},

	/**
	 * @type {FormSubmit}
	 */
	form: null,

	/**
	 * @type {MultiStepState}
	 */
	multistep: null,

	/**
	 * @type {HTMLElement|HTMLFormElement}
	 */
	rootNode: null,
	isObserved: false,
	observe: function ( root ) {
		if ( this.isObserved ) {
			return;
		}
		this.isObserved = true;
		this.rootNode   = root;

		doAction( 'jet.fb.observe.before', this );

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

		this.initActionButtons();

		doAction( 'jet.fb.observe.after', this );
	},

	initFields: function () {
		for ( const formElement of this.rootNode.querySelectorAll(
			'[data-jfb-sync]',
		) ) {
			this.pushInput( formElement );
		}
	},

	initMacros: function () {
		for (
			const comment of iterateJfbComments( this.rootNode )
			) {
			observeComment( comment, this );
		}

		const nodes = queryByAttrValue( this.rootNode, 'JFB_FIELD::' );

		const { replaceAttrs = [] } = window.JetFormBuilderSettings;

		for ( const node of nodes ) {
			for ( const replaceAttr of replaceAttrs ) {
				observeMacroAttr( node, replaceAttr, this );
			}
		}
	},

	initSubmitHandler: function () {
		// check is current object related for global form element
		if ( this.parent ) {
			return;
		}

		this.form = new FormSubmit( this );
	},

	initActionButtons: function () {
		if ( this.parent ) {
			return;
		}
		for ( const button of this.rootNode.querySelectorAll(
			'.jet-form-builder__button-switch-state',
		) ) {
			let states;
			try {
				states = JSON.parse( button.dataset.switchOn );
			}
			catch ( error ) {
				continue;
			}

			button.addEventListener( 'click', () => {
				this.getState().value.current = states;
			} );
		}
	},

	/**
	 * @return {Promise<Promise<never>|Promise<void>>}
	 */
	inputsAreValid: async function () {
		const invalid = await validateInputsAll( this.getInputs() );

		return Boolean( invalid.length )
		       ? Promise.reject( invalid )
		       : Promise.resolve();
	},

	watch: function ( fieldName, callable ) {
		const input = this.getInput( fieldName );

		if ( input ) {
			return input.watch( callable );
		}

		throw new Error(
			`dataInputs in Observable don\'t have ${ fieldName } field`,
		);
	},

	/**
	 * @param node {Element}
	 * @param replace {Boolean}
	 */
	observeInput: function ( node, replace = false ) {
		const input = this.pushInput( node, replace );

		this.makeReactiveInput( input );

		doAction( 'jet.fb.observe.input.manual', this );
	},

	makeReactiveProxy: function () {
		for ( const current of this.getInputs() ) {
			this.makeReactiveInput( current );
		}
	},

	/**
	 * @param input {InputData}
	 */
	makeReactiveInput: function ( input ) {
		input.makeReactive();

		if ( this.parent ) {
			input.watch( () => {
				this.parent.report();
			} );
		}

		Object.defineProperty( this.data, input.name, {
			get() {
				return input.value.current;
			},
			set( newValue ) {
				input.value.current = newValue;
			},
		} );
	},

	/**
	 * @param node {Element}
	 * @param replace {Boolean}
	 */
	pushInput: function ( node, replace = false ) {
		const inputData = createInput( node, this );
		const findInput = this.dataInputs[ inputData.getName() ] ?? false;

		if ( false === findInput || replace ) {
			this.dataInputs[ inputData.getName() ] = inputData;

			return inputData;
		}

		findInput.merge( inputData );

		return findInput;
	},

	/**
	 * @returns {array<InputData>}
	 */
	getInputs: function () {
		return Object.values( this.dataInputs );
	},

	/**
	 * @returns {null|RenderStateData}
	 */
	getState: function () {
		return this.getInput( '_jfb_current_render_states' );
	},

	/**
	 * @param fieldName
	 * @returns {null|InputData}
	 */
	getInput: function ( fieldName ) {
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
	},
	getSubmit: function () {
		return this.form ? this.form : this.parent.root.form;
	},
};

export default Observable;