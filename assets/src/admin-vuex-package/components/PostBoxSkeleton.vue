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
				<RedirectToSingle
					:scope="slug"
				/>
			</div>
		</div>
		<div class="postbox-inner submitbox">
			<slot></slot>
			<div class="major-publishing-actions" v-if="$slots.actions">
				<slot name="actions"></slot>
				<div class="clear"></div>
			</div>
			<PrimaryActions
				v-else
				:scope="slug"
			/>
		</div>
	</div>
</template>

<script>
import EditTableSwitcher from './BoxActions/EditTableSwitcher';
import UndoChangesTable from './BoxActions/UndoChangesTable';
import ShowOverflowTable from './BoxActions/ShowOverflowTable';
import RedirectToSingle from './BoxActions/RedirectToSingle';
import PrimaryActions from './BoxActions/BoxActions';

export default {
	name: 'PostBoxSkeleton',
	props: {
		title: String,
		slug: String,
	},
	components: {
		PrimaryActions,
		RedirectToSingle,
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