<template>
	<div>
		<cx-vui-input
			:label="label.site"
			:wrapper-css="[ 'equalwidth' ]"
			:size="'fullwidth'"
			v-model="site"
		></cx-vui-input>
		<cx-vui-input
			:label="label.secret"
			:wrapper-css="[ 'equalwidth' ]"
			:size="'fullwidth'"
			v-model="secret"
		></cx-vui-input>
	</div>
</template>

<script>
import {
	label,
	help
} from "./source";

export default {
	name: 'captcha-tab',
	data() {
		return {
			label, help,
			site: '',
			secret: ''
		};
	}
}
</script>