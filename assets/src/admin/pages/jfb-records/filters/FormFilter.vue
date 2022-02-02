<template>
	<div>
		<h4>Filter by Form</h4>
		<cx-vui-select
			:options-list="filter.options || []"
			:wrapper-css="[ 'equalwidth' ]"
			:value="filter.selected"
			:placeholder="messages.filter_form"
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
		  GetIncomingMessages,
		  FilterMixin,
	  } = JetFBMixins;

export default {
	name: "FormFilter",
	data() {
		return {
			filter_id: "form",
		};
	},
	mixins: [ GetIncomingMessages, FilterMixin ],
}
</script>

<style scoped lang="scss">
.cx-vui-component {
	padding: unset;
}
</style>

<style>
.cx-vui-f-select__results {
	max-height: 35vh;
	overflow: auto;
}
</style>