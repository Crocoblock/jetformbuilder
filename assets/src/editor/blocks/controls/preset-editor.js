/**
 * Internal dependencies
 */
const {
	TextControl,
	Modal
} = wp.components;

function JetFormPresetEditor( {
	value
	onChange,
	decode,
	encode,
	availableFields
} ) {

	const isVisible = ( data ) => {
		if ( ! data.condition && ! data.custom_condition ) {
			return true;
		}
	};

	return <div>
		{ window.JetFormEditorData.presetConfig.map( ( data, index ) => {
			return { isVisible( data ) && <div key={ 'field_' + index } className={ 'jet-form-canvas__preset-row' }>

			</div> }
		} ) }
		{ availableFields && (
			availableFields.map( ( field, index ) => {
				
			}
		) }
		{ ! availableFields && (
		) }
	</div>;
}

export default JetFormPresetEditor;
