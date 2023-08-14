import SaveRecordRender from './render';
import SaveRecordDetails from './details';

const {
	      addAction,
	      addDetail,
      } = JetFBActions;

const id = 'save_record';

addAction( id, SaveRecordRender );
addDetail( id, SaveRecordDetails )

