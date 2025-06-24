const { applyFilters } = wp.hooks;

// eslint-disable-next-line max-lines-per-function
function withPreset( WrappedComponent ) {
	// eslint-disable-next-line max-lines-per-function
	return function JetFormPresetEditor( props ) {

		const parseValue = () => {
			let val = {};

			if ( 'object' === typeof props.value ) {
				val = { ...props.value };
			}
			else if ( props.value && 'string' === typeof props.value ) {
				try {
					val = JSON.parse( props.value );
					// eslint-disable-next-line max-depth
					if ( 'number' === typeof val ) {
						throw new Error();
					}
				} catch ( exception ) {
					val = {};
				}
			}
			val.jet_preset = true;

			return val;
		}

		const isVisible = ( currentState, data, position ) => {
			return ( ( data.position && position === data.position )
				|| ! data.position || 'query_var' !== currentState.from ) && isGlobalVisible( currentState, data );
		};

		const isGlobalVisible = ( currentState, data ) => {
			if ( ! data.condition && ! data.custom_condition ) {
				return true;
			}

			if ( data.custom_condition ) {
				switch ( data.custom_condition ) {
					case 'query_var':
						return (
							( 'post' === currentState.from && 'query_var' === currentState.post_from )
							|| ( 'user' === currentState.from && 'query_var' === currentState.user_from )
							|| ( 'term' === currentState.from && 'query_var' === currentState.term_from )
							|| ( 'query_var' === currentState.from )
						);
					default:
						return applyFilters( 'jet.fb.preset.editor.custom.condition', false, data.custom_condition, currentState );
				}
			}

			if ( data.condition ) {
				return currentState[ data.condition.field ] === data.condition.value;
			}

			return true;
		}

		const isCurrentFieldVisible = ( currentState, data, position ) => {

			if ( ! data.condition && ! data.parent_condition ) {
				return true;
			}
			if ( data.position && position !== data.position ) {
				return false;
			}

			if ( data.parent_condition && ! data.condition ) {
				return currentState[ data.parent_condition.field ] === data.parent_condition.value;
			}
			else if ( data.parent_condition && data.condition ) {
				return currentState[ 'current_field_' + data.condition.field ] === data.condition.value && currentState[ data.parent_condition.field ] === data.parent_condition.value;
			}
			else if ( ! data.parent_condition && data.condition ) {
				return currentState[ 'current_field_' + data.condition.field ] === data.condition.value;
			}

			return true;
		}

		const isMapFieldVisible = ( currentState, data, field ) => {

			if ( ! data.condition && ! data.parent_condition ) {
				return true;
			}

			if ( data.parent_condition && ! data.condition ) {
				return currentState[ data.parent_condition.field ] === data.parent_condition.value;
			}
			else if ( data.parent_condition && data.condition ) {
				if ( ! currentState.fields_map || ! currentState.fields_map[ field ] ) {
					return false;
				}
				
					return currentState.fields_map[ field ][ data.condition.field ] === data.condition.value && currentState[ data.parent_condition.field ] === data.parent_condition.value;
				
			}
			else if ( ! data.parent_condition && data.condition ) {
				if ( ! currentState.fields_map || ! currentState.fields_map[ field ] ) {
					return false;
				}
				
					return currentState.fields_map[ field ][ data.condition.field ] === data.condition.value;
				
			}

			return true;

		};

		const excludeOptions = ( selectOptions ) => {
			const options = [ ...selectOptions ];
			options.forEach( ( option, index ) => {
				if ( props.excludeSources && props.excludeSources.includes( option.value ) ) {
					options.splice( index, 1 );
				}
			} );
			return options;
		};

		return <WrappedComponent
			key='wrapped-preset-editor'
			{ ...props }
			parseValue={ parseValue }
			isVisible={ isVisible }
			isMapFieldVisible={ isMapFieldVisible }
			isCurrentFieldVisible={ isCurrentFieldVisible }
			excludeOptions={ excludeOptions }
		/>;
	}
}

export default withPreset;
