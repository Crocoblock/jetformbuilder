import ConditionsBlockList from './ConditionsBlockList';

const {
	      doAction,
      } = JetPlugins.hooks;
const {
	      ReactiveVar,
      } = JetFormBuilderAbstract;
const {
	      validateInputsAll,
      } = JetFormBuilderFunctions;

const __reInited = new WeakSet();

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
	 * @type {string | Object}
	 */
	this.function = null;
	this.settings = null;

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
	this.setFunction();

	if ( !window?.JetFormBuilderSettings?.devmode ) {
		delete this.node.dataset.jfbConditional;
		delete this.node.dataset.jfbFunc;
	}

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
		this.inputs = Array.from(
			this.node.querySelectorAll( '[data-jfb-sync]' ),
		).map(
			item => item.jfbSync,
		).filter(
			item => item,
		);
	},
	insertComment() {
		if ( !this.settings?.dom ) {
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

		switch ( this.function ) {
			case 'show':
				this.showBlock( result );
				break;
			case 'hide':
				this.showBlock( !result );
				break;
			case 'disable':
				this.disableBlock( result );
				break;
			default:
				doAction(
					'jet.fb.conditional.block.runFunction',
					this.function,
					result,
					this,
				);
				break;

		}
	},
	/**
	 * Compatibility with Save Progress
	 * @since 3.0.1 https://github.com/Crocoblock/issues-tracker/issues/2480
	 *
	 * @see https://github.com/Crocoblock/issues-tracker/issues/1553
	 */
	validateInputs() {
		setTimeout( () => {
			validateInputsAll( this.inputs, true ).
				then( () => {} ).
				catch( () => {} );
		} );
	},
	showBlock( result ) {
		this.node.classList.remove( 'jet-form-builder--hidden' );

		if ( this.settings?.dom ) {
			this.showBlockDom( result );
			if (result) {
				requestAnimationFrame(() => this.reinitChildren());
			}
			const event = new CustomEvent('jet-form-builder/conditional-block/block-toggle-hidden-dom', {
				detail: {
					block: this.node,
					result: result
				},
			});
			document.dispatchEvent(event);

			return;
		}
		this.node.style.display = result ? 'block' : 'none';

		if (result) {
			requestAnimationFrame(() => this.reinitChildren());
		}
	},
	showBlockDom( result ) {
		const inputsList = this.root.dataInputs;

		if ( !result ) {
			this.node.remove();

			Object.keys( inputsList ).forEach( key => {
				if ( inputsList[key].formula ) {
					inputsList[key].reCalculateFormula();
				}
			} );

			return;
		}
		this.comment.parentElement.insertBefore( this.node, this.comment );

		Object.keys( inputsList ).forEach( key => {
			if ( inputsList[key].formula ) {
				inputsList[key].reCalculateFormula();
			}
		} );
	},
	disableBlock( result ) {
		this.node.disabled = result;
	},
	setFunction() {
		this.function = this.node.dataset.jfbFunc;

		let parsed;
		try {
			parsed = JSON.parse( this.function );
		}
		catch ( error ) {
			return;
		}
		const [ [ name, settings ] ] = Object.entries( parsed );

		this.function = name;
		this.settings = settings;
	},
	reinitChildren() {
		const root = this.root;
		const scope = this.node;

		const nodes = scope.querySelectorAll('[data-jfb-conditional][data-jfb-func]');
		nodes.forEach((node) => {
			if (node.jfbConditional || __reInited.has(node)) {
				return;
			}
			try {
				const child = new ConditionalBlock(node, root);
				child.observe();
				child.isRight.current = child.list.getResult();
				__reInited.add(node);
			} catch (e) {
				if (console && console.warn) {
					console.warn('reinitChildren: init failed', e, node);
				}
			}
		});
	},
};

export default ConditionalBlock;