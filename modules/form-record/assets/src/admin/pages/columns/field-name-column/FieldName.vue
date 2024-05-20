<template>
	<div class="field-name-template">
		<span
			v-if="value.label"
			class="field-name-template--label"
		>
			<b>{{ value.label }}</b>
		</span>
		<span class="field-name-template--name">
			<code>{{ value.name }}</code>
		</span>
	</div>
</template>

<script>
export default {
	name: 'name--item',
	props: [ 'value', 'full-entry', 'entry-id' ],
};
</script>

<style>
.field-name-template {
	display: flex;
	gap: 0.5em;
	flex-direction: column;
}
</style>