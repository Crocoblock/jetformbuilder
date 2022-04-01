import PaymentsComponent from './PaymentsComponent';
import BaseStore from '../../store/base-store';
import TableModulePlugin from '../../store/plugins/table-module';
import TableSeedPlugin from '../../store/plugins/table-seed';

const store = {
	...BaseStore,
	plugins: [ TableModulePlugin(), TableSeedPlugin() ]
};

export default { PaymentsComponent, options: { store } };