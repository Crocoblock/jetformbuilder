import ActionFieldsMapContext from '../context/action.fields.map.context';

const {
	      BaseControl,
      } = wp.components;

export default function ActionFieldsMap( {
	fields = [],
	label = '[Empty label]',
	children = null,
	plainHelp = '',
	customHelp = false,
} ) {

	return <BaseControl
		label={ label }
		key="jet_fields_map"
	>
		<div className="jet-user-fields-map__list">
			{ (
				customHelp && 'function' === typeof customHelp
			) && customHelp() }

			{ Boolean( plainHelp.length ) && <span
				className={ 'description-controls' }
			>{ plainHelp }</span> }

			{ fields.map( ( [ fieldId, fieldData ], index ) => <React.Fragment
				key={ `field_in_map_${ fieldId + index }` }
			>
				<ActionFieldsMapContext.Provider value={ {
					name: fieldId,
					data: fieldData,
					index,
				} }>
					{ 'function' === typeof children
					  ? children( { fieldId, fieldData, index } )
					  : children }
				</ActionFieldsMapContext.Provider>
			</React.Fragment> ) }
		</div>
	</BaseControl>;
};

