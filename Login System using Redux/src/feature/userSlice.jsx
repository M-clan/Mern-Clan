import { createSlice } from "@reduxjs/toolkit";

export const userSlice =createSlice(
    {
      name:"user",
      initialState:{
        user:null
      },
      reducers:{                              //reducer is gonna act as a function==> going to update our state or update redux
        login:(state,action)=>{
            state.user = action.payload        //user will be updated by the payload that is being passed
        },
        logic:(state)=>{ // here we dont need any payload : means we doesnt have anything to update (name , email ...etc)
            state.user = null;

        }
      }
    } 
)
 export const {login,logout} = userSlice.actions;   //these are the acction
 export  const selectUser = (state) => state.user.user;   //grab the data from redux using selectUser 
//here "state.user" is state and again another  ".user"is for updating it with more information ,so defined in another obect ".user" 
export default userSlice.reducer;