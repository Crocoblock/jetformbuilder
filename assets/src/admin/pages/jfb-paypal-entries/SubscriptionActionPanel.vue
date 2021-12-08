<template>
	<cx-vui-button
		v-bind="buttonProps"
		@click="runAction"
		:loading="loading"
		:disabled="compareStatus"
	>
		<template #label>{{ label }}</template>
	</cx-vui-button>
</template>

<script>
const { GetIncoming, i18n } = window.JetFBMixins;

const { CxVuiCollapseMini } = window.JetFBComponents;

const { apiFetch } = wp;

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
			return this.$store.getters.getCurrent;
		},
		getCurrentStatus() {
			return this.current?.status?.value?.status;
		},
		compareStatus() {
			return ( ! this.must_have_statuses.includes( this.getCurrentStatus ) || this.loading );
		},
	},
	methods: {
		runAction() {
			const reason = prompt( this.reason.warn, this.reasonString );

			if ( ! reason ) {
				return;
			}

			const options = {
				...this.current.links.value[ this.type ],
				data: {
					form_id: this.current._FORM_ID.value,
					reason: reason,
				},
			};

			this.loading = true;

			apiFetch( options ).then( res => {
				this.$CXNotice.add( {
					message: res.message,
					type: 'success',
					duration: 4000,
				} );

				this.loading = false;
			} ).catch( error => {
				this.$CXNotice.add( {
					message: error.message,
					type: 'error',
					duration: 4000,
				} );

				this.loading = false;
			} );
		},
	},
};
</script>

<style lang="scss">
.cx-vui-button--size-link {
	padding: 0.5em;
}
</style>
