function applyFilters( value, filters, context = {} ) {
	if ( null === filters || !filters?.length ) {
		return value;
	}

	let canUseRawRepeaterValue = Boolean( context?.rawRepeaterValue );

	for ( const filter of filters ) {
		const shouldUseRawRepeaterValue = (
			canUseRawRepeaterValue &&
			false === filter?.isCoreFilter
		);

		value = filter.applyWithProps(
			shouldUseRawRepeaterValue
				? context.rawRepeaterValue
				: value
		);
		canUseRawRepeaterValue = false;
	}

	return value;
}

export default applyFilters;
