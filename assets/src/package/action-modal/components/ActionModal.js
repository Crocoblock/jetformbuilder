import ActionModalContext from '../context/ActionModalContext';
import ActionModalFooterSlotFill from './ActionModalFooterSlotFill';
import { Modal, Button } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const {
	      Slot: FooterSlot,
      } = ActionModalFooterSlotFill;

let {
	ToggleGroupControl,
	__experimentalToggleGroupControl,
} = wp.components;

ToggleGroupControl = (
	ToggleGroupControl || __experimentalToggleGroupControl
);

// eslint-disable-next-line max-lines-per-function
function ActionModal( {
	onRequestClose,
	children,
	title = '',
	classNames = [],
	className = '',
	onUpdateClick,
	onCancelClick,
	updateBtnLabel = 'Update',
	updateBtnProps = {},
	cancelBtnProps = {},
	cancelBtnLabel = 'Cancel',
	fixedHeight = '',
	...props
} ) {

	const modalClasses = [ 'jet-form-edit-modal', ...classNames, className ];

	const [ actionClick, setActionClick ] = useState( null );

	const updateClick = () => {
		if ( onUpdateClick ) {
			onUpdateClick();
		}
		setActionClick( true );
	};
	const cancelClick = () => {
		if ( onCancelClick ) {
			onCancelClick();
		}
		setActionClick( false );
	};

	let style = {};
	if ( fixedHeight ) {
		style = { height: fixedHeight };
		modalClasses.push( 'jet-modal-fixed-height' );
	}

	return <Modal
		onRequestClose={ onRequestClose }
		className={ modalClasses.join( ' ' ) }
		title={ title }
		style={ style }
		{ ...props }
	>
		{ !children && <div
			className="jet-form-edit-modal__content"
		>
			{ __( 'Action callback is not found.', 'jet-form-builder' ) }
		</div> }
		{ children && <>
			<div className="jet-form-edit-modal__wrapper">
				<ActionModalContext.Provider
					value={ { actionClick, onRequestClose } }>
					<div className="jet-form-edit-modal__content">
						{ 'function' === typeof children &&
							children( { actionClick, onRequestClose } ) }
						{ 'function' !== typeof children && children }
					</div>
				</ActionModalContext.Provider>
			</div>
			<FooterSlot fillProps={ { updateClick, cancelClick } }>
				{ ( fills ) => (
					Boolean( fills?.length )
					? fills : <ToggleGroupControl
						className="jet-form-edit-modal__actions jfb-toggle-group-control"
						hideLabelFromVision={ true }
					>
						<Button
							isPrimary
							onClick={ updateClick }
							{ ...updateBtnProps }
						>{ updateBtnLabel }</Button>
						<Button
							isSecondary
							style={ {
								margin: '0 0 0 10px',
							} }
							onClick={ cancelClick }
							{ ...cancelBtnProps }
						>{ cancelBtnLabel }</Button>
					</ToggleGroupControl>
				) }
			</FooterSlot>
		</> }
	</Modal>;
}

export default ActionModal;