/**
 * @param node {Node|Element}
 */
import resolveLabel from './resolveLabel';

function resolveOptionLabel( option ) {
	if ( '#text' === option?.nextSibling?.nodeName ) {
		return option.nextSibling.nodeValue;
	}

	return resolveLabel( option );
}

export default resolveOptionLabel;