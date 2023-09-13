const {
	      __,
      } = wp.i18n;

const {
	      Icon,
	      Flex,
      } = wp.components;

function AllProActionsLink() {
	return (
		!JetFormEditorData.isActivePro
	) && <Flex
		gap={ 3 }
		justify="center"
		style={ {
			width: 'calc( 100% + 32px )',
			borderTop: '1px solid rgb(224, 224, 224)',
			marginTop: '16px',
			marginLeft: '-16px',
			marginBottom: '-8px',
			paddingTop: '8px',
		} }
	>
		<a
			href={ JetFormEditorData.utmLinks.allProActions }
			target="_blank"
			rel="external noreferrer noopener"
		>
			<Flex>
				{ __( 'All PRO Actions', 'jet-form-builder' ) }
				<Icon
					size={ 20 }
					icon={
						<svg xmlns="http://www.w3.org/2000/svg"
						     viewBox="0 0 24 24"
						     width="24" height="24" aria-hidden="true"
						     focusable="false"
						     fill="currentColor"
						>
							<path
								d="M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"/>
						</svg>
					}
				/>
			</Flex>
		</a>
	</Flex>;
}

export default AllProActionsLink;