<template>
	<cx-vui-button
		v-bind="buttonProps"
		@click="runAction"
		:loading="loading"
		:disabled="isDisabled"
	>
		<template #label>{{ label }}</template>
	</cx-vui-button>
</template>

<script>
const { GetIncoming, i18n } = window.JetFBMixins;

const { CxVuiCollapseMini } = window.JetFBComponents;

const { apiFetch } = wp;

const {
		  mapState,
		  mapGetters,
	  } = Vuex;

export default {
	name: 'SubscriptionActionPanel',
	components: {},
	props: {
		label: String,
		reason: Object,
		type: String,
		must_have_statuses: Array,
		forceCurrent: Object,
		buttonProps: {
			type: Object,
			default() {
				return {
					size: 'link',
					buttonStyle: 'accent',
				}
			},
		},
	},
	mixins: [ i18n ],
	created() {
		this.reasonString = this.reason.default;
	},
	data() {
		return {
			reasonString: '',
			loading: false,
		};
	},
	computed: {
		current() {
			if ( this.forceCurrent ) {
				return this.forceCurrent;
			}
			return this.$store.state.currentPopupData;
		},
		getCurrentStatus() {
			return this.current?.status?.value?.status;
		},
		isDisabled() {
			return ( ! this.must_have_statuses.includes( this.getCurrentStatus ) || this.doingAction );
		},
		...mapState( [
			'doingAction'
		] )
	},
	methods: {
		runAction() {
			const reason = prompt( this.reason.warn, this.reasonString );

			if ( ! reason ) {
				return;
			}

			this.loading = true;

			this.$store.dispatch( 'processAction', {
				reason,
				type: this.type,
			} ).then( () => {
				this.loading = false;
			} )
		},
	},
};
</script>

<style lang="scss">
.cx-vui-button--size-link {
	padding: 0.5em;
}
</style>
