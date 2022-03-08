<template>
	<div class="wrap">
		<h1 class="wp-heading-inline">{{ values.title }}</h1>
		<PostBoxGrid
			:containers="values.containers"
		>
			<template #header-actions-form-fields>
				<cx-vui-switcher
					:wrapper-css="[ 'equalwidth' ]"
					:label="'Edit table'"
					:value="isEditedTable"
					@input="toggleEditTable"
				></cx-vui-switcher>
			</template>
		</PostBoxGrid>
	</div>
</template>

<script>
const {
	PostBoxGrid,
} = JetFBComponents;

const { GetIncoming } = JetFBMixins;

const {
	mapGetters,
	mapMutations
} = Vuex;

export default {
	name: 'jfb-records-single',
	components: {
		PostBoxGrid,
	},
	data() {
		return {
			values: this.getIncoming(),
		};
	},
	mixins: [ GetIncoming ],
	computed: {
		...mapGetters( 'scope-form-fields', [
			'isEditedTable'
		] )
	},
	methods: {
		...mapMutations( 'scope-form-fields', [
			'toggleEditTable'
		] )
	},
};
</script>

<style>

.cell--field_type.cell--field_type.cell--field_type {
	flex: 0.2;
}

.cell--name.cell--name.cell--name {
	flex: 0.5;
}

</style>