import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const newNoteBoxSlice = createSlice({
  name: 'addNoteEditor',
  initialState,
  reducers: {
    showEditor: (state) => {
      state.value = true
    },
    hiddeEditor: (state) => {
      state.value = false
    }
  },
})

export const { showEditor, hiddeEditor } = newNoteBoxSlice.actions

export default newNoteBoxSlice.reducer