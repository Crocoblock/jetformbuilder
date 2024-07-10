/* eslint-disable camelcase */
import BaseInternalMacro from './BaseInternalMacro';
import Constants from '../constants';

function Year_In_Sec() {
	BaseInternalMacro.call( this );

	this.getId     = () => 'Year_In_Sec';
	this.getResult = () => Constants.Year_In_Sec;
}

Year_In_Sec.prototype = Object.create( BaseInternalMacro.prototype );

export default Year_In_Sec;