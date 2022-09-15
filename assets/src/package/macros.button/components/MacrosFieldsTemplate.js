import ShowPopoverContext from '../context/ShowPopoverContext';
import MacrosButtonTemplate from './MacrosButtonTemplate';
import PopoverItem from '../context/PopoverItem';
import getFieldsWithoutCurrent
	from '../../blocks/helpers/getFieldsWithoutCurrent';

const {
	      useContext,
	      useMemo,
      } = wp.element;

function MacrosFieldsTemplate( { children, ...props } ) {
	const { showPopover } = useContext( ShowPopoverContext );

	const fields = useMemo(
		() => getFieldsWithoutCurrent(),
		[ showPopover ],
	);

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
	</MacrosButtonTemplate>;

}

export default MacrosFieldsTemplate;