const {
	      apiFetch,
      } = wp;

async function fetchPages( params ) {
	const pages = await apiFetch( params );

	return pages.map( ( { title, id } ) => (
		{ value: id, label: title.rendered }
	) );
}

export default fetchPages;