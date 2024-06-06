const { __ } = wp.i18n;

const calcType = [
	{
		value: 'default',
		label: __( 'Default (returns rows count)' )
	},
	{
		value: 'custom',
		label: __( 'Custom (calculate custom value for each row)' )
	}
];

const manageItemsCount = [
	{
		value: 'manually',
		label: __( 'Manually' )
	},
	{
		value: 'dynamically',
		label: __( 'Dynamically (get count from form field)' )
	}
];

export {
	calcType,
	manageItemsCount
};