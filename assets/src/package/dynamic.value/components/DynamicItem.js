import DynamicItemBody from './DynamicItemBody';
import BlockValueItemContext from '../../context/block.value.item.context';
import ActionModal from '../../action-modal/components/ActionModal';
import humanReadablePreset from '../../preset/helpers/humanReadablePreset';
import humanReadableCondition
	from '../../block-conditions/helpers/humanReadableCondition';

const {
	      __,
      } = wp.i18n;
const {
	      useState,
	      RawHTML,
	      Children,
	      cloneElement,
      } = wp.element;
const {
	      Button,
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
	const [ isHover, setHover ]       = useState( false );

	const isEmpty = 1 >= Object.keys( current )?.length;

	let conditionsElements = [];
	let firstReadCondition = '';

	if ( !isEmpty && Boolean( current?.conditions?.length ) ) {
		firstReadCondition = humanReadableCondition( current?.conditions[ 0 ] );

		conditionsElements = current.conditions.filter(
			// Exclude first item
			( c, index ) => 0 !== index,
		).map(
			condition => <span
				data-title={ __( 'And', 'jet-form-builder' ) + ':' }
				dangerouslySetInnerHTML={ {
					__html: humanReadableCondition( condition ),
				} }
			/>,
		);
	}

	return <BlockValueItemContext.Provider value={ {
		update: updateCurrent,
		current,
	} }>
		<div
			className="jet-fb-control p-relative"
			onMouseOver={ () => setHover( true ) }
			onMouseOut={ () => setHover( false ) }
		>
			<div
				className={ [
					'jet-fb-control',
					isHover ? 'show' : 'hide',
					'p-absolute',
					'wh-100',
					'flex-center',
					'gap-05em',
				].join( ' ' ) }
				style={ {
					backgroundColor: '#ffffffcc',
					transition: '0.3s',
				} }
			>
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
			</div>
			<div
				className={ [
					'jet-fb-control',
					'flex',
					'f-dir-column',
					'p-06em',
					'container',
					'gap-1em',
				].join( ' ' ) }
			>
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
					  { firstReadCondition && <>
						  <span
							  data-title={ __(
								  'If', 'jet-form-builder',
							  ) + ':' }
							  dangerouslySetInnerHTML={ {
								  __html: firstReadCondition,
							  } }
						  />
						  { Children.map( conditionsElements, cloneElement ) }
					  </> }
				  </> }
			</div>
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