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
	},
	showBlockDom( result ) {
		const inputsList = this.root.dataInputs;

		if ( !result ) {
			this.node.remove();

			this.reCalculateFields( inputsList );

			return;
		}
		this.comment.parentElement.insertBefore( this.node, this.comment );

		this.reCalculateFields( inputsList );
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
	/**
	 * Recalculation of formulas
	 * @param {Object} inputsList - List of fields
	 */
	reCalculateFields( inputsList ) {
		// Get only fields that are in the current block
		const affectedFields = this.getAffectedFields( inputsList );

		// Cache for visibility checks
		const visibilityCache = new Map();

		affectedFields.forEach( key => {
			if ( inputsList[key] && inputsList[key].formula ) {
				const fieldNode = inputsList[key].nodes?.[0];

				// Use cache for visibility checks
				let shouldRecalculate = false;
				if ( fieldNode ) {
					const cacheKey = fieldNode;
					if ( !visibilityCache.has( cacheKey ) ) {
						const isVisible = this.isFieldVisible( fieldNode );
						const isInDOM   = document.contains( fieldNode );
						visibilityCache.set( cacheKey, isVisible || isInDOM );
					}
					shouldRecalculate = visibilityCache.get( cacheKey );
				}

				if ( shouldRecalculate ) {
					try {
						inputsList[key].reCalculateFormula();
					} catch ( error ) {
						console.warn( `Error recalculating formula for field ${key}:`, error );
					}
				}
			}
		} );
	},
	/**
	 * Checks if field is visible on the page
	 * @param {HTMLElement} fieldNode - DOM element of the field
	 * @returns {boolean} - true if field is visible
	 */
	isFieldVisible( fieldNode ) {
		if ( ! fieldNode ) return false;

		// Check if element is in DOM
		if ( ! document.contains( fieldNode ) ) return false;

		// Check visibility styles
		const computedStyle = window.getComputedStyle( fieldNode );

		if ( 'none' === computedStyle.display || 'hidden' === computedStyle.visibility ) {
			return false;
		}

		// Check if element is not hidden by parent elements
		let parent = fieldNode.parentElement;

		while ( parent && parent !== document.body ) {
			const parentStyle = window.getComputedStyle( parent );
			if ( 'none' === parentStyle.display || 'hidden' === parentStyle.visibility ) {
				return false;
			}
			parent = parent.parentElement;
		}

		return true;
	},
	/**
	 * Gets list of fields affected by current conditional block
	 * @param {Object} inputsList - List of all fields
	 * @returns {Array} - Array of affected field keys
	 */
	getAffectedFields( inputsList ) {
		const affectedFields = [];

		// Get all fields inside current block
		const blockFields     = Array.from( this.node.querySelectorAll( '[data-jfb-sync]' ) );
		const blockFieldNames = new Set();

		// Collect field names inside block
		blockFields.forEach( fieldNode => {
			const fieldName = fieldNode.getAttribute( 'name' );

			if ( fieldName ) {
				blockFieldNames.add( fieldName );
			}
		} );

		Object.keys( inputsList ).forEach( key => {
			const field = inputsList[key];

			if ( ! field || ! field.formula ) return;

			const fieldNode = field.nodes?.[0];
			let shouldRecalculate = false;

			// 1. Field is inside the block
			if ( fieldNode && blockFields.includes( fieldNode ) ) {
				shouldRecalculate = true;
			}

			// 2. Field depends on fields inside block (check formula)
			if ( ! shouldRecalculate && field.formula ) {
				blockFieldNames.forEach( blockFieldName => {
					if ( field.formula.includes( `%${blockFieldName}%` ) ) {
						shouldRecalculate = true;
					}
				} );
			}

			if ( shouldRecalculate ) {
				affectedFields.push( key );
			}
		} );

		return affectedFields;
	},
};

export default ConditionalBlock;