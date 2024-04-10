<template>
	<div
		:class="classes"
	>
		<div class="alert-type-line"></div>
		<div class="alert-icon" v-html="iconHtml"></div>
		<div class="alert-content">
			<div class="alert-title" v-if="config.title" v-html="config.title"></div>
			<div class="alert-message" v-if="config.message" v-html="config.message"></div>
			<div class="alert-buttons" v-if="$slots['alert-buttons']">
				<slot name="alert-buttons"></slot>
			</div>
			<div class="alert-buttons" v-else-if="config.buttons">
				<cx-vui-button
					v-for="(button, index) in config.buttons"
					:key="`button-alert-${index}`"
					:class="`cx-vui-button--style-${button.type}`"
					:button-style="button.style"
					size="mini"
					:url="button.url"
					:tag-name="button.rest.url ? 'button' : 'a'"
					:target="button.rest.url ? '' : '_blank'"
					@click="emitClick( $event, button )"
				>
					<template #label>{{ button.label }}</template>
				</cx-vui-button>
			</div>
		</div>
		<div
			class="alert-close"
			@click="closeAlert"
		>
			<svg width="20" height="20" viewBox="0 0 14 14" fill="#dcdcdd" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M12 3.00671L8.00671 7L12 10.9933L10.9933 12L7 8.00671L3.00671 12L2 10.9933L5.99329 7L2 3.00671L3.00671 2L7 5.99329L10.9933 2L12 3.00671Z"></path>
			</svg>
		</div>
	</div>
</template>

<script>
const { LocalStorage }             = JetFBActions;
const { mapGetters, mapMutations } = Vuex;

export default {
	name: 'AlertItem',
	props: {
		id: String,
	},
	created: function () {
		/**
		 * Hide alert if it already closed
		 */
		// this.alertVisible = ...

	},
	computed: {
		...mapGetters( [
			'getNotice',
		] ),
		config() {
			return this.getNotice( this.id );
		},
		type: function () {
			return this.config?.type ?? false;
		},
		classes: function () {
			return [
				'jet-form-builder-page__alert',
				`${ this.type }-type`,
			];
		},
		iconHtml: function () {
			let defaultIcon = false;

			switch ( this.type ) {
				case 'info':
					defaultIcon = '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
						'<rect width="48" height="48" rx="6" fill="#3B82F6"/>\n' +
						'<path fill-rule="evenodd" clip-rule="evenodd" d="M41.5139 13.0012C42.0764 12.9665 42.3973 13.698 42.0236 14.1629L38.6968 18.3017C38.3072 18.7863 37.5812 18.4765 37.5888 17.8288L37.6086 16.1496C37.6112 15.9296 37.5197 15.721 37.3617 15.5867L36.1556 14.5617C35.6904 14.1664 35.9207 13.3462 36.5071 13.31L41.5139 13.0012ZM15.0432 23.8698C15.0432 27.8345 11.8023 31.0473 7.80863 31.0473C6.80792 31.0473 6 30.2406 6 29.2517C6 28.2628 6.80792 27.4608 7.80863 27.4608C9.80547 27.4608 11.4259 25.8521 11.4259 23.8698V18.4878C11.4259 17.4944 12.2338 16.6923 13.2345 16.6923C14.2352 16.6923 15.0432 17.4944 15.0432 18.4878V23.8698ZM34.5433 23.8698C34.5433 25.8521 36.1638 27.4608 38.1606 27.4608C39.1613 27.4608 39.9692 28.2583 39.9692 29.2517C39.9692 30.2452 39.1613 31.0473 38.1606 31.0473C34.1669 31.0473 30.9261 27.8345 30.9261 23.8698V18.4878C30.9261 17.4944 31.734 16.6923 32.7347 16.6923C33.7354 16.6923 34.5433 17.4989 34.5433 18.4878V20.0965H35.9801C36.9809 20.0965 37.7934 20.9031 37.7934 21.8965C37.7934 22.89 36.9809 23.6966 35.9801 23.6966H34.5433V23.8698ZM29.8887 21.3543C29.8933 21.3497 29.8979 21.3497 29.8979 21.3497C29.3286 19.8641 28.2637 18.5608 26.7764 17.704C23.3244 15.7171 18.9175 16.8929 16.9299 20.3289C14.9376 23.7604 16.122 28.1489 19.5694 30.1313C22.1079 31.5896 25.1651 31.3344 27.3961 29.7303L27.3823 29.712C27.8964 29.3976 28.2361 28.8325 28.2361 28.19C28.2361 27.2011 27.4282 26.399 26.4321 26.399C25.9501 26.399 25.5094 26.5859 25.1881 26.8957C24.1047 27.6203 22.6633 27.7343 21.4469 27.0689L28.7319 23.7103C29.1542 23.5827 29.5306 23.3002 29.7647 22.89C30.0493 22.4024 30.0769 21.8419 29.8887 21.3543ZM24.9723 20.8074C25.1881 20.9305 25.3809 21.0717 25.5599 21.2267L19.5648 23.9837C19.551 23.3503 19.7071 22.7077 20.0468 22.1199C21.0429 20.4064 23.2463 19.8185 24.9723 20.8074Z" fill="white"/>\n' +
						'</svg>';
					break;

				case 'success':
					defaultIcon = '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM14.58 28.58L7.4 21.4C6.62 20.62 6.62 19.36 7.4 18.58C8.18 17.8 9.44 17.8 10.22 18.58L16 24.34L29.76 10.58C30.54 9.8 31.8 9.8 32.58 10.58C33.36 11.36 33.36 12.62 32.58 13.4L17.4 28.58C16.64 29.36 15.36 29.36 14.58 28.58Z" fill="url(#successNoticeType)"/><defs><linearGradient id="successNoticeType" x1="40" y1="40" x2="-3.8147e-06" y2="3.8147e-06" gradientUnits="userSpaceOnUse"><stop stop-color="#D1F540"/><stop offset="1" stop-color="#1ED01E"/></linearGradient></defs></svg>';
					break;

				case 'danger':
					defaultIcon = '<svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.94024 35.0001H35.0602C38.1402 35.0001 40.0602 31.6601 38.5202 29.0001L23.4602 2.98011C21.9202 0.320107 18.0802 0.320107 16.5402 2.98011L1.48024 29.0001C-0.0597575 31.6601 1.86024 35.0001 4.94024 35.0001ZM20.0002 21.0001C18.9002 21.0001 18.0002 20.1001 18.0002 19.0001V15.0001C18.0002 13.9001 18.9002 13.0001 20.0002 13.0001C21.1002 13.0001 22.0002 13.9001 22.0002 15.0001V19.0001C22.0002 20.1001 21.1002 21.0001 20.0002 21.0001ZM22.0002 29.0001H18.0002V25.0001H22.0002V29.0001Z" fill="url(#dangerNoticeType)"/><defs><linearGradient id="dangerNoticeType" x1="39.063" y1="35.0001" x2="5.26814" y2="-2.87862" gradientUnits="userSpaceOnUse"><stop stop-color="#FEDB22"/><stop offset="1" stop-color="#FFA901"/></linearGradient></defs></svg>';
					break;

				case 'error':
					defaultIcon = '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 22C18.9 22 18 21.1 18 20V12C18 10.9 18.9 10 20 10C21.1 10 22 10.9 22 12V20C22 21.1 21.1 22 20 22ZM22 30H18V26H22V30Z" fill="black"/><path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 22C18.9 22 18 21.1 18 20V12C18 10.9 18.9 10 20 10C21.1 10 22 10.9 22 12V20C22 21.1 21.1 22 20 22ZM22 30H18V26H22V30Z" fill="url(#errorNoticeType)"/><defs><linearGradient id="errorNoticeType" x1="40" y1="40" x2="0" y2="0" gradientUnits="userSpaceOnUse"><stop stop-color="#FF8B8B"/><stop offset="1" stop-color="#F5435A"/></linearGradient></defs></svg>';
					break;
			}

			return this.config?.icon || defaultIcon;
		},
	},

	methods: {
		...mapMutations( [
			'clearNoticeById',
		] ),
		closeAlert: function () {
			this.clearNoticeById( this.id );
		},
		emitClick( target, button ) {
			jfbEventBus.$emit( 'alert-click-' + button.slug, { self: this, target, button } );
		},
	},
};
</script>

<style>

</style>