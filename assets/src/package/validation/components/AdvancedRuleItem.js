import EditRulesModalContext from './EditRulesModalContext';
import useBlockAttributes from '../../blocks/hooks/useBlockAttributes';
import DetailsContainer from '../../components/DetailsContainer';
import HoverContainer from '../../components/HoverContainer';
import HumanReadableRule from './HumanReadableRule';

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

// eslint-disable-next-line max-lines-per-function
function AdvancedRuleItem( { rule, index = 0 } ) {
	const { setShowModal }              = useContext( EditRulesModalContext );
	const [ attributes, setAttributes ] = useBlockAttributes();

	const [ isHover, setHover ] = useState( false );

	return <div
		className="jet-fb p-relative"
		onMouseOver={ () => setHover( true ) }
		onFocus={ () => setHover( true ) }
		onMouseOut={ () => setHover( false ) }
		onBlur={ () => setHover( false ) }
	>
		<HoverContainer isHover={ isHover }>
			<Button
				isSmall
				isSecondary
				icon={ 'edit' }
				onClick={ () => {
					setAttributes( {
						validation: {
							...attributes.validation,
							rules: attributes.validation.rules.map(
								( current, currentIndex ) => {
									current.__visible = index === currentIndex;
									return current;
								},
							),
						},
					} );
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
						validation: {
							...attributes.validation,
							rules: attributes.validation.rules.filter(
								( current, currentIndex ) => (
									currentIndex !== index
								),
							),
						},
					} );
				} }
			>
				{ __( 'Delete', 'jet-form-builder' ) }
			</Button>
		</HoverContainer>
		<DetailsContainer>
			<HumanReadableRule rule={ rule }/>
		</DetailsContainer>
	</div>;
}

export default AdvancedRuleItem;