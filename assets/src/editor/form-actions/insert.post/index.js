const {
	      addAction,
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
