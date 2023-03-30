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

</style>