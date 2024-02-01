const { __ } = wp.i18n;

const calcType = [
	{
		value: 'default',
		label: __( 'Default (returns rows count)', 'jet-form-builder' )
	},
	{
		value: 'custom',
		label: __( 'Custom (calculate custom value for each row)', 'jet-form-builder' )
	}
];

const manageItemsCount = [
	{
		value: 'manually',
		label: __( 'Manually', 'jet-form-builder' )
	},
	{
		value: 'dynamically',
		label: __( 'Dynamically (get count from form field)', 'jet-form-builder' )
	}
];

export {
	calcType,
	manageItemsCount
};