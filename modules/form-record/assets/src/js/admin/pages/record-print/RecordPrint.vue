<template>
	<FormBuilderPage>
		<PostBoxGrid/>
	</FormBuilderPage>
</template>

<script>
const {
	      PostBoxGrid,
	      FormBuilderPage,
      } = JetFBComponents;

const { apiFetch } = wp;

export default {
	name: 'record-print',
	components: {
		PostBoxGrid,
		FormBuilderPage,
	},
};
</script>

<style lang="scss">

#form-fields-wrapper {
	.cell--name {
		flex: 0.4;
	}
}

</style>