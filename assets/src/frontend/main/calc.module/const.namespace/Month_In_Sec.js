/* eslint-disable camelcase */
import BaseInternalMacro from './BaseInternalMacro';
import Constants from '../constants';

function Month_In_Sec() {
	BaseInternalMacro.call( this );

	this.getId     = () => 'Month_In_Sec';
	this.getResult = () => Constants.Month_In_Sec;
}

Month_In_Sec.prototype = Object.create( BaseInternalMacro.prototype );

export default Month_In_Sec;