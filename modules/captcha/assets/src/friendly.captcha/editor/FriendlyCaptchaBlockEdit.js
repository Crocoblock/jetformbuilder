import FriendlyCaptchaOptions from './FriendlyCaptchaOptions';
import preview from './preview';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

function FriendlyCaptchaBlockEdit( { isSelected, attributes } ) {
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
			  ? <div>
				  <FriendlyCaptchaOptions/>
			  </div>
			  : preview }
		</div>
		<InspectorControls>
			<div style={ { padding: '20px' } }>
				<FriendlyCaptchaOptions/>
			</div>
		</InspectorControls>
	</>;
}

export default FriendlyCaptchaBlockEdit;