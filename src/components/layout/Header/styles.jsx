import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 65px;
  background-color: #fff;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
  padding: 0 8px;
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  min-width: 232px;
  display: flex;
  align-items: center;
  padding-right: 10px;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  user-select: none;
  svg {
    padding: 12px;
    margin: 0 4px;
    border-radius: 50%;
    cursor: pointer;

    &:hover {
      background-color: rgba(60, 64, 67, 0.08);
      outline: none;
    }
  }
  img {
    width: 40px;
    height: 40px;
  }
  span {
    font-family: "Product Sans", sans-serif;
    font-size: 22px;
    font-weight: 400;
    color: #5f6368;
  }
`;
export const Search = styled.div`
  align-items: center;
  flex: 1 1 auto;
  width: 100%;
  max-width: 720px;
  display: flex;
  background: #f1f3f4;
  border: 1px solid transparent;
  border-radius: 8px;
  padding-right: 30px;
  padding-left: 5px;

  @media only screen and (max-width: 750px) {
    display: none;
  }

  button {
    padding: 0 5px;
    border: none;
    background: none;
    padding: 8px;
    margin: 3px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: pointer;
    &:hover {
      background-color: rgba(60, 64, 67, 0.08);
    }

    svg {
      fill: #5f6368;
    }
  }
  input {
    background: transparent;
    outline: none;
    border: none;
    height: 46px;
    width: 100%;
    font-size: 16px;
  }
`;

export const Right = styled.div``;
