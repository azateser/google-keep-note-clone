import React from "react";

import * as S from "./styles";

import {
  MdUTurnLeft,
  MdUTurnRight,
  MdOutlineNotificationAdd,
  MdPersonAddAlt,
  MdOutlineColorLens,
  MdOutlineArchive,
  MdOutlineCheckBox,
  MdMoreVert,
  MdOutlineBrush,
  MdOutlineImageNotSupported,
  MdOutlinePhoto,
  MdOutlineInvertColorsOff,
} from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import {
  showEditor,
  hiddeEditor,
} from "../../../features/newNoteBox/newNoteBoxSlice";

import { addNote } from "../../../features/note/noteSlice";
import { useState } from "react";

import { Colors, Images } from "./constants";

const AddNote = () => {
  const editor = useSelector((state) => state.newNoteBox.value);
  const dispatch = useDispatch();

  const notesLength = useSelector((state) => state.notes.notes.length);

  const [newNoteData, setNewNoteData] = useState({});

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [showBackgroundModal, setShowBackgroundModal] = useState(false);

  const handleTitleChange = (e) => {
    setNewNoteData({
      ...newNoteData,
      title: e.target.value,
    });
  };
  const handleContentChange = (e) => {
    setNewNoteData({
      ...newNoteData,
      content: e.target.value,
    });
  };

  const selectColor = (color) => {
    setSelectedColor(color);
    setSelectedImage(null);
    setNewNoteData({
      ...newNoteData,
      bgColor: color,
    });
  };

  const selectImage = (image) => {
    setSelectedImage(image);
    setSelectedColor(null);
    setNewNoteData({
      ...newNoteData,
      bgImage: image,
    });
  };

  const handleAddNote = () => {
    dispatch(
      addNote({
        id: notesLength,
        title: newNoteData.title,
        content: newNoteData.content,
        bgColor: newNoteData.bgColor,
        bgImage: newNoteData.bgImage,
      })
    );
  };

  console.log(newNoteData);

  return (
    <S.AddNoteWrapper>
      <S.Container editor={editor} color={selectedColor} image={selectedImage}>
        <S.Title editor={editor}>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => handleTitleChange(e)}
          />
        </S.Title>
        <S.Content>
          <input
            onClick={() => dispatch(showEditor())}
            type="text"
            placeholder="Keep Note..."
            onChange={(e) => handleContentChange(e)}
          />
          <S.ActionIcon editor={editor}>
            <MdOutlineCheckBox />
          </S.ActionIcon>
          <S.ActionIcon editor={editor}>
            <MdOutlineBrush />
          </S.ActionIcon>
          <S.ActionIcon editor={editor}>
            <MdOutlinePhoto />
          </S.ActionIcon>
        </S.Content>
        <S.Footer editor={editor}>
          <S.Actions>
            <S.Action>
              <MdOutlineNotificationAdd />
            </S.Action>
            <S.Action>
              <MdPersonAddAlt />
            </S.Action>
            <S.Action
              onClick={() => setShowBackgroundModal(!showBackgroundModal)}
            >
              <MdOutlineColorLens />
              {showBackgroundModal && (
                <S.BackgroundModal>
                  <S.Colors>
                    <S.ColorsItem
                      selected={selectedColor === null}
                      onClick={() => setSelectedColor(null)}
                    >
                      <MdOutlineInvertColorsOff />
                    </S.ColorsItem>

                    {Colors?.map((item) => (
                      <S.ColorsItem
                        selected={selectedColor === item?.color}
                        key={item?.id}
                        color={item?.color}
                        onClick={() => selectColor(item?.color)}
                      />
                    ))}
                  </S.Colors>

                  <S.Images>
                    <S.ImageItems
                      selected={selectedImage === null}
                      onClick={() => setSelectedImage(null)}
                    >
                      <MdOutlineImageNotSupported />
                    </S.ImageItems>
                    {Images?.map((item) => (
                      <S.ImageItems
                        selected={selectedImage === item?.image}
                        key={item?.id}
                        image={item?.image}
                        onClick={() => selectImage(item?.image)}
                      />
                    ))}
                  </S.Images>
                </S.BackgroundModal>
              )}
            </S.Action>
            <S.Action>
              <MdOutlinePhoto />
            </S.Action>
            <S.Action>
              <MdOutlineArchive />
            </S.Action>
            <S.Action>
              <MdMoreVert />
            </S.Action>
            <S.Action>
              <MdUTurnLeft className="undo disable" />
            </S.Action>
            <S.Action>
              <MdUTurnRight className="redo disable" />
            </S.Action>
          </S.Actions>
          <div style={{ dispay: "flex" }}>
            <S.Close onClick={() => dispatch(hiddeEditor())}>Close</S.Close>
            <S.Save onClick={handleAddNote}>Save</S.Save>
          </div>
        </S.Footer>
      </S.Container>
    </S.AddNoteWrapper>
  );
};

export default AddNote;
