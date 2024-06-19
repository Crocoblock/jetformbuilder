import ActionFieldsMapContext from '../context/ActionFieldsMapContext';
import {
	RowControlEnd,
	Label,
	RowControl,
} from 'jet-form-builder-components';
import { Fragment } from '@wordpress/element';

function ActionFieldsMap( {
	fields = [],
	label = '[Empty label]',
	children = null,
	plainHelp = '',
	customHelp = false,
} ) {

	return <RowControl align="flex-start">
		<Label>{ label }</Label>
		<RowControlEnd>
			{ (
				customHelp && 'function' === typeof customHelp
			) && customHelp() }

			{ Boolean( plainHelp.length ) && <span
				className={ 'description-controls' }
			>{ plainHelp }</span> }

			{ fields.map( ( [ fieldId, fieldData ], index ) => <Fragment
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
			</Fragment> ) }
		</RowControlEnd>
	</RowControl>;
}

export default ActionFieldsMap;

