<template>
	<PaymentsComponent/>
</template>

<script>
const { PaymentsPage: { PaymentsComponent } } = window.JetFBComponents;

export default {
	name: "jfb-payments",
	components: {
		PaymentsComponent,
	},
}
</script>

<style>

</style>