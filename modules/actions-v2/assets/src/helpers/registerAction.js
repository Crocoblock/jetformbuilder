import { dispatch } from '@wordpress/data';
import { STORE_NAME } from '../store';

/**
 * @param actionSettings {{
 *     type: string,
 *     label: string,
 *     edit: Function,
 *     icon: React.JSX.Element|null,
 *     category: string|null,
 *     docHref: string|null,
 *     provideEvents: Function|null
 *     disableConditions: Boolean|null,
 *     disabled: Boolean|null,
 *     fixed: Boolean|null,
 *     validators: Function[]|null
 * }}
 * @returns {(function({select: *, dispatch: *}): void)|*}
 */
function registerAction( actionSettings ) {
	dispatch( STORE_NAME ).registerAction( actionSettings );
}

export default registerAction;