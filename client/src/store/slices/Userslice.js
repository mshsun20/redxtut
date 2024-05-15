import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser: (state, action) => {
            // console.log(action.payload)
            state.push(action.payload)
        },
        removeUser: (state, action) => {
            state.pop(action.payload)
        },
        deleteUsers: (state, action) => {
            console.log(state)
            while (state) {
                state.pop(action.payload)
            }
        }
    }
})

// console.log(userSlice.actions)

export default userSlice.reducer
export const {addUser, removeUser, deleteUsers} = userSlice.actions