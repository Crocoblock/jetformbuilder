<template>
	<div class="jfb-icon-status">
		<span :class="dashIconClass"></span>
		<div
			:class="tooltipClasses"
		>{{ value.help }}</div>
	</div>
</template>

<script>
export default {
	name: 'icon_status--item',
	props: [ 'value', 'full-entry', 'entry-id' ],
	computed: {
		helpPosition() {
			return this.value?.help_position ?? 'top-left';
		},
		dashIconClass() {
			const classes = [ 'dashicons' ];
			switch ( this.value.type ) {
				case 'success':
					classes.push( 'dashicons-yes-alt' );
					break;
				case 'warning':
					classes.push( 'dashicons-warning' );
					break;
				default:
					classes.push( 'dashicons-dismiss' );
					break;
			}

			return classes;
		},
		tooltipClasses() {
			return {
				'cx-vui-tooltip': true,
				[ 'tooltip-position-' + this.helpPosition ]: true,
			};
		},
	}
};
</script>

<style lang="scss">
.cx-vue-list-table .list-table-item__cell.list-table-item__cell.cell-type--icon_status {
	overflow: visible;
}

.jfb-icon-status {
	position: relative;
	cursor: pointer;
	display: inline-block;

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

		&.tooltip-position-top-left {
			right: -1.2em;

			&:after {
				right: 20px;
				left: unset;
			}
		}
	}

	&:hover {
		.cx-vui-tooltip {
			opacity: 1;

			&.tooltip-position-top-left {
				bottom: 100%;
			}
		}
	}

	& > span {
		font-size: 1.5em;
	}
}

</style>