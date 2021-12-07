<template>
	<div class="table-details-row">
		<template v-if="'rowValue' === type">
			<div :class="headingClasses">
				<template v-if="role !== 'default'">{{ 'Name' }}</template>
				<template v-else>
					<slot name="name"></slot>
					:
				</template>
			</div>
			<div :class="contentClasses">
				<template v-if="role !== 'default'">{{ 'Value' }}</template>
				<template v-else>
					<slot name="value"></slot>
				</template>
			</div>
			<div :class="actionClasses">
				<template v-if="role !== 'default'">{{ 'Actions' }}</template>
				<template v-else>
					<slot name="actions"></slot>
				</template>
			</div>

		</template>
		<template v-else>
			<h3>
				<slot name="name"></slot>
			</h3>
		</template>
	</div>
</template>

<script>
function defaultColumnClasses() {
	return {
		'table-details-row-column': true,
	};
}

export default {
	name: 'DetailsTableRow',
	props: {
		role: {
			type: String,
			default: 'default',
			validator: function( value ) {
				return (
					-1 !== [ 'header', 'default', 'footer' ].indexOf( value )
				);
			},
		},
		type: {
			type: String,
			default: 'rowValue',
			validator: function( value ) {
				return (
					-1 !== [ 'rowValue', 'heading' ].indexOf( value )
				);
			},
		},
	},
	computed: {
		headingClasses() {
			return this.classes( {
				'table-details-row--heading': true,
			} );
		},
		contentClasses() {
			return this.classes( {
				'table-details-row--content': true,
			} );
		},
		actionClasses() {
			return this.classes( {
				'table-details-row--actions': true,
			} );
		},
	},
	methods: {
		classes( classes ) {
			return {
				...defaultColumnClasses(),
				...classes,
				[ 'table-details-row-role--' + this.role ]: true,
			};
		},
	},
};
</script>

<style lang="scss">

.table-details-row {
	display: flex;
	justify-content: space-between;
	font-size: 1.1em;
	&:first-child {
		font-weight: bold;
	}
	&:nth-child(even) {
		background-color: #eeeeee;
	}
	&-column {
		padding: 0.5em 1em;
		/*border-bottom: 1px solid #ccc;*/
	}
	&--heading {
		flex: 1;
		text-align: right;
	}
	&-role--default.table-details-row--heading {
		font-weight: 600;
	}
	&--content {
		flex: 2;
	}
	&--actions {
		flex: 0.3;
		/*border-left: 1px solid #ccc;*/
	}

	h3 {
		padding: 0.5em;
		border-bottom: 1px solid #aaa;
		width: 50%;
		margin: 1em auto;
		text-align: center;
		color: #aaa;
		font-weight: 400;
	}
}
</style>