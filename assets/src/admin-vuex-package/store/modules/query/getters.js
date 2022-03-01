import { getOffset, prepareFiltersQuery } from './functions';

const { addQueryArgs } = JetFBActions;

const getters = {
	offset: state => {
		return getOffset( state.currentPage, state.limit );
	},
	getFilter: state => slug => {
		return state.filters[ slug ] ?? {};
	},
	hasFilters: state => {
		return 0 < Object.keys( state.filters ).length;
	},
	fetchListOptions: state => endpoint => {
		const { limit, sort, currentPage: page } = state.queryState;

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
		const { receive_url } = window.JetFBPageConfig;

		return getters.fetchListOptions( state )( receive_url );
	},
};