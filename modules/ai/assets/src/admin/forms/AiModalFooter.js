import serialize from './serialize';

const {
	      Flex,
	      Button,
      } = wp.components;

const {
	      __,
      } = wp.i18n;

const {
	      apiFetch,
      } = wp;

const {
	      parseHTMLtoBlocks,
      } = JetFormBuilderParser;

const getPostEditUrl = id => {
	const url = new URL( JetFormBuilderAdmin.edit_url );
	url.searchParams.set( 'post', id );

	return url.href;
};

function AiModalFooter( { clearHTML, formHTML, prompt, children = null } ) {

	const createForm = () => {
		const blocks = parseHTMLtoBlocks( formHTML );

		if ( !blocks.length ) {
			console.error(
				__( 'JFB: Invalid html', 'jet-form-builder' ),
				formHTML,
			);

			return;
		}

		apiFetch( {
			method: 'POST',
			path: '/wp/v2/jet-form-builder',
			data: {
				title: prompt,
				content: serialize( blocks ),
				status: 'publish',
			},
		} ).then( response => {
			window.location.href = getPostEditUrl( response.id );
		} ).catch(
			console.error,
		);
	};

	return <Flex justify="flex-start">
		<Button
			variant="primary"
			onClick={ createForm }
		>
			{ __( 'Create form with this template', 'jet-form-builder' ) }
		</Button>
		<Button
			variant="secondary"
			onClick={ clearHTML }
		>
			{ __( 'Change generation prompt', 'jet-form-builder' ) }
		</Button>
		{ children }
	</Flex>;
}

export default AiModalFooter;