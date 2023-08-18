import ListActionItem from '../../../plugins/actions/action.item';

const {
	      __,
	      sprintf,
      } = wp.i18n;

const {
	      SVG,
	      Path,
      } = wp.primitives;

const {
	      useState,
	      useEffect,
	      Children,
	      cloneElement,
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
	      isEmpty,
      } = JetFBActions;

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

const toBulk = val => JSON.stringify( val, undefined, 4 );

const resolveErrors = bulk => {
	let options;
	let currentErrors = [];

	try {
		options = JSON.parse( bulk );
	}
	catch ( error ) {
		return [ error.message ];
	}

	if ( !Array.isArray( options ) ) {
		return [
			__(
				'Your value must be an array.',
				'jet-form-builder',
			),
		];
	}

	for ( const [ index, current ] of Object.entries(
		options,
	) ) {
		if ( 'object' !== typeof current ) {
			currentErrors.push(
				__(
					`[row:${ index }] Each array element must be an object`,
					'jet-form-builder',
				),
			);

			continue;
		}

		const { label, value, ...other } = current;

		if ( !isEmpty( label ) ||
			!isEmpty( value ) ||
			isEmpty( other )
		) {
			continue;
		}

		currentErrors.push(
			__(
				`[row:${ index }] You have an incorrect object format. 
There are no values for the value or label keys`,
				'jet-form-builder',
			),
		);
	}

	if ( 1 >= currentErrors.length ) {
		return currentErrors;
	}

	const [ first, ...otherErrors ] = currentErrors;

	return [
		first,
		sprintf(
			__(
				'...and %d more incorrect elements',
				'jet-form-builder',
			),
			otherErrors.length,
		),
	];
};

function BulkOptions( { setModalContent } ) {
	const [ bulk, setBulk ] = useState(
		() => toBulk( baseBulk ),
	);

	const [ bulkSelect, setBulkSelect ] = useState( 'base' );
	const [ errors, setErrors ]         = useState( [] );
	const { attributes, setAttributes } = useScopedAttributesContext();

	useEffect(
		() => {
			setBulk( toBulk( window.JetFBBulkOptions.sources[ bulkSelect ] ) );
		},
		[ bulkSelect ],
	);

	useEffect(
		() => {
			setErrors( resolveErrors( bulk ) );
		},
		[ bulk ],
	);

	const errorsElements = errors.map(
		error => <li>{ error }</li>,
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
		<BaseHelp>
			{ __(
				'In this field we have to insert an array of objects in JSON format.',
				'jet-form-builder',
			) }
		</BaseHelp>
		<TextareaControl
			className="jet-control-clear"
			value={ bulk }
			onChange={ setBulk }
			rows={ 18 }
		/>
		<BaseHelp style={ {
			color: Boolean( errors.length )
			       ? '#9e1313'
			       : '#208949',
		} }>
			{ Boolean( errors.length )
			  ? <ul className="jet-fb-ul-revert-layer">
				  { Children.map(
					  errorsElements,
					  cloneElement,
				  ) }
			  </ul>
			  : __( 'You have the correct value format', 'jet-form-builder' )
			}
		</BaseHelp>
		<ModalFooterFill>
			<ButtonGroup
				className="jet-form-edit-modal__actions"
			>
				<Button
					isPrimary
					disabled={ Boolean( errors.length ) }
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