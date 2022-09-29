import MacrosButtonTemplate from './MacrosButtonTemplate';
import PopoverItem from '../context/PopoverItem';
import getFieldsWithoutCurrent
	from '../../blocks/helpers/getFieldsWithoutCurrent';
import ExtraMacroContext from '../context/ExtraMacroContext';
import FiltersMacroContext from '../context/FiltersMacroContext';

const {
	      useMemo,
	      useContext,
	      useState,
      } = wp.element;
const {
	      __,
      } = wp.i18n;
const {
	      Button,
      } = wp.components;

function MacrosFieldsTemplate( { children, ...props } ) {
	const fields = useMemo(
		() => getFieldsWithoutCurrent(),
		[],
	);

	/**
	 * @type {BaseMacro[]}
	 */
	const extra   = useContext( ExtraMacroContext );
	/**
	 * @type {BaseFilter[]}
	 */
	const filters = useContext( FiltersMacroContext );

	const [ showHelp, setShowHelp ] = useState( {} );

	const [ showFilterHelp, setShowFilterHelp ] = useState( {} );

	const Macros = <>
		{ Boolean( fields.length ) && <ul style={ {
			padding: '0 0.5em',
		} }>
			{ fields.map( ( current, index ) => <li
				key={ index + 'field_' + current.value }
			>
				<PopoverItem.Provider value={ current }>
					{ children }
				</PopoverItem.Provider>
			</li> ) }
		</ul> }
		{ Boolean( extra.length ) && <>
			<span>{ __( 'Extra macros:', 'jet-form-builder' ) }</span>
			<ul style={ {
				padding: '0 0.5em',
			} }>
				{ extra.map( ( current, index ) => {
					const name      = current.fullName();
					const isShow    = showHelp[ name ] ?? false;
					const MacroHelp = current.help ?? null;

					return <li
						key={ index + 'field_' + name }
					>
						<PopoverItem.Provider value={ current }>
							{ null === MacroHelp ? children : <div style={ {
								display: 'flex',
								alignItems: 'center',
								gap: '0.6em',
							} }>
								<Button
									isSmall
									variant="tertiary"
									icon={ isShow
									       ? 'arrow-down'
									       : 'arrow-right' }
									className={ 'jet-fb-is-thick' }
									onClick={ () => setShowHelp(
										prev => (
											{ ...prev, [ name ]: !isShow }
										),
									) }
								/>
								{ children }
							</div> }
							{ isShow && <>
								{ 'string' === typeof MacroHelp
								  ? MacroHelp
								  : <MacroHelp/> }
							</> }
						</PopoverItem.Provider>
					</li>;
				} ) }
			</ul>
		</> }
	</>;

	const Filters = <>
		<span>{ __( 'Filters:', 'jet-form-builder' ) }</span>
		<ul style={ {
			padding: '0 0.5em',
		} }>
			{ filters.map( ( current, index ) => {
				const name      = current.fullName();
				const isShow    = showFilterHelp[ name ] ?? false;
				const MacroHelp = current.fullHelp.bind( current );

				return <li
					key={ index + 'field_' + name }
				>
					<PopoverItem.Provider value={ current }>
						<div style={ {
							display: 'flex',
							alignItems: 'center',
							gap: '0.6em',
						} }>
							<Button
								isSmall
								variant="tertiary"
								icon={ isShow
								       ? 'arrow-down'
								       : 'arrow-right' }
								className={ 'jet-fb-is-thick' }
								onClick={ () => setShowFilterHelp(
									prev => (
										{ ...prev, [ name ]: !isShow }
									),
								) }
							/>
							{ children }
						</div>
						{ isShow && <MacroHelp/> }
					</PopoverItem.Provider>
				</li>;
			} ) }
		</ul>
	</>;

	return <MacrosButtonTemplate disabled={ !fields.length } { ...props }>
		<div style={ {
			display: 'flex',
		} }>
			<div>{ Filters }</div>
			<div>{ Macros }</div>
		</div>

	</MacrosButtonTemplate>;

}

export default MacrosFieldsTemplate;