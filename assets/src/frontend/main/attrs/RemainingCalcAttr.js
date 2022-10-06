import BaseHtmlAttr from './BaseHtmlAttr';

function RemainingCalcAttr() {
	BaseHtmlAttr.call( this );

	this.attrName = 'remaining';

	this.isSupported = function ( input ) {
		const attr    = this.attrName;
		this.attrName = 'max';

		const result = BaseHtmlAttr.prototype.isSupported.call( this, input );

		this.attrName = attr;

		return result;
	};
	this.getInitial  = function ( input ) {
		const { max } = input.attrs;

		return max.value.current;
	};

	this.setInput = function ( input ) {
		BaseHtmlAttr.prototype.setInput.call( this, input );
		const current = input.value.current?.length ?? 0;

		this.initial = this.initial - current;
	};

	this.addWatcherAttr = () => {};

	this.observe = function () {
		BaseHtmlAttr.prototype.observe.call( this );

		this.input.value.watch( () => this.updateAttr() );
		this.input.attrs.max.value.watch( () => this.updateAttr() );
	};

	this.updateAttr = function () {
		const { max } = this.input.attrs;
		const current = this.input.value.current?.length ?? 0;

		this.value.current = max.value.current - current;
	};
}

RemainingCalcAttr.prototype = Object.create( BaseHtmlAttr.prototype );

export default RemainingCalcAttr;