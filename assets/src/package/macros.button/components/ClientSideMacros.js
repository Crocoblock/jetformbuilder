import ExtraMacroContext from '../context/ExtraMacroContext';
import BaseMacro from '../abstract/BaseMacro';

const {
	      useSelect,
      } = wp.data;
const {
	      __,
      } = wp.i18n;

const thisMacro = new BaseMacro();

thisMacro.fullName = () => '%this%';
thisMacro.fullHelp = () => __(
	'Returns current field value',
	'jet-form-builder',
);

function ClientSideMacros( { children, withThis = false } ) {
	const extra = useSelect(
		( select ) => select( 'jet-forms/macros' ).getClientMacros(),
		[],
	);

	const filters = useSelect(
		( select ) => select( 'jet-forms/macros' ).getClientFilters(),
		[],
	);

	const value = withThis
	              ? { extra, afterFields: [ thisMacro ], filters }
	              : { extra, filters };

	return <ExtraMacroContext.Provider value={ value }>
		{ children }
	</ExtraMacroContext.Provider>;
}

export default ClientSideMacros;