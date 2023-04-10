import React from 'react'

import * as S from './styles'

import Masonry from 'react-masonry-css'

import './style.css'

import Note from '../Note/index';
import { useSelector } from 'react-redux';


const Pinned = ({notes}) => {

  const activePinnedCount = useSelector((state) => state.notes.activePinnedCount);

console.log(notes)
  const breakpointColumnsObj = {
    default: 6,
    1800: 5,
    1500: 4,
    1200: 3,
    900: 2,
    750: 1
  };
  return (
    <S.PinnedWrapper>
      {activePinnedCount > 0 && <S.PinnedTitle>Pinned</S.PinnedTitle>}
    <Masonry
    breakpointCols={breakpointColumnsObj}
    className="my-masonry-grid"
    columnClassName="my-masonry-grid_column">
      {notes?.map((note) => ( note.pinned &&
        <Note key={note?.id} noteData={note} />
      ))}
  </Masonry>
      </S.PinnedWrapper>
  )
}

export default Pinned