import insertPostPattern from '@patterns/insert.post.json';
import registerUserPattern from '@patterns/register.user.json';
import defaultPattern from '@patterns/default.json';
import PatternInserterButton from './PatternInserterButton';

const {
	      __,
      } = wp.i18n;

const {
	      Placeholder,
      } = wp.components;

function WelcomeBlockEdit( props ) {
	const patterns = [
		insertPostPattern,
		registerUserPattern,
	];

	return <Placeholder
		icon={ 'admin-tools' }
		label={ __( 'Select form pattern', 'jet-form-builder' ) }
		instructions={ __(
			'You can select one of predefined layout, or build custom',
			'jet-form-builder',
		) }
	>
		{ /*
		 * Disable reason: The `list` ARIA role is redundant but
		 * Safari+VoiceOver won't announce the list otherwise.
		 */
			/* eslint-disable jsx-a11y/no-redundant-roles */ }
		<ul
			className="block-editor-block-variation-picker__variations jet-fb"
			role="list"
			aria-label={ __( 'Form patterns', 'jet-form-builder' ) }
		>
			{ patterns.map( ( pattern ) => (
				<li key={ pattern.name }>
					<PatternInserterButton
						key={ pattern.name }
						variant="secondary"
						pattern={ pattern }
						withPatternIcon
						iconSize={ 48 }
						className="block-editor-block-variation-picker__variation"
					/>
					<span
						className="block-editor-block-variation-picker__variation-label">
							{ pattern.title }
						</span>
				</li>
			) ) }
		</ul>
		{ /* eslint-enable jsx-a11y/no-redundant-roles */ }
		<div className="block-editor-block-variation-picker__skip">
			<PatternInserterButton
				pattern={ defaultPattern }
				variant="link"
			>
				{ __( 'Start from scratch', 'jet-form-builder' ) }
			</PatternInserterButton>
		</div>
	</Placeholder>;

}

export default WelcomeBlockEdit;