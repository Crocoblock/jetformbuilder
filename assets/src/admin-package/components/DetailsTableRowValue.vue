<template>
	<ul :class="rootClasses" v-show="! this.withIndent">
		<li
			v-for="( itemValue, itemName ) in value"
			:key="itemName"
			class="jfb-recursive-details-row"
			v-if="isHiddenLevel( itemName )"
		>
			<template v-if="isSkipLevel( itemName )">
				<DetailsTableRowValue
					:value="itemValue"
					:columns="getChildren( itemName )"
				/>
			</template>
			<template v-else>
				<span :class="itemClasses( true )" v-if="isObject( itemValue )">
					<span
						class="jfb-recursive-details-item--heading"
						@click="toggleNext( itemName )"
					>
						{{ getItemLabel( itemName ) }}
						<span :class="arrowClasses( itemName )"></span>
					</span>
					<span class="jfb-recursive-details-item--content">
						<transition name="fade">
							<DetailsTableRowValue
								:value="itemValue"
								:with-indent="true"
								v-show="isShow( itemName )"
								:columns="getChildren( itemName )"
							/>
						</transition>
					</span>
				</span>
				<span :class="itemClasses( false )" v-else>
					<span class="jfb-recursive-details-item--heading">{{ getItemLabel( itemName ) }}</span>&nbsp;
					<span class="jfb-recursive-details-item--content">{{ itemValue }}</span>
				</span>
			</template>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'DetailsTableRowValue',
	props: {
		value: Object,
		withIndent: {
			type: Boolean,
			default: false,
		},
		columns: {
			type: Object,
			default() {
				return {};
			},
		},
	},
	data() {
		return {
			showNext: {},
		};
	},
	computed: {
		rootClasses() {
			return {
				'jfb-recursive-details': true,
				'jfb-recursive-details--indent': this.withIndent,
			};
		},
	},
	methods: {
		getChildren( columnName ) {
			return (
				this.columns[ columnName ]?.children || []
			);
		},
		getItemLabel( columnName ) {
			return this.columns[ columnName ] ? this.columns[ columnName ].label : columnName;
		},
		isObject( itemValue ) {
			return 'object' === typeof itemValue;
		},
		toggleNext( name ) {
			const prev = this.showNext[ name ] || false;

			this.$set( this.showNext, name, ! prev );
		},
		isShow( name ) {
			return 'undefined' === this.showNext[ name ] ? true : this.showNext[ name ];
		},
		itemClasses( isObject = true ) {
			return {
				'jfb-recursive-details-item': true,
				'jfb-recursive-details-item-with-children': isObject,
				'jfb-recursive-details-item-without-children': ! isObject,
			};
		},
		arrowClasses( columnName ) {
			return {
				dashicons: true,
				'dashicons-arrow-down-alt2': ! this.isShow( columnName ),
				'dashicons-arrow-up-alt2': this.isShow( columnName ),
			};
		},
		isSkipLevel( columnName ) {
			return this.columns[ columnName ]?.skip_level;
		},
		isHiddenLevel( columnName ) {
			return ( ! this.columns[ columnName ]?.hide );
		},
	},
};
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
	transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */
{
	opacity: 0;
}

.jfb-recursive-details {
	&:not( &--indent ) {
		margin-top: unset;
	}

	&--indent {
		margin-left: 1.5em;
		margin-top: 0.5em;
	}

	&-row {
		&:not( :last-child ) {
			margin-bottom: 0.5em;
			padding-bottom: 0.5em;
		}
	}


	&-item {
		&--content {
			border-bottom: 1px solid #ccc;
		}

		&-without-children > &--heading::after {
			content: ':';
		}

		&-with-children > &--heading {
			cursor: pointer;

			&:hover {
				color: #2271b1;
				border-bottom-color: #2271b1;
			}
		}
	}
}
</style>