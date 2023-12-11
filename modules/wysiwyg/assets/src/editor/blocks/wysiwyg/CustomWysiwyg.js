// 22px - 1 row

function CustomWysiwyg( {
	rows = 8,
	...props
} ) {

	let fieldHeight = rows * 22;

	// min-height: 100
	fieldHeight = 100 > fieldHeight ? 100 : fieldHeight;

	return <div { ...props }>
		<div className="wp-editor-container">
			<div
				className="mce-tinymce mce-container mce-panel"
			>
				<div
					className="mce-container-body mce-stack-layout"
				>
					<div
						className="mce-top-part mce-container mce-stack-layout-item mce-first"
					>
						<div className="mce-container-body">
							<div
								className="mce-toolbar-grp mce-container mce-panel mce-first mce-last"
								tabIndex="-1"
								role="group"
							>
								<div
									className="mce-container-body mce-stack-layout"
								>
									<div
										className="mce-container mce-toolbar mce-stack-layout-item mce-first mce-last"
										role="toolbar"
									>
										<div
											className="mce-container-body mce-flow-layout"
										>
											<div
												className="mce-container mce-flow-layout-item mce-first mce-btn-group"
												role="group"
											>
												<div>
													<div
														className="mce-widget mce-btn mce-menubtn mce-fixed-width mce-listbox mce-first mce-last mce-btn-has-text"
														tabIndex="-1"
														aria-labelledby="mceu_0"
														role="button"
														aria-haspopup="true"
													>
														<button
															role="presentation"
															type="button"
															tabIndex="-1">
																		<span
																			className="mce-txt">Paragraph</span>
															<i className="mce-caret"/>
														</button>
													</div>
												</div>
											</div>
											<div
												className="mce-container mce-flow-layout-item mce-btn-group"
												role="group"
											>
												<div>
													<div
														className="mce-widget mce-btn mce-first"
														tabIndex="-1"
														aria-pressed="false"
														role="button"
														aria-label="Bold (Ctrl+B)"
													>
														<button
															role="presentation"
															type="button"
															tabIndex="-1"
														>
															<i className="mce-ico mce-i-bold"/>
														</button>
													</div>
													<div
														className="mce-widget mce-btn"
														tabIndex="-1"
														aria-pressed="false"
														role="button"
														aria-label="Italic (Ctrl+I)"
													>
														<button

															role="presentation"
															type="button"
															tabIndex="-1">
															<i className="mce-ico mce-i-italic"/>
														</button>
													</div>
													<div
														className="mce-widget mce-btn"
														tabIndex="-1"
														aria-pressed="false"
														role="button"
														aria-label="Strikethrough (Shift+Alt+D)">
														<button

															role="presentation"
															type="button"
															tabIndex="-1">
															<i className="mce-ico mce-i-strikethrough"/>
														</button>
													</div>
													<div
														className="mce-widget mce-btn mce-last"
														tabIndex="-1"
														aria-pressed="false"
														role="button"
														aria-label="Blockquote (Shift+Alt+Q)">
														<button

															role="presentation"
															type="button"
															tabIndex="-1">
															<i className="mce-ico mce-i-blockquote"/>
														</button>
													</div>
												</div>
											</div>
											<div
												className="mce-container mce-flow-layout-item mce-btn-group"
												role="group">
												<div
												>
													<div
														className="mce-widget mce-btn mce-first"
														tabIndex="-1"
														aria-pressed="false"
														role="button"
														aria-label="Bulleted list (Shift+Alt+U)">
														<button

															role="presentation"
															type="button"
															tabIndex="-1">
															<i className="mce-ico mce-i-bullist"/>
														</button>
													</div>
													<div
														className="mce-widget mce-btn mce-last"
														tabIndex="-1"
														aria-pressed="false"
														role="button"
														aria-label="Numbered list (Shift+Alt+O)">
														<button

															role="presentation"
															type="button"
															tabIndex="-1">
															<i className="mce-ico mce-i-numlist"/>
														</button>
													</div>
												</div>
											</div>
											<div
												className="mce-container mce-flow-layout-item mce-btn-group"
												role="group">
												<div
												>
													<div
														className="mce-widget mce-btn mce-first"
														tabIndex="-1"
														aria-pressed="false"
														role="button"
														aria-label="Align left (Shift+Alt+L)">
														<button

															role="presentation"
															type="button"
															tabIndex="-1">
															<i className="mce-ico mce-i-alignleft"/>
														</button>
													</div>
													<div
														className="mce-widget mce-btn"
														tabIndex="-1"
														aria-pressed="false"
														role="button"
														aria-label="Align center (Shift+Alt+C)">
														<button

															role="presentation"
															type="button"
															tabIndex="-1">
															<i className="mce-ico mce-i-aligncenter"/>
														</button>
													</div>
													<div
														className="mce-widget mce-btn mce-last"
														tabIndex="-1"
														aria-pressed="false"
														role="button"
														aria-label="Align right (Shift+Alt+R)">
														<button

															role="presentation"
															type="button"
															tabIndex="-1">
															<i className="mce-ico mce-i-alignright"/>
														</button>
													</div>
												</div>
											</div>
											<div
												className="mce-container mce-flow-layout-item mce-btn-group"
												role="group">
												<div
												>
													<div

														className="mce-widget mce-btn mce-first"
														tabIndex="-1"
														aria-pressed="false"
														role="button"
														aria-label="Insert/edit link (Ctrl+K)">
														<button

															role="presentation"
															type="button"
															tabIndex="-1">
															<i className="mce-ico mce-i-link"/>
														</button>
													</div>
													<div

														className="mce-widget mce-btn mce-last"
														tabIndex="-1"
														role="button"
														aria-label="Remove link (Shift+Alt+S)">
														<button

															role="presentation"
															type="button"
															tabIndex="-1">
															<i className="mce-ico mce-i-unlink"/>
														</button>
													</div>
												</div>
											</div>
											<div
												className="mce-container mce-flow-layout-item mce-last mce-btn-group"
												role="group">
												<div
												>
													<div

														className="mce-widget mce-btn mce-first"
														tabIndex="-1"
														role="button"
														aria-label="Undo (Ctrl+Z)"
														aria-disabled="false">
														<button

															role="presentation"
															type="button"
															tabIndex="-1">
															<i className="mce-ico mce-i-undo"/>
														</button>
													</div>
													<div
														className="mce-widget mce-btn mce-last mce-disabled"
														tabIndex="-1"
														role="button"
														aria-label="Redo (Ctrl+Y)"
														aria-disabled="true">
														<button

															role="presentation"
															type="button"
															tabIndex="-1">
															<i className="mce-ico mce-i-redo"/>
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="mce-edit-area mce-container mce-panel mce-stack-layout-item"
						tabIndex="-1"
						role="group"
						style={ {
							borderWidth: '1px 0px 0px',
							height: fieldHeight + 'px',
						} }
					>
						<div
							style={ {
								padding: '9px 10px',
							} }
						>
							<p
								style={ {
									fontSize: '16px',
									lineHeight: 1.5,
									fontFamily: 'Georgia, "Times New Roman", "Bitstream Charter", Times, serif',
								} }
							>Hello world!
							</p>
						</div>
					</div>
					<div
						className="mce-statusbar mce-container mce-panel mce-stack-layout-item mce-last"
						tabIndex="-1" role="group"
						style={ {
							borderWidth: '1px 0px 0px',
						} }
					>
						<div
							className="mce-container-body mce-flow-layout">
							<div
								className="mce-path mce-flow-layout-item mce-first">
								<div role="button"
								     className="mce-path-item mce-last"
								     data-index="0" tabIndex="-1"
								     aria-level="1">p
								</div>
							</div>
							<div
								className="mce-flow-layout-item mce-last mce-resizehandle"
							>
								<i className="mce-ico mce-i-resize"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>;
}

export default CustomWysiwyg;