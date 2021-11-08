<template>
	<CxVuiCollapseMini
		with-panel
		:label="label"
		:disabled="compareStatus"
	>
		<template #description>
			<cx-vui-button
				button-style="accent"
				size="mini"
				@click="runAction"
				:loading="loading"
				:disabled="compareStatus"
			>
				<template #label>{{ __( 'Run', 'jet-form-builder' ) }}</template>
			</cx-vui-button>
		</template>
		<template #custom="{ state }">
			<transition name="fade">
				<div
					v-show="state.isActive"
					class="cx-vui-collapse-mini__content"
				>
					<cx-vui-input
						:label="reason.label"
						:description="reason.desc"
						:wrapper-css="[ 'equalwidth' ]"
						size="fullwidth"
						v-model="reasonString"
					/>
				</div>
			</transition>
		</template>
	</CxVuiCollapseMini>
</template>

<script>
const { GetIncoming, i18n } = window.JetFBMixins;

const { CxVuiCollapseMini } = window.JetFBComponents;

const { apiFetch } = wp;

export default {
	name: 'SubscriptionActionPanel',
	components: { CxVuiCollapseMini },
	props: {
		label: String,
		reason: Object,
		type: String,
		must_have_statuses: Array,
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
			return this.$store.getters.getCurrent;
		},
		getCurrentStatus() {
			return this.current?.status?.value?.status;
		},
		compareStatus() {
			return this.must_have_statuses.includes( this.getCurrentStatus );
		},
	},
	methods: {
		runAction() {
			const options = {
				...this.current.links.value[ this.type ],
				data: {
					form_id: this.current._FORM_ID.value,
					reason: this.reasonString,
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

<style>
.cx-vui-collapse-mini__header {
	justify-content: space-between;
}
</style>

<style scoped lang="scss">

.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
{
	opacity: 0;
}
</style>