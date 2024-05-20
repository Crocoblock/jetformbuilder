<template>
	<div style="display:inline-block;">
		<cx-vui-button
			@click="onClick"
			button-style="link-accent"
			size="mini"
		>
			<template #label>
				<span class="dashicons dashicons-database-export"></span>
				{{ __( 'Export', 'jet-form-builder' ) }}
			</template>
		</cx-vui-button>
		<CxVuiPopup
			v-if="showPopup"
			:class-names="{
				'export-popup': true,
				'sticky-footer': true,
			}"
			@close="showPopup = false"
		>
			<template #title>{{ __( '1. Select Form:', 'jet-form-builder' ) }}</template>
			<template #content>
				<RowWrapper
					element-id="form"
					:class-names="{
					'size--1-x-2': true,
					'padding-side-unset': true,
				}"
				>
					<template #label>{{ __( 'Choose form', 'jet-form-builder' ) }}</template>
					<template #default>
						<CxVuiSelect
							:value="selectedForm"
							@input="setForm"
							:class-names="{ 'fullwidth': true }"
						>
							<option disabled value="">
								{{ __( 'You need to select form', 'jet-form-builder' ) }}
							</option>
							<option v-for="option in formFilter.options || []" v-bind:value="option.value">
								{{ option.label }}
							</option>
						</CxVuiSelect>
					</template>
				</RowWrapper>
				<template v-if="selectedForm">
					<h3>{{ __( '2. Select data to export:', 'jet-form-builder' ) }}</h3>
					<Delimiter/>
					<RowWrapper
						element-id="fields"
						:class-names="{
					'size--1-x-2': true,
					'padding-side-unset': true,
				}"
						:state="fieldState"
					>
						<template #label>{{ __( 'Choose fields', 'jet-form-builder' ) }}</template>
						<template #default>
							<CxVuiFSelect
								:options-list="currentFields"
								:multiple="true"
								:value="selectedFields"
								:placeholder="placeholder"
								:disabled="isLoading( 'fields' ) || currentFields.length === 1"
								@change="updateSelectedFields"
							/>
						</template>
						<template #actions>
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
						</template>
					</RowWrapper>
					<Delimiter/>
					<RowWrapper
						element-id="extra"
						:class-names="{
					'size--1-x-2': true,
					'padding-side-unset': true,
				}"
						:state="extraState"
					>
						<template #label>{{ __( 'Additional information', 'jet-form-builder' ) }}</template>
						<template #default>
							<CxVuiFSelect
								:wrapper-css="[ 'jfb-padding-b-unset' ]"
								:options-list="extra"
								:multiple="true"
								:value="selectedExtra"
								@change="updateSelectedExtra"
							/>
						</template>
						<template #actions>
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
								:disabled="!removableSelectedExtra.length"
								@click="clearAllExtra"
							>
								<template #label>
									{{ __( 'Clear', 'jet-form-builder' ) }}
								</template>
							</cx-vui-button>
						</template>
					</RowWrapper>
					<h3>{{ __( '3. Filter records:', 'jet-form-builder' ) }}</h3>
					<Delimiter/>
					<RowWrapper
						element-id="status"
						:class-names="{
					'size--1-x-2': true,
					'padding-side-unset': true,
				}"
					>
						<template #label>{{ __( 'Status', 'jet-form-builder' ) }}</template>
						<template #default>
							<CxVuiSelect
								:value="status"
								@input="setStatus"
								:class-names="{ 'fullwidth': true }"
							>
								<option v-for="option in statusFilter.options" v-bind:value="option.value">
									{{ option.label }}
								</option>
							</CxVuiSelect>
						</template>
					</RowWrapper>
					<Delimiter/>
					<div class="jfb-dates-wrapper">
						<ColumnWrapper
							element-id="date_from"
							:class-names="{ 'padding-side-unset': true }"
						>
							<template #label>{{ __( 'Date from', 'jet-form-builder' ) }}</template>
							<CxVuiDate
								:value="dateFrom"
								@input="setDateFrom"
								max-date="now"
							/>
						</ColumnWrapper>
						<ColumnWrapper
							element-id="date_to"
							:class-names="{ 'padding-side-unset': true }"
						>
							<template #label>{{ __( 'Date to', 'jet-form-builder' ) }}</template>
							<CxVuiDate
								:value="dateTo"
								@input="setDateTo"
								max-date="now"
							/>
						</ColumnWrapper>
					</div>
				</template>
			</template>
			<template #footer>
				<div class="footer-buttons">
					<cx-vui-button
						:button-style="'accent'"
						:size="'mini'"
						:disabled="!canBeExported"
						@click="startExport"
					>
						<template #label>{{ __( 'Export', 'jet-form-builder' ) }}</template>
					</cx-vui-button>
					<cx-vui-button
						:size="'mini'"
						@click="showPopup = false"
					>
						<template #label>{{ __( 'Cancel', 'jet-form-builder' ) }}</template>
					</cx-vui-button>
				</div>
				<div class="footer-counter">
					<div class="footer-counter--message">
						{{ countMessage }}
					</div>
					<cx-vui-button
						button-style="link-accent"
						size="link"
						tagName="a"
						:disabled="isLoading( 'count' )"
						:loading="isLoading( 'count' )"
						@click="onClickUpdateCount"
					>
						<template #label>
							{{ __( 'Update', 'jet-form-builder' ) }}
						</template>
					</cx-vui-button>
				</div>
			</template>
		</CxVuiPopup>
	</div>
</template>

<script>

const {
	      __,
	      sprintf,
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
	      CxVuiPopup,
	      CxVuiFSelect,
	      CxVuiDate,
	      Delimiter,
	      CxVuiSelect,
      } = JetFBComponents;

const {
	      export_url,
      } = window.JetFBPageConfig;

const {
	      addQueryArgs,
      } = JetFBActions;

export default {
	name: 'ExportEntriesButton',
	components: {
		RowWrapper,
		ColumnWrapper,
		CxVuiPopup,
		CxVuiFSelect,
		CxVuiDate,
		Delimiter,
		CxVuiSelect,
	},
	props: {
		label: {
			type: String,
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
			'export/dateFrom',
			'export/dateTo',
			'export/removableSelectedExtra',
			'export/filtersObj',
			'export/count',
		] ),
		formFilter() {
			return this.getter( 'getFilter', 'form' );
		},
		statusFilter() {
			return this.getter( 'getFilter', 'status' );
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
		dateFrom() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/dateFrom' ];
		},
		dateTo() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/dateTo' ];
		},
		removableSelectedExtra() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/removableSelectedExtra' ];
		},
		countMessage() {
			return sprintf(
				__( '%d items can be exported', 'jet-form-builder' ),
				this.count,
			);
		},
		count() {
			jfbEventBus.reactiveCounter;

			return this[ 'export/count' ];
		},
		isEmptyProperties() {
			return !this.selectedFields?.length && !this.selectedExtra?.length;
		},
		canBeExported() {
			return (
				this.selectedForm &&
				!this.isLoading() &&
				!this.isEmptyProperties &&
				this.count > 0
			);
		},
		fieldState() {
			if ( this.isLoading( 'fields' ) ) {
				return {
					type: 'loading',
					message: __( 'Loading...', 'jet-form-builder' ),
				};
			}
			if ( this.isEmptyProperties ) {
				return {
					type: 'warning-danger',
					message: __( 'Please fill this field', 'jet-form-builder' ),
				};
			}

			return '';
		},
		extraState() {
			if ( !this.isEmptyProperties ) {
				return '';
			}

			return {
				type: 'warning-danger',
				message: __( 'Please fill this field', 'jet-form-builder' ),
			};
		},
		filtersObj() {
			jfbEventBus.reactiveCounter;

			return this['export/filtersObj'];
		},
		iframeSrc() {
			return addQueryArgs(
				{
					fields: this.selectedFields,
					extra: this.selectedExtra,
					filters: this.filtersObj,
				},
				export_url,
			);
		},
	},
	methods: {
		...mapMutations( 'export', [
			'setForm',
			'updateSelectedFields',
			'updateSelectedExtra',
			'setStatus',
			'setDateFrom',
			'setDateTo',
		] ),
		...mapActions( 'export', [
			'resolveFields',
			'selectAllFields',
			'clearAllFields',
			'selectAllExtra',
			'clearAllExtra',
			'resolveCount',
		] ),
		onClick() {
			this.showPopup = true;
			this.resolveFields();
		},
		onClickUpdateCount() {
			this.resolveCount();
		},
		startExport() {
			window.location = this.iframeSrc;
		},
		isLoading( type ) {
			return this[ 'export/isLoading' ]( type );
		},
	},
};
</script>

<style lang="scss">
.jfb-dates-wrapper {
	display: flex;
	gap: 1em;
}

.cx-vui-popup.export-popup {
	.cx-vui-popup {
		&__body {
			width: 65vw;
		}

		&__footer {
			justify-content: space-between;
		}
	}

	.footer-counter {
		display: flex;
		gap: 1em;
	}
}
</style>
