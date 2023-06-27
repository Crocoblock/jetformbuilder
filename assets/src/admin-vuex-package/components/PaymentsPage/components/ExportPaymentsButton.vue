<template>
	<div style="display:inline-block;">
		<cx-vui-button
			@click="showPopup = true"
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
			<template #title>{{ __( '1. Select data to export:', 'jet-form-builder' ) }}</template>
			<template #content>
				<RowWrapper
					element-id="columns"
					:class-names="{
					'size--1-x-2': true,
					'padding-side-unset': true
				}"
					:state="columnsState"
				>
					<template #label>{{ __( 'General Columns', 'jet-form-builder' ) }}</template>
					<template #default>
						<CxVuiFSelect
							:options-list="columns"
							:multiple="true"
							:value="selectedColumns"
							@change="setColumns"
						/>
					</template>
					<template #actions>
						<cx-vui-button
							button-style="link-accent"
							size="link"
							tagName="a"
							:disabled="columnsValues.length === selectedColumns.length"
							@click="selectAllColumns"
						>
							<template #label>
								{{ __( 'Choose all', 'jet-form-builder' ) }}
							</template>
						</cx-vui-button>
						<cx-vui-button
							button-style="link-error"
							size="link"
							tagName="a"
							:disabled="!selectedColumns.length"
							@click="clearAllColumns"
						>
							<template #label>
								{{ __( 'Clear', 'jet-form-builder' ) }}
							</template>
						</cx-vui-button>
					</template>
				</RowWrapper>
				<RowWrapper
					element-id="payerColumns"
					:class-names="{
					'size--1-x-2': true,
					'padding-side-unset': true
				}"
					:state="columnsState"
				>
					<template #label>{{ __( 'Payer Columns', 'jet-form-builder' ) }}</template>
					<template #default>
						<CxVuiFSelect
							:options-list="payerColumns"
							:multiple="true"
							:value="selectedPayerColumns"
							@change="setPayerColumns"
						/>
					</template>
					<template #actions>
						<cx-vui-button
							button-style="link-accent"
							size="link"
							tagName="a"
							:disabled="payerColumnsValues.length === selectedPayerColumns.length"
							@click="selectAllPayerColumns"
						>
							<template #label>
								{{ __( 'Choose all', 'jet-form-builder' ) }}
							</template>
						</cx-vui-button>
						<cx-vui-button
							button-style="link-error"
							size="link"
							tagName="a"
							:disabled="!selectedPayerColumns.length"
							@click="clearAllPayerColumns"
						>
							<template #label>
								{{ __( 'Clear', 'jet-form-builder' ) }}
							</template>
						</cx-vui-button>
					</template>
				</RowWrapper>
				<RowWrapper
					element-id="shippingColumns"
					:class-names="{
					'size--1-x-2': true,
					'padding-side-unset': true
				}"
					:state="columnsState"
				>
					<template #label>{{ __( 'Shipping Columns', 'jet-form-builder' ) }}</template>
					<template #default>
						<CxVuiFSelect
							:options-list="shippingColumns"
							:multiple="true"
							:value="selectedShippingColumns"
							@change="setShippingColumns"
						/>
					</template>
					<template #actions>
						<cx-vui-button
							button-style="link-accent"
							size="link"
							tagName="a"
							:disabled="shippingColumnsValues.length === selectedShippingColumns.length"
							@click="selectAllShippingColumns"
						>
							<template #label>
								{{ __( 'Choose all', 'jet-form-builder' ) }}
							</template>
						</cx-vui-button>
						<cx-vui-button
							button-style="link-error"
							size="link"
							tagName="a"
							:disabled="!selectedShippingColumns.length"
							@click="clearAllShippingColumns"
						>
							<template #label>
								{{ __( 'Clear', 'jet-form-builder' ) }}
							</template>
						</cx-vui-button>
					</template>
				</RowWrapper>
				<h3>{{ __( '2. Filter payments:', 'jet-form-builder' ) }}</h3>
				<Delimiter/>
				<RowWrapper
					element-id="status"
					:class-names="{
					'size--1-x-2': true,
					'padding-side-unset': true
				}"
				>
					<template #label>{{ __( 'Status', 'jet-form-builder' ) }}</template>
					<template #default>
						<CxVuiSelect
							:value="status"
							@input="setStatus"
							:class-names="{ 'fullwidth': true }"
						>
							<option v-for="option in statusFilter.options || []" v-bind:value="option.value">
								{{ option.label }}
							</option>
						</CxVuiSelect>
					</template>
				</RowWrapper>
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
import ScopeStoreMixin from '../../../mixins/ScopeStoreMixin';

const {
	      __,
	      sprintf,
      } = wp.i18n;

const {
	      mapState,
	      mapGetters,
	      mapMutations,
	      mapActions,
      } = Vuex;

const {
	      i18n,
	      GetIncoming,
      } = JetFBMixins;

const {
	      RowWrapper,
	      CxVuiPopup,
	      CxVuiFSelect,
	      CxVuiSelect,
	      Delimiter,
      } = JetFBComponents;

const {
	      addQueryArgs,
      } = JetFBActions;

const {
	      export_url,
      } = window.JetFBPageConfig;

export default {
	name: 'ExportPaymentsButton',
	components: {
		CxVuiFSelect,
		RowWrapper,
		CxVuiPopup,
		CxVuiSelect,
		Delimiter,
	},
	mixins: [
		i18n,
		ScopeStoreMixin,
		GetIncoming,
	],
	data: () => (
		{
			showPopup: false,
		}
	),
	created() {
		this.resolveCount();
	},
	computed: {
		exportUrl() {
			return addQueryArgs(
				{
					columns: this.selectedColumns,
					payerColumns: this.selectedPayerColumns,
					shippingColumns: this.selectedShippingColumns,
					filters: {
						status: this.status,
					},
				},
				export_url,
			);
		},
		...mapGetters( [
			'exportPayments/columns',
			'exportPayments/columnsValues',
			'exportPayments/selectedColumns',
			'exportPayments/payerColumns',
			'exportPayments/payerColumnsValues',
			'exportPayments/selectedPayerColumns',
			'exportPayments/shippingColumns',
			'exportPayments/shippingColumnsValues',
			'exportPayments/selectedShippingColumns',
			'exportPayments/statusesList',
			'exportPayments/status',
			'exportPayments/isLoading',
			'exportPayments/count',
		] ),
		canBeExported() {
			return (
				!this.isLoading() &&
				!this.isEmptyColumns &&
				this.count > 0
			);
		},
		isEmptyColumns() {
			return (
				!this.selectedColumns?.length &&
				!this.selectedShippingColumns?.length &&
				!this.selectedPayerColumns?.length
			);
		},
		columnsState() {
			if ( !this.isEmptyColumns ) {
				return '';
			}

			return {
				type: 'warning-danger',
				message: __( 'Please fill this field', 'jet-form-builder' ),
			};
		},
		statusFilter() {
			return this.getter( 'getFilter', 'status' );
		},
		status() {
			return this[ 'exportPayments/status' ];
		},
		columns() {
			return this[ 'exportPayments/columns' ];
		},
		columnsValues() {
			return this[ 'exportPayments/columnsValues' ];
		},
		selectedColumns() {
			return this[ 'exportPayments/selectedColumns' ];
		},
		payerColumns() {
			return this[ 'exportPayments/payerColumns' ];
		},
		payerColumnsValues() {
			return this[ 'exportPayments/payerColumnsValues' ];
		},
		selectedPayerColumns() {
			return this[ 'exportPayments/selectedPayerColumns' ];
		},
		shippingColumns() {
			return this[ 'exportPayments/shippingColumns' ];
		},
		shippingColumnsValues() {
			return this[ 'exportPayments/shippingColumnsValues' ];
		},
		selectedShippingColumns() {
			return this[ 'exportPayments/selectedShippingColumns' ];
		},
		count() {
			return this[ 'exportPayments/count' ];
		},
		countMessage() {
			return sprintf(
				__( '%d items can be exported', 'jet-form-builder' ),
				this.count,
			);
		},
	},
	methods: {
		...mapMutations( 'exportPayments', [
			'setColumns',
			'setShippingColumns',
			'setPayerColumns',
			'setStatus',
		] ),
		...mapActions( 'exportPayments', [
			'clearAllColumns',
			'selectAllColumns',
			'clearAllPayerColumns',
			'selectAllPayerColumns',
			'clearAllShippingColumns',
			'selectAllShippingColumns',
			'resolveCount',
		] ),
		startExport() {
			window.location = this.exportUrl;
		},
		onClickUpdateCount() {
			this.resolveCount();
		},
		isLoading( type ) {
			return this[ 'exportPayments/isLoading' ]( type );
		},
	},
};

</script>

<style lang="scss">
.cx-vui-popup.export-popup {
	.cx-vui-popup__body {
		width: 65vw;
	}

	.cx-vui-popup__footer {
		justify-content: space-between;
	}

	.footer-counter {
		display: flex;
		gap: 1em;
	}
}
</style>