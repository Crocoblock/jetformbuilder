<template>
	<div :class="{
		'wrap': true,
		'jet-form-builder-page': true,
		'jet-form-builder-page--payments': true,
	}">
		<h1 class="cs-vui-title">{{ __( 'JetFormBuilder Form Records', 'jet-form-builder' ) }}</h1>
		<TablePagination/>
		<EntriesStoreTable/>
		<TablePagination/>
	</div>
</template>

<script>
const {
		  TablePagination,
		  EntriesStoreTable,
	  } = JetFBComponents;
const {
		  GetIncoming,
		  i18n,
	  } = JetFBMixins;

export default {
	name: "jfb-records",
	components: {
		TablePagination,
		EntriesStoreTable,
	},
	mixins: [ GetIncoming, i18n ],
	created() {
		const {
				  list    = [],
				  columns = {},
				  total,
			  } = this.getIncoming();

		this.$store.commit( 'setColumns', JSON.parse( JSON.stringify( columns ) ) );
		this.$store.commit( 'setList', JSON.parse( JSON.stringify( list ) ) );

		this.$store.commit( 'setQueryState', {
			total: +total,
			limit: this.$store.state.currentList.length,
		} );

		this.$store.dispatch( 'setQueriedPage', 1 );
	},
}
</script>

<style>

</style>