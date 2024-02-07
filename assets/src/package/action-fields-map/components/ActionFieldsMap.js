import ActionFieldsMapContext from '../context/ActionFieldsMapContext';

const {
	      BaseControl,
      } = wp.components;

function ActionFieldsMap( {
	fields = [],
	label = '[Empty label]',
	children = null,
	plainHelp = '',
	customHelp = false,
} ) {

	// eslint-disable-next-line @wordpress/no-base-control-with-label-without-id
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

			{ fields.map( ( [ fieldId, fieldData ], index ) =>
				<ActionFieldsMapContext.Provider
					key={ `field_in_map_${ fieldId + index }` }
					value={ {
						name: fieldId,
						data: fieldData,
						index,
					} }
				>
					{ 'function' === typeof children
					  ? children( { fieldId, fieldData, index } )
					  : children }
				</ActionFieldsMapContext.Provider> ) }
		</div>
	</BaseControl>;
}

export default ActionFieldsMap;

