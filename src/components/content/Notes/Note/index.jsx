import React from 'react'

import * as S from './styles'

import { MdOutlineNotificationAdd, MdPersonAddAlt, MdOutlineColorLens, MdOutlinePhoto, MdOutlineArchive, MdMoreVert, MdOutlinePushPin, MdCheckCircle } from 'react-icons/md'


const Note = ({noteData}) => {
  return (
    <S.Note bgColor={noteData?.bgColor} bgImage={noteData?.bgImage}>
    <S.Pin>
      <MdOutlinePushPin />
    </S.Pin>
    <S.Select>
      <MdCheckCircle />
    </S.Select>
    <S.NoteContent>
    <h1>{noteData?.title}</h1>
    <p>{noteData?.content}</p>
    <img src={noteData?.image}></img>
    </S.NoteContent>
  <S.NoteActions>
    <S.Action><MdOutlineNotificationAdd/></S.Action>
    <S.Action><MdPersonAddAlt/></S.Action>
    <S.Action><MdOutlineColorLens/></S.Action>
    <S.Action><MdOutlinePhoto/></S.Action>
    <S.Action><MdOutlineArchive/></S.Action>
    <S.Action><MdMoreVert/></S.Action>
  </S.NoteActions>
  </S.Note>
  )
}

export default Note