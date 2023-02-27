import MacrosFieldsTemplate from './MacrosFieldsTemplate';
import MacroFieldItem from './MacroFieldItem';
import useFieldsInBlock from '../../blocks/hooks/useFieldsInBlock';

function MacrosFieldsInBlock( {
	onClick = () => {},
	withCurrent = false,
	...props
} ) {
	const fields = useFieldsInBlock( { excludeCurrent: !withCurrent } );

	return <MacrosFieldsTemplate
		withCurrent={ withCurrent }
		fields={ fields }
		{ ...props }
	>
		<MacroFieldItem onClick={ onClick }/>
	</MacrosFieldsTemplate>;
}

export default MacrosFieldsInBlock;