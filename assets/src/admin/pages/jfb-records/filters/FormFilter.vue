<template>
	<div>
		<h3>{{ label( 'filter_form_title' ) }}</h3>
		<cx-vui-select
			:options-list="filter.options || []"
			:wrapper-css="[ 'equalwidth' ]"
			:value="filter.selected"
			:placeholder="label( 'filter_form' )"
			@input="onChangeFilter"
		></cx-vui-select>
	</div>
</template>

<script>
const {
		  mapState,
		  mapGetters,
		  mapMutations,
		  mapActions,
	  } = Vuex;

const {
		  FilterMixin,
	  } = JetFBMixins;

export default {
	name: "FormFilter",
	data() {
		return {
			filter_id: "form",
		};
	},
	mixins: [ FilterMixin ],
	computed: {
		...mapGetters( 'messages', [
			'label'
		] ),
	}
}
</script>

<style scoped lang="scss">
.cx-vui-component {
	padding: unset;
}
</style>
