import { configureStore } from '@reduxjs/toolkit'

import navbarReducer from '../features/navbar/navbarSlice'
import newNoteBoxReducer from '../features/newNoteBox/newNoteBoxSlice'
import NotesReducer from '../features/note/noteSlice'

export const store = configureStore({
  reducer: {
    navbar: navbarReducer,
    newNoteBox: newNoteBoxReducer,
    notes: NotesReducer,
  },
})