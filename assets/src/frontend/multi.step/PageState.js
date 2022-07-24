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
				!node.jfbSync.isRequired()
			) {
				continue;
			}

			this.inputs.push( node.jfbSync );

			node.jfbSync.watch( () => this.updateState() );
		}

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

	updateState() {
		this.canSwitch.current = this.isValidInputs();
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

			switchButton.addEventListener( 'click', () => {
				this.state.index.current = isPrev
				                           ? this.index - 1
				                           : this.index + 1;
			} );
		}
	}

	isValidInputs() {
		for ( const input of this.inputs ) {
			if ( this.isValid( input ) ) {
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
	 *
	 * @param input {InputData}
	 */
	isValid( input ) {
		if ( input.isValid() ) {
			return true;
		}
		input.report();

		return false;
	}

}

export default PageState;