<template>
	<div
		class="jfb-addons-page wrap"
		:class="{ 'proccesing-state': proccesingState }"
	>
		<h1 class="cs-vui-title">{{ 'JetFormBuilder Addons' }}</h1>
		<div class="jfb-addons-page__inner cx-vui-panel">
			<div class="jfb-addons-page__header">
				<div class="jfb-addons-page__header-controls" v-if="isLicenseMode">
					<cx-vui-button
						button-style="accent"
						size="mini"
						:loading="checkUpdatesProcessed"
						@click="checkPluginsUpdate"
					>
						<span slot="label">
							<svg class="button-icon" width="14" height="14" viewBox="0 0 14 14" fill="none"
							     xmlns="http://www.w3.org/2000/svg">
								<path
									d="M11.7085 2.29171C10.5001 1.08337 8.8418 0.333374 7.00013 0.333374C3.3168 0.333374 0.341797 3.31671 0.341797 7.00004C0.341797 10.6834 3.3168 13.6667 7.00013 13.6667C10.1085 13.6667 12.7001 11.5417 13.4418 8.66671H11.7085C11.0251 10.6084 9.17513 12 7.00013 12C4.2418 12 2.00013 9.75837 2.00013 7.00004C2.00013 4.24171 4.2418 2.00004 7.00013 2.00004C8.38346 2.00004 9.6168 2.57504 10.5168 3.48337L7.83346 6.16671H13.6668V0.333374L11.7085 2.29171Z"
									fill="#007CBA"/>
							</svg>
							<span>Check For Updates</span>
						</span>
					</cx-vui-button>

					<cx-vui-button
						:class="[ !isLicenseActivated ? 'cx-vui-button--style-accent' : 'cx-vui-button--style-danger' ]"
						size="mini"
						@click="showLicensePopup"
					>
						<span slot="label">
							<svg class="button-icon" width="16" height="16" viewBox="0 0 16 16" fill="none"
							     xmlns="http://www.w3.org/2000/svg">
								<path
									d="M15.4985 0H12.4897C12.4166 0 12.3487 0.0156709 12.286 0.0470127C12.2338 0.0679073 12.1867 0.104473 12.145 0.156709L5.7669 6.47209C5.62063 6.44074 5.46392 6.41463 5.29677 6.39373C5.12961 6.37284 4.96768 6.36239 4.81097 6.36239C4.16324 6.36239 3.54685 6.48776 2.9618 6.73849C2.37675 6.97878 1.85961 7.32354 1.41038 7.77277C0.961149 8.222 0.611166 8.73914 0.360431 9.32419C0.120144 9.90924 0 10.5309 0 11.189C0 11.8368 0.120144 12.4532 0.360431 13.0382C0.611166 13.6232 0.961149 14.1404 1.41038 14.5896C1.85961 15.0389 2.37675 15.3836 2.9618 15.6239C3.54685 15.8746 4.16324 16 4.81097 16C5.46915 16 6.09076 15.8746 6.67581 15.6239C7.26086 15.3836 7.778 15.0389 8.22723 14.5896C8.80183 14.015 9.19882 13.3464 9.41822 12.5837C9.64806 11.8211 9.68462 11.0375 9.52791 10.2331L10.8913 8.86974C10.9331 8.82795 10.9644 8.78093 10.9853 8.7287C11.0167 8.66601 11.0323 8.59811 11.0323 8.52498V7.02057H12.5367C12.6934 7.02057 12.8136 6.97356 12.8972 6.87953C12.9912 6.7855 13.0382 6.66536 13.0382 6.5191V5.01469H14.5426C14.6157 5.01469 14.6784 5.00424 14.7307 4.98335C14.7933 4.95201 14.8508 4.91022 14.903 4.85798L15.906 3.85504C15.9269 3.81326 15.9478 3.76624 15.9687 3.71401C15.9896 3.65132 16 3.58342 16 3.51028V0.501469C16 0.355207 15.953 0.235064 15.859 0.141038C15.7649 0.0470127 15.6448 0 15.4985 0ZM4.96768 12.7875C4.79008 12.9651 4.5968 13.0957 4.38786 13.1792C4.18936 13.2524 3.96474 13.2889 3.71401 13.2889C3.46327 13.2889 3.23343 13.2419 3.02449 13.1479C2.82599 13.0539 2.63794 12.9337 2.46033 12.7875C2.28273 12.6099 2.15214 12.4218 2.06856 12.2233C1.99543 12.0144 1.95886 11.7845 1.95886 11.5338C1.95886 11.2831 2.00588 11.0584 2.0999 10.8599C2.19393 10.651 2.31407 10.4577 2.46033 10.2801C2.7842 9.95625 3.19164 9.79432 3.68266 9.79432C4.18413 9.79432 4.5968 9.95625 4.92067 10.2801C5.09827 10.4577 5.22364 10.651 5.29677 10.8599C5.38035 11.0584 5.42214 11.2831 5.42214 11.5338C5.42214 11.7845 5.38035 12.0144 5.29677 12.2233C5.22364 12.4218 5.11394 12.6099 4.96768 12.7875Z"
									fill="#D3D3D3"/>
							</svg>
							<span v-if="!isLicenseActivated">Activate License</span>
							<span v-if="isLicenseActivated">Deactivate License</span>
						</span>
					</cx-vui-button>
				</div>
				<div
					class="go-pro-banner"
					v-if="!isLicenseActivated"
				>
					<div class="go-pro-banner__subtitle">Features & Integrations</div>
					<div class="go-pro-banner__title">Extend functionality with PRO Addons</div>
					<cx-vui-button
						class="go-pro-banner__button"
						button-style="default"
						size="mini"
						:url="goProLink"
						tag-name="a"
						target="_blank"
					>
						<span slot="label">
							<span>Go Pro</span>
						</span>
					</cx-vui-button>
				</div>
			</div>

			<div
				class="jfb-addons"
				v-if="0!==Object.keys(installedAddonList).length"
			>
				<div class="jfb-addons__header">
					<span class="cx-vui-subtitle">Your Installed Addons</span>
				</div>
				<div class="jfb-addons__list">
					<AddonItem
						v-for="( addonData, index ) in installedAddonList"
						:key="index"
						:addon-data="addonData"
					></AddonItem>
				</div>
			</div>

			<div
				class="jfb-addons"
				v-if="0!==Object.keys(availableAddonList).length"
			>
				<div class="jfb-addons__header">
					<span class="cx-vui-subtitle">All Available Addons</span>
				</div>
				<div class="jfb-addons__list">
					<AddonItem
						v-for="( addonData, index ) in availableAddonList"
						:key="index"
						:addon-data="addonData"
					></AddonItem>
				</div>
			</div>
		</div>

		<cx-vui-popup
			class="jfb-addons-page__license-popup"
			v-model="licensePopupVisible"
			:footer="false"
			body-width="540px"
		>
			<div class="cx-vui-popup__header-title" slot="title">
				<span v-if="!isLicenseActivated">Activate License</span>
				<span v-if="isLicenseActivated">Deactivate License</span>
			</div>
			<div class="jfb-addons-page__license-form" slot="content">
				<span v-if="!isLicenseActivated">Activate license for automatic updates and awesome support</span>
				<span
					v-if="isLicenseActivated">By deactivating the license you will not be able to update the addons</span>
				<cx-vui-input
					class="jfb-addons-page__license-input"
					size="fullwidth"
					type="password"
					:autofocus="true"
					:prevent-wrap="true"
					placeholder="Just paste it here"
					v-model="licenseKey"
				></cx-vui-input>
				<cx-vui-button
					class="jfb-addons-page__license-action"
					button-style="accent"
					size="mini"
					:loading="licenseProccesingState"
					@click="licenseAction"
				>
					<span slot="label">
						<span v-if="!isLicenseActivated">Activate</span>
						<span v-if="isLicenseActivated">Deactivate</span>
					</span>
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
			licenseKey: window.JetFBPageConfig.licenseKey || '',
			themeInfo: window.JetFBPageConfig.themeInfo || false,
			miscInfo: window.JetFBPageConfig.miscInfo || false,

			licenseActivated: false,
			licensePopupVisible: false,
			licenseProccesingState: false,
			licenseAjaxAction: null,

			checkUpdatesAction: null,
			checkUpdatesProcessed: false,

			proccesingState: false,
		};
	},
	mounted: function () {
		window.jfbEventBus.$on( 'updateAddonData', this.updateAddonData );
		window.jfbEventBus.$on( 'showLicensePopup', this.showLicensePopup );
	},
	computed: {
		isLicenseMode() {
			return '' !== window.JetFBPageConfig.licenseMode ? true : false;
		},

		isLicenseActivated() {
			return 0 !== this.licenseList.length;
		},

		licenseActionType() {
			return !this.isLicenseActivated ? 'activate_license' : 'deactivate_license';
		},

		installedAddonList() {
			let installedAddonsList = {};

			for ( let addonSlug in this.allAddons ) {

				if ( this.allAddons[ addonSlug ][ 'isInstalled' ] ) {
					installedAddonsList[ addonSlug ] = this.allAddons[ addonSlug ];
				}
			}

			return installedAddonsList;
		},

		availableAddonList() {
			let availableAddonList = {};

			for ( let addonSlug in this.allAddons ) {

				if ( !this.allAddons[ addonSlug ][ 'isInstalled' ] ) {
					availableAddonList[ addonSlug ] = this.allAddons[ addonSlug ];
				}
			}

			return availableAddonList;
		},

		goProLink() {
			let pricingPageUrl = this.miscInfo.pricingPageUrl,
			    utmParams      = this.getUtmParamsString( {
				    utm_source: `jetformbuilder-dashboard/addons`,
				    utm_medium: `license-not-activated/${ this.themeInfo.authorSlug }`,
				    utm_campaign: 'go-pro-button',
			    } );

			return `${ pricingPageUrl }?${ utmParams }`;
		},
	},
	methods: {
		showLicensePopup() {
			this.licensePopupVisible = true;
		},

		updateAddonData( data ) {
			let slug            = data.slug,
			    addonData       = data.addonData,
			    pluginAction    = data.action,
			    reloadActionMap = [ 'activate', 'deactivate', 'update' ];

			this.allAddons[ slug ] = Object.assign( {}, this.allAddons[ slug ], addonData );

			if ( reloadActionMap.includes( pluginAction ) ) {
				this.proccesingState = true;

				setTimeout( function () {
					window.location.reload();
				}, 1000 );
			}
		},

		licenseAction() {
			var self = this;

			if ( '' === this.licenseKey ) {
				self.$CXNotice.add( {
					message: 'License key is missing',
					type: 'error',
					duration: 4000,
				} );

				return false;
			}

			this.licenseProccesingState = true;

			self.licenseAjaxAction = jQuery.ajax( {
				type: 'POST',
				url: window.JetFBPageConfig.ajaxUrl,
				dataType: 'json',
				data: {
					action: 'jfb_license_action',
					data: {
						license: self.licenseKey,
						action: self.licenseActionType,
					},
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

						licenseData[ 'license_key' ] = self.licenseKey;

						switch ( self.licenseActionType ) {
							case 'activate_license':

								self.licenseList.push( licenseData );
								break;
							case 'deactivate_license':

								self.licenseList = self.licenseList.filter( ( licenseData ) => {
									return self.licenseKey !== licenseData[ 'license_key' ];
								} );

								self.licenseKey = '';
								break;
						}

						self.licensePopupVisible = false;
					}
					else {
						self.$CXNotice.add( {
							message: responce.message,
							type: 'error',
							duration: 4000,
						} );
					}
				},
			} );
		},

		checkPluginsUpdate: function () {
			var self = this;

			self.checkUpdatesAction = jQuery.ajax( {
				type: 'POST',
				url: window.JetFBPageConfig.ajaxUrl,
				dataType: 'json',
				data: {
					action: 'jfb_license_service_action',
					data: {
						action: 'check-plugin-update',
					},
				},
				beforeSend: ( jqXHR, ajaxSettings ) => {

					if ( null !== self.checkUpdatesAction ) {
						self.checkUpdatesAction.abort();
					}

					self.checkUpdatesProcessed = true;
				},
				success: function ( responce, textStatus, jqXHR ) {
					self.checkUpdatesProcessed = false;

					if ( responce.success ) {
						self.$CXNotice.add( {
							message: responce.message,
							type: 'success',
							duration: 4000,
						} );

						self.proccesingState = true;

						setTimeout( function () {
							window.location.reload();
						}, 1000 );
					}
					else {
						self.$CXNotice.add( {
							message: responce.message,
							type: 'error',
							duration: 4000,
						} );
					}
				},
			} );
		},

		addLicense( licenseData ) {
			this.licenseList.push( licenseData );

			self.proccesingState = true;

			setTimeout( function () {
				window.location.reload();
			}, 3000 );
		},

		removeLicense( licenceKey ) {

			let removingIndex = false;

			for ( let licenceIndex in this.licenseList ) {
				let licenseData = this.licenseList[ licenceIndex ];

				if ( licenseData[ 'licenseKey' ] === licenceKey ) {
					removingIndex = licenceIndex;

					break;
				}
			}

			if ( removingIndex ) {
				this.licenseList.splice( removingIndex, 1 );
			}

			this.licensePopupVisible = false;

			setTimeout( function () {
				window.location.reload();
			}, 500 );
		},

		getUtmParamsString( data = {} ) {
			let utmString = false;

			if ( 0 === Object.keys( data ).length ) {
				return utmString;
			}

			utmString = Object.keys( data ).map( ( key ) => {
				return [ key, data[ key ] ].map( encodeURIComponent ).join( '=' );
			} ).join( '&' );

			return utmString;
		},
	},
};
</script>

<style lang="scss">

.proccesing-state {
	opacity: 0.5;
	pointer-events: none;
}

.jfb-addons-page {
	&__inner {
		padding: 30px;
		height: 100%;
	}

	&__header {
		margin-bottom: 30px;
	}

	&__header-controls {
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding-bottom: 15px;
		border-bottom: 1px solid #DCDCDD;

		> .cx-vui-button {
			margin-left: 10px;
		}
	}

	.cx-vui-button {
		font-size: 13px;
		font-weight: 400;
		background-color: transparent;

		.button-icon {
			margin-right: 5px;
		}

		&--style-accent {
			color: #007cba;
			box-shadow: inset 0 0 0 1px #007cba;

			&:hover {
				background-color: #007cba12;
			}

			.button-icon {
				path {
					fill: #007cba;
				}
			}
		}

		&--style-danger {
			color: #d6336c;
			box-shadow: inset 0 0 0 1px #d6336c;

			&:hover {
				background-color: #d6336c12;
			}

			.button-icon {
				path {
					fill: #d6336c;
				}
			}
		}

		&__content {
			> span {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
	}

	.cx-vui-popup {
		&__header {
			padding-bottom: 15px;
			border-bottom: 1px solid #DCDCDD;
			margin-bottom: 30px;
		}

		&__header-title {
			font-weight: 500;
			font-size: 24px;
			line-height: 36px;
			color: #23282D;
		}
	}

	&__license-popup {
	}

	&__license-form {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: stretch;

		> span {
			margin-bottom: 10px;
		}
	}

	&__license-input {
		margin-bottom: 10px;
	}

	.go-pro-banner {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 24px 0;
		border-bottom: 1px solid #DCDCDD;

		&__subtitle {
			font-size: 18px;
			line-height: 1.25;
			font-weight: 500;
			color: #007CBA;
			margin-bottom: 5px;
		}

		&__title {
			font-size: 24px;
			line-height: 1.25;
			font-weight: 500;
			color: #23282D;
			margin-bottom: 20px;
		}

		&__button {
			color: white;
			background-color: #007CBA;
		}
	}
}

</style>