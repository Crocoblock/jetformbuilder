import { prepareActionsListByType } from '../actions/action-helper';
import { globalTab } from '../settings/helper';
import { gatewayAttr, gatewayLabel } from '../gateways/gateway-helper';

const {
	useState,
	useEffect,
} = wp.element;

const {
	useSelect,
	useDispatch,
} = wp.data;

const { applyFilters } = wp.hooks;

export const useMetaState = ( key, ifEmpty = '{}', dependencies = undefined ) => {
	const meta = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
	}, dependencies );

	const { editPost } = useDispatch( 'core/editor', [ meta ] );

	const metaStateValue = JSON.parse( meta[ key ] || ifEmpty );

	const setMetaStateValue = callable => {
		let value;

		if ( 'function' === typeof callable ) {
			value = callable( metaStateValue );
		} else {
			value = callable;
		}

		editPost( {
			meta: (
				{
					...meta,
					[ key ]: JSON.stringify( value ),
				}
			),
		} );
	};

	return [ metaStateValue, setMetaStateValue ];
};

export const useActions = () => {
	return useMetaState( '_jf_actions' );
};


export const initClasses = [ 'jet-form-validate-button' ];

export const useStateValidClasses = initialValid => {
	const validClass = 'is-valid';
	const invalidClass = 'is-invalid';

	const initStateClasses = () => {
		if ( initialValid ) {
			return [ ...initClasses, validClass ];
		} else if ( ! initialValid ) {
			return [ ...initClasses, invalidClass ];
		}
	};

	const [ classes, setClasses ] = useState( initStateClasses() );

	const setValidClass = () => {
		setClasses( [ ...initClasses, validClass ] );
	};
	const setInvalidClass = () => {
		setClasses( [ ...initClasses, invalidClass ] );
	};
	const setLoadingClass = () => {
		setClasses( [ ...initClasses, 'loading' ] );
	};

	return [ classes.join( ' ' ), setValidClass, setInvalidClass, setLoadingClass ];
};

export const useStateLoadingClasses = () => {
	const [ classes, setClasses ] = useState( [ ...initClasses ] );

	const setLoadingClass = () => {
		setClasses( [ ...initClasses, 'loading' ] );
	};
	const clearLoadingClass = () => {
		setClasses( initClasses );
	};

	return [ classes.join( ' ' ), setLoadingClass, clearLoadingClass ];
};

export const useSuccessNotice = ( text, options = {} ) => {
	const [ hasCopied, setHasCopied ] = useState( false );
	const noticeStore = useDispatch( wp.notices.store );

	useEffect( () => {
		if ( hasCopied ) {
			noticeStore.createWarningNotice( text, { type: 'snackbar', ...options } );
		}
	}, [ hasCopied ] );

	return setHasCopied;
};

export const withDispatchNotice = ( dispatch ) => {
	return {
		createNotice: ( status, text, options = {} ) => {
			dispatch( wp.notices.store ).createNotice(
				status, text, {
					type: 'default',
					status: 'info',
					...options,
				},
			);
		},
	};
};

export const getRequestFields = actions => {
	const requestFields = [];

	for ( const action of actions ) {
		const {
			[ action.type ]: current = {},
		} = action.settings;

		if ( ! current.requestFields ) {
			continue;
		}

		for ( const requestField of current.requestFields ) {
			const index = requestFields.findIndex( field => field.value === requestField.name );

			if ( - 1 !== index ) {
				continue;
			}

			requestFields.push( {
				from: action.type,
				id: action.id,
				label: requestField.name,
				value: requestField.name,
				name: requestField.name,
				help: requestField.help,
			} );
		}
	}

	return requestFields;
};

export const useRequestFields = ( options = {} ) => {
	const meta = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
	} );
	const actions = JSON.parse( meta._jf_actions || '[]' );

	return getRequestFields( actions );
};

const selectPostMeta = select => {
	return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
};

export const selectParsedPostMeta = ( select, name ) => {
	const allMeta = selectPostMeta( select );

	return JSON.parse( allMeta[ name ] || '{}' );
};

export const useSelectPostMeta = ( name ) => {
	const allMeta = useSelect( select => selectPostMeta( select ) );

	return JSON.parse( allMeta[ name ] || '{}' );
};

export const withCurrentAction = select => {
	const currentAction = select( 'jet-forms/actions' ).getCurrentAction();

	return { currentAction };
};

export const withRequestFields = select => {
	const meta = select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
	const actions = JSON.parse( meta._jf_actions || '[]' );
	const currentAction = select( 'jet-forms/actions' ).getCurrentAction();

	actions.splice( currentAction.index );

	return { requestFields: getRequestFields( actions ) };
};

export const withSelectActionLoading = select => {
	const loadingState = select( 'jet-forms/actions' ).getCurrentLoading();

	return { loadingState };
};

export const withDispatchActionLoading = dispatch => {
	return {
		setLoading( actionId ) {
			dispatch( 'jet-forms/actions' ).setLoading( { actionId } );
		},
		setResultSuccess( actionId, response ) {
			dispatch( 'jet-forms/actions' ).setLoadingResult( {
				actionId,
				success: true,
				response,
			} );
		},
		setResultFail( actionId ) {
			dispatch( 'jet-forms/actions' ).setLoadingResult( {
				actionId,
				success: false,
				response: {},
			} );
		},
	};
};

export const withDispatchMeta = ( metaSlug, callbackName ) => ( dispatch, ownProps, { select } ) => {
	const allMeta = selectPostMeta( select );

	const {
		editPost,
	} = dispatch( 'core/editor' );

	const change = newState => editPost( {
		meta: (
			{
				...allMeta,
				[ metaSlug ]: JSON.stringify( newState ),
			}
		),
	} );

	return {
		[ callbackName ]: change,
	};
};

export const withSelectMeta = ( metaSlug, ifEmpty = {} ) => select => {
	const current = selectParsedPostMeta( select, metaSlug );

	return {
		[ metaSlug ]: (
			current ?? ifEmpty
		),
	};
};

export const withSelectGateways = select => {
	const store = select( 'jet-forms/gateways' );

	const gatewayRequestId = store.getCurrentRequestId();
	const gatewaySpecific = store.getGatewaySpecific();
	const scenario = store.getScenario();

	const CURRENT_GATEWAY = store.getGatewayId();
	const { id: CURRENT_SCENARIO = 'PAY_NOW' } = scenario;

	const {
		use_global = false,
	} = gatewaySpecific;

	const currentTab = globalTab( { slug: CURRENT_GATEWAY } );

	const getSpecificOrGlobal = ( key, ifEmpty = '' ) => {
		return (
			use_global ? (
				currentTab[ key ] || ifEmpty
			) : (
				gatewaySpecific[ key ] || ifEmpty
			)
		);
	};

	const callableGateway = gatewayAttr( 'additional' );
	const additionalSourceGateway = callableGateway( CURRENT_GATEWAY );

	const loadingGateway = select( 'jet-forms/actions' ).getLoading( gatewayRequestId );

	const globalGatewayLabel = gatewayAttr( 'labels' );
	const specificGatewayLabel = gatewayLabel( CURRENT_GATEWAY );

	const customGatewayLabel = function ( key ) {
		return globalGatewayLabel( `${ CURRENT_GATEWAY }.${ key }` );
	};
	const scenarioLabel = function ( key ) {
		return customGatewayLabel( `scenario.${ CURRENT_SCENARIO }.${ key }` );
	};

	return {
		gatewayGeneral: store.getGateway(),
		gatewayRequest: store.getCurrentRequest(),
		scenarioSource: additionalSourceGateway[ CURRENT_SCENARIO ] || {},
		currentScenario: scenario[ CURRENT_SCENARIO ] || {},
		CURRENT_SCENARIO,
		gatewayScenario: scenario,
		additionalSourceGateway,
		gatewaySpecific,
		gatewayRequestId,
		loadingGateway,
		getSpecificOrGlobal,
		globalGatewayLabel,
		specificGatewayLabel,
		customGatewayLabel,
		scenarioLabel,
	};
};

export const withDispatchGateways = ( dispatch ) => {
	const store = dispatch( 'jet-forms/gateways' );

	return {
		setGatewayRequest: store.setRequest,
		setGatewayScenario: store.setScenario,
		setScenario: store.setCurrentScenario,
		setGateway: store.setGateway,
		setGatewayInner: store.setGatewayInner,
		setGatewaySpecific: store.setGatewaySpecific,
		clearGateway: store.clearGateway,
		clearScenario: store.clearScenario,
	};
};

const getFormFields = ( blockParserFunc, blocks ) => {
	blocks.map( block => {
		blockParserFunc( block );

		if ( block.innerBlocks.length ) {
			getFormFields( blockParserFunc, block.innerBlocks );
		}
	} );
};

export const withSelectFormFields = (
	exclude = [],
	placeholder = false,
	suppressFilter = false,
) => select => {

	let formFields = [];
	let skipFields = [ 'submit', 'form-break', 'heading', 'group-break', 'conditional', ...exclude ];

	getFormFields( block => {
		if ( block.name.includes( 'jet-forms/' )
		     && block.attributes.name
		     && ! skipFields.find( field => block.name.includes( field ) )
		) {

			/*const blockType = select( blocksStore ).getBlockType( block.name );*/

			formFields.push( {
				blockName: block.name,
				name: block.attributes.name,
				label: block.attributes.label || block.attributes.name,
				value: block.attributes.name,
				//icon: blockType.icon.src,
			} );
		}
	}, select( 'core/block-editor' ).getBlocks() );

	formFields = placeholder
		? [ { value: '', label: placeholder }, ...formFields ]
		: formFields;

	return {
		formFields: suppressFilter ? formFields : applyFilters( 'jet.fb.getFormFieldsBlocks', formFields ),
	};
};

export const withSelectActionsByType = ( actionType, withDesc = false ) => select => {
	const { _jf_actions } = withSelectMeta( '_jf_actions', [] )( select );

	return {
		[ actionType ]: prepareActionsListByType( _jf_actions, actionType, withDesc ),
	};
};
