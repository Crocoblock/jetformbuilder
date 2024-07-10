/* eslint-disable camelcase */
import BaseInternalMacro from './BaseInternalMacro';
import Constants from '../constants';

function Min_In_Sec() {
	BaseInternalMacro.call( this );

	this.getId = () => 'Min_In_Sec';
	this.getResult = () => Constants.Min_In_Sec;
}

Min_In_Sec.prototype = Object.create( BaseInternalMacro.prototype );

export default Min_In_Sec;