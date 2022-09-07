import { getConvertedName } from '../../tools';
import SanitizeFieldName from './SanitizeFieldName';

function ChangeNameByLabel( attributes, setAttributes ) {
	if ( 1 >= attributes.label.length
		|| (
			attributes.name && 'field_name' !==
			attributes.name
		)
	) {
		return;
	}

	setAttributes( {
		name: SanitizeFieldName(
			getConvertedName( attributes.label ),
		),
	} );
}

export default ChangeNameByLabel;