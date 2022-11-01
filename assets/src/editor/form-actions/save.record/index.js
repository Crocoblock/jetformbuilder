import SaveRecordDetails from './details';

const {
	      addAction,
	      addDetail,
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

const id = 'save_record';

addAction( id, SaveRecordAction );
addDetail( id, SaveRecordDetails )

