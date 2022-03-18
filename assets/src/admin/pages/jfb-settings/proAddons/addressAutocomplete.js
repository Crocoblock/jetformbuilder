import IsPROIcon from '../IsPROIcon';

const { __ } = wp.i18n;

export default {
	title: __( 'Address Autocomplete', 'jet-form-builder' ),
	component: {
		name: 'jfb-address-tab',
	},
	disabled: true,
	icon: IsPROIcon,
};