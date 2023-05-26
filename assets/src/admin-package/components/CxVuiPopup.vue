<template>
	<div :class="className">
		<div
			class="cx-vui-popup__overlay"
			@click="$emit( 'close' )"
		></div>
		<div class="cx-vui-popup__body">
			<div class="cx-vui-popup__header" v-if="$slots.title">
				<slot name="title"></slot>
				<template v-if="$slots.close">
					<slot name="close"></slot>
				</template>
				<div
					v-else
					class="cx-vui-popup__close"
					@click="$emit( 'close' )"
				>
					<svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12 3.00671L8.00671 7L12 10.9933L10.9933 12L7 8.00671L3.00671 12L2 10.9933L5.99329 7L2 3.00671L3.00671 2L7 5.99329L10.9933 2L12 3.00671Z"/>
					</svg>
				</div>
			</div>
			<div class="cx-vui-popup__content">
				<slot name="content"></slot>
			</div>
			<div class="cx-vui-popup__footer" v-if="$slots.footer">
				<slot name="footer"></slot>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CxVuiPopup',
	props: {
		/**
		 * Possible values:
		 * 'sticky-footer': true,
		 */
		classNames: {
			type: Object,
			default: () => (
				{}
			),
		},
		stickyFooter: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		className() {
			return {
				'cx-vui-popup': true,
				...this.classNames,
			};
		},
	},
};
</script>

<style scoped lang="scss">
.cx-vui-popup {
	&__close {
		position: unset;
	}

	&__header {
		display: flex;
		justify-content: space-between;
	}

	&.sticky-header, &.sticky-footer {
		.cx-vui-popup__body {
			max-height: 80vh;
			overflow-y: auto;
		}
	}

	&.sticky-header {
		.cx-vui-popup__header {
			position: sticky;
			top: 0;
			background-color: white;
			padding-top: 20px;
			z-index: 1;
			border-bottom: 1px solid #ECECEC;
		}

		.cx-vui-popup__body {
			padding-top: 0;
		}
	}

	&.sticky-footer {
		.cx-vui-popup__body {
			padding-bottom: 0;
		}

		.cx-vui-popup__content {
			padding-bottom: 40px;
		}

		.cx-vui-popup__footer {
			position: sticky;
			bottom: 0;
			background-color: white;
			padding-bottom: 20px;
			border-top: 1px solid #ECECEC;
		}
	}
}

</style>