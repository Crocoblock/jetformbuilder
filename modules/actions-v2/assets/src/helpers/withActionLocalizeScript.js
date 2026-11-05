import CurrentActionEditContext from '../context/CurrentActionEditContext';
import { withFilters } from '@wordpress/components';
import { getLocalizedFullPack } from './legacyLocalize';

// eslint-disable-next-line max-lines-per-function
function withActionLocalizeScript( actionType, ActionInstance ) {
	const localizedData = getLocalizedFullPack( actionType );
	// eslint-disable-next-line @wordpress/no-unused-vars-before-return
	const CustomSettings = withFilters(
		`jet.fb.render.action.${ actionType }`,
	)(
		() => null,
	);

	return props => {
		const onChangeSetting = ( value, key ) => {
			props.onChange( {
				...props.settings,
				[ key ]: value,
			} );
		};

		const onChangeSettingObj = ( value ) => {
			props.onChange( {
				...props.settings,
				...value,
			} );
		};

		const getMapField = ( { source = 'fields_map', name } ) => {
			const settings = props.settings;

			if ( typeof settings[ source ] !== 'undefined' &&
				typeof settings[ source ][ name ] !== 'undefined' ) {
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
				[ source ]: fieldsMap,
			} );
		};

		const additionalProps = {
			onChangeSetting,
			getMapField,
			setMapField,
			onChangeSettingObj,
		};

		const resultProps = { ...props, ...localizedData, ...additionalProps };

		return <CurrentActionEditContext.Provider value={ resultProps }>
			<ActionInstance { ...resultProps } />
			<CustomSettings { ...resultProps } />
		</CurrentActionEditContext.Provider>;
	};
}

export default withActionLocalizeScript;
