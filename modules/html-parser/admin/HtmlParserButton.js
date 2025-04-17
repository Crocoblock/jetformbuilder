import HtmlParserModal from './HtmlParserModal';
import { useState, createElement, Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export default function HtmlParserButton() {

	const [ showModal, setShowModal ] = useState( false );

	return createElement(
		Fragment,
		null,
		createElement(
			'a',
			{
				href: '#',
				className: 'page-title-action',
				onClick: ( event ) => {
					event.preventDefault();
					setShowModal( true );
				},
			},
			__( 'Parse HTML', 'jet-form-builder' )
		),
		showModal && createElement( HtmlParserModal, { setShowModal } )
	);
}