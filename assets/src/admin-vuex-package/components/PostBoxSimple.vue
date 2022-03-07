<template>
	<div class="jfb-post-box">
		<div class="jfb-post-box--content" v-if="$slots.default">
			<slot></slot>
		</div>
		<div class="jfb-post-box--content" v-else>
			<slot name="before"></slot>
			<PostBoxSkeleton
				:title="title"
				:slug="slug"
			>
				<EntriesTable
					v-if="'table' === renderType"
					:scope="slug"
				/>
				<EntriesList
					v-else-if="'list' === renderType"
					:scope="slug"
				/>
				<div
					id="misc-publishing-actions"
					v-else
				>
					<div
						class="misc-pub-section"
						v-for="(value, name) in list"
						:key="name"
					>
						{{ name }}: <strong>{{ value }}</strong>
					</div>
				</div>
			</PostBoxSkeleton>
			<slot name="after"></slot>
		</div>
	</div>
</template>

<script>
import PostBoxSkeleton from './PostBoxSkeleton';
import EntriesTable from './EntriesTable';
import EntriesList from './EntriesList';


export default {
	name: 'PostBoxSimple',
	props: [
		'title',
		'slug',
		'list',
		'renderType',
	],
	components: {
		EntriesTable,
		EntriesList,
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