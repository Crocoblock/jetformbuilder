import FieldSettings from './FieldSettings';
import preview from './preview';
import {
	Card,
} from '@wordpress/components';
import { styled } from '@linaria/react';
const { __ } = wp.i18n;

const {
	      AdvancedFields,
	      FieldSettingsWrapper,
	      BlockLabel,
	      BlockDescription,
	      BlockAdvancedValue,
	      BlockName,
      } = JetFBComponents;

const {
	      useBlockAttributes,
	      useUniqueNameOnDuplicate,
      } = JetFBHooks;

const {
	      InspectorControls,
	      useBlockProps,
	      RichText,
      } = wp.blockEditor;

const {
	      //Card,
	      CardHeader,
	      CardBody,
	      PanelBody,
      } = wp.components;

const {
	      useEffect,
      } = wp.element;

const StyledCard = styled( Card )`
	&.buddypress-active > div {
		height: auto;
	}
`;

// eslint-disable-next-line max-lines-per-function
export default function HiddenEdit( props ) {

	const {
		      attributes,
		      setAttributes,
		      isSelected,
		      editProps: { uniqKey },
	      } = props;

	const blockProps = useBlockProps();
	useUniqueNameOnDuplicate();

	const [ , setAttrs ] = useBlockAttributes();

	const resetRender = () => {
		if ( 'referer_url' === attributes.field_value ) {
			setAttributes( { render: true } );
		}
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect( resetRender, [ attributes.field_value ] );

	if ( attributes.isPreview ) {
		return <div style={ {
			width: '100%',
			display: 'flex',
			justifyContent: 'center',
		} }>
			{ preview }
		</div>;
	}

	const { label = 'Please set `Field Value`' } = JetFormHiddenField.sources.find(
		option => option.value === attributes.field_value,
	);

	const resultLabel = [ label ];

	switch ( attributes.field_value ) {
		case 'post_meta':
		case 'user_meta':
			resultLabel.push( attributes.hidden_value_field );
			break;
		case 'query_var':
			resultLabel.push( attributes.query_var_key );
			break;
		case 'current_date':
			resultLabel.push( attributes.date_format );
			break;
		case 'manual_input':
			resultLabel.push( attributes.hidden_value );
			break;
	}

	const isBuddypress = document.body.classList.contains( 'wp-admin' );

	return [
		isSelected && (
			<InspectorControls
				key={ uniqKey( 'InspectorControls' ) }
			>
				<PanelBody title={ __( 'General', 'jet-form-builder' ) }>
					<BlockLabel/>
					<BlockName/>
					<BlockDescription/>
				</PanelBody>
				<PanelBody title={ __( 'Value', 'jet-form-builder' ) }>
					<BlockAdvancedValue/>
				</PanelBody>
				<FieldSettingsWrapper { ...props }>
					<FieldSettings/>
				</FieldSettingsWrapper>
				<AdvancedFields/>
			</InspectorControls>
		),
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<StyledCard elevation={ 2 } className={ `${isBuddypress ? 'buddypress-active' : ''}` }>
				<CardHeader>
					<RichText
						placeholder="hidden_field_name..."
						allowedFormats={ [] }
						value={ attributes.name }
						onChange={ name => setAttrs( { name } ) }
					/>
				</CardHeader>
				<CardBody>
					{ isSelected && <FieldSettings/> }
					{ !isSelected && resultLabel.join( ': ' ) }
				</CardBody>
			</StyledCard>
		</div>,
	];
};
