export default {
	props: {
		columnsComponents: {
			type: Array,
			required: false,
			default() {
				return [];
			},
		},
	},
	data() {
		return {
			componentsCols: [],
		};
	},
	created() {
		this.componentsCols = [ ...this.columnsComponents ];
	},
	methods: {
		getColumnComponentByPrefix( column, prefix ) {
			const index = this.componentsCols.findIndex( comp => comp[ prefix ]?.name === (
				column + '--' + prefix
			) );

			return (
				- 1 === index
			) ? false : this.componentsCols[ index ][ prefix ];
		},
	},
};