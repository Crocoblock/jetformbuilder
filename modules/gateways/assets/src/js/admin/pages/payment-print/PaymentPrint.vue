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
	},
};
</script>

<style>

</style>