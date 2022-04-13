<template>
	<div>
		<div
			v-if="record.editable && isEnableEdit"
			class="list-table-item__cell--body-value jfb-control"
		>
			<keep-alive>
				<component
					:is="getComponentEditControl"
					:options="record.control_options"
					v-model="editedCellValue"
				/>
			</keep-alive>
		</div>
		<template v-else-if="getItemComponentColumn">
			<component
				v-bind:is="getItemComponentColumn"
				:value="value"
				:full-entry="list"
				:scope="scope"
			/>
		</template>
		<template v-else-if="getItemComponentType">
			<component
				v-bind:is="getItemComponentType"
				:value="value"
				:full-entry="list"
				:scope="scope"
			/>
		</template>
		<template v-else>
			{{ value }}
		</template>
	</div>
</template>

<script>
import GetColumnComponent from '../mixins/GetColumnComponent';
import ScopeStoreMixin from '../mixins/ScopeStoreMixin';

export default {
	name: 'EntryColumnList',
	props: {
		column: String,
		list: Object,
	},
	mixins: [ GetColumnComponent, ScopeStoreMixin ],
	computed: {
		record() {
			return this.list[ this.column ];
		},
		value() {
			return this.record.editable ? this.editedCellValue : this.initialValue;
		},
		initialValue() {
			/**
			 * Such nesting can be subject
			 * to the use of a component with settings
			 *
			 * For example status with icon (icon_status)
			 */
			return this.record?.value ?? this.record?.value?.value ?? false;
		},
		isEnableEdit() {
			jfbEventBus.reactiveCounter;

			return this.getter( 'isEnableEdit' );
		},
		getItemComponentColumn() {
			return this.getColumnComponentByPrefix( this.column, 'item' );
		},
		getItemComponentType() {
			return this.getColumnComponentByPrefix( this.getColumnType, 'item' );
		},
		getComponentEditControl() {
			return this.getColumnComponentByPrefix( this.record?.control, 'control' );
		},
		getColumnType() {
			return this.record.type ?? false;
		},
		editedCellValue: {
			get() {
				jfbEventBus.reactiveCounter;

				return this.getter(
					'editedCellValue',
					[ this.column, this.initialValue ],
				);
			},
			set( value ) {
				this.commit( 'updateEditableCell', {
					column: this.column,
					initial: this.initialValue,
					props: {
						value,
					},
				} );
				jfbEventBus.reactiveCounter ++;
			},
		},
	},
	methods: {
		revertChangesColumn() {
			this.commit( 'revertChangesColumn', {
				column: this.column,
			} );
			jfbEventBus.reactiveCounter ++;
		},
	},
};
</script>

<style>

</style>