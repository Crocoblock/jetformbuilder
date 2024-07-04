import PostPropertySelect from '../components/PostPropertySelect';
import { SelectControl, Flex } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import {
	ControlWithErrorStyle, IconText,
	RequiredLabel,
	Label,
	RowControl, RowControlEnd, RowControlEndStyle,
	WideLine,
} from 'jet-form-builder-components';
import { cx } from '@linaria/core';
import { __ } from '@wordpress/i18n';
import { ValidatorProvider } from 'jet-form-builder-actions';
import {
	useFields,
	useSanitizeFieldsMap,
} from 'jet-form-builder-blocks-to-actions';
import LegacyDefaultMetaControl from '../components/LegacyDefaultMetaControl';

const {
	      convertListToFieldsMap,
      } = JetFBActions;
const {
	      ActionFieldsMap,
	      WrapperRequiredControl,
	      DynamicPropertySelect,
      } = JetFBComponents;

const modifiers = applyFilters(
	'jet.fb.insert.post.modifiers',
	[
		{
			id: 'all',
			isSupported: settings => true,
		},
	],
);

const getActionModifierId = settings => {
	for ( const modifier of modifiers ) {
		if ( !modifier.isSupported( settings ) ) {
			continue;
		}

		return modifier.id;
	}
};

function InsertPostRender( props ) {
	const {
		      settings,
		      onChangeSettingObj,
		      source,
		      help,
		      label,
	      } = props;

	const formFields = convertListToFieldsMap( useFields() );

	const [ properties, setProperties ] = useState( () => {
		const id = getActionModifierId( settings );

		return source.properties[ id ] ?? [];
	} );

	useEffect( () => {
		/**
		 * Clear deprecated data
		 *
		 * @since 3.0
		 */
		if ( settings.requestFields?.length ) {
			onChangeSettingObj( { requestFields: null } );
		}
	}, [] );

	useEffect( () => {
		const id = getActionModifierId( settings );

		setProperties( source.properties[ id ] ?? [] );
	}, [ settings.post_type ] );

	/**
	 * @link https://github.com/Crocoblock/issues-tracker/issues/1315
	 */
	useSanitizeFieldsMap();

	/* eslint-disable jsx-a11y/no-onchange */

	return (
		<Flex direction="column">
			<RowControl>
				{ ( { id } ) => <ValidatorProvider
					isSupported={ error => 'post_type' === error?.property }
				>
					{ ( { hasError, setShowError } ) => <>
						<RequiredLabel htmlFor={ id }>
							{ __( 'Post type', 'jet-form-builder' ) }
						</RequiredLabel>
						<Flex
							className={ cx(
								RowControlEndStyle,
								hasError && ControlWithErrorStyle,
							) }
							direction="column"
						>
							{ hasError && <IconText>
								{ __(
									'Please fill this required field',
									'jet-form-builder',
								) }
							</IconText> }
							<SelectControl
								id={ id }
								value={ settings.post_type }
								options={ source.postTypes }
								help={ help( 'post_type' ) }
								onChange={ post_type => onChangeSettingObj(
									{ post_type } ) }
								onBlur={ () => setShowError( true ) }
								__next40pxDefaultSize
								__nextHasNoMarginBottom
							/>
						</Flex>
					</> }
				</ValidatorProvider> }
			</RowControl>
			<WideLine/>
			<RowControl>
				{ ( { id } ) => <>
					<Label htmlFor={ id }>
						{ label( 'post_status' ) }
					</Label>
					<SelectControl
						id={ id }
						value={ settings.post_status }
						options={ source.postStatuses }
						help={ help( 'post_status' ) }
						onChange={ post_status => onChangeSettingObj(
							{ post_status },
						) }
						__next40pxDefaultSize
						__nextHasNoMarginBottom
					/>
				</> }
			</RowControl>
			<WideLine/>
			<ActionFieldsMap
				label={ label( 'fields_map' ) }
				fields={ formFields }
			>
				<WrapperRequiredControl>
					<DynamicPropertySelect
						dynamic={ [ 'meta_input', 'post_terms' ] }
						properties={ properties }
						parseValue={ value => (
							value.includes( 'jet_tax__' )
							? 'post_terms'
							: 'meta_input'
						) }
					>
						<PostPropertySelect/>
					</DynamicPropertySelect>
				</WrapperRequiredControl>
			</ActionFieldsMap>
			<WideLine/>
			<RowControl>
				<Label>{ label( 'default_meta' ) }</Label>
				<RowControlEnd>
					<LegacyDefaultMetaControl
						defaultMeta={ settings.default_meta }
						onChange={ default_meta => onChangeSettingObj(
							{ default_meta },
						) }
					/>
				</RowControlEnd>
			</RowControl>
		</Flex>
	);
	/* eslint-enable jsx-a11y/no-onchange */
}

export default InsertPostRender;
