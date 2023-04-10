import React from 'react'

import * as S from './styles'

import { MdOutlineNotificationAdd, MdPersonAddAlt, MdOutlineColorLens, MdOutlinePhoto, MdOutlineArchive, MdMoreVert, MdOutlinePushPin, MdPushPin, MdCheckCircle } from 'react-icons/md'
import { useDispatch } from 'react-redux';

import { togglePin } from '../../../../features/note/noteSlice'

import { motion } from "framer-motion"


const Note = ({noteData}) => {

  const dispatch = useDispatch();

  const handlePinClick = () => {
    dispatch(togglePin(noteData?.id));
  }

  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.9, translateX: 10, translateY: 100 }}
    animate={{ opacity: 1, scale: 1, translateX: 0, translateY: 0 }}
    transition={{ duration: 0.3 }}
  >
    <S.Note bgColor={noteData?.bgColor} bgImage={noteData?.bgImage}>
    <S.Pin onClick={() => handlePinClick()} pinned={noteData?.pinned}>
      {noteData?.pinned ? <MdPushPin /> : <MdOutlinePushPin />}
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
  </motion.div>
  )
}

export default Note