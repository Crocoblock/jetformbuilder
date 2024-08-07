import preview from './preview';
import {
	PanelBody,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
	Flex,
	Button,
	ResizableBox,
	ToolbarButton,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	useBlockProps,
	MediaUploadCheck,
	MediaUpload,
	BlockControls,
} from '@wordpress/block-editor';
import Help from '../components/Help';
import SimpleChooseMediaButton from '../components/SimpleChooseMediaButton';
import Label from '../components/Label';
import { useState } from '@wordpress/element';
import { check } from '@wordpress/icons';

export default function CheckMarkEdit( props ) {
	const {
		      setAttributes,
		      attributes,
		      toggleSelection,
	      } = props;
	const {
		      '.jet-form-builder-check-mark-img': { width: imgWidth },
	      } = attributes.style;

	const blockProps                   = useBlockProps();
	const [ isChecked, toggleChecked ] = useState( false );

	const controlImageUrl = (
		() => {
			if ( 'image' !== attributes.controlType ||
				!attributes?.checkedImageControl?.url ||
				!attributes?.defaultImageControl?.url
			) {
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
		<BlockControls>
			<ToolbarButton
				icon={ check }
				title={ isChecked
				        ? __( 'Show unchecked state', 'jet-form-builder' )
				        : __( 'Show checked state', 'jet-form-builder' )
				}
				onClick={ () => toggleChecked( prev => !prev ) }
				isActive={ isChecked }
			/>
		</BlockControls>
		<div { ...blockProps }>
			{ !!controlImageUrl
			  ? <ResizableBox
				  enable={ {
					  bottom: false,
					  bottomLeft: false,
					  bottomRight: false,
					  left: false,
					  right: true,
					  top: false,
					  topLeft: false,
					  topRight: false,
				  } }
				  size={ {
					  width: imgWidth,
				  } }
				  minWidth="10"
				  onResizeStop={ ( event, direction, elt, delta ) => {
					  setAttributes( {
						  style: {
							  ...attributes.style,
							  '.jet-form-builder-check-mark-img': {
								  width: imgWidth + delta.width,
							  },
						  },
					  } );
					  toggleSelection( true );
				  } }
				  onResizeStart={ () => {
					  toggleSelection( false );
				  } }
			  >
				  <img
					  src={ controlImageUrl }
					  className={ 'jet-form-builder-check-mark-img' }
					  alt={ __( 'Check mark control', 'jet-form-builder' ) }
				  />
			  </ResizableBox>
			  : <input
				  type="checkbox"
				  checked={ isChecked }
				  onChange={ () => toggleChecked( prev => !prev ) }
				  className={ 'jet-form-builder-check-mark-input' }
			  /> }
		</div>
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
							<Label>
								{ __(
									'Default icon',
									'jet-form-builder',
								) }
							</Label>
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
							<Label>
								{ __(
									'Checked icon',
									'jet-form-builder',
								) }
							</Label>
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