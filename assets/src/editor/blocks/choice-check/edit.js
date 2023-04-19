import useCheckedChoiceState from '../choice/useCheckedChoiceState';

const { __ } = wp.i18n;

const {
	      useBlockProps,
	      RichText,
	      InspectorControls,
	      MediaUpload,
	      MediaUploadCheck,
      } = wp.blockEditor;

const {
	      useInstanceId,
      } = wp.compose;

const {
	      Button,
	      PanelBody,
      } = wp.components;

const {
	      BaseHelp,
	      BaseLabel,
      } = JetFBComponents;

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

export default function EditChoiceCheck( props ) {
	const {
		      context,
		      setAttributes,
		      attributes,
	      } = props;

	const {
		      'jet-forms/choices-field--multiple': isMultiple,
		      'jet-forms/choices-field--name': fieldName,
	      } = context;

	const blockProps = useBlockProps( {
		className: 'jet-form-builder-choice--item-control',
	} );

	const instanceId = useInstanceId( EditChoiceCheck, fieldName );

	const [ isChecked, toggleChecked ] = useCheckedChoiceState();

	//
	return <>
		<span { ...blockProps }>
			<input
				id={ instanceId }
				type={ isMultiple ? 'checkbox' : 'radio' }
				checked={ isChecked }
				onChange={ () => toggleChecked() }
			/>
			<RichText
				tagName={ 'label' }
				value={ attributes.label }
				onChange={ label => setAttributes( { label } ) }
				placeholder={ __( 'Label for input...', 'jet-form-builder' ) }
				multiline={ false }
				//htmlFor={ instanceId }
			/>
		</span>
		<InspectorControls>
			<PanelBody title={ __( 'Control View', 'jet-form-builder' ) }>
				<MediaUploadCheck>
					<BaseLabel label={ __(
						'Default icon',
						'jet-form-builder',
					) }>
						<MediaUpload
							onSelect={ media => setAttributes( {
								default_image_control: {
									...(
										attributes.default_image_control ?? {}
									),
									url: media.url,
									id: media.id,
								},
							} ) }
							allowedTypes={ [ 'image/svg+xml' ] }
							value={ attributes.default_image_control?.id }
							render={
								( { open } ) => <SimpleChooseMediaButton
									open={ open }
									hasValue={ !!attributes.default_image_control?.url }
								/>
							}
						/>
						{ !!attributes.default_image_control?.url && <Button
							isDestructive
							isSmall
							icon="no-alt"
							onClick={ () => setAttributes( {
								default_image_control: {},
							} ) }
							label={ __(
								'Remove default icon',
								'jet-form-builder',
							) }
						/> }
					</BaseLabel>
					<BaseHelp>
						{ __(
							'Choose icon for default state of choice',
							'jet-form-builder',
						) }
					</BaseHelp>
					<BaseLabel
						label={ __(
							'Checked Icon',
							'jet-form-builder',
						) }
					>
						<MediaUpload
							onSelect={ media => setAttributes( {
								checked_image_control: {
									...(
										attributes.checked_image_control ?? {}
									),
									url: media.url,
									id: media.id,
								},
							} ) }
							allowedTypes={ [ 'image/svg+xml' ] }
							value={ attributes.checked_image_control?.id }
							render={
								( { open } ) => <SimpleChooseMediaButton
									open={ open }
									hasValue={ !!attributes.checked_image_control?.url }
								/>
							}
						/>
						{ !!attributes.checked_image_control?.url && < Button
							isDestructive
							isSmall
							icon="no-alt"
							onClick={ () => setAttributes( {
								checked_image_control: {},
							} ) }
							label={ __(
								'Remove checked icon',
								'jet-form-builder',
							) }
						/> }
					</BaseLabel>
					<BaseHelp>
						{ __(
							'Choose icon for checked state of choice',
							'jet-form-builder',
						) }
					</BaseHelp>
				</MediaUploadCheck>
			</PanelBody>
		</InspectorControls>
	</>;
}