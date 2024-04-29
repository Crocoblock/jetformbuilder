import { FORMAT } from './constants';

export function getCheckoutFieldFormat() {
	return window?.JetABAFInput?.field_format ?? FORMAT;
}

export function getCheckoutFieldLayout() {
	return window?.JetABAFInput?.layout ?? 'single';
}

/**
 * @param name {String}
 * @returns {*}
 */
export function getCheckoutDataSetting( name ) {
	return window?.JetABAFData?.[ name ];
}

