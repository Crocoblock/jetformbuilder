const ControlsTabsNavigation = ( props ) => {

	const tabClasses = ( tabId ) => {
		return `crocoblock-style-manager__controls-tabs-button ${ props.activeTab === tabId ? 'is-active' : '' }`;
	}

	return (
		<div className="crocoblock-style-manager__controls-tabs-navigation">
			{ props.tabs.map( ( tab ) => (
				<button
					key={ tab.id }
					className={ tabClasses( tab.id ) }
					onClick={ () => props.onTabChange( tab.id ) }
				>
					{ tab.title }
				</button>
			) ) }
		</div>
	);
}

export default ControlsTabsNavigation;