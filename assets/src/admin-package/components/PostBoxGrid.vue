<template>
	<div id="poststuff">
		<div id="post-body" class="metabox-holder columns-2">
			<div id="post-body-content" v-if="$slots.topBody">
				<slot name="topBody"></slot>
			</div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "PostBoxGrid",
	data: () => ( {
		containerIndex: 0,
	} ),
}
</script>

<style>

</style>