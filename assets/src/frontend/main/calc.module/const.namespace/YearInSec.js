import BaseInternalMacro from './BaseInternalMacro';
import Constants from '../constants';

function YearInSec() {
	BaseInternalMacro.call( this );

	this.getId     = () => 'Year_In_Sec';
	this.getResult = () => Constants.Year_In_Sec;
}

YearInSec.prototype = Object.create( BaseInternalMacro.prototype );

export default YearInSec;