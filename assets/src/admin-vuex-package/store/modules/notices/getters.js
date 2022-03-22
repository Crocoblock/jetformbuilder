export default {
	getNotices: state => {
		return state.notices;
	},
	getNotice: state => id => {
		return state.notices.find( notice => id === notice.id ) || {};
	},
}