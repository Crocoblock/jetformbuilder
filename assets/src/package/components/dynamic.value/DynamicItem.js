import DynamicItemBody from './DynamicItemBody';
import BlockValueItemContext from '../../context/block.value.item.context';
import ActionModal from '../action-modal';

const {
	      __,
      } = wp.i18n;
const {
	      useState,
      } = wp.element;
const {
	      Button,
	      ButtonGroup,
      } = wp.components;

function DynamicItem( { current, update } ) {
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

	return <BlockValueItemContext.Provider value={ {
		update: updateCurrent,
		current,
	} }>
		<div className={ 'jet-form-action-details' }>
			<div data-title={ 'ID:' }>{ current.id }</div>
			<ButtonGroup
				style={ {
					alignSelf: 'flex-end',
				} }
			>
				<Button
					isSmall
					isSecondary
					className={ 'jet-fb-is-thick' }
					icon={ showModal ? 'no-alt' : 'edit' }
					onClick={ () => setShowModal( prev => !prev ) }
				/>
				<Button
					isSmall
					isDestructive
					className={ 'jet-fb-is-thick' }
					icon={ 'trash' }
					onClick={ deleteCurrent }
				/>
			</ButtonGroup>
		</div>
		{ showModal && <ActionModal
			classNames={ [ 'width-60' ] }
			onRequestClose={ () => setShowModal( false ) }
			title={ __( 'Edit Dynamic Value', 'jet-form-builder' ) }
		>
			<DynamicItemBody/>
		</ActionModal> }
	</BlockValueItemContext.Provider>;
}

export default DynamicItem;