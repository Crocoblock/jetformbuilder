import PatternInserterButton from './PatternInserterButton';

function SinglePattern( { pattern } ) {
	return <li>
		<PatternInserterButton
			key={ pattern.name }
			variant="secondary"
			patternName={ pattern.name }
			withPatternIcon
			iconSize={ 32 }
			className="block-editor-block-variation-picker__variation"
		/>
		<span
			className="block-editor-block-variation-picker__variation-label"
		>
			{ pattern.title }
		</span>
	</li>;
}

export default SinglePattern;