function getPrimaryId( record ) {
	return record?.id?.value ?? record?.choose?.value ?? 0;
}

export {
	getPrimaryId,
};