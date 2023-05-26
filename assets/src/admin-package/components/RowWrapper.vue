<template>
	<div :class="className">
		<div
			v-if="$slots.meta"
			class="cx-vui-component__meta"
		>
			<slot name="meta"></slot>
		</div>
		<div
			v-else-if="$slots.label || $slots.description"
			class="cx-vui-component__meta"
		>
			<label
				class="cx-vui-component__label"
				v-if="$slots.label"
				:for="elementIdData"
			>
				<template v-if="state">
					<Tooltip
						:type="isInvalid ? 'warning' : ''"
						:help="stateHelp"
						:position="'top-right'"
					>
						<slot name="label"></slot>
					</Tooltip>
				</template>
				<template v-else>
					<slot name="label"></slot>
				</template>
			</label>
			<div
				class="cx-vui-component__desc"
				v-if="$slots.description"
			>
				<slot name="description"></slot>
			</div>
		</div>
		<div class="cx-vui-component__control">
			<slot></slot>
		</div>
	</div>
</template>

<script>

import Tooltip from './Tooltip';

export default {
	name: 'RowWrapper',
	components: { Tooltip },
	props: {
		elementId: {
			type: String,
		},
		state: {
			type: String,
			validator( value ) {
				return [ 'invalid', '' ].includes( value );
			},
		},
		stateHelp: {
			type: String,
		},
		/**
		 * Possible values:
		 * 'size--1-x-2': true
		 */
		classNames: {
			type: Object,
			default: () => (
				{ 'cx-vui-component--equalwidth': true }
			),
		},
	},
	data() {
		return {
			elementIdData: `cx_${ this.elementId }`,
		};
	},
	computed: {
		className() {
			return {
				'cx-vui-component': true,
				[ 'cx-vui-component--is-' + this.state ]: this.state,
				...this.classNames,
			};
		},
		isInvalid() {
			return 'invalid' === this.state;
		},
	},
	provide() {
		return {
			elementId: this.elementIdData,
			isInvalid: () => this.isInvalid,
		};
	},
};
</script>

<style lang="scss" scoped>
.cx-vui-component {
	gap: 1em;
}

.size--1-x-2 {
	.cx-vui-component__meta {
		flex: 1;
	}

	.cx-vui-component__control {
		flex: 2;
	}
}
</style>