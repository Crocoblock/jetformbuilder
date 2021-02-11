import { fromLocalizeHelper } from "../../helpers/action-helper";

export default function withActionLocalizeScript( actionType, ActionInstance ) {
	const localizedData = fromLocalizeHelper( 'getLocalizedFullPack' )( actionType );

	return props => {
		const onChangeSetting = ( value, key ) => {
			props.onChange( {
				...props.settings,
				[ key ]: value
			} );
		};

		const getMapField = ( { source = 'fields_map', name } ) => {
			const settings = props.settings;

			if ( typeof settings[ source ] !== 'undefined' && typeof settings[ source ][ name ] !== 'undefined' ) {
				return settings[ source ][ name ];
			}
			return '';
		};

		const setMapField = ( { source = 'fields_map', nameField, value } ) => {
			const fieldsMap = {
				...props.settings[ source ],
				[ nameField ]: value,
			};

			props.onChange( {
				...props.settings,
				[ source ]: fieldsMap
			} );
		}

		const additionalProps = { onChangeSetting, getMapField, setMapField };

		return <ActionInstance
			{ ...props }
			{ ...localizedData }
			{ ...additionalProps }
		/>
	};
}