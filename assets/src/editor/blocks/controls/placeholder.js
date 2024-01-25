function JetFieldPlaceholder( {
								  title,
								  subtitle,
								  isRequired = false
							  } ) {

	subtitle = subtitle.filter( part => Boolean( part ) );

	const subtitleStr = subtitle.join( ', ' );

	let className = 'jet-field-placeholder';

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