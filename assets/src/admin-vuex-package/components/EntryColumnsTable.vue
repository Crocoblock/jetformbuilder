<template>
	<div>
		<template v-if="getItemComponent( column )">
			<keep-alive>
				<component
					v-bind:is="getItemComponent( column )"
					:value="initialValue"
					:full-entry="entry"
					:entry-id="entryId"
					:scope="scope"
				/>
			</keep-alive>
		</template>
		<template v-else-if="getItemComponent( initialType )">
			<keep-alive>
				<component
					v-bind:is="getItemComponent( initialType )"
					:value="initialValue"
					:full-entry="entry"
					:entry-id="entryId"
					:scope="scope"

				/>
			</keep-alive>
		</template>
		<div
			v-else-if="initial.editable && isEditedTable"
			:class="{
				'list-table-item__cell--edit-control': true,
			}"
		>
			<input type="text" :value="editedCellValue" @change="onEditColumn"/>
		</div>
		<div
			v-else
			:class="{
				'list-table-item__cell--content': true,
			}"
		>
			{{ initial.editable ? editedCellValue : initialValue }}
		</div>
		<span
			v-if="initial.editable"
			class="dashicons dashicons-edit"
			@click="toggleEditTable"
		></span>
	</div>
</template>

<script>
import ScopeStoreMixin from '../mixins/ScopeStoreMixin';
import GetColumnComponent from '../mixins/GetColumnComponent';

export default {
	name: 'EntryColumnsTable',
	props: {
		entry: Object,
		column: String,
		entryId: Number,
	},
	data: () => (
		{
			value: 0,
		}
	),
	mixins: [ ScopeStoreMixin, GetColumnComponent ],
	computed: {
		initial() {
			return this.entry[ this.column ] ?? {};
		},
		initialValue() {
			return this.initial?.value ?? false;
		},
		initialType() {
			return this.initial?.type ?? 'string';
		},
		editedCellValue() {
			this.value;

			return this.getter( 'editedCellValue', [ this.column, this.entry ] );
		},
		isEditedTable() {
			this.value;

			return this.getter( 'isEditedTable' );
		},
	},
	methods: {
		toggleEditTable() {
			this.commit( 'toggleEditTable' );
			this.value ++;
		},
		onEditColumn( { target: { value } } ) {
			this.commit( 'updateEditableCell', {
				record: this.entry,
				column: this.column,
				props: {
					value,
				},
			} );
		},
		getItemComponent( column ) {
			return this.getColumnComponentByPrefix( column, 'item' );
		},
	},
};
</script>

<style>

</style>