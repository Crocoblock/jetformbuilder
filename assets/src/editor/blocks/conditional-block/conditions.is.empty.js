import ConditionalModalContext from './conditional.model.context';

const {
	      DetailsContainer,
	      HoverContainer,
      } = JetFBComponents;
const {
	      useBlockAttributes,
      } = JetFBHooks;
const {
	      useContext,
	      useState,
      } = wp.element;
const {
	      __,
      } = wp.i18n;
const {
	      Button,
      } = wp.components;

function ConditionsIsEmpty() {
	const { setShowModal }              = useContext( ConditionalModalContext );
	const [ attributes, setAttributes ] = useBlockAttributes();

	const [ isHover, setHover ] = useState( false );

	return <div
		className="jet-fb p-relative"
		onMouseOver={ () => setHover( true ) }
		onMouseOut={ () => setHover( false ) }
	>
		<HoverContainer isHover={ isHover }>
			<Button
				isSmall
				isSecondary
				icon={ 'plus-alt2' }
				onClick={ () => {
					setAttributes( {
						conditions: [
							...JSON.parse(
								JSON.stringify( attributes.conditions ),
							),
							{ __visible: true },
						],
					} );
					setShowModal( prev => !prev );
				} }
			>
				{ __( 'Add new', 'jet-form-builder' ) }
			</Button>
		</HoverContainer>
		<DetailsContainer>
			<span data-title={ __(
				'You have no conditions in this block.',
				'jet-form-builder',
			) }/>
			<span data-title={ __(
				'Please click here to add new.',
				'jet-form-builder',
			) }/>
		</DetailsContainer>
	</div>;
}

export default ConditionsIsEmpty;