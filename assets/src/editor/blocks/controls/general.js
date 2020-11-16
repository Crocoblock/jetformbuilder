import JetFormPresetEditor from '../controls/preset-editor';

/**
 * WordPress dependencies
 */
const { withInstanceId } = window.wp.compose;

/**
 * Internal dependencies
 */
const {
	TextControl,
	PanelBody,
	G,
	Path,
	Circle,
	Rect,
	SVG,
	Modal,
	Button,
	ButtonGroup
} = wp.components;

const { __ } = wp.i18n;

const JetFormGeneral = class extends wp.element.Component {

	constructor( props ) {
		super( props );
		this.state = {
			showPresetModal: false,
			prevPreset: null,
		};
	}

	render() {

		const result = {};
		const onChangeValue = ( value, key ) => {
			result[ key ] = value;
			this.props.onChange( result );
		};
		const closeModal = () => {
			this.setState( { showPresetModal: ! this.state.showPresetModal } )
		};

		for ( var i = 0; i < this.props.controls.length; i++) {
			result[ this.props.controls[ i ].key ] = this.props.values[ this.props.controls[ i ].key ];
		};

		/* eslint-disable jsx-a11y/no-onchange */
		return <PanelBody title={ __( 'General' ) } key={ 'test-general-key' }>
			{ this.props.controls.map( ( data, index ) => {
				switch ( data.type ) {
					case 'text':
						return <TextControl
							key={ data.key }
							label={ data.label }
							value={ result[ data.key ] }
							onChange={ newVal => {
								onChangeValue( newVal, data.key )
							} }
						/>;
					case 'dynamic_text':
						return <div
								className="jet-form-dynamic-preset"
							>
							<TextControl
								key={ data.key }
								label={ data.label }
								value={ result[ data.key ] }
								onChange={ newVal => {
									onChangeValue( newVal, data.key )
								} }
							/>
							<div
								className="jet-form-dynamic-preset__trigger"
								onClick={ () => {
									this.setState( {
										showPresetModal: ! this.state.showPresetModal,
										prevPreset: result[ data.key ]
									} )
								} }
							><SVG viewBox="0 0 54 64" fill="none" xmlns="http://www.w3.org/2000/svg"><Path d="M42.6396 26.4347C37.8682 27.3436 32.5666 28.0252 27.1894 28.0252C21.8121 28.0252 16.4348 27.3436 11.7391 26.4347C6.96774 25.4502 3.18093 23.8597 0.37868 21.9663L0.37868 28.0252C0.37868 29.5399 1.59046 31.1304 3.78682 32.4179C5.98317 33.7054 9.46704 34.9172 13.6325 35.5988C17.798 36.2805 22.115 36.8106 27.1894 36.8106C32.2637 36.8106 36.6564 36.5077 40.7462 35.5988C44.8359 34.69 48.3198 33.7054 50.5162 32.4179C52.7125 31.1304 54 29.5399 54 28.0252L54 21.9663C51.122 23.8597 47.3352 25.4502 42.6396 26.4347ZM42.6396 53.5484C37.8682 54.5329 32.5666 55.1388 27.1894 55.1388C21.8121 55.1388 16.4348 54.5329 11.7391 53.5484C7.04348 52.5638 3.18093 51.0491 0.378682 49.1556L0.378682 55.1388C0.378683 56.7293 1.59046 58.3197 3.78682 59.5315C6.36186 60.819 9.46705 62.1066 13.6325 62.7125C17.7223 63.697 22.115 64 27.1894 64C32.2637 64 36.6564 63.697 40.7462 62.7125C44.8359 61.8036 48.3198 60.819 50.5162 59.5315C52.7125 57.9411 54 56.7293 54 54.8359L54 48.8527C51.122 51.0491 47.3352 52.2608 42.6396 53.5484ZM42.6396 39.9915C37.8682 40.9004 32.5666 41.582 27.1894 41.582C21.8121 41.582 16.4348 40.9004 11.7391 39.9915C6.96774 39.007 3.18093 37.4922 0.378681 35.5988L0.378681 41.582C0.378681 43.1725 1.59046 44.6872 3.78682 45.9747C6.36185 47.2622 9.46705 48.474 13.6325 49.1556C17.7223 50.0645 22.115 50.3674 27.1894 50.3674C32.2637 50.3674 36.6564 50.0645 40.7462 49.1556C44.8359 48.1711 48.3198 47.2622 50.5162 45.9747C52.7125 44.3843 54 43.1725 54 41.582L54 35.5988C51.122 37.4922 47.3352 39.007 42.6396 39.9915ZM40.4432 2.12337C36.3535 1.13879 31.885 0.835848 26.8864 0.835849C21.8878 0.835849 17.4194 1.13879 13.2539 2.12337C9.08836 3.10794 5.68022 4.01678 3.48387 5.3043C1.28751 6.59181 -3.4782e-06 8.10654 -3.33916e-06 9.697L-2.95513e-06 14.0897C-2.81609e-06 15.6802 1.28752 17.2706 3.48387 18.5582C6.05891 19.7699 9.1641 21.0575 13.2539 21.6633C17.3436 22.2692 21.8121 22.9509 26.8864 22.9509C31.9607 22.9509 36.3535 22.9509 40.4432 22.345C44.533 21.7391 48.0169 20.4516 50.2132 19.164C52.7125 17.5736 54 15.9831 54 14.3927L54 9.99995C54 8.40948 52.7125 6.81902 50.5162 5.60724C48.3198 4.39546 44.533 2.72926 40.4432 2.12337Z" fill="#7E8993"></Path></SVG></div>
							{ this.state.showPresetModal && (
								<Modal
									onRequestClose={ closeModal }
									className={ 'jet-form-edit-modal' }
									style={ { width: '60vw' } }
									title={ 'Edit Preset' }
								>
									<div>
										<div className="jet-form-edit-modal__content">
											<JetFormPresetEditor
												value={ result[ data.key ] }
												onChange={ newVal => {
													onChangeValue( newVal, data.key )
												} }
												decode={ true }
												encode={ true }
												availableFields={ false }
											/>
										</div>
										<ButtonGroup
											className="jet-form-edit-modal__actions"
											style={ {
												position: 'sticky',
												bottom: '0',
												margin: '20px -24px -24px',
												padding: '18px 24px 20px',
												backgroundColor: '#fff',
												width: 'calc( 100% + 48px )',
												borderTop: '1px solid #ddd',
											} }
										>
											<Button
												isPrimary
												onClick={ closeModal }
											>
												Apply
											</Button>
											<Button
												isSecondary
												style={ {
													margin: '0 0 0 10px'
												} }
												onClick={ () => {
													onChangeValue( this.state.prevPreset, data.key );
													closeModal();
												} }
											>
												Cancel
											</Button>
										</ButtonGroup>
									</div> }
								</Modal>
							) }
						</div>;
				};
			})}
		</PanelBody>
		/* eslint-enable jsx-a11y/no-onchange */
	}
}

window.jetFormBuilderControlComponents = {
	...window.jetFormBuilderControlComponents,
	JetFormGeneral
};

export default withInstanceId( JetFormGeneral );