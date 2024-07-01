import { useDispatch, useSelect } from '@wordpress/data';

function useSiteOption( optionName ) {
	const { editEntityRecord } = useDispatch( 'core' );

	const onChangeSetting = value => {
		editEntityRecord(
			'root',
			'site',
			undefined,
			{
				[ optionName ]: value,
			},
		);
	};

	const setting = useSelect(
		select => {
			const allSettings = select( 'core' ).getEditedEntityRecord(
				'root',
				'site',
			);

			return allSettings[ optionName ];
		},
		[ optionName ],
	);

	return [ setting, onChangeSetting ];
}

export default useSiteOption;