<template>
	<FormBuilderPage>
		<PostBoxGrid />
	</FormBuilderPage>
</template>

<script>
const {
	PostBoxGrid,
	FormBuilderPage
} = JetFBComponents;

export default {
	name: 'jfb-payments-single',
	components: {
		PostBoxGrid,
		FormBuilderPage,
	},
};
</script>

<style>

</style>