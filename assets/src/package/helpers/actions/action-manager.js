import withActionLocalizeScript from "./action-wrapper";

function addAction( actionType, actionInstance ) {
	window.jetFormDefaultActions = window.jetFormDefaultActions || {};
	window.jetFormDefaultActions[ actionType ] = withActionLocalizeScript( actionType, actionInstance );
}

export default addAction;
