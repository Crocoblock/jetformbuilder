import useRepeaterState from '../../helpers/hooks/useRepeaterState';
import RepeaterItemContext from '../../context/repeater.item';

const {
	Card,
	ButtonGroup,
	Button,
	CardHeader,
	CardBody,
} = wp.components;

const { __ } = wp.i18n;

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

	return <div
		className={ 'jet-form-builder__repeater-component' }
		key={ 'jet-form-builder-repeater' }
	>
		{ items.map( ( currentItem, index ) => <Card
			elevation={ 2 }
			className={ 'jet-form-builder__repeater-component-item' }
			key={ `jet-form-builder__repeater-component-item-${ index }` }
		>
			<CardHeader className={ 'repeater__item__header' }>
				<div className='repeater-item__left-heading'>
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
							disabled={ ! Boolean( index ) }
							icon={ 'arrow-up-alt2' }
							onClick={ () => moveUp( index ) }
							className={ 'repeater-action-button' }
						/>
						<Button
							isSmall
							isSecondary
							disabled={ ! (
								index < items.length - 1
							) }
							icon={ 'arrow-down-alt2' }
							onClick={ () => moveDown( index ) }
							className={ 'repeater-action-button' }
						/>
					</ButtonGroup>
					<span className={ 'repeater-item-title' }>{ `#${ index + 1 }` }</span>
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
				<RepeaterItemContext.Provider value={ {
					currentItem,
					changeCurrentItem: data => changeCurrentItem( data, index ),
					currentIndex: index,
				} }>
					{ children && children }
					{ ! children && 'Set up your Repeater Template, please.' }
				</RepeaterItemContext.Provider>
			</CardBody> }
		</Card> ) }
	</div>;
}

export default Repeater;