import { createMultiStep } from './functions';
import ConditionPageStateItem from './ConditionPageStateItem';

const {
	      addAction,
	      addFilter,
      } = JetPlugins.hooks;
const {
	      getOffsetTop,
      } = JetFormBuilderFunctions;

addAction(
	'jet.fb.observe.after',
	'jet-form-builder/multi-step',
	function ( observable ) {
		const multistep = createMultiStep( observable );

		if ( !multistep.getPages()?.length ) {
			return;
		}

		observable.multistep = multistep;
		multistep.onReady();
	},
);

addAction(
	'jet.fb.conditional.init',
	'jet-form-builder/multi-step',
	function ( block ) {
		const multistep = createMultiStep( block );

		if ( !multistep.getPages()?.length ) {
			return;
		}

		block.multistep = multistep;
		multistep.onReady();
	},
);

addFilter(
	'jet.fb.conditional.types',
	'jet-form-builder/multi-step',
	function ( items ) {
		items = [ ConditionPageStateItem, ...items ];

		return items;
	},
);

addAction(
	'jet.fb.multistep.init',
	'jet-form-builder/multi-step/autoscroll',
	/**
	 * @param multistep {MultiStepState}
	 */
	function ( multistep ) {
		if ( !window?.JetFormBuilderSettings?.scroll_on_next ) {
			return;
		}
		multistep.index.watch( () => {
			/**
			 * @type {PageState|boolean}
			 */
			const page = multistep.getCurrentPage();

			window.scrollTo( {
				top: getOffsetTop( page.node ) - page.offset,
				behavior: 'smooth',
			} );
		} );
	},
);