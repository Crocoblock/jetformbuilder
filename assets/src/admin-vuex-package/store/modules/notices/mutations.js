const { LocalStorage } = JetFBActions;

const storage = LocalStorage.storage( 'notices' );

export default {
	insertNotices( state, notices ) {
		state.notices = notices.filter( notice => (
			! storage.getItem( notice.id )
		) );
	},
	clearNoticeById( state, id ) {
		const index = state.notices.findIndex( notice => id === notice.id );

		if ( - 1 === index ) {
			return;
		}
		const notice = state.notices[ index ];
		const storageNotice = storage.getItem( notice.id, {} );

		storage.setItem( notice.id, {
			...storageNotice,
			closed: true,
		} );

		Vue.delete( state.notices, index );
	},
};