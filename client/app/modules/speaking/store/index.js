const state = {
	speakingList: {}
};

const mutations = {
	["UPDATE"] (state, speakingList) {
		state.speakingList = speakingList;
	}
};

import * as getters from "./getters";
import * as actions from "./actions";

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
};