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
	const showPopover = useContext( ShowPopoverContext );

	const fields = useMemo(
		() => getFieldsWithoutCurrent(),
		[ showPopover ],
	);

	return <MacrosButtonTemplate disabled={ !fields.length } { ...props }>
		{ Boolean( fields.length ) &&
		fields.map( current => <div key={ 'field_' + current.value }>
			<PopoverItem.Provider value={ current }>
				{ children }
			</PopoverItem.Provider>
		</div> ) }
	</MacrosButtonTemplate>;

}

export default MacrosFieldsTemplate;