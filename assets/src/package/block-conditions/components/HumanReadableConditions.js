import humanReadableCondition from '../helpers/humanReadableCondition';

const {
	      __,
      } = wp.i18n;
const {
	      Children,
	      cloneElement,
      } = wp.element;

function HumanReadableConditions( { conditions, showWarning = false } ) {
	let conditionsElements = [];
	let firstReadCondition = '';

	if ( Boolean( conditions?.length ) ) {
		firstReadCondition = humanReadableCondition( conditions[ 0 ] );

		conditionsElements = conditions.filter(
			// Exclude first item
			( c, index ) => 0 !== index,
		).map(
			// eslint-disable-next-line react/jsx-key
			condition => <span
				data-title={ __( 'And', 'jet-form-builder' ) + ':' }
				dangerouslySetInnerHTML={ {
					__html: humanReadableCondition( condition ),
				} }
			/>,
		);
	}

	return firstReadCondition ? <>
		 <span
			 data-title={ __(
				 'If', 'jet-form-builder',
			 ) + ':' }
			 dangerouslySetInnerHTML={ {
				 __html: firstReadCondition,
			 } }
		 />
		{ Children.map( conditionsElements, cloneElement ) }
	</> : showWarning && <span
		data-title={ __(
			'The condition is not fully configured.',
			'jet-form-builder',
		) }
	/>;

}

export default HumanReadableConditions;