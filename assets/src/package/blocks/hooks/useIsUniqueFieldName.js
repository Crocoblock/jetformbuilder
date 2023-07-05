import useRequestFields from '../../actions/hooks/useRequestFields';

const {
	      useSelect,
      } = wp.data;
const {
	      useBlockEditContext,
      } = wp.blockEditor;

const {
	      __,
	      sprintf,
      } = wp.i18n;

const actionTypesMap = {};

for ( const { id, name } of window.jetFormActionTypes ) {
	actionTypesMap[ id ] = name;
}

function useIsUniqueFieldName() {
	const { clientId } = useBlockEditContext();
	const actionFields = useRequestFields(
		{ returnOnEmptyCurrentAction: false },
	);

	const { inFormFields, hasParent, fieldNames } = useSelect(
		select => {
			const currentBlock = select( 'jet-forms/fields' ).
				getBlockById( clientId );

			return {
				hasParent: !!currentBlock?.parentBlock,
				fieldNames: currentBlock?.fields?.map?.(
					( { value } ) => value ) ?? [],
				inFormFields: select( 'jet-forms/fields' ).
					isUniqueName( clientId ),
			};
		},
	);

	if ( !inFormFields ) {
		return {
			error: 'not_unique_in_fields',
			message: __(
				'The form field name must be unique. Please change it',
				'jet-form-builder',
			),
		};
	}

	if ( hasParent ) {
		return {};
	}

	const computed = actionFields.find(
		( { value } ) => fieldNames.includes( value ) );

	return {
		error: 'not_unique_in_actions',
		message: computed.from
		         ? sprintf(
				__(
					`The %s action already uses this field name. Please change it`,
					'jet-form-builder',
				),
				actionTypesMap[ computed.from ],
			)

		         : __(
				'The form field name must be unique. Please change it',
				'jet-form-builder',
			),
	};
}

export default useIsUniqueFieldName;