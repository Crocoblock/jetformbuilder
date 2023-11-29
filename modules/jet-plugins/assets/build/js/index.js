(
	() => {
		'use strict';
		const t = function ( t ) {
			      return 'string' != typeof t || '' === t ? (
				      console.error( 'The namespace must be a non-empty string.' ), !1
			      ) : !!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test( t ) || (
				      console.error(
					      'The namespace can only contain numbers, letters, dashes, periods, underscores and slashes.' ), !1
			      );
		      },
		      n = function ( t ) {
			      return 'string' != typeof t || '' === t ? (
				      console.error(
					      'The hook name must be a non-empty string.' ), !1
			      ) : /^__/.test( t ) ? (
				      console.error(
					      'The hook name cannot begin with `__`.' ), !1
			      ) : !!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test( t ) || (
				      console.error(
					      'The hook name can only contain numbers, letters, dashes, periods and underscores.' ), !1
			      );
		      },
		      e = function ( e, o ) {
			      return function ( i, r, s, c = 10 ) {
				      const l = e[ o ];
				      if ( !n( i ) ) {
					      return;
				      }
				      if ( !t( r ) ) {
					      return;
				      }
				      if ( 'function' != typeof s ) {
					      return void console.error(
						      'The hook callback must be a function.' );
				      }
				      if ( 'number' != typeof c ) {
					      return void console.error(
						      'If specified, the hook priority must be a number.' );
				      }
				      const a = { callback: s, priority: c, namespace: r };
				      if ( l[ i ] ) {
					      const t = l[ i ].handlers;
					      let n;
					      for ( n = t.length; n > 0 && !(
						      c >= t[ n - 1 ].priority
					      ); n-- ) {
						      ;
					      }
					      n === t.length ? t[ n ] = a : t.splice( n, 0,
						      a ), l.__current.forEach( (
						      t => {
							      t.name === i && t.currentIndex >= n &&
							      t.currentIndex++;
						      }
					      ) );
				      }
				      else {
					      l[ i ] = { handlers: [ a ], runs: 0 };
				      }
				      'hookAdded' !== i && e.doAction( 'hookAdded', i, r, s, c );
			      };
		      },
		      o = function ( e, o, i = !1 ) {
			      return function ( r, s ) {
				      const c = e[ o ];
				      if ( !n( r ) ) {
					      return;
				      }
				      if ( !i && !t( s ) ) {
					      return;
				      }
				      if ( !c[ r ] ) {
					      return 0;
				      }
				      let l = 0;
				      if ( i ) {
					      l = c[ r ].handlers.length, c[ r ] = {
						      runs: c[ r ].runs,
						      handlers: [],
					      };
				      }
				      else {
					      const t = c[ r ].handlers;
					      for ( let n = t.length - 1; n >=
					      0; n-- ) {
						      t[ n ].namespace === s && (
							      t.splice( n, 1 ), l++, c.__current.forEach( (
								      t => {
									      t.name === r && t.currentIndex >= n &&
									      t.currentIndex--;
								      }
							      ) )
						      );
					      }
				      }
				      return 'hookRemoved' !== r &&
				      e.doAction( 'hookRemoved', r, s ), l;
			      };
		      },
		      i = function ( t, n ) {
			      return function ( e, o ) {
				      const i = t[ n ];
				      return void 0 !== o ? e in i && i[ e ].handlers.some( (
					      t => t.namespace === o
				      ) ) : e in i;
			      };
		      },
		      r = function ( t, n, e = !1 ) {
			      return function ( o, ...i ) {
				      const r = t[ n ];
				      r[ o ] || (
					      r[ o ] = { handlers: [], runs: 0 }
				      ), r[ o ].runs++;
				      const s = r[ o ].handlers;
				      if ( !s || !s.length ) {
					      return e ? i[ 0 ] : void 0;
				      }
				      const c = { name: o, currentIndex: 0 };
				      for ( r.__current.push( c ); c.currentIndex <
				      s.length; ) {
					      const t = s[ c.currentIndex ].callback.apply( null,
						      i );
					      e && (
						      i[ 0 ] = t
					      ), c.currentIndex++;
				      }
				      return r.__current.pop(), e ? i[ 0 ] : void 0;
			      };
		      },
		      s = function ( t, n ) {
			      return function () {
				      var e;
				      const o = t[ n ];
				      return null !== (
					      e = o.__current[ o.__current.length - 1 ]?.name
				      ) && void 0 !== e ? e : null;
			      };
		      },
		      c = function ( t, n ) {
			      return function ( e ) {
				      const o = t[ n ];
				      return void 0 === e
				             ? void 0 !== o.__current[ 0 ]
				             : !!o.__current[ 0 ] && e === o.__current[ 0 ].name;
			      };
		      },
		      l = function ( t, e ) {
			      return function ( o ) {
				      const i = t[ e ];
				      if ( n( o ) ) {
					      return i[ o ] && i[ o ].runs
					             ? i[ o ].runs
					             : 0;
				      }
			      };
		      };

		class a {
			constructor() {
				this.actions = Object.create(
					null ), this.actions.__current = [], this.filters = Object.create(
					null ), this.filters.__current = [], this.addAction = e(
					this, 'actions' ), this.addFilter = e( this,
					'filters' ), this.removeAction = o( this,
					'actions' ), this.removeFilter = o( this,
					'filters' ), this.hasAction = i( this,
					'actions' ), this.hasFilter = i( this,
					'filters' ), this.removeAllActions = o( this, 'actions',
					!0 ), this.removeAllFilters = o( this, 'filters',
					!0 ), this.doAction = r( this,
					'actions' ), this.applyFilters = r( this, 'filters',
					!0 ), this.currentAction = s( this,
					'actions' ), this.currentFilter = s( this,
					'filters' ), this.doingAction = c( this,
					'actions' ), this.doingFilter = c( this,
					'filters' ), this.didAction = l( this,
					'actions' ), this.didFilter = l( this, 'filters' );
			}
		}

		const h           = function () {return new a;}, u = h(), {
			addAction: d,
			addFilter: f,
			removeAction: k,
			removeFilter: m,
			hasAction: g,
			hasFilter: p,
			removeAllActions: A,
			removeAllFilters: b,
			doAction: _,
			applyFilters: v,
			currentAction: y,
			currentFilter: F,
			doingAction: B,
			doingFilter: I,
			didAction: N,
			didFilter: x,
			actions: j,
			filters: w,
		}                 = u;
		window.JetPlugins = window.JetPlugins || new class {
			hooks;
			globalNamespace = 'jet-plugins';
			blocksConditions = {};

			constructor( t ) {this.hooks = t || h();}

			hookNameFromBlock( t ) {
				const n = this.getBlockName( t );
				return n
				       ? `${ this.globalNamespace }.frontend.element-ready.${ n }`
				       : '';
			}

			getBlockName( t ) {
				return 'string' == typeof t
				       ? t.replace( '/', '.' )
				       : this.getBlockName( t?.dataset?.isBlock || '' );
			}

			init( t, n ) {
				if ( n && n.length && this.bulkBlocksInit( n ), (
					t = t || jQuery( 'body' )
				) && t.length ) {
					let n = t.find( '[data-is-block*="/"]' );
					n && n.length && n.each( (
						( t, n ) => {this.initBlock( n );}
					) );
				}
			}

			isBlockRequiresInit( t ) {
				let n   = void 0 === t.dataset.jetInited;
				const e = this.getBlockName( t );
				return n && this.blocksConditions[ e ] && (
					n = this.blocksConditions[ e ]( t )
				), n;
			}

			initBlock( t, n ) {
				n       = n || !1;
				const e = this.hookNameFromBlock( t );
				if ( e && this.hasHandlers( e ) ) {
					let o = n;
					o || (
						o = this.isBlockRequiresInit( t )
					), o && (
						this.hooks.doAction( e,
							jQuery( t ) ), t.dataset.jetInited = !0
					);
				}
			}

			hasHandlers( t ) {
				return !!this.hooks.actions[ t ] && !(
					!this.hooks.actions[ t ].handlers ||
					!this.hooks.actions[ t ].handlers.length
				);
			}

			registerBlockHandlers( t ) {
				const n = this.getBlockName( t.block );
				this.hooks.addAction( this.hookNameFromBlock( n ),
					`${ this.globalNamespace }/${ t.block }`,
					t.callback ), t.condition && "function" ==
				typeof t.condition && (
					this.blocksConditions[ n ] = t.condition
				)
			}

			bulkBlocksInit( t ) {
				for ( var n = 0; n < t.length; n++ ) {
					this.registerBlockHandlers(
						t[ n ] )
				}
			}
		}
	}
)();