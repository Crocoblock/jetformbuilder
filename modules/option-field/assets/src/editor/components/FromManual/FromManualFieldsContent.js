import FromManualOptionsContextProvider
	from './FromManualOptionsContextProvider';
import FromManualOptionItem from './FromManualOptionItem';

const {
	      __,
      } = wp.i18n;

const {
	      Repeater,
	      RepeaterAddNew,
      } = JetFBComponents;

const {
	      useScopedAttributesContext,
	      useOnUpdateModal,
      } = JetFBHooks;

function FromManualFieldsContent() {
	const {
		      attributes,
		      setAttributes,
		      setRealAttributes,
	      } = useScopedAttributesContext();

	const updateOptions = options => {
		const field_options = 'function' === typeof options
		                      ? options( attributes.field_options )
		                      : options;

		setAttributes( prev => (
			{
				...prev, field_options,
			}
		) );
	};

	useOnUpdateModal( () => setRealAttributes( attributes ) );

	return <>
		<FromManualOptionsContextProvider>
			<Repeater
				items={ attributes.field_options ?? [] }
				onSetState={ updateOptions }
			>
				<FromManualOptionItem/>
			</Repeater>
		</FromManualOptionsContextProvider>
		<RepeaterAddNew onSetState={ updateOptions }>
			{ __( 'Add new Option', 'jet-form-builder' ) }
		</RepeaterAddNew>
	</>;
}

export default FromManualFieldsContent;