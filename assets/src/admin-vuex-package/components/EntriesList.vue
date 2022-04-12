<template>
	<table class="jfb-list-table">
		<tr
			v-for="({ label }, column) in columns"
			:key="column"
			:class="[
				'jfb-list-table-row',
				'row--' + column
			]"
		>
			<th class="jfb-list-table-row--inner jfb-list-table-row--heading">{{ label }}</th>
			<td class="jfb-list-table-row--inner jfb-list-table-row--item">
				<EntryColumnList
					:scope="scope"
					:list="list"
					:column="column"
				/>
			</td>
		</tr>
	</table>
</template>

<script>
import ScopeStoreMixin from '../mixins/ScopeStoreMixin';
import EntryColumnList from './EntryColumnList';

export default {
	name: 'EntriesList',
	mixins: [ ScopeStoreMixin ],
	components: { EntryColumnList },
	computed: {
		columns() {
			return this.getter( 'columns' );
		},
		list() {
			return this.getter( 'list' );
		},
	},
	methods: {

	},
};
</script>

<style lang="scss">

#normal-sortables {
	.jfb-list-table {
		th {
			width: 30%;
		}
	}
}

.jfb-list-table {
	border-collapse: collapse;
	width: 100%;

	&-row {
		border-bottom: 1px solid #ececec;

		&--inner {
			padding: 0.8em;
		}

		&--heading {
			text-align: left;
		}

		&:last-child {
			border-bottom: unset;
		}
	}

	/*&-actions {
		padding: 10px;
		clear: both;
		border-top: 1px solid #dcdcde;
		background: #f6f7f7;
	}*/
}

</style>