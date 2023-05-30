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
	hasSelectedFilters: state => {
		return Object.values( state.filters ).some(
			( { selected } ) => !!selected,
		);
	},
	apiOptions: state => {
		return state.apiOptions;
	},
	apiData: state => {
		return state.apiData;
	},
	filtersObj: state => {
		return prepareFiltersQuery( state.filters );
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
};