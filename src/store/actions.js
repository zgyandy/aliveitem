import * as types from "./types";

export default {
	showNav:({commit,state})=>{
		commit(types.SHOW_NAV);
	},
	showFoot:({commit,state})=>{
		commit(types.SHOW_FOOT);
	},
	showLoading:({commit,state})=>{
		commit(types.SHOW_LOADING);
	},
	hideNav:({commit,state})=>{
		commit(types.HIDE_NAV);
	},
	hideFoot:({commit,state})=>{
		commit(types.HIDE_FOOT)
	},
	hideLoading:({commit,state})=>{
		commit(types.HIDE_LOADING)
	}

}