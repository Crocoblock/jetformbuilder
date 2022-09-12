import { createConditionalBlock } from '../conditional.block/functions';

const {
	      ReactiveVar,
	      ConditionPageStateItem,
      } = JetFormBuilderAbstract;

/**
 * @property {array<InputData>|*} inputs
 * @property {MultiStepState} state
 */
function PageState( node, state ) {
	this.node      = node;
	this.index     = +node.dataset.page;
	this.state     = state;
	this.inputs    = [];
	this.canSwitch = new ReactiveVar( false );
	this.isShow    = new ReactiveVar( 1 === this.index );

	this.parseDom();

	this.canSwitch.make();
	this.isShow.make();
	this.isShow.watch( () => {
		this.isShow.current ? this.onShow() : this.onHide();
	} );

	this.addButtonsListeners();
	this.updateState();

	/**
	 * @type {Observable}
	 */
	const root = this.state.getRoot();
	const form = root?.parent?.root?.form ?? root.form;

	form.lockState.watch( () => {
		this.canSwitch.current = !form.lockState.current;
	} );
}

PageState.prototype.parseDom            = function () {
	for ( const node of this.node.querySelectorAll(
		'[data-jfb-sync]' ) ) {
		if (
			!this.isNodeBelongThis( node ) ||
			!node.hasOwnProperty( 'jfbSync' ) ||
			!node.jfbSync.reporting.isRequired
		) {
			continue;
		}

		this.inputs.push( node.jfbSync );

		node.jfbSync.setPage( this );
	}

	/**
	 * Buttons for switching between pages are hidden conditional blocks
	 * that perform their function (disable)
	 * if all required fields are filled in the page.
	 */
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

		for ( const condition of block.getConditions() ) {
			if ( !(
				condition instanceof ConditionPageStateItem
			) ) {
				continue;
			}
			block.page = this;
			this.canSwitch.watch( () => block.calculate() );

			break;
		}
	}
};
PageState.prototype.onShow              = function () {
	this.node.classList.remove( 'jet-form-builder-page--hidden' );
};
PageState.prototype.onHide              = function () {
	this.node.classList.add( 'jet-form-builder-page--hidden' );
};
PageState.prototype.updateState         = function () {
	const callbacks = [];

	for ( const input of this.getInputs() ) {
		callbacks.push( input.reporting.validate() );
	}

	Promise.all( callbacks ).then( () => {
		this.canSwitch.current = true;
	} ).catch( () => {
		this.canSwitch.current = false;
	} );
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
PageState.prototype.changePage          = function ( isBack ) {
	if ( isBack ) {
		this.state.index.current = this.index - 1;

		return;
	}

	this.updateState();

	if ( !this.canSwitch.current ) {
		return;
	}

	this.state.index.current = this.index + 1;
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

export default PageState;