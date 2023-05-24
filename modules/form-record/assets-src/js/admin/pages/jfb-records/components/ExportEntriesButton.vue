<template>
	<div style="display:inline-block;">
		<cx-vui-button
			@click="onClick"
			button-style="accent-border"
			size="mini"
		>
			<template #label>{{ getLabel }}</template>
		</cx-vui-button>
		<cx-vui-popup
			v-model="showPopup"
			body-width="650px"
			:ok-label="__( 'Export', 'jet-form-builder' )"
			:cancel-label="__( 'Cancel', 'jet-form-builder' )"
			@on-ok="handlePopupExport"
			@on-cancel="showPopup = false"
		>
			<template #title>{{ __( 'Export settings', 'jet-form-builder' ) }}</template>
			<template #content>
				<cx-vui-select
					:options-list="formFilter.options || []"
					:wrapper-css="[ '1-x-2' ]"
					size="fullwidth"
					:value="selectedForm"
					:label="__( 'Export record from', 'jet-form-builder' )"
					:placeholder="__( 'You need to select form', 'jet-form-builder' )"
					@input="setForm"
				></cx-vui-select>
				<cx-vui-f-select
					:label="__( 'Export fields', 'jet-form-builder' )"
					:wrapper-css="[ '1-x-2', 'jfb-loading-select', 'jfb-padding-b-unset' ]"
					:options-list="currentFields"
					size="fullwidth"
					:multiple="true"
					name="export_fields"
					:value="selectedFields"
					:placeholder="placeholder"
					:disabled="isLoading( 'fields' ) || currentFields.length === 1"
					@input="updateSelectedFields"
				>
					<LoadingIcon
						v-if="isLoading( 'fields' )"
						style="margin-bottom: 0.4em;"
					/>
				</cx-vui-f-select>
				<div class="jfb-inline-control-actions">
					<cx-vui-button
						button-style="link-accent"
						size="link"
						tagName="a"
						:disabled="currentFieldsValues.length === selectedFields.length"
						@click="selectAllFields"
					>
						<template #label>
							{{ __( 'Choose all', 'jet-form-builder' ) }}
						</template>
					</cx-vui-button>
					<cx-vui-button
						button-style="link-error"
						size="link"
						tagName="a"
						:disabled="!selectedFields.length"
						@click="clearAllFields"
					>
						<template #label>
							{{ __( 'Clear', 'jet-form-builder' ) }}
						</template>
					</cx-vui-button>
				</div>
				<hr class="jfb"/>
				<cx-vui-f-select
					:label="__( 'Additional information', 'jet-form-builder' )"
					:wrapper-css="[ '1-x-2', 'jfb-padding-b-unset' ]"
					:options-list="extra"
					size="fullwidth"
					:multiple="true"
					name="additional"
					:value="selectedExtra"
					@input="updateSelectedExtra"
				/>
				<div class="jfb-inline-control-actions">
					<cx-vui-button
						button-style="link-accent"
						size="link"
						tagName="a"
						:disabled="extraValues.length === selectedExtra.length"
						@click="selectAllExtra"
					>
						<template #label>
							{{ __( 'Choose all', 'jet-form-builder' ) }}
						</template>
					</cx-vui-button>
					<cx-vui-button
						button-style="link-error"
						size="link"
						tagName="a"
						:disabled="!selectedExtra.length"
						@click="clearAllExtra"
					>
						<template #label>
							{{ __( 'Clear', 'jet-form-builder' ) }}
						</template>
					</cx-vui-button>
				</div>
				<h3>{{ __( 'Filter records', 'jet-form-builder' ) }}</h3>
				<hr class="jfb"/>
				<cx-vui-select
					:label="__( 'Status', 'jet-form-builder' )"
					:wrapper-css="[ '1-x-2' ]"
					:options-list="statusesList"
					size="fullwidth"
					name="status"
					:value="status"
					@input="setStatus"
				/>
				<hr class="jfb"/>
				<div class="jfb-dates-wrapper">
					<ColumnWrapper>
						<template #label>{{ __( 'Date from', 'jet-form-builder' ) }}</template>
						<input type="date" class="cx-vui-input size-fullwidth">
					</ColumnWrapper>
					<ColumnWrapper>
						<template #label>{{ __( 'Date to', 'jet-form-builder' ) }}</template>
						<input type="date" class="cx-vui-input size-fullwidth">
					</ColumnWrapper>
				</div>
			</template>
		</cx-vui-popup>
	</div>
</template>

<script>

import LoadingIcon from './LoadingIcon';

const {
	      __,
      } = wp.i18n;

const {
	      i18n,
	      ScopeStoreMixin,
	      GetIncoming,
      } = JetFBMixins;

const {
	      mapState,
	      mapGetters,
	      mapMutations,
	      mapActions,
      } = Vuex;

const {
	      RowWrapper,
	      ColumnWrapper,
      } = JetFBComponents;

const defaultLabel = __( 'Export All', 'jet-form-builder' );

export default {
	name: 'ExportEntriesButton',
	components: {
		LoadingIcon,
		RowWrapper,
		ColumnWrapper,
	},
	props: {
		label: {
			type: String,
			default: defaultLabel,
		},
	},
	data: () => (
		{
			showPopup: false,
		}
	),
	mixins: [
		ScopeStoreMixin,
		i18n,
	],
	computed: {
		...mapGetters( [
			'export/selectedForm',
			'export/currentFields',
			'export/selectedFields',
			'export/isLoading',
			'export/currentFieldsValues',
			'export/extra',
			'export/extraValues',
			'export/selectedExtra',
			'export/statusesList',
			'export/status',
		] ),
		formFilter() {
			return this.getter( 'getFilter', 'form' );
		},
		getLabel() {
			const checkedLength = this.getter( 'getChecked' )?.length;

			if ( checkedLength ) {
				return __( 'Export checked', 'jet-form-builder' );
			}

			return this.getter( 'hasSelectedFilters' )
			       ? __( 'Export filtered', 'jet-form-builder' )
			       : this.label;
		},
		currentFields() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/currentFields' ];
		},
		selectedFields() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/selectedFields' ] ?? [];
		},
		selectedForm() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/selectedForm' ] ?? '';
		},
		currentFieldsValues() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/currentFieldsValues' ];
		},
		placeholder() {
			if ( this.selectedFields.length > 0 ) {
				return '';
			}

			return __( 'Please select one or many fields', 'jet-form-builder' );
		},
		extra() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/extra' ];
		},
		extraValues() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/extraValues' ];
		},
		selectedExtra() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/selectedExtra' ];
		},
		status() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/status' ];
		},
		statusesList() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/statusesList' ];
		},
	},
	methods: {
		...mapMutations( 'export', [
			'setForm',
			'updateSelectedFields',
			'updateSelectedExtra',
			'setStatus',
		] ),
		...mapActions( 'export', [
			'resolveFields',
			'selectAllFields',
			'clearAllFields',
			'selectAllExtra',
			'clearAllExtra',
		] ),
		onClick() {
			this.showPopup = true;
			this.resolveFields();
		},
		handlePopupExport() {

		},
		isLoading( type ) {
			return this[ 'export/isLoading' ]( type );
		},
	},
};
</script>

<style lang="scss">
.cx-vui-component {
	&--1-x-2 {
		.cx-vui-component__meta {
			flex: 1;
		}

		.cx-vui-component__control {
			flex: 2;
		}
	}

	&--jfb-loading-select {
		.cx-vui-component__control {
			display: flex;
			gap: 10px;
			align-items: flex-end;

			& > *:first-child {
				flex: 1 1 auto;
			}
		}
	}

	&--jfb-padding-b-unset {
		padding-bottom: 0.2em;
	}
}

.jfb-inline-control-actions {
	display: flex;
	justify-content: flex-end;
	gap: 1em;
	padding: 0 20px 20px 0;
}

hr.jfb {
	border: 0;
	border-top: 1px solid #ECECEC;
	margin: unset;
}

.jfb-dates-wrapper {
	display: flex;
}
</style>
