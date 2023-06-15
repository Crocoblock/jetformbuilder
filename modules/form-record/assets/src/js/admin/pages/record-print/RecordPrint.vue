<template>
	<FormBuilderPage>
		<template #heading-after>
			<PrintButton/>
		</template>
		<PostBoxGrid/>
	</FormBuilderPage>
</template>

<script>
const {
	      PostBoxGrid,
	      FormBuilderPage,
	      PrintButton,
      } = JetFBComponents;

const { apiFetch } = wp;

export default {
	name: 'record-print',
	components: {
		PostBoxGrid,
		FormBuilderPage,
		PrintButton,
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