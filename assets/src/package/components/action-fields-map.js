
const {
	BaseControl,
} = wp.components;


export default function ActionFieldsMap( {
									 fields = [],
									 label = '[Empty label]',
									 children = () => {},
									 plainHelp = '',
									customHelp = false
								 } ) {

	return <BaseControl
		label={ label }
		key='jet_fields_map'
	>
		<div className='jet-user-fields-map__list'>
			{ ( customHelp && 'function' === typeof customHelp ) && customHelp() }

			{ Boolean( plainHelp.length ) && <span
				className={ 'description-controls' }
			>{ plainHelp }</span> }

			{ fields.map( ( [ fieldId, fieldData ], index ) => <React.Fragment
				key={ `field_in_map_${ fieldId + index }` }
			>
				{ children( { fieldId, fieldData, index } ) }
			</React.Fragment> ) }
		</div>
	</BaseControl>
};

