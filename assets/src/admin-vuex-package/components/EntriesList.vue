<template>
	<div
		id="misc-publishing-actions"
	>
		<div
			class="misc-pub-section"
			v-for="({ label }, column) in storeGetters.columns"
			:key="column"
		>
			{{ label }}:
			<template v-if="getItemComponent( column )">
				<keep-alive>
					<component
						v-bind:is="getItemComponent( column )"
						:value="getColumnValue( column )"
						:full-entry="storeGetters.list"
					/>
				</keep-alive>
			</template>
			<template v-else-if="getItemComponent( getColumnType( column ) )">
				<keep-alive>
					<component
						v-bind:is="getItemComponent( getColumnType( column ) )"
						:value="getColumnValue( column )"
						:full-entry="storeGetters.list"
					/>
				</keep-alive>
			</template>
			<template v-else>
				{{ storeGetters.list[ column ] ? storeGetters.list[ column ].value : column }}
			</template>
		</div>
	</div>
</template>

<script>

const { GetColumnComponent } = JetFBMixins;

export default {
	name: 'EntriesList',
	props: {
		scope: {
			type: String,
			default: 'default',
		},
	},
	mixins: [ GetColumnComponent ],
	computed: {
		storeGetters() {
			return this.$store.getters[ 'scope-' + this.scope ] ?? this.$store.getters;
		},
	},
	methods: {
		getItemComponent( column ) {
			return this.getColumnComponentByPrefix( column, 'item' );
		},
		getColumnType( column ) {
			return this.storeGetters.list[ column ]?.type ?? false;
		},
		getColumnValue( column ) {
			return this.storeGetters.list[ column ]?.value ?? '';
		},
	},
};
</script>

<style>

</style>