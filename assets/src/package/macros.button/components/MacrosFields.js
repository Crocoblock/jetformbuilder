import MacrosFieldsTemplate from './MacrosFieldsTemplate';
import MacroFieldItem from './MacroFieldItem';
import { useFields } from 'jet-form-builder-blocks-to-actions';

function MacrosFields( {
	onClick = () => {},
	withCurrent = false,
	...props
} ) {
	const fields = useFields( { excludeCurrent: !withCurrent } );

	return <MacrosFieldsTemplate
		withCurrent={ withCurrent }
		fields={ fields }
		{ ...props }
	>
		<MacroFieldItem onClick={ onClick }/>
	</MacrosFieldsTemplate>;
}

export default MacrosFields;