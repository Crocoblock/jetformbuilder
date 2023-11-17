const {
	      addQueryArgs,
      } = wp.url;

function getPagesPath( search ) {
	return addQueryArgs(
		'/wp/v2/pages',
		{
			search,
		},
	);
}

export default getPagesPath;