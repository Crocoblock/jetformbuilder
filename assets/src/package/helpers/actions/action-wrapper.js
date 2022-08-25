import { fromLocalizeHelper } from './action-helper';
import CurrentActionEdit from '../../context/current.action.edit';

const {
	      withFilters,
      } = wp.components;

export default function withActionLocalizeScript( actionType, ActionInstance ) {
	const localizedData = fromLocalizeHelper( 'getLocalizedFullPack' )(
		actionType );

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

		const CustomSettings = withFilters(
			`jet.fb.render.action.${ actionType }`,
		)(
			() => null,
		);

		return <CurrentActionEdit.Provider value={ resultProps }>
			<ActionInstance { ...resultProps } />
			<CustomSettings { ...resultProps } />
		</CurrentActionEdit.Provider>;
	};
}