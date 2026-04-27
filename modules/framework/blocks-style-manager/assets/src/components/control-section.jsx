import { PanelBody } from '@wordpress/components';
import { hasChildren } from '../helpers/utils';
import ControlComponent from './control-component';
import { isVisible, getContextFromProps } from '../helpers/conditions-checker';

const ControlSection = ( { section, props } ) => {

	if ( section.condition && ! isVisible( section.condition, getContextFromProps( props ) ) ) {
		return null;
	}

	return (
		<PanelBody
			title={ section.title }
			initialOpen={ section.initialOpen }
			className="crocoblock-style-manager__control-section"
		>
			{ hasChildren( section ) && section.children.map( ( control ) => {
				return (
					<ControlComponent
						key={ control.id }
						control={ control }
						props={ props }
					/>
				);
			} ) }
		</PanelBody>
	);
};

export default ControlSection;