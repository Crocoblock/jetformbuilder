<template>
	<div :class="{
		'cx-vui-panel': withPanel,
		'cx-vui-collapse-mini--disabled': disabled,
		'cx-vui-collapse-mini__item': true,
		'cx-vui-collapse-mini__item--active': isActive
	}">
		<div
			class="cx-vui-collapse-mini__header"
			@click="collapse"
		>
			<div class="cx-vui-collapse-mini__header-label">
				<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M14 13.9999L14 -0.00012207L0 -0.000121458L6.11959e-07 13.9999L14 13.9999Z"
						  fill="white"></path>
					<path d="M5.32911 1L11 7L5.32911 13L4 11.5938L8.34177 7L4 2.40625L5.32911 1Z" fill="#007CBA"></path>
				</svg>
				{{ label }}
			</div>
			<div
				v-if="icon"
				class="cx-vui-collapse-mini__header-desc"
			>
				<component
					v-if="'object' === typeof icon"
					v-bind:is="icon"
				/>
			</div>
			<div
				v-else-if="desc"
				class="cx-vui-collapse-mini__header-desc"
			>
				{{ desc }}
			</div>
			<div
				v-if="$slots.description"
				class="cx-vui-collapse-mini__header-custom-description"
			>
				<slot name="description"></slot>
			</div>
		</div>
		<template v-if="!disabled">
			<template v-if="this.$slots.default">
				<div
					v-show="isActive"
					class="cx-vui-collapse-mini__content"
				>
					<slot></slot>
				</div>
			</template>
			<template v-else>
				<slot name="custom" :state="{ isActive }"></slot>
			</template>
		</template>
	</div>
</template>

<script>

export default {
	name: 'cx-vui-collapse-mini',
	props: {
		withPanel: {
			type: Boolean,
			default: false,
		},
		initialActive: {
			type: Boolean,
			default: false,
		},
		label: {
			type: String,
			default: 'Collapse Mini',
		},
		desc: {
			type: String,
			default: '',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		icon: {
			type: [ Object, String ],
			default: '',
		}
	},
	data() {
		return {
			isActive: false,
		};
	},
	created() {
		this.isActive = this.initialActive;
	},
	methods: {
		collapse() {
			if ( this.disabled ) {
				return;
			}
			this.isActive = ! this.isActive;
			this.$emit( 'change', this.isActive );
		},
	},
};
</script>

<style lang="scss">
.cx-vui-collapse-mini {
	&__wrap {
		padding: 0 0 20px;
	}

	&__item {
		&:first-child {
			border-top: 1px solid #ECECEC;
		}

		&:last-child {
			margin-bottom: unset;
		}

		&--active svg {
			transform: rotate(90deg);
		}

		border-bottom: 1px solid #ECECEC;
	}

	&__header {
		padding: 1.2rem;
		display: flex;
		align-items: center;
		cursor: pointer;
		column-gap: 1em;

		&-label {
			font-weight: 500;
			font-size: 15px;
			line-height: 23px;
			color: #007CBA;
			display: flex;
			align-items: center;
		}

		&-desc {
			font-size: 15px;
			line-height: 23px;
			color: #7B7E81;
		}

		&-label svg {
			margin: -1px 8px 0 0;
			transition: 0.3s;
		}
	}

	&--disabled {
		opacity: 0.5;

		.cx-vui-collapse-mini__header {
			cursor: not-allowed;
		}
	}

	&__content {
		padding: 0 1.5rem 1.5rem;
	}
}
</style>