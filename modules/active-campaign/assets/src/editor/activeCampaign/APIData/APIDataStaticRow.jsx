import { TextControl, Flex, FlexItem } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	RowControl,
	Label,
	RowControlEndStyle, IconText,
	RequiredLabel, ControlWithErrorStyle,
} from 'jet-form-builder-components';
import { useSelect } from '@wordpress/data';
import { STORE_NAME } from '../../store';
import APIDataHelp from './APIDataHelp';
import { useInstanceId } from '@wordpress/compose';
import APIDataFetchButton from './APIDataFetchButton';
import { cx } from '@linaria/core';

const {
	      useActionValidatorProvider,
      } = JetFBHooks;

function APIDataStaticRow( { settings, onChangeSettingObj } ) {
	const fetchError = useSelect(
		select => select( STORE_NAME ).getFetchError(),
		[],
	);

	const {
		      hasError: hasErrorKey,
		      setShowError: setShowErrorKey,
	      } = useActionValidatorProvider(
		{
			isSupported: error => 'api_key' === error?.property,
		},
	);

	const {
		      hasError: hasErrorUrl,
		      setShowError: setShowErrorUrl,
	      } = useActionValidatorProvider(
		{
			isSupported: error => 'api_url' === error?.property,
		},
	);

	const urlId = useInstanceId( RowControl, 'jfb-control' );
	const keyId = useInstanceId( RowControl, 'jfb-control' );

	return <RowControl createId={ false }>
		<Label>{ __( 'API Data', 'jet-form-builder' ) }</Label>
		<Flex
			className={ cx(
				RowControlEndStyle,
				Boolean( fetchError ) && ControlWithErrorStyle,
			) }
			gap={ 3 }
			direction="column"
		>
			{ Boolean( fetchError ) && <IconText>
				{ __(
					'Fetching data was failed',
					'jet-form-builder',
				) }
			</IconText> }
			<RequiredLabel htmlFor={ urlId }>
				{ __( 'API URL', 'jet-form-builder' ) }
			</RequiredLabel>
			{ hasErrorUrl && <IconText>
				{ __(
					'Please fill this required field',
					'jet-form-builder',
				) }
			</IconText> }
			<TextControl
				id={ urlId }
				value={ settings.api_url }
				onChange={ api_url => onChangeSettingObj( {
					api_url,
				} ) }
				onBlur={ () => setShowErrorUrl( true ) }
				className={ hasErrorUrl && ControlWithErrorStyle }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
			<RequiredLabel htmlFor={ keyId }>
				{ __( 'API Key', 'jet-form-builder' ) }
			</RequiredLabel>
			{ hasErrorKey && <IconText>
				{ __(
					'Please fill this required field',
					'jet-form-builder',
				) }
			</IconText> }
			<TextControl
				id={ keyId }
				value={ settings.api_key }
				onChange={ api_key => onChangeSettingObj( {
					api_key,
				} ) }
				onBlur={ () => setShowErrorKey( true ) }
				className={ hasErrorKey && ControlWithErrorStyle }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
			<FlexItem>
				<APIDataFetchButton
					apiKey={ settings.api_key }
					apiUrl={ settings.api_url }
				/>
			</FlexItem>
			<APIDataHelp/>
		</Flex>
	</RowControl>;
}

export default APIDataStaticRow;