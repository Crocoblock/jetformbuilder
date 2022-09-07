import withPreset from './withPreset';
import GlobalFieldPreset from './GlobalFieldPreset';
import MapFieldPreset from './MapFieldPreset';
import ActionModalContext from '../../action-modal/context/ActionModalContext';

const {
	      useState,
	      useEffect,
	      useContext,
      } = wp.element;

let DynamicPreset = function ( {
	value,
	isSaveAction,
	onSavePreset,
	onUnMount,
	parseValue,
	excludeOptions,
	isCurrentFieldVisible,
	isVisible,
} ) {

	const position                 = 'dynamic';
	const [ stateValue, setValue ] = useState(
		() => parseValue( value ),
	);

	const { actionClick, onRequestClose } = useContext( ActionModalContext );

	if ( 'undefined' === typeof isSaveAction ) {
		isSaveAction = actionClick;
	}
	if ( 'undefined' === typeof onUnMount ) {
		onUnMount = onRequestClose;
	}

	const onChangeValue = ( newValue, name ) => {
		setValue( prev => (
			{ ...prev, [ name ]: newValue }
		) );
	};

	useEffect( () => {
		// update field attributes
		if ( isSaveAction && onSavePreset ) {
			onSavePreset( JSON.stringify( stateValue ) );
		}

		if ( null !== isSaveAction ) {
			onUnMount();
		}
	}, [ isSaveAction ] );

	return <>
		{ window.JetFormEditorData.presetConfig.global_fields.map(
			( data, index ) => <GlobalFieldPreset
				key={ `current_field_${ data.name }_${ index }` }
				value={ stateValue }
				index={ index }
				data={ data }
				excludeOptions={ excludeOptions }
				onChangeValue={ onChangeValue }
				isVisible={ isVisible }
				position={ position }
			/> ) }

		{ window.JetFormEditorData.presetConfig.map_fields.map(
			( data, index ) => <MapFieldPreset
				key={ `current_field_${ data.name }_${ index }` }
				currentState={ stateValue }
				value={ stateValue[ 'current_field_' + data.name ] }
				index={ index }
				data={ data }
				onChangeValue={ onChangeValue }
				isCurrentFieldVisible={ isCurrentFieldVisible }
				position={ position }
			/> ) }
	</>;
};

DynamicPreset = withPreset( DynamicPreset );

export default DynamicPreset;