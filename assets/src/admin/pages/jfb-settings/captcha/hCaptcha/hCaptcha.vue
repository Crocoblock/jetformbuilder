<template>
	<section>
		<SimpleWrapperComponent element-id="hcaptcha_key">
			<template #label>{{ label.key }}</template>
			<template #description>
				<p class="fb-description">
					{{ __(
					'You can find it on this page in the first column of Sitekey.',
					'jet-form-builder',
				) + ' ' }}
					<ExternalLink href="https://dashboard.hcaptcha.com/sites">
						{{ __( 'Go to the dashboard of sites', 'jet-form-builder' ) }}
					</ExternalLink>
				</p>
			</template>
			<template #default>
				<input
					id="hcaptcha_key"
					type="text"
					class="cx-vui-input size-fullwidth"
					v-model="storage.key"
				/>
			</template>
		</SimpleWrapperComponent>
		<SimpleWrapperComponent element-id="hcaptcha_secret">
			<template #label>{{ label.secret }}</template>
			<template #description>
				<p class="fb-description">
					{{ __(
					`You can find it on the settings page,
this will be the first field.`,
					'jet-form-builder',
				) + ' ' }}
					<ExternalLink href="https://dashboard.hcaptcha.com/settings">
						{{ __( 'Go to the Settings page', 'jet-form-builder' ) }}
					</ExternalLink>
				</p>
			</template>
			<template #default>
				<input
					id="hcaptcha_secret"
					type="text"
					class="cx-vui-input size-fullwidth"
					v-model="storage.secret"
				/>
			</template>
		</SimpleWrapperComponent>
	</section>
</template>

<script>

import {
	label,
} from './source';

const {
	      SimpleWrapperComponent,
	      ExternalLink,
      } = JetFBComponents;

const {
	      i18n,
      } = JetFBMixins;

export default {
	name: 'hcaptcha',
	components: {
		SimpleWrapperComponent,
		ExternalLink,
	},
	mixins: [ i18n ],
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