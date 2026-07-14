import { Flex, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useFields } from 'jet-form-builder-blocks-to-actions';
import {
	ActionMessages,
	ValidatorProvider,
} from 'jet-form-builder-actions';
import {
	ClearBaseControlStyle,
	ControlWithErrorStyle,
	Help,
	IconText,
	Label,
	RequiredLabel,
	RowControl,
	RowControlEndStyle,
	StyledFlexControl,
	StyledSelectControl,
	WideLine,
} from 'jet-form-builder-components';

const classNames = ( ...classes ) => classes.filter( Boolean ).join( ' ' );

const targetOptions = [
	{
		value: 'current_user',
		label: __( 'Current logged-in user', 'jet-form-builder' ),
	},
	{
		value: 'field',
		label: __( 'User ID from form field', 'jet-form-builder' ),
	},
];

function RequiredSelectControl( {
	label,
	value,
	onChange,
	options,
	help,
	property,
	multiple = false,
} ) {
	return <RowControl>
		{ ( { id } ) => <ValidatorProvider
			isSupported={ error => property === error?.property }
		>
			{ ( { hasError, setShowError } ) => <>
				<RequiredLabel htmlFor={ id }>
					{ label }
				</RequiredLabel>
				<StyledFlexControl
					className={ classNames(
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
						multiple={ multiple }
						value={ value }
						options={ options }
						onChange={ onChange }
						onBlur={ () => setShowError( true ) }
						help={ help }
					/>
				</StyledFlexControl>
			</> }
		</ValidatorProvider> }
	</RowControl>;
}

function TargetUserControls( { settings, onChangeSettingObj, label, help } ) {
	const formFields = useFields( {
		withInner: false,
		placeholder: '--',
	} );

	const targetUser = settings?.target_user ?? 'current_user';

	return <>
		<RowControl>
			{ ( { id } ) => <>
				<Label htmlFor={ id }>
					{ label( 'target_user' ) }
				</Label>
				<StyledSelectControl
					id={ id }
					value={ targetUser }
					options={ targetOptions }
					help={ help( 'target_user' ) }
					onChange={ value => onChangeSettingObj( {
						target_user: value,
					} ) }
				/>
			</> }
		</RowControl>
		{ 'field' === targetUser && <>
			<WideLine/>
			<RequiredSelectControl
				label={ label( 'user_id_field' ) }
				value={ settings.user_id_field }
				options={ formFields }
				property="user_id_field"
				help={ help( 'user_id_field' ) }
				onChange={ value => onChangeSettingObj( {
					user_id_field: value,
				} ) }
			/>
		</> }
	</>;
}

function ConfirmationControl( { settings, onChangeSettingObj, label, help } ) {
	const formFields = useFields( {
		withInner: false,
		placeholder: '--',
	} );

	return <>
		<WideLine/>
		<RowControl>
			{ ( { id } ) => <>
				<Label htmlFor={ id }>
					{ label( 'confirmation_field' ) }
				</Label>
				<StyledSelectControl
					id={ id }
					value={ settings.confirmation_field }
					options={ formFields }
					help={ help( 'confirmation_field' ) }
					onChange={ value => onChangeSettingObj( {
						confirmation_field: value,
					} ) }
				/>
			</> }
		</RowControl>
		<WideLine/>
		<RowControl>
			{ ( { id } ) => <>
				<Label htmlFor={ id }>
					{ label( 'current_password_field' ) }
				</Label>
				<StyledSelectControl
					id={ id }
					value={ settings.current_password_field }
					options={ formFields }
					help={ help( 'current_password_field' ) }
					onChange={ value => onChangeSettingObj( {
						current_password_field: value,
					} ) }
				/>
			</> }
		</RowControl>
	</>;
}

function WordPressContentControls( props ) {
	const {
		      settings,
		      onChangeSettingObj,
		      source,
		      label,
		      help,
	      } = props;
	const postTypes = settings?.post_types ?? [];

	return <>
		<WideLine/>
		<ToggleControl
			className={ ClearBaseControlStyle }
			label={ label( 'delete_content' ) }
			checked={ Boolean( settings.delete_content ) }
			onChange={ value => onChangeSettingObj( {
				delete_content: Boolean( value ),
			} ) }
		/>
		<Help>
			{ help( 'delete_content' ) }
		</Help>
		{ Boolean( settings.delete_content ) && <>
			<WideLine/>
			<RequiredSelectControl
				multiple
				label={ label( 'post_types' ) }
				value={ postTypes }
				options={ source.postTypes }
				property="post_types"
				help={ help( 'post_types' ) }
				onChange={ value => onChangeSettingObj( {
					post_types: value,
				} ) }
			/>
		</> }
	</>;
}

function MediaControls( { settings, onChangeSettingObj, label, help } ) {
	return <>
		<WideLine/>
		<ToggleControl
			className={ ClearBaseControlStyle }
			label={ label( 'delete_media' ) }
			checked={ Boolean( settings.delete_media ) }
			onChange={ value => onChangeSettingObj( {
				delete_media: Boolean( value ),
			} ) }
		/>
		<Help>
			{ help( 'delete_media' ) }
		</Help>
	</>;
}

function CctControls( { settings, onChangeSettingObj, source, label, help } ) {
	const cctTypes    = settings?.cct_types ?? [];
	const cctOptions  = source?.cctTypes ?? [];
	const hasCctTypes = Boolean( cctOptions.length );

	if ( !hasCctTypes ) {
		return null;
	}

	return <>
		<WideLine/>
		<ToggleControl
			className={ ClearBaseControlStyle }
			label={ label( 'delete_cct' ) }
			checked={ Boolean( settings.delete_cct ) }
			onChange={ value => onChangeSettingObj( {
				delete_cct: Boolean( value ),
			} ) }
		/>
		<Help>
			{ help( 'delete_cct' ) }
		</Help>
		{ Boolean( settings.delete_cct ) && <>
			<WideLine/>
			<RequiredSelectControl
				multiple
				label={ label( 'cct_types' ) }
				value={ cctTypes }
				options={ cctOptions }
				property="cct_types"
				help={ help( 'cct_types' ) }
				onChange={ value => onChangeSettingObj( {
					cct_types: value,
				} ) }
			/>
		</> }
	</>;
}

function DeleteUserRender( props ) {
	return <Flex direction="column">
		<TargetUserControls { ...props }/>
		<ConfirmationControl { ...props }/>
		<WordPressContentControls { ...props }/>
		<MediaControls { ...props }/>
		<CctControls { ...props }/>
		<WideLine/>
		<ActionMessages { ...props }/>
	</Flex>;
}

export default DeleteUserRender;
