import initCommon from './init/initCommon';
import initElementor from './init/initElementor';
import BaseSignal from './signals/BaseSignal';
import ReactiveVar from './reactive/ReactiveVar';
import LoadingReactiveVar from './reactive/LoadingReactiveVar';
import InputData from './inputs/InputData';
import HtmlMacro from './html.macro/HtmlMacro';
import Observable from './Observable';
import ReportingInterface from './reporting/ReportingInterface';
import CheckboxData from './inputs/CheckboxData';
import MultiSelectData from './inputs/MultiSelectData';
import CalculatedFormula from './calculated/CalculatedFormula';

(
	function ( $ ) {

		window.JetFormBuilderAbstract = {
			...(
				window.JetFormBuilderAbstract ?? {}
			),
			InputData,
			BaseSignal,
			HtmlMacro,
			ReactiveVar,
			LoadingReactiveVar,
			Observable,
			ReportingInterface,
			CheckboxData,
			MultiSelectData,
			CalculatedFormula,
		};

		$( initCommon );
		$( window ).on( 'elementor/frontend/init', initElementor );
	}
)( jQuery );