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
		Vue.delete( state.notices, index );

		const { is_hide_after_close: isHideAfterClose } = notice.options;

		if ( ! isHideAfterClose ) {
			return;
		}
		const storageNotice = storage.getItem( notice.id, {} );

		storage.setItem( notice.id, {
			...storageNotice,
			closed: true,
		} );
	},
};