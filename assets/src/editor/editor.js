const {
	useEffect,
	useState
} = wp.element;

const {
	BlockEditorKeyboardShortcuts,
	BlockEditorProvider,
	BlockList,
	BlockInspector,
	WritingFlow,
	ObserveTyping,
	Inserter,
} = wp.blockEditor;

const {
	Popover,
	SlotFillProvider,
	DropZoneProvider,
	Button,
} = wp.components;

const {
	getBlockTypes,
	unregisterBlockType
} = wp.blocks;

const {
	registerCoreBlocks
} = wp.blockLibrary;

const { serialize, parse } = wp.blocks;

function Editor( { startingContent, formName, inputName } ) {

	useEffect( () => {
		registerCoreBlocks();
		var allowedBlocks = window.JetFormEditorData.allowedBlocks;
		getBlockTypes().forEach( function ( blockType ) {
			if ( allowedBlocks.indexOf( blockType.name ) === - 1 ) {
				unregisterBlockType( blockType.name );
			}
		} );
	}, [] );

	const [isSaving, setSaving] = useState( false );
	const [showInserter, setShowInserter] = useState( false );
	const [blocks, updateBlocks] = useState( parse( startingContent ) );
	const [fName, updateFormName] = useState( formName );

	const saveSettings = function () {

		setSaving( true );

		wp.apiFetch( {
			method: 'post',
			path: window.JetFormEditorData.action,
			data: {
				body: serialize( blocks ),
				name: fName,
				item_id: window.JetFormEditorData.itemID,
			}
		} ).then( function ( response ) {

			setSaving( false );

			if ( response.success ) {
				if ( response.redirect ) {
					window.location = response.redirect;
				}
			} else {
				alert( response.message );
			}
		} ).catch( function ( response ) {
			alert( response.message );
			setSaving( false );
		} );

	};

	const updateBlocksCallback = function ( newBlocks ) {
		updateBlocks( newBlocks );
	};

	const updateFormNameCallback = function ( event ) {
		updateFormName( event.target.value );
	};

	const editorSettings = wp.data.select( 'core/block-editor' ).getSettings();

	wp.data.select( 'core/editor' ).isEditedPostAutosaveable = () => false;

	editorSettings.__experimentalSetIsInserterOpened = ( isOpen ) => {
		setShowInserter( isOpen );
	};

	return <React.Fragment>
		<SlotFillProvider>
			<DropZoneProvider>
				<BlockEditorProvider
					value={ blocks }
					onInput={ updateBlocksCallback }
					onChange={ updateBlocksCallback }
					settings={ editorSettings }
				>
					<div className="jet-form-builder__header">
						<Inserter/>
						<div className="jet-form-builder__actions">
							<Button
								isPrimary
								isBusy={ isSaving }
								onClick={ saveSettings }
							>
								{ isSaving ? "Saving..." : "Save" }
							</Button>
						</div>
					</div>
					<div className="jet-form-builder__sidebar">
						<BlockInspector/>
					</div>
					<div className="editor-styles-wrapper">
						<Popover.Slot name="block-toolbar"/>
						<BlockEditorKeyboardShortcuts/>
						<WritingFlow>
							<ObserveTyping>
								<div className="edit-post-visual-editor__post-title-wrapper">
									<div className="editor-post-title">
										<div className="wp-block editor-post-title__block">
											<input
												type="text"
												className="editor-post-title__input"
												value={ fName }
												onChange={ updateFormNameCallback }
												placeholder={ 'Add title' }
											/>
										</div>
									</div>
								</div>
								<BlockList/>
							</ObserveTyping>
						</WritingFlow>
					</div>
					<Popover.Slot/>
				</BlockEditorProvider>
			</DropZoneProvider>
		</SlotFillProvider>
		<input type="hidden" name={ inputName } value={ serialize( blocks ) }/>
	</React.Fragment>;
}

export default Editor;

