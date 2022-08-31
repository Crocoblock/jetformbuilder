const {
	      addAction,
      } = JetFBActions;
const {
	      Suspense,
	      lazy,
      } = wp.element;

const RenderAction = lazy( () => import( './render' ) );

function SaveRecordAction( props ) {
	return <Suspense fallback={ 'Loading...' }>
		<RenderAction { ...props }/>
	</Suspense>;
}

addAction( 'save_record', SaveRecordAction );
