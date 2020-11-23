function JetFieldPlaceholder( {
								  title,
								  subtitle,
								  isRequired
							  } ) {

	subtitle = subtitle.filter( part => Boolean( part ) );

	const subtitleStr = subtitle.join( ', ' );

	var className = 'jet-field-placeholder';

	if ( isRequired ) {
		className += ' is-required';
	}

	/* eslint-disable jsx-a11y/no-onchange */
	return <div className={ className }>
		{ title }: { subtitleStr }
	</div>
	/* eslint-enable jsx-a11y/no-onchange */
}

export default JetFieldPlaceholder;