const {
	      __,
      } = wp.i18n;

const {
	      load_fields_endpoint,
	      counter_endpoint,
      } = window.JetFBPageConfig;

const {
	      resolveRestUrl,
	      addQueryArgs,
      } = JetFBActions;

const getters = {
	extra: state => state.extra,
	extraValues: state => getters.extra( state ).map(
		( { value } ) => value,
	),
	selectedExtra: state => state.selectedExtra,
	selectedForm: state => state.form,
	currentFields: state => state.fields?.[ state.form ] ?? [],
	currentFieldsValues: state => getters.currentFields( state ).map(
		( { value } ) => value,
	),
	selectedFields: state => state.selectedFields || [],
	isLoading: state => type => {
		if ( !type ) {
			return Object.values( state.loading ).some( Boolean );
		}

		return state.loading?.[ type ] ?? false;
	},
	status: state => state.status,
	statusesList: state => state.statusesList,
	dateFrom: state => state.date_from,
	dateTo: state => state.date_to,
	removableSelectedExtra: state => state.extra.filter(
		( { value, nonRemovable } ) => (
			state.selectedExtra.includes( value ) && !nonRemovable
		),
	),
	count: state => state.count,
	filtersObj: state => (
		{
			form: state.form,
			status: state.status,
			date_from: state.date_from,
			date_to: state.date_to,
		}
	),
};

const extra = [
	{
		'value': 'id',
		'label': __( 'ID (primary)', 'jet-form-builder' ),
	},
	{
		'value': 'form_id',
		'label': __( 'Form ID', 'jet-form-builder' ),
	},
	{
		'value': 'user_id',
		'label': __( 'User ID', 'jet-form-builder' ),
	},
	{
		'value': 'from_content_id',
		'label': __( 'From content ID', 'jet-form-builder' ),
	},
	{
		'value': 'from_content_type',
		'label': __( 'From content type', 'jet-form-builder' ),
	},
	{
		'value': 'status',
		'label': __( 'Status', 'jet-form-builder' ),
	},
	{
		'value': 'ip_address',
		'label': __( 'IP address', 'jet-form-builder' ),
	},
	{
		'value': 'user_agent',
		'label': __( 'User agent', 'jet-form-builder' ),
	},
	{
		'value': 'referrer',
		'label': __( 'Referrer', 'jet-form-builder' ),
	},
	{
		'value': 'submit_type',
		'label': __( 'Submit type', 'jet-form-builder' ),
	},
	{
		'value': 'is_viewed',
		'label': __( 'Is viewed', 'jet-form-builder' ),
	},
	{
		'value': 'created_at',
		'label': __( 'Created', 'jet-form-builder' ),
	},
	{
		'value': 'updated_at',
		'label': __( 'Updated', 'jet-form-builder' ),
	},
];

const ExportEntriesModule = {
	namespaced: true,
	state: () => (
		{
			form: '',
			selectedFields: [],
			selectedExtra: extra.map( ( { value } ) => value ),
			status: '',
			date_from: '',
			date_to: '',
			fields: {},
			extra,
			loading: {},
			count: 0,
		}
	),
	mutations: {
		setForm( state, formId ) {
			state.form = formId;
		},
		setFields( state, fields ) {
			state.fields = {
				...state.fields,
				[ state.form ]: fields,
			};
		},
		setStatus( state, status ) {
			state.status = status;
		},
		setDateFrom( state, from ) {
			state.date_from = from;
		},
		setDateTo( state, to ) {
			state.date_to = to;
		},
		updateSelectedFields( state, fields ) {
			state.selectedFields = fields;
		},
		updateSelectedExtra( state, extra ) {
			state.selectedExtra = extra;
		},
		toggleLoading( state, type ) {
			state.loading = {
				...state.loading,
				[ type ]: !(
					state.loading?.[ type ] ?? false
				),
			};
		},
		setCount( state, count ) {
			state.count = count;
		},
	},
	getters,
	actions: {
		handleFilters( { commit, state, rootGetters } ) {
			const getter     = rootGetters[ 'scope-default/getFilter' ];
			const formFilter = getter( 'form' );
			const dateFrom   = getter( 'date_from' );
			const dateTo     = getter( 'date_to' );
			const status     = getter( 'status' );

			if ( formFilter.selected !== state.form ) {
				commit( 'setForm', formFilter.selected );
			}
			if ( dateFrom.selected !== state.date_from ) {
				commit( 'setDateFrom', dateFrom.selected );
			}
			if ( dateTo.selected !== state.date_to ) {
				commit( 'setDateTo', dateTo.selected );
			}
			if ( status.selected !== state.status ) {
				commit( 'setStatus', status.selected );
			}
		},
		async resolveFields( { state, commit, dispatch } ) {
			if (
				state.fields.hasOwnProperty( state.form ) ||
				Number.isNaN( Number( state.form ) ) ||
				!state.form
			) {
				return true;
			}

			let response;
			commit( 'toggleLoading', 'fields' );

			try {
				response = await dispatch( 'fetchFormFields' );
			}
			finally {
				commit( 'toggleLoading', 'fields' );
			}

			commit( 'setFields', response.fields );
		},
		fetchFormFields( { commit, state } ) {
			if ( Number.isNaN( Number( state.form ) ) ) {
				throw new Error( 'empty_form' );
			}

			const url = resolveRestUrl(
				load_fields_endpoint.url,
				{ id: state.form },
			);

			return wp.apiFetch( { ...load_fields_endpoint, url } );
		},
		selectAllFields( { commit, getters } ) {
			commit( 'updateSelectedFields', getters.currentFieldsValues );
		},
		clearAllFields( { commit } ) {
			commit( 'updateSelectedFields', [] );
		},
		selectAllExtra( { commit, getters } ) {
			commit( 'updateSelectedExtra', getters.extraValues );
		},
		clearAllExtra( { commit, getters } ) {
			commit(
				'updateSelectedExtra',
				getters.extra.filter(
					( { nonRemovable } ) => nonRemovable,
				).map(
					( { value } ) => value,
				),
			);
		},
		async resolveCount( { state, commit, dispatch } ) {
			let response;
			commit( 'toggleLoading', 'count' );

			try {
				response = await dispatch( 'fetchRecordsCount' );
			}
			finally {
				commit( 'toggleLoading', 'count' );
			}

			commit( 'setCount', response.total );
		},
		fetchRecordsCount( { state, getters } ) {
			if ( Number.isNaN( Number( state.form ) ) ) {
				return { total: 0 };
			}

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

export default ExportEntriesModule;