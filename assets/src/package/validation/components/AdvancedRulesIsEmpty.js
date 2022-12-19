import EditRulesModalContext from './EditRulesModalContext';
import useBlockAttributes from '../../blocks/hooks/useBlockAttributes';
import DetailsContainer from '../../components/DetailsContainer';
import HoverContainer from '../../components/HoverContainer';

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

function AdvancedRulesIsEmpty() {
	const { setShowModal }              = useContext( EditRulesModalContext );
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
						validation: {
							...attributes.validation,
							rules: [
								{ __visible: true },
							],
						},
					} );
					setShowModal( prev => !prev );
				} }
			>
				{ __( 'Add new', 'jet-form-builder' ) }
			</Button>
		</HoverContainer>
		<DetailsContainer>
			<span data-title={ __(
				'You have no rules for this field.',
				'jet-form-builder',
			) }/>
			<span data-title={ __(
				'Please click here to add new.',
				'jet-form-builder',
			) }/>
		</DetailsContainer>
	</div>;
}

export default AdvancedRulesIsEmpty;