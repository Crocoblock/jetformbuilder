import usePreviewOptions from '../../hooks/usePreviewOptions';
import JfbSelect from '../../../shared/JfbSelect';

function SelectView( { attributes } ) {
	const options = usePreviewOptions( attributes );

	return <select className={ JfbSelect }>
		{ attributes.placeholder && (
			<option
				value=""
				selected
				disabled={ attributes.is_disabled_placeholder }
			>
				{ attributes.placeholder }
			</option>
		) }
		{ options.map( ( { label }, index ) => (
			<option key={ 'option-' + index } value="">{ label }</option>
		) ) }
	</select>;
}

export default SelectView;