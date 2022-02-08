<template>
	<div class="jfb-actions">
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

<script>
import ParseIncomingValueMixin from '../../mixins/ParseIncomingValueMixin';

window.jfbEventBus = window.jfbEventBus || new Vue( {} );

export default {
	name: 'actions--item',
	props: [ 'value', 'full-entry', 'entry-id' ],
	components: {},
	mixins: [ ParseIncomingValueMixin ],
	methods: {
		getPayload( actionID ) {
			return this.parsedJson[ actionID ]?.payload || {};
		},
		run( actionID ) {
			jfbEventBus.$emit(
				`click-${ actionID }`,
				this.getPayload( actionID ),
				this.fullEntry || {},
				this.entryId,
			);
		},
	},
};
</script>

<style lang="scss">

.jfb-actions {
	display: flex;
	flex-direction: column;
	row-gap: 10px;
	a.jfb-dropdown-item {
		padding: 0.5em 0;
		text-decoration: none;
		&:hover {
			text-decoration: underline;
		}
	}
	a.jfb-dropdown-item:not(:first-child) {
		border-top: 1px solid #cccccc;
	}
}


</style>