function BaseFilter() {
}

BaseFilter.prototype = {
	getId() {
		throw new Error( 'getId is empty' );
	},
	onUpdate() {

	}
};

export default BaseFilter;