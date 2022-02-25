<template>
	<div
		:id="wrapId"
		class="postbox-container"
	>
		<div :id="id" :class="containerClasses">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "PostBoxContainer",
	props: {
		wrapId: String,
		id: String,
		classes: Array
	},
	computed: {
		containerClasses() {
			const classes = {};

			for ( const classItem of this.classes ) {
				classes[ classItem ] = true;
			}

			return classes;
		}
	}
}
</script>

<style>

</style>