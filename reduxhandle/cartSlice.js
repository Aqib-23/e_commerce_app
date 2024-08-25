import { createSlice } from "@reduxjs/toolkit";

export const cartslice = createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addtocart:(state , action)=>{
            const payload = action.payload
            const exsititemfind = state.findIndex(item => item.id == payload.id)
            if(exsititemfind == -1){
                state.push(action.payload)
            }
        },

        removetocart:(state , action)=>{
            return state.filter(item=>item.id !== action.payload)
        }
    }
});

export const {addtocart , removetocart} = cartslice.actions
export default cartslice.reducer