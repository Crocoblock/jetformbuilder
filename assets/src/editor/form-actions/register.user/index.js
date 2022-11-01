import RegisterUserDetails from './details';

const {
	      addAction,
	      addDetail,
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
addDetail( 'register_user', RegisterUserDetails );
