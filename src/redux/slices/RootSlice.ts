import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        email: 'Email',
        phone_number: "pPhone NUmber",
        address: "Address"
    },
    reducers: {
        // action submitted elsewhere - written to state.name
        chooseName: (state, action) => { state.name = action.payload }, // we are doing, is setting the Input to the state.name
        choosePhoneNumber: (state, action) => { state.phone_number = action.payload },
        chooseEmail: (state,action) => { state.email = action.payload },
        chooseAddress: (state, action) => { state.address = action.payload }
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseEmail, choosePhoneNumber, chooseAddress } = rootSlice.actions