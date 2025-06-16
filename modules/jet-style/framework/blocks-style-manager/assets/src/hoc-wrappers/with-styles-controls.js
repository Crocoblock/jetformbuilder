import { createHigherOrderComponent } from '@wordpress/compose';
import ControlStack from '../components/control-stack';
import { Generator } from '../css-engine/generator';
import { isEmpty } from '../helpers/utils';

export const withStylesControls = createHigherOrderComponent( ( BlockEdit ) => {

	return ( props ) => {

		const { attributes } = props;
		const supportName = window.crocoStyleEditorData.support_name;

		console.log( 'withStylesControls', props );

		// We need to check it by attributes, because 'supports' are not available in the props
		if ( ! attributes || ! attributes[ supportName ] ) {
			return <BlockEdit { ...props } />;
		}

		const cssGenerator = new Generator(
			props.name,
			attributes[ supportName ]
		);

		const {
			styles,
			variables
		} = cssGenerator.getCSS();

		return (
			<>
				{ ! isEmpty( styles ) && <style>{ styles }</style> }
				{ ! isEmpty( variables ) && <div style={ variables }>
					<BlockEdit {...props}/>
				</div> }
				{ isEmpty( variables ) && <BlockEdit { ...props } /> }
				<ControlStack {...props} />
			</>
		);
	};
}, 'withStylesControls' );
