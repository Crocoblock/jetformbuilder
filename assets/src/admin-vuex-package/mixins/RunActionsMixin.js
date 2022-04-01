
import ScopeStoreMixin from './ScopeStoreMixin';

export default {
	mixins: [ ScopeStoreMixin ],
	computed: {
		getChecked() {
			return this.getter( 'getChecked' );
		},
		fetchListOptions() {
			return this.getter( 'fetchListOptions' );
		},
		getCurrentAction() {
			return this.getter( 'getCurrentAction' );
		},
		getAction() {
			return this.getter( 'getAction' );
		},
	},
	methods: {
		beforeRunFetch() {
			if ( ! this.getChecked.length ) {
				throw new Error( this.messages?.empty_checked );
			}

			if ( ! this.getCurrentAction?.endpoint ) {
				throw new Error( this.messages?.empty_action );
			}
		},
		onCheckedOptions() {
			return {
				...this.fetchListOptions( this.getCurrentAction?.endpoint ),
				data: {
					checked: this.getChecked,
				},
			};
		},
		getOptionsStatic( action, payload ) {
			const [ id ] = payload;

			return {
				...this.fetchListOptions( this.getAction( action )?.endpoint ),
				data: {
					checked: [ id ],
				},
			};
		},
	}
}