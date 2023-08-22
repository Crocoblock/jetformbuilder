import { ATTRIBUTE_NAME } from '../constants';
import lifeSaverIcon from './lifeSaverIcon';
import useSanitizers from '../hooks/useSanitizers';

const {
	      __,
      } = wp.i18n;

const {
	      ToolbarDropdownMenu,
	      Button,
      } = wp.components;

const {
	      useBlockAttributes,
      } = JetFBHooks;

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/packages/components/src/dropdown-menu/index.tsx#L169
 *
 * @param onClose {Function}
 * @param control {Object}
 * @param current {Object} Attributes for sanitize-value
 * @param addNew {Function}
 * @param remove {Function}
 * @param edit {Function}
 * @returns {JSX.Element}
 * @constructor
 */
const ControlButton = function ( {
	onClose,
	control,
	current,
	addNew,
	remove,
	edit,
} ) {

	const RenderCallback = 'function' === typeof control.render
	                       ? control.render
	                       : null;

	return RenderCallback
	       ? <RenderCallback control={ control }/>
	       : <Button
		       onClick={ ( event ) => {
			       event.stopPropagation();
			       onClose();
			       if ( control.onClick ) {
				       control.onClick();
			       }
		       } }
		       className={ [
			       'components-dropdown-menu__menu-item',
			       'has-text',
			       control.isActive ? 'is-active' : '',
		       ].join( ' ' ) }
		       icon={ control.icon }
		       aria-checked={
			       control.role === 'menuitemcheckbox' ||
			       control.role === 'menuitemradio'
			       ? control.isActive
			       : undefined
		       }
		       role={
			       control.role === 'menuitemcheckbox' ||
			       control.role === 'menuitemradio'
			       ? control.role
			       : 'menuitem'
		       }
		       disabled={ control.isDisabled }
	       >
		       { control.label }
	       </Button>;
};

const SanitizeValueButton = function () {
	const [ attributes, setAttributes ] = useBlockAttributes();

	const current = attributes[ ATTRIBUTE_NAME ];

	const transformControl = control => {
		control.icon = control.icon || lifeSaverIcon;

		let currentIndex = current?.length
		                   ? current.findIndex( element => (
				'string' === typeof element
				? element === control.value
				: element.value === control.value
			) )
		                   : -1;

		control.isActive = -1 !== currentIndex;

		const remove = () => setAttributes( prev => (
			{
				...prev,
				[ ATTRIBUTE_NAME ]: prev[ ATTRIBUTE_NAME ].filter(
					prevItem => (
						(
							prevItem?.value ?? prevItem
						) !== control.value
					),
				),
			}
		) );

		const add = () => setAttributes( prev => (
			{
				...prev,
				[ ATTRIBUTE_NAME ]: [
					...(
						prev[ ATTRIBUTE_NAME ] || []
					),
					control.value,
				],
			}
		) );

		const edit = editProps => setAttributes( prev => {
			if ( -1 === currentIndex ) {
				prev[ ATTRIBUTE_NAME ] = prev[ ATTRIBUTE_NAME ] || [];
				currentIndex           = prev[ ATTRIBUTE_NAME ].push( {
					value: control.value,
				} );
			}

			if ( 'string' === prev[ ATTRIBUTE_NAME ][ currentIndex ] ) {
				prev[ ATTRIBUTE_NAME ][ currentIndex ] = {
					value: prev[ ATTRIBUTE_NAME ][ currentIndex ],
				};
			}

			prev[ ATTRIBUTE_NAME ][ currentIndex ] = {
				...prev[ ATTRIBUTE_NAME ][ currentIndex ],
				...editProps,
			};

			return prev;
		} );

		control.onClick = control.isActive ? remove : add;
		control.onEdit  = edit;
		control.onClear = remove;

		control.currentValue = control.isActive
		                       ? current[ currentIndex ]
		                       : false;

		return control;
	};

	const sanitizers = useSanitizers().map( transformControl );

	return <ToolbarDropdownMenu
		icon={ lifeSaverIcon }
		label={ __(
			'Choose a value transformation method',
			'jet-form-builder',
		) }
	>{ ( { onClose } ) => sanitizers.map( ( control, index ) => {
		return <ControlButton
			key={ index }
			control={ control }
			onClose={ onClose }
		/>;
	} ) }</ToolbarDropdownMenu>;
};

export default SanitizeValueButton;