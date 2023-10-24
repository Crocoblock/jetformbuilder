import toBulk from './toBulk';
import fromBulk from './fromBulk';

const {
	      __,
      } = wp.i18n;

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
	      BaseHelp,
      } = JetFBComponents;

const {
	      Fill: ModalFooterFill,
      } = ActionModalFooterSlotFill;

const baseBulk = window.JetFBBulkOptions.sources[
	Object.keys( window.JetFBBulkOptions.sources )[ 0 ]
	];

function BulkOptions( { setModalContent } ) {
	const [ bulk, setBulk ] = useState(
		() => toBulk( baseBulk ),
	);

	const [ bulkSelect, setBulkSelect ] = useState( 'base' );
	const { attributes, setAttributes } = useScopedAttributesContext();

	useEffect(
		() => {
			setBulk( toBulk( window.JetFBBulkOptions.sources[ bulkSelect ] ) );
		},
		[ bulkSelect ],
	);

	return <>
		<SelectControl
			value={ bulkSelect }
			onChange={ setBulkSelect }
			options={ window.JetFBBulkOptions.list }
		/>
		<TextareaControl
			className="jet-control-clear"
			value={ bulk }
			onChange={ val => setBulk( toBulk( val ) ) }
			rows={ 16 }
		/>
		<BaseHelp>
			{ __(
				`You can specify a different value and value 
for the calculator field by separating them with a colon character`,
				'jet-form-builder',
			) }
			<br/>
			<br/>
			Book #1 : book_1 : 100
		</BaseHelp>
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
								...fromBulk( bulk ),
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