<template>
	<span>{{ __( 'Pro', 'jet-form-builder' ) }}</span>
</template>

<script>
const { i18n } = JetFBMixins;

export default {
	name: 'IsPROIcon',
	mixins: [ i18n ],
	props: {
		isActive: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style scoped>
span {
	background-color: #007CBA;
	padding: 0.1em 0.3em;
	text-transform: uppercase;
	border-radius: 3px;
	color: white;
	font-size: 12px;
	font-style: normal;
	font-weight: 700;
	line-height: 16px;
	letter-spacing: 0;
	text-align: left;
}
</style>