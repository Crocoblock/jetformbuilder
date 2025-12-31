const ControlHeading = ( { control } ) => {

	if ( ! control.content ) {
		return null;
	}

	return ( <h5
		className="crocoblock-style-manager__heading-control"
		dangerouslySetInnerHTML={ { __html: control.content } }
	></h5> );
}

export default ControlHeading;