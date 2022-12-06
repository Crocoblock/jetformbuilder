import InsertUpdatePostDetails from './details';
import StaticInsertedPostID from './StaticInsertedPostID';
import DynamicInsertedPostID from './DynamicInsertedPostID';

const {
	      addAction,
	      addDetail,
	      addComputedField,
      } = JetFBActions;
const {
	      Suspense,
	      lazy,
      } = wp.element;

const RenderAction = lazy( () => import( './render' ) );

function InsertPostAction( props ) {
	return <Suspense fallback={ 'Loading...' }>
		<RenderAction { ...props }/>
	</Suspense>;
}

addAction( 'insert_post', InsertPostAction );
addDetail( 'insert_post', InsertUpdatePostDetails );
addComputedField( StaticInsertedPostID );
addComputedField( DynamicInsertedPostID );
