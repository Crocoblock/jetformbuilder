<template>
	<div class="jfb-list-components">
		<div
			v-for="( component, index ) in components"
			:key="'entry_' + index"
			class="jfb-list-components-item"
		>
			<keep-alive>
				<component
					v-bind:is="component"
					:scope="scope"
				/>
			</keep-alive>
		</div>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "ListComponents",
	props: {
		components: Array,
		scope: String,
	},
}
</script>

<style>

</style>