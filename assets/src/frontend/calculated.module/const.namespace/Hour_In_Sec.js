import BaseInternalMacro from './BaseInternalMacro';
import Constants from '../constants';

function Hour_In_Sec() {
	BaseInternalMacro.call( this );

	this.getId = () => 'Hour_In_Sec';
	this.getResult = () => Constants.Hour_In_Sec;
}

Hour_In_Sec.prototype = Object.create( BaseInternalMacro.prototype );

export default Hour_In_Sec;