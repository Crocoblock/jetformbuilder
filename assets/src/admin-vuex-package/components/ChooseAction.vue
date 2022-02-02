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
			:loading="loading"
			:disabled="doingAction"
			button-style="accent"
			size="mini"
		>
			<template #label>{{ __( 'Apply', 'jet-form-builder' ) }}</template>
		</cx-vui-button>
	</div>
</template>

<script>
const { i18n } = JetFBMixins;
const { applyFilters } = wp.hooks;

window.jfbEventBus = window.jfbEventBus || new Vue();

const {
		  mapState,
		  mapGetters,
		  mapMutations,
		  mapActions,
	  } = Vuex;

export default {
	name: 'ChooseAction',
	props: {
		options: {
			type: Array,
			default: () => [],
		},
	},
	data() {
		return {
			loading: false,
		};
	},
	mixins: [ i18n ],
	created() {
		if ( this.isInitializedColumn( 'choose' ) ) {
			return;
		}

		this.actionsList.forEach( ( { value: action } ) => {
			this.addActionPromise( {
				action,
				promise( resolve ) {
					this.onFinish();
					resolve();
				},
			} );
		} );

		this.initializeColumn( 'choose' );
	},
	computed: {
		...mapState( [
			'doingAction',
			'currentAction',
			'actionsList',
			'actionsPromises',
			'actionsResponseCallbacks',
		] ),
		...mapGetters( [
			'isInitializedColumn',
		] ),
	},
	methods: {
		...mapMutations( [
			'toggleDoingAction',
			'setCurrentAction',
			'addActionPromise',
			'addActionResponseCallback',
			'initializeColumn',
		] ),
		...mapActions( [
			'runRowAction',
		] ),
		onFinish() {
			this.loading = ! this.loading;
			this.toggleDoingAction();
		},
		applyAction() {
			this.runRowAction( this.currentAction ).then( () => {
				this.onFinish();
			} ).catch( () => {
				this.onFinish();
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