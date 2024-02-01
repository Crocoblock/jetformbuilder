import BaseInternalMacro from './BaseInternalMacro';
import Constants from '../constants';

function DayInSec() {
	BaseInternalMacro.call( this );

	this.getId = () => 'Day_In_Sec';
	this.getResult = () => Constants.Day_In_Sec;
}

DayInSec.prototype = Object.create( BaseInternalMacro.prototype );

export default DayInSec;