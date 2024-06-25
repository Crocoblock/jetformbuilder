import { FormTokenField } from '@wordpress/components';
import { useMemo } from '@wordpress/element';

function FormLabeledTokenField( {
	suggestions = [],
	value = [],
	valueProp = 'value',
	labelProp = 'label',
	__experimentalValidateInput = token => true,
	...props
} ) {

	const [ valueToLabel, labelToValue ] = useMemo( () => {
		const valToLabel = {};
		const labelToVal = {};

		for ( const suggestion of suggestions ) {
			const val   = suggestion[ valueProp ] ?? '';
			const label = suggestion[ labelProp ] ?? '';

			valToLabel[ val ]   = label;
			labelToVal[ label ] = val;
		}

		return [ valToLabel, labelToVal ];
	}, [] );

	const labelSuggestions = useMemo(
		() => suggestions.map( current => current[ labelProp ] || '' ).filter(
			current => (
				current && !value.includes( labelToValue[ current ] )
			),
		),
		[ value ],
	);

	return <FormTokenField
		displayTransform={ countrySlug => (
			valueToLabel[ countrySlug ] ?? countrySlug
		) }
		saveTransform={ countryLabel => (
			labelToValue[ countryLabel ] ?? countryLabel
		) }
		suggestions={ labelSuggestions }
		value={ value }
		__experimentalValidateInput={ token => (
			__experimentalValidateInput( labelToValue[ token ] ?? token )
		) }
		{ ...props }
	/>;
}

export default FormLabeledTokenField;