import { useDispatch, useSelect } from '@wordpress/data';

function useSiteOption( optionName ) {
	const { editEntityRecord } = useDispatch( 'core' );

	const { setting, isResolving } = useSelect(
		select => {
			const allSettings = select( 'core' ).getEditedEntityRecord(
				'root',
				'site',
			);

			return {
				setting: allSettings[ optionName ],
				isResolving: select( 'core' ).isResolving(
					'getEditedEntityRecord',
					[ 'root', 'site' ],
				),
			};
		},
		[ optionName ],
	);

	const onChangeSetting = value => {
		if ( isResolving ) {
			return;
		}
		editEntityRecord(
			'root',
			'site',
			undefined,
			{
				[ optionName ]: value,
			},
		);
	};

	return {
		value: setting,
		onChange: onChangeSetting,
		isResolving,
	};
}

export default useSiteOption;