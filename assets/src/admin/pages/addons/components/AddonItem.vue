<template>
	<div
		class="jfb-addons__item"
		:class="{
			'activated': addonData.isActivated,
			'update-avaliable': updateActionAvaliable,
		}"
	>
		<div
			class="jfb-addons__item-inner"
			:class="{ 'proccesing-state': proccesingState }"
		>
			<div class="jfb-addons__item-thumb">
				<img
					:src="addonData.thumb"
				>
			</div>
			<div class="jfb-addons__item-info">
				<div class="jfb-addons__item-name">
					<span class="label">{{ addonData.name }}</span>
					<span class="version">{{ addonData.currentVersion }}</span>
				</div>
				<div
					class="jfb-addons__item-update"
				>
					<div v-if="!updateActionAvaliable">Your plugin is up to date</div>
					<div v-if="updateActionAvaliable">
						Version <span class="latest-version">{{ addonData.version }}</span> available
						<cx-vui-button
							button-style="link-accent"
							size="link"
							:loading="updatePluginProcessed"
							@click="updatePlugin"
						>
							<span slot="label">
								<span>Update Now</span>
							</span>
						</cx-vui-button>
					</div>
				</div>
				<div
					class="jfb-addons__item-license"
				>
					<span>License not activated</span>
					<cx-vui-button
						button-style="link-accent"
						size="link"
						v-if="activateLicenceActionAvaliable"
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
					<a :href="addonData.demo" target="_blank">Learn More</a>
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
						button-style="link-accent"
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
		addonData: Object
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
		classList: function() {
			return [
				'jfb-addons__item',
				this.updateAvaliable ? 'update-avaliable' : false,
				this.activateAvaliable ? 'activate-avaliable' : false,
			];
		},

		learnMoreAvaliable() {
			return ( ! this.$parent.isLicenseActivated ) ? true : false;
		},

		activateLicenceActionAvaliable() {
			return ( ! this.$parent.isLicenseActivated ) ? true : false;
		},

		installActionAvaliable() {
			return ( ! this.addonData['isInstalled'] && this.$parent.isLicenseActivated ) ? true : false;
		},

		activateActionAvaliable() {
			return ( this.addonData['isInstalled'] && ! this.addonData['isActivated'] ) ? true : false;
		},

		deactivateActionAvaliable() {
			return ( this.addonData['isInstalled'] && this.addonData['isActivated'] ) ? true : false;
		},

		updateActionAvaliable() {
			return ( this.addonData['updateAvaliable'] ) ? true : false;
		},

		proccesingState() {
			return this.actionPluginProcessed || this.updatePluginProcessed;
		}

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

			if ( this.updateActionAvaliable ) {
				this.actionPlugin = 'update';
				this.pluginAction();
			}
		},

		pluginAction: function() {
			let self = this;

			self.actionPluginRequest = jQuery.ajax( {
				type: 'POST',
				url: window.JetFBPageConfig.ajaxUrl,
				dataType: 'json',
				data: {
					action: 'jfb_addon_action',
					data: {
						action: self.actionPlugin,
						plugin: self.addonData['slug']
					}
				},
				beforeSend: function( jqXHR, ajaxSettings ) {

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
				success: function( responce, textStatus, jqXHR ) {

					switch ( self.actionPlugin ) {
						case 'install':
						case 'activate':
						case 'deactivate':
							self.actionPluginProcessed = false;
							break;
						case 'update':
							self.updatePluginProcessed = false;
							break;
					}

					if ( responce.success ) {
						self.$CXNotice.add( {
							message: responce.message,
							type: 'success',
							duration: 4000,
						} );

						window.jfbEventBus.$emit( 'updateAddonData', {
							slug: self.addonData['slug'],
							addonData: responce.data,
							action: self.actionPlugin,
						} );

					} else {
						self.$CXNotice.add( {
							message: responce.message,
							type: 'error',
							duration: 4000,
						} );
					}
				}
			} );
		}
	},
}
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
		gap: 20px;

		@media (max-width: 1140px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	&__item {

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
					padding: 1px 5px;
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
		background-color: #efefef;
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
			padding: 3px 8px;
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