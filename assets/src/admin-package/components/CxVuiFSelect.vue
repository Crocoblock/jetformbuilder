<template>
	<div class="cx-vui-f-select">
		<div :class="{
			'cx-vui-f-select__selected': true,
			'cx-vui-f-select__selected-not-empty': this.currentValues.length > 0
		}">
			<div
				v-for="option in selectedOptions"
				class="cx-vui-f-select__selected-option"
				@click="handleResultClick( option.value )"
			>
				<span class="cx-vui-f-select__selected-option-icon">
					<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.00671L6.00671 5L10 8.99329L8.99329 10L5 6.00671L1.00671 10L0 8.99329L3.99329 5L0 1.00671L1.00671 0L5 3.99329L8.99329 0L10 1.00671Z"/></svg>
				</span>
				{{ option.label }}
			</div>
		</div>
		<div
			v-click-outside.capture="onClickOutside"
			v-click-outside:mousedown.capture="onClickOutside"
			v-click-outside:touchstart.capture="onClickOutside"

			@keydown.up.prevent="handleOptionsNav"
			@keydown.down.prevent="handleOptionsNav"
			@keydown.tab="handleOptionsNav"
			@keydown.enter="handleEnter"

			class="cx-vui-f-select__control"
		>
			<input
				:id="currentId"
				:placeholder="placeholder"
				:autocomplete="autocomplete"
				type="text"
				:value="query"
				@input="handleInput"
				@focus="handleFocus"
				:class="{
					'cx-vui-f-select__input': true,
					'cx-vui-input--in-focus': this.inFocus,
					'cx-vui-input': true,
					'size-fullwidth': true,
					'has-error': error,
				}"
			>
			<div class="cx-vui-f-select__results" v-if="inFocus">
				<div v-if="remote && loading" class="cx-vui-f-select__results-loading" v-html="loadingMessage"></div>
				<div
					v-else-if="remote && charsDiff > 0"
					v-html="parsedRemoteTriggerMessage"
					class="cx-vui-f-select__results-message"
				></div>
				<div
					v-else-if="! filteredOptions.length"
					v-html="notFoundMeassge"
					class="cx-vui-f-select__results-message"
				></div>
				<div v-else>
					<div
						v-for="( option, optionIndex ) in filteredOptions"
						:class="{
							'cx-vui-f-select__result': true,
							'in-focus': optionIndex === optionInFocus,
							'is-selected': isOptionSelected( option )
						}"
						@click="handleResultClick( option.value )"
					>{{ option.label }}</div>
				</div>
			</div>
		</div>
		<select
			:placeholder="placeholder"
			:disabled="disabled"
			:readonly="readonly"
			:name="name"
			:multiple="multiple"
			:value="currentValues"
			class="cx-vui-f-select__select-tag"
		>
			<option
				v-for="option in currentValues"
				:value="option"
				selected
			></option>
		</select>
	</div>
</template>

<script>
import { directive as clickOutside } from 'v-click-outside-x';

export default {
	name: 'CxVuiFSelect',
	mixins: [ checkConditions ],
	directives: { clickOutside },
	props: {
		value: {
			type: [ String, Number, Array ],
			default: '',
		},
		placeholder: {
			type: String,
			default: '',
		},
		optionsList: {
			type: Array,
			default: function () {
				return [];
			},
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
		name: {
			type: String,
		},
		error: {
			type: Boolean,
			default: false,
		},
		multiple: {
			type: Boolean,
			default: false,
		},
		elementId: {
			type: String,
		},
		autocomplete: {
			validator( value ) {
				return oneOf( value, [ 'on', 'off' ] );
			},
			default: 'off',
		},
		conditions: {
			type: Array,
			default: function () {
				return [];
			},
		},
		remote: {
			type: Boolean,
			default: false,
		},
		remoteCallback: {
			type: Function,
		},
		remoteTrigger: {
			type: Number,
			default: 3,
		},
		remoteTriggerMessage: {
			type: String,
			default: 'Please enter %d char(s) to start search',
		},
		notFoundMeassge: {
			type: String,
			default: 'There is no items find matching this query',
		},
		loadingMessage: {
			type: String,
			default: 'Loading...',
		},
		// Wrapper related props (should be passed into wrapper component)
		preventWrap: {
			type: Boolean,
			default: false,
		},
		label: {
			type: String,
		},
		description: {
			type: String,
		},
		wrapperCss: {
			type: Array,
			default: function () {
				return [];
			},
		},
	},
	data() {
		return {
			options: this.optionsList,
			currentValues: this.value,
			currentId: this.elementId,
			selectedOptions: [],
			query: '',
			inFocus: false,
			optionInFocus: false,
			loading: false,
			loaded: false,
		};
	},
	watch: {
		value( newValue, oldValue ) {

			if ( this.multiple ) {

				if ( arraysEqual( newValue, oldValue ) ) {
					return;
				}

			}
			else {

				if ( newValue === oldValue ) {
					return;
				}

			}

			this.storeValues( newValue );

		},
		optionsList( options ) {
			this.setOptions( options );
		},
	},
	created() {

		if ( !this.currentValues ) {
			this.currentValues = [];
		}
		else if ( 'object' !== typeof this.currentValues ) {
			if ( '[object Array]' === Object.prototype.toString.call( this.currentValues ) ) {

			}
			else {
				this.currentValues = [ this.currentValues ];
			}
		}

	},
	mounted() {

		if ( !this.currentId && this.name ) {
			this.currentId = 'cx_' + this.name;
		}

		if ( this.remote && this.remoteCallback && this.currentValues.length ) {
			this.remoteUpdateSelected();
		}
		else if ( this.currentValues.length ) {
			this.options.forEach( option => {
				if ( oneOf( option.value, this.currentValues ) ) {
					this.selectedOptions.push( option );
				}
			} );
		}

	},
	computed: {
		filteredOptions() {
			if ( !this.query ) {
				return this.options;
			}
			else {
				return this.options.filter( option => {
					if ( this.remote ) {
						return true;
					}
					else {
						return option.label.includes( this.query ) || option.value.includes( this.query );
					}
				} );
			}
		},
		parsedRemoteTriggerMessage() {
			return this.remoteTriggerMessage.replace( /\%d/g, this.charsDiff );
		},
		charsDiff() {

			let queryLength = 0;

			if ( this.query ) {
				queryLength = this.query.length;
			}

			return this.remoteTrigger - queryLength;
		},
	},
	methods: {
		remoteUpdateSelected() {

			this.loading = true;

			const promise = this.remoteCallback( this.query, this.currentValues );

			if ( promise && promise.then ) {
				promise.then( options => {
					if ( options ) {
						this.selectedOptions = options;
						this.loaded          = true;
						this.loading         = false;
					}
				} );
			}

		},
		setValues( values ) {

			values = values || [];

			this.selectedOptions = [];
			this.currentValues   = [];

			this.storeValues( values );

		},
		handleFocus( event ) {
			this.inFocus = true;
			this.$emit( 'on-focus', event );
		},
		handleOptionsNav( event ) {

			// next
			if ( 'ArrowUp' === event.key || 'Tab' === event.key ) {
				this.navigateOptions( -1 );
			}
			// prev
			if ( 'ArrowDown' === event.key ) {
				this.navigateOptions( 1 );
			}

		},
		navigateOptions( direction ) {

			if ( false === this.optionInFocus ) {
				this.optionInFocus = -1;
			}

			let index     = this.optionInFocus + direction;
			let maxLength = this.filteredOptions.length - 1;

			if ( maxLength < 0 ) {
				maxLength = 0;
			}

			if ( index < 0 ) {
				index = 0;
			}
			else if ( index > maxLength ) {
				index = maxLength;
			}

			this.optionInFocus = index;

		},
		onClickOutside( event ) {

			if ( this.inFocus ) {
				this.inFocus = false;
				this.$emit( 'on-blur', event );
			}

		},
		handleInput( event ) {

			let value = event.target.value;

			this.query = value;

			this.$emit( 'input', this.currentValues );
			this.$emit( 'on-change', event );

			if ( !this.inFocus ) {
				this.inFocus = true;
			}

			if ( this.remote && this.remoteCallback && this.charsDiff <= 0 && !this.loading ) {

				this.loading = true;

				const promise = this.remoteCallback( this.query, [] );

				if ( promise && promise.then ) {
					promise.then( options => {
						if ( options ) {
							this.options = options;
							this.loaded  = true;
							this.loading = false;
						}
					} );
				}

			}
			else if ( this.remote && this.remoteCallback && this.loaded && this.charsDiff > 0 ) {
				this.resetRemoteOptions();
			}

		},
		handleEnter() {

			if ( false === this.optionInFocus || !this.options[ this.optionInFocus ] ) {
				return;
			}

			let value = this.filteredOptions[ this.optionInFocus ].value;

			this.handleResultClick( value );

		},
		handleResultClick( value ) {

			if ( oneOf( value, this.currentValues ) ) {
				this.removeValue( value );
			}
			else {
				this.storeValues( value );
			}

			this.$emit( 'input', this.currentValues );
			this.$emit( 'on-change', this.currentValues );

			this.inFocus       = false;
			this.optionInFocus = false;
			this.query         = '';

			if ( this.remote && this.remoteCallback && this.loaded ) {
				this.resetRemoteOptions();
			}

		},
		resetRemoteOptions() {
			this.options = [];
			this.loaded  = false;
		},
		removeValue( value ) {
			this.currentValues.splice( this.currentValues.indexOf( value ), 1 );
			this.removeFromSelected( value );
		},
		removeFromSelected( value ) {
			this.selectedOptions.forEach( ( option, index ) => {
				if ( option.value === value ) {
					this.selectedOptions.splice( index, 1 );
				}
			} );
		},
		pushToSelected( value, single ) {
			this.options.forEach( option => {
				if ( option.value === value ) {
					if ( !single ) {
						this.selectedOptions.push( option );
					}
					else {
						this.selectedOptions = [ option ];
					}
				}
			} );
		},
		storeValues( value ) {

			if ( oneOf( value, this.currentValues ) ) {
				return;
			}

			if ( this.multiple ) {

				if ( 'object' === typeof value ) {

					if ( '[object Array]' === Object.prototype.toString.call( value ) ) {

						value.forEach( singleVal => {
							if ( !oneOf( singleVal, this.currentValues ) ) {
								this.currentValues.push( singleVal );
								this.pushToSelected( singleVal );
							}
						} );

					}
					else {

						this.currentValues.push( value );
						this.pushToSelected( value );
					}

				}
				else {

					this.currentValues.push( value );
					this.pushToSelected( value );
				}

			}
			else {

				if ( 'object' === typeof value ) {

					if ( '[object Array]' === Object.prototype.toString.call( value ) ) {

						this.currentValues = value;

						value.forEach( singleVal => {
							this.pushToSelected( singleVal, true );
						} );

					}
					else {

						this.currentValues = [ value ];
						this.pushToSelected( value, true );
					}
				}
				else {

					this.currentValues = [ value ];
					this.pushToSelected( value, true );
				}

			}

		},
		setOptions( options ) {
			this.options = options;
		},
		isOptionSelected( option ) {

			if ( !this.currentValues ) {
				return false;
			}

			return oneOf( option.value, this.currentValues );

		},
	},
};
</script>

<style scoped>

</style>