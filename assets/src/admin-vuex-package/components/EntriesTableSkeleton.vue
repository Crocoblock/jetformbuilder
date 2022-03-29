<template>
	<div :class="rootClasses">
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
									:scope="scope"
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
			<template #footer>
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
									:scope="scope"
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
					v-for="( entry, entryID ) in list"
					:key="entryID"
					:class="classEntry( entryID, entry )"
				>
					<div class="list-table-item-columns">
						<EntryColumnsTable
							v-for="column in filteredColumns"
							:key="'entry_' + column"
							:column="column"
							:entry="entry"
							:entry-id="entryID"
							:scope="scope"
							:columns-components="columnsComponents"
						/>
					</div>
					<div class="list-table-item-actions" v-if="entry.actions">
						<span
							v-for="action in entry.actions.value"
							:key="action.value"
						>
							<a
								:href="getActionHref( action )"
								:class="getActionClass( action )"
								@click="onClickAction( action, entry )"
							>
								{{ action.label }}
							</a>
						</span>
					</div>
				</div>
			</template>
		</cx-vui-list-table>
	</div>
</template>

<script>
import Constants from '../constants';
import ScopePropMixin from '../mixins/ScopeStoreMixin';
import GetColumnComponent from '../mixins/GetColumnComponent';
import EntryColumnsTable from './EntryColumnsTable';
import { getPrimaryId } from '../functions';

const {
	CHOOSE_ACTION,
	CLICK_ACTION,
} = Constants;

const {
	mapState,
	mapGetters,
	mapActions,
	mapMutations,
} = window.Vuex;

export default {
	name: 'EntriesTableSkeleton',
	components: { EntryColumnsTable },
	props: {
		list: {
			type: Array,
		},
		columns: {
			type: Object,
		},
		loading: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			columnsIDs: [],
		};
	},
	mixins: [ GetColumnComponent, ScopePropMixin ],
	created() {
		this.columnsIDs = Object.keys( this.columns );
	},
	computed: {
		rootClasses() {
			return {
				'cx-vui-panel': true,
				'cx-vui-panel--loading': this.loading,
				'cx-vui-panel-table-wrapper': true,
			};
		},
		filteredColumns() {
			return this.columnsIDs.filter( this.isShown ).sort( ( prev, next ) => {
				return (
					(
						this.columns[ prev ].table_order ?? 999
					) - (
						this.columns[ next ].table_order ?? 999
					)
				);
			} );
		},

		...mapGetters( [
			'isDoing',
		] ),
	},
	methods: {
		...mapMutations( [
			'toggleDoingAction',
		] ),
		getHeadingComponent( column ) {
			return this.getColumnComponentByPrefix( column, 'head' );
		},
		getActionHref( action ) {
			return action?.href || 'javascript:void(0)';
		},
		getActionClass( action ) {
			const { type = 'default', class_name = '' } = action;

			return {
				'list-table-item-actions-single': true,
				[ class_name ]: true,
				[ 'list-table-item-actions-single--type-' + type ]: true,
				'disabled': this.isDoing,
			};
		},
		isShown( column ) {
			return this.columns[ column ].show_in_table ?? true;
		},
		classEntry( entryID, entry ) {
			return {
				'list-table-item': true,
				'list-table-item--has-choose': entry?.choose?.value,
				'list-table-item--has-actions': entry?.actions?.value?.length,
				...(
					entry?.classes?.value ?? {}
				),
			};
		},
		columnType( entry, column ) {
			return entry[ column ]?.type ?? 'string';
		},
		onClickAction( action, record ) {
			if ( action?.href ) {
				return;
			}
			try {
				this.beforeRowAction( action, record );
			} catch ( error ) {
				return;
			}

			this.runRowAction( action, record );
		},
		getClickPayload( action, record ) {
			return {
				action: action.value,
				context: CLICK_ACTION,
				payload: [ getPrimaryId( record ) ],
			};
		},
		beforeRowAction( action, record ) {
			this.dispatch(
				'beforeRowAction',
				this.getClickPayload( action, record ),
			);
		},
		runRowAction( action, record ) {
			this.toggleDoingAction();

			this.dispatch(
				'runRowAction',
				this.getClickPayload( action, record ),
			).then( () => {
				this.toggleDoingAction();
			} ).catch( () => {
				this.toggleDoingAction();
			} );
		},
	}
};
</script>

<style lang="scss">

.cx-vui-panel--loading {
	opacity: 0.5;
}

.cx-vue-list-table {
	.list-table-heading, .list-table-item-columns {
		justify-content: space-between;
	}
	.list-table-item {
		flex-direction: column;
		position: relative;
		&:hover .list-table-item-actions {
			visibility: visible;
		}
		&--has-choose {
			.list-table-item-actions {
				left: 5.2em;
			}
		}
		&--has-actions {
			.list-table-item__cell.cell--choose {
				/*transform: translateY(25%);*/
			}
			.list-table-item-columns {
				margin-bottom: 1.5em;
			}
		}
		&-actions {
			display: flex;
			width: 85%;
			column-gap: 0.5em;
			visibility: hidden;
			position: absolute;
			bottom: 0.5em;
			left: 1.5em;
			& > *:not(:last-child)::after {
				content: '|';
			}
			&-single {
				text-decoration: unset;
				&--type {
					&-danger {
						color: firebrick;
					}
				}
				&.disabled {
					pointer-events: none;
					cursor: default;
				}
			}
		}
		&-columns {
			display: flex;
			justify-content: space-between;
			width: 100%;
		}
		&__cell {
			white-space: nowrap;
			overflow: hidden;
			text-align: left;
			position: relative;
			margin: auto 0;
			padding: 8px 20px 6px;

			&:not(.cell--choose) {
				flex: 1;
			}

			& > span {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				flex-wrap: wrap;
			}
		}
	}
	.list-table-heading__cell:not(.cell--choose) {
		flex: 1
	}
}


</style>