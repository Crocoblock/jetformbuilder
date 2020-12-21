import PresetRender from "./preset-render";

function GeneralPreset( {} ) {
	return ( <React.Fragment>
		{ window.JetFormEditorData.presetConfig.global_fields.map( ( data, index ) => <PresetRender.GlobalField
			value={ stateValue[ data.name ] }
			index={ index }
			data={ data }
			options={ excludeOptions( data.options ) }
			onChangeValue={ onChangeValue }
		/> ) }

		{ ( availableFields && stateValue.from ) && (
			availableFields.map( ( field, index ) => <PresetRender.AvailableMapField
				fieldsMap={ stateValue.fields_map }
				field={ field }
				index={ index }
			/> )
		) }

		{ ! Boolean( availableFields ) && ( window.JetFormEditorData.presetConfig.map_fields.map( ( data, index ) => <PresetRender.MapField
				value={ stateValue[ 'current_field_' + data.name ] }
				index={ index }
				data={ data }
				onChangeValue={ onChangeValue }
			/> )
		) }
	</React.Fragment> );
}