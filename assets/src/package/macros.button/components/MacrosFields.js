import MacrosFieldsTemplate from './MacrosFieldsTemplate';
import MacroFieldItem from './MacroFieldItem';
import useFields from '../../blocks/hooks/useFields';

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