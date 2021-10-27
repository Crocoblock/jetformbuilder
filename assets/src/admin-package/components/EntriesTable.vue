<template>
	<div class="cx-vui-panel">
		<cx-vui-list-table>
			<template #heading>
				<cx-vui-list-table-heading
					:slots="columnsIDs"
				>
					<span
						:key="column"
						:slot="column"
						v-for="column in columnsIDs"
					>
						<template v-if="getHeadingComponent( column )">
							<keep-alive>
								<component
									v-bind:is="getHeadingComponent( column )"
									:value="columns[ column ]"
								/>
							</keep-alive>
						</template>
						<template v-else>{{ columns[ column ] ? columns[ column ].label : '' }}</template>
            		</span>
				</cx-vui-list-table-heading>
			</template>
			<template #items>
				<div
					:key="entryID"
					v-for="( entry, entryID ) in entries"
					:class="classEntry( entryID )"
				>
					<div
						v-for="column in columnsIDs"
						:class="[ 'list-table-item__cell', 'cell--' + column ]"
					>
						<template v-if="getItemComponent( column )">
							<keep-alive>
								<component
									v-bind:is="getItemComponent( column )"
									:value="entry[column] ? entry[column].value : false"
									:full-entry="entry"
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

const defaultColumns = {
	choose: ChooseColumn,
};

export default {
	name: 'entries-table',
	props: {
		entriesList: {
			type: Object,
			required: true,
		},
		columns: {
			type: Object,
			required: true,
		},
		columnsComponents: {
			type: Array,
			required: false,
			default() {
				return [];
			},
		},
	},
	data() {
		return {
			columnsIDs: [],
			entries: {},
			componentsCols: [],
		};
	},
	created() {
		this.columnsIDs = Object.keys( this.columns );
		this.entries = JSON.parse( JSON.stringify( this.entriesList ) );

		this.componentsCols = [ ...this.columnsComponents ];

		for ( const columnName in defaultColumns ) {
			if ( ! this.columnsIDs.includes( columnName ) ) {
				continue;
			}
			this.componentsCols.push( defaultColumns[ columnName ] );
		}
	},
	methods: {
		classEntry( entryID ) {
			return {
				'list-table-item': true,
				[ 'list-table-item--' + entryID ]: true,
			};
		},
		getHeadingComponent( column ) {
			const index = this.componentsCols.findIndex( comp => comp?.head?.name === (
				column + '--head'
			) );

			return (
				- 1 === index
			) ? false : this.componentsCols[ index ].head;

		},
		getItemComponent( column ) {
			const index = this.componentsCols.findIndex( comp => comp?.item?.name === (
				column + '--item'
			) );

			return (
				- 1 === index
			) ? false : this.componentsCols[ index ].item;
		},
	},
};
</script>

<style scoped>

</style>