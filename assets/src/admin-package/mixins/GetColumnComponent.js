import * as ChooseColumn from '../entries-table-columns/choose';
import * as LinkTypeColumn from '../entries-table-columns/link-type';

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
		this.componentsCols = [ ...this.columnsComponents, ChooseColumn, LinkTypeColumn ];
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