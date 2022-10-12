import ConditionItem from './ConditionItem';

function ConditionRenderStateItem() {
	ConditionItem.call( this );

	this.isSupported = function ( options ) {
		return 'render_state' === options?.operator;
	};

	/**
	 * @return {InputData}
	 */
	this.getInput = function () {
		return this.list.root.getInput( '_jfb_current_render_states' );
	};

	this.observe = function () {
		this.getInput().watch( () => this.list.onChangeRelated() );
	};

	this.setOptions = function ( options ) {
		this.render_state = options.render_state ?? [];
	};

	this.isPassed = function () {
		const { value } = this.getInput();

		if ( !value.current?.length ) {
			return false;
		}

		return this.render_state.some( current => {
			return value.current.includes( current );
		} );
	};
}

ConditionRenderStateItem.prototype = Object.create( ConditionItem.prototype );

ConditionRenderStateItem.prototype.render_state = [];

export default ConditionRenderStateItem;