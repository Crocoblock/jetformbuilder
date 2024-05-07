import usePreviewOptions from '../../hooks/usePreviewOptions';
import '../../../shared/JfbSelect.css';

function SelectView( { attributes } ) {
	const options = usePreviewOptions( attributes );

	return <select className={ [ 'jfb-input' ].join( ' ' ) }>
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