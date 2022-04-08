import { getOffset, prepareFiltersQuery } from './functions';

const { addQueryArgs } = JetFBActions;

const getters = {
	offset: state => {
		return getOffset( state.currentPage, state.limit );
	},
	getLimit: state => {
		return state.limit;
	},
	getFilter: state => slug => {
		return state.filters[ slug ] ?? {};
	},
	receiveEndpoint: state => {
		return state.receiveEndpoint;
	},
	queryState: state => {
		return {
			limit: state.limit,
			total: state.total,
			currentPage: state.currentPage,
			itemsFrom: state.itemsFrom,
			itemsTo: state.itemsTo,
		};
	},
	hasFilters: state => {
		return 0 < Object.keys( state.filters ).length;
	},
	apiOptions: state => {
		return state.apiOptions;
	},
	apiData: state => {
		return state.apiData;
	},
	fetchListOptions: state => endpoint => {
		const { limit, sort, currentPage: page } = state;

		return {
			...endpoint,
			url: addQueryArgs(
				{
					limit,
					sort,
					page,
					filters: prepareFiltersQuery( state.filters ),
				},
				endpoint.url,
			),
		};
	},
};

export default {
	...getters,
	getPageOptionsFetch: state => {
		const receive_url = getters.receiveEndpoint( state );

		return getters.fetchListOptions( state )( receive_url );
	},
};