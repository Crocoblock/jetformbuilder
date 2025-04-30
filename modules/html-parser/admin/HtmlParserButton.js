import HtmlParserModal from './HtmlParserModal';
import { useState, Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export default function HtmlParserButton() {
	const [ showModal, setShowModal ] = useState( false );

	return (
		<Fragment>
			<a
				href="#"
				className="page-title-action"
				onClick={ ( event ) => {
					event.preventDefault();
					setShowModal( true );
				} }
			>
				{ __( 'Import from HTML', 'jet-form-builder' ) }
			</a>
			{ showModal && <HtmlParserModal setShowModal={ setShowModal } /> }
		</Fragment>
	);
}