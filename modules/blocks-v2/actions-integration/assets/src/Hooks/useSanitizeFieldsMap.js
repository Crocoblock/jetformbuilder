import useFields from './useFields';
import { useEffect, useContext } from '@wordpress/element';
import { CurrentActionEditContext } from 'jet-form-builder-actions';

function useSanitizeFieldsMap( mapProperty = 'fields_map' ) {
	const fields = useFields( { withInner: false }, [] );

	const {
		      settings,
		      onChangeSettingObj,
	      } = useContext( CurrentActionEditContext );

	useEffect( () => {
		if ( !settings.hasOwnProperty( mapProperty ) ) {
			return;
		}
		const fieldsMap = settings[ mapProperty ];

		const hasField = fieldName => {
			return -1 !== fields.findIndex(
				current => current.value === fieldName,
			);
		};

		for ( const fieldName in fieldsMap ) {
			if ( !fieldsMap.hasOwnProperty( fieldName ) ) {
				continue;
			}

			if ( !hasField( fieldName ) ) {
				delete fieldsMap[ fieldName ];
			}
		}
		onChangeSettingObj( { [ mapProperty ]: fieldsMap } );
	}, [ mapProperty ] );
}

// backward compatibility
window.JetFBHooks                      = window.JetFBHooks ?? {};
window.JetFBHooks.useSanitizeFieldsMap = useSanitizeFieldsMap;

export default useSanitizeFieldsMap;