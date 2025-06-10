import { __ } from '@wordpress/i18n';
import {
	Help,
	Label,
	RowControl,
	RowControlEndStyle,
	TableListStyle,
} from 'jet-form-builder-components';
import {Card, Flex, FlexItem} from '@wordpress/components';
import { cx } from '@linaria/core';
import { useFields } from 'jet-form-builder-blocks-to-actions';
import UserMetaRowItem from './UserMetaRowItem';

function UserFieldsRow( { getMapField, setMapField,  } ) {

	const formFields = useFields( { withInner: false } );

	return <div createId={ false } className={TableListStyle.Wrap}>
		<Label className={TableListStyle.Label}>
			{ __( `User Meta`, 'jet-form-builder' ) }
		</Label>
		<Help className={TableListStyle.WhiteSpaceNormal}>
			Map form fields to custom user meta fields (e.g., "Phone") not included in WordPress by default.
		</Help>
		<Card className={TableListStyle.Card}>
			<Flex className={TableListStyle.Th}>
				<FlexItem className={TableListStyle.ThItem}>
					{ __( `User Meta Fields`, 'jet-form-builder' ) }
				</FlexItem>
				<FlexItem className={TableListStyle.ThItem}>
					{ __( `Form Fields`, 'jet-form-builder' ) }
				</FlexItem>
			</Flex>
			{ formFields.map( ( field ) => <UserMetaRowItem
				key={ field.value }
				label={ field.label }
				value={ getMapField( {
					source: 'meta_fields_map',
					name: field.value,
				} ) }
				onChange={ newVal => setMapField( {
					nameField: field.value,
					value: newVal,
					source: 'meta_fields_map',
				} ) }
			/> ) }
		</Card>
	</div>;
}

export default UserFieldsRow;
