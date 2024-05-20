<template>
	<span class="field-type-template">
		<span
			class="field-type-template--icon"
			v-html="value.icon"
			:title="value.title"
		/>
	</span>
</template>

<script>
export default {
	name: 'field_type--item',
	props: [ 'value', 'full-entry', 'entry-id' ],
};
</script>

<style lang="scss">
.field-type-template {
	&--icon > svg {
		width: 24px;
		height: 24px;
	}
}
</style>