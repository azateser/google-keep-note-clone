import { createSlice } from "@reduxjs/toolkit";

import NotesData from "../../mocks/notes.json";

const initialState = {
  notes: NotesData || [],
  activeNote: null,
};


export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      return {
        ...state,
        notes: [action.payload, ...state.notes]
      };
    },
    setActiveNote: (state, action) => {
      state.activeNote = action.payload;
    },
    updateNote: (state, action) => {
      const noteIndex = state.notes.findIndex(
        (note) => note.id === action.payload.id
      );
      state.notes[noteIndex] = action.payload;
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      state.activeNote = null;
    },
  },
});

export const { addNote, setActiveNote, updateNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;