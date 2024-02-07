import PageState from './PageState';
import ProgressBar from './ProgressBar';

const {
	      ConditionalBlock,
	      ReactiveVar,
      } = JetFormBuilderAbstract;

const {
	      doAction,
      } = JetPlugins.hooks;

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
	 * @type {Array<PageState> | *}
	 */
	this.elements = [];
}

MultiStepState.prototype.setScope    = function ( rootOrBlock ) {
	if ( rootOrBlock instanceof ConditionalBlock ) {
		this.block = rootOrBlock;
	}
	else {
		this.root = rootOrBlock;
	}
};
MultiStepState.prototype.setProgress = function () {
	this.index = new ReactiveVar( 1 );
	this.index.make();
	this.index.watch( this.onChangeIndex.bind( this ) );

	for ( const child of this.getScopeNode().children ) {
		if ( !child.matches( '.jet-form-builder-progress-pages' ) ) {
			continue;
		}
		this.progress = new ProgressBar( child, this );
	}
};
/**
 * @param pages {Element[]}
 */
MultiStepState.prototype.setPages = function ( pages ) {
	/**
	 * Multistep is initializing for all form or
	 * specific conditional block.
	 *
	 * We need to separate global & block multistep
	 */
	this.elements = pages.map(
		page => new PageState( page, this ),
	);

	this.elements.forEach( page => page.observe() );

	const { submitter } = this.getRoot().getSubmit();
	// is ajax
	if ( !submitter.hasOwnProperty( 'status' ) ) {
		return;
	}

	submitter.watchReset( () => {
		this.index.current = 1;
	} );
};
MultiStepState.prototype.onChangeIndex  = function () {
	for ( const page of this.getPages() ) {
		page.isShow.current = page.index === this.index.current;
	}

	window?.jQuery( document )?.trigger(
		'jet-form-builder/switch-page',
	);
};
MultiStepState.prototype.getCurrentPage = function () {
	for ( const page of this.getPages() ) {
		if ( page.isShow.current ) {
			return page;
		}
	}

	return false;
};
/**
 * @return {Array<PageState>}
 */
MultiStepState.prototype.getPages = function () {
	return this.elements;
};
/**
 * @return {HTMLElement|HTMLFormElement}
 */
MultiStepState.prototype.getScopeNode = function () {
	return this.block?.node ?? this.root.rootNode;
};
/**
 * @return {Observable}
 */
MultiStepState.prototype.getRoot = function () {
	return this.block?.root ?? this.root;
};

/**
 * @param page {PageState}
 */
MultiStepState.prototype.isLastPage = function ( page ) {
	return this.elements.at( -1 ) === page;
};

/**
 * @since 3.0.5
 *
 * @param  page
 * @return {boolean}
 */
MultiStepState.prototype.isFirstPage = function ( page ) {
	return this.elements[ 0 ] === page;
};

MultiStepState.prototype.onReady = function () {
	doAction( 'jet.fb.multistep.init', this );
};

export default MultiStepState;