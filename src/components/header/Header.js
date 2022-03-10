import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import Flyout from './Flyout'
import menuIcon from '../../images/icons/menu-icon.svg'

const StyledHeader = styled.header`
  position: relative;
  padding: 40px 20px 8px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // border: 1px solid lightcoral;

  @media (min-width: 768px) {
    padding-left: 80px;
    padding-right: 80px;
  }

  @media (min-width: 1024px) {
    padding-left: 144px;
    padding-right: 144px;
  }
`

const NameText = styled.h5`
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px dashed green;
`

const MenuIcon = styled.img`
  width: 32px;
  // border: 1px dashed green;

  @media (min-width: 768px) {
    display: none;
  }
`

const LinksList = styled.ul`
  display: none;
  padding-left: 0px;
  // border: 2px solid orange;

  & > li {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
    color: #586165;
    list-style: none;
    // border: 1px dashed green;
  }

  & > li > a {
    color: #586165;
    text-decoration: none;
  }

  & > li:nth-child(2) {
    margin-left: 40px;
    margin-right: 40px;
  }

  & > li > a:hover {
    color: #93DE4E;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`

export default function Header() {
  return (
    <StyledHeader>
      <NameText>Stedman Designs</NameText>
      <LinksList>
        <li><Link to={'/my-work'} activeClassName={'active-link'}>Work</Link></li>
        <li><Link to={'/about-me'} activeClassName={'active-link'}>About</Link></li>
        <li><Link to={'/contact-me'} activeClassName={'active-link'}>Contact</Link></li>
      </LinksList>
      <MenuIcon src={menuIcon} alt={'Click to open menu'} />
      <Flyout />
    </StyledHeader>
  )
}
