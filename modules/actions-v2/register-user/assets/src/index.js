import action from './registerUserAction';
import { addComputedField, registerAction } from 'jet-form-builder-actions';
import UserIDComputedField from './UserIDComputedField';

registerAction( action );
addComputedField( UserIDComputedField );
