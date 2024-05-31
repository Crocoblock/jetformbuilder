import { __ } from '@wordpress/i18n';
import { Flex } from '@wordpress/components';
import { useSelect } from '@wordpress/data';

const {
	      BuilderHelpSlotFill,
      } = JetFBComponents;

function FirstPart() {
	const builders = useSelect( select => (
		select( 'jet-forms/use-form' ).getBuilders()
	), [] );

	return <>
		<h3>
			{ __(
				'1. How you want to use the form?',
				'jet-form-builder',
			) }
		</h3>
		<p>
			{ __(
				'Please select the method how you planning to use the form - as element of page builder, as block or a plain shortcode',
				'jet-form-builder',
			) }
		</p>
		<Flex justify="flex-start" wrap>
			{ builders.map( ( { name, view: BuilderView } ) => (
				<BuilderView key={ name } name={ name }/>
			) ) }
		</Flex>
		<BuilderHelpSlotFill.Slot/>
	</>;
}

export default FirstPart;