import MacrosButtonTemplate from './MacrosButtonTemplate';
import ExtraMacroContext from '../context/ExtraMacroContext';
import GroupItemsPopover from './GroupItemsPopover';
import { applyFilters } from '@wordpress/hooks';

const {
	      Children,
	      useContext,
      } = wp.element;
const {
	      __,
      } = wp.i18n;

function MacrosFieldsTemplate( {
	children,
	fields,
	macroScope = '',
	onMacroClick = () => {},
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

	const filteredGroups = applyFilters(
		'jet.fb.macros.fields.additional-groups',
		[],
		{
			macroScope,
			onClick: onMacroClick,
			fields: fullFields,
		},
	);
	const additionalGroups = Array.isArray( filteredGroups )
		? Children.toArray( filteredGroups )
		: [];

	if ( !fullFields.length &&
		!macros?.extra?.length &&
		!macros?.filters?.length &&
		!additionalGroups.length
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
		{ additionalGroups }
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
