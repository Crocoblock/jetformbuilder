import preview from './preview';

const { FieldSettingsWrapper } = JetFBComponents;

const { __ } = wp.i18n;

const { SelectControl, TextControl } = wp.components;

const {
		  InspectorControls,
		  useBlockProps,
		  RichText,
	  } = wp.blockEditor ? wp.blockEditor : wp.editor;

const { RawHTML } = wp.element;

const { useState, useEffect } = wp.element;

export default function ProgressBar( props ) {

	const blockProps = useBlockProps();

	const {
			  attributes,
			  setAttributes,
			  editProps: { uniqKey, attrHelp },
		  } = props;

	const [ progressHtml, setProgressHtml ] = useState( '' );

	const getProgressTypeHtml = type => {
		const progress = JetFormProgressBar.progress_types.find( elem => type === elem.value )

		if ( ! progress ) {
			return '';
		}

		return progress.html;
	};

	useEffect( () => {
		setProgressHtml( getProgressTypeHtml( attributes.progress_type ) );
	}, [] );

	if ( attributes.isPreview ) {
		return <div style={ {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
		} }>
			{ preview }
		</div>
	}

	return [
		<InspectorControls key={ uniqKey( 'InspectorControls' ) }>
			<FieldSettingsWrapper
				key={ uniqKey( 'FieldSettingsWrapper' ) }
				{ ...props }
			>
				{ 1 < JetFormProgressBar.progress_types.length && <SelectControl
					key={ uniqKey( 'progress_type' ) }
					label={ __( 'Progress Bar Type', 'jet-form-builder' ) }
					value={ attributes.progress_type }
					onChange={ progress_type => {
						setAttributes( { progress_type } )
						setProgressHtml( getProgressTypeHtml( progress_type ) );
					} }
					options={ JetFormProgressBar.progress_types }
				/> }
			</FieldSettingsWrapper>
		</InspectorControls>,
		<div key={ uniqKey( 'viewBlock' ) } { ...blockProps }>
			<RawHTML>{ progressHtml }</RawHTML>
		</div>,
	];

}