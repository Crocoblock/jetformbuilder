import InsertPostRender from './render';
import InsertUpdatePostDetails from './details';
import StaticInsertedPostID from './StaticInsertedPostID';
import DynamicInsertedPostID from './DynamicInsertedPostID';

const {
	      addAction,
	      addDetail,
	      addComputedField,
      } = JetFBActions;

addAction( 'insert_post', InsertPostRender );
addDetail( 'insert_post', InsertUpdatePostDetails );
addComputedField( StaticInsertedPostID );
addComputedField( DynamicInsertedPostID );
