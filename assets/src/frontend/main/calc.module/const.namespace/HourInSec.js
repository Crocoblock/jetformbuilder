import BaseInternalMacro from './BaseInternalMacro';
import Constants from '../constants';

function HourInSec() {
	BaseInternalMacro.call( this );

	this.getId = () => 'Hour_In_Sec';
	this.getResult = () => Constants.Hour_In_Sec;
}

HourInSec.prototype = Object.create( BaseInternalMacro.prototype );

export default HourInSec;