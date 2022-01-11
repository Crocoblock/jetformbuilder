<template>
	<span :class="wrapClasses">{{ value }}</span>
</template>

<script>
export default {
	props: [ 'value', 'full-entry' ],
	name: 'gross--item',
	methods: {},
	computed: {
		type() {
			return this.fullEntry.type.value.slug;
		},
		wrapClasses() {
			return {
				'jfb-gross': true,
				[ `jfb-gross-${ this.type }` ]: true,
			};
		},
	},
};
</script>

<style lang="scss">

.cx-vui-button__content {
	padding: 0.4em;
}

.jfb-gross {
	padding: 0.3em;
	font-weight: 600;

	&-initial {
		background-color: rgb(165 241 190 / 40%);
	}

	&-refund {
		background-color: rgb(245 154 136 / 40%);
	}
}

</style>