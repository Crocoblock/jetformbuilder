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

const {
	      mapGetters,
	      mapMutations,
	      mapActions,
      } = Vuex;

export default {
	name: 'payment-print',
	components: {
		PostBoxGrid,
		FormBuilderPage,
		PrintButton,
	},
};
</script>

<style>

</style>