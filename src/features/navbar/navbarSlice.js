import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    change: (state) => {
      state.value = !state.value
    }
  },
})

export const { change } = navbarSlice.actions

export default navbarSlice.reducer