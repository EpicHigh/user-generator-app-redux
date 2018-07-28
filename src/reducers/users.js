export default (state = [], action) => {
	switch (action.type) {
		case "GENERATE_USER":
			return [...state, action.user];
		default:
			return state
	}
}