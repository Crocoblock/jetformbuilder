<template>
	<div id="poststuff">
		<div id="post-body" :class="bodyClasses">
			<div id="post-body-content" v-if="$slots.topBody">
				<slot name="topBody"></slot>
			</div>
			<PostBoxContainer
				v-for="({ wrap_id, id, classes, boxes }) in containers"
				:key="wrap_id"
				:wrap-id="wrap_id"
				:id="id"
				:classes="classes"
			>
				<PostBoxSimple
					v-for="({ slug, title, list, render_type = false }) in boxes"
					:key="slug"
					:slug="slug"
					:title="title"
					:list="list"
					:render-type="render_type"
				>
					<template #default>
						<slot :name="'body-' + slug" v-bind="{ list }"></slot>
					</template>
					<template #before>
						<slot :name="'before-' + slug" v-bind="{ list }"></slot>
					</template>
					<template #after>
						<slot :name="'after-' + slug" v-bind="{ list }"></slot>
					</template>
				</PostBoxSimple>
			</PostBoxContainer>
		</div>
	</div>
</template>

<script>
import PostBoxContainer from './PostBoxContainer';
import PostBoxSimple from './PostBoxSimple';

export default {
	name: 'PostBoxGrid',
	props: {
		containers: Array,
	},
	components: {
		PostBoxContainer,
		PostBoxSimple,
	},
	computed: {
		bodyClasses() {
			return {
				'metabox-holder': true,
				[ 'columns-' + this.containers.length ]: true,
			};
		},
	},
};
</script>

<style>

</style>