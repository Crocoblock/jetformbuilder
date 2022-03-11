<template>
	<table class="jfb-list-table">
		<tr
			v-for="({ label }, column) in columns"
			:key="column"
		>
			<th>{{ label }}</th>
			<td>
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

	th, td {
		padding: 0.8em;
	}
	th {
		//border-right: 1px solid #ccc;
		text-align: left;
	}
	tr {
		border-bottom: 1px solid #ececec;

		&:last-child {
			border-bottom: unset;
		}
	}
}

</style>