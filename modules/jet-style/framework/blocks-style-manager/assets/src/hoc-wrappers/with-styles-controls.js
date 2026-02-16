import { createHigherOrderComponent } from '@wordpress/compose';
import { useEffect } from '@wordpress/element';
import ControlStack from '../components/control-stack';
import { Generator } from '../css-engine/generator';
import { isEmpty } from '../helpers/utils';
import { generateUniqueClassName } from './with-block-class';

export const withStylesControls = createHigherOrderComponent( ( BlockEdit ) => {

	return ( props ) => {

		const { attributes, clientId, setAttributes } = props;
		const supportName = window.crocoStyleEditorData.support_name;

		// We need to check it by attributes, because 'supports' are not available in the props
		if ( ! attributes || ! attributes[ supportName ] ) {
			return <BlockEdit { ...props } />;
		}

		// Ensure block class is really unique and not inherited from default block definition
		useEffect( () => {
			if ( ! attributes[ supportName ][ '_uniqueClassName' ] ) {
				setAttributes( {
					[ supportName ]: {
						...attributes[ supportName ],
						_uniqueClassName: generateUniqueClassName(),
					},
				} );
			}
		}, [ clientId ] );

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
				{ ! isEmpty( variables ) && <div style={ variables } className="wp-block">
					<BlockEdit {...props}/>
				</div> }
				{ isEmpty( variables ) && <BlockEdit { ...props } /> }
				<ControlStack {...props} />
			</>
		);
	};
}, 'withStylesControls' );
