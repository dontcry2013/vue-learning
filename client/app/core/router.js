"use strict";

import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../modules/home";
import Counter from "../modules/counter";
import Devices from "../modules/devices";
import Posts from "../modules/posts";
import Profile from "../modules/profile";
import Speaking from "../modules/speaking";
import Setting from "../modules/speaking";

Vue.use(VueRouter);

export default new VueRouter({
	mode: "hash",
	routes: [
		{ path: "/", component: Home },
		{ path: "/devices", component: Devices },
		{ path: "/posts", component: Posts },
		{ path: "/counter", component: Counter },
		{ path: "/speaking", component: Speaking },
		{ path: "/profile", component: Profile },
		{ path: "/settings", component: Speaking },
		// { path: "/users", component: User, meta: { needRole: "admin" } },
		// { path: "*", component: NotFound }
	]
});