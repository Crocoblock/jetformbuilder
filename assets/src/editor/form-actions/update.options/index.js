const {
	      addAction,
      } = JetFBActions;
const {
	      Suspense,
	      lazy,
      } = wp.element;

const RenderAction = lazy( () => import( './render' ) );

function UpdateOptionsAction( props ) {
	return <Suspense fallback={ 'Loading...' }>
		<RenderAction { ...props }/>
	</Suspense>;
}

addAction( 'update_options', UpdateOptionsAction );
