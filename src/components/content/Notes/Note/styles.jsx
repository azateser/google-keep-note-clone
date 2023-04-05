import styled from "styled-components";

export const NoteActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  visibility: hidden;
  transition: all 0.2s ease-in-out;
  opacity: 0;
`;

export const Pin = styled.button`
  border-radius: 50%;
  position: absolute;
  height: 32px;
  width: 32px;
  right: 12px;
  top: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  color: rgb(95, 99, 104);
  opacity: 1;
  visibility: hidden;
  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: rgba(95, 99, 104, 0.157);
  }
`;

export const Select = styled.button`
  border: none;
  border-radius: 50%;
  left: -18px;
  top: -16px;
  cursor: pointer;
  opacity: 1;
  visibility: hidden;
  transition: all 0.1s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
  opacity: 0;
  position: absolute;
  z-index: 2011;
  font-size: 22px;
`;


export const Note = styled.div`
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#fff")};
  background-image: ${(props) => (props.bgImage ? `url(${props.bgImage})` : "none")};
  background-position-x: right;
    background-position-y: bottom;
    background-size: cover;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 12px;
  padding-bottom: 4px;
  width: 100%;
  max-width: 250px;
  height: max-content;
  min-height: 100px;
  margin-bottom: 10px;
  position: relative;

  @media only screen and (max-width: 750px) {
    max-width: 100%;
  }

  &:hover ${NoteActions} {
    display: flex;
    opacity: 1;
    visibility: visible;
  }

  &:hover ${Pin} {
    display: flex;
    opacity: 1;
    visibility: visible;
  }
  &:hover ${Select} {
    display: flex;
    opacity: 1;
    visibility: visible;
  }

  &:hover {
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
      0 1px 3px 1px rgba(60, 64, 67, 0.149);
  }

  h1 {
    letter-spacing: 0.00625em;
    font-family: "Open Sans", Roboto, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5rem;
  }

  p {
    font-family: "Open Sans", Roboto, Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0;
    margin-top: 4px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-top: 30px;
    border-radius: 8px;
    cursor: pointer;
  }

`;


export const NoteContent = styled.div`
  min-height: 60px;
`;

export const Action = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  font-size: 16px;

  &:hover {
    background-color: rgba(95, 99, 104, 0.157);
  }
`;
