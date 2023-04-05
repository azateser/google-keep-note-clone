import React from 'react'

import * as S from './styles'

import { MdLightbulbOutline, MdOutlineArchive, MdOutlineDelete, MdOutlineMode, MdOutlineNotificationsNone, MdOutlineLabel } from 'react-icons/md'

import { useSelector, useDispatch } from 'react-redux'
import { change } from '../../../features/navbar/navbarSlice'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const collapsed = useSelector((state) => state.navbar.value);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 768) {
      if (!collapsed) {
        dispatch(change());
      }
    }
  }, [windowWidth]);

  


  return (
    <S.NavWrapper>
    <S.NavContainer collapsed={collapsed}>
      <S.NavItems>
        <S.NavItem active collapsed={collapsed}><S.Icon><MdLightbulbOutline size={24} /></S.Icon><span style={{display: collapsed && 'none'}}>Notes</span></S.NavItem>
        <S.NavItem collapsed={collapsed}><S.Icon><MdOutlineNotificationsNone size={24} /></S.Icon> <span style={{display: collapsed && 'none'}}>Reminders</span></S.NavItem>
        <S.NavItem collapsed={collapsed}><S.Icon><MdOutlineLabel size={24} /></S.Icon> <span style={{display: collapsed && 'none'}}>Tags</span></S.NavItem>
        <S.NavItem collapsed={collapsed}><S.Icon><MdOutlineMode size={24} /></S.Icon> <span style={{display: collapsed && 'none'}}>Edit Tags</span></S.NavItem>
        <S.NavItem collapsed={collapsed}><S.Icon><MdOutlineArchive size={24} /></S.Icon> <span style={{display: collapsed && 'none'}}>Archive</span></S.NavItem>
        <S.NavItem collapsed={collapsed}><S.Icon><MdOutlineDelete size={24} /></S.Icon> <span style={{display: collapsed && 'none'}}>Bin</span></S.NavItem>
      </S.NavItems>
    </S.NavContainer>
    </S.NavWrapper>
  )
}

export default Navbar