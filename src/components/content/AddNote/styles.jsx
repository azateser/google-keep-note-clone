import styled from "styled-components";

export const AddNoteWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  @media only screen and (max-width: 750px) {
    margin-left: 0px;
  }
`;

export const Container = styled.div`
  margin-top: 24px;
  box-shadow: ${(props) =>
    props.editor
      ? "0 3px 5px rgba(0,0,0,.3)"
      : "0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149)"};
  border-radius: 8px;
  min-width: 586px;
  height: 100%;
  min-height: 20px;
  padding: 0 4px;
  gap: 10px;
  transition: all 0.1s ease-in-out;
  background-color: ${(props) => props.color};
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  transition: all 0.35s ease-in-out;

  @media only screen and (max-width: 750px) {
    min-width: 100%;
  }
`;

export const ActionIcon = styled.button`
  font-size: 24px;
  color: #5f6368;
  min-width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  opacity: ${(props) => (props.editor ? "0" : "1")};
  visibility: ${(props) => (props.editor ? "hidden" : "visible")};
  display: ${(props) => (props.editor ? "none" : "flex")};

  &:hover {
    background-color: rgba(95, 99, 104, 0.157);
  }
`;

export const Title = styled.div`
  padding: 0px 12px;
  padding-top: 12px;
  opacity: ${(props) => (props.editor ? "1" : "0")};
  visibility: ${(props) => (props.editor ? "visible" : "hidden")};
  display: ${(props) => (props.editor ? "flex" : "none")};

  input {
    color: #000000;
    background-color: transparent;
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: 700;
    width: 100%;
    border: none;
    outline: none;
    min-height: 20px;
    border-radius: 8px;
    ::placeholder {
      color: #2d2d2d;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  min-height: 20px;
  padding: 0 12px;
  gap: 10px;

  input {
    color: #000000;
    background-color: transparent;
    font-size: 16px;
    font-weight: 500;
    width: 100%;
    border: none;
    outline: none;
    min-height: 46px;
    border-radius: 8px;
    ::placeholder {
      color: #2d2d2d;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 4px;
  margin-left: 4px;
  transition: all 0.2s ease-in-out;
  gap: 20px;
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
  font-size: 18px;
  position: relative;

  &:hover {
    background-color: rgba(95, 99, 104, 0.157);
  }

  .undo {
    transform: rotate(90deg);
  }
  .redo {
    transform: rotate(270deg);
  }

  .disable {
    color: #dadce0;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  opacity: ${(props) => (props.editor ? "1" : "0")};
  visibility: ${(props) => (props.editor ? "visible" : "hidden")};
  display: ${(props) => (props.editor ? "flex" : "none")};

  @media only screen and (max-width: 750px) {
    flex-direction: column;
  }
`;

export const Close = styled.button`
  padding: 8px 20px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;

  &:hover {
    background-color: rgba(95, 99, 104, 0.039);
  }

  &:focus {
    background-color: rgba(95, 99, 104, 0.157);
  }

  @media only screen and (max-width: 750px) {
    margin-bottom: 4px;
  }
`;

export const Save = styled.button`
  margin-right: 10px;
  padding: 8px 20px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 4px;
  font-size: 14px;

  &:hover {
    background-color: rgba(184, 216, 255, 0.265);
  }

  &:focus {
    background-color: rgba(105, 173, 255, 0.408);
  }

  @media only screen and (max-width: 750px) {
    margin-bottom: 4px;
  }
`;

export const BackgroundModal = styled.div`
  position: absolute;
  bottom: -120px;
  left: -30px;
  background-color: #ffff;
  justify-content: center;
  align-items: center;
  z-index: 100;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 2px 6px 2px rgba(60, 64, 67, 0.149);
  border-radius: 8px;
  padding-top: 8px;
  padding-bottom: 8px;

  @media only screen and (max-width: 750px) {
    bottom: -120px;
    left: auto;
  }
`;

export const Colors = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dadce0;
  padding-bottom: 8px;
`;

export const ColorsItem = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  margin: 0 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 750px) {
    margin: 0 1px;
  }
  border: ${(props) =>
    props.selected ? "2px solid #a142f4!important" : "2px solid #dedede"};
  position: relative;
  ${(props) =>
    props.selected &&
    `
  &:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" focusable="false" class="AHe6Kc-LgbsSe-gk6SMd-g6cJHd NMm5M"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>');
    position: absolute;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(66 108 24);
    filter: invert(1);
    top: -6px;
    right: -7px;
    z-index: 000000;
    transition: opacity 0.3s ease;
  }
`}
  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.87) !important;
  }
`;

export const Images = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 8px;
`;

export const ImageItems = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-image: url(${(props) => props.image});
  cursor: pointer;
  margin: 0 4px;
  background-size: contain;
  border: ${(props) =>
    props.selected ? "2px solid #a142f4!important" : "2px solid #dedede"};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: relative;
  @media only screen and (max-width: 750px) {
    margin: 0 2px;
  }
  ${(props) =>
    props.selected &&
    `
  &:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" focusable="false" class="AHe6Kc-LgbsSe-gk6SMd-g6cJHd NMm5M"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></svg>');
    position: absolute;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(66 108 24);
    filter: invert(1);
    top: -6px;
    right: -7px;
    z-index: 000000;
    transition: opacity 0.3s ease;
  }
`}
  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.87) !important;
  }
`;
