import preview from './preview';
import {
	PanelBody,
	ToggleControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption, Flex,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	useBlockProps,
	MediaUploadCheck,
	MediaUpload,
} from '@wordpress/block-editor';
import Help from '../components/Help';
import SimpleChooseMediaButton from '../components/SimpleChooseMediaButton';

export default function CheckMarkEdit( props ) {
	const {
		      setAttributes,
		      attributes,
	      } = props;

	const blockProps = useBlockProps();

	const [ isChecked, toggleChecked ] = useCheckedChoiceState();

	const controlImageUrl = (
		() => {
			if ( 'image' !== attributes.controlType ) {
				return false;
			}

			return isChecked
			       ? attributes?.checkedImageControl?.url
			       : attributes?.defaultImageControl?.url;
		}
	)();

	if ( attributes.isPreview ) {
		return <div style={ {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
		} }>
			{ preview }
		</div>;
	}

	return <>
		<span { ...blockProps }>
			{ !!controlImageUrl
			  ? <img
				  src={ controlImageUrl }
				  className={ 'jet-form-builder-check-mark-img' }
				  alt={ fieldName + ' ' + __( 'control', 'jet-form-builder' ) }
			  />
			  : <input
				  type="checkbox"
				  checked={ isChecked }
				  onChange={ () => toggleChecked( prev => !prev ) }
				  className={ 'jet-form-builder-check-mark-input' }
			  /> }
		</span>
		<InspectorControls>
			<div style={ { padding: '20px' } }>
				<ToggleGroupControl
					onChange={ controlType => setAttributes(
						{ controlType },
					) }
					value={ attributes.controlType }
					label={ __( 'Control type', 'jet-form-builder' ) }
					isBlock={ true }
				>
					<ToggleGroupControlOption
						label={ __( 'HTML input', 'jet-form-builder' ) }
						value={ '' }
					/>
					<ToggleGroupControlOption
						label={ __( 'Image', 'jet-form-builder' ) }
						value={ 'image' }
					/>
				</ToggleGroupControl>
				<ToggleControl
					label={ __(
						'Show checked state',
						'jet-form-builder',
					) }
					onChange={ () => toggleChecked( prev => !prev ) }
				/>
			</div>
		</InspectorControls>
		{ 'image' === attributes.controlType && <>
			<InspectorControls>
				<MediaUploadCheck>
					<PanelBody
						title={ __( 'Control Default', 'jet-form-builder' ) }
					>
						<Flex
							align={ 'center' }
							justify={ 'flex-start' }
							style={ {
								marginBottom: '8px',
							} }
						>
							<label>
								{ __(
									'Default icon',
									'jet-form-builder',
								) }
							</label>
							<MediaUpload
								onSelect={ media => setAttributes( {
									defaultImageControl: {
										...(
											attributes.defaultImageControl ??
											{}
										),
										url: media.url,
										id: media.id,
									},
								} ) }
								allowedTypes={ [ 'image/*' ] }
								value={ attributes.defaultImageControl?.id }
								render={
									( { open } ) => <SimpleChooseMediaButton
										open={ open }
										hasValue={ !!attributes.defaultImageControl?.url }
									/>
								}
							/>
							{ !!attributes.defaultImageControl?.url && <Button
								isDestructive
								isSmall
								icon="no-alt"
								onClick={ () => setAttributes( {
									defaultImageControl: {},
								} ) }
								label={ __(
									'Remove default icon',
									'jet-form-builder',
								) }
							/> }
						</Flex>
						{ !!attributes.defaultImageControl?.url && <>
							<img
								src={ attributes.defaultImageControl?.url }
								style={ {
									maxWidth: '150px',
									maxHeight: '150px',
									margin: '1em 0',
								} }
							/>
						</> }
						<Help>
							{ __(
								'Choose icon for default state of choice',
								'jet-form-builder',
							) }
						</Help>
					</PanelBody>
					<PanelBody
						title={ __( 'Control Checked', 'jet-form-builder' ) }
					>
						<Flex
							align={ 'center' }
							justify={ 'flex-start' }
							style={ {
								marginBottom: '8px',
							} }
						>
							<label>
								{ __(
									'Checked icon',
									'jet-form-builder',
								) }
							</label>
							<MediaUpload
								onSelect={ media => setAttributes( {
									checkedImageControl: {
										...(
											attributes.checkedImageControl ??
											{}
										),
										url: media.url,
										id: media.id,
									},
								} ) }
								allowedTypes={ [ 'image/*' ] }
								value={ attributes.checkedImageControl?.id }
								render={
									( { open } ) => <SimpleChooseMediaButton
										open={ open }
										hasValue={ !!attributes.checkedImageControl?.url }
									/>
								}
							/>
							{ !!attributes.checkedImageControl?.url && <Button
								isDestructive
								isSmall
								icon="no-alt"
								onClick={ () => setAttributes( {
									checkedImageControl: {},
								} ) }
								label={ __(
									'Remove checked icon',
									'jet-form-builder',
								) }
							/> }
						</Flex>
						{ !!attributes.checkedImageControl?.url && <>
							<img
								src={ attributes.checkedImageControl?.url }
								style={ {
									maxWidth: '150px',
									maxHeight: '150px',
									margin: '1em 0',
								} }
							/>
						</> }
						<Help>
							{ __(
								'Choose icon for checked state of choice',
								'jet-form-builder',
							) }
						</Help>
					</PanelBody>
				</MediaUploadCheck>
			</InspectorControls>
		</> }
	</>;
}