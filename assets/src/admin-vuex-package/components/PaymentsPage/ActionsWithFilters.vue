<template>
	<div :class="wrapperClass" v-if="items.length">
		<div class="jfb-row-wrapper-item">
			<ChooseAction/>
		</div>
	</div>
</template>

<script>
import ChooseAction from '../ChooseAction';
import ScopeStoreMixin from '../../mixins/ScopeStoreMixin';

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

const { applyFilters } = wp.hooks;

export default {
	name: 'ActionsWithFilters',
	components: {
		ChooseAction
	},
	mixins: [ GetIncoming, i18n, ScopeStoreMixin ],
	computed: {
		...mapGetters( [
			'isDoing',
		] ),
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
};
</script>

<style lang="scss">

.jfb-row-wrapper {
	display: flex;
	gap: 2em;
	align-items: end;

	&-item:nth-child(1) {
		flex: 0.3;
	}

	&-item:nth-child(2) {
		flex: 1;
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