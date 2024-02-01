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
	    Popover,
	    ButtonGroup,
	    Button,
	    __experimentalSpacer,
	    Spacer,
	    Flex,
    } = wp.components;

Spacer = (
	Spacer || __experimentalSpacer
);

const {
	      useScopedAttributesContext,
	      useTriggerPopover,
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

	const {
		      ref: refAdd,
		      showPopover: showPopoverAdd,
		      setShowPopover: setShowPopoverAdd,
		      popoverProps: popoverPropsAdd,
	      } = useTriggerPopover();

	const {
		      ref: refReplace,
		      showPopover: showPopoverReplace,
		      setShowPopover: setShowPopoverReplace,
		      popoverProps: popoverPropsReplace,
	      } = useTriggerPopover();

	useEffect(
		() => {
			setBulk( toBulk( window.JetFBBulkOptions.sources[ bulkSelect ] ) );
		},
		[ bulkSelect ],
	);

	const addOptions = () => {
		setAttributes( {
			field_options: [
				...attributes.field_options,
				...fromBulk( bulk ),
			],
		} );
	};

	const replaceOptions = () => {
		setAttributes( {
			field_options: [
				...fromBulk( bulk ),
			],
		} );
	};

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
					ref={ refAdd }
					isPrimary
					onClick={ () => {
						setShowPopoverAdd( prev => !prev );
						setShowPopoverReplace( false );
					} }
				>
					{ __( 'Add to the options', 'jet-form-builder' ) }
				</Button>
				<Button
					ref={ refReplace }
					isSecondary
					style={ {
						margin: '0 0 0 10px',
					} }
					onClick={ () => {
						setShowPopoverReplace( prev => !prev );
						setShowPopoverAdd( false );
					} }
				>
					{ __(
						'Replace existing options with these',
						'jet-form-builder',
					) }
				</Button>
			</ButtonGroup>
		</ModalFooterFill>
		{ showPopoverAdd && (
			<Popover
				position={ 'top-start' }
				noArrow={ false }
				isAlternate
				{ ...popoverPropsAdd }
			>
				<div
					style={ {
						padding: '0.5em',
						width: 'max-content',
					} }
				>
					<span>{ __(
						'Are you sure you want to add new options?',
						'jet-form-builder',
					) }</span>
					<Flex justify="center" gap={ 1 }>
						<Button
							isLink
							onClick={ () => {
								addOptions();
								setModalContent( false );
							} }
						>
							{ __( 'Yes', 'jet-form-builder' ) }
						</Button>
						{ ' / ' }
						<Button
							isLink
							isDestructive
							onClick={ () => setShowPopoverAdd( false ) }
						>
							{ __( 'No', 'jet-form-builder' ) }
						</Button>
					</Flex>
				</div>
			</Popover>
		) }
		{ showPopoverReplace && (
			<Popover
				position={ 'top-start' }
				noArrow={ false }
				isAlternate
				{ ...popoverPropsReplace }
			>
				<div
					style={ {
						padding: '0.5em',
						width: 'max-content',
					} }
				>
					<span>{ __(
						`Are you sure you want to replace the old options 
with new ones?`,
						'jet-form-builder',
					) }</span>
					<Flex justify="center" gap={ 1 }>
						<Button
							isLink
							onClick={ () => {
								replaceOptions();
								setModalContent( false );
							} }
						>
							{ __( 'Yes', 'jet-form-builder' ) }
						</Button>
						{ ' / ' }
						<Button
							isLink
							onClick={ () => setShowPopoverReplace( false ) }
							isDestructive
						>
							{ __( 'No', 'jet-form-builder' ) }
						</Button>
					</Flex>
				</div>
			</Popover>
		) }
	</>;
}

export default BulkOptions;