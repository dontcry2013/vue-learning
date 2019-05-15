import Vue from "vue";
import toastr from "../../../core/toastr";

const NAMESPACE = "/api/speaking";

import Service from "../../../core/service";
let service = new Service("speaking"); 

export const getSpeakingList = function ({ commit }) {
	service.rest("get").then((data) => {
		commit("UPDATE", data);
	}).catch((err) => {
		toastr.error(err.message);
	});
};
