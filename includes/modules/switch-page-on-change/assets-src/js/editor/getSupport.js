import { SUPPORT_NAME } from './constants';

const { get } = window._;

function getSupport( settings ) {
	return get(
		settings,
		[ 'supports', SUPPORT_NAME ],
		false,
	);
}

export default getSupport;