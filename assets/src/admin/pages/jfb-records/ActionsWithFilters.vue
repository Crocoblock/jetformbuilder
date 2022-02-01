<template>
	<div :class="wrapperClass">
		<div class="cx-vui-panel">
			<ChooseAction/>
		</div>
		<div class="cx-vui-panel">
			<ListComponents
				:components="filtersComponents"
			/>
		</div>
	</div>
</template>

<script>
import FormFilter from './filters/FormFilter';
import UserFilter from './filters/UserFilter';

const {
		  ChooseAction,
		  ListComponents,
	  } = JetFBComponents;

const { GetIncoming } = JetFBMixins;

const {
		  mapMutations,
		  mapActions,
		  mapState,
	  } = Vuex;

const { applyFilters } = wp.hooks;

const filtersComponents = applyFilters( 'jet.fb.records.page.filters', [
	FormFilter,
	UserFilter
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
			'doingAction'
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

<style lang="scss" scoped>

.jfb-row-wrapper {
	display: flex;
	gap: 2em;
	align-items: end;
	.cx-vui-panel:nth-child(1) {
		flex: 1;
	}
	.cx-vui-panel:nth-child(2) {
		padding: 1em;
		flex: 3;
	}
	&--loading {
		opacity: 0.5;
	}
	.cx-vui-component {
		padding: unset;
	}

	.jfb-list-components {
		display: flex;
		gap: 2em;
		align-items: end;
	}
}

</style>