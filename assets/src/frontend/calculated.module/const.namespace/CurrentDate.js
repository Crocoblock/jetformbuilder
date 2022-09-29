import BaseInternalMacro from './BaseInternalMacro';

function CurrentDate() {
	BaseInternalMacro.call( this );

	this.getId     = () => 'CurrentDate';
	this.getResult = () => new Date().getTime();
}

CurrentDate.prototype = Object.create( BaseInternalMacro.prototype );

export default CurrentDate;