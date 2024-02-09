import createObservable from './createObservable';
import iterateJfbComments from '../html.macro/iterateJfbComments';
import observeMacroAttr from '../html.macro/observeMacroAttr';

// Mocking directly imported functions if necessary
jest.mock( '../html.macro/observeMacroAttr' );

describe( 'Observable.initMacros', () => {
	let observable;

	beforeEach( () => {
		observable = createObservable();

		observable.rootNode.innerHTML = `
<input type="text" name="text_field" data-jfb-sync/>
<!-- JFB_FIELD::text_field -->
<span title="JFB_FIELD::text_field">some text</span>
<span data-jfb-macro="text_field"></span>
`;
		observable.observe();
	} );

	it( 'observes comments with macro', () => {
		for (
			const comment of iterateJfbComments( observable.rootNode )
			) {
			expect( comment.jfbObserved ).toBeTruthy();
		}
	} );

	it( 'observes nodes with reactive attrs', () => {
		expect( observeMacroAttr ).toHaveBeenCalled();
	} );

	it( 'observes reactive nodes', () => {
		const nodes = observable.rootNode.querySelectorAll(
			'[data-jfb-observed]',
		);
		expect( nodes.length ).toBe( 1 );
	} );
} );