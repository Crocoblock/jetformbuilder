import PageState from './PageState';
import ProgressBar from './ProgressBar';

const {
	      ConditionalBlock,
	      ReactiveVar,
      } = JetFormBuilderAbstract;

function MultiStepState() {

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

	this.setScope      = function ( rootOrBlock ) {
		if ( rootOrBlock instanceof ConditionalBlock ) {
			this.block = rootOrBlock;
		}
		else {
			this.root = rootOrBlock;
		}
	};
	this.setPages      = function () {
		/**
		 * Multistep is initializing for all form or
		 * specific conditional block.
		 *
		 * We need to separate global & block multistep
		 */
		this.elements = [
			...this.getScopeNode().children,
		].filter(
			page => page.matches( '.jet-form-builder-page' ),
		).map(
			page => new PageState( page, this ),
		);

		if ( !this.elements.length ) {
			return;
		}

		this.index = new ReactiveVar( 1 );
		this.index.make();
		this.index.watch( () => this.onChangeIndex() );

		for ( const child of this.getScopeNode().children ) {
			if ( !child.matches( '.jet-form-builder-progress-pages' ) ) {
				continue;
			}
			this.progress = new ProgressBar( child, this );
		}
	};
	this.onChangeIndex = function () {
		for ( const page of this.getPages() ) {
			page.isShow.current = page.index === this.index.current;
		}
	};
	/**
	 * @returns {array<PageState>}
	 */
	this.getPages = function () {
		return this.elements;
	};
	this.getScopeNode = function () {
		return this.block?.node ?? this.root.rootNode;
	};
	/**
	 * @returns {Observable}
	 */
	this.getRoot      = function () {
		return this.block?.root ?? this.root;
	};
}

export default MultiStepState;