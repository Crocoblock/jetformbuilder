<template>
	<div :class="{
		'wrap': true,
		'jet-form-builder-page': true,
		'jet-form-builder-page--records': true,
	}">
		<h1 class="cs-vui-title">{{ __( 'JetFormBuilder Form Records', 'jet-form-builder' ) }}</h1>
		<TablePagination/>
		<cx-vui-select
			:wrapper-css="[ 'equalwidth' ]"
			:size="'fullwidth'"
			:options-list="[ { value: '', label: 'Select action...' } ]"
			size="fullwidth"
		></cx-vui-select>
		<EntriesStoreTable/>
		<cx-vui-select
			:wrapper-css="[ 'equalwidth' ]"
			:size="'fullwidth'"
			:options-list="[ { value: '', label: 'Select action...' } ]"
			size="fullwidth"
		></cx-vui-select>
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
	name: 'jfb-records',
	components: {
		TablePagination,
		EntriesStoreTable,
	},
	mixins: [ GetIncoming, i18n ],
	created() {
		const {
			list = [],
			columns = {},
			total,
		} = this.getIncoming();

		this.$store.commit( 'setColumns', JSON.parse( JSON.stringify( columns ) ) );
		this.$store.commit( 'setList', JSON.parse( JSON.stringify( list ) ) );

		this.$store.commit( 'setQueryState', {
			total: + total,
			limit: this.$store.state.currentList.length,
		} );

		this.$store.dispatch( 'setQueriedPage', 1 );
	},
};
</script>

<style lang="scss">

.jet-form-builder-page--records {
	.cx-vue-list-table {

		.cell--id {
			width: 120px;
		}

		.cell--status {
			width: 120px;
		}

		.cell--form {
			width: 180px;
		}

		.cell--referrer {
			width: 180px;
		}

		.cell--user {
			width: 180px;
		}
	}
}

</style>