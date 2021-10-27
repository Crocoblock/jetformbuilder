<template>
	<input type="checkbox" :checked="isChecked" @change="onClick( $event.target.checked )">
</template>

<script>
export default {
	name: 'choose--head',
	data() {
		return {
			isChecked: false,
		};
	},
	methods: {
		onClick( active ) {
			this.isChecked = active;

			if ( active ) {
				this.$store.commit( 'activeAll' );

				return;
			}
			this.$store.commit( 'removeAll' );
		},
	},
};
</script>