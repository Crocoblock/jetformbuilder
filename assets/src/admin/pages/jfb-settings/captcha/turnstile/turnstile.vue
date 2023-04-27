<template>
	<section>
		<cx-vui-input
			element-id="turnstile_key"
			:label="label.key"
			:description="__(
				'Read the hint to the Secret Key field',
				'jet-form-builder',
			)"
			:wrapper-css="[ 'equalwidth' ]"
			:size="'fullwidth'"
			v-model="storage.key"
		></cx-vui-input>
		<cx-vui-input
			element-id="turnstile_secret"
			:label="label.secret"
			:description="__(
				'You can find both keys on your Turnstile Site settings page',
				'jet-form-builder',
			)"
			:wrapper-css="[ 'equalwidth' ]"
			:size="'fullwidth'"
			v-model="storage.secret"
		></cx-vui-input>
		<p class="fb-description">
			{{ __( 'Didn\'t find it? Here is', 'jet-form-builder' ) + ' ' }}
			<ExternalLink
				href="https://developers.cloudflare.com/turnstile/get-started/#get-a-sitekey-and-secret-key"
			>
				{{ __( 'a more detailed description', 'jet-form-builder' ) }}
			</ExternalLink>
		</p>
	</section>
</template>

<script>

import {
	label,
} from './source';

const {
	      i18n,
      } = JetFBMixins;

const {
	      ExternalLink,
      } = JetFBComponents;

export default {
	name: 'turnstile',
	mixins: [
		i18n,
	],
	components: {
		ExternalLink,
	},
	props: {
		incoming: {
			type: [ Object, Array ],
			default() {
				return {};
			},
		},
	},
	data() {
		return {
			label,
			storage: {},
		};
	},
	created() {
		if ( !Object.keys( this.incoming )?.length ) {
			return;
		}
		this.storage = JSON.parse( JSON.stringify( this.incoming ) );
	},
	methods: {
		getRequestOnSave() {
			return {
				data: { ...this.storage },
			};
		},
	},
};

</script>