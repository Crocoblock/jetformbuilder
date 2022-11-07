import ConditionsBlockList from './ConditionsBlockList';

const {
	      doAction,
      } = wp.hooks;
const {
	      ReactiveVar,
      } = JetFormBuilderAbstract;
const {
	      validateInputsAll,
      } = JetFormBuilderFunctions;

function ConditionalBlock( node, observable ) {
	this.node           = node;
	node.jfbConditional = this;
	/**
	 * @type {Observable}
	 */
	this.root = observable;
	this.isObserved = false;

	/**
	 * @type {ConditionsBlockList}
	 */
	this.list = null;

	/**
	 * @type {PageState}
	 */
	this.page = null;

	/**
	 * @type {MultiStepState}
	 */
	this.multistep = null;

	/**
	 * @type {Node}
	 */
	this.comment = null;

	/**
	 * @type {InputData[]}
	 */
	this.inputs = [];

	this.isRight = new ReactiveVar( null );
	this.isRight.make();

	this.setConditions();
	this.setInputs();

	doAction( 'jet.fb.conditional.init', this );
}

ConditionalBlock.prototype = {
	setConditions() {
		const { jfbConditional } = this.node.dataset;

		this.list       = new ConditionsBlockList( jfbConditional, this.root );
		this.list.block = this;

		this.list.onChangeRelated = () => {
			this.isRight.current = this.list.getResult();
		};
	},
	setInputs() {
		if ( !this.willDomChange() ) {
			return;
		}

		this.inputs = Array.from(
			this.node.querySelectorAll( '[data-jfb-sync]' ),
		).map(
			item => item.jfbSync,
		);
	},
	insertComment() {
		if ( !this.willDomChange() ) {
			return;
		}

		this.comment = document.createComment( '' );

		// insert comment after conditional block
		this.node.parentElement.insertBefore(
			this.comment,
			this.node.nextSibling,
		);
	},
	observe() {
		if ( this.isObserved ) {
			return;
		}
		this.isObserved = true;
		this.insertComment();

		this.isRight.watch( () => this.runFunction() );
		this.isRight.watch( () => this.validateInputs() );
		this.list.observe();
	},
	runFunction() {
		const result = this.isRight.current;

		switch ( this.getFunction() ) {
			case 'show_dom':
				this.showBlockDom( result );
				break;
			case 'hide_dom':
				this.showBlockDom( !result );
				break;
			case 'show':
				this.showBlockCss( result );
				break;
			case 'hide':
				this.showBlockCss( !result );
				break;
			case 'disable':
				this.disableBlock( result );
				break;
		}
	},
	/**
	 * @link https://github.com/Crocoblock/issues-tracker/issues/1553
	 */
	validateInputs() {
		validateInputsAll( this.inputs, true ).
			then( () => {} ).
			catch( () => {} );
	},
	showBlockCss( result ) {
		this.node.style.display = result ? 'block' : 'none';
	},
	showBlockDom( result ) {
		if ( !result ) {
			this.node.remove();

			return;
		}

		this.comment.parentElement.insertBefore( this.node, this.comment );
	},
	disableBlock( result ) {
		this.node.disabled = result;
	},
	willDomChange() {
		return [ 'show_dom', 'hide_dom' ].includes( this.getFunction() );
	},
	getFunction() {
		return this.node.dataset.jfbFunc;
	},
};

export default ConditionalBlock;