import { Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

function SimpleChooseMediaButton( { open, hasValue = false } ) {
	return <Button
		isSecondary
		isSmall
		icon="edit"
		onClick={ open }
		className={ hasValue ? 'jet-fb has-value' : '' }
		label={ hasValue ? __( 'Edit icon', 'jet-form-builder' )
		                 : __( 'Choose icon', 'jet-form-builder' ) }
	>
		{ hasValue
		  ? __( 'Edit', 'jet-form-builder' )
		  : __( 'Choose', 'jet-form-builder' ) }
	</Button>;
}

export default SimpleChooseMediaButton;