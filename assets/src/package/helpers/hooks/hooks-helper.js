import { prepareActionsListByType } from '../actions/action-helper';

const {
	useState,
	useEffect,
} = wp.element;

const {
	useSelect,
	useDispatch,
} = wp.data;

const { applyFilters } = wp.hooks;

export const useMetaState = ( key, ifEmpty = '{}' ) => {
	const meta = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
	} );

	const {
		editPost,
	} = useDispatch( 'core/editor' );

	const [ metaStateValue, setMetaStateValue ] = useState( JSON.parse( meta[ key ] || ifEmpty ) );

	useEffect( () => {
		editPost( {
			meta: (
				{
					...meta,
					[ key ]: JSON.stringify( metaStateValue ),
				}
			),
		} );
	}, [ metaStateValue ] );

	return [ metaStateValue, setMetaStateValue ];
};

export const useActions = ( withEditPostEffect = false ) => {
	const meta = useSelect( ( select ) => {
		return select( 'core/editor' ).getEditedPostAttribute( 'meta' ) || {};
	} );

	const {
		editPost,
	} = useDispatch( 'core/editor' );

	const [ actions, setActions ] = useState( JSON.parse( meta._jf_actions || '[]' ) );

	useEffect( () => {
		if ( withEditPostEffect ) {
			editPost( {
				meta: (
					{
						...meta,
						_jf_actions: JSON.stringify( actions ),
					}
				),
			} );
		}
	}, [ actions ] );

	return [ actions, setActions ];
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

export const withNotice = ( dispatch ) => {
	return {
		createNotice: ( text, options = {} ) => {
			dispatch( wp.notices.store ).createNotice(
				text, {
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

const selectParsedPostMeta = ( select, name ) => {
	const allMeta = selectPostMeta( select );

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
			current || ifEmpty
		),
	};
};

export const withSelectGateways = select => {
	const store = select( 'jet-forms/gateways' );

	return {
		gatewayGeneral: store.getGateway(),
		gatewaySpecific: store.getGatewaySpecific(),
		gatewayRequestId: store.getCurrentRequestId(),
		gatewayRequest: store.getCurrentRequest(),
	};
};
export const withSelectGatewaysLoading = select => {
	const { gatewayRequestId, ...other } = withSelectGateways( select );

	const loadingGateway = select( 'jet-forms/actions' ).getLoading( gatewayRequestId );

	return {
		loadingGateway,
		gatewayRequestId,
		...other,
	};
};

export const withDispatchGateways = ( dispatch, ownProps, { select } ) => {
	return {
		setGatewayRequest( item ) {
			const { gatewayGeneral } = withSelectGateways( select );
			const items = [ gatewayGeneral.gateway, item?.id ].filter( value => value );

			item.id = items.join( '/' );

			dispatch( 'jet-forms/gateways' ).setRequest( item );
		},
		setGateway( item ) {
			dispatch( 'jet-forms/gateways' ).setGateway( item );
		},
		setGatewayInner( item ) {
			dispatch( 'jet-forms/gateways' ).setGatewayInner( item );
		},
		setGatewaySpecific( item ) {
			dispatch( 'jet-forms/gateways' ).setGatewaySpecific( item );
		},
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
