import BaseInternalMacro from './BaseInternalMacro';
import Constants from '../constants';

function MonthInSec() {
	BaseInternalMacro.call( this );

	this.getId     = () => 'Month_In_Sec';
	this.getResult = () => Constants.Month_In_Sec;
}

MonthInSec.prototype = Object.create( BaseInternalMacro.prototype );

export default MonthInSec;