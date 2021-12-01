<template>
	<DropdownMenu
		v-model="showDropdown"
		:interactive="true"
	>
		<span
			class="dashicons dashicons-ellipsis"
		></span>
		<template #dropdown>
			<div class="jfb-dropdown">
				<a
					class="jfb-dropdown-item"
					href="javascript:void(0)"
					v-for="( action, actionID ) in parsedJson"
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
	props: [ 'value', 'full-entry' ],
	components: { DropdownMenu },
	mixins: [ ParseIncomingValueMixin ],
	data() {
		return {
			showDropdown: false,
		};
	},
	methods: {
		run( actionID ) {
			jfbEventBus.$emit(
				`click-${ actionID }`,
				this.parsedJson[ actionID ]?.payload || {},
				this.fullEntry || {},
			);
		},
	},
};
</script>

<style lang="scss">

.jfb-dropdown {
	position: absolute;
	display: flex;
	padding: 0.6em 0;
	background-color: aliceblue;
	flex-direction: column;
	border-radius: 4px;
	font-size: 1.2em;
	border: 1px solid #ccc;

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