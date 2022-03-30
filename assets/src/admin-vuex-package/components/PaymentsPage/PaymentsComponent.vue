<template>
	<FormBuilderPage
		:title="__( 'JetFormBuilder Payments', 'jet-form-builder' )"
	>
		<TablePagination/>
		<EntriesTable/>
		<template v-if="$slots.default">
			<slot name="default"></slot>
		</template>
		<TablePagination/>
	</FormBuilderPage>
</template>

<script>
import TablePagination from '../TablePagination';
import EntriesTable from '../EntriesTable';

Vue.config.devtools = true;

const { GetIncoming, i18n } = JetFBMixins;
const { apiFetch } = wp;
const { mapState, mapGetters } = Vuex;
const { FormBuilderPage } = JetFBComponents;

export default {
	name: 'payments-table-core',
	components: {
		FormBuilderPage,
		EntriesTable,
		TablePagination,
	},
	mixins: [ GetIncoming, i18n ],
};

</script>

<style lang="scss">

.cx-vui-panel-table-wrapper {
	margin-bottom: unset;
}

.cx-vue-list-table {
	.cell--id.cell--id {
		flex: 0.3;
	}

	.list-table-item {
		background-color: #ffffff;

		&:not(:last-child) {
			border-bottom: 1px solid #ececec;
		}

		&:hover {
			background-color: #e3f6fd;
		}
	}

}
</style>