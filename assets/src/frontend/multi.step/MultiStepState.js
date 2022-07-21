import ConditionalBlock from '../conditional.logic/ConditionalBlock';

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

	init() {
		this.elements = [
			...this.getScopeNode().
				querySelectorAll( '.jet-form-builder-page' ),
		].map(
			page => new PageState( page, this ),
		);
	}

	setScope( rootOrBlock ) {
		if ( rootOrBlock instanceof ConditionalBlock ) {
			this.block = rootOrBlock;
		}
		else {
			this.root = rootOrBlock;
		}
	}

	getScopeNode() {
		return this.block?.node ?? this.root.rootNode;
	}

	getRoot() {
		return this.block?.root ?? this.root;
	}

}

export default MultiStepState;