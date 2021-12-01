<template>
	<DropdownMenu
		v-model="showDropdown"
		:interactive="true"
		:right="false"
	>
		<cx-vui-button
			button-style="link"
			size="mini"
		>
			<template #label>
				<span
					class="dashicons dashicons-ellipsis"
				></span>
			</template>
		</cx-vui-button>
		<template #dropdown>
			<div class="jfb-dropdown">
				<a
					class="jfb-dropdown-item"
					href="javascript:void(0)"
					v-for="( action, actionID ) in parsedJson"
					:key="actionID"
					@click="run( actionID )"
				>
					{{ action.label }}
				</a>
			</div>
		</template>
	</DropdownMenu>
</template>

<script>
import DropdownMenu from '@innologica/vue-dropdown-menu';
import ParseIncomingValueMixin from '../ParseIncomingValueMixin';

window.jfbEventBus = window.jfbEventBus || new Vue();

export default {
	name: 'actions--item',
	props: [ 'value', 'full-entry', 'conditions' ],
	components: { DropdownMenu },
	mixins: [ ParseIncomingValueMixin ],
	data() {
		return {
			showDropdown: false,
		};
	},
	methods: {
		getPayload( actionID ) {
			return this.parsedJson[ actionID ]?.payload || {};
		},
		run( actionID ) {
			jfbEventBus.$emit(
				`click-${ actionID }`,
				this.getPayload( actionID ),
				this.fullEntry || {},
			);
		},
	},
};
</script>

<style lang="scss">

.cx-vui-button--size-mini {
	padding: 0 0.4em 0 1em;
}

.jfb-dropdown {
	position: absolute;
	display: flex;
	padding: 0.6em 0;
	background-color: aliceblue;
	flex-direction: column;
	border-radius: 4px;
	font-size: 1.2em;
	border: 1px solid #ccc;
	z-index: 1;
	transform: translate(-100px, 5px);

	&-item {
		display: block;
		padding: 0.5em 0.3em;
		text-decoration: none;

		&:hover {
			background-color: #FFFFFF;
		}

		&:not(:first-child) {
			border-top: 1px solid #f5f5f5;
		}
	}
}

</style>