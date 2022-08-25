import { useBlockAttributes, useUniqKey } from '../../helpers/hooks/blocks';
import BaseHelp from '../controls/base-help';
import DynamicItem from './DynamicItem';
import Tools from '../../helpers/tools';

const {
	      __,
      } = wp.i18n;
const {

	      PanelBody,
	      Button,
	      Flex,
      } = wp.components;

function DynamicValues() {
	const [ attributes, setAttributes ] = useBlockAttributes();

	const uniqKey = useUniqKey();
	const value   = attributes.value ?? {};
	const groups  = value.groups ?? [];

	const updateValue = settings => {
		setAttributes( {
			...attributes,
			value: {
				...value,
				...(
					'function' === typeof settings
					? settings( value )
					: settings
				),
			},
		} );
	};

	return <PanelBody
		title={ __( 'Dynamic Value', 'jet-form-builder' ) }
	>
		<BaseHelp>
			{ __(
				`This is a moved functionality from 
					the conditional block with the Set Value function`,
				'jet-form-builder',
			) }
		</BaseHelp>
		{ Boolean( groups.length ) ? <Flex
			direction={ 'column' }
			align={ 'center' }
			style={ {
				marginBottom: '1em',
			} }
		>
			{ groups.map( current => (
				<DynamicItem
					key={ uniqKey( current.id ) }
					current={ current }
					update={ updateValue }
				/>
			) ) }
		</Flex> : null }
		<Button
			isSecondary
			onClick={ () => {
				updateValue( {
					groups: [ ...groups, { id: Tools.getRandomID() } ],
				} );
			} }
		>
			{ __( 'Add Value', 'jet-form-builder' ) }
		</Button>
	</PanelBody>;
}

export default DynamicValues;