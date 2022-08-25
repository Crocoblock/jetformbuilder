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
	name: 'jfb-payments-single',
	components: {
		PostBoxGrid,
		FormBuilderPage,
	},
	created() {
		jfbEventBus.$on( 'payment-details-delete', () => {
			this[ 'scope-payment-details/actions/defaultDelete' ]();
		} );
	},
	methods: {
		...mapActions( [
			'scope-payment-details/actions/defaultDelete',
		] ),
	},
};
</script>

<style>

</style>