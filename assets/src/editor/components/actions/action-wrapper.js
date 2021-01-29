import { getLocalizedFullPack } from "../../helpers/action-helper";

export default function withActionLocalizeScript( actionType, ActionInstance ) {
	const localizedData = getLocalizedFullPack( actionType );

	return props => <ActionInstance { ...props } { ...localizedData } />;
}