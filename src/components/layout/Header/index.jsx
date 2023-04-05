import React from 'react'

import * as S from './styles'

import { MdMenu, MdSearch } from 'react-icons/md'

import { useDispatch } from 'react-redux'
import { change } from '../../../features/navbar/navbarSlice'

const Header = () => {
  const dispatch = useDispatch();
  return (
    <S.HeaderWrapper>
    <S.HeaderContainer>
        <S.Left>
           <S.LogoWrapper>
           <S.Logo>
                <MdMenu onClick={() => dispatch(change())} size={24} />
            </S.Logo>
            <S.Logo>
                <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo" />
                <span>Keep</span>
            </S.Logo>
           </S.LogoWrapper>
            <S.Search>
               <button> <MdSearch size={24} /></button>
                <input type="text" placeholder="Search" />
            </S.Search>
        </S.Left>
        <S.Right>Right</S.Right>
    </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header