import React from 'react'
import AddNote from './AddNote/index';
import Notes from './Notes/index';

import * as S from './styles'
import { useEffect } from 'react';
import { useState } from 'react';

import NotesData from '../../mocks/notes.json'
import { useDispatch, useSelector } from 'react-redux';
import Pinned from './Notes/Pinned';

const Content = () => {

  const notes = useSelector(state => state.notes.notes);
  
  return (
    <S.ContentWrapper>
        <AddNote />
        <Pinned notes={notes}  />
        <Notes notes={notes} />
    </S.ContentWrapper>
  )
}

export default Content