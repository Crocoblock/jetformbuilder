import BaseHtmlAttr from './BaseHtmlAttr';

function RemainingCalcAttr() {
	BaseHtmlAttr.call( this );

	this.attrName = 'remaining';

	this.isSupported = function ( input ) {
		return input.attrs.hasOwnProperty( 'maxLength' );
	};

	this.setInput = function ( input ) {
		BaseHtmlAttr.prototype.setInput.call( this, input );
		const { maxLength } = input.attrs;
		const current = input.value.current?.length ?? 0;

		this.initial = maxLength.value.current - current;
	};

	this.addWatcherAttr = () => {};

	this.observe = function () {
		BaseHtmlAttr.prototype.observe.call( this );

		this.input.value.watch( () => this.updateAttr() );
		this.input.attrs.maxLength.value.watch( () => this.updateAttr() );
	};

	this.updateAttr = function () {
		const { maxLength } = this.input.attrs;
		const current       = this.input.value.current?.length ?? 0;

		this.value.current = maxLength.value.current - current;
	};
}

RemainingCalcAttr.prototype = Object.create( BaseHtmlAttr.prototype );

export default RemainingCalcAttr;