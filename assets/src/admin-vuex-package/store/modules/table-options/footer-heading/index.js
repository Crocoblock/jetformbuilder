export default {
	state: {
		footerHeading: true,
	},
	getters: {
		footerHeading: state => {
			return state.footerHeading;
		}
	},
	mutations: {
		setFooterHeading( state, show ) {
			state.footerHeading = show;
		}
	},
}