/**
 * Resolve a field wrapper inside the current form or repeater row.
 *
 * @param  node     {Element}
 * @param  selector {string}
 * @param  root     {Element}
 * @return {Element|null}
 */
export default function findFieldWrapper( node, selector, root ) {
	const wrapper = node?.closest( selector );

	return wrapper && wrapper !== root && root?.contains( wrapper )
	       ? wrapper
	       : null;
}
