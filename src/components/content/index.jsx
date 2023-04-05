import React from 'react'
import AddNote from './AddNote/index';
import Notes from './Notes/index';

import * as S from './styles'
import { useEffect } from 'react';
import { useState } from 'react';

import NotesData from '../../mocks/notes.json'
import { useDispatch, useSelector } from 'react-redux';

const Content = () => {

  const notes = useSelector(state => state.notes.notes);


  console.log(notes);
  return (
    <S.ContentWrapper>
        <AddNote />
        <Notes notes={notes} />
    </S.ContentWrapper>
  )
}

export default Content