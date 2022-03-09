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
			v-else
			:class="{
				'list-table-item__cell--body': true,
				'list-table-item__cell--body-is-editable': initial.editable
			}"
		>
			<div
				v-if="initial.editable && isEnableEdit"
				class="list-table-item__cell--body-value jfb-control"
			>
				<input type="text" v-model="editedCellValue"/>
			</div>
			<div
				v-else
				class="list-table-item__cell--body-value"
			>
				{{ initial.editable ? editedCellValue : initialValue }}
			</div>
			<div
				class="list-table-item__cell--body-actions"
				v-if="initial.editable && editedCellValue !== initialValue"
			>
				<span
					class="dashicons dashicons-undo"
					@click="revertChangesColumn"
				></span>
			</div>
		</div>
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
		editedCellValue: {
			get() {
				jfbEventBus.reactiveCounter;

				return this.getter( 'editedCellValue', [ this.column, this.entry ] );
			},
			set( value ) {
				this.commit( 'updateEditableCell', {
					record: this.entry,
					column: this.column,
					props: {
						value,
					},
				} );
				jfbEventBus.reactiveCounter ++;
			},
		},
		isEnableEdit() {
			jfbEventBus.reactiveCounter;

			return this.getter( 'isEnableEdit' );
		},
	},
	methods: {
		revertChangesColumn() {
			this.commit( 'revertChangesColumn', {
				record: this.entry,
				column: this.column,
			} );
			jfbEventBus.reactiveCounter ++;
		},
		getItemComponent( column ) {
			return this.getColumnComponentByPrefix( column, 'item' );
		},
	},
};
</script>

<style lang="scss">

.list-table-item__cell {
	&--body {
		&-is-editable {
			display: flex;
			justify-content: space-between;
			column-gap: 1em;

			span.dashicons {
				transition: all 0.2s ease-in-out;
				padding: 0.2em;
				border-radius: 50%;
				box-shadow: unset;
				cursor: pointer;
				background-color: #fff;
			}

			input {
				width: 100%;
			}
		}

		&-value {
			overflow: hidden;
			text-overflow: ellipsis;

			&.jfb-control {
				flex: 1;
				padding-right: 1px;
			}
		}

		&-actions {
			display: flex;
			column-gap: 1em;
		}
	}

	&:hover .list-table-item__cell--body-is-editable span.dashicons:hover {
		box-shadow: 0 0 8px #ccc;
	}
}

</style>