/* eslint-disable import/no-extraneous-dependencies */
import PostPropertySelect from '../components/PostPropertySelect';
import { Flex } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import {
	ControlWithErrorStyle, IconText,
	RequiredLabel,
	Label,
	RowControl, RowControlEnd, RowControlEndStyle,
	WideLine,
	StyledSelectControl,
	StyledFlexControl,
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
			isSupported: () => true,
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

// eslint-disable-next-line max-lines-per-function
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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [] );

	useEffect( () => {
		const id = getActionModifierId( settings );

		setProperties( source.properties[ id ] ?? [] );
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ settings.post_type ] );

	/**
	 * @see https://github.com/Crocoblock/issues-tracker/issues/1315
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
						<StyledFlexControl
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
							<StyledSelectControl
								id={ id }
								value={ settings.post_type }
								options={ source.postTypes }
								help={ help( 'post_type' ) }
								onChange={ val => onChangeSettingObj(
									{ post_type: val },
								) }
								onBlur={ () => setShowError( true ) }
							/>
						</StyledFlexControl>
					</> }
				</ValidatorProvider> }
			</RowControl>
			<WideLine/>
			<RowControl>
				{ ( { id } ) => <>
					<Label htmlFor={ id }>
						{ label( 'post_status' ) }
					</Label>
					<StyledSelectControl
						id={ id }
						value={ settings.post_status }
						options={ source.postStatuses }
						help={ help( 'post_status' ) }
						onChange={ val => onChangeSettingObj(
							{ post_status: val },
						) }
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
						onChange={ val => onChangeSettingObj(
							{ default_meta: val },
						) }
					/>
				</RowControlEnd>
			</RowControl>
		</Flex>
	);
	/* eslint-enable jsx-a11y/no-onchange */
}

export default InsertPostRender;
