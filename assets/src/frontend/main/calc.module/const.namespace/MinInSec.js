import BaseInternalMacro from './BaseInternalMacro';
import Constants from '../constants';

function MinInSec() {
	BaseInternalMacro.call( this );

	this.getId = () => 'Min_In_Sec';
	this.getResult = () => Constants.Min_In_Sec;
}

MinInSec.prototype = Object.create( BaseInternalMacro.prototype );

export default MinInSec;