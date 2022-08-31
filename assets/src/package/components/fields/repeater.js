import RepeaterItemContext from '../../context/repeater.item';
import RepeaterBodyContext from '../../context/repeater.custom.item.body';
import RepeaterHeadContext from '../../context/repeater.custom.item.head';
import RepeaterButtonsContext from '../../context/repeater.custom.item.buttons';
import RepeaterStateContext from '../../context/repeater.state';

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
	      Fragment,
      } = wp.element;

/**
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
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
	      } = functions ?? useContext( RepeaterStateContext );

	const {
		      isSupported: isSupportedBody,
		      render: CustomLayout,
	      } = useContext( RepeaterBodyContext );
	const {
		      isSupported: isSupportedHeader,
		      render: CustomHeader,
	      } = useContext( RepeaterHeadContext );
	const {
		      edit: supportEdit,
		      move: supportMove,
		      clone: supportClone,
		      delete: supportDelete,
	      } = useContext( RepeaterButtonsContext );

	const RepeaterBody = ( { currentItem, index } ) =>
		<RepeaterItemContext.Provider value={ {
			currentItem,
			changeCurrentItem: data => changeCurrentItem( data, index ),
			currentIndex: index,
		} }>
			{ children && children }
			{ !children && 'Set up your Repeater Template, please.' }
		</RepeaterItemContext.Provider>;

	const RepeaterHeader = ( { currentItem, index } ) => {
		if ( isSupportedHeader( currentItem ) ) {
			return <CustomHeader
				currentItem={ currentItem }
				index={ index }
			/>;
		}

		return <span
			className={ 'repeater-item-title' }
		>
			{ `#${ index + 1 }` }
		</span>;
	};

	const DefaultLayout = ( { currentItem, index } ) => <Card
		size="small"
		elevation={ 2 }
		className={ 'jet-form-builder__repeater-component-item' }
		key={ `jet-form-builder__repeater-component-item-${ index }` }
	>
		<CardHeader className={ 'repeater__item__header' }>
			<div className="repeater-item__left-heading">
				<ButtonGroup className={ 'repeater-action-buttons' }>
					{ (
						!supportEdit || supportEdit( currentItem )
					) && <Button
						isSmall
						icon={ currentItem.__visible ? 'no-alt' : 'edit' }
						onClick={ () => toggleVisible( index ) }
						className={ 'repeater-action-button jet-fb-is-thick' }
					/> }
					{ (
						!supportMove || supportMove( currentItem )
					) && <Button
						isSmall
						isSecondary
						disabled={ !Boolean( index ) }
						icon={ 'arrow-up-alt2' }
						onClick={ () => moveUp( index ) }
						className={ 'repeater-action-button jet-fb-is-thick' }
					/> }
					{ (
						!supportMove || supportMove( currentItem )
					) && <Button
						isSmall
						isSecondary
						disabled={ !(
							index < items.length - 1
						) }
						icon={ 'arrow-down-alt2' }
						onClick={ () => moveDown( index ) }
						className={ 'repeater-action-button jet-fb-is-thick' }
					/> }
				</ButtonGroup>
				<RepeaterHeader
					currentItem={ currentItem }
					index={ index }
				/>
			</div>
			<ButtonGroup>
				{ (
					!supportClone || supportClone( currentItem )
				) && <Button
					isSmall
					isSecondary
					onClick={ () => cloneItem( index ) }
					className={ 'jet-fb-is-thick' }
					icon={ 'admin-page' }
				/> }
				{ (
					!supportDelete || supportDelete( currentItem )
				) && <Button
					isSmall
					isSecondary
					isDestructive
					onClick={ () => removeOption( index ) }
					className={ 'jet-fb-is-thick' }
					icon={ 'trash' }
				/> }
			</ButtonGroup>
		</CardHeader>
		{ currentItem.__visible && <CardBody
			className={ 'repeater-item__content' }
		>
			<RepeaterBody
				key={ `jet-form-builder__repeater-body-${ index }` }
				currentItem={ currentItem }
				index={ index }
			/>
		</CardBody> }
	</Card>;

	return <div
		className={ 'jet-form-builder__repeater-component' }
		key={ 'jet-form-builder-repeater' }
	>
		{ items.map( ( currentItem, index ) => <Fragment
			key={ `jet-form-builder__repeater-wrapper-item-${ index }` }
		>
			{ isSupportedBody( currentItem )
			  ? <CustomLayout>
				  <RepeaterBody
					  currentItem={ currentItem }
					  index={ index }
				  />
			  </CustomLayout>
			  : <DefaultLayout
				  key={ `jet-form-builder__repeater-default-body-${ index }` }
				  currentItem={ currentItem }
				  index={ index }
			  /> }
		</Fragment> ) }
	</div>;
}

export default Repeater;