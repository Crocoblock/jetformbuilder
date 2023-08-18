const {
	      __,
      } = wp.i18n;

const {
	      SVG,
	      Path,
      } = wp.primitives;

const {
	      useState,
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

	const [ bulkSelect, setBulkSelect ] = useState( '' );
	const { attributes, setAttributes } = useScopedAttributesContext();

	const onUploadBulkSource = () => {
		setBulk( toBulk( window.JetFBBulkOptions.sources[ bulkSelect ] ) );
	};

	return <>
		<Flex
			align={ 'center' }
			justify={ 'flex-start' }
		>
			<BaseControl className="jet-fb clear-control">
				<SelectControl
					value={ bulkSelect }
					onChange={ setBulkSelect }
					options={ [
						{
							value: '',
							label: __( '-- Choose preset --',
								'jet-form-builder' ),
						},
						...window.JetFBBulkOptions.list,
					] }
				/>
			</BaseControl>
			<Button
				disabled={ !bulkSelect }
				onClick={ onUploadBulkSource }
				icon={ <SVG xmlns="http://www.w3.org/2000/svg"
				            viewBox="0 0 24 24" width="24" height="24"
				            aria-hidden="true" focusable="false">
					<Path
						d="M18 11.3l-1-1.1-4 4V3h-1.5v11.3L7 10.2l-1 1.1 6.2 5.8 5.8-5.8zm.5 3.7v3.5h-13V15H4v5h16v-5h-1.5z"/>
				</SVG> }
			>
				{ __( 'Upload', 'jet-form-builder' ) }
			</Button>
		</Flex>
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
;