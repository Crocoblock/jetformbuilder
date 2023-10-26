const {
	      __,
      } = wp.i18n;

const {
	      RepeaterHeadContext,
      } = JetFBComponents;

const itemHeading = ( { currentItem, index } ) => {
	const leftPart  = [ `#${ index + 1 }` ];
	const rightPart = [];

	if ( currentItem.label ) {
		rightPart.push( `Label [${ currentItem.label }]` );
	}
	if ( currentItem.value ) {
		rightPart.push( `Value [${ currentItem.value }]` );
	}
	if ( currentItem.calculate ) {
		rightPart.push( `Calculate [${ currentItem.calculate }]` );
	}
	leftPart.push( rightPart.join( ' | ' ) );

	return leftPart.join( ' ' );
};

function FromManualOptionsContextProvider( { children } ) {
	return <RepeaterHeadContext.Provider
		value={ {
			isSupported: () => true,
			render: ( { currentItem, index } ) => <span
				className="repeater-item-title">{ itemHeading( {
				currentItem, index,
			} ) }
			</span>,
		} }
	>
		{ children }
	</RepeaterHeadContext.Provider>;
}

export default FromManualOptionsContextProvider;