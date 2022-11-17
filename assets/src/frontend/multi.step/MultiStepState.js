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

	this.setScope = function ( rootOrBlock ) {
		if ( rootOrBlock instanceof ConditionalBlock ) {
			this.block = rootOrBlock;
		}
		else {
			this.root = rootOrBlock;
		}
	};
	/**
	 * @param pages {Element[]}
	 */
	this.setPages = function ( pages ) {
		/**
		 * Multistep is initializing for all form or
		 * specific conditional block.
		 *
		 * We need to separate global & block multistep
		 */
		this.elements = pages.map(
			page => new PageState( page, this ),
		);

		this.index = new ReactiveVar( 1 );
		this.index.make();
		this.index.watch( this.onChangeIndex.bind( this ) );

		for ( const child of this.getScopeNode().children ) {
			if ( !child.matches( '.jet-form-builder-progress-pages' ) ) {
				continue;
			}
			this.progress = new ProgressBar( child, this );
		}

		const { submitter } = this.getRoot().getSubmit();
		// is ajax
		if ( !submitter.hasOwnProperty( 'status' ) ) {
			return;
		}

		submitter.watchReset( () => {
			this.index.current = 1;
		} );
	};
	this.onChangeIndex = function () {
		for ( const page of this.getPages() ) {
			page.isShow.current = page.index === this.index.current;
		}

		jQuery( document ).trigger(
			'jet-form-builder/switch-page',
		);
	};
	/**
	 * @returns {array<PageState>}
	 */
	this.getPages = function () {
		return this.elements;
	};
	/**
	 * @return {HTMLElement|HTMLFormElement}
	 */
	this.getScopeNode = function () {
		return this.block?.node ?? this.root.rootNode;
	};
	/**
	 * @returns {Observable}
	 */
	this.getRoot = function () {
		return this.block?.root ?? this.root;
	};
}

export default MultiStepState;