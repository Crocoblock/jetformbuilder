import PaymentsComponent from './PaymentsComponent';
import BaseStore from '../../store/base-store';
import TableModulePlugin from '../../store/plugins/table-module';
import TableSeedPlugin from '../../store/plugins/table-seed';
import MessagesPlugin from '../../store/plugins/MessagesPlugin';
import ExportPaymentsPlugin from './store/plugins/ExportPaymentsPlugin';

const store = {
	...BaseStore,
	plugins: [
		TableModulePlugin(),
		TableSeedPlugin(),
		MessagesPlugin,
		ExportPaymentsPlugin,
	],
};

export default { PaymentsComponent, options: { store } };