import BaseStaticMacro from './BaseStaticMacro';

function CurrentDate() {
	BaseStaticMacro.call( this );

	this.getResult = () => new Date();
}

export default CurrentDate;