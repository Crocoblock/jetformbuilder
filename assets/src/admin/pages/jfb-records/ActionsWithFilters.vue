<template>
	<div :class="wrapperClass">
		<div class="jfb-row-wrapper-item">
			<ChooseAction/>
		</div>
		<div class="jfb-row-wrapper-item">
			<ListComponents
				v-if="hasFilters"
				:components="filtersComponents"
			/>
		</div>
	</div>
</template>

<script>
import FormFilter from './filters/FormFilter';

const {
		  ChooseAction,
		  ListComponents,
	  } = JetFBComponents;

const { GetIncoming } = JetFBMixins;

const {
		  mapMutations,
		  mapActions,
		  mapState,
		  mapGetters,
	  } = Vuex;

const { applyFilters } = wp.hooks;

const filtersComponents = applyFilters( 'jet.fb.records.page.filters', [
	FormFilter,
] );

export default {
	name: "ActionsWithFilters",
	components: {
		ChooseAction,
		ListComponents,
	},
	mixins: [ GetIncoming ],
	data() {
		return {
			filtersComponents,
		};
	},
	computed: {
		...mapState( [
			'doingAction',
		] ),
		...mapGetters( [
			'hasFilters'
		] ),
		wrapperClass() {
			return {
				'jfb-row-wrapper': true,
				'jfb-row-wrapper--loading': this.doingAction,
			};
		},
	},
	created() {
		const { filters_endpoint } = this.getIncoming();

		this.maybeFetchFilters( filters_endpoint );
	},
	methods: {
		...mapActions( [
			'maybeFetchFilters',
		] ),
	},
}
</script>

<style lang="scss">

.jfb-row-wrapper {
	display: flex;
	gap: 2em;
	align-items: end;
	&-item:nth-child(1) {
		flex: 1;
	}
	&-item:nth-child(2) {
		flex: 3;
	}
	&--loading {
		opacity: 0.5;
	}
	.cx-vui-component {
		padding: unset;
	}
	.cx-vui-select {
		background-color: white;
	}
	.jfb-list-components {
		display: flex;
		gap: 2em;
		align-items: end;
		padding: 1em;
		&-item {
			flex: 0 0 30%;
			.cx-vui-component__control {
				flex: 1;
				select {
					width: 100%;
				}
			}
		}
	}
}

</style>