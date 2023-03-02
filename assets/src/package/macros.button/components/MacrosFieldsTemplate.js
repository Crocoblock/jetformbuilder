import MacrosButtonTemplate from './MacrosButtonTemplate';
import ExtraMacroContext from '../context/ExtraMacroContext';
import GroupItemsPopover from './GroupItemsPopover';

const {
	      useContext,
      } = wp.element;
const {
	      __,
      } = wp.i18n;

function MacrosFieldsTemplate( {
	children,
	fields,
	...props
} ) {

	/**
	 * @type {{
	 * extra: BaseMacro[],
	 * filters: BaseFilter[]
	 * beforeFields: BasePopoverItem[]
	 * afterFields: BasePopoverItem[]
	 * }}
	 */
	const macros = useContext( ExtraMacroContext );

	const fullFields = [
		...(
			macros.beforeFields ?? []
		),
		...fields,
		...(
			macros.afterFields ?? []
		),
	];

	if ( !fullFields.length &&
		!macros?.extra?.length &&
		!macros?.filters?.length
	) {
		return null;
	}

	return <MacrosButtonTemplate { ...props }>
		{ Boolean( fullFields.length ) && <GroupItemsPopover
			title={ __( 'Fields:', 'jet-form-builder' ) }
			items={ fullFields }
			initialOpen={ true }
		>
			{ children }
		</GroupItemsPopover> }
		{ Boolean( macros?.extra?.length ) && <GroupItemsPopover
			title={ __( 'Extra macros:', 'jet-form-builder' ) }
			items={ macros.extra }
		>
			{ children }
		</GroupItemsPopover> }
		{ Boolean( macros?.filters?.length ) && <GroupItemsPopover
			title={ __( 'Filters:', 'jet-form-builder' ) }
			items={ macros.filters }
		>
			{ children }
		</GroupItemsPopover> }
	</MacrosButtonTemplate>;

}

export default MacrosFieldsTemplate;