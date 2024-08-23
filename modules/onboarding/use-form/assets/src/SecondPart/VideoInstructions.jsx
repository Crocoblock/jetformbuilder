import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useSelect } from '@wordpress/data';
import { styled } from '@linaria/react';
import { useState } from '@wordpress/element';

const VideoIframe = styled.iframe`
    border: 0;
    margin: 0 auto;
	display: ${ ({ showVideo }) => showVideo ? 'block' : 'none' };
    width: 100%;
	aspect-ratio: 16 / 9;
`;

function VideoInstructions() {
	const currentBuilder = useSelect( select => (
		select( 'jet-forms/use-form' ).getCurrentBuilder()
	), [] );

	const [ showVideo, setShowVideo ] = useState( false );

	return <>
		<div>
			<Button
				variant="link"
				onClick={ () => setShowVideo( prev => !prev ) }
			>
				{ showVideo
				  ? __(
						'Hide video instructions',
						'jet-form-builder',
					) : __(
						'Show video instructions',
						'jet-form-builder',
					) }
			</Button>
		</div>
		<VideoIframe
			src={ currentBuilder.embed.src }
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerPolicy="strict-origin-when-cross-origin"
			allowFullScreen
			showVideo={ showVideo }
		/>
	</>;
}

export default VideoInstructions;