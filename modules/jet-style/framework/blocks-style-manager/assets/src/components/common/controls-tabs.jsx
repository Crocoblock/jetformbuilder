import { useState } from '@wordpress/element';
import ControlsTabsNavigation from './controls-tabs-navigation';
import ControlComponent from '../control-component';

const ControlsTabs = ( props ) => {

	const [ activeTab, setActiveTab ] = useState( props.control.children[ 0 ].id );

	const activeTabContent = () => {
		const activeTabControl = props.control.children.find( ( tab ) => tab.id === activeTab );

		if ( ! activeTabControl || ! activeTabControl.children ) {
			return null;
		}

		return activeTabControl.children.map( ( control ) => {
			return (
				<ControlComponent
					key={ control.id }
					control={ control }
					props={ props }
				/>
			);
		} );
	}

	return (
		<div className="crocoblock-style-manager__controls-tabs">
			<ControlsTabsNavigation
				tabs={ props.control.children }
				activeTab={ activeTab }
				onTabChange={ setActiveTab }
			/>
			<div className="crocoblock-style-manager__controls-tabs-content">
				{ activeTabContent() }
			</div>
		</div>
	);
}

export default ControlsTabs;