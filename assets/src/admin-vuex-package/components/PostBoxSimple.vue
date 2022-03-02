<template>
	<PostBoxSkeleton
		:title="title"
		:slug="slug"
	>
		<div id="misc-publishing-actions" v-if="! isTable">
			<div
				class="misc-pub-section"
				v-for="(value, name) in list"
				:key="name"
			>
				{{ name }}: <strong>{{ value }}</strong>
			</div>
		</div>
		<EntriesTable
			v-else
			:scope="slug"
		/>
	</PostBoxSkeleton>
</template>

<script>
import PostBoxSkeleton from './PostBoxSkeleton';
import EntriesTable from './EntriesTable';

export default {
	name: 'PostBoxSimple',
	props: {
		title: String,
		slug: String,
		list: Object|Array,
		isTable: {
			type: Boolean,
			default: false,
		},
	},
	components: {
		EntriesTable,
		PostBoxSkeleton,
	},
};
</script>

<style>

.misc-pub-section {
	border-bottom: 1px solid #ececec;
}

.misc-pub-section:last-child {
	border-bottom: unset;
}

</style>