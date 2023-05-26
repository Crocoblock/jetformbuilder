<template>
	<div :class="wrapperClasses">
		<span :class="dashIconClass"></span>
		<span class="jfb-icon-status--text" v-if="$slots.default">
			<slot></slot>
		</span>
		<div
			:class="tooltipClasses"
			v-if="help"
		>{{ help }}
		</div>
	</div>
</template>

<script>
const schema = {
	success: 'dashicons-yes-alt',
	warning: 'dashicons-warning',
	info: 'dashicons-info',
	pending: 'dashicons-hourglass',
	error: 'dashicons-dismiss',
};

export default {
	name: 'Tooltip',
	props: {
		type: {
			type: String,
			validator( value ) {
				return Object.keys( schema ).includes( value );
			},
			default: 'info',
		},
		help: {
			type: String,
		},
		position: {
			type: String,
			validator( value ) {
				return [ 'top-right', 'top-left' ].includes( value );
			},
			default: 'top-left',
		},
	},
	computed: {
		wrapperClasses() {
			return {
				'jfb-tooltip': true,
				'jfb-tooltip-has-text': !!this.$slots.default,
				'jfb-tooltip-has-help': !!this.help,
				[ 'jfb-tooltip-position--' + this.position ]: true,
			};
		},
		dashIconClass() {
			return [ 'dashicons', schema[ this.type ] ?? '' ];
		},
		tooltipClasses() {
			return {
				'cx-vui-tooltip': true,
				[ 'tooltip-position-' + this.position ]: true,
			};
		},
	},
};
</script>

<style scoped lang="scss">
.jfb-tooltip {
	position: relative;
	display: inline-block;

	&-has-help {
		cursor: pointer;
	}

	&-has-text {
		display: flex;
		column-gap: 0.5em;
		align-items: center;
	}

	&--text {
		text-overflow: ellipsis;
		overflow: hidden;
		padding: 0.1em 0;
	}

	.dashicons {
		&-dismiss {
			color: #ff4500;
		}

		&-warning {
			color: #ffa500;
		}

		&-yes-alt {
			color: #32cd32;
		}

		&-info {
			color: #90c6db;
		}

		&-hourglass {
			color: #b5b5b5;
		}
	}

	.cx-vui-tooltip {
		width: fit-content;
		bottom: calc(100% + 15px);
		box-sizing: border-box;
		pointer-events: none;
		transition: all 0.180s linear;
		opacity: 0;
		padding-left: 1em;
		padding-right: 1em;
		position: absolute;

		&.tooltip-position-top-right {
			right: -1.2em;

			&:after {
				right: 20px;
				left: unset;
			}
		}

		&.tooltip-position-top-left {
			left: -0.9em;

			&:after {
				left: 20px;
				right: unset;
			}
		}
	}

	&:hover {
		.cx-vui-tooltip {
			opacity: 1;

			&.tooltip-position-top-right {
				bottom: 100%;
			}

			&.tooltip-position-top-left {
				bottom: 100%;
			}
		}
	}

	&-position {
		&--top-right {
			flex-direction: row-reverse;
		}
	}
}
</style>