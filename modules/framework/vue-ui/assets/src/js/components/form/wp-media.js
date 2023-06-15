import { oneOf } from '../../utils/assist';
import { checkConditions } from '../../mixins/check-conditions';
import { SlickList, SlickItem } from '../../../../../node_modules/vue-slicksort';

const WpMedia = {
	name: 'cx-vui-wp-media',
	template: '#cx-vui-wp-media',
	mixins: [ checkConditions ],
	props: {
		returnType: {
			validator ( value ) {
				return oneOf( value, [ 'string', 'array' ] );
			},
			default: 'string'
		},
		mediaType: {
			validator ( value ) {
				return oneOf( value, [ 'image', 'video' ] );
			},
			default: 'image'
		},
		value: {
			type: [String],
			default: ''
		},
		size: {
			validator ( value ) {
				return oneOf( value, [ 'small', 'large', 'default' ] );
			},
			default: 'default'
		},
		name: {
			type: String
		},
		elementId: {
			type: String
		},
		conditions: {
			type: Array,
			default: function() {
				return [];
			}
		},
		multiple: {
			type: Boolean,
			default: true
		},
		mediaPopupTitle: {
			type: String
		},
		mediaPopupButton: {
			type: String
		},
		// Wrapper related props (should be passed into wrapper component)
		preventWrap: {
			type: Boolean,
			default: false
		},
		label: {
			type: String
		},
		description: {
			type: String
		},
		wrapperCss: {
			type: Array,
			default: function() {
				return [];
			}
		},
	},
	components: {
		SlickList,
		SlickItem
	},
	data() {
		return {
			currentValue: this.value,
			currentId: this.elementId,
			attachmentList: [],
			wpMedia: false
		};
	},
	mounted() {

		if ( ! this.currentId && this.name ) {
			this.currentId = 'cx_' + this.name;
		}

		this.wpMedia = wp.media.frames.file_frame = wp.media({
			title: this.mediaPopupTitle,
			button: { text: this.mediaPopupButton },
			library : { type : this.mediaType },
			multiple: this.multiple
		});

		this.wpMedia.on( 'select', () => {
			let mediaAttachments = this.wpMedia.state().get( 'selection' ).toJSON(),
				newAttachments      = [];

			if ( this.multiple ) {
				for ( let attachment of mediaAttachments ) {

					if ( ! this.attachmentIdList.includes( attachment.id ) ) {
						newAttachments.push( attachment );
					}
				}

				this.attachmentList = this.attachmentList.concat( newAttachments );
			} else {
				this.attachmentList = mediaAttachments;
			}

			this.setCurrentValue();
		} );

		this.getAttachmentsData();
	},

	computed: {
		controlClasses: function() {
			let classesList = [ 'cx-vui-media' ];

			classesList.push( 'size-' + this.size );

			return classesList;
		},

		inputValue: function() {

			if ( 'array' === this.returnType ) {
				return JSON.stringify( this.currentValue );
			}

			return this.currentValue;
		},

		attachmentIdList: function() {

			return this.attachmentList.map( ( item ) => {

				return item.id;
			} );
		}
	},
	methods: {
		getAttachmentsData() {

			if ( false === this.currentValue || '' === this.currentValue ) {
				return;
			}

			let thisVue       = this,
				attachmentIds = [],
				attachments   = [];

			switch( this.returnType ) {
				case 'string':
					attachmentIds = this.currentValue.split( ',' );
					break;

				case 'array':
					attachmentIds = this.currentValue;
					break;
			}

			wp.media
				.query( { post__in: attachmentIds } )
				.more()
				.then( function () {

					for ( let attachmentId of attachmentIds ) {

						attachments.push( wp.media.attachment( attachmentId ).attributes );
					}

					thisVue.attachmentList = attachments;
				} );
		},

		openWpMediaPopup() {
			this.wpMedia.open();
		},

		removeAttachment( id ) {

			this.attachmentList = this.attachmentList.filter( function( obj ) {
				return obj.id !== id;
			} );

			this.setCurrentValue();
		},

		sortInput( sortedList ) {
			this.setCurrentValue();
		},

		setCurrentValue() {
			let currentValue;

			switch( this.returnType ) {
				case 'string':
					currentValue = this.attachmentIdList.join( ',' );
					break;

				case 'array':
					currentValue = this.attachmentIdList;
					break;
			}

			this.$emit( 'input', currentValue );
			this.currentValue = currentValue;
			this.$emit( 'on-change', currentValue );
		},
	},
};

export default WpMedia;
