<template>
	<div :class="wrapperClass" v-if="items.length">
		<ChooseAction/>
		<template v-if="hasFilters">
			<PortalTarget :name="scopedName( 'filters' )" class="filters"/>
			<div class="wrapper-buttons">
				<PortalTarget :name="scopedName( 'buttons' )"/>
			</div>
		</template>
	</div>
</template>

<script>
import { PortalTarget } from 'portal-vue';
import ChooseAction from './ChooseAction';
import ScopeStoreMixin from '../mixins/ScopeStoreMixin';

const {
	      GetIncoming,
	      i18n,
      } = JetFBMixins;

const {
	      mapMutations,
	      mapActions,
	      mapState,
	      mapGetters,
      } = Vuex;

export default {
	name: 'ActionsWithFilters',
	components: {
		ChooseAction,
		PortalTarget,
	},
	mixins: [ GetIncoming, i18n, ScopeStoreMixin ],
	data() {
		return {};
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
				'cx-vui-panel': true,
				'jfb-row-wrapper': true,
				'jfb-row-wrapper--loading': this.isDoing,
			};
		},
	},
	created() {
		if ( !this.items.length ) {
			return;
		}
		const { filters_endpoint } = this.getIncoming();

		this.dispatch( 'maybeFetchFilters', filters_endpoint );
	},
};
</script>

<style scoped lang="scss">

.jfb-row-wrapper {
	display: flex;
	gap: 2em;
	align-items: end;
	padding: 1em;
	margin-top: 2em;

	&--loading {
		opacity: 0.5;
	}
}

.filters {
	display: flex;
	gap: 1em;
	align-items: flex-end;
}

.wrapper-buttons {
	flex: 1;
	text-align: end;
}

</style>