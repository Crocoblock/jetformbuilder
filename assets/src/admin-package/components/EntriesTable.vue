<template>
	<div class="cx-vui-panel">
		<cx-vui-list-table>
			<template #heading>
				<cx-vui-list-table-heading
					:slots="filteredColumns"
				>
					<span
						:key="column"
						:slot="column"
						v-for="column in filteredColumns"
					>
						<template v-if="getHeadingComponent( column )">
							<keep-alive>
								<component
									v-bind:is="getHeadingComponent( column )"
									:value="columns[ column ]"
								/>
							</keep-alive>
						</template>
						<template v-else>
							{{ columns[ column ] ? columns[ column ].label : '' }}
						</template>
						<svg v-if="columns[ column ].sortable" width="10"
							 height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg"><path
							d="M0.833374 0.333328L5.00004 4.5L9.16671 0.333328H0.833374Z" fill="#7B7E81"/></svg>
            		</span>
				</cx-vui-list-table-heading>
			</template>
			<template #items>
				<div
					:key="entryID"
					v-for="( entry, entryID ) in currentList"
					:class="classEntry( entryID )"
					@dblclick="$emit( 'dblclick-row', entryID )"
				>
					<div
						v-for="column in filteredColumns"
						:key="'entry_' + column"
						:class="[ 'list-table-item__cell', 'cell--' + column ]"
					>
						<template v-if="getItemComponent( column )">
							<keep-alive>
								<component
									v-bind:is="getItemComponent( column )"
									:value="entry[column] ? entry[column].value : false"
									:full-entry="entry"
									:entry-id="entryID"
								/>
							</keep-alive>
						</template>
						<template v-else>{{ entry[ column ] ? entry[ column ].value : '' }}</template>
					</div>
				</div>
			</template>
		</cx-vui-list-table>
	</div>
</template>

<script>
import * as ChooseColumn from '../entries-table-columns/choose';
import GetColumnComponent from '../mixins/GetColumnComponent';

const defaultColumns = {
	choose: ChooseColumn,
};

const {
		  mapState,
		  mapGetters,
	  } = Vuex;

export default {
	name: 'entries-table',
	props: {
		columns: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			columnsIDs: [],
		};
	},
	mixins: [ GetColumnComponent ],
	created() {
		this.columnsIDs = Object.keys( this.columns );

		for ( const columnName in defaultColumns ) {
			if ( ! this.columnsIDs.includes( columnName ) ) {
				continue;
			}
			this.componentsCols.push( defaultColumns[ columnName ] );
		}
	},
	computed: {
		filteredColumns() {
			return this.columnsIDs.filter( this.isShown ).sort( ( prev, next ) => {
				return ( ( this.columns[ prev ].table_order ?? 999 ) - ( this.columns[ next ].table_order ?? 999 ) );
			} );
		},
		...mapGetters( [
			'currentList',
		] ),
	},
	methods: {
		isShown( column ) {
			return this.columns[ column ].show_in_table ?? true;
		},
		classEntry( entryID ) {
			return {
				'list-table-item': true,
				[ 'list-table-item--' + entryID ]: true,
			};
		},
		getHeadingComponent( column ) {
			return this.getColumnComponentByPrefix( column, 'head' );
		},
		getItemComponent( column ) {
			return this.getColumnComponentByPrefix( column, 'item' );
		},
	},
};
</script>

<style lang="scss">

.cx-vue-list-table {
	.list-table-heading {
		justify-content: space-between;

		&__cell > span {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
		}
	}
	.list-table-item {
		justify-content: space-between;

		&__cell {
			white-space: nowrap;
			overflow: hidden;
			text-align: center;
		}
	}
}


</style>