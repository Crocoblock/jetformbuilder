import { useInstanceId } from '@wordpress/compose';
import {
	ControlWithErrorStyle, IconText,
	RequiredLabel,
	RowControl,
	RowControlEndStyle,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { Flex, TextControl, Button } from '@wordpress/components';
import { cx } from '@linaria/core';
import { useDispatch, useSelect } from '@wordpress/data';
import { STORE_NAME } from '../store';
import { cloud } from '@wordpress/icons';
import APIKeyHelp from './APIKeyHelp';
import { styled } from '@linaria/react';

const {
	      useActionValidatorProvider,
      } = JetFBHooks;

const StyledTextControl = styled( TextControl )`
    flex: 1;
`;

function APIKeyRow( { settings, onChangeSettingObj } ) {
	const { fetchApiData }     = useDispatch( STORE_NAME );
	const { editEntityRecord } = useDispatch( 'core' );

	const updateGlobalApiKey = props => {
		editEntityRecord(
			'root',
			'site',
			undefined,
			{
				'jet_form_builder_settings__mailchimp-tab': JSON.stringify( {
					...props,
				} ),
			},
		);
	};

	const { isFetchLoading, fetchError, globalSettings } = useSelect(
		select => {
			const allSettings = select( 'core' ).getEditedEntityRecord(
				'root',
				'site',
			);

			return {
				isFetchLoading: select( STORE_NAME ).isFetchLoading(),
				fetchError: select( STORE_NAME ).getFetchError(),
				globalSettings: JSON.parse(
					allSettings[ 'jet_form_builder_settings__mailchimp-tab' ],
				),
			};
		},
		[],
	);

	const { hasError, setShowError } = useActionValidatorProvider( {
		isSupported: error => 'api_key' === error?.property,
	} );

	const id = useInstanceId( RowControl, 'jfb-control' );

	return <RowControl createId={ false }>
		<RequiredLabel htmlFor={ id }>
			{ __( 'API Key', 'jet-form-builder' ) }
		</RequiredLabel>
		<Flex
			className={ cx(
				RowControlEndStyle,
				(
					hasError || Boolean( fetchError )
				) && ControlWithErrorStyle,
			) }
			direction="column"
		>
			{ hasError && <IconText>
				{ __(
					'Please fill this required field',
					'jet-form-builder',
				) }
			</IconText> }
			{ Boolean( fetchError ) && <IconText>
				{ __(
					'Fetching data was failed',
					'jet-form-builder',
				) }
			</IconText> }
			<Flex>
				{ settings.use_global ? <StyledTextControl
					id={ id }
					value={ globalSettings.api_key }
					onChange={ api_key => updateGlobalApiKey(
						{ api_key },
					) }
					onBlur={ () => setShowError( true ) }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/> : <StyledTextControl
					  id={ id }
					  value={ settings.api_key }
					  onChange={ api_key => onChangeSettingObj(
						  { api_key },
					  ) }
					  onBlur={ () => setShowError( true ) }
					  __next40pxDefaultSize
					  __nextHasNoMarginBottom
				  /> }
				<Button
					onClick={ () => fetchApiData( settings.api_key ) }
					disabled={ isFetchLoading }
					isBusy={ isFetchLoading }
					icon={ cloud }
					variant="secondary"
				>
					{ __( 'Fetch', 'jet-form-builder' ) }
				</Button>
			</Flex>
			<APIKeyHelp/>
		</Flex>
	</RowControl>;
}

export default APIKeyRow;
