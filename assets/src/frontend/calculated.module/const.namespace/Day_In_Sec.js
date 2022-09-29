import BaseInternalMacro from './BaseInternalMacro';
import Constants from '../constants';

function Day_In_Sec() {
	BaseInternalMacro.call( this );

	this.getId = () => 'Day_In_Sec';
	this.getResult = () => Constants.Day_In_Sec;
}

Day_In_Sec.prototype = Object.create( BaseInternalMacro.prototype );

export default Day_In_Sec;