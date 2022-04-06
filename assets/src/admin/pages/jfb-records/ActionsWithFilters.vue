<template>
	<div :class="wrapperClass" v-if="items.length">
		<div class="jfb-row-wrapper-item">
			<ChooseAction/>
		</div>
		<div class="jfb-row-wrapper-item">
			<ListComponents
				v-if="hasFilters"
				:components="filtersComponents"
			>
				<ClearFiltersButton
					:label="__( 'Clear Filters', 'jet-form-builder' )"
				/>
			</ListComponents>
		</div>
	</div>
</template>

<script>
import FormFilter from './filters/FormFilter';

const {
		  ChooseAction,
		  ListComponents,
		  ClearFiltersButton,
	  } = JetFBComponents;

const {
	GetIncoming,
	i18n,
	ScopeStoreMixin,
} = JetFBMixins;

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
	name: 'ActionsWithFilters',
	components: {
		ChooseAction,
		ListComponents,
		ClearFiltersButton,
	},
	mixins: [ GetIncoming, i18n, ScopeStoreMixin ],
	data() {
		return {
			filtersComponents,
		};
	},
	computed: {
		...mapGetters( [
			'isDoing',
		] ),
		hasFilters() {
			jfbEventBus.reactiveCounter;

			return this.getter( 'hasFilters' );
		},
		items() {
			return this.getter( 'list' );
		},
		wrapperClass() {
			return {
				'jfb-row-wrapper': true,
				'jfb-row-wrapper--loading': this.isDoing,
			};
		},
	},
	created() {
		if ( ! this.items.length ) {
			return;
		}
		const { filters_endpoint } = this.getIncoming();

		this.dispatch( 'maybeFetchFilters', filters_endpoint );
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
		width: 100%;
		padding: 6px 21px 6px 12px;
	}
	.jfb-list-components {
		display: flex;
		gap: 2em;
		align-items: end;
		padding: 0 1em;
		&-item {
			flex: 0 0 30%;
			.cx-vui-component__control {
				flex: 1;
			}
		}
	}
}

</style>