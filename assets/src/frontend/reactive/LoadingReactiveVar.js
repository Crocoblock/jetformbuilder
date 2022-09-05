import ReactiveVar from '../ReactiveVar';

class LoadingReactiveVar extends ReactiveVar {

	start() {
		this.current = true;
	}

	end() {
		this.current = false;
	}

}
export default LoadingReactiveVar;