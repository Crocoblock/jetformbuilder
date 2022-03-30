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
				<template v-if="getItemComponent( column )">
					<component
						v-bind:is="getItemComponent( column )"
						:value="getColumnValue( column )"
						:full-entry="list"
						:scope="scope"
					/>
				</template>
				<template v-else-if="getItemComponent( getColumnType( column ) )">
					<component
						v-bind:is="getItemComponent( getColumnType( column ) )"
						:value="getColumnValue( column )"
						:full-entry="list"
						:scope="scope"
					/>
				</template>
				<template v-else>
					{{ list[ column ] ? list[ column ].value : column }}
				</template>
			</td>
		</tr>
	</table>
</template>

<script>
import GetColumnComponent from '../mixins/GetColumnComponent';
import ScopeStoreMixin from '../mixins/ScopeStoreMixin';

export default {
	name: 'EntriesList',
	mixins: [ GetColumnComponent, ScopeStoreMixin ],
	computed: {
		columns() {
			return this.getter( 'columns' );
		},
		list() {
			return this.getter( 'list' );
		},
	},
	methods: {
		getItemComponent( column ) {
			return this.getColumnComponentByPrefix( column, 'item' );
		},
		getColumnType( column ) {
			return this.list[ column ]?.type ?? false;
		},
		getColumnValue( column ) {
			return this.list[ column ]?.value ?? '';
		},
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