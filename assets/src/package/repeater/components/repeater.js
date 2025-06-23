import RepeaterHeadContext from '../context/repeater.custom.item.head';
import RepeaterButtonsContext from '../context/repeater.custom.item.buttons';
import useRepeaterState from '../../hooks/useRepeaterState';
import RepeaterItemContext from '../context/repeater.item';
import RepeaterStateContext from '../context/repeater.state';
import MacrosButtonTemplate
	from '../../macros.button/components/MacrosButtonTemplate';
import PopoverContext from '../../macros.button/context/PopoverContext';

let {
	      Card,
	      Button,
	      CardHeader,
	      CardBody,
		  ToggleGroupControl,
		__experimentalToggleGroupControl,
      } = wp.components;
const {
	      useContext,
      } = wp.element;
const {
	      __,
      } = wp.i18n;

ToggleGroupControl = (
	ToggleGroupControl || __experimentalToggleGroupControl
);

/**
 * @param  props {{ items, onSetState, functions, children }}
 * @return {JSX.Element}
 * @class
 */
// eslint-disable-next-line max-lines-per-function
function Repeater( props ) {
	const {
		      items,
		      onSetState,
		      functions,
		      children,
	      } = props;

	/* eslint-disable react-hooks/rules-of-hooks */

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

	/* eslint-enable react-hooks/rules-of-hooks */

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
		{/* eslint-disable-next-line max-lines-per-function */}
		{ items.map( ( currentItem, index ) => <Card
			size="small"
			elevation={ 2 }
			className={ 'jet-form-builder__repeater-component-item' }
			key={ `jet-form-builder__repeater-component-item-${ index }` }
		>
			<CardHeader className={ 'repeater__item__header' }>
				<div className="repeater-item__left-heading">
					<ToggleGroupControl className={ 'repeater-action-buttons jet-fb-toggle-group-control' } hideLabelFromVision={ true }>
						{ (
							!supportEdit || supportEdit( currentItem )
						) && <Button
							variant="tertiary"
							isSmall
							icon={ currentItem.__visible ? 'no-alt' : 'edit' }
							onClick={ () => toggleVisible( index ) }
							className={ 'repeater-action-button jet-fb-is-thick' }
						/> }
						{ (
							!supportMove || supportMove( currentItem )
						) && <Button
							variant="tertiary"
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
							variant="tertiary"
							isSmall
							isSecondary
							disabled={ !(
								index < items.length - 1
							) }
							icon={ 'arrow-down-alt2' }
							onClick={ () => moveDown( index ) }
							className={ 'repeater-action-button jet-fb-is-thick' }
						/> }
					</ToggleGroupControl>
					<RepeaterHeader
						currentItem={ currentItem }
						index={ index }
					/>
				</div>
				<ToggleGroupControl className={ 'jet-fb-toggle-group-control' } hideLabelFromVision={ true }>
					{ (
						!supportClone || supportClone( currentItem )
					) && <Button
						variant="tertiary"
						isSmall
						isSecondary
						onClick={ () => cloneItem( index ) }
						className={ 'jet-fb-is-thick' }
						icon={ 'admin-page' }
					/> }
					{ (
						!supportDelete || supportDelete( currentItem )
					) && <MacrosButtonTemplate
						icon={ 'trash' }
						isDestructive
					>
						<PopoverContext.Consumer>
							{ ( { setShowPopover } ) => <div
								style={ {
									padding: '0.5em',
									width: 'max-content',
								} }
							>
								<span>{ __(
									'Delete this item?',
									'jet-form-builder',
								) }</span>
								&nbsp;
								<Button
									isLink
									isDestructive
									onClick={ () => removeOption( index ) }
								>
									{ __( 'Yes', 'jet-form-builder' ) }
								</Button>
								{ ' / ' }
								<Button
									isLink
									onClick={ () => setShowPopover( false ) }
								>
									{ __( 'No', 'jet-form-builder' ) }
								</Button>
							</div> }
						</PopoverContext.Consumer>
					</MacrosButtonTemplate> }
				</ToggleGroupControl>
			</CardHeader>
			{ currentItem.__visible && <CardBody
				className={ 'repeater-item__content' }
				key={ `jet-form-builder__card-body-${ index }` }
			>
				{ (
					() => {
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
					}
				)() }
			</CardBody> }
		</Card> ) }
	</div>;
}

export default Repeater;