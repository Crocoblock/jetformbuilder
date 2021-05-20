export default {
	methods: {
		getIncoming( tabName ) {
			return window.JetFBPageConfig[ tabName ];
		},
	}
}