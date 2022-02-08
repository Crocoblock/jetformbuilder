<template>
	<div class="jet-fb-choose-action-wrapper">
		<cx-vui-select
			:placeholder="__( 'Select action...', 'jet-form-builder' )"
			size="fullwidth"
			:value="currentAction"
			@input="setCurrentAction"
			:options-list="actionsList"
		></cx-vui-select>
		<cx-vui-button
			@click="applyAction"
			:loading="isLoading( 'applyButton' )"
			:disabled="doingAction"
			button-style="accent-border"
			size="mini"
		>
			<template #label>{{ __( 'Apply', 'jet-form-builder' ) }}</template>
		</cx-vui-button>
	</div>
</template>

<script>
import Constants from '../constants';

const { i18n } = JetFBMixins;
const { applyFilters } = wp.hooks;

const {
		  CHOOSE_ACTION,
		  CLICK_ACTION,
	  } = Constants;

window.jfbEventBus = window.jfbEventBus || new Vue( {} );

const {
		  mapState,
		  mapGetters,
		  mapMutations,
		  mapActions,
	  } = Vuex;

export default {
	name: 'ChooseAction',
	mixins: [ i18n ],
	computed: {
		...mapState( [
			'doingAction',
			'currentAction',
			'actionsList',
		] ),
		...mapGetters( [
			'isLoading'
		] ),
	},
	methods: {
		...mapMutations( [
			'toggleDoingAction',
			'setCurrentAction',
			'toggleLoading',
			'removeAll',
			'unChooseHead'
		] ),
		...mapActions( [
			'runRowAction',
		] ),
		onFinish() {
			this.toggleLoading( 'applyButton' );
			this.toggleDoingAction();
		},
		applyAction() {
			this.onFinish();

			this.runRowAction( {
				action: this.currentAction,
				context: CHOOSE_ACTION
			} ).then( () => {
				this.onFinish();
			} ).catch( () => {
				this.onFinish();
			} ).finally( () => {
				this.removeAll();
				this.unChooseHead();
			} );
		},
	},
};
</script>

<style lang="scss">
.jet-fb-choose-action-wrapper {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 0.7em;
	padding: 1em;
	.cx-vui-component {
		flex: 1;
		padding: unset;
		&__control {
			flex: 1;
		}
	}
}
</style>