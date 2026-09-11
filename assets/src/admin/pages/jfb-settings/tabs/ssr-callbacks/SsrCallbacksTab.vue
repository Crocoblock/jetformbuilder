<template>
	<div>
		<cx-vui-component-wrapper
			v-if="pending.length"
			:label="loading.pending ? `${label.pending} (loading...)` : `${label.pending} (${pending.length})`"
			:description="help.pending"
			:wrapper-css="[ 'equalwidth' ]"
		>
			<div class="jfb-ssr-pending">
				<label class="jfb-ssr-pending__select-all">
					<input
						type="checkbox"
						:disabled="isLoading"
						:checked="allSelected"
						@change="onToggleSelectAll( $event.target.checked )"
					/>
					{{ __( 'Select all', 'jet-form-builder' ) }}
				</label>
				<ul class="jfb-ssr-pending__list">
					<li v-for="name in pending" :key="name">
						<label>
							<input
								type="checkbox"
								:disabled="isLoading"
								:checked="!!selected[ name ]"
								@change="onToggleSelected( name, $event.target.checked )"
							/>
							<code>{{ name }}</code>
						</label>
					</li>
				</ul>
				<div class="jfb-ssr-pending__actions">
					<cx-vui-button
						button-style="accent"
						:disabled="isLoading || !selectedCount"
						@click="onReviewSelected( 'approve' )"
					>
						<span slot="label">{{ __( 'Approve selected', 'jet-form-builder' ) }}</span>
					</cx-vui-button>
					<cx-vui-button
						class="jfb-ssr-pending__reject-button"
						:disabled="isLoading || !selectedCount"
						@click="onReviewSelected( 'reject' )"
					>
						<span slot="label">{{ __( 'Reject selected', 'jet-form-builder' ) }}</span>
					</cx-vui-button>
				</div>
			</div>
		</cx-vui-component-wrapper>
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
	</div>
</template>

<script>

import {
	help,
	label,
} from './source';

const { SaveTabByAjax, i18n } = window.JetFBMixins;

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
			pending: Array.isArray( this.incoming.pending ) ? [ ...this.incoming.pending ] : [],
			blocked: Array.isArray( this.incoming.blocked ) ? [ ...this.incoming.blocked ] : [],
			selected: {},
			isLoading: false,
			loading: {},
			pendingSave: false,
			pendingReview: null,
			rejected: {},
		};
	},
	computed: {
		hasRejected() {
			return Object.keys( this.rejected ).length > 0;
		},
		selectedCount() {
			return Object.keys( this.selected ).filter( ( name ) => this.selected[ name ] ).length;
		},
		allSelected() {
			return this.pending.length > 0 && this.selectedCount === this.pending.length;
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
	},
	methods: {
		getSavableData() {
			const data = {};

			if ( this.pendingReview ) {
				data[ this.pendingReview.action ] = this.pendingReview.names;
			} else {
				data.callbacks = this.storage.callbacks;
			}

			return data;
		},
		getRequestOnSave() {
			return {
				data: this.getSavableData(),
			};
		},
		onSaveDoneSuccess( response ) {
			this.rejected = response?.data?.rejected || {};

			// Every request (textarea save, approve, or reject) echoes back the current
			// server-side allowlist, so approving a pending name must be reflected here too
			// — otherwise the admin sees no visible change until reloading the page. The
			// only case to guard against is an approve/reject response arriving while the
			// admin has unsaved textarea edits in progress: applying the server's value then
			// would silently discard what they typed but haven't clicked Save on yet.
			if (
				'string' === typeof response?.data?.callbacks
				&& ( ! this.pendingReview || ! this.hasUnsavedCallbacksChange )
			) {
				this.$set( this.storage, 'callbacks', response.data.callbacks );
				this.savedCallbacks = response.data.callbacks;
			}

			if ( Array.isArray( response?.data?.pending ) ) {
				this.pending = response.data.pending;
				this.selected = {};
			}
		},
		onChangeState( { state, slug } ) {
			if ( 'ssr-callbacks-tab' !== slug ) {
				return;
			}

			if ( 'end' === state ) {
				this.loading = {};
				this.pendingReview = null;
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
			if ( ! this.hasUnsavedCallbacksChange ) {
				return;
			}

			this.$set( this.loading, 'callbacks', true );

			if ( this.isLoading ) {
				this.pendingSave = true;
				return;
			}

			this.saveByAjax( this, this.$options.name );
		},
		onToggleSelectAll( checked ) {
			const selected = {};

			if ( checked ) {
				this.pending.forEach( ( name ) => {
					selected[ name ] = true;
				} );
			}

			this.$set( this, 'selected', selected );
		},
		onToggleSelected( name, checked ) {
			this.$set( this.selected, name, checked );
		},
		onReviewSelected( action ) {
			const names = this.pending.filter( ( name ) => this.selected[ name ] );

			if ( ! names.length || this.isLoading ) {
				return;
			}

			this.pendingReview = { action, names };
			this.saveByAjax( this, this.$options.name );
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

.jfb-ssr-pending__select-all {
	display: block;
	margin-bottom: 8px;
	font-weight: 600;
}

.jfb-ssr-pending__list {
	margin: 0 0 12px;
	padding: 0;
	list-style: none;
}

.jfb-ssr-pending__list li {
	margin-bottom: 4px;
}

.jfb-ssr-pending__list code {
	margin-left: 4px;
}

.jfb-ssr-pending__actions {
	display: flex;
	gap: 8px;
}

.jfb-ssr-pending__reject-button {
	color: #dc2626;
	border-color: #dc2626;
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
</style>
