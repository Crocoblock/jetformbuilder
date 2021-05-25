<template>
	<div
		class="jfb-addons__item"
		:class="{ 'update-avaliable': updateAvaliable, 'activate-avaliable': activateAvaliable }"
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
					<div v-if="!updateAvaliable">Your plugin is up to date</div>
					<div v-if="updateAvaliable">
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
				<div class="jfb-addons__item-actions">
					<cx-vui-button
						class="cx-vui-button--style-default"
						button-style="default"
						size="mini"
						:loading="actionPluginProcessed"
						v-if="activateAvaliable"
						@click="activatePlugin"
					>
						<span slot="label">
							<span>Activate Plugin</span>
						</span>
					</cx-vui-button>
					<cx-vui-button
						class="cx-vui-button--style-default"
						button-style="default"
						size="mini"
						:loading="actionPluginProcessed"
						v-if="deactivateAvaliable"
						@click="deactivatePlugin"
					>
						<span slot="label">
							<span>Deactivate Plugin</span>
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

		deactivateAvaliable: function() {
			return ( this.addonData['isInstalled'] && this.addonData['isActivated'] ) ? true : false;
		},

		activateAvaliable: function() {
			return ( this.addonData['isInstalled'] && ! this.addonData['isActivated'] ) ? true : false;
		},

		updateAvaliable: function() {
			return ( this.addonData['updateAvaliable'] ) ? true : false;
		},

		proccesingState: function() {
			return this.actionPluginProcessed || this.updatePluginProcessed;
		}

	},
	methods: {
		deactivatePlugin: function() {
			this.actionPlugin = 'deactivate';
			this.pluginAction();
		},

		activatePlugin: function() {
			this.actionPlugin = 'activate';
			this.pluginAction();
		},

		updatePlugin: function() {

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
					action: 'jet_fb_addon_action',
					data: {
						action: self.actionPlugin,
						plugin: self.pluginData['slug']
					}
				},
				beforeSend: function( jqXHR, ajaxSettings ) {

					if ( null !== self.actionPluginRequest ) {
						self.actionPluginRequest.abort();
					}

					switch( self.actionPlugin ) {

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

					switch(  self.actionPlugin ) {

						case 'activate':
						case 'deactivate':
							self.actionPluginProcessed = false;
							break;

						case 'update':
							self.updatePluginProcessed = false;
							break;
					}

					self.$CXNotice.add( {
						message: responce.message,
						type: responce.status,
						duration: 3000,
					} );

					if ( 'success' === responce.status ) {

						window.jfbEventBus.$emit( 'updateAddonData', {
							'slug': self.pluginData['slug'],
							'addonsData': responce.data,
						} );
					}
				}
			} );
		}
	},
}
</script>