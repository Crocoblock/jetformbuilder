export default {
	state: {
		showOverflow: false,
	},
	getters: {
		isShowOverflow: state => {
			return state.showOverflow;
		},
	},
	mutations: {
		toggleShowOverflow( state ) {
			state.showOverflow = ! state.showOverflow;
		},
	}
}