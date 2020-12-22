/**
 * Internal dependencies
 */
import PresetRender from "./preset-render";

const {
	TextControl,
	SelectControl,
	Modal
} = wp.components;

const {
	useState,
	useEffect
} = wp.element;

function withPreset( WrappedComponent ) {
	return function JetFormPresetEditor( props ) {

		const parseValue = () => {
			let val = {};

			if ( 'object' === typeof props.value ) {
				val = { ...props.value };
			} else if ( props.value && 'string' === typeof props.value ) {
				try {
					val = JSON.parse( props.value );
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

		const isVisible = ( currentState, data ) => {

			if ( ! data.condition && ! data.custom_condition ) {
				return true;
			}

			if ( data.custom_condition ) {
				switch ( data.custom_condition ) {
					case 'query_var':
						return ( ( 'post' === currentState.from && 'query_var' === currentState.post_from ) || ( 'user' === currentState.from && 'query_var' === currentState.user_from ) );
				}
			}

			if ( data.condition ) {
				return currentState[ data.condition.field ] === data.condition.value;
			}

			return true;

		};

		const isCurrentFieldVisible = ( currentState, data ) => {

			if ( ! data.condition && ! data.parent_condition ) {
				return true;
			}

			if ( data.parent_condition && ! data.condition ) {
				return currentState[ data.parent_condition.field ] === data.parent_condition.value;
			} else if ( data.parent_condition && data.condition ) {
				return currentState[ 'current_field_' + data.condition.field ] === data.condition.value && currentState[ data.parent_condition.field ] === data.parent_condition.value;
			} else if ( ! data.parent_condition && data.condition ) {
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
			} else if ( data.parent_condition && data.condition ) {
				if ( ! currentState.fields_map || ! currentState.fields_map[ field ] ) {
					return false;
				} else {
					return currentState.fields_map[ field ][ data.condition.field ] === data.condition.value && currentState[ data.parent_condition.field ] === data.parent_condition.value;
				}
			} else if ( ! data.parent_condition && data.condition ) {
				if ( ! currentState.fields_map || ! currentState.fields_map[ field ] ) {
					return false;
				} else {
					return currentState.fields_map[ field ][ data.condition.field ] === data.condition.value;
				}
			}

			return true;

		};

		const excludeOptions = ( selectOptions ) => {
			selectOptions.forEach( ( option, index ) => {
				if ( props.excludeSources && props.excludeSources.includes( option.value ) ) {
					selectOptions.splice( index, 1 );
				}
			} );
			return selectOptions;
		};

		return <WrappedComponent
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
