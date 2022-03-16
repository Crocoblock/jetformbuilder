<template>
	<div class="postbox" :id="slug">
		<div class="postbox-header">
			<h2 class="ui-sortable-handle">{{ title }}</h2>
			<div class="handle-actions" v-if="$slots['header-actions']">
				<slot name="header-actions"></slot>
			</div>
			<div class="handle-actions" v-else>
				<UndoChangesTable
					:scope="slug"
				/>
				<EditTableSwitcher
					:scope="slug"
				/>
				<ShowOverflowTable
					:scope="slug"
				/>
			</div>
		</div>
		<div class="postbox-inner submitbox">
			<slot></slot>
			<div id="major-publishing-actions" v-if="$slots.actions">
				<slot name="actions"></slot>
				<div class="clear"></div>
			</div>
		</div>
	</div>
</template>

<script>
import EditTableSwitcher from './EditTableSwitcher';
import UndoChangesTable from './UndoChangesTable';
import ShowOverflowTable from './ShowOverflowTable';

export default {
	name: 'PostBox',
	props: {
		title: String,
		slug: String,
	},
	components: {
		ShowOverflowTable,
		UndoChangesTable,
		EditTableSwitcher,
	},
	computed: {},
};
</script>

<style scoped>

.handle-actions {
	display: flex;
}

</style>