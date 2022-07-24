import ConditionalBlock from '../conditional.logic/ConditionalBlock';
import PageState from './PageState';
import ReactiveVar from '../ReactiveVar';

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
		 * @type {ReactiveVar}
		 */
		this.index = null;

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
		/**
		 * Multistep is initializing for all form or
		 * specific conditional block.
		 *
		 * We need to separate global & block multistep
		 */
		this.elements = [
			...this.getScopeNode().children,
		].filter(
			page =>  page.matches( '.jet-form-builder-page' ),
		).map(
			page => new PageState( page, this ),
		);

		if ( !this.elements.length ) {
			return;
		}

		this.index = new ReactiveVar( 1 );
		this.index.make();
		this.index.watch( () => this.onChangeIndex() );
	}

	onChangeIndex() {
		for ( const page of this.getPages() ) {
			page.isShow.current = page.index === this.index.current;
		}
	}

	/**
	 * @returns {array<PageState>}
	 */
	getPages() {
		return this.elements;
	}

	getScopeNode() {
		return this.block?.node ?? this.root.rootNode;
	}

	getRoot() {
		return this.block?.root ?? this.root;
	}

}

export default MultiStepState;