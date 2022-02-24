<template>
	<div class="wrap">
		<h1 class="wp-heading-inline">Form Record</h1>
		<PostBoxGrid>
			<PostBoxContainer>
				<PostBox
					:values="{
			something: 'Wowo!',
			another: 'hellowe'
			}"
					title="Another #1"
				>
				</PostBox>
				<PostBox
					:values="{
			something: 'Wowo!',
			another: 'helldsfsfdowe'
			}"
					title="Another #2"
				>
				</PostBox>
			</PostBoxContainer>
			<PostBoxContainer>
				<PostBox
					:values="values"
					title="Form Record"
				>
				</PostBox>
				<PostBox
					:values="{
			something: 'Wowo!',
			another: 'helldsf,fdowe',
			dsfgfgf: '2332424'
			}"
					title="Another #2"
				></PostBox>
			</PostBoxContainer>
		</PostBoxGrid>
	</div>
</template>

<script>
const {
		  PostBox,
		  PostBoxGrid,
		  PostBoxContainer,
	  } = JetFBComponents;

const { GetIncoming } = JetFBMixins;

export default {
	name: "jfb-records-single",
	components: {
		PostBoxContainer,
		PostBox,
		PostBoxGrid,
	},
	data() {
		return {
			values: this.getIncoming(),
		}
	},
	mixins: [ GetIncoming ],
	created() {
	},
}
</script>

<style scoped>

</style>