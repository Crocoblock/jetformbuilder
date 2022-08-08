import useRepeaterState from '../../helpers/hooks/useRepeaterState';
import RepeaterItemContext from '../../context/repeater.item';
import RepeaterCustomLayoutContext
	from '../../context/repeater.custom.item.layout';

const {
	      Card,
	      ButtonGroup,
	      Button,
	      CardHeader,
	      CardBody,
      } = wp.components;
const {
	      __,
      } = wp.i18n;
const {
	      useContext,
      } = wp.element;

function Repeater( props ) {
	const {
		      items,
		      onSetState,
		      functions,
		      children,
	      } = props;

	const {
		      cloneItem,
		      moveUp,
		      moveDown,
		      toggleVisible,
		      changeCurrentItem,
		      removeOption,
	      } = functions ?? useRepeaterState( onSetState );

	const { isSupported, render: CustomLayout } = useContext(
		RepeaterCustomLayoutContext,
	);

	const RepeaterBody = ( { currentItem, index } ) =>
		<RepeaterItemContext.Provider value={ {
			currentItem,
			changeCurrentItem: data => changeCurrentItem( data, index ),
			currentIndex: index,
		} }>
			{ children && children }
			{ !children && 'Set up your Repeater Template, please.' }
		</RepeaterItemContext.Provider>;

	const DefaultLayout = ( { currentItem, index } ) => <Card
		size="small"
		elevation={ 2 }
		className={ 'jet-form-builder__repeater-component-item' }
		key={ `jet-form-builder__repeater-component-item-${ index }` }
	>
		<CardHeader className={ 'repeater__item__header' }>
			<div className="repeater-item__left-heading">
				<ButtonGroup className={ 'repeater-action-buttons' }>
					<Button
						isSmall
						icon={ currentItem.__visible ? 'no-alt' : 'edit' }
						onClick={ () => toggleVisible( index ) }
						className={ 'repeater-action-button' }
					/>
					<Button
						isSmall
						isSecondary
						disabled={ !Boolean( index ) }
						icon={ 'arrow-up-alt2' }
						onClick={ () => moveUp( index ) }
						className={ 'repeater-action-button' }
					/>
					<Button
						isSmall
						isSecondary
						disabled={ !(
							index < items.length - 1
						) }
						icon={ 'arrow-down-alt2' }
						onClick={ () => moveDown( index ) }
						className={ 'repeater-action-button' }
					/>
				</ButtonGroup>
				<span className={ 'repeater-item-title' }>{ `#${ index +
				1 }` }</span>
			</div>
			<ButtonGroup>
				<Button
					isSmall
					isSecondary
					onClick={ () => cloneItem( index ) }
				>
					{ __( 'Clone', 'jet-form-builder' ) }
				</Button>
				<Button
					isSmall
					isSecondary
					isDestructive
					onClick={ () => removeOption( index ) }
				>
					{ __( 'Delete', 'jet-form-builder' ) }
				</Button>
			</ButtonGroup>
		</CardHeader>
		{ currentItem.__visible && <CardBody
			className={ 'repeater-item__content' }
		>
			<RepeaterBody
				currentItem={ currentItem }
				index={ index }
			/>
		</CardBody> }
	</Card>;

	return <div
		className={ 'jet-form-builder__repeater-component' }
		key={ 'jet-form-builder-repeater' }
	>
		{ items.map( ( currentItem, index ) => {
			return isSupported( currentItem )
			       ? <CustomLayout>
				       <RepeaterBody
					       currentItem={ currentItem }
					       index={ index }
				       />
			       </CustomLayout>
			       : <DefaultLayout
				       currentItem={ currentItem }
				       index={ index }
			       />;
		} ) }
	</div>;
}

export default Repeater;