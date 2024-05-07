import BlockJetStyleItemContext from '../context/BlockJetStyleItemContext';
import StylePanelItemContext from './StylePanelItemContext';
import { SIDES } from '../abstract/BoxCSSCompiler';
import { useContext } from '@wordpress/element';
import {
	__experimentalBoxControl as BoxControl,
	__experimentalToolsPanelItem as ToolsPanelItem,
} from '@wordpress/components';

function UnCompleteBox( {
	label = '',
	labelForControl,
	sides = SIDES,
} ) {
	const {
		      cssValue,
		      updateCss,
		      onDeselect,
		      hasValue: invalidHasValue,
		      ...otherContext
	      } = useContext( BlockJetStyleItemContext );

	const hasValue = function () {
		if ( typeof cssValue !== 'object' ) {
			return false;
		}

		const [ firstKey ] = Object.keys( cssValue );

		return SIDES.includes( firstKey );
	};

	const onChange = value => {
		const modifiedValue = {};

		sides.forEach( currentSide => {
			modifiedValue[ currentSide ] = Number.isNaN(
				Number( value[ currentSide ] ),
			) ? value[ currentSide ]
			  : value[ currentSide ] + 'px';
		} );

		updateCss( modifiedValue );
	};

	return <ToolsPanelItem
		label={ label }
		onDeselect={ onDeselect }
		hasValue={ hasValue }
		{ ...otherContext }
	>
		<BoxControl
			label={ labelForControl ?? label }
			onChange={ onChange }
			sides={ sides }
			value={ cssValue }
		/>
	</ToolsPanelItem>;
}

function StyleBox( {
	cssVar,
	label = '',
	labelForControl,
	sides = SIDES,
	...props
} ) {
	return <StylePanelItemContext
		cssVar={ cssVar }
		defaultValue={ {} }
	>
		<UnCompleteBox
			label={ label }
			labelForControl={ labelForControl }
			sides={ sides }
			{ ...props }
		/>
	</StylePanelItemContext>;
}

export default StyleBox;