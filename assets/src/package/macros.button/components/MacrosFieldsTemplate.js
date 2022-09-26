import MacrosButtonTemplate from './MacrosButtonTemplate';
import PopoverItem from '../context/PopoverItem';
import getFieldsWithoutCurrent
	from '../../blocks/helpers/getFieldsWithoutCurrent';
import ExtraMacroContext from '../context/ExtraMacroContext';

const {
	      useMemo,
	      useContext,
      } = wp.element;
const {
	      __,
      } = wp.i18n;

function MacrosFieldsTemplate( { children, ...props } ) {
	const fields = useMemo(
		() => getFieldsWithoutCurrent(),
		[],
	);
	const extra  = useContext( ExtraMacroContext );

	return <MacrosButtonTemplate disabled={ !fields.length } { ...props }>
		{ Boolean( fields.length ) && <ul style={ {
			padding: '0 1em',
		} }>
			{ fields.map( ( current, index ) => <li
				key={ index + 'field_' + current.value }
			>
				<PopoverItem.Provider value={ current }>
					{ children }
				</PopoverItem.Provider>
			</li> ) }
		</ul> }
		{ Boolean( extra.length ) && <>
			<span>{ __( 'Extra macros:', 'jet-form-builder' ) }</span>
			<ul style={ {
				padding: '0 1em',
			} }>
				{ extra.map( ( current, index ) => <li
					key={ index + 'field_' + current.value }
				>
					<PopoverItem.Provider value={ current }>
						{ children }
					</PopoverItem.Provider>
				</li> ) }
			</ul>
		</> }
	</MacrosButtonTemplate>;

}

export default MacrosFieldsTemplate;