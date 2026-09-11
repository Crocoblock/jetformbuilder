<template>
	<div>
		<div v-if="migrationInProgress" class="jfb-ssr-migration-wait">
			<span class="jfb-ssr-migration-wait__spinner" aria-hidden="true"></span>
			<div>
				<strong>{{ __( 'Migration in progress…', 'jet-form-builder' ) }}</strong>
				<p>{{ help.migrationInProgress }}</p>
			</div>
		</div>
		<template v-else>
			<cx-vui-component-wrapper
				:label="loading.callbacks ? `${label.callbacks} (loading...)` : label.callbacks"
				:description="help.callbacks"
				:wrapper-css="[ 'equalwidth' ]"
			>
				<textarea
					class="jfb-ssr-callbacks-textarea"
					rows="10"
					:disabled="isLoading"
					:value="storage.callbacks"
					@input="onInput( $event.target.value )"
				></textarea>
				<cx-vui-button
					button-style="accent"
					:disabled="isLoading || !hasUnsavedCallbacksChange"
					@click="onSaveCallbacks"
				>
					<span slot="label">{{ __( 'Save', 'jet-form-builder' ) }}</span>
				</cx-vui-button>
			</cx-vui-component-wrapper>
			<p v-if="hasRejected" class="jfb-ssr-callbacks-rejected">
				<strong>{{ __( 'Not saved:', 'jet-form-builder' ) }}</strong>
				<span
					v-for="( reason, name ) in rejected"
					:key="name"
				>{{ name }} — {{ reason }}; </span>
			</p>
			<cx-vui-component-wrapper
				v-if="blocked.length"
				:label="`${label.blocked} (${blocked.length})`"
				:description="help.blocked"
				:wrapper-css="[ 'equalwidth' ]"
			>
				<ul class="jfb-ssr-blocked__list">
					<li v-for="( usage, index ) in blocked" :key="index">
						<span class="jfb-ssr-blocked__form">{{ usage.form_title || `#${usage.form_id}` }}</span>
						<span class="jfb-ssr-blocked__meta">
							({{ __( 'field', 'jet-form-builder' ) }} "{{ usage.field }}" → <code>{{ usage.name }}</code>)
						</span>
						<a :href="usage.edit_url" target="_blank" rel="noopener noreferrer">
							{{ __( 'Edit form →', 'jet-form-builder' ) }}
						</a>
					</li>
				</ul>
			</cx-vui-component-wrapper>
		</template>
	</div>
</template>

<script>

import {
	help,
	label,
} from './source';

const { SaveTabByAjax, i18n } = window.JetFBMixins;

const MIGRATION_POLL_INTERVAL_MS = 8000;

export default {
	name: 'ssr-callbacks-tab',
	props: {
		incoming: {
			type: Object,
			default: {},
		},
	},
	mixins: [ SaveTabByAjax, i18n ],
	data() {
		return {
			label, help,
			storage: JSON.parse( JSON.stringify( this.incoming ) ),
			// Tracks the last value confirmed by the server (initial load or a completed
			// save), independent of `storage.callbacks`, which changes on every keystroke.
			// Used only to gate the Save button — see `hasUnsavedCallbacksChange`.
			savedCallbacks: 'string' === typeof this.incoming.callbacks ? this.incoming.callbacks : '',
			blocked: Array.isArray( this.incoming.blocked ) ? [ ...this.incoming.blocked ] : [],
			// While the one-time legacy-migration scan is still restoring previously used
			// callback names (only possible on a large site, where it spans several
			// `admin_init` requests), this tab is read-only: `import_trusted_callbacks()`
			// only merges its results into the trusted list once the whole scan completes,
			// and it does an unlocked read-merge-write of the same option a manual save
			// here would race against (review finding, issues-tracker #20361 follow-up).
			// The server enforces this independently in `on_get_request()`; this flag only
			// drives the wait-state UI and is re-synced by `pollMigrationStatus()`.
			migrationInProgress: !! this.incoming.migrationInProgress,
			isLoading: false,
			loading: {},
			pendingSave: false,
			rejected: {},
			pollTimer: null,
		};
	},
	computed: {
		hasRejected() {
			return Object.keys( this.rejected ).length > 0;
		},
		// Gates the Save button: saving only happens on an explicit click now (no
		// blur-triggered autosave), specifically so an accidental select-all-and-delete in
		// the textarea can't wipe the whole trusted allowlist without the admin
		// deliberately clicking Save on the emptied content (review finding, issues-tracker
		// #20361 follow-up).
		hasUnsavedCallbacksChange() {
			return this.storage.callbacks !== this.savedCallbacks;
		},
	},
	created() {
		jfbEventBus.$on( 'request-state', this.onChangeState.bind( this ) );

		if ( this.migrationInProgress ) {
			this.schedulePoll();
		}
	},
	beforeDestroy() {
		this.clearPoll();
	},
	methods: {
		getSavableData() {
			return { callbacks: this.storage.callbacks };
		},
		getRequestOnSave() {
			return {
				data: this.getSavableData(),
			};
		},
		onSaveDoneSuccess( response ) {
			this.rejected = response?.data?.rejected || {};

			if ( 'string' === typeof response?.data?.callbacks ) {
				this.$set( this.storage, 'callbacks', response.data.callbacks );
				this.savedCallbacks = response.data.callbacks;
			}
		},
		onChangeState( { state, slug } ) {
			if ( 'ssr-callbacks-tab' !== slug ) {
				return;
			}

			if ( 'end' === state ) {
				this.loading = {};
				this.$set( this, 'isLoading', false );

				if ( this.pendingSave ) {
					this.pendingSave = false;
					this.saveByAjax( this, this.$options.name );
				}

				return;
			}

			this.$set( this, 'isLoading', state === 'begin' );
		},
		onInput( value ) {
			this.$set( this.storage, 'callbacks', value );
		},
		onSaveCallbacks() {
			if ( ! this.hasUnsavedCallbacksChange || this.migrationInProgress ) {
				return;
			}

			this.$set( this.loading, 'callbacks', true );

			if ( this.isLoading ) {
				this.pendingSave = true;
				return;
			}

			this.saveByAjax( this, this.$options.name );
		},
		schedulePoll() {
			this.clearPoll();
			this.pollTimer = window.setTimeout( this.pollMigrationStatus, MIGRATION_POLL_INTERVAL_MS );
		},
		clearPoll() {
			if ( this.pollTimer ) {
				window.clearTimeout( this.pollTimer );
				this.pollTimer = null;
			}
		},
		// Reuses the same save endpoint as a read-only status check: omitting `callbacks`
		// from the request body means `Ssr_Callbacks_Handler::on_get_request()` never
		// attempts to write anything — it just reports whether the migration is still
		// running. Once it reports finished, the page is reloaded rather than patching
		// state in place: the migration can also have changed the "Forms Using Blocked
		// Functions" list (`Ssr_Blocked_Callback_Usages`), which this endpoint doesn't
		// return, so a full reload is the simplest way to guarantee everything on the page
		// — not just the callbacks textarea — reflects what the migration produced.
		pollMigrationStatus() {
			jQuery.ajax( {
				url: window.ajaxurl,
				type: 'POST',
				dataType: 'json',
				data: {
					action: 'jet_fb_save_tab__ssr-callbacks-tab',
					_nonce: window?.JetFBPageConfigPackage?.nonce,
				},
			} ).done( ( response ) => {
				if ( response?.data?.migrationInProgress ) {
					this.schedulePoll();
					return;
				}

				window.location.reload();
			} ).fail( () => {
				// Transient network hiccup — keep waiting rather than getting stuck.
				this.schedulePoll();
			} );
		},
	},
};

</script>

<style scoped>
.jfb-ssr-callbacks-textarea {
	width: 100%;
	font-family: monospace;
	margin-bottom: 8px;
}

.jfb-ssr-callbacks-rejected {
	color: #dc2626;
	font-size: 14px;
	padding: 0 20px;
	margin: -10px 0 20px;
}

.jfb-ssr-blocked__list {
	margin: 0;
	padding: 0;
	list-style: none;
}

.jfb-ssr-blocked__list li {
	margin-bottom: 6px;
}

.jfb-ssr-blocked__form {
	font-weight: 600;
}

.jfb-ssr-blocked__meta {
	color: #646970;
	margin: 0 6px;
}

.jfb-ssr-blocked__meta code {
	color: #dc2626;
}

.jfb-ssr-migration-wait {
	display: flex;
	align-items: flex-start;
	gap: 12px;
	padding: 16px 20px;
	background: #f0f6fc;
	border: 1px solid #c3dcf1;
	border-radius: 4px;
}

.jfb-ssr-migration-wait__spinner {
	flex: 0 0 auto;
	width: 18px;
	height: 18px;
	margin-top: 2px;
	border: 2px solid #c3dcf1;
	border-top-color: #2271b1;
	border-radius: 50%;
	animation: jfb-ssr-migration-wait-spin 0.8s linear infinite;
}

@keyframes jfb-ssr-migration-wait-spin {
	to {
		transform: rotate( 360deg );
	}
}
</style>
