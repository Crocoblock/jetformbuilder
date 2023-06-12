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
				<template v-if="stateType">
					<Tooltip
						:icon="stateType"
						:position="'top-right'"
					>
						<template #help>{{ stateHelp }}</template>
						<template #default>
							<slot name="label"></slot>
						</template>
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
			<div
				v-if="$slots.actions"
				class="cx-vui-component__control-actions"
			>
				<slot name="actions"></slot>
			</div>
		</div>
	</div>
</template>

<script>

import Tooltip from './Tooltip';

const isCorrectType = value => [ 'warning-danger', 'warning', 'loading', '' ].includes( value );

export default {
	name: 'RowWrapper',
	components: { Tooltip },
	props: {
		elementId: {
			type: String,
		},
		state: {
			type: [ String, Object ],
			validator( value ) {
				if ( 'string' === typeof value ) {
					return isCorrectType( value );
				}
				return isCorrectType( value.type );
			},
			default: '',
		},
		/**
		 * Possible values:
		 * 'size--1-x-2': true,
		 * 'padding-side-unset': true,
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
				[ 'cx-vui-component--is-' + this.stateType ]: this.stateType,
				...this.classNames,
			};
		},
		stateType() {
			return 'string' === typeof this.state ? this.state : this.state.type;
		},
		stateHelp() {
			return 'string' === typeof this.state ? '' : this.state.message;
		},
	},
	provide() {
		return {
			elementId: this.elementIdData,
			stateType: () => this.stateType,
		};
	},
};
</script>

<style lang="scss" scoped>

.size--1-x-2 {
	.cx-vui-component__meta {
		flex: 1;
	}

	.cx-vui-component__control {
		flex: 2;
	}
}

.padding-side-unset.cx-vui-component {
	padding-left: unset;
	padding-right: unset;
}

.cx-vui-component__control-actions {
	display: flex;
	justify-content: flex-end;
	gap: 1em;
	margin-top: 0.5em;
}
</style>