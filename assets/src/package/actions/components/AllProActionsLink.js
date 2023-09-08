const {
	      __,
      } = wp.i18n;

const {
	      ExternalLink,
      } = wp.components;

function AllProActionsLink() {
	return (
		!JetFormEditorData.isActivePro
	) && <div className={ 'jet-fb flex-center' }>
		<ExternalLink href={ JetFormEditorData.utmLinks.allProActions }>
			{ __( 'All PRO Actions', 'jet-form-builder' ) }
		</ExternalLink>
	</div>;
}

export default AllProActionsLink;