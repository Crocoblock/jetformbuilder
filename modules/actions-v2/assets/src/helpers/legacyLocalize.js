function getLocalized(actionType, objectKey = '') {
	const preparedAction = window.jetFormActionTypes.find(action => actionType === action.id);
	if (!preparedAction) {
		return false;
	}
	const actionSelfLocalized = window[ preparedAction.self ];

	return (objectKey && actionSelfLocalized[ objectKey ]) ? actionSelfLocalized[ objectKey ] : actionSelfLocalized;
}

function getSourceObjectName(actionType) {
	const preparedAction = window.jetFormActionTypes.find(action => actionType === action.id);

	return preparedAction ? preparedAction.self : false;
}

function getLocalizedWithFunc({ actionType = false, source = false }, objectKey, ifEmptyReturn = '') {
	let action = false;

	if (source && source[ objectKey ]) {
		action = source[ objectKey ];
	} else if (actionType) {
		action = (getLocalized(actionType)[ objectKey ]);
	}

	if (!action) {
		return () => ifEmptyReturn;
	}

	return attr => {
		if (attr) {
			return (action[ attr ] ? action[ attr ] : ifEmptyReturn);
		} 
			return action;
		
	};
}

function localizedLabel(settings) {
	return getLocalizedWithFunc(settings, '__labels', '[Empty Label]');
}

function localizedHelp(settings) {
	return getLocalizedWithFunc(settings, '__help_messages');
}

function localizedGatewayAttrs(settings) {
	return getLocalizedWithFunc(settings, '__gateway_attrs', []);
}

function localizedMessages(settings) {
	return getLocalizedWithFunc(settings, '__messages', {});
}

export function getLocalizedFullPack(actionType, source = false) {
	if (!source) {
		source = getLocalized(actionType);
	}

	function setSource(props = {}) {
		const name = getSourceObjectName(actionType);

		if (!name || !window[ name ]) {
			return false;
		}
		window[ name ] = {
			...window[ name ],
			...props,
		};

		return true;
	}

	const label = localizedLabel({ source });
	const help = localizedHelp({ source });
	const messages = localizedMessages({ source });
	const gatewayAttrs = localizedGatewayAttrs({ source });

	return { source, label, help, messages, gatewayAttrs, setSource };
}
