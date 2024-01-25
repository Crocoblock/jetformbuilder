const callResult = ( payload, result ) => {
	if ( payload?.length && 'object' === typeof payload ) {
		return result( ...payload );
	}
	return result( payload );
};

export default {
	props: {
		scope: {
			type: String,
			default: 'default',
		},
	},
	methods: {
		scopedName( name ) {
			return 'scope-' + this.scope + '/' + name;
		},
		getter( name, payload ) {
			const result = this.$store.getters[ this.scopedName( name ) ];

			if ( 'undefined' !== typeof payload &&
				'function' === typeof result
			) {
				return callResult( payload, result );
			}

			return result;
		},
		commit( name, payload ) {
			return this.$store.commit( this.scopedName( name ), payload );
		},
		dispatch( name, payload ) {
			return this.$store.dispatch( this.scopedName( name ), payload );
		},
	},
};