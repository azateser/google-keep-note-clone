import styled from "styled-components";

export const NavWrapper = styled.nav`
  background-color: #fff;
  padding-top: 8px;
  transition: all 0.1s ease-in-out;
  min-width: 85px;
`;

export const NavContainer = styled.div`
  transition: all 0.1s ease-in-out;
  width: ${(props) => (props.collapsed ? "85px" : "280px")};
  min-width: 85px;
`;

export const NavItems = styled.ul``;

export const NavItem = styled.li`
  border-radius: 0 25px 25px 0;
  height: 48px;
  min-width: 48px;
  font-family: "Open Sans", Roboto, Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid transparent;
  background-color: ${(props) => (props.active ? "#feefc3" : "#fff")};
  color: #202124;
  padding: 0 12px;

  svg{
    fill: ${(props) => (props.active ? "#202124" : "#5f6368")};
  }

  &:hover {
    background-color: ${(props) => !props.active && "#f1f3f4"};
    cursor: pointer;
  }
  
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-left: 22px;
    user-select: none;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  min-width: 48px;
  color: inherit;
`;