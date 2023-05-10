import useBlockAttributes from '../hooks/useBlockAttributes';

const {
	      __,
      } = wp.i18n;

const {
	    ToolbarButton,
    } = wp.components;

const {
	      BlockControls,
      } = wp.blockEditor;

function BlockRequired() {
	const [
		      attributes,
		      setAttributes,
	      ] = useBlockAttributes();

	return <BlockControls group="block">
		<ToolbarButton
			icon={ <svg viewBox="0 0 32 32" version="1.1"
			            xmlns="http://www.w3.org/2000/svg">
				<path
					d="M28.75 21.918l-10.25-5.918 10.25-5.917c0.377-0.22 0.625-0.623 0.625-1.083 0-0.691-0.56-1.25-1.25-1.25-0.23 0-0.446 0.062-0.631 0.171l0.006-0.003-10.25 5.918v-11.835c0-0.69-0.56-1.25-1.25-1.25s-1.25 0.56-1.25 1.25v0 11.835l-10.249-5.918c-0.179-0.105-0.395-0.167-0.625-0.167-0.691 0-1.25 0.56-1.25 1.25 0 0.46 0.249 0.863 0.619 1.080l0.006 0.003 10.249 5.917-10.249 5.918c-0.381 0.219-0.633 0.623-0.633 1.087 0 0.69 0.559 1.25 1.25 1.25 0.234 0 0.452-0.064 0.639-0.176l-0.006 0.003 10.249-5.917v11.835c0 0.69 0.56 1.25 1.25 1.25s1.25-0.56 1.25-1.25v0-11.835l10.25 5.917c0.177 0.102 0.39 0.163 0.616 0.163 0.69 0 1.25-0.559 1.25-1.25 0-0.456-0.245-0.856-0.61-1.074l-0.006-0.003z"/>
			</svg> }
			title={ attributes.required
			        ? __(
					'Click to make this field optional',
					'jet-form-builder',
				)
			        : __(
					'Click to make this field required',
					'jet-form-builder',
				)
			}
			onClick={ () => setAttributes( {
				required: !attributes.required,
			} ) }
			isActive={ attributes.required }
		/>
	</BlockControls>;
}

export default BlockRequired;