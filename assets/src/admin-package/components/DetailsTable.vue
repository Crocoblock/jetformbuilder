<template>
	<section class="table-details">
		<DetailsTableRow
			v-for="( column, columnName ) in columns"
			:key="columnName"
			v-if="canShow( columnName )"
			:type="getType( columnName )"
		>
			<template #name>{{ column.label }}</template>
			<template #value>
				<template v-if="'object' === typeof getColumnValue( columnName, false )">
					<DetailsTableRowValue
						:value="getColumnValue( columnName, false )"
						:columns="(column.children || {})"
					/>
				</template>
				<template v-else>{{ getColumnValue( columnName, '' ) }}</template>
			</template>
		</DetailsTableRow>
	</section>
</template>

<script>
import DetailsTableRowValue from './DetailsTableRowValue';
import DetailsTableRow from './DetailsTableRow';

export default {
	name: 'DetailsTable',
	components: { DetailsTableRow, DetailsTableRowValue },
	props: {
		columns: {
			type: Object,
		},
		source: {
			type: Object,
		},
	},
	methods: {
		getColumnValue( column, ifEmpty = false ) {
			return this.source[ column ] ? this.source[ column ].value : ifEmpty;
		},
		hasValueOrAnotherType( column ) {
			return ( this.getColumnValue( column ) || 'rowValue' !== this.getType( column ) );
		},
		getType( column ) {
			return this.columns[ column ].type ?? 'rowValue';
		},
		canShow( columnName ) {
			const type = this.getType( columnName );
			const inDetails = false !== this.columns[ columnName ].show_in_details;
			const value = this.getColumnValue( columnName );

			return inDetails && ( 'rowValue' !== type || value );
		},
	},
};
</script>

<style lang="scss">
.table-details {
	display: flex;
	flex-direction: column;
}
</style>