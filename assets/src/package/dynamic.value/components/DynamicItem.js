import DynamicItemBody from './DynamicItemBody';
import BlockValueItemContext from '../../context/block.value.item.context';
import ActionModal from '../../action-modal/components/ActionModal';
import humanReadablePreset from '../../preset/helpers/humanReadablePreset';
import humanReadableCondition
	from '../../block-conditions/helpers/humanReadableCondition';
import HumanReadableConditions
	from '../../block-conditions/components/HumanReadableConditions';
import HoverContainer from '../../components/HoverContainer';
import DetailsContainer from '../../components/DetailsContainer';

const {
	      __,
      } = wp.i18n;
const {
	      useState,
      } = wp.element;
const {
	      Button,
      } = wp.components;

function DynamicItem( { current, update, isOpenModal, setOpenModal } ) {
	const updateCurrent = settings => {
		update( value => {
			const groups = JSON.parse( JSON.stringify( value.groups ) );

			for ( const groupIndex in groups ) {
				if (
					!groups.hasOwnProperty( groupIndex ) ||
					current.id !== groups[ groupIndex ].id
				) {
					continue;
				}
				groups[ groupIndex ] = {
					...groups[ groupIndex ],
					...settings,
				};
			}
			return { groups };
		} );
	};

	const deleteCurrent = () => {
		update( value => {
			const groups = JSON.parse( JSON.stringify( value.groups ) );

			return { groups: groups.filter( ( { id } ) => id !== current.id ) };
		} );
	};

	const [ showModal, setShowModal ] = useState( false );
	const [ isHover, setHover ]       = useState( false );

	const isEmpty = 1 >= Object.keys( current )?.length;

	return <BlockValueItemContext.Provider value={ {
		update: updateCurrent,
		current,
	} }>
		<div
			className="jet-fb p-relative"
			onMouseOver={ () => setHover( true ) }
			onMouseOut={ () => setHover( false ) }
		>
			<HoverContainer isHover={ isHover }>
				<Button
					isSmall
					isSecondary
					icon={ showModal ? 'no-alt' : 'edit' }
					onClick={ () => setShowModal( prev => !prev ) }
				>
					{ __( 'Edit', 'jet-form-builder' ) }
				</Button>
				<Button
					isSmall
					isDestructive
					icon={ 'trash' }
					onClick={ deleteCurrent }
				>
					{ __( 'Delete', 'jet-form-builder' ) }
				</Button>
			</HoverContainer>
			<DetailsContainer>
				{ isEmpty ? <div
					data-title={ __(
						'This value item is empty',
						'jet-form-builder',
					) }
				/> : <>
					  <span
						  data-title={ __( 'Set', 'jet-form-builder' ) + ':' }
						  dangerouslySetInnerHTML={ {
							  __html: humanReadablePreset( current.to_set ),
						  } }
					  />
					  <HumanReadableConditions
						  conditions={ current?.conditions }
					  />
				  </> }
			</DetailsContainer>
		</div>
		{ (
			showModal || isOpenModal === current.id
		) && <ActionModal
			classNames={ [ 'width-60' ] }
			onRequestClose={ () => {
				setShowModal( false );
				setOpenModal( false );
			} }
			title={ __( 'Edit Dynamic Value', 'jet-form-builder' ) }
		>
			<DynamicItemBody/>
		</ActionModal> }
	</BlockValueItemContext.Provider>;
}

export default DynamicItem;