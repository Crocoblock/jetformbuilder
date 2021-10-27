export default {
	methods: {
		getIncoming( tabName ) {
			return tabName ? window.JetFBPageConfig[ tabName ] : window.JetFBPageConfig;
		},
	}
}