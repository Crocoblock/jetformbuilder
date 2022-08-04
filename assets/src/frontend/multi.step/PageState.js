import ConditionPageStateItem
	from '../conditional.logic/ConditionPageStateItem';
import { createConditionalBlock } from '../conditional.logic/functions';
import ReactiveVar from '../ReactiveVar';

/**
 * @property {array<InputData>|*} inputs
 * @property {MultiStepState} state
 */
class PageState {

	constructor( node, state ) {
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
	}

	parseDom() {
		for ( const node of this.node.querySelectorAll( '[data-jfb-sync]' ) ) {
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
			const block = createConditionalBlock( node, this.state.getRoot() );

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
	}

	onShow() {
		this.node.classList.remove( 'jet-form-builder-page--hidden' );
	}

	onHide() {
		this.node.classList.add( 'jet-form-builder-page--hidden' );
	}

	updateState( withNotice = false ) {
		this.canSwitch.current = this.isValidInputs( withNotice );
	}

	addButtonsListeners() {
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
	}

	changePage( isBack ) {
		if ( isBack ) {
			this.state.index.current = this.index - 1;

			return;
		}

		this.updateState();

		if ( !this.canSwitch.current ) {
			return;
		}

		this.state.index.current = this.index + 1;
	}

	isValidInputs( withNotice = false ) {
		for ( const input of this.getInputs() ) {
			const callback = withNotice
			                 ? input.reporting.validateWithNotice
			                 : input.reporting.validate;

			if ( callback.call( input.reporting ) ) {
				continue;
			}
			return false;
		}

		return true;
	}

	isNodeBelongThis( node ) {
		const parentPage = node.closest( '.jet-form-builder-page' );

		return parentPage ? parentPage.isEqualNode( this.node ) : false;
	}

	/**
	 * @returns {array<InputData>|*}
	 */
	getInputs() {
		return this.inputs;
	}

}

export default PageState;