
export const saveGlobalComponent = ( objectName, instance ) => {
	window[ objectName ] = {
		...window[ objectName ],
		...instance
	};
}