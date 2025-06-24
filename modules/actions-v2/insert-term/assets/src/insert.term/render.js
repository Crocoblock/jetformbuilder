/* eslint-disable import/no-extraneous-dependencies */
import TermPropertySelect from '../components/TermPropertySelect';
import { SelectControl, Flex } from '@wordpress/components';
import { useEffect, useState } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import {
	ControlWithErrorStyle,
	IconText,
	RequiredLabel,
	RowControl,
	RowControlEndStyle,
	WideLine,
} from 'jet-form-builder-components';
import { cx } from '@linaria/core';
import { __ } from '@wordpress/i18n';
import { ValidatorProvider } from 'jet-form-builder-actions';
import {
	useFields,
	useSanitizeFieldsMap,
} from 'jet-form-builder-blocks-to-actions';

const {
	      convertListToFieldsMap,
      } = JetFBActions;
const {
	      ActionFieldsMap,
	      WrapperRequiredControl,
	      DynamicPropertySelect,
      } = JetFBComponents;

const modifiers = applyFilters(
	'jet.fb.insert.term.modifiers',
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
function InsertTermRender( props ) {
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
	}, [ settings.taxonomy ] );

	/**
	 * @see https://github.com/Crocoblock/issues-tracker/issues/1315
	 */
	useSanitizeFieldsMap();

	/* eslint-disable jsx-a11y/no-onchange */
console.log(properties);
	return (
		<Flex direction="column">
			<RowControl>
				{ ( { id } ) => <ValidatorProvider
					isSupported={ error => 'taxonomy' === error?.property }
				>
					{ ( { hasError, setShowError } ) => <>
						<RequiredLabel htmlFor={ id }>
							{ __( 'Taxonomy', 'jet-form-builder' ) }
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
								value={ settings.taxonomy }
								options={ source.taxonomies }
								help={ help( 'taxonomy' ) }
								onChange={ val => onChangeSettingObj(
									{ taxonomy: val },
								) }
								onBlur={ () => setShowError( true ) }
								__next40pxDefaultSize
								__nextHasNoMarginBottom
							/>
						</Flex>
					</> }
				</ValidatorProvider> }
			</RowControl>
			<WideLine/>
			<ActionFieldsMap
				label={ label( 'fields_map' ) }
				fields={ formFields }
			>
				<WrapperRequiredControl>
					<DynamicPropertySelect
						dynamic={ [ 'term_meta' ] }
						properties={ properties }
						parseValue={ value => 'term_meta' }
					>
						<TermPropertySelect/>
					</DynamicPropertySelect>
				</WrapperRequiredControl>
			</ActionFieldsMap>
		</Flex>
	);
	/* eslint-enable jsx-a11y/no-onchange */
}

export default InsertTermRender;
