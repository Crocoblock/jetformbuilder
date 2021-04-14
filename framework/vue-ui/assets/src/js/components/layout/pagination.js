import { oneOf } from '../../utils/assist';
import { checkConditions } from '../../mixins/check-conditions';

const Pagination = {
	name: 'cx-vui-pagination',
	template: '#cx-vui-pagination',
	mixins: [ checkConditions ],
	props: {
		current: {
			type: Number,
			default: 1
		},
		total: {
			type: Number,
			default: 0
		},
		pageSize: {
			type: Number,
			default: 10
		},
		prevText: {
			type: String,
			default: ''
		},
		nextText: {
			type: String,
			default: ''
		},
		customCss: {
			type: String,
			default: ''
		},
		elementId: {
			type: String,
			default: ''
		},
		conditions: {
			type: Array,
			default() {
				return [];
			}
		},
	},

	data() {
		return {
			baseClass: 'cx-vui-pagination',
			currentPage: this.current,
			currentPageSize: this.pageSize
		};
	},

	watch: {
		total ( val ) {
			let maxPage = Math.ceil( val / this.currentPageSize );

			if ( maxPage < this.currentPage ) {
				this.currentPage = ( maxPage === 0 ? 1 : maxPage );
			}
		},
		current ( val ) {
			this.currentPage = val;
		},
		pageSize ( val ) {
			this.currentPageSize = val;
		}
	},

	computed: {
		classesList() {

			let classesList = [
				this.baseClass,
			];

			if ( this.customCss ) {
				classesList.push( this.customCss );
			}

			return classesList;
		},

		prevClasses () {
			return [
				`${this.baseClass}-item`,
				`${this.baseClass}-prev`,
				{
					[`${this.baseClass}-disabled`]: this.currentPage === 1 || false,
					[`${this.baseClass}-custom-text`]: this.prevText !== ''
				}
			];
		},

		nextClasses () {
			return [
				`${this.baseClass}-item`,
				`${this.baseClass}-next`,
				{
					[`${this.baseClass}-disabled`]: this.currentPage === this.allPages || false,
					[`${this.baseClass}-custom-text`]: this.nextText !== ''
				}
			];
		},

		firstPageClasses () {
			return [
				`${this.baseClass}-item`,
				{
					[`${this.baseClass}-item-active`]: this.currentPage === 1
				}
			];
		},

		lastPageClasses () {
			return [
				`${this.baseClass}-item`,
				{
					[`${this.baseClass}-item-active`]: this.currentPage === this.allPages
				}
			];
		},

		allPages () {
			const allPage = Math.ceil( this.total / this.currentPageSize );

			return ( allPage === 0 ) ? 1 : allPage;
		},
	},
	methods: {
		changePage ( page ) {

			if ( this.currentPage !== page ) {

				this.currentPage = page;
				this.$emit( 'update:current', page );
				this.$emit( 'on-change', page );
			}
		},

		prev () {
			const current = this.currentPage;

			if ( current <= 1 ) {
				return false;
			}

			this.changePage( current - 1 );
		},

		next () {
			const current = this.currentPage;

			if ( current >= this.allPages ) {
				return false;
			}

			this.changePage(current + 1);
		},

		fastPrev () {

			const page = this.currentPage - 5;

			if ( page > 0 ) {
				this.changePage( page );
			} else {
				this.changePage( 1 );
			}
		},

		fastNext () {
			const page = this.currentPage + 5;

			if ( page > this.allPages ) {
				this.changePage( this.allPages );
			} else {
				this.changePage( page );
			}
		},
	},
};

export default Pagination;
