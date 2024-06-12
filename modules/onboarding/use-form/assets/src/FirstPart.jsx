import { __ } from '@wordpress/i18n';
import { Flex } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import ErrorNotice from './components/ErrorNotice';
import BuilderHelpSlotFill from './components/BuilderHelpSlotFill';
import SecondaryTitle from './components/SecondaryTitle';
import Description from './components/Description';


function FirstPart() {
	const builders = useSelect( select => (
		select( 'jet-forms/use-form' ).getBuilders()
	), [] );

	return <Flex direction="column" gap={ 3 }>
		<ErrorNotice/>
		<SecondaryTitle>
			{ __(
				'1. How you want to use the form?',
				'jet-form-builder',
			) }
		</SecondaryTitle>
		<Description>
		            { __(
			            'Please select the method how you planning to use the form - as element of page builder, as block or a plain shortcode',
			            'jet-form-builder',
		            ) }
		</Description>
		<Flex justify="flex-start" wrap>
			{ builders.map( ( { name, view: BuilderView } ) => (
				<BuilderView key={ name } name={ name }/>
			) ) }
		</Flex>
		<BuilderHelpSlotFill.Slot/>
	</Flex>;
}

export default FirstPart;