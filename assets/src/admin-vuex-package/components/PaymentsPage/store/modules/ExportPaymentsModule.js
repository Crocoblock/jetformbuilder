const {
	      __,
      } = wp.i18n;

const columns = [
	{ value: 'id', label: __( 'ID (primary)', 'jet-form-builder' ) },
	{ value: 'amount_value', label: __( 'Amount Value', 'jet-form-builder' ) },
	{ value: 'amount_code', label: __( 'Amount Code', 'jet-form-builder' ) },
	{ value: 'gateway_id', label: __( 'Gateway Slug', 'jet-form-builder' ) },
	{ value: 'scenario', label: __( 'Scenario', 'jet-form-builder' ) },
	{ value: 'type', label: __( 'Type', 'jet-form-builder' ) },
	{ value: 'status', label: __( 'Status', 'jet-form-builder' ) },
	{
		value: 'transaction_id',
		label: __( 'Transaction ID', 'jet-form-builder' ),
	},
	{ value: 'form_id', label: __( 'Form ID', 'jet-form-builder' ) },
	{ value: 'user_id', label: __( 'User ID', 'jet-form-builder' ) },
	{ value: 'record_id', label: __( 'Record ID', 'jet-form-builder' ) },
	{ value: 'created_at', label: __( 'Created', 'jet-form-builder' ) },
	{ value: 'updated_at', label: __( 'Updated', 'jet-form-builder' ) },
];
const payerColumns = [
	{ value: 'payer_id', label: __( 'Payer ID', 'jet-form-builder' ) },
	{ value: 'first_name', label: __( 'First Name', 'jet-form-builder' ) },
	{ value: 'last_name', label: __( 'Last Name', 'jet-form-builder' ) },
	{ value: 'email', label: __( 'Email', 'jet-form-builder' ) },
];
const shippingColumns = [
	{ value: 'full_name', label: __( 'Full Name', 'jet-form-builder' ) },
	{
		value: 'address_line_1',
		label: __( 'Address Line 1', 'jet-form-builder' ),
	},
	{
		value: 'address_line_2',
		label: __( 'Address Line 2', 'jet-form-builder' ),
	},
	{ value: 'admin_area_1', label: __( 'Admin Area 1', 'jet-form-builder' ) },
	{ value: 'admin_area_2', label: __( 'Admin Area 2', 'jet-form-builder' ) },
	{ value: 'postal_code', label: __( 'Postal Code', 'jet-form-builder' ) },
	{ value: 'country_code', label: __( 'Country Code', 'jet-form-builder' ) },
];

const {
	      counter_endpoint,
      } = window.JetFBPageConfig;

const {
	      addQueryArgs,
      } = JetFBActions;

const getters = {
	status: state => state.status,
	statusesList: state => state.statusesList,
	columns: state => state.columns,
	selectedColumns: state => state.selectedColumns,
	columnsValues: state => getters.columns( state ).map(
		( { value } ) => value,
	),
	payerColumns: state => state.payerColumns,
	selectedPayerColumns: state => state.selectedPayerColumns,
	payerColumnsValues: state => getters.payerColumns( state ).map(
		( { value } ) => value,
	),
	shippingColumns: state => state.shippingColumns,
	selectedShippingColumns: state => state.selectedShippingColumns,
	shippingColumnsValues: state => getters.shippingColumns( state ).map(
		( { value } ) => value,
	),
	isLoading: state => type => {
		if ( !type ) {
			return Object.values( state.loading ).some( Boolean );
		}

		return state.loading?.[ type ] ?? false;
	},
	count: state => state.count,
	filtersObj: state => (
		{
			status: state.status,
		}
	),
};

const ExportPaymentsModule = {
	namespaced: true,
	state: () => (
		{
			status: '',
			columns,
			selectedColumns: columns.map(
				( { value } ) => value
			),
			payerColumns,
			selectedPayerColumns: payerColumns.map(
				( { value } ) => value
			),
			shippingColumns,
			selectedShippingColumns: shippingColumns.map(
				( { value } ) => value
			),
			count: 0,
			loading: {},
		}
	),
	mutations: {
		setStatus( state, status ) {
			state.status = status;
		},
		setColumns( state, columns ) {
			state.selectedColumns = columns;
		},
		setPayerColumns( state, columns ) {
			state.selectedPayerColumns = columns;
		},
		setShippingColumns( state, columns ) {
			state.selectedShippingColumns = columns;
		},
		setCount( state, count ) {
			state.count = count;
		},
		toggleLoading( state, type ) {
			state.loading = {
				...state.loading,
				[ type ]: !(
					state.loading?.[ type ] ?? false
				),
			};
		},
	},
	getters,
	actions: {
		handleFilters( { commit, state, rootGetters } ) {
			const getter = rootGetters[ 'scope-default/getFilter' ];
			const status = getter( 'status' );

			if ( status.selected !== state.status ) {
				commit( 'setStatus', status.selected );
			}
		},
		selectAllColumns( { commit, getters } ) {
			commit( 'setColumns', getters.columnsValues );
		},
		clearAllColumns( { commit } ) {
			commit( 'setColumns', [] );
		},
		selectAllPayerColumns( { commit, getters } ) {
			commit( 'setPayerColumns', getters.payerColumnsValues );
		},
		clearAllPayerColumns( { commit } ) {
			commit( 'setPayerColumns', [] );
		},
		selectAllShippingColumns( { commit, getters } ) {
			commit( 'setShippingColumns', getters.shippingColumnsValues );
		},
		clearAllShippingColumns( { commit } ) {
			commit( 'setShippingColumns', [] );
		},
		async resolveCount( { commit, dispatch } ) {
			let response;
			commit( 'toggleLoading', 'count' );

			try {
				response = await dispatch( 'fetchPaymentsCount' );
			}
			finally {
				commit( 'toggleLoading', 'count' );
			}

			commit( 'setCount', response.total );
		},
		fetchPaymentsCount( { getters } ) {
			const url = addQueryArgs(
				{
					filters: getters.filtersObj,
				},
				counter_endpoint.url,
			);

			return wp.apiFetch( { ...counter_endpoint, url } );
		},
	},
};

export default ExportPaymentsModule;