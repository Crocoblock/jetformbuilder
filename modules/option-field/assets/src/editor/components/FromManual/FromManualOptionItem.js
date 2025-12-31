import { styled } from '@linaria/react';

const {
	useContext,
} = wp.element;
const {
	TextControl,
	ToggleControl
} = wp.components;
const {
	__,
} = wp.i18n;

const {
	RepeaterItemContext,
} = JetFBComponents;

const NoBorderWrapper = styled.div`
	.jet-form-edit-modal & .components-base-control__field {
		border-top: none !important;
		margin-top: 0 !important;
		padding-top: 0 !important;
	}
`;

function FromManualOptionItem() {
	const {
		currentItem,
		changeCurrentItem,
	} = useContext( RepeaterItemContext );

	return <>
		<TextControl
			label={ __( 'Label', 'jet-form-builder' ) }
			value={ currentItem.label }
			onChange={ label => changeCurrentItem( { label } ) }
		/>

		<TextControl
			label={ __( 'Value', 'jet-form-builder' ) }
			value={ currentItem.value }
			onChange={ value => {
				if ( currentItem.keep_commas && !String( value ).includes(',') ) {
					changeCurrentItem( {
						value,
						keep_commas: false,
					} );
					return;
				}
				changeCurrentItem( { value } );
			} }
		/>

		{ currentItem.value && currentItem.value.includes( ',' ) && (
			<NoBorderWrapper>
				<ToggleControl
					label={ __( 'Save as single value (ignore commas)', 'jet-form-builder' ) }
					help={ __(
						'By default, values containing commas are split into multiple options. Enable this to save the value as a single string, including commas.',
						'jet-form-builder'
					) }
					checked={ !! currentItem.keep_commas }
					onChange={ keep_commas => changeCurrentItem( { keep_commas } ) }
				/>
			</NoBorderWrapper>
		) }

		<TextControl
			label={ __( 'Calculate', 'jet-form-builder' ) }
			value={ currentItem.calculate }
			onChange={ calculate => changeCurrentItem( { calculate } ) }
		/>
	</>;
}

export default FromManualOptionItem;
