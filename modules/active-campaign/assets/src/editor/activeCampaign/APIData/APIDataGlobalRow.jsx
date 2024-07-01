import { TextControl, Flex, FlexItem } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	RowControl,
	Label,
	RowControlEndStyle, IconText,
	RequiredLabel,
	ControlWithErrorStyle,
} from 'jet-form-builder-components';
import { useSiteOptionJSON } from 'jet-form-builder-data';
import { useSelect } from '@wordpress/data';
import { STORE_NAME } from '../../store';
import APIDataHelp from './APIDataHelp';
import { useInstanceId } from '@wordpress/compose';
import APIDataFetchButton from './APIDataFetchButton';
import { cx } from '@linaria/core';

function APIDataGlobalRow() {
	const fetchError = useSelect(
		select => select( STORE_NAME ).getFetchError(),
		[],
	);

	const [ globalSettings, setGlobalSettings ] = useSiteOptionJSON(
		'jet_form_builder_settings__active-campaign-tab',
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
			<TextControl
				id={ urlId }
				value={ globalSettings.api_url }
				onChange={ api_url => setGlobalSettings( {
					...globalSettings, api_url,
				} ) }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
			<RequiredLabel htmlFor={ keyId }>
				{ __( 'API Key', 'jet-form-builder' ) }
			</RequiredLabel>
			<TextControl
				id={ keyId }
				value={ globalSettings.api_key }
				onChange={ api_key => setGlobalSettings( {
					...globalSettings, api_key,
				} ) }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
			<FlexItem>
				<APIDataFetchButton
					apiUrl={ globalSettings.api_url }
					apiKey={ globalSettings.api_key }
				/>
			</FlexItem>
			<APIDataHelp/>
		</Flex>
	</RowControl>;
}

export default APIDataGlobalRow;