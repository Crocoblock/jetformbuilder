<template>
	<section>
		<SimpleWrapperComponent element-id="friendly_key">
			<template #label>{{ label.key }}</template>
			<template #description>
				<p class="fb-description">
					{{ __(
					'It can be found on the page listing your Applications. Or follow this',
					'jet-form-builder',
				) + ' ' }}
					<ExternalLink href="https://docs.friendlycaptcha.com/#/installation?id=_1-generating-a-sitekey">
						{{ __( 'guide', 'jet-form-builder' ) }}
					</ExternalLink>
				</p>
			</template>
			<template #default>
				<input
					id="friendly_key"
					type="text"
					class="cx-vui-input size-fullwidth"
					v-model="storage.key"
				/>
			</template>
		</SimpleWrapperComponent>
		<cx-vui-input
			element-id="friendly_secret"
			:label="label.secret"
			:description="__(
				'It can be found on the page listing your API keys.',
				'jet-form-builder',
			)"
			:wrapper-css="[ 'equalwidth' ]"
			:size="'fullwidth'"
			v-model="storage.secret"
		></cx-vui-input>
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
	name: 'friendly',
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