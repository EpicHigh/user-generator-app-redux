export default (state = {index: 0}, action) => {
	switch (action.type) {
		case "NEXT_USER":
			return {...state, index: state.index + 1};
		case "PREVIOUS_USER":
			return {...state, index: state.index - 1};
		default:
			return state
	}
};