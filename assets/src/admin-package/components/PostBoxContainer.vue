<template>
	<div
		:id="'postbox-container-' + currentIndex"
		class="postbox-container"
	>
		<div :id="containerId" class="meta-box-sortables ui-sortable">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "PostBoxContainer",
	data: () => ( {
		currentIndex: 0,
	} ),
	created() {
		this.currentIndex = ++this.$parent.containerIndex;
	},
	computed: {
		containerId() {
			if ( 1 !== this.currentIndex ) {
				return 'normal-sortables';
			} else {
				return 'side-sortables';
			}
		}
	}
}
</script>

<style>

</style>