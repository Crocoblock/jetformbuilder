import { __ } from '@wordpress/i18n';
import { Button, Flex } from '@wordpress/components';
import { useMemo } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
import { STORE_NAME, useActions } from 'jet-form-builder-actions';
import { edit } from '@wordpress/icons';

function DisabledOverlay( { action } ) {
	const [ actions ] = useActions();

	const currentIndex = useMemo(
		() => actions.findIndex( ( { type } ) => type === action.type ),
		[ action.type ],
	);

	const { openActionSettings } = useDispatch( STORE_NAME );

	return <Flex
		direction="column"
		justify="space-evenly"
		align="center"
	>
		<span>{ __(
			'This action has already added.',
			'jet-form-builder',
		) }</span>
		<Button
			variant="tertiary"
			onClick={ () => {
				openActionSettings( {
					item: actions[ currentIndex ],
					index: currentIndex,
				} );
			} }
			icon={ edit }
		>
			{ __( 'Edit action', 'jet-form-builder' ) }
		</Button>
	</Flex>;
}

export default DisabledOverlay;