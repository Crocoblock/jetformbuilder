<template>
	<div
		class="jfb-addons__item"
		:class="{
			'activated': addonData.isActivated,
			'update-avaliable': updateAvaliable,
		}"
	>
		<div
			class="jfb-addons__item-inner"
			:class="{ 'proccesing-state': proccesingState }"
		>
			<div class="jfb-addons__item-thumb">
				<div class="pro-badge" v-if="!addonData.isInstalled">
					<svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect width="40" height="20" rx="4" fill="#EE7B16"/>
						<path
							d="M10.625 10.8301V14H9.14258V5.46875H12.4062C13.3594 5.46875 14.1152 5.7168 14.6738 6.21289C15.2363 6.70898 15.5176 7.36523 15.5176 8.18164C15.5176 9.01758 15.2422 9.66797 14.6914 10.1328C14.1445 10.5977 13.377 10.8301 12.3887 10.8301H10.625ZM10.625 9.64062H12.4062C12.9336 9.64062 13.3359 9.51758 13.6133 9.27148C13.8906 9.02148 14.0293 8.66211 14.0293 8.19336C14.0293 7.73242 13.8887 7.36523 13.6074 7.0918C13.3262 6.81445 12.9395 6.67188 12.4473 6.66406H10.625V9.64062ZM19.9531 10.7129H18.3008V14H16.8184V5.46875H19.8184C20.8027 5.46875 21.5625 5.68945 22.0977 6.13086C22.6328 6.57227 22.9004 7.21094 22.9004 8.04688C22.9004 8.61719 22.7617 9.0957 22.4844 9.48242C22.2109 9.86523 21.8281 10.1602 21.3359 10.3672L23.252 13.9238V14H21.6641L19.9531 10.7129ZM18.3008 9.52344H19.8242C20.3242 9.52344 20.7148 9.39844 20.9961 9.14844C21.2773 8.89453 21.418 8.54883 21.418 8.11133C21.418 7.6543 21.2871 7.30078 21.0254 7.05078C20.7676 6.80078 20.3809 6.67188 19.8652 6.66406H18.3008V9.52344ZM31.1152 9.95703C31.1152 10.793 30.9707 11.5273 30.6816 12.1602C30.3926 12.7891 29.9785 13.2734 29.4395 13.6133C28.9043 13.9492 28.2871 14.1172 27.5879 14.1172C26.8965 14.1172 26.2793 13.9492 25.7363 13.6133C25.1973 13.2734 24.7793 12.791 24.4824 12.166C24.1895 11.541 24.041 10.8203 24.0371 10.0039V9.52344C24.0371 8.69141 24.1836 7.95703 24.4766 7.32031C24.7734 6.68359 25.1895 6.19727 25.7246 5.86133C26.2637 5.52148 26.8809 5.35156 27.5762 5.35156C28.2715 5.35156 28.8867 5.51953 29.4219 5.85547C29.9609 6.1875 30.377 6.66797 30.6699 7.29688C30.9629 7.92188 31.1113 8.65039 31.1152 9.48242V9.95703ZM29.6328 9.51172C29.6328 8.56641 29.4531 7.8418 29.0938 7.33789C28.7383 6.83398 28.2324 6.58203 27.5762 6.58203C26.9355 6.58203 26.4336 6.83398 26.0703 7.33789C25.7109 7.83789 25.5273 8.54688 25.5195 9.46484V9.95703C25.5195 10.8945 25.7012 11.6191 26.0645 12.1309C26.4316 12.6426 26.9395 12.8984 27.5879 12.8984C28.2441 12.8984 28.748 12.6484 29.0996 12.1484C29.4551 11.6484 29.6328 10.918 29.6328 9.95703V9.51172Z"
							fill="white"/>
					</svg>
				</div>
				<img :src="addonData.thumb" alt="">
			</div>
			<div class="jfb-addons__item-info">
				<div class="jfb-addons__item-name">
					<span class="label">{{ addonData.name }}</span>
					<span class="version">{{ addonData.currentVersion }}</span>
				</div>
				<div
					class="jfb-addons__item-update"
					v-if="$parent.isLicenseActivated"
				>
					<div v-if="!updateAvaliable">Your plugin is up to date</div>
					<div v-if="updateAvaliable">
						Version <span class="latest-version">{{ addonData.version }}</span> available
						<cx-vui-button
							button-style="link-accent"
							size="link"
							:loading="updatePluginProcessed"
							@click="updatePlugin"
							v-if="!activateLicenceActionAvaliable && isLicenseMode"
						>
							<span slot="label">
								<span>Update Now</span>
							</span>
						</cx-vui-button>
					</div>
				</div>
				<div
					class="jfb-addons__item-license"
					v-if="activateLicenceActionAvaliable"
				>
					<span>License not activated</span>
					<cx-vui-button
						button-style="link-accent"
						size="link"
						@click="activateLicense"
					>
						<span slot="label">
							<span>Activate Now</span>
						</span>
					</cx-vui-button>
				</div>
				<div
					class="jfb-addons__item-desc"
				>
					<span v-html="addonData.desc"></span>
					<a :href="learnMoreUrl" target="_blank">Learn More</a>
				</div>
				<div class="jfb-addons__item-actions">

					<cx-vui-button
						button-style="link-accent"
						size="link"
						:loading="actionPluginProcessed"
						v-if="installActionAvaliable"
						@click="installPlugin"
					>
						<span slot="label">
							<span>Install Addon</span>
						</span>
					</cx-vui-button>
					<cx-vui-button
						button-style="link-accent"
						size="link"
						:loading="actionPluginProcessed"
						v-if="activateActionAvaliable"
						@click="activatePlugin"
					>
						<span slot="label">
							<span>Activate Addon</span>
						</span>
					</cx-vui-button>
					<cx-vui-button
						button-style="link-error"
						size="link"
						:loading="actionPluginProcessed"
						v-if="deactivateActionAvaliable"
						@click="deactivatePlugin"
					>
						<span slot="label">
							<span>Deactivate Addon</span>
						</span>
					</cx-vui-button>
				</div>
			</div>
		</div>

	</div>
</template>

<script>

export default {
	name: 'addon-item',
	props: {
		addonData: Object,
	},
	data() {
		return {
			actionPlugin: false,
			actionPluginRequest: null,
			actionPluginProcessed: false,
			updatePluginProcessed: false,
		};
	},
	computed: {
		classList: function () {
			return [
				'jfb-addons__item',
				this.updateAvaliable ? 'update-avaliable' : false,
				this.activateAvaliable ? 'activate-avaliable' : false,
			];
		},

		learnMoreAvaliable() {
			return (
				       !this.$parent.isLicenseActivated
			       ) ? true : false;
		},

		activateLicenceActionAvaliable() {
			return (
				       !this.$parent.isLicenseActivated && this.$parent.isLicenseMode
			       ) ? true : false;
		},

		installActionAvaliable() {
			return (
				       !this.addonData[ 'isInstalled' ] && this.$parent.isLicenseActivated
			       ) ? true : false;
		},

		activateActionAvaliable() {
			return (
				       this.addonData[ 'isInstalled' ] && !this.addonData[ 'isActivated' ]
			       ) ? true : false;
		},

		deactivateActionAvaliable() {
			return (
				       this.addonData[ 'isInstalled' ] && this.addonData[ 'isActivated' ]
			       ) ? true : false;
		},

		updateAvaliable() {
			return (
				       this.addonData[ 'updateAvaliable' ]
			       ) ? true : false;
		},

		isLicenseMode() {
			return this.$parent.isLicenseMode;
		},

		proccesingState() {
			return this.actionPluginProcessed || this.updatePluginProcessed;
		},

		learnMoreUrl() {
			const license      = this.$parent.isLicenseActivated ? 'jetformbuilder-license' : 'license-not-activated';
			const [ campaign ] = this.addonData.slug.split( '/' );

			let demoUrl   = this.addonData.demo,
			    utmParams = this.$parent.getUtmParamsString( {
				    utm_source: `plugin`,
				    utm_medium: 'addons',
				    utm_campaign: campaign.replace( 'jet-form-builder-', '' ),
				    utm_content: `${ license }/${ this.$parent.themeInfo.authorSlug }`,
			    } );

			return `${ demoUrl }?${ utmParams }`;
		},

	},
	methods: {

		activateLicense() {
			window.jfbEventBus.$emit( 'showLicensePopup' );
		},

		installPlugin() {
			this.actionPlugin = 'install';
			this.pluginAction();
		},

		deactivatePlugin() {
			this.actionPlugin = 'deactivate';
			this.pluginAction();
		},

		activatePlugin() {
			this.actionPlugin = 'activate';
			this.pluginAction();
		},

		updatePlugin() {

			if ( this.updateAvaliable ) {
				this.actionPlugin = 'update';
				this.pluginAction();
			}
		},

		pluginAction: function () {
			let self = this;

			self.actionPluginRequest = jQuery.ajax( {
				type: 'POST',
				url: window.JetFBPageConfig.ajaxUrl,
				dataType: 'json',
				data: {
					action: `jfb_addon_${ self.actionPlugin }_action`,
					nonce: window.JetFBPageConfig.nonce,
					data: {
						plugin: self.addonData[ 'slug' ],
					},
				},
				beforeSend: function ( jqXHR, ajaxSettings ) {

					if ( null !== self.actionPluginRequest ) {
						self.actionPluginRequest.abort();
					}

					switch ( self.actionPlugin ) {
						case 'install':
						case 'activate':
						case 'deactivate':
							self.actionPluginProcessed = true;
							break;
						case 'update':
							self.updatePluginProcessed = true;
							break;
					}
				},
				success: function ( responce, textStatus, jqXHR ) {
					if ( responce.success ) {
						self.$CXNotice.add( {
							message: responce.message,
							type: 'success',
							duration: 4000,
						} );

						window.jfbEventBus.$emit( 'updateAddonData', {
							slug: self.addonData[ 'slug' ],
							addonData: responce.data,
							action: self.actionPlugin,
						} );

					}
					else {
						self.$CXNotice.add( {
							message: responce.message,
							type: 'error',
							duration: 4000,
						} );
					}
				},
				error: function ( jqXHR, textStatus, errorThrown ) {
					self.$CXNotice.add( {
						message: errorThrown,
						type: 'error',
						duration: 4000,
					} );
				},
				complete: () => this.onEndRequest(),
			} );
		},
		onEndRequest() {
			switch ( this.actionPlugin ) {
				case 'install':
				case 'activate':
				case 'deactivate':
					this.actionPluginProcessed = false;
					break;
				case 'update':
					this.updatePluginProcessed = false;
					break;
			}
		},
	},
};
</script>

<style lang="scss">

.jfb-addons {
	margin-bottom: 50px;

	&:last-child {
		margin-bottom: 0;
	}

	a {
		color: #007cba;
	}

	&__header {
		margin-bottom: 20px;
	}

	&__list {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 40px;

		@media (max-width: 1140px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	&__item {
		transition: box-shadow .3s ease-out;
		border-radius: 10px;

		&:hover {
			box-shadow: 0px 4px 28px rgba(15, 23, 42, 0.1);
		}

		&.activated {
			.jfb-addons__item-info {
				background-color: white;
			}
		}

		&.update-avaliable {
			.jfb-addons__item-name {
				.version {
					background-color: #D6336C;
				}
			}

			.jfb-addons__item-update {
				.latest-version {
					color: white;
					background-color: #46B450;
					padding: 2px 8px;
					border-radius: 4px;
				}
			}
		}
	}

	&__item-inner {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		height: 100%;
	}

	&__item-thumb {
		border-radius: 10px 10px 0 0;
		line-height: 0;
		overflow: hidden;
		position: relative;

		.pro-badge {
			position: absolute;
			top: 12px;
			left: 12px;
		}

		img {
			width: 100%;
			height: auto;
		}
	}

	&__item-info {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		flex: 1 1 auto;
		padding: 20px;
		border-radius: 0 0 10px 10px;
		border-width: 0 1px 1px 1px;
		border-color: #DCDCDD;
		border-style: solid;
		background-color: white;
	}

	&__item-name {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 10px;

		.label {
			font-size: 20px;
			font-weight: 700;
			line-height: 1.25;
		}

		.version {
			padding: 1px 8px;
			border-radius: 4px;
			color: white;
			background-color: #46B450;
			margin-left: 10px;
		}
	}

	&__item-update {
		color: #7b7e81;
		margin-bottom: 10px;
	}

	&__item-license {
		margin-bottom: 10px;
		color: #7b7e81;

		.cx-vui-button {
			margin-left: 3px;
		}
	}

	&__item-desc {
		flex: 1 1 auto;

		a {
			text-decoration: none;
		}
	}

	&__item-actions {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 20px;

		&:empty {
			display: none;
		}

		.cx-vui-button {
			margin-right: 20px;
		}
	}
}

</style>