import TurnstileOptions from './TurnstileOptions';
import preview from './preview';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

function TurnstileBlockEdit( { isSelected, attributes } ) {
	const blockProps = useBlockProps();

	if ( attributes.isPreview ) {
		return <div style={ {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
		} }>
			{ preview }
		</div>;
	}

	return <>
		<div { ...blockProps }>
			{ isSelected
			  ? <div style={ { padding: '20px' } }>
				  <TurnstileOptions/>
			  </div>
			  : preview }
		</div>
		<InspectorControls>
			<div style={ { padding: '20px' } }>
				<TurnstileOptions/>
			</div>
		</InspectorControls>
	</>;
}

export default TurnstileBlockEdit;