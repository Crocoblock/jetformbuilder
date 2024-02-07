import CurrentActionEditContext from '../context/CurrentActionEditContext';
import useRequestFields from './useRequestFields';
import getFormFieldsBlocks from '../../blocks/helpers/getFormFieldsBlocks';

const {
	      useEffect,
	      useContext,
      } = wp.element;

function useSanitizeFieldsMap( mapProperty = 'fields_map' ) {
	const requestFields = useRequestFields();

	const {
		      settings,
		      onChangeSettingObj,
	      } = useContext( CurrentActionEditContext );

	useEffect( () => {
		if ( !settings.hasOwnProperty( mapProperty ) ) {
			return;
		}
		const fields    = [ ...getFormFieldsBlocks(), ...requestFields ];
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] );
}

export default useSanitizeFieldsMap;