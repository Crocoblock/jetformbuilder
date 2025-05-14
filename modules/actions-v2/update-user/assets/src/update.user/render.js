import UserPropertySelect from '../components/UserPropertySelect';
import {
	useSanitizeFieldsMap,
	useFields,
} from 'jet-form-builder-blocks-to-actions';
import {
	convertListToFieldsMap,
	useActionValidatorProvider,
	ActionMessages,
} from 'jet-form-builder-actions';
import { SelectControl, Flex } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
	IconText,
	Label,
	RowControl,
	WideLine,
} from 'jet-form-builder-components';

const {
	      ActionFieldsMap,
	      WrapperRequiredControl,
	      DynamicPropertySelect,
      } = JetFBComponents;

// eslint-disable-next-line max-lines-per-function
function UpdateUserRender( props ) {

	const formFields = convertListToFieldsMap(
		useFields( { withInner: false } ),
	);

	const {
		      settings,
		      onChangeSetting,
		      source,
		      label,
	      } = props;

	/**
	 * @see https://github.com/Crocoblock/issues-tracker/issues/1315
	 */
	useSanitizeFieldsMap();

	const { hasError } = useActionValidatorProvider( {
		isSupported: error => 'field_id' === error?.property,
	} );

	return (
		<Flex direction="column">
			<ActionFieldsMap
				label={ label( 'fields_map' ) }
				fields={ formFields }
				customHelp={ () => hasError && <IconText>
					{ __(
						'Please select a field for User ID',
						'jet-form-builder',
					) }
				</IconText> }
			>
				<WrapperRequiredControl>
					<DynamicPropertySelect
						dynamic={ [ 'user_meta' ] }
					>
						<UserPropertySelect/>
					</DynamicPropertySelect>
				</WrapperRequiredControl>
			</ActionFieldsMap>
			<WideLine/>
			<RowControl>
				{ ( { id } ) => <>
					<Label htmlFor={ id }>
						{ __( 'User role', 'jet-form-builder' ) }
					</Label>
					<SelectControl
						multiple
						id={ id }
						value={ settings.user_role }
						options={ source.userRoles }
						onChange={ newValue => onChangeSetting( newValue,
							'user_role' ) }
						__next40pxDefaultSize
						__nextHasNoMarginBottom
					/>
				</> }
			</RowControl>
			<WideLine/>
			<ActionMessages { ...props } />
		</Flex>
	);
}

export default UpdateUserRender;
