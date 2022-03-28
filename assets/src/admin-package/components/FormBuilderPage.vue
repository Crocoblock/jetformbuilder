<template>
	<div :class="{
		'wrap': true,
		'jet-form-builder-page': true,
	}">
		<h1 class="cs-vui-title">{{ title }}</h1>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'FormBuilderPage',
	props: {
		title: {
			type: String,
			default: window?.JetFBPageConfig?.title ?? '',
		},
	},
};
</script>

<style>

</style>