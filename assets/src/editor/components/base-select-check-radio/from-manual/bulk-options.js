const {
	      __,
      } = wp.i18n;

const {
	      SVG,
	      Path,
      } = wp.primitives;

const {
	      useState,
	      useEffect,
      } = wp.element;

let {
	    TextareaControl,
	    SelectControl,
	    BaseControl,
	    ButtonGroup,
	    Button,
	    Flex,
	    __experimentalSpacer,
	    Spacer,
    } = wp.components;

Spacer = (
	Spacer || __experimentalSpacer
);

const {
	      useScopedAttributesContext,
      } = JetFBHooks;

const {
	      ActionModalFooterSlotFill,
      } = JetFBComponents;

const {
	      Fill: ModalFooterFill,
      } = ActionModalFooterSlotFill;

const baseBulk = window.JetFBBulkOptions.sources[
	Object.keys( window.JetFBBulkOptions.sources )[ 0 ]
	];

const toBulk = val => JSON.stringify( val, undefined, 4 );

function BulkOptions( { setModalContent } ) {
	const [ bulk, setBulk ] = useState(
		() => toBulk( baseBulk ),
	);

	const [ bulkSelect, setBulkSelect ] = useState( 'base' );
	const { attributes, setAttributes } = useScopedAttributesContext();

	const onUploadBulkSource = () => {
		setBulk( toBulk( window.JetFBBulkOptions.sources[ bulkSelect ] ) );
	};

	useEffect(
		onUploadBulkSource,
		[ bulkSelect ]
	);

	return <>
		<BaseControl className="jet-fb clear-control">
			<SelectControl
				value={ bulkSelect }
				onChange={ setBulkSelect }
				options={ window.JetFBBulkOptions.list }
			/>
		</BaseControl>
		<hr style={ { marginBottom: '1.5em', marginTop: '1.5em' } }/>
		<TextareaControl
			className="jet-control-clear"
			value={ bulk }
			onChange={ setBulk }
			rows={ 20 }
		/>
		<ModalFooterFill>
			<ButtonGroup
				className="jet-form-edit-modal__actions"
			>
				<Button
					isPrimary
					onClick={ () => {
						setAttributes( {
							field_options: [
								...attributes.field_options,
								...JSON.parse( bulk ),
							],
						} );
						setModalContent( false );
					} }
				>
					{ __( 'Add to the options', 'jet-form-builder' ) }
				</Button>
				<Button
					isSecondary
					style={ {
						margin: '0 0 0 10px',
					} }
					onClick={ () => setModalContent( false ) }
				>
					{ __( 'Return to the options', 'jet-form-builder' ) }
				</Button>
			</ButtonGroup>
		</ModalFooterFill>
	</>;
}

export default BulkOptions;