import PaymentsComponent from './PaymentsComponent';
import BaseStore from '../../store/base-store';
import TableModulePlugin from '../../store/plugins/table-module';
import TableSeedPlugin from '../../store/plugins/table-seed';
import MessagesPlugin from '../../store/plugins/MessagesPlugin';

const store = {
	...BaseStore,
	plugins: [ TableModulePlugin(), TableSeedPlugin(), MessagesPlugin ]
};

export default { PaymentsComponent, options: { store } };