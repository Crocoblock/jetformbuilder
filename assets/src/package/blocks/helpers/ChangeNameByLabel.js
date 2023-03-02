import { getConvertedName } from '../../tools';

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
		name: getConvertedName( attributes.label ),
	} );
}

export default ChangeNameByLabel;