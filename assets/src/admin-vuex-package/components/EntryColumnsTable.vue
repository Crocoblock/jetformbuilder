<template>
	<div
		:class="getClasses"
	>
		<div
			class="list-table-item__cell--body jfb-ellipsis"
		>
			<div
				v-if="initial.editable && isEnableEdit"
				class="list-table-item__cell--body-value jfb-control"
			>
				<keep-alive>
					<component
						:is="getComponentEditControl"
						:options="initial.control_options"
						v-model="editedCellValue"
					/>
				</keep-alive>
			</div>
			<template v-else-if="getComponentColumn">
				<component
					:is="getComponentColumn"
					:value="value"
					:full-entry="entry"
					:entry-id="entryId"
					:scope="scope"
				/>
			</template>
			<template v-else-if="getComponentType">
				<component
					:is="getComponentType"
					:value="value"
					:full-entry="entry"
					:entry-id="entryId"
					:scope="scope"
				/>
			</template>
			<div
				v-else
				class="list-table-item__cell--body-value"
			>
				{{ value }}
			</div>
		</div>
		<div
			class="list-table-item__cell--actions"
			v-if="initial.editable && editedCellValue !== initialValue"
		>
			<span
				class="dashicons dashicons-undo"
				@click="revertChangesColumn"
			></span>
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
		value() {
			return this.initial.editable ? this.editedCellValue : this.initialValue;
		},
		initialValue() {
			/**
			 * Such nesting can be subject
			 * to the use of a component with settings
			 *
			 * For example status with icon (icon_status)
			 */
			return this.initial?.value ?? this.initial?.value?.value ?? false;
		},
		initialType() {
			return this.initial?.type ?? 'string';
		},
		initialClasses() {
			return this.initial?.classes ?? [];
		},
		getClasses() {
			const classes = [
				'list-table-item__cell',
				'cell--' + this.column,
				'cell-type--' + this.initialType,
				...this.initialClasses,
			];

			if ( ! classes.includes( 'overflow-visible' ) && this.isShowOverflow ) {
				classes.push( 'show-overflow' );
			}

			if ( this.initial.editable ) {
				classes.push( 'is-editable' );
			}

			return classes;
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
					initial: this.initialValue,
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
		isShowOverflow() {
			return this.getter( 'options/isShowOverflow' );
		},
		getComponentType() {
			return this.getItemComponent( this.initialType );
		},
		getComponentColumn() {
			return this.getItemComponent( this.column );
		},
		getComponentEditControl() {
			return this.getColumnComponentByPrefix( this.initial?.control, 'control' );
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

.jfb-ellipsis {
	overflow: hidden;
	text-overflow: ellipsis;
}

.list-table-item__cell {
	overflow: hidden;
	text-overflow: ellipsis;

	&.overflow-visible.overflow-visible {
		overflow: visible;
	}

	&.is-editable {
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
	}
	&--body {
		flex: 1;
	}

	&--body-value {
		overflow: hidden;
		text-overflow: ellipsis;

		&.jfb-control {
			flex: 1;
			padding: 0.1em;

			& > * {
				width: 100%;
			}
		}
	}

	&.show-overflow.show-overflow {
		word-break: break-word;
		white-space: normal;
		line-height: 1.5;
	}

	&:hover .list-table-item__cell--body-is-editable span.dashicons:hover {
		box-shadow: 0 0 8px #ccc;
	}
}

</style>