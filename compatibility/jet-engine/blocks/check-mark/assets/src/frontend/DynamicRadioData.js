const {
	      RadioData,
      } = JetFormBuilderAbstract;

function DynamicRadioData() {
	RadioData.call( this );
}

DynamicRadioData.prototype = Object.create( RadioData.prototype );

export default DynamicRadioData;