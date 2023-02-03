import { createInput, populateInputs } from './inputs/functions';
import FormSubmit from './submit/FormSubmit';
import {
	iterateJfbComments,
	observeComment,
	observeMacroAttr,
	queryByAttrValue,
} from './html.macro/functions';
import { validateInputsAll } from './reporting/functions';
import ValidationContext from './reporting/ValidationContext';

const {
	      doAction,
      } = JetPlugins.hooks;

function Observable( parent = null ) {
	this.parent     = parent;
	this.dataInputs = {};
	this.form       = null;
	this.multistep  = null;
	this.rootNode   = null;
	this.isObserved = false;

	/**
	 * @since 3.0.1
	 *
	 * @type {ValidationContext}
	 */
	this.context = this.parent ? null : new ValidationContext( this );
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
		const invalid = await validateInputsAll(
			populateInputs( this.getInputs() ),
		);

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

		input.makeReactive();

		doAction( 'jet.fb.observe.input.manual', input );
	},

	makeReactiveProxy: function () {
		for ( const current of this.getInputs() ) {
			current.makeReactive();
		}
	},

	/**
	 * @param node {Element}
	 * @param replace {Boolean}
	 */
	pushInput: function ( node, replace = false ) {
		// prevent saving inputs from preset repeater items in root object
		// those inputs would saved in ObservableRow object

		if ( !this.parent &&
			node.parentElement.closest( '.jet-form-builder-repeater' )
		) {
			return;
		}

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
	 * @returns {null|RenderStateData|InputData}
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
	getContext: function () {
		return this.context ?? this.parent.root.context;
	},
};

export default Observable;