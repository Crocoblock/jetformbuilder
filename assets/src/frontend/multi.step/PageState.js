import ConditionPageStateItem from './ConditionPageStateItem';

const {
	      ReactiveVar,
	      createConditionalBlock,
      } = JetFormBuilderAbstract;

const {
	      validateInputs,
	      getOffsetTop,
	      focusOnInvalidInput,
	      populateInputs,
      } = JetFormBuilderFunctions;

const { addAction, doAction } = JetPlugins.hooks;

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

	/**
	 * @since 3.0.5
	 * @type {boolean}
	 */
	this.initialObserveState = false;
}

PageState.prototype.observe = function () {

	if ( !this.isLast() ) {
		this.observeInputs();
		this.observeConditionalBlocks();
	}

	this.canSwitch.make();
	this.isShow.make();
	this.isShow.watch( () => {
		if ( this.isShow.current ) {
			this.onShow();

			return;
		}

		this.onHide();
	} );

	this.addButtonsListeners();

	/**
	 * We check the fields only for the first page.
	 * And for the following, we do it when switching pages
	 * (in the `onShow` method)
	 *
	 * We do this because on other pages the fields are always
	 * checked with a successful result due to the check on `isVisible`
	 *
	 * @since 3.0.5
	 *
	 * @see https://github.com/Crocoblock/issues-tracker/issues/2781#issuecomment-1517928213
	 * @see PageState.onShow
	 * @see InputData.isVisible
	 */
	if ( this.isFirst() ) {
		this.initialObserveState = true;
		this.updateStateAsync().then( () => {} ).catch( () => {} );
	}

	this.updateOffsetByProgress();

	addAction(
		'jet.fb.observe.input.manual',
		'jet-form-builder/page-state',
		input => this.observeInput( input.nodes[ 0 ] ),
	);

	doAction( 'jet.fb.multistep.page.init', this );
};

PageState.prototype.observeInputs = function () {
	for ( const node of this.node.querySelectorAll( '[data-jfb-sync]' ) ) {
		const input = this.observeInput( node );

		if ( !input ) {
			return;
		}

		doAction(
			'jet.fb.multistep.page.observed.input',
			input,
			this,
		);
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
		return false;
	}

	/**
	 * @type {InputData}
	 */
	const input = node.jfbSync;

	this.handleInputEnter( input );

	input.loading.watch( () => {
		if ( input.loading.current ) {
			this.canSwitch.current = false;
		}
		else {
			this.updateState();
		}
	} );

	if ( !input.reporting.restrictions.length ) {
		return input;
	}

	this.inputs.push( input );
	input.watchValidity( () => this.updateState() );

	return input;
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

		const hasConditionPageState = block.list.getConditions().some(
			condition => condition instanceof ConditionPageStateItem,
		);

		if ( !hasConditionPageState ) {
			continue;
		}

		block.page = this;
		this.canSwitch.watch( () => block.list.onChangeRelated() );
	}
};

/**
 * @since 3.0.5 We check the fields if this is done for the first time
 * @since 3.0.0 Introduced
 */
PageState.prototype.onShow = function () {
	this.node.classList.remove( 'jet-form-builder-page--hidden' );

	if ( this.initialObserveState ) {
		return;
	}

	this.initialObserveState = true;
	this.updateStateAsync().then( () => {} ).catch( () => {} );
};
PageState.prototype.onHide      = function () {
	this.node.classList.add( 'jet-form-builder-page--hidden' );
};
PageState.prototype.updateState = function () {
	for ( const input of this.getInputs() ) {
		if ( input.reporting.validityState.current ||
			null === input.reporting.validityState.current
		) {
			continue;
		}
		this.canSwitch.current = false;
		return;
	}

	this.canSwitch.current = true;
};

PageState.prototype.updateStateAsync    = async function ( silence = true ) {
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

	focusOnInvalidInput( this.getInputs() );
};
PageState.prototype.isNodeBelongThis    = function ( node ) {
	const parentPage = node.closest( '.jet-form-builder-page' );

	return parentPage ? parentPage.isEqualNode( this.node ) : false;
};
/**
 * @return {Array<InputData> | *}
 */
PageState.prototype.getInputs = function () {
	return populateInputs( this.inputs );
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
 * @since 3.0.5
 *
 * @return {boolean}
 */
PageState.prototype.isFirst = function () {
	return this.state.isFirstPage( this );
};

/**
 * @param input {InputData|RepeaterData}
 */
PageState.prototype.handleInputEnter = function ( input ) {
	input?.enterKey?.addFilter( () => {
		this.changePage().then( () => {} ).catch( () => {} );

		// prevent submit
		return false;
	} );
};

PageState.prototype.getOffsetTop = function () {
	return getOffsetTop( this.node ) - this.offset;
};

/**
 * @since 3.2.3
 */
PageState.prototype.updateOffsetByProgress = function () {
	if ( !this.state?.progress?.node ) {
		return;
	}
	this.offset += +this.state.progress.node.clientHeight;
};

export default PageState;