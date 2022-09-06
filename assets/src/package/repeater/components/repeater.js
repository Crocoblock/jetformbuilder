import RepeaterHeadContext from '../context/repeater.custom.item.head';
import RepeaterButtonsContext from '../context/repeater.custom.item.buttons';
import useRepeaterState from '../../hooks/useRepeaterState';
import RepeaterItemContext from '../context/repeater.item';
import RepeaterStateContext from '../context/repeater.state';

const {
	      Card,
	      ButtonGroup,
	      Button,
	      CardHeader,
	      CardBody,
      } = wp.components;
const {
	      useContext,
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
	      } = functions
	?? useRepeaterState( onSetState )
	?? useContext( RepeaterStateContext );

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

	return <div
		className={ 'jet-form-builder__repeater-component' }
		key={ 'jet-form-builder-repeater' }
	>
		{ items.map( ( currentItem, index ) => <Card
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
				key={ `jet-form-builder__card-body-${ index }` }
			>
				{ (() => {
					const context = {
						currentItem,
						changeCurrentItem: data => changeCurrentItem(
							data, index ),
						currentIndex: index,
					};

					return <RepeaterItemContext.Provider value={ context }>
						{ !children &&
						'Set up your Repeater Template, please.' }
						{ 'function' === typeof children
						  ? children( context )
						  : children
						}
					</RepeaterItemContext.Provider>;
				})() }
			</CardBody> }
		</Card> ) }
	</div>;
}

export default Repeater;