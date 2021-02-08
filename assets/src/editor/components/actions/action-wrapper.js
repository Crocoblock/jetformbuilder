import { getLocalizedFullPack } from "../../helpers/action-helper";

export default function withActionLocalizeScript( actionType, ActionInstance ) {
	const localizedData = getLocalizedFullPack( actionType );

	return props => {
		const onChangeSetting = ( value, key ) => {
			props.onChange( {
				...props.settings,
				[ key ]: value
			} );
		};

		return <ActionInstance
			{ ...props }
			{ ...localizedData }
			onChangeSetting={ onChangeSetting }
		/>
	};
}