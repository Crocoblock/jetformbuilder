const {
	      addAction,
      } = JetFBActions;
const {
	      Suspense,
	      lazy,
      } = wp.element;

const RenderAction = lazy( () => import( './render' ) );

function RegisterUserAction( props ) {
	return <Suspense fallback={ 'Loading...' }>
		<RenderAction { ...props }/>
	</Suspense>;
}

addAction( 'register_user', RegisterUserAction );
