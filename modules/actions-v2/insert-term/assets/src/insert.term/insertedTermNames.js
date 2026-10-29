import { __ } from '@wordpress/i18n';

const { select } = wp.data;

export const normalizeTaxonomy = taxonomy => String( taxonomy || '' ).replace( 'jet_tax__', '' );

const getTaxonomy = action => {
	const { insert_term: insertTerm = {} } = action?.settings ?? {};

	return normalizeTaxonomy( insertTerm.taxonomy );
};

const isEnabled = item => false !== item.is_execute;

const getFormActions = () => {
	const meta = select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};

	try {
		return JSON.parse( meta._jf_actions || '[]' );
	} catch ( e ) {
		return [];
	}
};

/**
 * Enabled Insert/Update Term actions that are placed before the action being edited,
 * i.e. the ones whose results are really available in it.
 * Disabled actions are not executed, so they are not offered.
 *
 * @return {Object[]}
 */
export const getAvailableInsertTermActions = () => {
	const index = Number( select( 'jet-forms/actions' )?.getCurrentAction?.()?.index );
	let actions = getFormActions();

	if ( !Number.isNaN( index ) ) {
		actions = actions.slice( 0, index );
	}

	return actions.filter(
		item => 'insert_term' === item.type && isEnabled( item ) && getTaxonomy( item ),
	);
};

export const isActionAvailable = action => getAvailableInsertTermActions().some(
	item => String( item.id ) === String( action.id ),
);

/**
 * The same rule is used on the PHP side (Base_Term_Action::get_inserted_field_suffix()):
 * {prefix}{taxonomy}_{action ID}. It depends only on the action itself,
 * so it does not change when actions are reordered or added.
 *
 * @param {string} prefix inserted_term_id_ | inserted_term_title_
 * @param {Object} action
 * @return {string}
 */
export const getInsertedFieldName = ( prefix, action ) => (
	`${ prefix }${ getTaxonomy( action ) }_${ action.id }`
);

export { getTaxonomy };

/**
 * Readable label for the macros list: "inserted_term_id (tag 2 · 6174)".
 * The name set in the editor, or the taxonomy if there is no name, and the action ID.
 * The inserted macro still has the full name.
 *
 * @param {string} prefix inserted_term_id_ | inserted_term_title_
 * @param {Object} action
 * @return {string}
 */
export const getInsertedFieldLabel = ( prefix, action ) => {
	const name = String( action?.editor_name || '' ).trim() || getTaxonomy( action );

	return `${ prefix.replace( /_$/, '' ) } (${ name } · ${ action.id })`;
};

/**
 * "Insert/Update Term tag 2 (6174)": the name set in the editor and the action ID
 *
 * @param {Object} action
 * @return {string}
 */
export const getActionLabel = action => {
	const name = String( action?.editor_name || '' ).trim()
		|| __( 'Insert/Update Term', 'jet-form-builder' );

	return `${ name } (${ action.id })`;
};
