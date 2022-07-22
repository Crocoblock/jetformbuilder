import ConditionalBlock from '../conditional.logic/ConditionalBlock';
import PageState from './PageState';

class MultiStepState {

	constructor() {

		/**
		 * @type {Observable}
		 */
		this.root = null;

		/**
		 * @type {ConditionalBlock}
		 */
		this.block = null;

		/**
		 * Current page index
		 * @type {number}
		 */
		this.index = 1;

		/**
		 * Node elements of pages
		 * @type {array<PageState>|*}
		 */
		this.elements = [];
	}

	setScope( rootOrBlock ) {
		if ( rootOrBlock instanceof ConditionalBlock ) {
			this.block = rootOrBlock;
		}
		else {
			this.root = rootOrBlock;
		}
	}

	setPages() {
		this.elements = [
			...this.getScopeNode().querySelectorAll( '.jet-form-builder-page' ),
		].filter(
			/**
			 * Multistep is initializing for all form or
			 * specific conditional block.
			 *
			 * We need to separate global & block multistep
			 */
			page => {
				if ( !this.root ) {
					return true;
				}
				return page.parentElement.matches(
					'form.jet-form-builder',
				);
			},
		).map(
			page => new PageState( page, this ),
		);
	}

	getScopeNode() {
		return this.block?.node ?? this.root.rootNode;
	}

	getRoot() {
		return this.block?.root ?? this.root;
	}

}

export default MultiStepState;