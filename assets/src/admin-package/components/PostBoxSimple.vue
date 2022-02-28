<template>
	<PostBoxSkeleton
		:title="title"
		:slug="slug"
	>
		<div id="misc-publishing-actions">
			<div
				class="misc-pub-section"
				v-for="(value, name) in values"
				:key="name"
			>
				<div v-if="$scopedSlots.row">
					<slot name="row" v-bind="{ name, value }"></slot>
				</div>
				<div v-else>
					{{ name }}: <strong>{{ value }}</strong>
				</div>
			</div>
		</div>
	</PostBoxSkeleton>
</template>

<script>
import PostBoxSkeleton from './PostBoxSkeleton';
import GetColumnComponent from '../mixins/GetColumnComponent';

export default {
	name: 'PostBoxSimple',
	props: {
		title: String,
		slug: String,
		values: Object,
	},
	mixins: [ GetColumnComponent ],
	components: {
		PostBoxSkeleton,
	},
	methods: {
		getComponent(  ) {

		}
	},
};
</script>

<style scoped>

</style>