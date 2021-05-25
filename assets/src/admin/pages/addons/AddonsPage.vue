<template>
	<div class="jet-fb-addons-page wrap">
		<h1 class="cs-vui-title">{{ 'JetForms Addons' }}</h1>
		<div class="cx-vui-panel">
			<cx-vui-button
				class="add-new-license"
				button-style="accent"
				size="mini"
				@click="licensePopupVisible = true"
			>
				<span slot="label">
					<span slot="label" v-if="!isLicenseActivated">Activate License</span>
					<span slot="label" v-if="isLicenseActivated">Deactivate License</span>
				</span>
			</cx-vui-button>
			<div class="jfb-addons">
				<AddonItem
					v-for="( addonData, index ) in allAddons"
					:key="index"
					:addon-data="addonData"
				></AddonItem>
			</div>
		</div>

		<cx-vui-popup
			class="jet-fb-addons-page__license-popup"
			v-model="licensePopupVisible"
			:header="false"
			:footer="false"
		>
			<div class="jet-fb-addons-page__license-form" slot="content">
				<span>Activate license for automatic updates and awesome support</span>
				<cx-vui-input
					class="jet-fb-addons-page__license-input"
					size="fullwidth"
					type="password"
					:autofocus="true"
					:prevent-wrap="true"
					placeholder="Just paste it here"
					v-model="licenseKey"
				></cx-vui-input>

				<cx-vui-button
					class="jet-fb-addons-page__license-action"
					button-style="accent"
					size="mini"
					:loading="licenseProccesingState"
					@click="licenseAction"
				>
					<span slot="label" v-if="!isLicenseActivated">Activate License</span>
					<span slot="label" v-if="isLicenseActivated">Deactivate License</span>
				</cx-vui-button>
			</div>
		</cx-vui-popup>
	</div>

</template>

<script>

import AddonItem from './components/AddonItem.vue';

const { applyFilters, doAction } = wp.hooks;

window.jfbEventBus = new Vue();

export default {
	name: 'jfb-addons',
	components: {
		AddonItem,
	},
	data() {
		return {
			allAddons: window.JetFBPageConfig.allAddons || {},
			licenseList: window.JetFBPageConfig.licenseList || [],
			licenseKey: window.JetFBPageConfig.licenseKey || '3505c79bf1765c293ae96e5dde177d77',

			licenseActivated: false,
			licensePopupVisible: false,
			licenseProccesingState: false,
			licenseAjaxAction: null,

			proccesingState: false,
		};
	},
	mounted: function() {
		window.jfbEventBus.$on( 'updateAddonData', this.updateAddonData );
	},
	computed: {
		isLicenseActivated() {
			return 0 !== this.licenseList.length;
		},
		licenseActionType() {
			return ! this.isLicenseActivated ? 'activate_license' : 'deactivate_license';
		}
	},
	methods: {
		updateAddonData( data ) {
			let slug      = data.slug,
				addonData = data.addonData;

			console.log(data);
			console.log(slug);
			console.log(addonData);

			this.allAddons[ slug ] = Object.assign( {}, this.allAddons[ slug ], addonData );
			this.proccesingState = true;

			setTimeout( function() {
			//	window.location.reload();
			}, 1000 );
		},

		licenseAction() {
			var self = this;

			this.licenseProccesingState = true;

			self.licenseAjaxAction = jQuery.ajax( {
				type: 'POST',
				url: window.JetFBPageConfig.ajaxUrl,
				dataType: 'json',
				data: {
					action: 'jfb_license_action',
					data: {
						license: self.licenseKey,
						action: self.licenseActionType
					}
				},
				beforeSend: ( jqXHR, ajaxSettings ) => {

					if ( null !== self.licenseAjaxAction ) {
						self.licenseAjaxAction.abort();
					}
				},
				success: ( responce, textStatus, jqXHR ) => {
					self.licenseProccesingState = false;

					if ( responce.success ) {
						self.$CXNotice.add( {
							message: responce.message,
							type: 'success',
							duration: 4000,
						} );

						let licenseData = responce.data;

						licenseData['license_key'] = self.licenseKey;

						switch ( self.licenseActionType ) {
							case 'activate_license':

								self.licenseList.push( licenseData );
								break;
							case 'deactivate_license':

								self.licenseList = self.licenseList.filter( ( licenseData ) => {
									return self.licenseKey !== licenseData['license_key'];
								} );

								self.licenseKey = '';
								break;
						}
					} else {
						self.$CXNotice.add( {
							message: responce.message,
							type: 'error',
							duration: 4000,
						} );
					}
				}
			} );
		},

		addLicense( licenseData ) {
			this.licenseList.push( licenseData );

			self.proccesingState = true;

			setTimeout( function() {
				window.location.reload();
			}, 3000 );
		},

		removeLicense( licenceKey ) {

			let removingIndex = false;

			for ( let licenceIndex in this.licenseList ) {
				let licenseData =  this.licenseList[ licenceIndex ];

				if ( licenseData['licenseKey'] === licenceKey ) {
					removingIndex = licenceIndex;

					break;
				}
			}

			if ( removingIndex ) {
				this.licenseList.splice( removingIndex, 1 );
			}

			this.licensePopupVisible = false;

			setTimeout( function() {
				window.location.reload();
			}, 500 );
		},
	},
}
</script>

<style lang="sass">

</style>