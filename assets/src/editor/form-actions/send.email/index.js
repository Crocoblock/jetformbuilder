const {
	      addAction,
      } = JetFBActions;
const {
	      Suspense,
	      lazy,
      } = wp.element;

const RenderAction = lazy( () => import( './render' ) );

function SendEmailAction( props ) {
	return <Suspense fallback={ 'Loading...' }>
		<RenderAction { ...props }/>
	</Suspense>;
}

addAction( 'send_email', SendEmailAction );
