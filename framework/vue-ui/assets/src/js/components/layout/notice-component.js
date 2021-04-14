const NoticeComponent = {
	name: 'cx-vui-notice',
	template: '#cx-vui-notice',
	data: function() {
		return {
			stack: {},
			destroyQueue: {},
		}
	},
	methods: {
		addToStack: function( item, itemID ) {

			var self = this;
			var destroyTimeout = setTimeout( function() {
				self.destroyItem( itemID );
			}, item.duration );

			self.$set( self.stack, itemID, item );
			self.$set( self.destroyQueue, itemID, destroyTimeout );

		},
		destroyItem: function( itemID ) {
			this.$delete( this.stack, itemID );

			if ( this.destroyQueue[ itemID ] ) {
				clearTimeout( this.destroyQueue[ itemID ] );
				this.$delete( this.destroyQueue, itemID );
			}

		},
		destroyAll: function() {

			for ( var itemID in this.destroyQueue ) {
				console.log( this.destroyQueue[ itemID ] );
				clearTimeout( this.destroyQueue[ itemID ] );
			}

			this.stack        = {};
			this.destroyQueue = {};

		},
		getIcon: function( type ) {

			var icon;

			switch ( type ) {

				case 'success':

					icon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.38498 12.0188L13.5962 4.80751L12.4695 3.64319L6.38498 9.7277L3.53052 6.87324L2.40376 8L6.38498 12.0188ZM2.32864 2.3662C3.9061 0.788732 5.79656 0 8 0C10.2034 0 12.0814 0.788732 13.6338 2.3662C15.2113 3.91862 16 5.79656 16 8C16 10.2034 15.2113 12.0939 13.6338 13.6714C12.0814 15.2238 10.2034 16 8 16C5.79656 16 3.9061 15.2238 2.32864 13.6714C0.776213 12.0939 0 10.2034 0 8C0 5.79656 0.776213 3.91862 2.32864 2.3662Z"/></svg>';

					break;

				case 'error':

					icon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.71489 10.1136V6.71605H7.28511V10.1136H8.71489ZM8.71489 13.4716V11.7728H7.28511V13.4716H8.71489ZM0 16L8 0L16 16H0Z"/></svg>';

					break;

				default:

					icon = '<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.78873 5.59624V3.98122H7.21127V5.59624H8.78873ZM8.78873 12.0188V7.21127H7.21127V12.0188H8.78873ZM2.32864 2.3662C3.9061 0.788732 5.79656 0 8 0C10.2034 0 12.0814 0.788732 13.6338 2.3662C15.2113 3.91862 16 5.79656 16 8C16 10.2034 15.2113 12.0939 13.6338 13.6714C12.0814 15.2238 10.2034 16 8 16C5.79656 16 3.9061 15.2238 2.32864 13.6714C0.776213 12.0939 0 10.2034 0 8C0 5.79656 0.776213 3.91862 2.32864 2.3662Z"/></svg>';

					break;
			}

			return icon;
		}
	},
};

export default NoticeComponent;
