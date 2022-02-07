<template>
	<div>
		<h3>{{ messages.filter_form_title }}</h3>
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
