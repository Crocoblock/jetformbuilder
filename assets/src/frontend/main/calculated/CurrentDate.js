import BaseStaticMacro from './BaseStaticMacro';

function CurrentDate() {
	BaseStaticMacro.call( this );

	this.getId     = () => 'currentDate';
	this.getResult = () => new Date().getTime();
}

CurrentDate.prototype = Object.create( BaseStaticMacro.prototype );

export default CurrentDate;