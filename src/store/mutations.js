import * as types from "./types";
export default {
	[types.SHOW_NAV]:(state)=>{
		state.blNav=true;
	},
	[types.SHOW_FOOT]:(state)=>{
		state.blFoot=true;
	},[types.SHOW_LOADING]:(state)=>{
		state.blLOADING=true;
	},[types.HIDE_NAV]:(state)=>{
		state.blNav=false;
	},[types.HIDE_LOADING]:(state)=>{
		state.blLoading=false;
	},
	[types.HIDE_FOOT]:(state)=>{
		state.blFoot=false;
	}
}