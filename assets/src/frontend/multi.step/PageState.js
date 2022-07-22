import ConditionPageStateItem
	from '../conditional.logic/ConditionPageStateItem';
import { createConditionalBlock } from '../conditional.logic/functions';

/**
 * @property {array<InputData>|*} inputs
 * @property {MultiStepState} state
 */
class PageState {

	constructor( node, state ) {
		this.node      = node;
		this.state     = state;
		this.inputs    = [];
		this.canSwitch = false;
		this.signals   = [];

		this.parseDom();
		this.makeReactive();
		this.updateState();
	}

	parseDom() {
		const scope = this.state.getScopeNode();

		for ( const node of scope.querySelectorAll( '[data-jfb-sync]' ) ) {
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

		for ( const node of scope.querySelectorAll(
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
				this.watch( () => block.calculate() );

				break;
			}
		}
	}

	makeReactive() {
		let canSwitch = this.canSwitch;
		const self    = this;

		Object.defineProperty( this, 'canSwitch', {
			get() {
				return canSwitch;
			},
			set( newVal ) {
				canSwitch = newVal;
				self.notify();
			},
		} );
	}

	updateState() {
		const valid = this.isValidInputs();

		if ( valid !== this.canSwitch ) {
			this.canSwitch = valid;
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

	notify() {
		this.signals.forEach( signal => signal() );
	}

	watch( callable ) {
		this.signals.push( callable.bind( this ) );
	}

}

export default PageState;