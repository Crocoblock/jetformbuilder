import * as ChooseColumn from '../components/TableColumns/choose';
import * as LinkTypeColumn from '../components/TableColumns/link-type';
import * as IconStatusColumn from '../components/TableColumns/icon-status';

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
		this.componentsCols = [
			...this.columnsComponents,
			ChooseColumn,
			LinkTypeColumn,
			IconStatusColumn,
		];
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