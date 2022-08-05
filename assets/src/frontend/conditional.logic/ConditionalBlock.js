import { createConditionItem, createMultiStep } from './functions';

class ConditionalBlock {

	constructor( node, observable ) {
		this.node           = node;
		node.jfbConditional = this;
		/**
		 * @type {Observable}
		 */
		this.root = observable;
		this.invalid         = [];
		this.undefinedFields = [];
		this.isObserved      = false;

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

		this.setConditions();
		this.setMultiStep();
	}

	setConditions() {
		this.conditions = JSON.parse( this.node.dataset.jfbConditional ).map(
			item => createConditionItem( item, this ),
		).filter( item => item );
	}

	setMultiStep() {
		const multistep = createMultiStep( this );

		if ( !multistep.getPages()?.length ) {
			return;
		}

		this.multistep = multistep;
	}

	observe() {
		if ( this.isObserved ) {
			return;
		}
		this.isObserved = true;
		this.insertComment();

		for ( const condition of this.getConditions() ) {
			condition.observe();
		}
	}

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
	}

	calculate() {
		this.runFunction( this.getResult() );
	}

	getResult() {
		this.invalid = [];

		for ( const condition of this.getConditions() ) {
			if ( condition.isPassed() ) {
				continue;
			}
			this.invalid.push( condition );

			return false;
		}

		return true;
	}

	/**
	 * @param result {boolean}
	 */
	runFunction( result ) {
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
	}

	showBlockCss( result ) {
		this.node.style.display = result ? 'block' : 'none';
	}

	showBlockDom( result ) {
		if ( !result ) {
			this.node.remove();

			return;
		}

		this.comment.parentElement.insertBefore( this.node, this.comment );
	}

	disableBlock( result ) {
		this.node.disabled = result;
	}

	willDomChange() {
		return [ 'show_dom', 'hide_dom' ].includes( this.getFunction() );
	}

	getFunction() {
		return this.node.dataset.jfbFunc;
	}

	/**
	 * @returns {array<ConditionFieldItem|ConditionPageStateItem>}
	 */
	getConditions() {
		return this.conditions;
	}
}

export default ConditionalBlock;