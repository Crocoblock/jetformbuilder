import { createInput, populateInputs } from './inputs/functions';
import FormSubmit from './submit/FormSubmit';
import queryByAttrValue from './html.macro/queryByAttrValue';
import iterateJfbComments from './html.macro/iterateJfbComments';
import observeComment from './html.macro/observeComment';
import observeMacroAttr from './html.macro/observeMacroAttr';
import observeNode from './html.macro/observeNode';
import { validateInputsAll } from './reporting/functions';
import ReportingContext from './reporting/ReportingContext';

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
	 * @type {ReportingContext}
	 */
	this.context = this.parent ? null : new ReportingContext( this );
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
	observe ( root = null ) {
		if ( this.isObserved ) {
			return;
		}
		if ( null !== root ) {
			this.rootNode = root;
		}
		this.isObserved = true;

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

	initFields () {
		for ( const formElement of this.rootNode.querySelectorAll(
			'[data-jfb-sync]',
		) ) {
			this.pushInput( formElement );
		}
	},

	// eslint-disable-next-line complexity
	initMacros () {
		// macros as html-comments
		for (
			const comment of iterateJfbComments( this.rootNode )
			) {
			observeComment( comment, this );
		}

		// macros in default attributes
		const nodesWithAttrs = queryByAttrValue( this.rootNode, 'JFB_FIELD::' );

		const { replaceAttrs = [] } = window.JetFormBuilderSettings;

		for ( const nodeWithAttr of nodesWithAttrs ) {
			for ( const replaceAttr of replaceAttrs ) {
				observeMacroAttr( nodeWithAttr, replaceAttr, this );
			}
		}

		// macros in data-jfb-macro attribute
		// result will placed inside relative node
		const nodes = this.rootNode.querySelectorAll(
			'[data-jfb-macro]:not([data-jfb-observed])',
		);

		for ( const node of nodes ) {
			observeNode( node, this );
		}
	},

	initSubmitHandler () {
		// check is current object related for global form element
		if ( this.parent ) {
			return;
		}

		this.form = new FormSubmit( this );
	},

	initActionButtons () {
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
	async inputsAreValid () {
		const invalid = await validateInputsAll(
			populateInputs( this.getInputs() ),
		);

		return Boolean( invalid.length )
		       ? Promise.reject( invalid )
		       : Promise.resolve();
	},

	watch ( fieldName, callable ) {
		const input = this.getInput( fieldName );

		if ( input ) {
			return input.watch( callable );
		}

		throw new Error(
			`dataInputs in Observable don\'t have ${ fieldName } field`,
		);
	},

	/**
	 * @param node    {Element}
	 * @param replace {Boolean}
	 */
	observeInput ( node, replace = false ) {
		const input = this.pushInput( node, replace );

		input.makeReactive();

		doAction( 'jet.fb.observe.input.manual', input );
	},

	makeReactiveProxy () {
		for ( const current of this.getInputs() ) {
			current.makeReactive();
		}
	},

	/**
	 * @param node    {Element}
	 * @param replace {Boolean}
	 */
	// eslint-disable-next-line complexity
	pushInput ( node, replace = false ) {
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
	 * @return {Array<InputData>}
	 */
	getInputs () {
		return Object.values( this.dataInputs );
	},

	/**
	 * @return {null|RenderStateData|InputData}
	 */
	getState () {
		return this.getInput( '_jfb_current_render_states' );
	},

	/**
	 * @param  fieldName
	 * @return {null|InputData}
	 */
	// eslint-disable-next-line complexity
	getInput ( fieldName ) {
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
	getSubmit () {
		return this.form ? this.form : this.parent.root.form;
	},
	getContext () {
		return this.context ?? this.parent.root.context;
	},
	/**
	 * @see https://github.com/Crocoblock/issues-tracker/issues/2711
	 *
	 * @since 3.0.8
	 */
	remove () {
		for ( const input of this.getInputs() ) {
			input.onRemove();
		}
	},
};

export default Observable;