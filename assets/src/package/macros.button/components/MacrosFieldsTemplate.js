import MacrosButtonTemplate from './MacrosButtonTemplate';
import getFieldsWithoutCurrent
	from '../../blocks/helpers/getFieldsWithoutCurrent';
import ExtraMacroContext from '../context/ExtraMacroContext';
import FiltersMacroContext from '../context/FiltersMacroContext';
import GroupItemsPopover from './GroupItemsPopover';

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

	/**
	 * @type {BaseMacro[]}
	 */
	const extra   = useContext( ExtraMacroContext );
	/**
	 * @type {BaseFilter[]}
	 */
	const filters = useContext( FiltersMacroContext );

	return <MacrosButtonTemplate disabled={ !fields.length } { ...props }>
		{ Boolean( fields.length ) && <GroupItemsPopover
			title={ __( 'Fields:', 'jet-form-builder' ) }
			items={ fields }
			initialOpen={ true }
		>
			{ children }
		</GroupItemsPopover> }
		{ Boolean( extra.length ) && <GroupItemsPopover
			title={ __( 'Extra macros:', 'jet-form-builder' ) }
			items={ extra }
		>
			{ children }
		</GroupItemsPopover> }
		{ Boolean( filters.length ) && <GroupItemsPopover
			title={ __( 'Filters:', 'jet-form-builder' ) }
			items={ filters }
		>
			{ children }
		</GroupItemsPopover> }
	</MacrosButtonTemplate>;

}

export default MacrosFieldsTemplate;