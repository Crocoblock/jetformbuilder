<template>
	<div
		id="misc-publishing-actions"
	>
		<div
			class="misc-pub-section"
			v-for="({ label }, column) in columns"
			:key="column"
		>
			<div class="misc-pub-section--label">{{ label }}</div>
			<div class="misc-pub-section--value">
				<template v-if="getItemComponent( column )">
					<keep-alive>
						<component
							v-bind:is="getItemComponent( column )"
							:value="getColumnValue( column )"
							:full-entry="list"
							:scope="scope"
						/>
					</keep-alive>
				</template>
				<template v-else-if="getItemComponent( getColumnType( column ) )">
					<keep-alive>
						<component
							v-bind:is="getItemComponent( getColumnType( column ) )"
							:value="getColumnValue( column )"
							:full-entry="list"
							:scope="scope"
						/>
					</keep-alive>
				</template>
				<template v-else>
					{{ list[ column ] ? list[ column ].value : column }}
				</template>
			</div>
		</div>
	</div>
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

.misc-pub-section {
	display: flex;
	justify-content: space-between;
	padding: 1em 0.5em;

	&--label {
		&::after {
			content: ':';
		}
	}
}

</style>