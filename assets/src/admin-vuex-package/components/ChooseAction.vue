<template>
	<div class="jet-fb-choose-action-wrapper">
		<cx-vui-select
			:placeholder="__( 'Bulk actions', 'jet-form-builder' )"
			size="fullwidth"
			:value="currentAction"
			@input="setCurrentAction"
			:options-list="actionsList"
		></cx-vui-select>
		<cx-vui-button
			@click="applyAction"
			:loading="isLoading"
			:disabled="isDoing"
			button-style="accent-border"
			size="mini"
		>
			<template #label>{{ __( 'Apply', 'jet-form-builder' ) }}</template>
		</cx-vui-button>
	</div>
</template>

<script>
import Constants from '../constants';
import ScopeStoreMixin from '../mixins/ScopeStoreMixin';

const { i18n }         = JetFBMixins;
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
	mixins: [ i18n, ScopeStoreMixin ],
	computed: {
		...mapGetters( [
			'isDoing',
		] ),
		currentAction() {
			return this.getter( 'currentAction' );
		},
		isLoading() {
			return this.getter( 'isLoading', 'applyButton' );
		},
		actionsList() {
			return this.getter( 'actionsList' );
		},
		getChecked() {
			return this.getter( 'getChecked' );
		},
		getActionPromise() {
			return this.getter( 'getActionPromise' );
		},
	},
	methods: {
		...mapMutations( [
			'toggleDoingAction',
		] ),

		setCurrentAction( value ) {
			this.commit( 'setCurrentAction', value );
		},
		onFinish() {
			this.commit( 'toggleLoading', 'applyButton' );
			this.toggleDoingAction();
		},

		applyAction() {
			this.onFinish();

			this.commit(
				'setProcess',
				{
					action: this.currentAction,
					context: CHOOSE_ACTION,
					payload: [ this.getChecked, CHOOSE_ACTION ],
				},
			);

			const finish = () => {
				this.onFinish();
				this.commit( 'clearProcess' );
				this.commit( 'setChecked', [] );
				this.commit( 'unChooseHead' );
			};

			try {
				this.getActionPromise().finally( finish );
			}
			catch ( error ) {
				this.onFinish();
			}

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
	max-width: 20vw;
	min-width: 250px;

	.cx-vui-component {
		flex: 1;
		padding: unset;

		&__control {
			flex: 1;
		}
	}
}
</style>