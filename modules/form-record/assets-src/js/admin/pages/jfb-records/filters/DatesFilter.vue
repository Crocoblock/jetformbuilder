<template>
	<div class="wrapper">
		<DateFromFilter/>
		—
		<DateToFilter/>
	</div>
</template>

<script>
import DateFromFilter from './DateFromFilter';
import DateToFilter from './DateToFilter';

export default {
	name: 'DatesFilter',
	components: { DateToFilter, DateFromFilter },
};
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	gap: 1em;
	align-items: center;
}
</style>