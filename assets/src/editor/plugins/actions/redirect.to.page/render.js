import {
	TextControl,
	SelectControl,
	BaseControl,
	CheckboxControl, Flex,
} from '@wordpress/components';
import useRedirectTypes from './useRedirectTypes';
import { __ } from '@wordpress/i18n';
import {
	ControlWithErrorStyle, IconText,
	RequiredLabel, RowControl,
	RowControlEndStyle, WideLine,
} from 'jet-form-builder-components';
import { cx } from '@linaria/core';
import RedirectTypeRow
	from '@/plugins/actions/redirect.to.page/RedirectTypeRow';
import RedirectPageRow
	from '@/plugins/actions/redirect.to.page/RedirectPageRow';

const {
	      AdvancedModalControl,
	      ValidatorProvider,
      } = JetFBComponents;

const { useFields } = JetFBHooks;

function RedirectToPageRender( props ) {

	const {
		      source,
		      label,
		      settings,
		      onChangeSettingObj,
	      } = props;

	const fields        = useFields( { withInner: false } );
	const redirectTypes = useRedirectTypes( { fields } );

	const isChecked = function ( name ) {
		const args_fields = Array.from( settings.redirect_args || [] );

		return Boolean( args_fields.includes( name ) );
	};

	const onChangeRedirectArgs = function ( value, field_name ) {
		let redirect_args = Array.from( settings.redirect_args || [] );

		if ( !value ) {
			const field_id = redirect_args.indexOf( field_name );

			redirect_args.splice( field_id, 1 );
		}
		else {
			redirect_args.push( field_name );
		}

		onChangeSettingObj( { redirect_args } );
	};

	/* eslint-disable jsx-a11y/no-onchange */
	return <Flex direction="column">
		<RedirectTypeRow
			settings={ settings }
			onChangeSettingObj={ onChangeSettingObj }
		/>
		<WideLine/>
		{ 'static_page' === settings.redirect_type && <RedirectPageRow
			settings={ settings }
			onChangeSettingObj={ onChangeSettingObj }
		/> }
		{ 'custom_url' === settings.redirect_type && <AdvancedModalControl
			value={ settings.redirect_url }
			label={ label( 'redirect_url' ) }
			macroWithCurrent
			onChangePreset={ redirect_url => onChangeSettingObj(
				{ redirect_url },
			) }
			onChangeMacros={ name => onChangeSettingObj( {
				redirect_url: (
					settings.redirect_url ?? ''
				) + name,
			} ) }
		>
			{ ( { instanceId } ) => <TextControl
				id={ instanceId }
				value={ settings.redirect_url }
				onChange={ redirect_url => onChangeSettingObj(
					{ redirect_url },
				) }
			/> }
		</AdvancedModalControl> }
		<BaseControl
			label={ label( 'redirect_args' ) }
			key="redirect_args_control"
		>
			<div className="jet-user-fields-map__list">
				{ fields.map( ( { name }, index ) => <CheckboxControl
						key={ `checkbox_args_${ name }_${ index }` }
						label={ name }
						checked={ isChecked( name ) }
						onChange={ newVal => onChangeRedirectArgs( newVal,
							name ) }
					/>,
				) }
			</div>
		</BaseControl>
		<TextControl
			key="redirect_hash_control"
			label={ label( 'redirect_hash' ) }
			value={ settings.redirect_hash }
			onChange={ redirect_hash => onChangeSettingObj(
				{ redirect_hash } ) }
		/>
	</Flex>;
	/* eslint-enable jsx-a11y/no-onchange */
}

export default RedirectToPageRender;

