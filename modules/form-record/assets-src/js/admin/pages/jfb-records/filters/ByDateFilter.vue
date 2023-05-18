<template>
<div>
	<cx-vui-select
		:options-list="filter.options || []"
		:wrapper-css="[ 'equalwidth' ]"
		:value="filter.selected"
		:placeholder="label( 'filter_form_title' )"
		class="jet-fb-filter-form-select"
		@input="onChangeFilter"
	></cx-vui-select>
</div>
</template>

<script>
export default {
	name: 'ByDateFilter',
};
</script>

<style scoped>

</style>