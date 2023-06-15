import NoticeComponent from './notice-component';

const CXNotice = {
	instance: null,
	stack: {},
	newInstance: function() {
		var NoticeComponentClass = Vue.extend( NoticeComponent );

		this.instance = new NoticeComponentClass({
			propsData: { type: 'primary' }
		});

		this.instance.$mount();
		document.body.appendChild( this.instance.$el );
	},
	getRandId: function() {
		// Generates random string with 10 characters length
		return Math.random().toString( 36 ).substring( 2, 7 ) + Math.random().toString( 36 ).substring( 2, 7 );
	},
	add: function( options, id ) {

		id = id || this.getRandId();

		if ( ! this.instance ) {
			this.newInstance();
		}

		options.duration = options.duration || 4500;
		options.type     = options.type || 'info';

		this.instance.addToStack( options, id );

	},
	close: function( id ) {
		if ( id ) {

			id = id.toString();

			if ( this.instance ) {
				this.instance.destroyItem( id );
			}
		} else {
			return false;
		}
	},
	closeAll: function() {
		this.instance.destroyAll();
	},
};

export default CXNotice;
