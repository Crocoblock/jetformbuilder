window.JetFormBuilderAbstract = {
	CalculatedFormula: jest.fn(),
	InputData: jest.fn(),
	BaseSignal: jest.fn(),
};

JetFormBuilderAbstract.InputData.prototype.setNode = () => {};
