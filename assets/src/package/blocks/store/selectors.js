const selectors = {
	getBlocks( state ) {
		return state.blocks;
	},
	getBlockMap( state ) {
		return state.blockMap;
	},
	getFields(
		state,
		{
			withInner = true,
			currentId = false,
		},
	) {
		const fields = [];

		const iterateFields = blocks => {
			for ( const block of blocks ) {
				if ( block.fields?.length && block.clientId !== currentId ) {
					fields.push( ...block.fields );
				}

				if ( !withInner || !block.innerBlocks?.length ) {
					continue;
				}

				iterateFields( block.innerBlocks );
			}
		};

		iterateFields( state.blocks );

		return fields;
	},
	isExecuted( state ) {
		return state.executed;
	},
	isRecentlyAdded( state, clientId ) {
		return -1 !== state.recentlyAdded.indexOf( clientId );
	},
	getUniqueNames( state, clientId ) {
		const currentBlock = state.blockMap[ clientId ] ?? false;

		if ( !currentBlock ) {
			return {
				hasChanged: false,
			};
		}

		let hasChanged = false;

		const names = currentBlock?.fields?.map?.( ( { value } ) => value ) ??
			[];
		const scope = currentBlock.hasOwnProperty( 'parentBlock' )
		              ? currentBlock.parentBlock.innerBlocks
		              : state.blocks;

		const walkerFields = ( fields ) => {
			for ( const field of fields ) {
				const nameIndex = names.indexOf( field.value );

				if ( -1 === nameIndex ) {
					continue;
				}

				if ( 'field_name' === field.value ) {
					hasChanged = true;
					continue;
				}

				names[ nameIndex ] = `${ names[ nameIndex ] }_copy`;
				hasChanged         = true;
				walkerFields( fields );
			}
		};

		for ( const block of scope ) {
			if ( clientId === block.clientId ) {
				continue;
			}
			walkerFields( block?.fields ?? [] );
		}

		return {
			hasChanged,
			names: names.join( '|' ),
		};
	},
	getSanitizedAttributes( state, attrs, { name: type } = {} ) {
		for ( const attrsKey in attrs ) {
			if ( !attrs.hasOwnProperty( attrsKey ) ) {
				continue;
			}

			const sanitizers = (
				state.sanitizers?.[ type ]?.[ attrsKey ] ??
				state.sanitizers?.[ attrsKey ] ??
				false
			);

			if ( !sanitizers?.length ) {
				continue;
			}

			for ( const sanitizer of sanitizers ) {
				// eslint-disable-next-line max-depth
				if ( 'function' !== typeof sanitizer ) {
					continue;
				}
				attrs[ attrsKey ] = sanitizer( attrs[ attrsKey ] );
			}
		}

		return attrs;
	},
	isUniqueName( state, clientId ) {
		const { hasChanged } = selectors.getUniqueNames( state, clientId );

		return !hasChanged;
	},
	/**
	 * @since 3.1.0
	 *
	 * @param  state
	 * @param  blockId {String} Block clientId or name
	 * @return {*}
	 */
	getBlock( state, blockId ) {
		return state.blocks.find( ( { name, clientId } ) => (
			[ name, clientId ].includes( blockId )
		) );
	},
	getBlockByName( state, fieldName ) {
		if ( !fieldName ) {
			return false;
		}

		const iterateFields = blocks => {
			for ( const block of blocks ) {
				if ( block.fields.some(
					( { value } ) => value === fieldName,
				) ) {
					return block;
				}

				if ( !block.innerBlocks?.length ) {
					continue;
				}

				iterateFields( block.innerBlocks );
			}
		};

		iterateFields( state.blocks );

		return false;
	},
	getBlockNameByName( state, fieldName ) {
		const block = selectors.getBlockByName( state, fieldName );

		return block?.name ?? '';
	},
	getBlockById( state, clientId ) {
		return state.blockMap[ clientId ] ?? false;
	},
};

export default {
	...selectors,
};