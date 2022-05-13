import SafeDeleteContext from '../../context/safe.delete';

const { ToggleControl } = wp.components;
const { __ } = wp.i18n;
const { useState } = wp.element;

function SafeDeleteToggle( props ) {
	const [ isSafeDeleting, setSafeDeleting ] = useState( true );

	return <>
		<ToggleControl
			label={ __( 'Safe deleting', 'jet-form-builder' ) }
			checked={ isSafeDeleting }
			onChange={ setSafeDeleting }
		/>
		<SafeDeleteContext.Provider value={ isSafeDeleting }>
			{ props.children }
		</SafeDeleteContext.Provider>
	</>;
}

export default SafeDeleteToggle;