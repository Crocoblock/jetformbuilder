import ConditionPageStateItem from './ConditionPageStateItem';

const {
	      ReactiveVar,
	      createConditionalBlock,
	      InputData,
      } = JetFormBuilderAbstract;

const {
	      validateInputs,
	      getOffsetTop,
      } = JetFormBuilderFunctions;

const { addAction, doAction } = JetPlugins.hooks;

/**
 * @property {InputData[]} inputs
 * @property {MultiStepState} state
 * @property {Element} node
 */
function PageState( node, state ) {
	this.node      = node;
	this.index     = +node.dataset.page;
	this.offset    = +node.dataset.pageOffset;
	this.state     = state;
	this.inputs    = [];
	this.canSwitch = new ReactiveVar( null );
	this.isShow    = new ReactiveVar( 1 === this.index );

	/**
	 * @since 3.0.1
	 */
	this.autoFocus = window.JetFormBuilderSettings?.auto_focus;
}

PageState.prototype.observe = function () {
	this.observeInputs();
	this.observeConditionalBlocks();

	this.canSwitch.make();
	this.isShow.make();
	this.isShow.watch( () => {
		this.isShow.current ? this.onShow() : this.onHide();
	} );

	this.addButtonsListeners();
	this.updateStateAsync().then( () => {} ).catch( () => {} );

	addAction(
		'jet.fb.observe.input.manual',
		'jet-form-builder/page-state',
		input => this.observeInput( input.nodes[ 0 ] ),
	);

	doAction( 'jet.fb.multistep.page.init', this );
};

PageState.prototype.observeInputs = function () {
	for ( const node of this.node.querySelectorAll( '[data-jfb-sync]' ) ) {
		this.observeInput( node );
	}
};

/**
 * @param node {Element}
 */
PageState.prototype.observeInput = function ( node ) {
	if (
		!this.isNodeBelongThis( node ) ||
		!node.hasOwnProperty( 'jfbSync' ) ||
		node.jfbSync.hasParent()
	) {
		return;
	}

	/**
	 * @type {InputData}
	 */
	const input = node.jfbSync;

	if ( !this.isLast() ) {
		this.handleInputEnter( input );
	}

	input.loading.watch( () => {
		if ( input.loading.current ) {
			this.canSwitch.current = false;
		}
		else {
			this.updateState();
		}
	} );

	if ( !input.reporting.restrictions.length ) {
		return;
	}

	this.inputs.push( input );
	input.watchValidity( () => this.updateState() );
};
/**
 * Buttons for switching between pages are hidden conditional blocks
 * that perform their function (disable)
 * if all required fields are filled in the page.
 */
PageState.prototype.observeConditionalBlocks = function () {
	for ( const node of this.node.querySelectorAll(
		'[data-jfb-conditional]',
	) ) {
		if ( !this.isNodeBelongThis( node ) ) {
			continue;
		}
		const block = createConditionalBlock(
			node,
			this.state.getRoot(),
		);

		for ( const condition of block.list.getConditions() ) {
			if ( condition instanceof ConditionPageStateItem ) {
				block.page = this;
				this.canSwitch.watch( () => block.list.onChangeRelated() );

				break;
			}
		}
	}
};
PageState.prototype.onShow      = function () {
	this.node.classList.remove( 'jet-form-builder-page--hidden' );
};
PageState.prototype.onHide      = function () {
	this.node.classList.add( 'jet-form-builder-page--hidden' );
};
PageState.prototype.updateState = function () {
	for ( const input of this.getInputs() ) {
		if ( input.reporting.validityState.current ) {
			continue;
		}
		this.canSwitch.current = false;
		return;
	}

	this.canSwitch.current = true;
};

PageState.prototype.updateStateAsync    = async function ( silence = true ) {
	if ( !silence ) {
		for ( const input of this.getInputs() ) {
			input.onForceValidate();
		}
	}

	try {
		await validateInputs( this.getInputs(), silence );

		this.canSwitch.current = true;
	}
	catch ( error ) {
		this.canSwitch.current = false;
	}
};
PageState.prototype.addButtonsListeners = function () {
	const switchButtons = this.node.querySelectorAll(
		'.jet-form-builder__next-page, .jet-form-builder__prev-page',
	);

	for ( const switchButton of switchButtons ) {
		if ( !this.isNodeBelongThis( switchButton ) ) {
			continue;
		}
		const isPrev = switchButton.classList.contains(
			'jet-form-builder__prev-page',
		);

		switchButton.addEventListener(
			'click',
			() => this.changePage( isPrev ),
		);
	}
};
PageState.prototype.changePage          = async function ( isBack ) {
	if ( isBack ) {
		this.state.index.current = this.index - 1;

		return;
	}

	if ( this.getLockState().current ) {
		return;
	}

	await this.updateStateAsync( false );

	if ( this.canSwitch.current ) {
		this.state.index.current = this.index + 1;

		return;
	}

	if ( !this.autoFocus ) {
		return;
	}

	for ( const input of this.inputs ) {
		if ( input.reporting.validityState.current ) {
			continue;
		}
		input.onFocus();
		break;
	}
};
PageState.prototype.isNodeBelongThis    = function ( node ) {
	const parentPage = node.closest( '.jet-form-builder-page' );

	return parentPage ? parentPage.isEqualNode( this.node ) : false;
};
/**
 * @returns {array<InputData>|*}
 */
PageState.prototype.getInputs = function () {
	return this.inputs;
};

/**
 * @return {LoadingReactiveVar}
 */
PageState.prototype.getLockState = function () {
	/**
	 * @type {Observable}
	 */
	const root = this.state.getRoot();
	const form = root?.parent?.root?.form ?? root.form;

	return form.lockState;
};

PageState.prototype.isLast = function () {
	return this.state.isLastPage( this );
};

/**
 * @param input {InputData|RepeaterData}
 */
PageState.prototype.handleInputEnter = function ( input ) {
	input?.enterKey?.addFilter( canSubmit => {
		this.changePage().then( () => {} ).catch( () => {} );

		// prevent submit
		return false;
	} );

	if ( 'repeater' !== input.inputType ) {
		return;
	}

	/**
	 * @type {ObservableRow[]}
	 */
	const rows = input.getValue();

	for ( const row of rows ) {
		for ( const inputRow of row.getInputs() ) {
			this.handleInputEnter( inputRow );
		}
	}

	input.lastObserved.watch( () => {
		for ( const curInput of input.lastObserved.current.getInputs() ) {
			this.handleInputEnter( curInput );
		}
	} );
};

PageState.prototype.getOffsetTop = function () {
	return getOffsetTop( this.node ) - this.offset;
};

export default PageState;