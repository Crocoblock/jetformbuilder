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
					v-for="({ id, title, values }) in boxes"
					:key="id"
					:slug="id"
					:title="title"
					:values="values"
				></PostBoxSimple>
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
	data() {
		return {};
	},
	created() {

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