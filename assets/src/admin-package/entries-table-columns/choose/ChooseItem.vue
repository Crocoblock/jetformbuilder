<template>
	<div>
		<input type="checkbox" :checked="isChecked()" @change="onChange( $event.target.checked )">
	</div>
</template>

<script>

window.jfbEventBus = window.jfbEventBus || new Vue();

jfbEventBus.$on( 'on-click-row', function( entryID ) {

} );

export default {
	name: 'choose--item',
	props: [ 'value', 'full-entry' ],
	created() {
		this.$store.commit( 'addToStore', {
			id: this.value,
		} );


	},
	methods: {
		isChecked() {
			return this.$store.getters.isChecked( this.value );
		},
		onChange( active ) {
			this.$store.dispatch( 'changeChecked', {
				id: this.value,
				active,
			} );
		},
	},
};
</script>