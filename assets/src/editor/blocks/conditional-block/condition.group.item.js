import ConditionalModalContext from './conditional.model.context';

const {
	      DetailsContainer,
	      HoverContainer,
	      HumanReadableConditions,
      } = JetFBComponents;
const {
	      useBlockAttributes,
      } = JetFBHooks;

const {
	      useState,
	      useEffect,
	      useContext,
      } = wp.element;

const {
	      __,
      } = wp.i18n;
const {
	      Button,
      } = wp.components;

function ConditionGroupItem( { group } ) {
	const [ isHover, setHover ]         = useState( false );
	const { setShowModal }              = useContext( ConditionalModalContext );
	const [ attributes, setAttributes ] = useBlockAttributes();

	const conditions = group.map( ( { condition } ) => condition );
	const indexes    = group.map( ( { index } ) => index );

	return <div
		className="jet-fb p-relative"
		onMouseOver={ () => setHover( true ) }
		onMouseOut={ () => setHover( false ) }
	>
		<HoverContainer isHover={ isHover }>
			<Button
				isSmall
				isSecondary
				icon={ 'edit' }
				onClick={ () => {
					setAttributes(
						( { conditions } ) => conditions.map(
							( current, index ) => {
								current.__visible = index === indexes[ 0 ];
								return current;
							},
						),
					);
					setShowModal( prev => !prev );
				} }
			>
				{ __( 'Edit', 'jet-form-builder' ) }
			</Button>
			<Button
				isSmall
				isDestructive
				icon={ 'trash' }
				onClick={ () => {
					setAttributes( {
						conditions: attributes.conditions.filter(
							( current, index ) => !indexes.includes( index ),
						),
					} );
				} }
			>
				{ __( 'Delete', 'jet-form-builder' ) }
			</Button>
		</HoverContainer>
		<DetailsContainer>
			<HumanReadableConditions
				conditions={ conditions }
				showWarning
			/>
		</DetailsContainer>
	</div>;
}

export default ConditionGroupItem;