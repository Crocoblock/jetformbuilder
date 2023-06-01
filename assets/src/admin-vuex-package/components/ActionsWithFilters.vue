<template>
	<div :class="wrapperClass" v-if="show">
		<ChooseAction/>
		<div class="filters">
			<slot name="filters"></slot>
		</div>
		<div class="wrapper-buttons">
			<slot name="buttons"></slot>
		</div>
	</div>
</template>

<script>
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
		show() {
			return this.items.length || this.hasFilters;
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