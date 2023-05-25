<template>
	<input
		type="date"
		:name="elementId"
		:id="elementId"
		class="cx-vui-input size-fullwidth"
		:value="value"
		@input="$emit( 'input' )"
		:max="max"
		:min="min"
	>
</template>

<script>

let now = new Date( Date.now() - 8640000 ).toJSON();
[ now ] = now.split( 'T' );

const dateValidator = ( value ) => {
	if ( [ 'now' ].includes( value ) ) {
		return true;
	}

	return !Number.isNaN( new Date( value ).getTime() );
};

export default {
	name: 'CxVuiDate',
	props: {
		value: {
			type: String,
		},
		maxDate: {
			validator: dateValidator,
		},
		minDate: {
			validator: dateValidator,
		},
		elementId: {
			type: String,
		},
	},
	data() {
		return {
			max: 'now' === this.maxDate ? now : this.maxDate,
			min: 'now' === this.minDate ? now : this.minDate,
		};
	},
	inject: [ 'elementId' ],
};
</script>

<style scoped>

</style>