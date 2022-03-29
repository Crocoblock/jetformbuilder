export default {
	state: {
		showOverflow: false,
		showOverflowControl: false,
	},
	getters: {
		isShowOverflow: state => {
			return state.showOverflow;
		},
		showOverflowControl: state => {
			return state.showOverflowControl;
		},
	},
	mutations: {
		toggleShowOverflow( state ) {
			state.showOverflow = ! state.showOverflow;
		},
		showOverflow( state, show ) {
			state.showOverflow = show;
		},
		showOverflowControl( state, show ) {
			state.showOverflowControl = show;
		},
	}
}